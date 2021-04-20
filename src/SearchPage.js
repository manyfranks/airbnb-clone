import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p> 62 Stays • 26 August to 30 August • 2 Guests </p>
                <h1>Stays Nearby</h1>
                <Button 
                    variant="outlined">Cancellation Flexibility</Button>
                <Button 
                    variant="outlined">Type of Place</Button>
                <Button 
                    variant="outlined">Price</Button>
                <Button 
                    variant="outlined">Rooms and Beds</Button>
                <Button 
                    variant="outlined">More Filters</Button>
            </div>
            <SearchResult
                img="https://cdn.vox-cdn.com/thumbor/qgQrZikp7XSdns41hyhNTXypgDA=/0x0:4560x3300/1200x800/filters:focal(1916x1286:2644x2014)/cdn.vox-cdn.com/uploads/chorus_image/image/60077225/House_Calls_Brooklyn_Zames_Williams_living_room_2_Matthew_Williams.0.jpg"
                location="Private room in Lower East Side"
                title="Stay at this Manhattan apartment"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Laundry"
                star={4.7}
                price="$115 / night"
                total="$705 total" 
            />

            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in Brooklyn"
                title="Luxury Artist Loft"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="$40 / night"
                total="$157 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Historic House in Queens"
                title="4 Bedroom Home in Queens"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Laundry"
                star={3.8}
                price="$35 / night"
                total="$207 total"
            />

            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Upper East Side Apartment"
                title="1 Bedroom with Central Park Views"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Air Conditioning"
                star={4.1}
                price="$55 / night"
                total="$320 total"
            />

            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="East Village Walkup"
                title="1 Bedroom in East Village"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Great Location"
                star={4.9}
                price="$60 / night"
                total="$450 total"
            />

            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Yankee Stadium Retreat"
                title="Townhouse in the Bronx"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Laundry"
                star={4.3}
                price="$65 / night"
                total="$480 total"
            />

            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Harlem Gem"
                title="5 Star Apartment in Harlem"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Laundry"
                star={3.8}
                price="$90 / night"
                total="$650 total"
            />
        </div>
    )
}

export default SearchPage
