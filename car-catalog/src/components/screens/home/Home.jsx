import { useState } from 'react';
import CarItem from './car-item/CarItem'
import {cars as carsData} from './cars.data.js'
import CreateCarForm from './create-car-form/CreateCarForm.jsx'

function Home() {

  const [cars, setCars] = useState(carsData);
  console.log(cars)

  return (
    <>
      <div className='wrapper'>
        <h1>
          Cars catalog
        </h1>
        <CreateCarForm setCars={setCars} />
        <div className='wrapper-cards'>
          {cars.length ? (
            cars.map(car => <CarItem key={car.id} car={car} />)
          )
           : (
            <p className='wrapper-cards__empty'>There is no cars</p>
           )
        }
        </div>
      </div>
    </>
  )
}

export default Home
