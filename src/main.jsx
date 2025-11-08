
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { UsercontextProvider } from './context/Usercontext.jsx';
import { Productprovider } from './context/Productcontext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import {BrowserRouter} from 'react-router-dom'

const root = createRoot(document.getElementById('root'));

root.render(
  
  <BrowserRouter>
  <AuthProvider>
<Productprovider>
  <UsercontextProvider>
    <App />
  </UsercontextProvider>
  </Productprovider>
  </AuthProvider>
  </BrowserRouter>

);

