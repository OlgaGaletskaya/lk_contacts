import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContactsStore from './store/ContactsStore';
import UserStore from './store/UserStore';



export const Context = createContext({
  user: new UserStore(),
  contact: new ContactsStore()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <App />
);


