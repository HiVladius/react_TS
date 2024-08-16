
import  { useState } from 'react'

interface User {
    id: number;
    username: string;
}

export const Usuario = () => {
  
    const [user, setUsuario] = useState<User>();

    const login = () => {
        setUsuario ({
            id: 123,
            username: 'jose'
        })
    }
  
    return (
    <>

    <div className='mt-5'>
        <h3>Usuario</h3>

        <button onClick={login} className='btn btn-outline-primary'>
            Login
        </button>

       {
            (!user)
            ? <li> No hay usuario </li>
            : <li>{user.username}  </li>
       }
    </div>

    </>
  )
}
