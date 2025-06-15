import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  role: "athlete" | "scout"
}

export function SuccessModal({ isOpen, onClose, role }: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <DialogTitle className="text-center">Account Created Successfully!</DialogTitle>
          <DialogDescription className="text-center">
            Welcome to Confluenxe! Your {role} account has been created successfully.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <Button asChild className="w-full">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button variant="outline" className="w-full" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 