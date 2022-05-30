import React from 'react'

export default function Complainform() {
  return (
    <div>
       <form  style={{padding: "10 px", backgroundColor: "#f8f8f8", margin: "10px",width: "20%" }}>
  <div style={{padding: "18 px" , margin: "20px",width: "50%" ,boxSizing: "border-box", backgroundColor: "#f8f8f8",borderRadius:"10px"}} class="form-group"><br /><br />
    <label for="Amount1">Flat No.</label><br />
    <input type="text" class="form-control" id="Amount1" placeholder="flat no."/>
  </div>
  <div style={{padding: "18 px" , margin: "30px",width: "50%" ,boxSizing: "border-box", backgroundColor: "#f8f8f8"}}  class="form-group">
      <br />
    <label for="Cheque.No">Complaint</label><br />
    <input type="text" class="form-control" id="Complaint" placeholder="Complaint"/>
    <small id="emailHelp" class="form-text text-muted">we will work on your cpmplaint efficiently.</small><br />
  </div>
  <button  style={{padding: "18 px" , margin: "30px",width: "50%" ,boxSizing: "border-box",}} type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
  )
}
