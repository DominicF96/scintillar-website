import { redirect } from "next/navigation";

async function MapsPage({ params }) {
  const { locale } = await params;
  redirect(`/${locale}/app/dashboard`);
}

export default MapsPage;