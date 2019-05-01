# Firestore Full Text Search with Algolia, Cloud Functions, and Flutter Client App

![Alt text](./promo.png?raw=true "iOS & Android")

## Description
Using Firestore as Database with Full Text Search capability using Algolia and Google Cloud Functions, included Flutter Client App. Everytime data is inserted, updated, and deleted in firestore database, a function will be invoked and update the index in Algolia. The Client app will use Algolia SDK to query the data in the front end mobile app.

## Requirements
Algolia Account(https://www.algolia.com)
Firebase Account(https://firebase.google.com)
Flutter SDK (https://www.flutter.dev)
Firebase SDK (npm install -g firebase-tools)

## Getting Started
- Register Algolia Free Account, Get APP ID, ADMIN KEY, and CLIENT KEY
- Register for Firebase and create new project, set account to Blaze plan
- Initialize Firebase project in directory using SDK
- Download Service Account JSON for firebase project, rename to serviceAccount.json put in project root path
- Retrieve Firebase URL and go to functions/src/firestore_import_data.ts and paste it initializeApp
- Retrieve Algolia APP ID and ADMIN KEY and go to functions/src/index.ts and paste in algolia initialization
- Retrieve Algolia APP ID and CLIENT KEY and go to algolia_search_flutter/libs/algolia_service.dart and paste the file in algolia initialization
- Go to functions folder and run npm install
- Go to root path and run firebase deploy --only functions to develop your functions trigger that will start indexing to algolia whenever data is inserted, updated, and deleted in your firestore db
- Run npm run import to begin importing stub data from data.json to your firestore db
- Check your firestore console and algolia console to see all the data successfully imported
- Run the Flutter app in algolia_search_flutter
