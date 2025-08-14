"use client";

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Search,
  Trash2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const coaches = [
    {
      name: "Coach David",
      email: "coach.david@example.com",
      avatar: "https://placehold.co/40x40.png",
      initial: "CD",
      messages: [
        {
          id: 1,
          name: "Coach David",
          message: "Hi there! How is Alex doing with the new drills?",
          time: "3:45 PM",
        },
        {
          id: 2,
          name: "You",
          message: "He's finding them a bit challenging but is determined to get them right.",
          time: "3:50 PM",
        },
        {
          id: 3,
          name: "Coach David",
          message: "That's great to hear! Persistence is key. Let me know if he needs any extra help.",
          time: "3:52 PM",
        },
      ],
    },
    {
      name: "Coach Sarah",
      email: "coach.sarah@example.com",
      avatar: "https://placehold.co/40x40.png",
      initial: "CS",
      messages: [
         {
          id: 1,
          name: "Coach Sarah",
          message: "Just a reminder about the team meeting tomorrow at 6 PM.",
          time: "Yesterday",
        },
      ]
    },
];

type Coach = (typeof coaches)[number];

export function ChatLayout({ defaultLayout = [265, 440, 655] }: { defaultLayout: number[] | undefined }) {
  const [selectedCoach, setSelectedCoach] = React.useState<Coach>(coaches[0]);

  return (
    <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
            direction="horizontal"
            onLayout={(sizes: number[]) => {
                document.cookie = `react-resizable:layout=${JSON.stringify(sizes)}`;
            }}
            className="h-full items-stretch"
        >
            <ResizablePanel defaultSize={defaultLayout[0]} minSize={30}>
            <Tabs defaultValue="all">
                <div className="flex items-center px-4 py-2">
                <h1 className="text-xl font-bold">Inbox</h1>
                <TabsList className="ml-auto">
                    <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">
                    All
                    </TabsTrigger>
                    <TabsTrigger value="unread" className="text-zinc-600 dark:text-zinc-200">
                    Unread
                    </TabsTrigger>
                </TabsList>
                </div>
                <Separator />
                <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <form>
                    <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8" />
                    </div>
                </form>
                </div>
                <TabsContent value="all" className="m-0">
                    <div className="flex flex-col">
                        {coaches.map((coach) => (
                        <button
                            key={coach.email}
                            className={cn(
                            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                            selectedCoach.email === coach.email && "bg-muted"
                            )}
                            onClick={() => setSelectedCoach(coach)}
                        >
                            <div className="flex w-full flex-col gap-1">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2">
                                    <div className="font-semibold">{coach.name}</div>
                                    </div>
                                    <div className={cn(
                                        "ml-auto text-xs",
                                        selectedCoach.email === coach.email
                                        ? "text-foreground"
                                        : "text-muted-foreground"
                                    )}>
                                        {coach.messages[coach.messages.length - 1].time}
                                    </div>
                                </div>
                            </div>
                            <div className="line-clamp-2 text-xs text-muted-foreground">
                            {coach.messages[coach.messages.length - 1].message.substring(0, 300)}
                            </div>
                        </button>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="unread" className="m-0">
                    {/* Unread messages would be filtered and displayed here */}
                </TabsContent>
            </Tabs>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                <div className="flex h-full flex-col">
                    <div className="flex items-center p-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={selectedCoach.avatar} alt={selectedCoach.name} data-ai-hint="person" />
                            <AvatarFallback>{selectedCoach.initial}</AvatarFallback>
                        </Avatar>
                        <div>
                        <p className="font-semibold">{selectedCoach.name}</p>
                        <p className="text-xs text-muted-foreground">{selectedCoach.email}</p>
                        </div>
                    </div>

                    <div className="ml-auto flex items-center gap-2">
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" disabled={!selectedCoach}>
                            <Reply className="h-4 w-4" />
                            <span className="sr-only">Reply</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Reply</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" disabled={!selectedCoach}>
                            <ReplyAll className="h-4 w-4" />
                            <span className="sr-only">Reply all</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Reply all</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" disabled={!selectedCoach}>
                            <Forward className="h-4 w-4" />
                            <span className="sr-only">Forward</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Forward</TooltipContent>
                        </Tooltip>
                        <Separator orientation="vertical" className="mx-1 h-6" />
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" disabled={!selectedCoach}>
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Move to trash</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Move to trash</TooltipContent>
                        </Tooltip>
                    </div>
                    </div>
                    <Separator />
                    <div className="flex flex-1 flex-col">
                    <div className="flex-1 p-4">
                        <div className="space-y-4">
                            {selectedCoach.messages.map((message, index) => (
                                <div key={index} className={cn(
                                    "flex items-end gap-2",
                                    message.name === "You" ? "justify-end" : ""
                                )}>
                                    {message.name !== "You" && (
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={selectedCoach.avatar} alt={selectedCoach.name} data-ai-hint="person" />
                                            <AvatarFallback>{selectedCoach.initial}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div className={cn(
                                        "max-w-xs rounded-lg p-3",
                                        message.name === "You"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted"
                                    )}>
                                        <p className="text-sm">{message.message}</p>
                                    </div>
                                    {message.name === "You" && (
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="https://placehold.co/40x40.png" alt="@parent" data-ai-hint="person" />
                                            <AvatarFallback>PA</AvatarFallback>
                                        </Avatar>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="relative">
                        <Textarea placeholder={`Reply to ${selectedCoach.name}...`} className="pr-16"/>
                        <Button type="submit" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
                            <Reply className="h-4 w-4" />
                        </Button>
                        </div>
                    </div>
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    </TooltipProvider>
  );
}
