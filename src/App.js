import MainPage from "./Components/MainPage/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import CargoContainer from "./Components/Cargo/CargoContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/Profile";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="main-content">
                <HeaderContainer></HeaderContainer>
                <div className="clearfix"></div>

                <div className="inner_content">
                    <Routes>
                        <Route exact path="/MainPage" element={<MainPage/>}/>
                        <Route exact path="/Cargo" element={<CargoContainer />}/>
                        <Route exact path="/LoginForm" element={<LoginForm/>}/>
                        <Route exact path="/Profile/:userId" element={<ProfileContainer/>}/>
                        <Route exact path="/" element={<LoginForm/>}/>
                        <Route exact path="/Users" element={<UsersContainer/>} />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
