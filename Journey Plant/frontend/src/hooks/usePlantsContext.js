import { PlantsContext } from '../context/PlantContext'
import { useContext } from 'react'

export const usePlantsContext = () => {
    const context = useContext(PlantsContext)

    if (!context) {
        throw Error('Context must be used inside Provider!')
    }

    return context
}