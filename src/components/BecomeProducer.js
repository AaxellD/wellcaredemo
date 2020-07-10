import React from 'react';
import '../styles/producer.css'

function BecomeProducer() {
  return (
    <div style={{
      height: '323px',
      marginTop:'-5px',
      backgroundImage: 'url(https://www.wellcare.com/~/media/Producers/producer.ashx?mw=1382)',
      backgroundPosition: 'center',
    }}>

      <div style={{
        width:'50%',
        margin:'0px auto',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
        fontSize: '1.2em',
        fontFamily:'Arial,Helvetica,sans-serif',
        padding:'2rem',
      }}>
        <h1>Become a Producer</h1>
        <p>We welcome producers who share our commitment to compliance and member satisfaction.</p>
        <a href="#" style={{
          backgroundColor: '#256e99',
          color: 'white',
          textDecoration: 'none',
          width: '55%',
          padding: '10px 20px',
          borderRadius: '3px',
          margin: '0 auto',
          textAlign:'center'
        }}>Contact Today</a>
      </div>

    </div>
  )
}

export default BecomeProducer;