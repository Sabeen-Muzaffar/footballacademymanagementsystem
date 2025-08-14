import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Trophy, ShieldCheck, Star, Zap } from "lucide-react"

const achievements = [
    { title: "Hat-trick Hero", description: "Score 3 goals in a single match.", icon: Trophy, color: "text-yellow-500", achieved: true },
    { title: "The Wall", description: "Keep a clean sheet as a defender.", icon: ShieldCheck, color: "text-blue-500", achieved: true },
    { title: "Playmaker", description: "Provide 5 assists in a season.", icon: Star, color: "text-green-500", achieved: true },
    { title: "Speed Demon", description: "Reach top speed of 20 mph.", icon: Zap, color: "text-red-500", achieved: false },
    { title: "Iron Man", description: "Play every minute of 5 consecutive matches.", icon: Trophy, color: "text-gray-500", achieved: false },
    { title: "Century Club", description: "Complete 100 successful passes in a match.", icon: Star, color: "text-gray-500", achieved: false },
]

export default function AchievementsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Achievements</h1>
        <p className="text-muted-foreground">
          Track your accomplishments and unlock new badges.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map(achievement => (
            <Card key={achievement.title} className={`p-6 flex flex-col items-center justify-center text-center ${achievement.achieved ? 'opacity-100' : 'opacity-40'}`}>
                <achievement.icon className={`w-12 h-12 mb-4 ${achievement.color}`} />
                <h3 className="text-lg font-semibold">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                 {achievement.achieved && <div className="text-xs font-bold text-primary mt-2">UNLOCKED</div>}
            </Card>
        ))}
      </div>
    </div>
  )
}
