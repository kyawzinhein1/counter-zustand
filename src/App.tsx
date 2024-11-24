import Cart from "./components/Cart";
import { FakeData } from "./data/FakeData";
import { useCartStore } from "./store";

const App = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  //   const cartData = {
  //     id: data.id,
  //     title: data.title,
  //     price: data.price,
  //   };
  return (
    <div>
      <h1 className="text-3xl text-cyan-600 font-bold text-center mt-6">
        Zustand Store
      </h1>
      <div className="flex justify-center mt-6 mb-10">
        <div className="grid grid-cols-3 gap-6">
          {FakeData.map((data) => (
            <div
              key={data.id}
              className="w-40 h-40 bg-gray-200 px-5 py-4 rounded-md shadow-md"
            >
              <h2 className="text-xl font-medium text-cyan-700 text-center">
                {data.title}
              </h2>
              <p className="text-base text-gray-600 text-center">
                {data.price} MMK
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-cyan-700 px-2 py-1 rounded-md text-white mt-10 hover:bg-cyan-600 transition-colors shadow-md"
                  onClick={() => {
                    addToCart({
                      id: data.id,
                      title: data.title,
                      price: data.price,
                    });
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex justify-center text-cyan-600 text-lg font-bold mt-6">
        <Cart />
      </div>
    </div>
  );
};

export default App;
