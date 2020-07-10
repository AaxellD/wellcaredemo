import React from 'react'
import '../styles/heroStyles.css';

function Header() {
    return (
        <div className="hero-box">
            <div className="inner-box">

                <div className="overlayShape"></div>
                <div className="hero-stripe"></div>
                <div className="heroContent">
                    <div className="heroState">GEORGIA</div>

                    <div className="heroSlogan">
                        <h1>The Journey to Your WellBeing Starts Here</h1>
                    </div>

                    <div className="heroDetail">
                        <h3 className="cWarning">Keep Yourself Informed about CoronaVirus (COVID-19).</h3>

                        <a href="#" className="heroLink">Learn more about COVID-19 and how we're supporting members and providers.</a>
                    </div>
                    {/* end content */}
                </div>
            </div>
        </div>
    )
}

export default Header