import logo from './logo.svg';
import './App.css';

import { useEffect ,useState} from 'react';
import axios from 'axios'
function App() {
 
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    const tokenEndpoint = "https://login.microsoftonline.com/7c885fa6-8571-4c76-9e28-8e51744cf57a/oauth2/v2.0/token";
    const clientId = "0598e72a-da3f-4f95-bd93-7a27d0797e68";
    const clientSecret = "CUv8Q~nKj3RshRdV~yoyA1zuTino9hPM8xCFDbGh";
    const resource = "https://api.businesscentral.dynamics.com";
    const scope = "https://api.businesscentral.dynamics.com/.default";

    axios.post(tokenEndpoint, {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: scope,
      resource: resource,
      // changeOrigin: true,
      
    }, {
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        changeOrigin: true,  
      }
    }).then((response) => {
      const accessToken = response.data.access_token;
      setAccessToken(accessToken);
      console.log(accessToken);
    }).catch((error) => {
      console.error(error);
    });
  }, []);
  useEffect(() => {
    
  
    return () => {
      console.log(accessToken);
    }
  }, [accessToken])
  
  
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
