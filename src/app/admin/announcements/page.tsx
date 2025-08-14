
'use client'
import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const recentAnnouncements = [
    { id: 1, message: "Reminder: Mid-season parent-coach meeting next Tuesday at 6 PM in the main hall.", recipient: "Parents", date: "July 28, 2024" },
    { id: 2, message: "All teams will have practice cancelled this Friday due to the national holiday. Enjoy the long weekend!", recipient: "All Roles", date: "July 25, 2024" },
    { id: 3, message: "Please submit your availability for the upcoming Summer Cup by the end of this week.", recipient: "Coaches", date: "July 22, 2024" },
];


export default function AnnouncementsPage() {
  const { toast } = useToast()
  const [message, setMessage] = React.useState("")
  const [recipient, setRecipient] = React.useState("all")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) {
        toast({
            variant: "destructive",
            title: "Error",
            description: "Message cannot be empty.",
        })
        return
    }
    toast({
        title: "Announcement Sent!",
        description: `Your message has been sent to ${recipient}.`,
    })
    setMessage("")
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Announcements & Notifications</h1>
        <p className="text-muted-foreground">
          Send bulk messages to all roles.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
            <CardHeader>
            <CardTitle>Compose Announcement</CardTitle>
            <CardDescription>
                Write a message and send it to the selected group.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                        id="message" 
                        placeholder="Type your announcement here..." 
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="recipient">Recipient Group</Label>
                    <Select value={recipient} onValueChange={setRecipient}>
                        <SelectTrigger id="recipient" className="w-full">
                            <SelectValue placeholder="Select a group" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Roles</SelectItem>
                            <SelectItem value="parents">Parents</SelectItem>
                            <SelectItem value="coaches">Coaches</SelectItem>
                            <SelectItem value="players">Players</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex justify-end">
                    <Button type="submit">Send Announcement</Button>
                </div>
            </form>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
                <CardDescription>A log of the most recent messages sent.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Message</TableHead>
                        <TableHead>Recipient</TableHead>
                        <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentAnnouncements.map((ann) => (
                        <TableRow key={ann.id}>
                            <TableCell className="text-xs">{ann.message}</TableCell>
                            <TableCell><Badge variant="outline">{ann.recipient}</Badge></TableCell>
                            <TableCell>{ann.date}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
