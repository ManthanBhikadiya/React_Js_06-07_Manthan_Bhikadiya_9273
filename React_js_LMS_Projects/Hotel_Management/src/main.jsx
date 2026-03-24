import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch } from 'react-redux'
import store from './store/store'
import { initAuthListener } from './store/thunks'
import './index.css'
import App from './App.jsx'

const initializeAuth = () => {
  const dispatch = store.dispatch;
  dispatch(initAuthListener());
};

initializeAuth();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
