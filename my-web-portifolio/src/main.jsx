import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/classes/spacing.css'
import './styles/classes/colors.css'
import './styles/classes/sizing.css'
import './styles/classes/display.css'
import './styles/classes/fonts.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import AboutMePage from './pages/AboutMePage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />
  },
  {
    path: "about-me",
    element: <AboutMePage />
  },
  {
    path: "contact",
    element: <ContactPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>,
)
