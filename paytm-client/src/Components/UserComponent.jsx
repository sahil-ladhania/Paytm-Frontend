import SendMoneyComponent from './SendMoneyComponent';

const UserComponent = () => {
    return (
        <>
            <div className='px-10 flex items-center justify-between h-20'>
                <div className='flex items-center'>
                    <img className='h-10 mr-2' src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg' alt='user-profile-image'/>
                    <h2>User 1</h2>
                </div>
                <SendMoneyComponent/>
            </div>
        </>
    )
}

export default UserComponent
