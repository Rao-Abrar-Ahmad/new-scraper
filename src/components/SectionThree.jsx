import React from 'react'

function letsScrape(lists){
  lists.forEach(list => {
    console.log(list);
  });
}




export default function SectionThree(props) {
    let lists = null;
    let count = null;
    console.log('in section threee',props.Entries);
    lists = props.Entries;
    if(lists){

    
    count = lists.length;
  }
    if(count > 0){
      letsScrape(lists)
    }
    
  return (
    <>
      <section className="section--third">
        <div className="container">
        <div className="iframe_flex">
            <div className="headings">
            <div className="wrapper--headings" id="result-heading">
                <p>{ count 
                ?   `You have ${count} Entries in this CSV File.` 
                :  `Upload Your CSV File For Some Results`
                }</p>
            </div>
            { count > 0 && 
            <div className="csv-data">
              {
                lists.map( (item,index) => 
                <div className="csv-item" key={index}>
                  <div className="csv-item-id">{index + 1}</div>
                  <div className="csv-item-name">{item["Owner Name"]}</div>  
                </div>
                )
              }
            </div>}
            </div>
            <div className="iframes">
            <div className="result-page">
                <iframe src=""  title="preview of site">

                </iframe>
            </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
