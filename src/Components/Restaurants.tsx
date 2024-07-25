import { useEffect, useState } from 'react';
import { getRestaurants } from '../Services/apis.ts'


function Restaurants() {

    const [restaurants, setRestaurants] = useState<string>()

    useEffect(()=>{
        fetchRestaurants()
    },[])



    async function fetchRestaurants() {
        try {
            const response = await getRestaurants();
            setRestaurants(response!.success)
        } catch (e) {
            console.log('GET call failed: ');
        }
    }

  return (
    <>
      {restaurants}
    </>
  )
}

export default Restaurants;
