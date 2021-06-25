import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

// class ThemeToggle extends React.Component{
//     static contextType = ThemeContext
//     render(){
//         const {ThemeToggle} = this.context
//         return(
            
//                 <button onClick={ThemeToggle}>ThemeToggle</button>
                
//         )
//     }
// } 

const ThemeToggle = () => {
    const {ThemeToggle} = useContext(ThemeContext)
        return(
            
                <button onClick={ThemeToggle}>ThemeToggle</button>
                
        )
}
export default ThemeToggle