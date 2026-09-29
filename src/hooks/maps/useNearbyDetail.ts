
import type { userLocation } from "../../types/maps/userLocation"
import { rental } from "../../constants/rental/rentalData"
import { calculateDistance } from "../../utils/distance"

import { useMemo } from "react"


export const useNearbyDetail = (location: userLocation | null) => {
    const nearbyRentals = useMemo(()=> {
        if(!location){
            return []
        }

        return rental.map((rental) => ({
             ...rental,

            distance: calculateDistance(
                location.latitude,
                location.longitude,
                rental.latitude,
                rental.longitude
            ),
        }))
        .filter((rental) => rental.distance <= 5)
        .sort((a, b) => a.distance - b.distance)
        
    }, [location])
    return nearbyRentals
}