import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Next Js'} progress={'25%'} width={'25%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Django'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Cypress'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'UI Automation'} progress={'76%'} width={'76%'} />
            </div>

            <div >
            <Tittle title={'Experience'} span={'Experience'} />
            <div className="servives-container" style={{display:"flex",flexDirection:"column"}}>

               <a target="_blank" href="http://dsinnovators.com/" style={{textDecoration: "none", color:"#A4ACC4"}} ><h1>Dynamic Solution Innovators</h1></a>
                <p>Software Quality Assurance Engineering</p>
                <p> February 2021 - Present</p>
            </div>
            </div>

            <div style={{margin:"4rem 0"}}>
            <Tittle title={'Education'} span={'Education'} />
            <div className="servives-container" style={{display:"flex",flexDirection:"column"}}>
                <h1>B.Sc in Computer Science & Engineering</h1>
                <p>BRAC University </p>
                <p> January 2016 - October 2020</p>
            </div>
            </div>
        </div>
    )
}

export default AboutPage;
