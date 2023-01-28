import React, {Component, Suspense} from "react";
import MainPage from "./Components/MainPage/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {logOutUser} from "./redux/auth-reducer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import PreLoader from "./Components/common/PreLoader";
const CargoContainer = React.lazy(() => import("./Components/Cargo/CargoContainer"));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <PreLoader/>
        }
        return (
                <BrowserRouter>
                    <div className="main-content">
                        <HeaderContainer logOutUser={logOutUser}></HeaderContainer>
                        <div className="clearfix"></div>

                        <div className="inner_content">
                            <Suspense fallback={<div><PreLoader /></div>}>
                                <Routes>
                                    <Route exact path="/MainPage" element={<MainPage/>}/>
                                    <Route exact path="/Cargo" element={<CargoContainer/>}/>
                                    <Route exact path="/LoginForm" element={<LoginForm/>}/>
                                    <Route exact path="/ProfileContainer/:userId" element={<ProfileContainer/>}/>
                                    <Route exact path="/ProfileContainer/" element={<ProfileContainer/>}/>
                                    <Route exact path="/" element={<LoginForm/>}/>
                                    <Route exact path="/Users" element={<UsersContainer/>}/>
                                </Routes>
                            </Suspense>
                        </div>

                    </div>
                </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default connect(mapStateToProps, {initializeApp})(App);
