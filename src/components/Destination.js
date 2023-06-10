import React from 'react';
import DesData from './DesData';
import './Destination.css'
import photo1 from '../img/beach-4938036_1280.jpg'
import photo2 from '../img/polynesia-3021072_1280.jpg'
import photo3 from '../img/automobile-1838782_1280.jpg'
import photo4 from '../img/road-7201023_1280.jpg'


const Destination = () => {
    return (
        <div className='destination'>
           
            <h1> Popular Destination</h1>
            <p>Tours gives you the opportunity to see a lot within a time. </p>
        <DesData
        className ="first-des"
        heading="Editorial Foreword"
        text="The World Travel Guide (WTG) is the flagship digital consumer brand within the Columbus Travel Media portfolio. Available in English, German, and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes offbeat travel news, stories, quizzes and guides for adventurous travellers."
        photo1={photo1}
        photo2={photo2}
        />

        <DesData
        className="first-des-reverse"
        heading="The Islands of Tahiti"
        text="The Islands of Tahiti are known for their laid-back vibes. Expect romantic sunsets and giant curls of turquoise breaking over reefs. Remote and pristine, the islands give you a glimpse of paradise on Earth.The Islands of Tahiti are known for their laid-back vibes. Expect romantic sunsets and giant curls of turquoise breaking over reefs. Remote and pristine, the islands give you a glimpse of paradise on Earth.The Islands of Tahiti are known for their laid-back vibes. Expect romantic sunsets and giant curls of turquoise breaking over reefs. Remote and pristine, the islands give you a glimpse of paradise on Earth."
         photo1={photo3}
        photo2={photo4}
        />
            
        </div>
    );
};

export default Destination;