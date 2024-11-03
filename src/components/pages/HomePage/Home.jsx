import React from 'react'
import Hero from './HomeComp/Hero'
import Catgr from './HomeComp/Catgr'
import Sponsored from './HomeComp/Sponsored'
import Features from './HomeComp/Features'
import PaymentMathods from './HomeComp/PaymentMathods'
import Discount from './HomeComp/Discount'

export default function Home() {
  return (
    <div>

      <div className="hero">
        <Hero />
      </div>

      <div className="otherSecs mainContainer">
        <Catgr />

        <Sponsored />

      </div>

      <div className="fullSec">
        <Features />
      </div>

      <div className="otherSecs mainContainer">
        <PaymentMathods />

        <Discount />
      </div>


    </div>
  )
}
