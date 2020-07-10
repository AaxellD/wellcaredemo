import React from 'react';
import news from '../data/testdata.js';
import NewsCard from './NewsCard';

function NewsEvents() {
    // limit number of news articles
    const newsList = news.slice(0, 5);

    return (
        <div
            style={{
                display:'flex',
                flexWrap:'wrap',
                gap:'20px',
            }}
        >
            {/* map news in flex box as news cards */}
            {newsList.map(item => <NewsCard card={item} />)}
        </div>
    )
}

export default NewsEvents;
