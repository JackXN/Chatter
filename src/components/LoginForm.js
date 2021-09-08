import React, {useState} from 'react'
import axios from 'axios';


const projectID = '';



function LoginForm() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('')
const [error, setError] = useState('')


const handleSubmit = (e) => {
    
}



    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='username' required/>
                </form>
            
            </div>
            
        </div>
    )
}

export default LoginForm
