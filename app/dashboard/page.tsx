import {redirect} from "next/navigation";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

export default async function Home() {
  const supabase = createClientComponentClient()
  const {data: {session}} = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth')
  } else {
    return (
      <main>
        <h1>dashboard</h1>
      </main>
    )
  }
}
