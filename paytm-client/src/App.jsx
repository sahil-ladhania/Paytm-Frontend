import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPageComponent from "./Components/LoginPageComponent"
import SignupPageComponent from "./Components/SignupPageComponent"
import DashboardPageComponent from './Components/DashboardPageComponent';
import TransferMoneyComponent from './Components/TransferMoneyComponent';

function App() {
    return (
        <>
            <RecoilRoot>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SignupPageComponent/>} />
                        <Route path="/login" element={<LoginPageComponent/>} />
                        <Route path="/dashboard" element={<DashboardPageComponent/>} />
                        <Route path="/transfer-amount" element={<TransferMoneyComponent/>} />
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </>
    )
}

export default App
