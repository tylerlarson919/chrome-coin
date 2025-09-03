// app/api/book/route.ts
import { NextResponse } from "next/server";
import { saveRentalOrder, RentalOrder } from "@/data/firebase";
import { sendBookingEmails } from "@/data/brevo";

export async function POST(request: Request) {
    console.log("\n[API] /api/book endpoint hit at:", new Date().toISOString());

    try {
        const body: RentalOrder = await request.json();
        console.log("[API] Request body parsed successfully:", body);

        // --- 1. Firestore Save Operation ---
        console.log("[FIREBASE] Attempting to save order...");
        const result = await saveRentalOrder(body);
        console.log("[FIREBASE] Save operation completed. Result:", result);

        if (!result.success || !result.id) {
            // If the save failed, throw a specific error.
            throw new Error(`Firestore save failed. Reason: ${JSON.stringify(result.error || 'Unknown error')}`);
        }

        console.log(`[FIREBASE] Order successfully saved with ID: ${result.id}`);
        
        // --- 2. Brevo Email Operation ---
        console.log("[BREVO] Attempting to send emails...");
        // Use a separate try/catch for emails so a mail failure doesn't kill the whole process.
        try {
            await sendBookingEmails(body, result.id);
            console.log("[BREVO] Email sending function executed successfully.");
        } catch (emailError) {
            // Log the email error but don't prevent a successful response to the user,
            // since the booking was still saved.
            console.error("[BREVO] CRITICAL: Email sending failed.", emailError);
        }

        return NextResponse.json({ message: "Booking successful", orderId: result.id }, { status: 200 });

    } catch (error: any) {
        console.error("[API CATCH BLOCK] An unrecoverable error occurred in the booking process:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}