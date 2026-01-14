import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { ModeToggle } from "@/components/mode-toggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main>
        <div>
          <ModeToggle />
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
