import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">PRODUCTS</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">NAME OF PRODUCT</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">PRICE</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">QUANTITY</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">REMOVE</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">TOTAL</p>
        </div>
      </div>
    </div>
  );
}
