import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      {!session?.user ? (
        <>
          <form action={actions.signInGithub}>
            <Button type="submit">Sign IN w :github!</Button>
          </form>

          <form action={actions.signInFacebook}>
            <Button type="submit">Sign IN w :facebook!</Button>
          </form>
        </>
      ) : (
        <form action={actions.signOut}>
          <Button type="submit">Sign OUT!</Button>
        </form>
      )}

      {session?.user ? (
        <div>Signed IN {JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out </div>
      )}

      <Profile />
    </div>
  );
}
