import React,{useContext} from 'react';
import {ThemeContext} from './ThemeContext'
import { AuthContext } from './authContext';
// class NavBar extends React.Component{
//     // static contextType = ThemeContext;
//     render(){
//         return( 
//             <AuthContext.Consumer>{(authContext) => (
//             <ThemeContext.Consumer>{(themeContext)=>{
//         const {isAuthenticated , authToggle} = authContext;
//         const {isLightTheme ,light, dark } = themeContext;
//         const theme = isLightTheme ? light : dark;
//         return(
//             <div style={{background : theme.ui , color : theme.syntax}}>
//                 <h1>Navigation Bar</h1>
//                 <div onClick={authToggle}>{isAuthenticated ? 'Logged in' : 'Logged out'}</div>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Info</li>
//                 </ul>
//             </div>
       
//         )}}
//         </ThemeContext.Consumer>
//             )}</AuthContext.Consumer>
//     )}
// }

const NavBar = () => {
    const {isAuthenticated , authToggle} = useContext(AuthContext);
    const {isLightTheme ,light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return(
        <div style={{background : theme.ui , color : theme.syntax}}>
            <h1>Navigation Bar</h1>
            <div onClick={authToggle}>{isAuthenticated ? 'Logged in' : 'Logged out'}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Info</li>
        </ul>
    </div>
    )
}

export default NavBar;