import React from 'react'
import Heros from "../components/Heros";
import OurCollections from '../components/OurCollections';
import CreateAndSellNow from '../components/CreateAndSellNow';
import BuildYourNftProfile from '../components/BuildYourNftProfile';


function HomePage() {
  return (
    <div> 
        <Heros/>
        <OurCollections/>
        <CreateAndSellNow/>
        <BuildYourNftProfile/>
    </div>
  )
}

export default HomePage
