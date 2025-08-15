"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Calendar,
  ClipboardList,
  BarChart2,
  Users,
  LogOut,
  HeartPulse,
  MessageSquare,
} from "lucide-react"

export function CoachNav() {
  const pathname = usePathname()

  const menuItems = [
    { href: "/coach/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/coach/sessions", label: "Sessions", icon: Calendar },
    { href: "/coach/attendance", label: "Attendance", icon: ClipboardList },
    { href: "/coach/grading", label: "Grading", icon: BarChart2 },
    { href: "/coach/players", label: "Players", icon: Users },
    { href: "/coach/injuries", label: "Injuries", icon: HeartPulse },
    { href: "/coach/tactics", label: "Tactical Board", icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg> },
    { href: "/coach/chat", label: "Chat", icon: MessageSquare },
  ]

  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/coach/dashboard" className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="Auraan Logo" width={40} height={40} className="rounded-lg" />
          <span className="font-semibold text-lg text-foreground">Auraan</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.label, side: "right", align: "center" }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={{ children: "Log Out", side: "right", align: "center" }}>
              <Link href="/login">
                <LogOut />
                <span>Log Out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}
