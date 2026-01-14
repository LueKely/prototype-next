import OverviewCardSection, {
  Tstats,
} from "@/components/overview-card-section";
import { columns } from "@/components/table/schedule-column";
import { ScheduleDataTable } from "@/components/table/schedule-data-table";

export default async function Page() {
  const dummy: Tstats = {
    totalCallDuration: 110,
    totalCalls: 120,
    totalCost: 130,
  };

  const tableDummy = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
  
  
  return (
    <div className="mt-5 mx-5">
      <OverviewCardSection stats={dummy} />
      <ScheduleDataTable columns={columns} data={tableDummy} />
    </div>
  );
}
