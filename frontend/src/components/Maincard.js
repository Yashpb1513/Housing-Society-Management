import React from 'react'
import Bounce from 'react-reveal/Bounce'
export default function Maincard({flat, cheque, amount, ack, date}) {
  return (
    // <Bounce top duration={3000}>
    <div>
      <div class="card" style={{width: '18rem',backgroundColor: "#f8f8f8"}}>
    <div class="card-body">
    <h5 class="card-title">Info</h5>
    <p class="card-text">FLAT NO. {flat}</p><br/>
    <p class="card-text">CHEQUE NO. {cheque}</p><br />
    <p class="card-text">AMOUNT: {amount}</p><br />
    <p class="card-text">Dated: {date}</p><br />
    <p class="card-text">{ack ? "Payment is confirmed" : "Not confirmed yet"}</p><br />
  </div>
</div>
    </div>
    // </Bounce>
  )
}
