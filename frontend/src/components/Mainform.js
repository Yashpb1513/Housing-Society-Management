import React from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext'
import Slide from 'react-reveal/Slide'

export default function Mainform() {
  const { getToken } = React.useContext(UserContext)
  const token = getToken()
  const handleSubmit = (e) => {
    e.preventDefault()
    const amt = document.getElementById('amount').value
    const chq = document.getElementById('cheque').value
    const flt = document.getElementById('Flat').value
    async function postQuery() {
      try {
        await axios
          .post("http://127.0.0.1:8000/maint/", { flat: flt, cheque: chq, amount: amt, ack: false }, {
            headers: { Authorization: `Token ${token}` },
          })
          .then((res) => {
            console.log(res.data);
            alert("Maintenance submitted successfully");
          });
      } catch (error) {
        console.log(error);
      }
    }
    postQuery();
  }
  return (
    <Slide right duration={2000}>
    <div style={{textAlign: 'center'}}>
        <form  style={{padding: "10 px", backgroundColor: "#f8f8f8", margin: "10px",width: "400px" }}>
  <div style={{padding: "18 px" , margin: "10px",width: "auto", backgroundColor: "#f8f8f8",borderRadius:"10px"}} class="form-group">
    <label for="Amount1">Amount</label><br />
    <input type="text" class="form-control" id="amount" placeholder="Enter Amount" />
  </div>
  <div style={{padding: "18 px" , margin: "30px",width: "auto" ,boxSizing: "border-box", backgroundColor: "#f8f8f8"}}  class="form-group">
    <label for="Cheque.No">Cheque No.</label><br />
    <input type="text" class="form-control" id="cheque" placeholder="Cheque No."/>
  </div>
  <div style={{padding: "18 px" , margin: "30px",width: "auto" ,boxSizing: "border-box", backgroundColor: "#f8f8f8"}}  class="form-group">
    <label for="Cheque.No">Flat No.</label><br />
    <input type="text" class="form-control" id="Flat" placeholder="Flat"/>
  </div>
  <button  style={{padding: "18 px" , margin: "30px",width: "50%" ,boxSizing: "border-box",}} type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </form>
      
    </div>
    </Slide>
  )
}
