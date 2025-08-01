import { redirect } from "next/navigation";

async function Page({ params }) {
  const { locale } = await params;
  redirect(`/${locale}/app/dashboard`);
}

export default Page;
