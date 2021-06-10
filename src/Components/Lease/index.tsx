import React from 'react'
//style
import * as s from "./lease.style"
//images
import handshake from "../../img/handshake.png"
import diamond from "../../img/diamond.png"
import graphic from "../../img/graphic.png"
//packages
import { Row, Col } from 'react-bootstrap'


export const Lease: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <s.Container>
                <h1>Why Lease to <br/>Thunderswell?</h1>
                <p>Introducing Thunderswell’s 360° Lease. Designed with Property Owners in mind.</p>

                <Row className="row container">
                    <Col xs={12} md={4} className="coluna">
                        <img src={handshake} alt="icones" className='icone-grid' />
                        <h4>Lower vacancy</h4>
                        <p>In fact our average rental property has been under lease for more than 4 years and counting. We lease your property, signing a 2 year lease with the intention to renew again and again. Setting up a new property is a significant investment for us.  Once we do so, you can rest assured we want to keep working together for the long-tem.</p>
                    </Col>

                    <Col xs={12} md={4} className="coluna">
                        <img src={graphic} alt="icones" className='icone-grid' />
                        <h4>Higher income</h4>
                        <p>We pay above market rents and even offer an automatic rent escalator where appropriate. In addition, owners typically find working with us to be so simple, they decide to opt out of their property management services and keep 100% of the rent revenue.</p>
                    </Col>

                    <Col xs={12} md={4} className="coluna">
                        <img src={diamond} alt="icones" className='icone-grid' />
                        <h4>Less hassle</h4>
                        <p>We handle most of the light repairs that come up, often at our expense, without bothering our owner-partners. And Thunderswell maintains your property throughout the year, instead of allowing deferred maintenance items to accumulate.</p>
                    </Col>

                </Row>
            </s.Container>
        </s.Wrapper>
    )
}
