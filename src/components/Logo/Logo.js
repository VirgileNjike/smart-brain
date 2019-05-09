import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 110, width: 110 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '4px'}} src={brain} alt='facerecognitionbrain Logo' />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;