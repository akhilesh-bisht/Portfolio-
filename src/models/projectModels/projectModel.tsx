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
    name: "FarmStock – Inventory & Sales PWA for Agri Businesses",
    description:
      "A PWA for managing inventory, sales, credits, and purchases in agriculture. Includes invoice creation, alerts, analytics, and full API integration.",
    logo: dashboard,
    skills: [
      "JavaScript",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Graph.js",
      "Framer Motion",
      "MySQL",
    ],
    link: "https://pos-frontend-black.vercel.app",
  },
  {
    name: "Email Sequence Sender – Visual Email Automation Tool",
    description:
      "A drag-and-drop tool to create and automate email flows. Built with React Flow, Agenda, and Node.js for managing visual workflows and scheduling emails.",
    logo: email,
    skills: [
      "JavaScript",
      "React",
      "React Flow",
      "Agenda",
      "Node.js",
      "Nodemailer",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    link: "https://email-sequence-app.vercel.app/",
  },
  {
    name: "Hindi Chatbot – GPT-Powered Smart Replies",
    description:
      "A GPT-based chatbot that answers Hindi queries using uploaded documents. Useful for personalized support, Q&A, and document understanding.",
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
    link: "https://chat-bot-chi-one.vercel.app",
  },
  {
    name: "Chat App – Real-Time Messaging with friends",
    description:
      "A full-stack real-time chat app using WebSocket . Ideal for support or team chat with intelligent response suggestions.",
    logo: chat,
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Zustand",
      "Express",
      "WebSocket",
      "MongoDB",
      "Tailwind CSS",
    ],
    link: "https://github.com/akhilesh-bisht/Full-stack-Chat-app",
  },
];
