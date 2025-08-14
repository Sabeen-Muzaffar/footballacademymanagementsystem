
'use client'
import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Session {
  title: string;
  date: string;
  time: string;
  location: string;
  focus: string;
}

const initialSessions: Session[] = [
    { title: "U14 Team Practice", date: "July 2, 2024", time: "17:00 - 18:30", location: "Main Field", focus: "Dribbling" },
    { title: "Goalkeeper Training", date: "July 3, 2024", time: "16:00 - 17:00", location: "Training Ground", focus: "Shot Stopping" },
    { title: "U14 Team Practice", date: "July 4, 2024", time: "17:00 - 18:30", location: "Main Field", focus: "Passing & Movement" },
]


export default function SessionsPage() {
  const [sessions, setSessions] = React.useState<Session[]>(initialSessions);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleCreateSession = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newSession: Session = {
      title: formData.get('title') as string,
      date: new Date(formData.get('date') as string).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      time: formData.get('time') as string,
      location: formData.get('location') as string,
      focus: formData.get('focus') as string,
    };
    setSessions(prev => [newSession, ...prev]);
    setIsDialogOpen(false);
  }

  return (
    <div className="space-y-8">
       <div className="flex items-center justify-between space-y-2">
        <div>
          <h1 className="text-3xl font-bold">Sessions</h1>
          <p className="text-muted-foreground">
            Plan and manage training sessions.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Session
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Session</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new training session.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateSession}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input id="title" name="title" required className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Date
                  </Label>
                  <Input id="date" name="date" type="date" required className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="time" className="text-right">
                    Time
                  </Label>
                  <Input id="time" name="time" type="time" required className="col-span-3" />
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input id="location" name="location" required className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="focus" className="text-right">
                    Focus
                  </Label>
                  <Input id="focus" name="focus" required className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">Cancel</Button>
                </DialogClose>
                <Button type="submit">Create Session</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
          <CardDescription>
            View and manage your scheduled sessions.
          </CardDescription>
        </CardHeader>
        <CardContent>
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Session</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Focus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sessions.map((session, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{session.title}</TableCell>
                  <TableCell>{session.date}</TableCell>
                  <TableCell>{session.time}</TableCell>
                  <TableCell>{session.location}</TableCell>
                  <TableCell className="text-right"><Badge variant="secondary">{session.focus}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
