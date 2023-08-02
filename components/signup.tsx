"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {useForm} from "react-hook-form";
import {useRouter} from 'next/navigation'
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

const formSchema = z.object({
  username: z.string().min(4, {
    message: "Username needs to be at least 4 characters."
  }).max(16, {
    message: "Username cannot be longer then 16 characters."
  }),
  email: z.string().email({
    message: "That is not an email!",
  }),
  password: z.string().min(8, {
    message: "Password needs to be at least 8 characters."
  }).max(24, {
    message: "Password cannot be longer then 24 characters."
  }),
  confirm: z.string().min(8, {
    message: "Password needs to be at least 8 characters."
  }).max(24, {
    message: "Password cannot be longer then 24 characters."
  })
}).refine((data) => data.password === data.confirm, {
  message: "Passwords don't match",
  path: ["confirm"],
});

export function SignupForm() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    const {data, error} = await supabase.auth.signUp(
      {
        email: values.email,
        password: values.password,
        options: {
          data: {username: values.username}
        }
      }
    )
    if (data.session) {
      router.push('/dashboard')
      router.refresh()
      return
    }
    if (data.user) {

    }
    alert("error")
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardHeader>
            <CardTitle className='text-center'>Hello There!</CardTitle>
            <CardDescription className='text-center'>
              Enter some credentials, verify email, and you are good to go!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <FormField
                control={form.control}
                name="username"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="nowotny3302" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1">
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="tomasz@nowotny.com" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1">
              <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1">
              <FormField
                control={form.control}
                name="confirm"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">Sign Up</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
