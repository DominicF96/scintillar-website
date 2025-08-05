import React from "react";
import ContentContainer from "@/components/layout/containers/content-container";
import { ContactsTable } from "@/components/features/contacts/contacts-table/contacts-table";
import { Users } from "lucide-react";

async function ContactsPage({ params }) {
  const { locale } = await params;
  
  return (
    <ContentContainer className="py-4 px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Users className="h-6 w-6" />
          Contacts Management
        </h2>
        <p className="text-muted-foreground">
          Manage your contacts, relationships, and communication history.
        </p>
      </div>
      
      {/* Contacts CRUD Table */}
      <ContactsTable 
        initialContacts={[
          {
            id: "1",
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+1 (555) 123-4567",
            company: "Tech Corp",
            type: "customer",
            tags: ["vip", "tech"],
            createdAt: "2024-01-15T10:00:00Z",
            lastContacted: "2024-01-20T15:30:00Z"
          },
          {
            id: "2",
            name: "Jane Smith",
            email: "jane.smith@company.com",
            phone: "+1 (555) 987-6543",
            company: "Design Studio",
            type: "prospect",
            tags: ["design", "new"],
            createdAt: "2024-01-18T14:00:00Z"
          },
          {
            id: "3",
            name: "Bob Johnson",
            email: "bob@partner.co",
            company: "Partner Solutions",
            type: "partner",
            tags: ["strategic"],
            createdAt: "2024-01-10T09:00:00Z",
            lastContacted: "2024-01-19T11:00:00Z"
          }
        ]}
      />
    </ContentContainer>
  );
}

export default ContactsPage;