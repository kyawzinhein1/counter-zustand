import { useCounterStore } from "./store";

const App = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.imcrement);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      <h1 className="text-3xl text-cyan-600 text-center font-bold">
        Counter App with Zustand
      </h1>
      <p className="text-xl text-cyan-600 text-center mt-8">Count : {count}</p>
      <div className="flex items-center gap-4 justify-center mt-6">
        <button
          className="px-4 py-2 bg-cyan-600 text-white rounded-md"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="px-8 py-2 bg-cyan-600 text-white rounded-md"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 bg-cyan-600 text-white rounded-md"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;
