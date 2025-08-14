import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const players = [
    { name: 'Alex', position: 'Midfielder', avatar: 'https://placehold.co/40x40.png', initial: 'A' },
    { name: 'Jamie', position: 'Forward', avatar: 'https://placehold.co/40x40.png', initial: 'J' },
    { name: 'Sam', position: 'Defender', avatar: 'https://placehold.co/40x40.png', initial: 'S' },
]

export default function PlayersPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Players</h1>
        <p className="text-muted-foreground">
          Manage your team roster.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Player Roster</CardTitle>
          <CardDescription>
            A list of all players on your team.
          </CardDescription>
        </CardHeader>
        <CardContent>
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Player</TableHead>
                <TableHead>Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.name}>
                  <TableCell className="font-medium flex items-center gap-3">
                     <Avatar className="h-8 w-8">
                        <AvatarImage src={player.avatar} alt={player.name} data-ai-hint="person" />
                        <AvatarFallback>{player.initial}</AvatarFallback>
                    </Avatar>
                    {player.name}
                  </TableCell>
                  <TableCell>{player.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
