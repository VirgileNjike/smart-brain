import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
        return (
            <nav className='shadow-5' style={{display: 'flex', justifyContent: 'flex-end', 'line-height': 1.1}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
                {/* <p onClick={() => onRouteChange('history')} className='f3 link dim black underline pa3 pointer' style={{'margin-right': 0}}>History</p> */}
            </nav>
        );
    } else{
        return (
            <nav className='shadow-5' style={{display: 'flex', justifyContent: 'flex-end', 'line-height': 1.1}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign in</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;