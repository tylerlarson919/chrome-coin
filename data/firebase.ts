// data/firebase.ts
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

// This is the data structure for a rental order, keep it for type safety in other files
export interface RentalOrder {
    carId: string;
    carName: string;
    walletAddress: string;
    email: string;
    days: number;
    merCost: number;
    transactionId: string;
}

// Check if the app is already initialized
if (!admin.apps.length) {
    console.log("Initializing Firebase Admin SDK...");
    try {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                // Replace the escaped newlines in the private key
                privateKey: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
            }),
        });
    } catch (error) {
        console.error("Firebase Admin initialization error:", error);
    }
}

const db = getFirestore();

/**
 * Saves a new rental order to the 'rentals' collection in Firestore using the Admin SDK.
 * @param orderDetails - The details of the rental order.
 * @returns An object indicating success or failure.
 */
export const saveRentalOrder = async (orderDetails: RentalOrder) => {
    try {
        const rentalsCollection = db.collection('rentals');
        const docRef = await rentalsCollection.add({
            ...orderDetails,
            status: "confirmed",
            createdAt: admin.firestore.FieldValue.serverTimestamp(), // Use admin timestamp
        });
        
        return { success: true, id: docRef.id };
    } catch (error) {
        // This will now log more detailed admin-level errors if they occur
        console.error("Admin Firestore Error - Error adding document: ", error);
        return { success: false, error };
    }
};