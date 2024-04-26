import React, { useEffect, useState } from 'react'

const FlipCard = ({ frontImage, backInfo }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    console.log("BAck ==>",backInfo)

    useEffect(() => {
        // const timer = setInterval(() => {
        //     setIsFlipped(prev => !prev); // Toggle the flip state every 10 seconds
        // }, 10000);

        // return () => clearInterval(timer); // Clean up the interval on component unmount
    }, [])

    return (
        <div className='grid-container'>
            <div className='card'>
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
            <div className="front">
                <img src={frontImage} className='front-image' alt="Front" />
            </div>
            <div className="back">
                <p>{backInfo} </p>
            </div>
        </div>

            </div>

        
        </div>
    );
};

export default FlipCard