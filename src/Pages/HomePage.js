import React from 'react';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Sultan Parvez</span>
                </h1>
                <p className="h-sub-text">
                    A Software Engineer, Currently working as an Software Quality Assurance Engineer at DSi.
                    I love to learn and explore new things.
                </p>
                <div className="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/sultanparvez/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </a>
                    <a target="_blank" href="https://github.com/fahimdipto" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>

                </div>
            </header>
        </div>
    )
}

export default HomePage;
