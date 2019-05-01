import * as admin from 'firebase-admin';

const serviceAccount = require("../../serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "YOUR_FIREBASE_URL"
});

const moviesJSON = require('../../data.json');
const moviesCollection = admin.firestore().collection('movies');

async function importMoviesJSONToFirestore(movies: any[]): Promise<boolean> {
    try {
        const writePromises = movies.map((m) => {
            return moviesCollection.doc(m.objectID).set({
                ...m
            });
        });

        await Promise.all(writePromises);
        return true;
    } catch (error) {
        throw error;
    }
}

importMoviesJSONToFirestore(moviesJSON)
    .then((_result) => console.log('success importing movies to firestore'))
    .catch((error) => console.error(error));