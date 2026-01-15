import AssistantList from "@/components/assistant-list";
import type { agent } from "@/components/assistant-list";
export default function Layout({ children }: { children: React.ReactNode }) {
  const dummy: agent[] = [{ id: "poop", name: "John" }];
  return (
    <div>
      Assistants
      <AssistantList agents={dummy} />
      {children}
    </div>
  );
}
