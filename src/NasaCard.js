import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NasaCard() {
    const [ nasaData, setNasaData] = useState('');
    console.log({ setNasaData });

    useEffect( () => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')

            .then(res => {
                console.log(res.data)
                const imgURL = res.data.hdurl
                const title = res.data.title
                const date = res.data.date
                const caption = res.data.explanation
                console.log(imgURL)
                // const title = res.data

            })

            .catch(err => {
                console.log('Oopsie!', err)
            })
    }, [])

    return (
        <div>
            <h2>
                {/* { title } */}
            </h2>
            <h3>
                {/* { date } */}
            </h3>
            <img src={'imgURL'} alt=''/>
            <p className='date'>
                {/* { caption } */}
            </p>
        </div>
    )
}







export default NasaCard;