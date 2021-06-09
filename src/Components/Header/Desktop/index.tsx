import React from 'react'
//packages
import { Link } from 'react-router-dom'
//style
import * as s from './header.desktop.style'
//icons
import { AiOutlineMail } from "react-icons/ai"
import { FaInstagram, FaFacebookF } from "react-icons/fa"
//images
import logo from "../../../img/logo.png"

export const HeaderDesktop: React.FC = (): JSX.Element => {

    const styleLink = {
        textDecoration: "none",
    }

    return (
        <s.Wrapper>
            <s.Container className="container">

                <div className="wrapper-contact">

                    <div className="wrapper-email">
                        <p>Questions?</p>
                        <p className="style-p">|</p>
                        <p><AiOutlineMail className="icone-email" />partner@thunderswell.com</p>
                    </div>

                    <div className="wrapper-rede-social">
                        <FaFacebookF className="icone-rede-social facebook-icon" />
                        <FaInstagram className="icone-rede-social" />
                    </div>

                </div>

                <div className="wrapper-menu">
                    <div className="wrapper-logo">
                        <img src={logo} alt="logo Thunderswell" />
                    </div>

                    <div className="wrapper-menu-desktop">
                        <nav>
                            <ul>
                                <li><Link to="/" className="link" style={styleLink}>Why Lease to Thunderswell?</Link></li>
                                <li><Link to="/" className="link" style={styleLink}>Who we are</Link></li>
                                <li><Link to="/" className="link" style={styleLink}>How it works</Link></li>
                                <li><Link to="/" className="link" style={styleLink}>Advantage</Link></li>
                                <li><Link to="/" className="link" style={styleLink}>Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>



            </s.Container>


        </s.Wrapper>
    )
}
