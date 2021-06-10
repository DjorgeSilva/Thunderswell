import React from 'react'
//style
import * as s from "./home.style"
//Components
import { Banner } from '../../Components/Banner'
import { Lease } from '../../Components/Lease'

export const Home: React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <Banner />

            <s.Main>
                <Lease />
            </s.Main>

        </React.Fragment>
    )
}
