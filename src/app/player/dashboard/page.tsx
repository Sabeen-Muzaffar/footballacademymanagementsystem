import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Goal, Handshake, Crosshair, Zap, CheckCircle, Percent, Trophy, BarChart2, Sparkles } from "lucide-react"


export default function PlayerDashboardPage() {
  return (
    <div className="space-y-8">
       <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, Alex!</h1>
          <p className="text-muted-foreground">Here's your performance snapshot.</p>
        </div>
      </div>

       <section>
        <h2 className="text-2xl font-semibold mb-4">Your Statistics</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Goals</CardTitle>
              <Goal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Season Total</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assists</CardTitle>
              <Handshake className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Season Total</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Passing Accuracy</CardTitle>
              <Crosshair className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89%</div>
              <p className="text-xs text-muted-foreground">Last Match</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
               <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Schedule</h2>
        <Card>
          <CardContent className="p-6">
             <p>View your upcoming training sessions and matches.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">AI Performance Tips</h2>
        <Card>
          <CardHeader>
            <CardTitle>Focus on Finishing</CardTitle>
            <CardDescription>Based on your last match analysis.</CardDescription>
          </CardHeader>
          <CardContent>
             <p>Your shots on goal had an average accuracy of 75%. Try drills focusing on placement over power to improve your conversion rate.</p>
          </CardContent>
        </Card>
      </section>
      
       <section>
        <h2 className="text-2xl font-semibold mb-4">Latest Achievements</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="flex flex-col items-center justify-center p-6">
            <Trophy className="w-10 h-10 text-yellow-500 mb-2" />
            <p className="font-semibold">Hat-trick Hero</p>
            <p className="text-xs text-muted-foreground">vs. City Rovers</p>
          </Card>
           <Card className="flex flex-col items-center justify-center p-6">
            <BarChart2 className="w-10 h-10 text-green-500 mb-2" />
            <p className="font-semibold">Top Stamina</p>
            <p className="text-xs text-muted-foreground">Reached 90% peak</p>
          </Card>
           <Card className="flex flex-col items-center justify-center p-6">
            <Sparkles className="w-10 h-10 text-blue-500 mb-2" />
            <p className="font-semibold">Playmaker</p>
            <p className="text-xs text-muted-foreground">5+ assists</p>
          </Card>
        </div>
      </section>

    </div>
  )
}
