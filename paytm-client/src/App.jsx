import { BrowserRouter , Routes , Route } from 'react-router-dom';
import LoginPageComponent from "./Components/LoginPageComponent"
import SignupPageComponent from "./Components/SignupPageComponent"
import DashboardPageComponent from './Components/DashboardPageComponent';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignupPageComponent/>} />
                    <Route path="/login" element={<LoginPageComponent/>} />
                    <Route path="/dashboard" element={<DashboardPageComponent/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
