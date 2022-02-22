import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

    const [user, setuser] = useState({
        email:"",
        password:""
    })

    const changehandler=(e)=>{
        const{name,value}=e.target;
        setuser({
            ...user,
            [name]:value
        })
    }

    const dologin=()=>{
        const{email,password}=user;
        if(email && password){
            axios.put("http://localhost:8000/user")
            .then((res)=>{
                alert(res.data.message)
            })
        }
        else
        {
            alert("All field require")
        }
    }

  return (
    <div className='container'>
        <div class="jumbotron">
            <h1 class="display-3 text-center">User Login</h1>
            <hr class="my-2"/>
        </div>

        <div className="row">
            <div className="col-12">
                <div class="input-group">
                    <input type="email" name="email" id="email" onChange={changehandler} class="form-control" placeholder="Enter your Email-Id." aria-describedby="sufixId"/>
                </div>
            </div>
        </div>

        <br />

        <div className="row">
            <div className="col-12">
                <div class="input-group">
                    <input type="password" name="password" id="password" onChange={changehandler} class="form-control" placeholder="Enter your password" aria-describedby="sufixId"/>
                </div>
            </div>
        </div>

        <br />

        <div className="row">
            <div className="col-12">
                <div class="input-group">
                    <button class="btn btn-success btn-block" onClick={dologin}>Login</button>
                </div>
            </div>
        </div>

        <br />

        <div className="row">
            <div className="col-12 text-center">
                or
            </div>
        </div>

        <br />

        <div className="row">
            <div className="col-12">
                <div class="input-group">
                    <button class="btn btn-warning btn-block">Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login