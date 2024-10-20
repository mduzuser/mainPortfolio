//rrd imports

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import { Contact, Home, Projects, Resume } from "./pages";

//layout component for the app

import MainLayout from "./layouts/MainLayout";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
