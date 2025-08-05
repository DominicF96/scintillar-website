import { redirect } from "next/navigation";
import { getFirstNavigableItemEnhanced, findNavigationSection } from "@/lib/constants/navigation";

async function AppPage({ params }) {
  const { locale } = await params;
  
  // Find the first navigable page in the home section
  const homeSection = findNavigationSection("home");
  if (homeSection) {
    const firstPage = getFirstNavigableItemEnhanced(homeSection, locale);
    if (firstPage) {
      redirect(`/${locale}${firstPage}`);
    }
  }
  
  // Fallback to notifications if home section navigation fails
  redirect(`/${locale}/app/activity/notifications`);
}

export default AppPage;