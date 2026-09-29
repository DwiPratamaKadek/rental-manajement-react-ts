import type { CardType } from "../../../types/card/CardType"


export default function Card({name, rating}: CardType) {
    return(
        <section>
            <div>
                <h1>{name}</h1>
                <p>{rating}</p>
            </div>
        </section>
    ) 
}