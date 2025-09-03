// data/brevo.ts
import * as brevo from '@getbrevo/brevo';
import { RentalOrder } from '@/data/firebase';

// Configure the Brevo API client
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

const sender = {
    email: process.env.BREVO_SENDER_EMAIL!,
    name: process.env.BREVO_SENDER_NAME!,
};

/**
 * Sends booking confirmation emails to both the customer and the business.
 * @param orderDetails - The details of the rental order from the request body.
 * @param orderId - The unique ID of the order from Firebase.
 */
export const sendBookingEmails = async (orderDetails: RentalOrder, orderId: string) => {
    const { email, carName, days, merCost, transactionId } = orderDetails;

    // 1. Send Confirmation Email to the Customer
    try {
        await apiInstance.sendTransacEmail({
            sender,
            to: [{ email: email }],
            templateId: 2, // Your customer-facing template
            params: {
                orderId,
                carName,
                days,
                merCost: merCost.toFixed(2),
                transactionId,
                businessPhoneNumber: process.env.BUSINESS_PHONE_NUMBER,
            },
        });
        console.log("Customer confirmation email sent successfully.");
    } catch (error) {
        console.error("Failed to send customer email:", error);
    }

    // 2. Send Notification Email to the Business
    try {
        await apiInstance.sendTransacEmail({
            sender,
            to: [{ email: process.env.BUSINESS_EMAIL_RECIPIENT! }],
            templateId: 2, // A separate template for internal business alerts
            params: {
                ...orderDetails, // Send all details to the business
                orderId,
                merCost: merCost.toFixed(2),
            },
        });
        console.log("Business notification email sent successfully.");
    } catch (error) {
        console.error("Failed to send business notification email:", error);
    }
};