import React from 'react';

function ShoppingCartItem (record, filterRecords, addToCart, key) {
	return (
		<div className="shopping-cart_item">
				<div
					className="ui card"
					key={key}
					onClick={() => addToCart(record.id)}>
					<div className="image">
						<img alt="oh no!" src={record.image} />
					</div>
				</div>
				<div className="header">
					{record.title}
    			</div>
          <div className="meta text-wrap">
            <small>${record.price}</small>
          </div>
        

			
			
				<button>Remove from cart</button>
			
		</div>
	);
};

export default ShoppingCartItem;