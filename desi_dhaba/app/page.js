// import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";

import BusinessList from "./_components/BusinessList";
import CategoryList from "./_components/CategoryList";

export default function Home() {

  return (
    <>
    <div>
        <CategoryList/>
        <BusinessList/>
      </div>
    {/* <h2>amna</h2>
    <Button>Subscribe</Button>
    <UserButton afterSignOutUrl="/" /> */}
    </>
    
  );
}
