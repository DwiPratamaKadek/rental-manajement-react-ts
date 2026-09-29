import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';

import { useFindMe } from '../../../hooks/maps/useFindMe';
import { useNearby } from '../../../hooks/maps/useNearby';

import UserLocation from './UserLocation';

export default function Map() {
     
    const me = useFindMe()
    const rental = useNearby(me)

    return(
        <MapContainer
            center={[-8.65, 115.2167]}
            zoom={13}
            style={{ height: '1000px', width: '100%' }}
            >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {me && (
                <UserLocation
                latitude={me.latitude}
                longitude={me.longitude}
                />
            )}

            {rental.map((r)=> (
                <Marker key={r.id} position={[r.latitude, r.longitude]}>
                    <Popup>
                        <strong>{r.name}</strong>
                        <br />
                        ⭐ {r.rating}
                        <br />
                        📍 {r.distance.toFixed(2)} km
                    </Popup>
                </Marker>
                
                
            ))}

        </MapContainer>
    )
} 