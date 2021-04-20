import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'
import { useHistory } from 'react-router-dom'

function Home() {
    const history = useHistory();

    return (
        <div className='home'>
            <Banner />
            <div className='home__heading'>
                <h1>Discover Experiences</h1>
                <h2>Unique experiences with local experts - in person or online</h2>
            </div>
            <div className='home__section' onClick={() => history.push('/search')}>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />

            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Adventures"
                description="Multi-day trips with meals and stays"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Experiences"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            
            <div className='home__heading'>
                <h1>Live anywhere</h1>
            </div>
            <div className='home__section' onClick={() => history.push('/search')}>
                
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Colonial House in Philadelphia"
                description="Superhost with a stunning view in sunny Philadelphia"
                price="$115/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in Miami"
                description="Enjoy the amazing beaches of Miami with this stunning penthouse"
                price="$325/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$110/night"
            />
            </div>
        </div>
    )
}

export default Home

