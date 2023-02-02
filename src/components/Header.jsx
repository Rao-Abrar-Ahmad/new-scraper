import React from 'react'
import logo from '../assets/images/png/logo-no-background.png'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container container--1 header__container">
            <Link to="/">
            <img className="header__logo" src={logo} 
                 width="150" alt="AC Scraper" />
            </Link>
            <nav>
            <ul className="header__list">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact Us</Link>
            </ul>
            </nav>
         </div>
        </header>
    </>
  )
}
