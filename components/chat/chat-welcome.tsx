import { Hash, Megaphone } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
};

export const ChatWelcome = ({
  name,
  type
}: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
        <div className="h-[75px] w-[75px] rounded-full bg-zinc-500 dark:bg-zinc-700 flex items-center justify-center">
          <Megaphone className="h-12 w-12 text-white" />
        </div>
      )}  
      <p className="text-xl md:text-3xl font-bold">
        {type === "channel" ? "🚀 Step into the Exciting World of " : ""}{name}
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
      {
  type === "channel" ? (
    <div className="text-lg mt-4">
      🌟 Get ready to embark on a journey in the {name} channel!
      <br />
      📣 Make waves with your announcements and notifications.
      <br />
      📁 Share your assignments with a flourish by sending PDFs and captivating images!
    </div>
  ) : (
    `This is the start of your conversation with ${name}`
  )
}
      </p>
    </div>
  )
}