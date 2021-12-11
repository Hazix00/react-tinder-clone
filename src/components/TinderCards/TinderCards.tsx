import { ReactElement, useEffect, useState } from 'react'
import './TinderCards.scss'
import Person from '../../models/person.model'
import PeopleService from '../../services/people.service'
import TinderCard from 'react-tinder-card'

export default function TinderCards(): ReactElement {
    
    const peopleService = new PeopleService()
    const [people, setPeople] = useState(new Array<Person>())

    useEffect(() => {
        const fetchData = async() => {
            const response = await peopleService.getAll()
            setPeople(response.data)
        }
        fetchData()
    }, [])

    const swiped = (direction:string , nameToDelete: string) => {
        console.log(`removing ${nameToDelete}`)
    }

    const outOfFrame = (name: string) => {
        console.log(`${name} left the screen`)     
    }

    return (
        <div className="tinderCards">
            <div className="tinterCards__container">
                {
                    people.map(person => 
                        <TinderCard 
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}>
                            <div 
                                className="card"
                                style={{backgroundImage: `url(${person.image})`}}>
                                <h3 className="card__title">{ person.name }</h3>
                            </div>
                        </TinderCard>
                    )
                }
            </div> 
        </div>
    )
}
