import UserPrompt from "@/components/UserPrompt";
import bg from "@/assets/bg.png"
import Image from "next/image";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
      template: "Marine Chatbot | %s",
      default: "Marine Chatbot | Welcome",
  },
  description:
      "Marine Chatbot",
};

export default function Home() {
  return (
      // <main className="relative h-screen w-screen bg-gray-100">
      <main className="w-[100vw] h-screen bg-[url('/assests/bg.png')] bg-cover bg-center bg-no-repeat relative">
               <Image
                src={bg}
                fill
                placeholder="blur"
                quality={80}
                className="object-cover object-top"
                alt="Mountains and forests with two cabins"
            />
          {/* Chat Area */}
          <div className="absolute top-0 left-0 right-0 h-[85%] p-4 overflow-y-auto ">
              <ChatMessages />
          </div>

          {/* User Prompt Input */}
          <div className="fixed bottom-0 left-0 right-0 p-4  shadow-md">
              <UserPrompt />
          </div>
      </main>
  );
}

function ChatMessages() {
  const messages = [
      { type: "user", text: "What is React?" },
      { type: "bot", text: "React is a JavaScript library for building user interfaces." },
      { type: "user", text: "Can you explain useState?" },
      { type: "bot", text: "Sure! `useState` is a React Hook that allows you to add state to functional components." },
  ];

  return (
      <div className="space-y-4">
          {messages.map((message, index) => (
              <div
                  key={index}
                  className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                  <div
                      className={`max-w-[75%] p-3 rounded-lg shadow-md ${
                          message.type === "user"
                              ? "bg-cyan-600 text-white"
                              : "bg-gray-200 text-gray-900"
                      }`}
                  >
                      {message.text}
                  </div>
              </div>
          ))}
      </div>
  );
}

