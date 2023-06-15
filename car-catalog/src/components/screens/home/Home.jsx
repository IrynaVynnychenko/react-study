import { useMemo } from 'react';
import CarItem from './car-item/CarItem'
import {cars} from './cars.data.js'

function Home() {

  const filteredCars = useMemo(() => 
    cars.filter(car => car.price > 20000), []
  );

  return (
    <>
      <div className='wrapper'>
        <h1>
          Cars catalog
        </h1>
        <div className='wrapper-cards'>
          {filteredCars.length ? filteredCars.map(car => (
            <CarItem key={car.id} car={car}/>
          ))
           : <p className='wrapper-cards__empty'>There is no cars</p>
        }
        </div>
      </div>
    </>
  )
}

export default Home
