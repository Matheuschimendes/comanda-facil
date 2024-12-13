"use client";

import { AppSidebar } from "@/app/_components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import { Separator } from "@/app/_components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/app/_components/ui/sidebar";

import Comandas from "@/app/comandas/comandas";

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Menu lateral fixo */}
        <AppSidebar />

        {/* Conteúdo principal com scroll */}
        <div className="flex flex-1 flex-col ">
          <header className="flex h-16 shrink-0 items-center gap-2 shadow">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          {/* Container principal com scroll */}
          <main className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>

            <Comandas />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
