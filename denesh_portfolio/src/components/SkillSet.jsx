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
        <div className="grid-container container">
            {/* <div className="row"> */}
                {cards.map(card => (
                    <div key={card.skill_id} className="col-md-4 box-item">
                        <div className="flip-box">
                        {/* <div className="flip-box-front text-center" style={{ backgroundImage: `url(${card.src_location})` }}> */}
                            <div className="flip-box-front text-center" >
                                <img className="skill-img" src={card.src_location} alt={card.skill_title} />
                                <p>{card.skill_title}</p>
                                <div className="inner color-white">  {/* Check this class name, corrected from colo-white to color-white */}
                                    {/* <p>Tool: {card.Abbriviation}</p>
                                    <p>Applied in: {card.industry}</p>
                                    <p>Skill Level: {card.level_knowledge}</p> */}
                                </div>
                            </div>
                            <div className="flip-box-back text-center" >
                                <div className="inner color-white">
                                    <p><span className='caption'>Tool:</span> <br></br>{card.Abbriviation}</p>
                                    <p><span className='caption'>Applied in:</span><br></br> {card.industry}</p>
                                    <p><span className='caption'>Skill Level:</span> <br></br>{card.level_knowledge}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        // </div>
    )
}