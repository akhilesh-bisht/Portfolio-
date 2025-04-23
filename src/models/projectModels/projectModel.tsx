import dashboard from "src/assets/projects/dashboard( sales).png";
import chat from "../../assets/projects/chat app.png";
import email from "../../assets/projects/email-sequesce.png";
import bot from "../../assets/projects/chatbot.png";
export interface ProjectModel {
  name: string;
  description: string;
  logo?: string;
  skills: string[];
  link: string;
}

export const projectModelDefault = {
  name: "",
  description: "",
  logo: "",
  skills: [],
  link: "",
};

export const projectArray = [
  {
    name: "Email Sequence Sender – Visual Email Automation Tool",
    description:
      "Email Sequence Sender is a React-based tool that allows users to automate email sequences through a visual drag-and-drop flow. Built with React Flow for visual email workflows and Agenda for job scheduling, it empowers users to easily create, schedule, and manage email automation.",
    logo: email,
    skills: [
      "JavaScript",
      "React",
      "React Flow",
      "Agenda",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    link: "https://email-sequence-app.vercel.app/",
  },
  {
    name: "Hindi Chatbot – GPT-Powered Smart Replies Based on Your Data",
    description:
      "The Hindi Chatbot is a conversational AI powered by GPT, allowing users to upload custom documents or data, and ask questions in Hindi. The bot intelligently uses the uploaded content to provide accurate and contextually relevant answers. Ideal for personalized support, document-based Q&A, and understanding Hindi content with ease. 🇮🇳🧠",
    logo: bot,
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "OpenAI GPT-3/4",
      "MongoDB",
      "Tailwind CSS",
    ],
    link: "chat-bot-chi-one.vercel.app",
  },
  {
    name: "Chat App – Real-Time Messaging with GPT-Powered Assistance",
    description:
      "This is a real-time chat application built with React, Node.js, and WebSocket for instant messaging. It also features GPT-powered smart replies for users, offering intelligent and contextual responses during chats. Whether for casual conversations or customer support, this app provides a seamless chat experience. ⚡🗨️",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "WebSocket",
      "OpenAI GPT-3/4",
      "MongoDB",
      "Tailwind CSS",
    ],
    logo: chat,
    link: "https://github.com/akhilesh-bisht/Full-stack-Chat-app",
  },

  {
    name: "Inventory System",
    description: "",
    logo: dashboard,
    skills: ["Javascript", "Vue", "Typescript", "PHP", "MySql"],
    // link: "https://stckrz.com/vueFrontend",
  },
];
