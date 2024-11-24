import { useCartStore } from "../store";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const clearCartItem = useCartStore((state) => state.removeCartItem);
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <div className="flex justify-end">
        <div>
          <h2>Your Cart({cart.length})</h2>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-2 py-1 rounded-md mt-2 hover:bg-red-800 transition-colors"
            >
              Clear Cart
            </button>
          )}
        </div>
      </div>
      <div className="mt-6">
        {cart.length === 0 ? (
          <p className="text-red-600">No Product in your cart.</p>
        ) : (
          <div className="w-80">
            {cart.map((product) => (
              <div
                key={product.id}
                className="bg-gray-200 px-2 py-4 rounded-md mb-4 flex justify-between items-center"
              >
                <h2>{product.title}</h2>
                <div className="flex gap-3 items-center">
                  <h2>{product.price}</h2>
                  <button
                    className="text-red-600 text-4xl"
                    onClick={() => clearCartItem(product.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <hr />
      {cart.length > 0 && (
        <div className="flex justify-between">
          <p>Total</p>
          <p>{totalPrice} MMK</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
