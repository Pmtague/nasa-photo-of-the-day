import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Import Image Styling
import { Image, Header, Icon, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function NasaCard() {
    const [ nasaData, setNasaData] = useState('');
    const [ title, setTitle] = useState();
    const [ date, setDate] = useState();
    const [ caption, setCaption] = useState();

    useEffect( () => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DngedQDWYqFLh2mupmsu1Gtpngs0mkQhg1BVL3g3&date=2019-07-12')

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
        <Card centered circular size='massive'>
            <Card.Content extra>
                <Card.Header>{ title }</Card.Header>
                <Card.Meta>{ date }</Card.Meta>
            </Card.Content>
            <Image
            src={ nasaData } 
            as='a'
            href='https://apod.nasa.gov/apod/ap190712.html'
            target='blank'
            size='medium'
            circular 
            wrapped ui={false} 
            />
            <Card.Content>
                <Card.Description>
                { caption }
                </Card.Description>
            </Card.Content>
        </Card>
        // <div>
        //     <Header as='h3' color='grey' textAlign='center'>
        //         { title }
        //     </Header>
        //     <Header as='h4' color='grey'>
        //         { date }
        //     </Header>
        //     <Image 
        //     className='image'
            // src={ nasaData } 
            // as='a'
            // href='https://apod.nasa.gov/apod/ap190712.html'
            // target='blank'
            // size='medium'
            // circular
        //     floated='right'
        //     />
        //     <p>
        //         { caption }
        //     </p>
        // </div>
    )
}







export default NasaCard;