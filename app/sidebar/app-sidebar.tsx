"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
} from "lucide-react";
import Link from "next/link"; // Importando o Link do Next.js
import { NavMain } from "@/app/_components/nav-main";
import { NavProjects } from "@/app/_components/nav-projects";
import { NavUser } from "@/app/_components/nav-user";
import { TeamSwitcher } from "@/app/_components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/app/_components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Mesas",
      url: "/sidebar/mesas", // URL para Mesas
      icon: Bot,
      items: [
        { title: "Genesis", url: "/sidebar" },
        { title: "Explorer", url: "/mesas/explorer" },
        { title: "Quantum", url: "/mesas/quantum" },
      ],
    },
    {
      title: "Comandas",
      url: "/comandas", // URL para Comandas
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "/comandas/introduction" },
        { title: "Get Started", url: "/comandas/get-started" },
        { title: "Tutorials", url: "/comandas/tutorials" },
        { title: "Changelog", url: "/comandas/changelog" },
      ],
    },
    {
      title: "Configurações",
      url: "/configuracoes", // URL para Configurações
      icon: Settings2,
      items: [
        { title: "Geral", url: "/configuracoes/geral" },
        { title: "Carços", url: "/configuracoes/carcos" },
        { title: "Cobrança", url: "/configuracoes/cobranca" },
        { title: "Mesas", url: "/configuracoes/mesas" },
      ],
    },
  ],
  projects: [
    {
      name: "Produtos", // Nome do projeto de Produtos
      url: "/produtos", // URL para a página de Produtos
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "/sales-marketing", // URL para Sales & Marketing
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "/travel", // URL para Travel
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Cabeçalho */}
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      {/* Conteúdo */}
      <SidebarContent>
        {/* Navegação Principal */}
        <NavMain
          items={data.navMain.map((item) => ({
            ...item,
            element: (
              <div className="flex items-center gap-2">
                <item.icon className="w-5 h-5" />
                <Link href={item.url}>
                  <a>{item.title}</a>
                </Link>
              </div>
            ),
            items: item.items.map((subItem) => ({
              ...subItem,
              element: (
                <Link href={subItem.url} key={subItem.title}>
                  <a className="block text-sm pl-8 py-2 hover:bg-gray-200">
                    {subItem.title}
                  </a>
                </Link>
              ),
            })),
          }))}
        />

        {/* Projetos */}
        <NavProjects
          projects={data.projects.map((project) => ({
            ...project,
            element: (
              <Link href={project.url} key={project.name}>
                <a className="flex items-center gap-2 text-sm py-2 hover:bg-gray-200">
                  <project.icon className="w-5 h-5" />
                  {project.name}
                </a>
              </Link>
            ),
          }))}
        />
      </SidebarContent>

      {/* Rodapé */}
      <SidebarFooter>
        <NavUser user={data.user} isSidebarOpen={false} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
