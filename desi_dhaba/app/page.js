// import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";

import CategoryList from "./_components/CategoryList";

export default function Home() {

  return (
    <>
    <div>
        <CategoryList/>
      </div>
    {/* <h2>amna</h2>
    <Button>Subscribe</Button>
    <UserButton afterSignOutUrl="/" /> */}
    </>
    
  );
}
