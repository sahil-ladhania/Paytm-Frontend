import SendMoneyComponent from './SendMoneyComponent';

const UserComponent = () => {
    return (
        <>
            <div className='px-10 flex items-center justify-between h-20'>
                <h2>User 1</h2>
                <SendMoneyComponent/>
            </div>
        </>
    )
}

export default UserComponent
