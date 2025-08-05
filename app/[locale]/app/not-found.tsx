import React from "react";
import NotFoundContent from "@/components/feedback/not-found-content";
export default async function NotFound() {
  return (
    <NotFoundContent
      title="Page Not Found"
      description="The page you're looking for doesn't exist or has been moved. This might be a placeholder page that hasn't been implemented yet."
    />
  );
}
