import { useState } from "react";
import cx from "classnames";
import { useNavigate } from "react-router-dom";


const Login = () =>  {
    const [forcus, setFocus] = useState({
        username:false,
        password:false
    })

    const navigate = useNavigate()

    const [values, setValues] = useState({
        username:"",
        password:""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/admin");

    }
    return <div className="login"> 
            <p className="login__page-header">
               <center> <h3>Login</h3></center>
                <h6>User Name: admin</h6>
                <h6>Password: vyrae</h6>

            </p>
            <form onSubmit={handleSubmit} autoComplete="off" className="login__form">
                <fieldset className="form-group">
                    <input autoComplete="false" auto onChange={e=>setValues({...values, username:e.target.value})} type={"text"} value={values.username} onFocus={e=>setFocus({...forcus,username:true })} className={cx("form-control",{"login-focus":forcus.username || values.username != ""})} />
                    <span onClick={e=>setFocus({...forcus,username:true })} className="form-placeholder">User Name</span>

                </fieldset>

                <fieldset className="form-group">
                    <input onChange={e=>setValues({...values, password:e.target.value})} type={"password"} value={values.password} onFocus={e=>setFocus({...forcus,password:true })} className={cx("form-control",{"login-focus":forcus.password || values.password != ""})} />
                    <span onClick={e=>setFocus({...forcus,password:true })} className="form-placeholder">Password</span>
                </fieldset>

                <fieldset className="form-group">
                    <button className="product__detail--button" > Login </button>
                </fieldset>
            </form>
    </div>
}

export default Login;