import React, { useState } from 'react'
import '../index.css'

const popup = () => {
    const [isOpen, setOpen] = useState(false)

    const togglePopup = () => {
        setOpen(!isOpen)
    }
    return (
        <div className='popup'>
            <button className='btn' onClick={togglePopup}>Popup</button>
            {isOpen && (
                <div className='popup-card'>
                    <div className='popup-content'>
                        <p>this is popup</p>
                        <button className='btn' onClick={togglePopup}>close</button>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default popup