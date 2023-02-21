import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Contact = () => {
    // const [photos,setPhotos] = useState([]);
    const loaded = useLoaderData();
    const datay = [...loaded.slice(4980)];
    // if(data){
    //     setPhotos(data)
    // }
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/photos")
    //     .then(res=>res.json())
    //     .then(data => setPhotos(data))
    // },[])
    return (
        <div>
            THis is contact
            <Link to="/" className='bg-red-500'> Click to visit home</Link>
            <p>{
                    datay.length
                }

            </p>
            {datay.map(u=> <div><img src={u.url} alt="img" /></div>)}
        </div>
    );
};

export default Contact;