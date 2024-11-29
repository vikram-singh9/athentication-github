import { signIn } from "@/lib/auth";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-1/2 h-1/2 bg-white p-14 flex items-center justify-center rounded-2xl shadow-2xl">
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <h1 className="pb-12 font-semibold flex items-center gap-3 text-3xl ">
            SignIn with GitHub <FaArrowRight size={30} />{" "}
          </h1>

          <Button type="submit" className="p-7 text-2xl ">
            
            <FaGithub /> SignIn with GitHub
          </Button>
        </form>
      </div>
    </div>
  );
}
