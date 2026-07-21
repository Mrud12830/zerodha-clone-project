import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5 ">
          <img src="images/smallcaselogo.png" alt="product universe1" />
          <p classname="text-small text-muted">Thematic Investment Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="images/streakLogo.png"
            alt="product universe2"
            style={{ width: "50%" }}
          />
          <p classname="text-small text-muted">Algo & stratergy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="images/sensibullLogo.svg"
            alt="product universe3"
            style={{ width: "50%" }}
          />
          <p classname="text-small text-muted">Option Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="images/goldenpiLogo.png"
            alt="product universe 4 "
            style={{ width: "50%" }}
          />
          <p classname="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="images/dittoLogo.png"
            alt="product universe5 "
            style={{ width: "50%" }}
          />
          <p classname="text-small text-muted">Insurance</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img
            src="images/zerodhaFundhouse.png"
            alt="product universe6 "
            style={{ width: "50%" }}
          />
          <p classname="text-small text-muted">Asset Management</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
