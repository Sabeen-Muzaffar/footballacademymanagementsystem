import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Sparkles, BrainCircuit, Zap } from "lucide-react"


export default function TipsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            AI Performance Tips
        </h1>
        <p className="text-muted-foreground">
          Personalized suggestions to help you improve your game.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BrainCircuit />
                    Tactical Awareness
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>Review the match footage from the game against FC Phoenix. Notice how their midfield presses. Anticipating this can help you find open passing lanes next time.</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Zap />
                    Shooting Power
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>Your shots have great accuracy, but adding power could be beneficial. Incorporate plyometric exercises like box jumps to build explosive strength in your legs.</p>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles />
                    Dribbling Technique
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>Practice close-control dribbling drills. Keeping the ball nearer to your feet will make it harder for defenders to tackle you during high-speed runs.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
