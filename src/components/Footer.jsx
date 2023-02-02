import React from 'react'
import logo from '../assets/images/png/logo-no-background.png'
export default function Footer() {
  return (
    <>
     <footer className="footer">
        <div className="container container--3">
        <div className="footer__wrapper">
            <div className="footer___image-wrapper">
            <a href="/">
             <img src={logo} width="150" alt="AC Scraper" /> 
            </a>       
            </div>
            <div className="footer__grid">
            <ul className="contact-list footer__grid--left">
                <li className="contact-list__item contact-list__item--location">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="icon icon-location">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/>
                    </svg>
                </span><span>Rawalpindi, Pakistan</span>
                </li>
                <li className="contact-list__item contact-list__item--phone">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon icon-phone">
                    <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                </span>
                <a href="tel:+923014791056">+92 301 479 105 6</a>
                </li>
                <li className="contact-list__item contact-list__item--email">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon icon-email">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                </span>
                <a href="mailto:raoabrar629@gmail.com">raoabrar629@gmail.com</a>
                </li>
            </ul>
            </div>
        </div>
        <div className="copywrite--text">
            <a href="mailto:raoabrar629@gmail.com">
              <p>@copyright 2023 AC Scraper. All Right Reserved.</p>
              <p>Made with 💙 By RSA</p>
            </a>
        </div>
        </div>
    </footer>
    </>
  )
}
