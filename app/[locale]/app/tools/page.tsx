import { redirect } from "next/navigation";

async function ToolsPage({ params }) {
  const { locale } = await params;
  redirect(`/${locale}/app/dashboard`);
}

export default ToolsPage;