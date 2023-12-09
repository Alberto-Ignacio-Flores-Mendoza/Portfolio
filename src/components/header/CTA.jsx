import React from 'react'
import CV from '../../assets/Alberto_Ignacio_Flores_Mendoza_CV_English_V3.pdf'
import CV2 from '../../assets/Alberto_Ignacio_Flores_Mendoza_CV_Spanish_V3.pdf'


const CTA = () => {
   return (

    <div className='cta'>
        <a href={CV} download className='btn'>CV in English</a>
        <a href={CV2} download className='btn'>CV in Spanish</a>
        <a href='#contact' className='btn btn-primary'>Lets Talk</a>
    </div>
    )
}

export default CTA