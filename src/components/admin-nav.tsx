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
  LogOut,
  Goal,
  Users,
  Database,
  Megaphone,
  Trophy,
  ShieldCheck,
} from "lucide-react"

export function AdminNav() {
  const pathname = usePathname()

  const menuItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/users", label: "User Management", icon: Users },
    { href: "/admin/backup", label: "Data Backup", icon: Database },
    { href: "/admin/announcements", label: "Announcements", icon: Megaphone },
    { href: "/admin/tournaments", label: "Tournaments", icon: Trophy },
    { href: "/admin/logs", label: "Access Logs", icon: ShieldCheck },
  ]

  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
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
              <Link href="/">
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
