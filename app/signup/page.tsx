import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SignupForm } from "@/components/signup-form"
import { SuccessModal } from "@/components/success-modal"

interface SignupPageProps {
  searchParams: { role?: string }
}

export default function SignupPage({ searchParams }: SignupPageProps) {
  const defaultRole = searchParams.role === "scout" ? "scout" : "athlete"

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
            Choose your role and start your journey with Confluenxe
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={defaultRole} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="athlete">Athlete</TabsTrigger>
              <TabsTrigger value="scout">Scout</TabsTrigger>
            </TabsList>
            <TabsContent value="athlete">
              <SignupForm role="athlete" />
            </TabsContent>
            <TabsContent value="scout">
              <SignupForm role="scout" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 