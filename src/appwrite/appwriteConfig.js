import { Client, Account, Databases } from "appwrite";

const APPWRITE_ENDPOINT = 'https://cloud.appwrite.io/v1';
const APPWRITE_PROJECT = '65b6cae003873e15f60f';
const APPWRITE_DATABASE_MEDRINGID = '65b8f68e4fb2e67d3a34';

console.log("APPWRITE_ENDPOINT:", APPWRITE_ENDPOINT);
console.log("APPWRITE_PROJECT:", APPWRITE_PROJECT);
console.log("APPWRITE_DATABASE_MEDRINGID:", APPWRITE_DATABASE_MEDRINGID);

// Check if required environment variables are defined 
if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT || !APPWRITE_DATABASE_MEDRINGID) {
  console.error("Missing required environment variables.");
}

// Check if the Client class is defined
if (typeof Client !== "function") {
  console.error("Client class not found in the 'appwrite' package.");
}

// Create a new client instance only if environment variables are defined
const client = APPWRITE_ENDPOINT && APPWRITE_PROJECT ? new Client().setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT) : null;

export const account = client ? new Account(client) : null;
export const databases = client ? new Databases(client, APPWRITE_DATABASE_MEDRINGID) : null;
