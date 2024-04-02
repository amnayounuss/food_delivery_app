import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
    
    <h2>amna</h2>
    <Button>Subscribe</Button>
    <UserButton afterSignOutUrl="/" />
    </>
    
  );
}
