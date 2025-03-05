import { FaLock } from "react-icons/fa";

const ChatifyPage = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-[65%] bg-slate-900">
      <div className="text-slate-200 w-[60%]">
        <div className="flex gap-2 justify-center items-center">
          <img className="w-20" src="./public/live-chat.png" alt="live-chat" />
          <h2 className="text-3xl font-bold">Lets's Chat with Chatify</h2>
        </div>
        <p className="text-sm text-slate-400 font-mono mt-3 text-center">
          Stay connected with your bestie through secure and private messaging.
          Enjoy fun, seamless conversations with end-to-end encryption, ensuring
          your chats remain safe. Chat freely, anytime, anywhere!
        </p>
      </div>

      <div className="absolute bottom-10 flex items-center gap-1 text-slate-400">
        <FaLock />
        <p>You personal messages are end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default ChatifyPage;
