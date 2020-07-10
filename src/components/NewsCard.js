import React from 'react'
import '../styles/newsEvents.css'

function NewsCard(props) {
    return (
        <div className="newsCard">

            <img src={props.card.img} />

            <div className="cardContent">
                <h5>{props.card.date}</h5>
                <h2>{props.card.title}</h2>
                <p>{props.card.info}</p>
            </div>

        </div>
    )
}

export default NewsCard
