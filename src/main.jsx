import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>

<Provider store={store}>
<GoogleOAuthProvider clientId={import.meta.env.VITE_SECRET_KEY}>
    <App />
</GoogleOAuthProvider>
</Provider>

 // </React.StrictMode>,
);
