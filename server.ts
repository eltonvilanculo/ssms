import { sendSingleMessage } from "ssms";
const API_KEY = "5476b38fff208e0f77c358fad84078b179670ecf";

async function start() {
  await sendSingleMessage(API_KEY, "867393605", "Fusseke", 1);
}

start();
