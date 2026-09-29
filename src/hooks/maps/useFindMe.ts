import { useState, useEffect } from "react"

import type { userLocation } from "../../types/maps/userLocation"


export const useFindMe = () => {
    
    const [location, setLocation] = useState<userLocation | null>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords

                setLocation({latitude, longitude})

            },
            (error) => {
                console.error("Gagal mendapatkan posisi user",error)
            }
        )
    })
    return location
}