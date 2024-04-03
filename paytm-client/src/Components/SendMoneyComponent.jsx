import { Link } from "react-router-dom"

const SendMoneyComponent = () => {
    return (
        <div>
            <Link to="/transfer-amount">
                <button className="bg-black text-white px-3 py-2 text-sm font-medium rounded-md">
                    Send Money
                </button>
            </Link>
        </div>
    )
}

export default SendMoneyComponent
