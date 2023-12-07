import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import HeaderTechStack from './HeaderTechStack'


const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Alberto Flores</h1>
                <h5 className='text-light'>Jr Front-End Developer</h5>
                <CTA />
                <HeaderSocials></HeaderSocials>
                <HeaderTechStack></HeaderTechStack>
            </div>
        </header>

    )
}

export default Header