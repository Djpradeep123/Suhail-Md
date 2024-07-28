const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_30_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDQxLFxuICAgICAgICA3MixcbiAgICAgICAgMixcbiAgICAgICAgODUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICA2LFxuICAgICAgICAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY0LFxuICAgICAgICA0MixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICA4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDc4LFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgMTM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgODMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVlZGZRcHlJMEp1TWxhTUdWWU40REUyclNodXhZaUtvZlFkS25iSVQ1Wmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4OTY1Mzg1ODQ0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjBENDVEN0Q3MUIzOEVCQUI5QzEzMTc3NjEyRDQxQzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTQ4MjE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImx3MW0ySUdZU1ZLek1aSm1IbkNSaVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMThlYThlMTgtZWI3Yi00YjljLThiYzgtYmM3MDZhZTczZGJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMTE1LFxuICAgICAgMTU2LFxuICAgICAgNzQsXG4gICAgICAyNDMsXG4gICAgICAxMDIsXG4gICAgICA4MSxcbiAgICAgIDE2OSxcbiAgICAgIDIwNSxcbiAgICAgIDQ0LFxuICAgICAgMjQ5LFxuICAgICAgMTM1LFxuICAgICAgODEsXG4gICAgICAyMDEsXG4gICAgICAxNjcsXG4gICAgICAyMDgsXG4gICAgICAxNzAsXG4gICAgICA2MixcbiAgICAgIDE4LFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDE1NyxcbiAgICAgIDE3NyxcbiAgICAgIDE0NCxcbiAgICAgIDE2MixcbiAgICAgIDI0OSxcbiAgICAgIDg5LFxuICAgICAgMTU0LFxuICAgICAgMzEsXG4gICAgICAxMjksXG4gICAgICAxNDksXG4gICAgICAzNixcbiAgICAgIDg3LFxuICAgICAgNDksXG4gICAgICAxOTAsXG4gICAgICAyNCxcbiAgICAgIDIxNCxcbiAgICAgIDYsXG4gICAgICAxLFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEw5RkRTWTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjYyODk2NTM4NTg0NDM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJwcmFkZWVwa3VtYXdhdDU3NFwiLFxuICAgIFwibGlkXCI6IFwiMTE2MzU1NDc5MTcxMjkzOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQYWdja0VFUFhLbDdVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibW1jSDBVNENpTmlzVmhPZVduSDY0VVpvQWN2SjkyYXo4ZmhZUmxKTE1Ddz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJURVdSYTRTRHQyZGllZU5DK1gwTHl5RXJOckErbzgxVVVKOE5aZzQ4aEpxMzYzTlRpQkxyWE1ja2l1TFlDMnBSYVBTNVd4RDA0c210eVVDMWZYNDJEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXMlN5aXJ2VTlqU2diN2RzblZMbGZuWUhudTBtTlZzRnRUOUMzMGd0bGFZSERxbSsvQjI0Y0Y2UDJFSWVyWjJoU3Jta1M2RThad09hanhKSU5BM0RCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI2Mjg5NjUzODU4NDQzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE0ODIxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJXUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQldQLmpzb24iOiAie1wia2V5RGF0YVwiOlwibDNwTUh6eUlxOW9jN05qWENFdFpqYmg0ZHZMUmxuQXRGS0Q4STJTT21ndz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjI2ODYxODI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
