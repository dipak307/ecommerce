import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from "./context/ProductContext"
import {FilterContextProvider} from "./context/FilterContext";
import { CartProvider } from './context/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const domain=process.env.REACT_APP_AUTH_DOMAIN;
// const clientid=process.env.REACT_APP_CLIENT_ID;
root.render(
  <Auth0Provider
    // domain={domain}
    // clientId={clientid}
    domain="dev-7x6fzsu852p8263w.us.auth0.com"
    clientId="FbOE5BzYTID4pdHCw9m5cliy8HgNzcBb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
 
  <AppProvider>
  <FilterContextProvider>
  <CartProvider>
    <App />
  </CartProvider>
  </FilterContextProvider>
  </AppProvider>
 </Auth0Provider> 
);


