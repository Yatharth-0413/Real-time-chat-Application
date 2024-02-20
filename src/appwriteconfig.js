// import { Client } from 'appwrite';

// const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('65d4235655de5a016862');

// export default client;



// import { Client, Account, Databases } from 'appwrite';

// export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
// export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
// export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID
// export const COLLECTION_ID_MESSAGES = import.meta.env.VITE_COLLECTION_ID_MESSAGES

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('65d4235655de5a016862');
//     // .setEndpoint(API_ENDPOINT) 
//     // .setProject(PROJECT_ID);    

// export const account = new Account(client);
// export const databases = new Databases(client)

// export default client;



// export const PROJECT_ID = '65d4235655de5a016862'
// export const DATABASE_ID = '65d4295cd49a2f7fe21d'
// export const COLLECTION_ID_MESSAGES = '65d4296420641ac01e6d'

// require('dotenv').config();
import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
export const COLLECTION_ID_MESSAGES = import.meta.env.VITE_COLLECTION_ID_MESSAGES;

const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
