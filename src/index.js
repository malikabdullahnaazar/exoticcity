import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../src/components/authConfig.jsx';
import { MsalProvider } from '@azure/msal-react';
var token=null;
const getToken = async (instance, accounts) => {
  if (accounts.length > 0) {
    try {
      const request = {
        scopes: ["https://api.businesscentral.dynamics.com/.default"],
        account: accounts[0]
      };
      const response = await instance.acquireTokenSilent(request);
       token = response.accessToken;
      console.log(token);
    } catch (error) {
      console.error(error);
    }
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const msalInstance = new PublicClientApplication(msalConfig);

const renderApp = () => {
  root.render(
    <BrowserRouter>  
      <React.StrictMode>
        <MsalProvider instance={msalInstance}>
          <App accessToken={token}/>
        </MsalProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

const initializeApp = async () => {
  // Perform any pre-render initialization here
  // ...

  // Get the accounts and instance from msalInstance
  const accounts = await msalInstance.getAllAccounts();
  const instance = msalInstance;

  // Call getToken function
  await getToken(instance, accounts);

  // Render the app
  renderApp();
};

initializeApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
