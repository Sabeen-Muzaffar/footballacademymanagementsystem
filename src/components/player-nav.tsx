"use client"

import Link from "next/link"
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
  Sparkles,
  Video,
  Trophy,
  LogOut,
  Goal,
} from "lucide-react"

export function PlayerNav() {
  const pathname = usePathname()

  const menuItems = [
    { href: "/player/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/player/schedule", label: "Schedule", icon: Calendar },
    { href: "/player/tips", label: "AI Tips", icon: Sparkles },
    { href: "/player/videos", label: "Videos", icon: Video },
    { href: "/player/achievements", label: "Achievements", icon: Trophy },
  ]

  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/player/dashboard" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Goal className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg text-foreground">FootyPro Hub</span>
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
