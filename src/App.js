import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import CargoContainer from "./Components/Cargo/CargoContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="main-content">
                <Header></Header>
                <div className="clearfix"></div>

                <div className="inner_content">
                    <Routes>
                        <Route exact path="/MainPage" element={<MainPage/>}/>
                        <Route exact path="/Cargo" element={<CargoContainer store={props.store}/>}/>
                        <Route exact path="/LoginForm" element={<LoginForm/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
