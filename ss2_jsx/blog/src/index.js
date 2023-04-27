import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


const posts = [
    {
        "title": "5 Best Crypto Performers During The 2022 Market Flop",
        "slug": "5-best-crypto-performers-during-the-2022-market-flop",
        "category": "Crypto News",
        "updatedAt": "21 hours ago"
    },
    {
        "title": " Top crypto funding stories of 2022  ",
        "slug": "top-crypto-funding-stories-of-2022",
        "category": "New Year Special",
        "updatedAt": "a day ago"
    },
    {
        "title": " Top crypto funding stories of 2022  ",
        "slug": "top-crypto-funding-stories-of-2022",
        "category": "Opinion",
        "updatedAt": "a day ago"
    },

]

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <h1 className='text-center'>Blog Posts</h1>
            <table className="table">
                <thead className="table-dark">
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>CATEGORY</th>
                <th>TIME</th>
            </tr>
            </thead>
            <tbody>
            {
                posts.map((book, index) =>(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.category}</td>
                        <td>{book.updatedAt}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
);

reportWebVitals();
