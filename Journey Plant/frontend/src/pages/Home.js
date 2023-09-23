import { useEffect }from 'react'
import { usePlantsContext } from '../hooks/usePlantsContext'

import PlantDetails from '../components/PlantDetails'
import PlantForm from '../components/PlantForm'

const Home = () => {
    const {plants, dispatch} = usePlantsContext()

    useEffect(() => {
        const fetchPlants = async () => {
            const response = await fetch('/api/plants')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_PLANTS', payload: json})
            }
        }

        fetchPlants()
    }, [])


    return (
        <div className="home">
            <div className="plants">
                {plants && plants.map((plant) => (
                    <PlantDetails key={plant._id} plant={plant} />
                    
                ))}
            </div>
            <PlantForm />
        </div>
    )
}

export default Home