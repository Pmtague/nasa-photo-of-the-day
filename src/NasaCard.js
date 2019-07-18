import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NasaCard() {
    const [ nasaData, setNasaData] = useState('');
    const [ title, setTitle] = useState();
    const [ date, setDate] = useState();
    const [ caption, setCaption] = useState();

    useEffect( () => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')

            .then(res => {
                console.log(res.data)
                setNasaData(res.data.hdurl)
                setTitle(res.data.title)
                setDate(res.data.date)
                setCaption(res.data.explanation)

            })

            .catch(err => {
                console.log('Oopsie!', err)
            })
    }, [])

    return (
        <div>
            <h2>
                { title }
            </h2>
            <h3>
                { date }
            </h3>
            <img className='image' src={ nasaData } />
            <p>
                { caption }
            </p>
        </div>
    )
}







export default NasaCard;