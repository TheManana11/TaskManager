import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TaskContextProvider from "./context/TasksContextProvider";
import { Provider } from 'react-redux';
import { store } from './store/store.ts' 
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
     <TaskContextProvider>
      <App />
     </TaskContextProvider>
    </Provider>
  </StrictMode>,
)
