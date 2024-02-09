import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // useCallback -> dependency array -> caching
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }
    if (symbol) {
      str += "`~!@#$%^&*()-+{}|;:,.?";
    }
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, number, symbol, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(1,222);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect -> dependency array -> re render
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="w-full h-screen bg-[#212121] text-[#ffffff] flex items-center justify-center flex-col">
      <h1 className="text-3xl text-center mb-5">Password Generator</h1>

      <div className="flex  flex-col justify-center px-6 py-6 lg:px-8 border border-solid border-white rounded-lg ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:w-96">
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6"
            >
              Generated Password
            </label>
            <div className="mt-2">
              <input
                id="generatedPassword"
                name="password"
                type="text"
                value={password}
                readOnly
                ref={passwordRef}
                placeholder="password"
                onChange={() => {}}
                className="block w-full rounded-md border-0 py-1.5 px-3 focus:outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>
          <div className="flex justify-center items-center flex-col w-full mt-10 text-center text-sm">
            <label htmlFor="length" className="">
              Length : {length}
            </label>
            <input
              type="range"
              name="length"
              id="lenght"
              className="cursor-pointer"
              min={8}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-2">
              <input
                defaultChecked={number}
                onChange={() => setNumber(!number)}
                type="checkbox"
                name="number"
                id="number"
              />
              <label htmlFor="number">Number</label>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input
                defaultChecked={symbol}
                onChange={() => setSymbol(!symbol)}
                type="checkbox"
                name="symbol"
                id="symbol"
              />
              <label htmlFor="number">Symbol</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
