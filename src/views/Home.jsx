import React from 'react';
import data from '../data.json';
import TourCard from '../components/TourCard';

const Home = () => {
  return (
    <>
    {data.map( ele => (
        <TourCard key={ele.id} data={ele}/>
    ))}
    </>
  )
}

export default Home