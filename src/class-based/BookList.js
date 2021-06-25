import React,{useContext} from 'react'
import {ThemeContext} from './ThemeContext'
import {BookListContext} from './BookListContext'
// class BookList extends React.Component{
//     static contextType = ThemeContext;

//     render(){
//         const {isLightTheme , light , dark} = this.context;
//         const theme = isLightTheme ? light : dark;
//         return(
//             <div className='book-list' style={{color : theme.syntax , background : theme.bg}}>
//                 <ul>
//                     <li style={{background : theme.ui}}>Rich Dad Poor Dad</li>
//                     <li style={{background : theme.ui}}>The way of Kings</li>
//                     <li style={{background : theme.ui}}>Discovery of India</li>
//                 </ul>
//             </div>
//         )
//     }
// }
const BookList = () => {
    const {isLightTheme , light , dark} = useContext(ThemeContext);
    const {books} = useContext(BookListContext);
    const theme = isLightTheme ? light : dark;
    return(
        <div className='book-list' style={{color : theme.syntax , background : theme.bg}}>
        <ul>
            {books.map(book => { return (<li key={book.id} style={{background : theme.ui}}>{book.title}</li>)})}
        </ul>
    </div>
    )
}

export default BookList;