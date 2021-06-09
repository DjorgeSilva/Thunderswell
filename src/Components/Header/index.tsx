import React from 'react'
//style
import * as s from "./header.style"
//packages
import { Link } from 'react-router-dom'
//images
import logo from "../../img/logo.png"
//icons
import { IoMenu, IoClose } from "react-icons/io5"

interface Props {
    isOpen: boolean;
    setIsOpen: (active: boolean) => void;
}


export const Header: React.FC<Props> = ({ isOpen, setIsOpen }: Props): JSX.Element => {

    const styleLink = {
        textDecoration: "none",
    }

    return (
        <React.Fragment>

            <s.Wrapper>
                <s.MenuMobile className="container">
                    <div className="wrapper-img">
                        <img src={logo} alt="logomarca Thunderswell" />
                    </div>

                    <div className="wrapper-menu-mobile">

                        {isOpen ?
                            <IoClose className="icone" onClick={() => setIsOpen(!isOpen)} /> :
                            <IoMenu className="icone" onClick={() => setIsOpen(!isOpen)} />
                        }

                    </div>
                </s.MenuMobile>

            </s.Wrapper>

            <s.SideBar isOpen={isOpen}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" style={styleLink} className="link">
                                <img src={logo} alt="logomarca Thunderswell" className="logo" />
                            </Link>
                        </li>

                        <li>
                            <Link to="/" style={styleLink} className="link">Why Lease to Thunderswell?</Link>
                        </li>

                        <li>
                            <Link to="/" style={styleLink} className="link">Who we are</Link>
                        </li>

                        <li>
                            <Link to="/" style={styleLink} className="link">Who it works</Link>
                        </li>

                        <li>
                            <Link to="/" style={styleLink} className="link">Advantage</Link>
                        </li>

                        <li>
                            <Link to="/" style={styleLink} className="link">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </s.SideBar>

        </React.Fragment>
    )
}
