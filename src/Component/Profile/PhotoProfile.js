import React from 'react'
import photo from '../../photo.jpg'
import './Style.css';

export default function PhotoProfile() {
    return (
        <div>
            < img className='photo'  src = { photo }  alt = "photo"  / >
        </div>
    )
}
