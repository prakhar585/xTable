import "./App.css";
import { useState } from "react";

function App() {

  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]
)

  
  const handleSortByDate =()=>{
    // let newArr = [...data].sort((a,b)=> new Date(a.date)-new Date(b.date))
    // setData(newArr);

    const newArr = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
    setData(newArr);
  }
  
  const handleSortByViews =()=>{
    let newArr = [...data].sort((a,b)=> a.views - b.views);
    setData(newArr);
  }



  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByViews}>Sort by Views</button> <br></br>
      <table>
        <thead>
        <tr >
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item, index)=>(
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.views}</td>
            <td>{item.article}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
