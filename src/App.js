import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import Cargo from "./Components/Cargo/Cargo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";

const App = (props) => {
    debugger
    return (
        <BrowserRouter>
            <div className="main-content">
                <Header></Header>
                <div className="clearfix"></div>

                <div className="inner_content">
                    <Routes>
                        <Route exact path="/MainPage" element={<MainPage/>}/>
                        <Route exact path="/Cargo" element={<Cargo state={props.state.cargoPage} dispatch={props.dispatch} />}/>
                        <Route exact path="/LoginForm" element={<LoginForm/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
