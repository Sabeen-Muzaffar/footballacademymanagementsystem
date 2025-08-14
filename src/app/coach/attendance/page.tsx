
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const sessions = [
  { id: "ses_1", name: "U14 Team Practice - July 2, 2024" },
  { id: "ses_2", name: "Goalkeeper Training - July 3, 2024" },
  { id: "ses_3", name: "U14 Team Practice - July 4, 2024" },
];

const players = [
    { name: 'Alex', avatar: 'https://placehold.co/40x40.png', initial: 'A' },
    { name: 'Jamie', avatar: 'https://placehold.co/40x40.png', initial: 'J' },
    { name: 'Sam', avatar: 'https://placehold.co/40x40.png', initial: 'S' },
]

function AttendanceRow({ player }: { player: typeof players[0] }) {
    const [isChecked, setIsChecked] = React.useState(false);
    
    React.useEffect(() => {
        setIsChecked(Math.random() > 0.2);
    }, []);

    return (
        <TableRow>
            <TableCell className="font-medium flex items-center gap-3">
                <Avatar className="h-8 w-8">
                    <AvatarImage src={player.avatar} alt={player.name} data-ai-hint="person" />
                    <AvatarFallback>{player.initial}</AvatarFallback>
                </Avatar>
                {player.name}
            </TableCell>
            <TableCell className="text-right">
                <Checkbox checked={isChecked} onCheckedChange={(checked) => setIsChecked(!!checked)} />
            </TableCell>
        </TableRow>
    )
}

export default function AttendancePage() {
  const [selectedSession, setSelectedSession] = React.useState(sessions[0].id);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Attendance</h1>
        <p className="text-muted-foreground">
          Mark and track player attendance.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Mark Attendance</CardTitle>
          <CardDescription>
            Select a session and mark the players who attended.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <Select value={selectedSession} onValueChange={setSelectedSession}>
                <SelectTrigger className="w-full sm:w-[300px]">
                    <SelectValue placeholder="Select a session" />
                </SelectTrigger>
                <SelectContent>
                    {sessions.map(session => (
                        <SelectItem key={session.id} value={session.id}>{session.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Player</TableHead>
                        <TableHead className="text-right w-[100px]">Present</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {players.map((player) => (
                        <AttendanceRow key={player.name} player={player} />
                    ))}
                </TableBody>
            </Table>
            <div className="flex justify-end">
                <Button>Submit Attendance</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}
