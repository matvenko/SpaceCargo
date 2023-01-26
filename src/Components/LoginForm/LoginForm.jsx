import React from 'react';
import {Formik, Form, Field} from 'formik';
import s from "./Login.module.css"
import * as Yup from 'yup';
import {connect} from "react-redux";
import {loginUser, logOutUser} from "../../redux/auth-reducer";
import {Navigate, useNavigate} from "react-router-dom";

const DisplayingErrorMessagesSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const Login = (props) => {
    if (props.isAuth) {
        return <Navigate replace to="/ProfileContainer/17734"/>;
    }

    return (
        <div className={s.loginContainer}>
            <h1>Displaying Error Messages</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={values => {
                    console.log(values);
                    props.loginUser(values.email, values.password, values.rememberMe)
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <Field name="email"/>
                        {touched.email && errors.email && <div>{errors.email}</div>}
                        <Field name="password"/>
                        {touched.password && errors.password && <div>{errors.password}</div>}
                        <Field name="rememberMe" type={"checkbox"}/>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

const mapsTateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapsTateToProps, {loginUser, logOutUser})(Login)