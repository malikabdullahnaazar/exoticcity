import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios'
function App() {
 
  
  useEffect(() => {
    const tokenEndpoint = "https://cors-anywhere.herokuapp.com/https://login.microsoftonline.com/7c885fa6-8571-4c76-9e28-8e51744cf57a/oauth2/v2.0/token";
    const clientId = "0598e72a-da3f-4f95-bd93-7a27d0797e68";
    const clientSecret = "CUv8Q~nKj3RshRdV~yoyA1zuTino9hPM8xCFDbGh";
    const resource = "https://api.businesscentral.dynamics.com";
    const scope = "api://0598e72a-da3f-4f95-bd93-7a27d0797e68/exoticScope";
  
    axios.post(tokenEndpoint, {
      grant_type: 'client_credentials',
      client_id: clientId,
      resource: resource,
      client_secret: clientSecret,
      scope: scope
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then((response) => {
      const accessToken = response.data.access_token;
      console.log(accessToken);
    }).catch((error) => {
      console.error(error);
    });
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
