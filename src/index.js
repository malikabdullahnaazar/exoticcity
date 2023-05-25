import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { PublicClientApplication } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { msalConfig } from '../src/components/authConfig.jsx';
import { MsalProvider, useMsalAuthentication } from '@azure/msal-react';

const msalInstance = new PublicClientApplication(msalConfig);

function AppWithMsal() {
  // const { instance, accounts } = useMsal();
  // const [token, setToken] = useState(null);

  // useEffect(() => {
  //   async function getToken() {
  //     if (accounts.length > 0) {
  //       try {
  //         const response = await instance.acquireTokenSilent({
  //           scopes: ['https://api.businesscentral.dynamics.com/.default'],
  //           account: accounts[0],
  //           // forceRefresh: false, // Set to true if you want to force token refresh
  //           // ssoSilent: true, // Enable Single Sign-On silent authentication
  //         });

  //         const accessToken = response.accessToken;
  //         console.log(accessToken);
  //         setToken(accessToken);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   }

  //   getToken();
  // }, [instance, accounts]);

  return (
    <BrowserRouter>
      <React.StrictMode>
        <MsalProvider instance={msalInstance}>
          <App  />
        </MsalProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppWithMsal />);

reportWebVitals();
