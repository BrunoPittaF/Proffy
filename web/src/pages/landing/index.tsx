import React from 'react';
import './styles.scss';

import logoImg from '../../assets/images/logo.svg';
import studyIcon from '../../assets/images/icons/study.svg';

import landingImg from '../../assets/images/landing.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
export default function Landing (){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Logotipo"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="estudar "/>
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="dar aulas"/>
                        Estudar
                    </a>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas 
                    <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>


        </div>
    )
}