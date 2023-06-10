import React from 'react';
import './Trip.css';
import TripData from './TripData';
import photo1 from '../img/places-cotswolds-01.jpg'
import photo2 from '../img/lake-district-views-012.jpg'
import photo3 from '../img/york-weekend-breaks-uk-3.jpg'
const Trip = () => {
    return (
        <div className='trip'>
            <div className="recent">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google maps.</p>
            </div>
            <div className="trip-card">
                <TripData
                photos={photo1}
                header="SHORT TRIP OR WEEKEND BREAK IN THE UK"
                text="Fresh air and natural scenery are great places to start. Rolling green countryside etched with walking paths and framed by dry stone walls; or dramatic windswept coastlines battering iconic cliffs into wilderness perfection."
                />
                  <TripData
                photos={photo2}
                header="FINE DINING IN THE LAKE DISTRICT"
                text="There is no doubt about it, the Lake District is one of the most scenic destinations for a short break in the UK. Craggy mountains frame shimmering lakes connected by rivers that course through valleys, creating some of the best territory in the country."
                />
                  <TripData
                photos={photo3}
                header="THE GRAND SIGHTS OF THE WALLED CITY OF YORK"
                text="York is a preserved walled city that continues to reinvent itself. From Roman settlement to captured Viking town, to the inspiration for Hollywood films, York is a city break with a past."
                />
            </div>
        </div>
    );
};

export default Trip;