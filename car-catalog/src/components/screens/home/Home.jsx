import { useEffect, useState } from 'react';
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm.jsx'
import { CarService } from '../../../services/car.service.js';

function Home() {

  const [cars, setCars] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await CarService.getAll()

      setCars(response)
    }

    fetchData()
  }, [])

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
