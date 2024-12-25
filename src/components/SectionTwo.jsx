import React from "react";
import { useState } from "react";
import Papa from "papaparse";
import SectionThree from "./SectionThree";

function SectionTwo() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [Entries, setEntries] = useState("");

  function handleChange(e) {
    //console.log('start',e.target.files);
    let file = e.target.files[0];
    setFileName(file.name);
    setFile(file);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log('results',results)
        setEntries(results.data);
      },
    });
    //console.log('File...',file);
    //console.log('handleing the click');
  }
  return (
    <>
      <section className="section--second">
        <div className="container">
          <div className="main__flex">
            <div className="second__header">
              <h2 className="second__title">Start Your First CSV Scraping</h2>
              <div className="second__content">
                Upload Your Required CSV File & Start Your First Scrape.
              </div>
            </div>
            <div className="second__body">
              <div className="field__wrapper">
                <div className="input__form" id="upload-csv">
                  <div className="upload__file-wrapper drop-zone">
                    <input
                      type="file"
                      name="file"
                      placeholder="Enter Your File"
                      accept=".csv"
                      className="upload-input drop-zone__input"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="file"
                      className="upload-label drop-zone__prompt"
                    >
                      {fileName
                        ? fileName
                        : "Drop Your File Or Click to Upload (only .csv file)"}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionThree Entries={Entries} />
    </>
  );
}

export default SectionTwo;
