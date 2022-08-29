import React from 'react'
import DistrictDetails from '../DistrictDetails';
import DistrictWindDetails from '../DistrictWindDetails/Index';

const Home = () => {
    return (
        <main>
            <DistrictWindDetails />
            <DistrictDetails />
        </main>
    )
}

export default Home;