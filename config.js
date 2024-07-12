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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_46_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICA0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDksXG4gICAgICAgIDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI5LFxuICAgICAgICA0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM1LFxuICAgICAgICA0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLOE5tSVBmcFgvK3hsQ1JlclZSbXphcUVoVjA4OWdJL2FlWlB6UmlDSkFBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiMXhIcVZtVlJGdWVnUXdQU1R2VGpRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg4NzVhZjg4LTBlMGQtNDFlMS05ZjczLTAzYTY3NjU3YmFmOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDc4LFxuICAgICAgNixcbiAgICAgIDE0MCxcbiAgICAgIDEwOSxcbiAgICAgIDI0NixcbiAgICAgIDE5OSxcbiAgICAgIDcwLFxuICAgICAgMjUxLFxuICAgICAgNDEsXG4gICAgICAxMyxcbiAgICAgIDEyMyxcbiAgICAgIDIxOSxcbiAgICAgIDIyOSxcbiAgICAgIDE5NSxcbiAgICAgIDIyMCxcbiAgICAgIDE0MixcbiAgICAgIDI1NCxcbiAgICAgIDEzLFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMTY5LFxuICAgICAgMTk1LFxuICAgICAgMTE3LFxuICAgICAgMTc4LFxuICAgICAgMTg2LFxuICAgICAgMTQwLFxuICAgICAgMTg2LFxuICAgICAgMjQ1LFxuICAgICAgMjAzLFxuICAgICAgNzUsXG4gICAgICAxOTAsXG4gICAgICAxNDUsXG4gICAgICAyMDEsXG4gICAgICAxNzYsXG4gICAgICAyMzMsXG4gICAgICAyMDgsXG4gICAgICAzMCxcbiAgICAgIDI0MixcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVaWFZBMkVKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc5MDg0Mjk5NDU6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbmthbjw8PDNcIixcbiAgICBcImxpZFwiOiBcIjEyODg3OTQ1Mjc5OTE2ODo2M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKM0puNWNFRUphUXhyUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkc2SEJ4TEp0MHZGV3hlY2Z0Y2JrOFVlaXdzU2kvK3J1Z2pSWHZkcjVoUVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQzVhMlMwUmIvb0N6MGhZbXhZdXl6bWZyT3ZTTEUydXF6K2tmYnB2QkRROU9nMlFwbTJBYjBBeXloNy9YOUlvc1dSVGlhWnFaS21KSHI1ZXlVditWQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibnV0cTlYbGRDQ1BlRTdHYW9HNzlUTzBta1dwd3c4bkRjK1hCMWFDYkwxK1gyZCtRdVI4dmsvbXBieHc2WGxQWFMxbWhkUWlpSlNTTEhmU21oS3NCZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3OTA4NDI5OTQ1OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgxMzU5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtxaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3FpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiam1pL25kTmNYOWNMckhhbUwzZEw1MDU5aFFBQi9zcUJHaWliNkpCUWl2Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTIyNDkzNTk3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4MTM1NjQ0MDFcIn0iCn0="  // PUT your SESSION_ID 


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
