
'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Wand2, UserPlus, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const prospects = [
    {
        name: "Leo Martinez",
        age: 13,
        position: "Attacking Midfielder",
        location: "Eastside Youth League",
        potential: "High",
        notes: "Exceptional vision and passing range. AI recommends scouting his next 3 matches.",
        avatar: "https://placehold.co/80x80.png"
    },
    {
        name: "Sophia Rodriguez",
        age: 14,
        position: "Striker",
        location: "North Park Academy",
        potential: "High",
        notes: "Powerful shot and natural goal-scoring instinct. Data suggests high potential for development.",
        avatar: "https://placehold.co/80x80.png"
    },
     {
        name: "Kenji Tanaka",
        age: 12,
        position: "Center Back",
        location: "City Rovers U13",
        potential: "Medium",
        notes: "Strong tackler and reads the game well. AI flags stamina as an area for improvement.",
        avatar: "https://placehold.co/80x80.png"
    },
]

export default function RecruitmentPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Recruitment Insights</h1>
        <p className="text-muted-foreground">
          AI-based recommendations for scouting new talent.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="text-primary" />
            AI-Scouted Prospects
          </CardTitle>
          <CardDescription>
            Top 3 prospects identified by the AI based on recent performance data from local leagues.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {prospects.map(prospect => (
             <Card key={prospect.name} className="p-4 flex flex-col sm:flex-row gap-4">
                <Image 
                    src={prospect.avatar} 
                    alt={prospect.name} 
                    width={80} height={80} 
                    className="rounded-full mx-auto sm:mx-0"
                    data-ai-hint="person"
                />
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-semibold">{prospect.name}, {prospect.age}</h3>
                            <p className="text-sm text-muted-foreground">{prospect.position}</p>
                        </div>
                        <Badge variant={prospect.potential === "High" ? 'default' : 'secondary'}>
                            {prospect.potential} Potential
                        </Badge>
                    </div>
                     <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2"><MapPin className="w-4 h-4" />{prospect.location}</p>
                    <p className="mt-2 text-sm">{prospect.notes}</p>
                    <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" size="sm">View Full Report</Button>
                        <Button size="sm">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Add to Watchlist
                        </Button>
                    </div>
                </div>
             </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
