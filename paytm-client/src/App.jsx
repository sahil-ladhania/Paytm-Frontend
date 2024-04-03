import { BrowserRouter , Routes , Route } from 'react-router-dom';
import LoginPageComponent from "./Components/LoginPageComponent"
import SignupPageComponent from "./Components/SignupPageComponent"
import DashboardPageComponent from './Components/DashboardPageComponent';
import TransferMoneyComponent from './Components/TransferMoneyComponent';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignupPageComponent/>} />
                    <Route path="/login" element={<LoginPageComponent/>} />
                    <Route path="/dashboard" element={<DashboardPageComponent/>} />
                    <Route path="/transfer-amount" element={<TransferMoneyComponent/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
