import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const Editar = () => {
    const [title, setTitle] = useState('')    
    const [content, setContent] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            title: title,
            content: content
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }

    return (
        <div>

        <form onSubmit={update}>
            <div>
                <label>Titulo</label>
                <input value={title} onChange={ (e)=> setTitle(e.target.value)} type="text" />
            </div>
            <div>
                <label>Contenido</label>
                <textarea value={content} onChange={ (e)=> setContent(e.target.value)} type="text" />
            </div>            
            <button type="submit">Guardar</button>
        </form>
    </div>
    )

}

export default Editar