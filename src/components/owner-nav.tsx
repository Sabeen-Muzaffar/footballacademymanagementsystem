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
  LogOut,
  DollarSign,
  Trophy,
  Users,
  BrainCircuit,
} from "lucide-react"

export function OwnerNav() {
  const pathname = usePathname()

  const menuItems = [
    { href: "/owner/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/owner/financials", label: "Financials", icon: DollarSign },
    { href: "/owner/tournaments", label: "Tournaments", icon: Trophy },
    { href: "/owner/coaches", label: "Coaches", icon: Users },
    { href: "/owner/recruitment", label: "Recruitment", icon: BrainCircuit },
  ]

  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/owner/dashboard" className="flex items-center gap-2">
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
