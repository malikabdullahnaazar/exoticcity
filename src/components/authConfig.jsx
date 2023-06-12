// import React from 'react'
// import { LogLevel } from "@azure/msal-browser";

// export const msalConfig = {
//   auth: {
//     clientId: "0598e72a-da3f-4f95-bd93-7a27d0797e68",
//     authority: "https://login.microsoftonline.com/7c885fa6-8571-4c76-9e28-8e51744cf57a",
//     // redirectUri: "https://exoticcity-0.web.app/",
//   },
//   cache: {
//     cacheLocation: "sessionStorage",
//     storeAuthStateInCookie: false,
//   },
//   system: {
//     loggerOptions: {
//       loggerCallback: (level, message, containsPii) => {
//         if (containsPii) {
//           return;
//         }
//         switch (level) {
//           case LogLevel.Error:
//             // console.error(message);
//             return;
//           case LogLevel.Info:
//             // console.info(message);
//             return;
//           case LogLevel.Verbose:
//             // console.debug(message);
//             return;
//           case LogLevel.Warning:
//             // console.warn(message);
//             return;
//           default:
//             return;
//         }
//       },
//     },
//   },
// };

// export const loginRequest = {
//   scopes: ["User.Read"],
// };

// export const graphConfig = {
//   graphMeEndpoint: "Enter_the_Graph_Endpoint_Herev1.0/me", // e.g. https://graph.microsoft.com/v1.0/me
// };
// export const authConfig = () => {
//   return (
//     <div>authConfig</div>
//   )
// }
