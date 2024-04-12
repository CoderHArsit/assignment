import * as React from 'react';
import { ToggleButton } from '@mui/material';

const MyComponent = () => {
    // State to track the background color of each button
    const [buttonBg, setButtonBg] = React.useState({
        adventurous: '',
        class: '',
        goodlistener: '',
    });

    
    const handleBg = (value) => {
        // Toggle the background color of the button based on its value
        setButtonBg((prevBg) => ({
            ...prevBg, 
            [value]: prevBg[value] === '#9dd79d' ? '' : '#9dd79d', 
        }));
    };

    return (
        <div className=' text-sm font-sans'> 
            
            <ToggleButton
                onClick={() => handleBg('adventurous')}
                className="text-black border- rounded-full mx-2 my-2 font-sans"
                value="adventurous"
                aria-label="adventurous"
                style={{ backgroundColor: buttonBg.adventurous,border:"2px solid " }} 
            >
                Adventurous
            </ToggleButton>
            <ToggleButton
                onClick={() => handleBg('class')}
                className="text-black border- rounded-full font-sans"
                value="class"
                aria-label="class"
                style={{ backgroundColor: buttonBg.class , border:"2px solid black"}}
            >
                Class
            </ToggleButton> 
            <ToggleButton
                onClick={() => handleBg('goodlistener')}
                className="text-black border- rounded-full mx-2 my-2 font-sans"
                value="goodlistener"
                aria-label="Good Listener"
                style={{ backgroundColor: buttonBg.goodlistener,border:"2px solid " }} 
            >
                Good Listener
            </ToggleButton>
        </div>
    );
};

export default MyComponent;
