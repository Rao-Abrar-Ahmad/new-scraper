import React from "react";
export default function SectionThree(props) {
  let lists = null;
  let count = null;
  console.log("in section threee", props.Entries);
  lists = props.Entries;
  if (lists) {
    count = lists.length;
  }
  if(!lists) return;
  return (
    <>
      <section className="section--third">
        <div className="container ">
          <h2>CSV Data</h2>
          <p>
            {count
              ? `You have ${count} Entries in this CSV File.`
              : `Upload Your CSV File For Some Results`}
          </p>
          <table
            style={{
              width: "100%",
              overflowX: "scroll",
            }}
          >
            <thead>
              <tr>
                {Object.keys(lists[0]).map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lists?.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
