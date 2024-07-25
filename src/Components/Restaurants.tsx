import { useEffect, useState } from 'react';
import { getRestaurants } from '../Services/apis.ts'

function Restaurants() {

    const [restaurants, setRestaurants] = useState()

    useEffect(()=>{
        getRestaurants()
        .then(res=>{
            console.log('Component res', res.success)
            setRestaurants(res.success)
        })
    },[])

  return (
    <>
      {restaurants}
    </>
  )
}

export default Restaurants;
