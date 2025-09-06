import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    // Define the service account object with the required snake_case keys
    const serviceAccount = {
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
    };

    admin.initializeApp({
      // Use 'as any' to bypass the incorrect TypeScript type definition
      credential: admin.credential.cert(serviceAccount as any),
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error);
  }
}

export const adminDb = admin.firestore();