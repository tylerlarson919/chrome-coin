import { NextResponse } from "next/server";
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// Initialize authentication
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Initialize the sheet
const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_SHEET_ID!,
  serviceAccountAuth
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, twitter, submissionUrl } = body;

    // Basic server-side validation
    if (!name || !email || !twitter || !submissionUrl) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsByTitle['YourSheetName']

    // Check for duplicate emails
    const rows = await sheet.getRows();
    const emailExists = rows.some(
        (row: GoogleSpreadsheetRow<Record<string, any>>) => row.get("Email") === email
    );

    if (emailExists) {
      return NextResponse.json(
        { message: "This email has already been entered." },
        { status: 409 } // 409 Conflict
      );
    }

    // Add new row
    const newRow = {
      Name: name,
      Email: email,
      Twitter: twitter,
      SubmissionURL: submissionUrl,
      Timestamp: new Date().toISOString(),
    };

    await sheet.addRow(newRow);

    return NextResponse.json(
      { message: "Entry submitted successfully! ✅" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting to Google Sheet:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}