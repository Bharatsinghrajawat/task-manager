import React,{useState , useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const MovieList = () => {
    const [title , setTitle] = useState('');
    const [age , setAge] = useState(20);
    const [movies , setMovies] = useState([
        {
            title : 'conjuring',
            id : uuidv4()
        },
        {
            title : 'the Everest',
            id : uuidv4()
        },
        {
            title : 'joker',
            id : uuidv4()
        }
    ])

    useEffect(() => {
        console.log(`useEffect has ran  ${movies.title}`)
    },[movies]);

    useEffect(() => {
        console.log(`useEffect has ran ${age}`)
    },[age])
   
   const handleSubmit = (e) => {
        e.preventDefault();
        addMovies(title);
        setTitle('');
   }

   const addMovies = (title) => {
        setMovies([...movies, {title : title, id : uuidv4()}]);
        
    }
    return(
        <div>
            <ul>
                {movies.map(movie => (<li key={uuidv4()}>{movie.title}</li>))}
            </ul>
            <form onSubmit={handleSubmit}>  
                <input type='text' placeholder='Add Movie here....' required value={title} onChange={e => setTitle(e.target.value)}/> 
                <input type='submit' />
            </form>
            <button onClick={() => {setAge(age + 1)}}>Add 1 to age : {age}</button>
        </div>
    )
}
export default MovieList;