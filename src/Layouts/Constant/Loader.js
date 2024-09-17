import React from 'react';
import { GdscAnimation } from '../../Assets';

export default function Loader() {
    return (
        <div className='w-full h-screen flex justify-center items-center m-auto'>
            <div >
                <img src={GdscAnimation} className='w-auto h-auto'/>
            </div>
        </div>
    );
};

