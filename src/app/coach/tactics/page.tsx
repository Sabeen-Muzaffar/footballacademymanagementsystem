import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function TacticsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Tactical Board</h1>
        <p className="text-muted-foreground">
          Create, view, and share team tactics.
        </p>
      </div>
      <Card className="aspect-[4/3] w-full">
        <CardHeader>
          <CardTitle>Formation</CardTitle>
          <CardDescription>
            4-3-3 Attacking
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-full">
          <p>Tactical board drawing tool will be here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
