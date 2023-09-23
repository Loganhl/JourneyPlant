import { useState } from "react"
import { usePlantsContext } from '../hooks/usePlantsContext'

const PlantForm = () => {
    const { dispatch } = usePlantsContext()
    const[title, setTitle] = useState('')
    const[location, setLocation] = useState('')
    const[notes, setNotes] = useState('')
    const[error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const plant = {title, location, notes}

        const response = await fetch('/api/plants', {
            method: 'POST',
            body: JSON.stringify(plant),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setLocation('')
            setNotes('')
            setError(null)
            console.log('New plant added!', json)
            dispatch({type: 'CREATE_PLANT', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Plant</h3>

            <label>Plant Name: </label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

        <label>Plant Location: </label>
            <input
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            />

        <label>Plant Notes: </label>
            <input
                type="text"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
            />

            <button>Add Plant</button>
            {error && <div className="error">{error}</div>}
        </form>
        
    )
}

export default PlantForm