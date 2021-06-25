import React from 'react'
import ThemeContextProvider from './class-based/ThemeContext'
import NavBar from './class-based/NavBar'
import './class-based/index.css'
import BookList from './class-based/BookList'
import ThemeToggle from './class-based/ThemeToggle'
import AuthContextProvider from './class-based/authContext'
import MovieList from './hooks/MovieList'
import BookListContextProvider from './class-based/BookListContext'
// import TaskListContextProvider from './context/TaskListContext'
// import TaskList from './context/TaskList'
const App = () => {
    return(

        <div>
    
        {/* // <TaskListContextProvider>
        //     <React.Fragment>
        //         <TaskList />
        //     </React.Fragment>
        // </TaskListContextProvider> */}
       <ThemeContextProvider>
           <AuthContextProvider>
           <React.Fragment>
           <NavBar/>
           <BookListContextProvider>
               <BookList/>
           </BookListContextProvider>
           <ThemeToggle/>
           </React.Fragment>
           </AuthContextProvider>
       </ThemeContextProvider>

       <MovieList/>
       </div>
    )
}
export default App 