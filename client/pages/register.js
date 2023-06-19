import React, { useState } from 'react';

const register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name,email,password});
    }
    return (
        <>
            <h1 className='jumbotron text-center bg-primary square py-4 text-white'> Register </h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input type="text" className='form-control mb-4 p-4' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='Enter your name'
                    required
                    />
                    {/* email  */}
                    <input type="email" className='form-control mb-4 p-4' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Enter your email'
                    required
                    />
                    {/* password  */}
                    <input type="password" className='form-control mb-4 p-4' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder='Enter your password'
                    required
                    />
                 
                    <button type= "submit" className='btn btn-block btn-primary'>Submit </button>
                </form>
            </div>
        </>
    );
};

export default register;