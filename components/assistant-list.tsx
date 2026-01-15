import Link from "next/link";

export type agent = {
  name: string;
  id: string;
};
export default function AssistantList({ agents }: { agents: agent[] }) {
  return (
    <div className="h-full w-[100px] border-l ">
      {agents.map((agent, index) => {
        return (
          <Link href={"/dashboard/assistants/" + agent.id} key={index}>
            {agent.name}
          </Link>
        );
      })}
    </div>
  );
}
