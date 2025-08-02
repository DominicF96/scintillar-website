import { redirect } from "next/navigation";

async function LayersPage({ params }) {
  const { locale } = await params;
  redirect(`/${locale}/app/dashboard`);
}

export default LayersPage;