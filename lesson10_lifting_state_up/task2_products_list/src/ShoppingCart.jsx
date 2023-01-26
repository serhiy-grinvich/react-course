import React from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        {
          id: 1,
          name: 'iphone 13',
          price: 799,
        },
        {
          id: 2,
          name: 'iphone 14 ProMax',
          price: 1099,
        },
        {
          id: 3,
          name: 'iPad ProMax',
          price: 599,
        },
        {
          id: 4,
          name: 'iphone 14 Pro',
          price: 899,
        },
      ],
    };
  }
  render() {
    const count = this.state.cartItems.length;
    return (
      <div className="column">
        {/* <!-- CartTitle --> */}
        <CartTitle userName={this.props.userName} count={count} />
        {/* <!-- ProductsList --> */}
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
