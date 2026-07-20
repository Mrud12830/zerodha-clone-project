import React from 'react';

function Brokerage() {
    return ( 
        <div className="container ">
            <div className="row p-5 mt-5 text-center border-top" >
                <div className="col-8 p-4">
                  <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage Calculator</h3> </a>
                  <ul style={{textAlign:"Left", lineHeight:"2.5",fontSize:"12px"}} className="text-muted ">
                    <li>call&trade and RMS auto-squareoff: additional charges of 50 Rs+GST per order</li>
                    <li>Digital Contract notes will be sent via e-mail</li>
                    <li>Physical copies of contract notes,if required ,shall be charged 20Rs per contract note </li>
                    <li>For NRI account ,0.5% or 1005 per executed order for equity</li>
                    <li>For NRI account,(PIS),0.5% or 200 Rs per executed order for equity</li>
                    <li>If the account is in debit balance,any order placed will be charged 40 Rs per executed order instead of 20 Rs per executed order</li>
                  </ul>
                </div>
                <div className="col-4 p-4">
                  <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">List of charges</h3> </a>
                </div>
            </div>     
        </div>
 
     );
}

export default Brokerage;