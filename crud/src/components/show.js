import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'


const Mostrar = () => {
    
    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    const deleteBlog = async (id) => {
       await axios.delete(`${URI}${id}`)
       getBlogs()
    }

    return(
        <div>
            <div>
                <div>
                    <Link to="/create">Añadir</Link>
                    <table>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog) => (
                                <tr key={ blog.id}>
                                    <td> { blog.title } </td>
                                    <td> { blog.content } </td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`}>Editar</Link>
                                        <button onClick={ ()=>deleteBlog(blog.id) }>Eliminar</button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default Mostrar