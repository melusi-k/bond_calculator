import React from 'react'; import logo from './logo.svg'; import './App.css';

var mortgageCalculator = require("mortgage-calculator");
var rates;
var termsInMonths;
var termsInYears;
var amount;
var maxAge = 65;
var riskRate = 36;
var personalTaxRate = 42;
//var localizedCurrency = mortgageCalculator.formatMoney(

function App(props) { return ( <div className="App">

<nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Bond Calculator</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-expanded" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#Home">Home<span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#History">History</a>
      <a className="nav-item nav-link" href="#Results">Results</a>
    </div>
  </div>
</nav>


<form id="#Home"className="needs-validation" noValidate>
 <header
className="App-header"> 
 <div
className="input-group input-group-sm mb-3"> <div className="input-group-prepend"> <span
className="input-group-text">R</span> </div> <input type="text"
className="form-control" placeholder="Initial Deposit" aria-label="Amount in Rands"></input>
</div>

<div
className="input-group input-group-sm mb-3"> <div className="input-group-prepend"> <span
className="input-group-text">R</span> </div> <input type="number"
className="form-control" aria-label="Amount in Rands" placeholder="Monthly Income"></input>
</div>

<div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
  </div>
  <select className="custom-select" id="inputGroupSelect01">
    <option>Interest Rate</option>
    <option defaultValue value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div
className="input-group input-group-sm mb-3"> <div className="input-group-prepend"> <span
className="input-group-text">Term</span> </div> <input type="number"
className="form-control" aria-label="Term in Years" placeholder="10"></input>
<div className="input-group-prepend"> <span
className="input-group-text">Years</span> </div>
</div>

<div
className="input-group input-group-sm mb-3"> <div className="input-group-prepend"> <span
className="input-group-text">Payments</span> </div> <input type="number"
className="form-control" aria-label="Payments in Months" placeholder="50"></input>
<div className="input-group-prepend"> <span
className="input-group-text">Months</span> </div>
</div>

<div
className="input-group input-group-sm mb-3"> <div className="input-group-prepend"> <span
className="input-group-text">Age</span> </div> <input type="number"
className="form-control" aria-label="Age in Years" placeholder="50"></input>
<div className="input-group-prepend"> <span
className="input-group-text">Years</span> </div>
</div>



 <button type="button" className="btn btn-primary">Calculate</button>
</header>
</form>
</div> );
}

export const config = { amp: true }; export default App;
