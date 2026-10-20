import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TaskContextProvider from "./context/TasksContextProvider";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <TaskContextProvider>
      <App />
     </TaskContextProvider>
  </StrictMode>,
)
