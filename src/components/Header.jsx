import React from 'react'
import logo from '../assets/images/png/logo-no-background.png'

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container container--1 header__container">
            <a href="/">
            <img className="header__logo" src={logo} 
                 width="150" alt="AC Scraper" />
            </a>
            <nav>
            <ul className="header__list">
                <a href="/">Home</a>
                <a href="/about">About</a>
            </ul>
            </nav>
         </div>
        </header>
    </>
  )
}
