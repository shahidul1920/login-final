import React from 'react'
import { HeadingAbout } from './AboutComp/HeadingAbout'
import { SecendSec } from './AboutComp/SecendSec'
import PaymentMathods from '../HomePage/HomeComp/PaymentMathods'
import Features from '../HomePage/HomeComp/Features'

export const About = () => {
    return (
        <div>
            <div className="headingSection mainContainer">
                <HeadingAbout />
            </div>

            <div className="secendSec bg-[#47c3b5]">
                <div className="mainContainer">
                    <SecendSec />
                </div>
            </div>

            <div className="mainContainer">
                <PaymentMathods />
            </div>
            <div className="">
                <Features />
            </div>
        </div>
    )
}
