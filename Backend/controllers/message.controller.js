import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if (!conversation) {
      conversation = new Conversation({
        members: [receiverId, senderId],
        messages: [],
      });
    }

    const newMessage = new Message({
      sender: senderId,
      receiverId,
      text: message,
    });

    conversation.messages.push(newMessage._id);

    await Promise.all([
      newMessage.save(),
      conversation.save(),
    ]);

    res.status(200).json({
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: chatUserId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      members: { $all: [chatUserId, senderId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json({ messages: [] });
    }

    res.status(200).json({
      messages: conversation.messages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
