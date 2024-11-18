// Importing internal modules
import Navbar from "./components/nav/Navbar";
import ErrorPage from "./error/ErrorPage";
import Home from "./pages/home/Home";
import SignIn from "./pages/loginOptions/SignIn";
import SignUp from "./pages/loginOptions/SignUp";
import Order from "./pages/orders/Order";
import CustomContext from "./productContext";
import Auth from "./components/authentication/Auth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThemeContext, { useThemeValue } from "./components/theme/ThemeContext";
import Cart from "./pages/cart/Cart";


function App() {
  // Routes creation
  const router=createBrowserRouter([
    {path:'/', element:<Navbar/>,errorElement:<ErrorPage/>,children:[
      {index:true,element:<Home/>},
      {path:'signup',element:<SignUp/>},
      {path:'signin',element:<SignIn/>},
      {path:'cart',element:<Cart/>},
      {path:'order',element:<Order/>}
    ]}
  ])  
  
  return (
    <ThemeContext>
      <Content router={router} />
    </ThemeContext>
  );
}

const Content = ({ router }) => {
  // Fetching theme
  const { theme } = useThemeValue();

  return (
    <div className={theme}>
      <CustomContext>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </CustomContext>
    </div>
  );
}

export default App;
