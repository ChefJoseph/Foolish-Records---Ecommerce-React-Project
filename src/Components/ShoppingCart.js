import React from 'react';

function ShoppingCart() {

    return (
      <div className="shoppingcart">
       {/* <!-- Cart-Icon --> */}
            <i class='bx bx-shopping-bag' id="cart-icon"></i>
            {/* <!-- Cart --> */}
            <div class="cart">
                <h2 class="cart-title">Your Cart</h2>
                {/* <!-- Content --> */}
                <div class="cart-content">

                </div>
                {/* <!-- Total --> */}
                <div class="total">
                    <div class="total-title">Total</div>
                    <div class="total-price">$0</div>
                </div>
                {/* <!-- Buy Button --> */}
                <button type="button" class="btn-buy">Buy Now</button>
                {/* <!-- Cart Close --> */}
                <i class='bx bx-x' id="close-cart"></i>
                </div>
      </div>
    );
  
  }
  export default ShoppingCart