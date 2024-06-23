import React from 'react'
import ReactDOM from 'react-dom/client'
import WebRouter from './WebRouter'
import { GoogleOAuthProvider } from '@react-oauth/google';
const IDC="622416989618-q90npce1r8djjia0msugksigean0c3ld.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId={IDC}>
  <WebRouter/>    
  </GoogleOAuthProvider>
  </React.StrictMode>
)