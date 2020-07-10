import React from 'react';
import '../styles/cardStyles.css'

function Cards() {
  return (
    <div className="cardRow">
      {/* option 1 */}
      <div className="cardOption">
        <img src="https://www.wellcare.com/~/media/Icons/Blue-System-Icons/providermedicadiconblue.ashx?mw=1382&h=256&w=256&la=en&hash=2D391C5A3572EB249B24A0B32510D3668F09A46E" class="cardIcon" />
        <h2>All Together Now</h2>
        <p>WellCare and Peach State Health Plan are joining together.</p>
        <a href="#">Learn More</a>
      </div>
      {/* Vertical line */}
      <div className="vl"></div>

      {/* option 2 */}
      <div className="cardOption">
        <img src="https://www.wellcare.com/~/media/Icons/Blue-System-Icons/CA_Icon_115x73.ashx?mw=1382&h=73&w=115&la=en&hash=0F6D330D90A18170648BA60AAC3C509DDD0FD33A" />
        <h2>WellCare Cares</h2>
        <p>During COVID-19, the last thing you need to worry about is your healthcare. As our Medicare member, you're covered.</p>
        <a href="#">Learn More</a>
      </div>
      {/* Vertical line */}
      <div className="vl"></div>

      {/* Option 3 */}
      <div className="cardOption">
        <h2>Notice of Non-Descrimination</h2>
        <p>WellCare Health Plans, Inc., complies with applicable Federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex. </p>
        <a href="#">More Information</a>
      </div>
    </div>
  )
}

export default Cards;