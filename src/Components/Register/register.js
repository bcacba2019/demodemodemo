import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    
    const [user, setuser]=useState({
        name:"",
        email:"",
        password:"",
        repassword:""
    })

    const changehandler=(e)=>{
        const{name,value}=e.target;
        setuser({
            ...user,
            [name]:value
        })
    }

    const adduser = () =>{
        const{name,email,password,repassword}=user;
        if(name && email && password && repassword){
            if(password !== repassword){
                alert("Please enter same password")
            }
            else{
                axios.post("http://localhost:8000/user",user)
                .then((res)=>{
                    alert(res.data.message);
                })
            }
        }
        else{
            alert("All field are required")
        }
    }

  return (
    <div className='container'>
        <div className="jumbotron">
            <h1 className="display-3 text-center">User Register</h1>
            <hr className="my-2"/>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="input-group">
                    <input type="text" name="name" id="name" onChange={changehandler} className="form-control" placeholder="Enter your name" aria-describedby="sufixId"/>
                </div>
            </div>
        </div>

        <br />

        <div className="row">
            <div className="col-12">
                <div className="input-group">
                    <input type="email" name="email" id="email" onChange={changehandler} className="form-control" placeholder="Enter your Email-Id." aria-describedby="sufixId"/>
                </div>
            </div>
        </div>

        <br />

        <div className="row">
            <div className="col-12">
                <div className="input-group">
                    <input type="password" name="password" id="password" onChange={changehandler} className="form-control" placeholder="Enter your password" aria-describedby="sufixId"/>
                </div>
            </div>
        </div>

        <br />

        <div className="row">
            <div className="col-12">
                <div className="input-group">
                    <input type="password" name="repassword" id="repassword" onChange={changehandler} className="form-control" placeholder="Enter your re-password" aria-describedby="sufixId"/>
                </div>
            </div>
        </div>

        <br />

        <div className="row">
            <div className="col-12">
                <div className="input-group">
                    <button className="btn btn-success btn-block" onClick={adduser} >Register</button>
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
                <div className="input-group">
                    <button className="btn btn-warning btn-block">Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register