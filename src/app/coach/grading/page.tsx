
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"

const players = [
    { name: 'Alex', avatar: 'https://placehold.co/40x40.png', initial: 'A', grades: { Dribbling: 8, Passing: 9, Shooting: 7 } },
    { name: 'Jamie', avatar: 'https://placehold.co/40x40.png', initial: 'J', grades: { Dribbling: 7, Passing: 8, Shooting: 9 } },
    { name: 'Sam', avatar: 'https://placehold.co/40x40.png', initial: 'S', grades: { Dribbling: 6, Passing: 7, Shooting: 6 } },
]

const skills = ["Dribbling", "Passing", "Shooting"];

export default function GradingPage() {
  const [grades, setGrades] = React.useState(() => {
    const initialGrades: { [key: string]: { [key: string]: number } } = {};
    players.forEach(p => {
        initialGrades[p.name] = { ...p.grades };
    });
    return initialGrades;
  });

  const handleGradeChange = (playerName: string, skill: string, value: number[]) => {
    setGrades(prev => ({
      ...prev,
      [playerName]: {
        ...prev[playerName],
        [skill]: value[0]
      }
    }));
  };


  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Performance Grading</h1>
        <p className="text-muted-foreground">
          Rate players on their skills and performance after each session.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Grade Players</CardTitle>
          <CardDescription>
            Drag the sliders to grade each player on a scale of 1-10.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Player</TableHead>
                {skills.map(skill => (
                  <TableHead key={skill} className="text-center">{skill}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.name}>
                  <TableCell className="font-medium flex items-center gap-3 w-[150px]">
                     <Avatar className="h-8 w-8">
                        <AvatarImage src={player.avatar} alt={player.name} data-ai-hint="person" />
                        <AvatarFallback>{player.initial}</AvatarFallback>
                    </Avatar>
                    {player.name}
                  </TableCell>
                  {skills.map(skill => (
                     <TableCell key={skill}>
                        <div className="flex items-center gap-4">
                            <Slider
                                value={[grades[player.name][skill]]}
                                onValueChange={(value) => handleGradeChange(player.name, skill, value)}
                                max={10}
                                step={1}
                            />
                            <span className="text-sm font-bold w-4 text-center">{grades[player.name][skill]}</span>
                        </div>
                     </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end mt-6">
            <Button>Save Grades</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
