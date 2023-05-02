import React from 'react';
import { useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
  return (
    <div className="container pt-3">
        <form>
            <h1 className="text-center"> Registration</h1>
            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="username" 
                    required/>
                <br/>
                </div>
                <div className="form-group">
                <input type="password" 
                    className="form-control" 
                    placeholder="password" 
                    required/>
                <br/>
                </div>
                <div className="text-center">
                    <button onClick={()=> navigate("/login")} type="submit" className="btn btn-primary">Sign In</button>
                </div>
        </form>
    </div>
  )
}

export default Registration