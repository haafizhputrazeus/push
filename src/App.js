import "./App.css";
import NavigationBar from "./component/Home/NavigationBar";
import ButtonKonten from "./component/Home/ButtonKonten";
import Katalog from "./component/Home/Katalog";
import Konten from "./component/Home/Konten";
import Footer from "./component/Home/Footer";
import SlideKonten from "./component/Home/SlideKonten";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes";

function App() {
    return (
        <Router basename={"/"}>
            <MainRoutes />
            <div>
                <div>
                    <NavigationBar />
                </div>
                {/* <div>
                    <SlideKonten />
                </div> */}
                <div>
                    <Konten />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
