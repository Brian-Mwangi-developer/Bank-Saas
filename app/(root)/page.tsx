import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: "Brian", lastName:"Smith", email: "brian@gmail.com"};
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your Account transaction efficiently. " />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.40} />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSideBar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 125.70},{currentBalance:500}]} />
        </section>
    )
}

export default Home