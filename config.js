il//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "237656520674";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VUVzU4SEZ6QTJTYmhCSldBRnZveFFHbkxXNWtzN1QvUEZmOWRMK0tIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRW5NdGdJKzRLU2U4VXU2cGM1U2c1bFRRSjNPTTVaaGtMYlQ1VEx6QUdSVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrR2Jvb0hOeFNGZlRpbGhEemwyaHAzNlFQQ1BJc3NlU0lTVHFpY0NQUVZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1aTJsaVY4TXU4OU1EczJjRFR2L0l5UzJEVjhrcnhYSVd0c1JRK3RkMHc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtFd3FGdmY0dExRemNzVWxFTnFXdWFIakc5TTRSSEhhUkRDSXpMQnEyRkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZURHJJNU9iRGp6WkpJa09PajdCOTBPS3d2TktRRXhYRGZjeEl3SmdGRHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUp0RjUweGlqZUlYb3RwdVU2bkNrdi83K016enM1U24xK3Y5Z3RadGxVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialY1SEJMRVJrRG0yeUFVeG9lV3c4enFjdVdUbVJDOGpxTlhrL3R5enVTbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IloyUHJNeTJTUUNmS1EvTUVheDZQUjN4RFZYaG5DOElVSmhwV1UyMmtDUE9vK3c1RDMzQy9xcWZONGRFTEYycGpsbVIrQVlyQjdUNHlaTVRuekkyL0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJiT1RZWGx0bS85LzQ2K2lSRmhZeFg2bFNXaGc1K0RhcFE0endzaU9hTTVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEVVZzSWlxOVE0eW9KQ1l4ZFRFd1FRIiwicGhvbmVJZCI6IjkwYTRhMjNiLTcyNWEtNDlkNC1iN2NlLTk3OGJmMGNhZTMzOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5REVOOGlwSEZlM1I5ZzFpMXIzTVlXV1RqcjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWpmYzVoNi8xSkQ1enJDSWhXdjk3S3VpUDVJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlQ2TUZQRFcyIiwibWUiOnsiaWQiOiIyMzc2OTQ5MzAzNTc6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUaGV+IEBydGlzdCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEc5ejhVSEVNL0I1TFVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ2V1Y0MyWnMwV25DYnlnalhTSW1ya044Z2RDZ2pNUkdsaG9HcVUvUk9rdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMEJLUXdYMHV4WEtpN1BQVEhxSnF0ZW1jK3VJdU5wN0xFcDRNQkNoNEFzWWpkcEU0Qk9SbVA2TlZERUc4dmpoWElHN3Y2R1lxVDNoNkw1cXRvai9nQnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImtJc3F5SmJIREFtN0xMQjVWZFQrM1pOdVdvZWZSaUdRZXdpQTlYRWFDb0ordVhDTFRhZFEzTHZBYk8wdHhRQUhPb3AyNktmZXMrUkRLbkFKeFN4TURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk0OTMwMzU3OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWUhybkF0bWJORnB3bThvSTEwaUpxNURmSUhRb0l6RVJwWWFCcWxQMFRwTSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzQwODYwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPNHkifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "Gammer-boy",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
