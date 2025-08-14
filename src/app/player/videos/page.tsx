import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const videos = [
    { title: "Match Highlights vs. City Rovers", date: "June 28, 2024", thumbnail: "https://placehold.co/600x400.png", hint: "soccer match" },
    { title: "Dribbling Drills", date: "June 27, 2024", thumbnail: "https://placehold.co/600x400.png", hint: "soccer training" },
    { title: "Defensive Strategy Session", date: "June 26, 2024", thumbnail: "https://placehold.co/600x400.png", hint: "soccer tactics" },
]

export default function VideosPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Video Review Library</h1>
        <p className="text-muted-foreground">
          Access match replays, training videos, and highlight reels.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map(video => (
            <Card key={video.title}>
                <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-md mb-4">
                        <Image src={video.thumbnail} alt={video.title} width={600} height={400} className="w-full h-full object-cover" data-ai-hint={video.hint} />
                    </div>
                    <CardTitle>{video.title}</CardTitle>
                    <CardDescription>{video.date}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className="w-full">Watch Video</Button>
                </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  )
}
