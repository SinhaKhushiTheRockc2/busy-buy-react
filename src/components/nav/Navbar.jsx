// // Importing css
// import { Outlet } from "react-router";
// import style from "./Navbar.module.css";
// import { NavLink } from "react-router-dom";
// import { useThemeValue } from "../theme/ThemeContext";
// import { useAuthValue } from "../authentication/Auth";

// // Navigation bar
// function Navbar() {
//   // Fetching values from theme context
//   const{toggleTheme,theme}=useThemeValue();
//   const{isSignedIn}=useAuthValue();
//   console.log(theme)
//   return (
//     <>
//       <nav className={theme}>
//         <div className={style.navbar}>
//           {/* Logo */}
//           <div className={style.leftNav}>
//             <h1>Busy Buy</h1>
//           </div>

//           {/* Navigation Options */}
//           <ul className={style.rightNav}>
//             {/* Navigate to home */}
//             <NavLink to={'/'} className={({isActive})=>isActive?style.active:undefined}><li>
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/10473/10473299.png"
//                 alt="home"
//               />
//               <span>Home</span>
//             </li>
//             </NavLink>
//             {/* Navigate to cart */}
//             <li>
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png"
//                 alt="cart"
//               />
//               <span>Cart</span>
//             </li>
//             {/* Navigate to orders */}
//             <li>
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/3502/3502601.png"
//                 alt="orders"
//               />
//               <span>Orders</span>
//             </li>
//             {/* Navigate to signup page */}
//             {isSignedIn?(
//             <NavLink to={'/signin'} className={({isActive})=>isActive?style.active:undefined}>
//             <li>
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/1329/1329941.png"
//                 alt="signin"
//               />
//               <span>SignIn</span>
//             </li>
//             </NavLink>):
//             {/* Navigate to signout page */}
//             (<li>
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/5967/5967182.png"
//                 alt="signout"
//               />
//               <span>SignOut</span>
//             </li>
//             )}
//             {/* Theme option */}
//             <li onClick={toggleTheme}>
//                 <img src="https://cdn-icons-png.flaticon.com/128/16447/16447795.png" alt="theme"/>
//                 <span>Theme</span>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <Outlet/>
//     </>
//   );
// }

// // Export statement
// export default Navbar;
// Importing css
// import { Outlet } from "react-router";
// import style from "./Navbar.module.css";
// import { NavLink } from "react-router-dom";
// import { useThemeValue } from "../theme/ThemeContext";
// import { useAuthValue } from "../authentication/Auth";

// // Navigation bar
// function Navbar() {
//   // Fetching values from theme context
//   const { toggleTheme, theme } = useThemeValue();
//   const { isSignedIn, handleSignOut } = useAuthValue(); // Ensure handleSignOut is available
//   console.log(theme);
  
//   return (
//     <>
//       <nav className={theme}>
//         <div className={style.navbar}>
//           {/* Logo */}
//           <div className={style.leftNav}>
//             <h1>Busy Buy</h1>
//           </div>

//           {/* Navigation Options */}
//           <ul className={style.rightNav}>
//             {/* Navigate to home */}
//             <NavLink to={'/'} className={({ isActive }) => isActive ? style.active : undefined}>
//               <li>
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/10473/10473299.png"
//                   alt="home"
//                 />
//                 <span>Home</span>
//               </li>
//             </NavLink>
//             {/* Conditionally render SignIn/SignOut based on authentication status */}
//             {!isSignedIn ? (
//               <NavLink to={'/signin'} className={({ isActive }) => isActive ? style.active : undefined}>
//                 <li>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/1329/1329941.png"
//                     alt="signin"
//                   />
//                   <span>SignIn</span>
//                 </li>
//               </NavLink>
//             ) : (
//               <li onClick={handleSignOut}>
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/5967/5967182.png"
//                   alt="signout"
//                 />
//                 <span>SignOut</span>
//               </li>
//             )}
//             {/* Theme option */}
//             <li onClick={toggleTheme}>
//               <img src="https://cdn-icons-png.flaticon.com/128/16447/16447795.png" alt="theme" />
//               <span>Theme</span>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <Outlet />
//     </>
//   );
// }

// // Export statement
// export default Navbar;


// Importing css
import { Outlet } from "react-router";
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useThemeValue } from "../theme/ThemeContext";
import { useAuthValue } from "../authentication/Auth";

// Navigation bar
function Navbar() {
  // Fetching values from theme context
  const { toggleTheme, theme } = useThemeValue();
  const { isSignedIn, handleSignOut } = useAuthValue(); // Ensure handleSignOut is available
  console.log(theme);
  return (
    <>
      <nav className={theme}>
        <div className={style.navbar}>
          {/* Logo */}
          <div className={style.leftNav}>
            <h1><Link to={'/'}>Busy Buy</Link></h1>
          </div>

          {/* Navigation Options */}
          <ul className={style.rightNav}>
            {/* Navigate to home */}
            <NavLink to={'/'} className={({ isActive }) => isActive ? style.active : undefined}>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10473/10473299.png"
                  alt="home"
                />
                <span>Home</span>
              </li>
            </NavLink>
            {/* Conditionally render Cart and Orders based on authentication status */}
            {isSignedIn && (
              <>
              <NavLink to={'/cart'} className={({isActive})=>isActive?style.active:undefined}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png"
                    alt="cart"
                  />
                  <span>Cart</span>
                </li>
                </NavLink>
                <NavLink to={'/order'} className={({isActive})=>isActive?style.active:undefined}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3502/3502601.png"
                    alt="orders"
                  />
                  <span>Orders</span>
                </li>
                </NavLink>
              </>
            )}
            {/* Conditionally render SignIn/SignOut based on authentication status */}
            {!isSignedIn ? (
              <NavLink to={'/signin'} className={({ isActive }) => isActive ? style.active : undefined}>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1329/1329941.png"
                    alt="signin"
                  />
                  <span>SignIn</span>
                </li>
              </NavLink>
            ) : (
              <li onClick={handleSignOut}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5967/5967182.png"
                  alt="signout"
                />
                <span>SignOut</span>
              </li>
            )}
            {/* Theme option */}
            <li onClick={toggleTheme}>
              <img src="https://cdn-icons-png.flaticon.com/128/16447/16447795.png" alt="theme" />
              <span>Theme</span>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

// Export statement
export default Navbar;
