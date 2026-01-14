import OverviewCardSection, {
  Tstats,
} from "@/components/overview-card-section";

export default async function Page() {
  const dummy: Tstats = {
    totalCallDuration: 110,
    totalCalls: 120,
    totalCost: 130,
  };
  return (
    <div className="mt-5 mx-5">
      <OverviewCardSection stats={dummy} />
    </div>
  );
}
