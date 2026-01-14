import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import DashboardHeader from "@/components/dashboard-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-svw ">
        <DashboardHeader>
          <ModeToggle />
          <SidebarTrigger />
        </DashboardHeader>
        {children}
      </main>
    </SidebarProvider>
  );
}
