import React from 'react';
import '../styles/WhyWellcare.css'; 

function WhyWellcare() {
  return (
    <div className="well-box">

      {/* Left-Block */}
      <div className="left-well">
        <h1>Why Wellcare?</h1>
        <p>We are passionate about serving our members and the communities in which they live. Please watch the following video to see us in action.</p>
      </div>

      {/* Right-Block */}
      <div className="right-well">
      <iframe src="https://www.youtube.com/embed/qyn-nywze04" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="videoFrame"></iframe>
      </div>

    </div>
  )
}

export default WhyWellcare
