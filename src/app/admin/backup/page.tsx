
'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Upload, CheckCircle, AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const backupHistory = [
    { id: "bkp_003", date: "August 1, 2024, 02:00 AM", status: "Success", triggeredBy: "System" },
    { id: "bkp_002", date: "July 25, 2024, 10:30 AM", status: "Success", triggeredBy: "Admin" },
    { id: "bkp_001", date: "July 18, 2024, 02:00 AM", status: "Failed", triggeredBy: "System" },
]

export default function BackupPage() {
  const { toast } = useToast()

  const handleBackup = () => {
    toast({
      title: "Backup Started",
      description: "A full system backup is now in progress. You will be notified upon completion.",
    })
  }

  const handleRestore = () => {
    // In a real app, this would open a file picker or a modal to select a backup file.
    toast({
      title: "Restore Initialized",
      description: "Please select a backup file to restore from.",
    })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Data Backup & Restore</h1>
        <p className="text-muted-foreground">
          Manage secure cloud storage backups.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Backup Controls</CardTitle>
          <CardDescription>
            Create a new backup or restore the system from a previous point.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
          <Button onClick={handleBackup}>
            <Download className="mr-2 h-4 w-4" />
            Create Full Backup
          </Button>
          <Button onClick={handleRestore} variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Restore from Backup
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Backup History</CardTitle>
          <CardDescription>
            A log of all recent backup attempts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Backup ID</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Triggered By</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {backupHistory.map((backup) => (
                <TableRow key={backup.id}>
                  <TableCell className="font-mono text-xs">{backup.id}</TableCell>
                  <TableCell>{backup.date}</TableCell>
                  <TableCell>{backup.triggeredBy}</TableCell>
                  <TableCell>
                     <div className="flex items-center gap-2">
                      {backup.status === 'Success' ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      )}
                      <span>{backup.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
