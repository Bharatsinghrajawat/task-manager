import React,{createContext , useState} from 'react'

export const BookListContext = createContext();
const BookListContextProvider = (props) => {
    const [ books , setBooks] = useState([
        {
            title : 'Rich Dad Poor Dad',
            id    : 1
        },
        {
            title : 'Discovey of India',
            id    : 2
        },
        {
            title : 'The Final Empire',
            id    : 3
        }
    ])
    return(
        <BookListContext.Provider value={{books,setBooks}}>
            {props.children}
        </BookListContext.Provider>
    )
}
export default BookListContextProvider