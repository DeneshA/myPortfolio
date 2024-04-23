import React, { useEffect, useState } from 'react'
import FlipCard from './FlipCard'
import ProfileData from '../data/profile.json'

import '../sytles/Skillset.css'

export default function SkillSet() {

    const [cards, setCards] = useState([])

    useEffect(() => {

        setCards(ProfileData.Skill_Sets)
        console.log(ProfileData.Skill_Sets)
    }, [])

    return (
        <div className="grid-container">
            {
                cards.map(card => (
                    <FlipCard
                     key={card.skill_id}
                        frontImage={card.src_location}
                        backInfo={card.industry}
                    />
                ))
            }

        </div>
    )
}