import React from 'react'
//styles
import * as s from "./banner.style"
//image
import iconeBanner from '../../img/banner-img.png'

export const Banner: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <div className="parallax"></div>
            <div className="innertxt">
                <h1>Optimize your rental properties by leasing to Thunderswell</h1>
                <button>Learn More</button>
                <img src={iconeBanner} alt="icone banner" />
            </div>


        </s.Wrapper>
    )
}
