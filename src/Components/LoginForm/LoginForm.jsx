import React from 'react';
import './LoginForm.css'
import {NavLink} from "react-router-dom";

const LoginForm = () => {
    return (<div className='loginPageContent'>

            <div className="w3_agileits_top_nav">
                <ul id="gn-menu" className="gn-menu-main">

                    <li className="second logo admin">
                        <h1>
                            <NavLink to="/MainPage">Space Cargo </NavLink>
                        </h1>
                    </li>
                </ul>

            </div>

            <div className="clearfix"></div>

            <div className="login">
                <h1>Login</h1>
                <form method="post">
                    <input type="text" name="u" placeholder="Username" required="required"/>
                    <input type="password" name="p" placeholder="Password" required="required"/>
                    <button type="submit" className="btn btn-primary btn-block btn-large">Let me in</button>
                </form>
            </div>

        </div>)
}

export default LoginForm;