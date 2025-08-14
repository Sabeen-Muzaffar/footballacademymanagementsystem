import { ChatLayout } from "@/components/chat-layout";
import { cookies } from "next/headers";

export default function ChatPage() {
  const layout = cookies().get("react-resizable:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <div className="flex flex-col h-[calc(100vh-4rem-1px)]">
        <div className="space-y-2 mb-4">
            <h1 className="text-3xl font-bold">Chat</h1>
            <p className="text-muted-foreground">
                Communicate with your child's coaches.
            </p>
        </div>
        <div className="flex-1">
            <ChatLayout defaultLayout={defaultLayout} />
        </div>
    </div>
  );
}
