import React from 'react'
import { useState } from 'react'
import Papa from 'papaparse'
import SectionThree from './SectionThree';

function SectionTwo() {
  var csvFile = null;
  const [file, setFile] = useState(null);
  const [fileName,setFileName] = useState("");
  const [Entries,setEntries] = useState("");
  const [EntryCount,setEntryCount] = useState("");

  function handleChange(e){
    //console.log('start',e.target.files);
    let file = e.target.files[0];
    setFileName(file.name);
    csvFile = file;
    setFile(file);
    //console.log('File...',file);
    //console.log('handleing the click');
  };
  function handleSubmit(e){
   e.preventDefault();
   //console.log('Form Prevented Defaulted');

  }
  function handleClick(e){
    e.preventDefault();
    console.log('Button Clicked');
    Papa.parse((file), {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        //console.log('results',results)
        setEntries(results.data);
        // const rowsArray = [];
        // const valuesArray = [];
        // // Iterating data to get column name and their values
        // results.data.map((d) => {
        //   rowsArray.push(Object.keys(d));
        //   valuesArray.push(Object.values(d));
        // });
        // console.log('rows',rowsArray);
        // console.log('values',valuesArray);
      }
    });
    setFileName("");
    // Papa.parse(this.file, {
    //   header: true,
    //   dynamicTyping: true,
    //   complete: function(results) {
    //     console.log(results.data);
    //     //this.Entries = results.data;
    //     //var peoples = results.data;
    //     //console.log('entries here....',this.Entries);   
    //     // if(peoples.length > 0){
    //     //   $('#result-heading').html(`<p>Got ${peoples.length} Entries in the Uploaded CSV File.</p>`);
    //     //   $('.result-page').text('loading....');
    //     //   const sumFunction = async function(data,index){
    //     //     $('.csv-data').append(`
    //     //       <div class="csv-item">
    //     //         <div class="csv-item-id id-${index + 1}">${index + 1}</div>
    //     //         <div class="csv-item-name">${data["Owner Name"]}</div>  
    //     //       </div>
    //     //     `);
    //     //   };
    //     //   let result = null ;
    //     //   peoples.forEach(async (data,index) => {
    //     //     result = await sumFunction(data,index);
    //     //   });
    //     //   console.log(result);
    //     // }
    //   }
    // });
  }
  return (
    <>
     <section className="section--second">
            <div className="container">
            <div className="main__flex">
                <div className="second__header">
                <h2 className="second__title">Start Your First Scraper</h2>
                <div className="second__content">
                Upload Your Required CSV File & Start Your First Scrape.
                </div>
                </div>
                <div className="second__body">
                <div className="field__wrapper">
                    <form className="input__form" id="upload-csv" onSubmit={handleSubmit}>
                     <div className="upload__file-wrapper drop-zone" >
                        <input type="file" name="file" 
                                placeholder="Enter Your File" accept=".csv" 
                                className="upload-input drop-zone__input"
                                onChange={handleChange}/>
                        <label htmlFor="file" className="upload-label drop-zone__prompt">{fileName ? fileName : 'Drop Your File Or Click to Upload (only .csv file)'}</label>
                      </div>
                      <button type="submit" className="submit--upload" onClick={handleClick}>
                            Submit Your File To Read
                      </button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>
        <SectionThree Entries={Entries}/>
    </>
  )
}

export default  SectionTwo