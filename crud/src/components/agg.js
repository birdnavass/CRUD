import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const Agregar = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()    
    
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content:content})
        navigate('/')
    }   

    return (
        <div>
           <form onSubmit={store}>
                <div>
                    <label>Title</label>
                    <input value={title} onChange={ (e)=> setTitle(e.target.value)} type="text"/>
                 </div>   
                 <div>
                     <label>Title</label>
                    <textarea value={content} onChange={ (e)=> setContent(e.target.value)} type="text" />                 
                 </div>  
                 <button type='submit'>Añadir</button>                  
           </form>
        </div>
    )
}

export default Agregar