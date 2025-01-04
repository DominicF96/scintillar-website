import React from "react";
// import { Locale } from "@/i18n.config";
import { getUser } from "@/app/api/auth/route";

// type Props = {
//   params: {
//     locale: Locale;
//   };
// };

async function Page() {
  // const { locale } = await params;
  const user = await getUser();
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <pre className="my-2 text-foreground p-8 overflow-x-scroll bg-card rounded-lg">
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Page;
