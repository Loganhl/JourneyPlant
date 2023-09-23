import { usePlantsContext } from "../hooks/usePlantsContext"

const PlantDetails = ({ plant }) => {
    const { dispatch } = usePlantsContext()

    const handleClick = async() => {
        const response = await fetch('/api/plants/' + plant._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_PLANT', payload: json})
        }
    }

    return (
        <div className="plant-details">
            <h4>{plant.title}</h4>
            <p><strong>Location: </strong>{plant.location}</p>
            <p><strong>Notes: </strong>{plant.notes}</p>
            <p>{plant.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )

}

export default PlantDetails