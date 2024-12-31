import React from "react";
import ScrollTop from "@/components/utils/scroll-top.component";

function Page() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20">
      <ScrollTop />
      <h1>Coming soon</h1>
      <p className="text-muted-foreground mt-8 font-thin">
        This page is under construction.
      </p>
    </div>
  );
}

export default Page;
