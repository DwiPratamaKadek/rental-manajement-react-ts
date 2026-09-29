import { useFindMe } from '../../../hooks/maps/useFindMe';
import { useNearbyDetail } from '../../../hooks/maps/useNearbyDetail';

import Card from '../../ui/card/Card';

export default function NearbyDetail() {

    const me = useFindMe()
    const rental = useNearbyDetail(me)

    return(
        <section className='border-2 rounded-2xl'>
            {rental.map((r) => (
                <div key={r.id}>
                    <Card name={r.name} rating={r.rating}/>
                </div>
            ))}
        </section>
    )
} 