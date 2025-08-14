'use client'

import {
  Bell,
} from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"

export function AppHeader() {
  const { toast } = useToast()

  useEffect(() => {
    // Simulate a push notification on load
    const timeout = setTimeout(() => {
        toast({
            title: "Upcoming Match",
            description: "Your next match against 'The Rovers' starts in 2 hours.",
        })
    }, 2000);
    return () => clearTimeout(timeout);
  }, [toast]);


  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="w-full flex-1">
        {/* Can add a global search here if needed */}
      </div>
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <DropdownMenuLabel className="flex items-center justify-between">
            <span>Notifications</span>
            <Badge variant="secondary">3 New</Badge>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex flex-col">
              <p className="font-semibold">Match Reminder</p>
              <p className="text-xs text-muted-foreground">
                Your next match against 'The Rovers' starts in 2 hours.
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex flex-col">
              <p className="font-semibold">New Message</p>
              <p className="text-xs text-muted-foreground">
                Coach David sent you a message.
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex flex-col">
              <p className="font-semibold">Invoice Paid</p>
              <p className="text-xs text-muted-foreground">
                Your payment for the summer camp has been received.
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
           <DropdownMenuItem className="text-center">
            <Link href="#" className="w-full">
              View all notifications
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40.png" alt="@parent" data-ai-hint="person" />
              <AvatarFallback>PA</AvatarFallback>
            </Avatar>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild><Link href="/profile">Profile</Link></DropdownMenuItem>
          <DropdownMenuItem asChild><Link href="/billing">Billing</Link></DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild><Link href="/">Logout</Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
