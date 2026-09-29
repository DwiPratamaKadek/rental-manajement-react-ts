
import { Marker, Popup} from 'react-leaflet';

import type { userLocation } from '../../../types/maps/userLocation';

export default function UserLocation({latitude, longitude} : userLocation) {
    return (
      <Marker position={[latitude, longitude]}>
         <Popup>📍 Lokasi saya </Popup>
      </Marker>
    )

}