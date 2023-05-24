import React, { useState, useEffect } from 'react';
import './App.css';
import { useMsal, useMsalAuthentication } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';

function App() {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      if (accounts.length > 0) {
        try {
          const request = {
            scopes: ['api://0598e72a-da3f-4f95-bd93-7a27d0797e68/exoticScope'],
            account: accounts[0]
          };
          const response = await instance.acquireTokenSilent(request);
          const token = response.accessToken;
          setAccessToken(token);
          console.log(token);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getToken();
  }, [instance, accounts]);

  useMsalAuthentication(InteractionType.Redirect);

  const [m_strUser, setm_strUser] = useState('');

  function Render() {
    try {
      const username = accounts[0].username;
      setm_strUser(username);
    } catch (e) {}
  }

  if (m_strUser !== '') {
    return (
      <div className="App">
        <div>User: {m_strUser}</div>
        <div>Access Token: {accessToken}</div>
      </div>
    );
  } else {
    return (
      <>
        {Render()}
        <div>Please wait...</div>
      </>
    );
  }
}

export default App;
