import React from "react";
import HeroBanner from "../assets/images/illustration-intro.png";
export default function SectionOne() {
  return (
    <>
      <section className="section-intro">
        <div className="section-intro__top">
          <div className="container">
            <div className="first__banner-flex">
              <div className="section--two">
                <h1>
                  Easiest And Lightest
                  <br />
                  <span className="one">CSV Scraper</span> You Need.
                </h1>
                <p className="section-intro__text">
                  A CSV Scraper is a tool that allows you to scrape data from
                  any CSV file.
                </p>
                <a className="button" href="#upload-csv">
                  Get Started
                </a>
              </div>
              <div className="section--one">
                <img src={HeroBanner} alt="Hero Banner" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
