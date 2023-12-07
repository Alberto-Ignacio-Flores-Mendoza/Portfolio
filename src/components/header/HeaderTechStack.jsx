import React from 'react'
import {BiLogoCss3, BiLogoHtml5 ,BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoMongodb} from 'react-icons/bi'
const HeaderTechStack = () => {
    return (
       <> 
       <p className='techstack'>
        Tech Stack
       </p>
        <div className='header__techstack'>
            <BiLogoCss3></BiLogoCss3>
            <BiLogoHtml5></BiLogoHtml5>
            <BiLogoJavascript></BiLogoJavascript>
            <BiLogoReact></BiLogoReact>
            <BiLogoNodejs></BiLogoNodejs>
            <BiLogoMongodb></BiLogoMongodb>
           
        </div>
        </>
    )
  
}

export default HeaderTechStack