export const CartTable = () => {
  return (
    <div className="site-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th colSpan={2}>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Product">
              <a href="" className="cart-product-image">
                <img
                  src="https://www.tazachocolate.com/cdn/shop/products/Taza_Vday_Raspberry_Shopify_medium.jpg?v=1674070600"
                  alt=""
                />
              </a>
            </td>
            <td data-label="Details">
              <a href="" className="cart-product-title">
                Valentine's Day Raspberry Crunch Bar
              </a>
              <br />
              <a href="" className="cart-product-category">
                Category: Bar
              </a>
              <br />
              <br />
              <button className="cart-product-remove">Remove</button>
            </td>
            <td data-label="Price">
              <span>$ 5.00</span>
            </td>
            <td data-label="Quantity">
              <input className="cart-product-input" type="number" value="1" />
            </td>
            <td data-label="Total" className="text-right">
              <span>$ 20.00</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
