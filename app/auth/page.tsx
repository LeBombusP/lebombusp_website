import { LoginForm } from "@/components/login";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignupForm } from "@/components/signup";

export default function Auth() {
  return (
    <Tabs defaultValue="login" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm/>
      </TabsContent>
      <TabsContent value="signup">
        <SignupForm/>
      </TabsContent>
    </Tabs>
  );
}
