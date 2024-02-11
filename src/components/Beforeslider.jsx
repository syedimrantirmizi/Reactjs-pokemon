import React from 'react'
import { tradingCard, varoomzoom, mimikyu, shadowcard } from '../assets/images'
import "./beforeslider.css"

const Beforeslider = () => {
    return (
        <div className='before-slider'>
            <div className='big-card'>
                <img src={tradingCard} alt="" />
                <div className='big-text1'>
                    <h3>A Cavalcade of Shiny Pokémon Have Arrived in <i>Scarlet & Violet-Paldean Fates</i></h3>
                    <p>The latest Pokémon TCG expansion is here, and it's chock-full of Shiny Pokémon, brand-new Ancient and Future
                        Pokémon ex, and more.</p>
                </div>
            </div>
            <div className='small-cards'>
                <div className='card1'>
                    <img src={varoomzoom} alt="" />
                    <h3>Varoom Zooms into Pokémon GO</h3>
                </div>
                <div className='card2'>
                    <img src={mimikyu} alt="" />
                    <h3>Become Elite with Shiny Mimikyu</h3>
                </div>
                <div className='card3'>
                    <img src={shadowcard} alt="" />
                    <h3>Pokémon GO Shadow Ho-Oh Raid Weekend</h3>
                </div>
            </div>
        </div>
    )
}

export default Beforeslider