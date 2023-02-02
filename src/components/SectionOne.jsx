import React from 'react'
import HeroBanner from '../assets/images/illustration-intro.png'
export default function SectionOne() {
  return (
    <>
     <section className="section-intro">
      <div className="section-intro__top">
        <div className="container">
          <div className="first__banner-flex">             
            <div className="section--two">
              <h1>Easiest And Lightest<br/>Web Scrapper You Need.</h1>
              <p className="section-intro__text">
                Unlock the power of your website data with Ac Scraper! 
                Our comprehensive suite of scraping tools makes data extraction quick and easy, 
                so you can focus on making the most of your data.
              </p>
              <a className="button" href="#upload-csv">Get Started</a>
            </div>
            <div className="section--one">
              <img src={HeroBanner} 
                   alt="Hero Banner" 
                   loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
