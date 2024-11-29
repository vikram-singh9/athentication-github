import { SessionWrapper } from "@/components/SessionWrapper";
import SignIn from "@/components/Login/SignIn";
import SignOut from "@/components/Login/signOut";
import { auth } from "@/lib/auth";

export default async function home() {
  const session = await auth();
  const isAunthenticated = !!session?.user;
  return (
    <div>







      
      <SessionWrapper>
        {isAunthenticated ? <SignOut /> : <SignIn />}
      
      </SessionWrapper>
    </div>
  );
}
