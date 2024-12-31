import { NextResponse } from "next/server";
import * as mailchimp from "@mailchimp/mailchimp_marketing";
const md5 = require("md5");

const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER || "";
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

if (!MAILCHIMP_API_KEY) throw new Error("[MAILCHIMP_API_KEY] is required");
if (!MAILCHIMP_SERVER) throw new Error("[MAILCHIMP_SERVER] is required");
if (!MAILCHIMP_AUDIENCE_ID)
  throw new Error("[MAILCHIMP_MARKETING_AUDIENCE_ID] is required");

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER,
});

export async function POST(req: Request) {
  const {
    email,
    firstName,
    lastName,
    chains,
    tags = [],
    note,
  } = await req.json();
  if (!email) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const subscriberHash = md5(email.toLowerCase());

  const contact = {
    email_address: email,
    status: "subscribed",
    tags: tags,
    merge_fields: {
      FNAME: firstName || "",
      LNAME: lastName || "",
      CHAINS: tags.includes("Contact Form") ? chains || "" : undefined,
    },
  };

  try {
    await mailchimp.lists.setListMember(
      MAILCHIMP_AUDIENCE_ID!,
      subscriberHash,
      contact
    );
    await fetch(
      `https://api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}/notes`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ note }),
      }
    );
    return NextResponse.json(
      { status: "ok", message: "Subscribed", email },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json({ code: 400, message: e }, { status: 400 });
  }
}