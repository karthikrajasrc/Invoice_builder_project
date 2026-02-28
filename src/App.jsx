import Home from "./Pages/Home"
import Create from "./Pages/Create"
import Navbar from "./Components/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router"




const App = () => {

  const router = createBrowserRouter([
    {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/create",
        element: <Create />
      }
    ]
  }
])

    return (
      <>
        <RouterProvider router={router} />   
      </>

    )
}

export default App