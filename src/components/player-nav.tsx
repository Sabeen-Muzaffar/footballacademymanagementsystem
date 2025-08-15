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
  Sparkles,
  Video,
  Trophy,
  LogOut,
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
