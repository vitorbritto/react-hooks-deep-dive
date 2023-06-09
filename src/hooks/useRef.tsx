import { useEffect, useState, useRef } from 'react';

const RefHook = () => {
  const [name, setName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [currentName, setCurrentName] = useState('');
  const renderCount = useRef(0);
  const inputRef = useRef();
  const previousName = useRef();

  const focusInput = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    previousName.current = currentName;
  }, [currentName]);

  return (
    <>
      <div>
        <h4>Ref States</h4>
        <input id="foo" value={name} onChange={(e) => setName(e.target.value)} />
        <p>My name is {name}</p>
        <p>I rendered {renderCount.current} times</p>
      </div>

      <div>
        <h4>Ref HTML Nodes</h4>
        <input id= "bar" ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={focusInput}>Focus Input</button>
      </div>

      <div>
        <h4>Get previous state</h4>
        <input id="baz" value={currentName} onChange={(e) => setCurrentName(e.target.value)} />
        <p>My name is {currentName}</p>
        <p>My name was {previousName.current}</p>
      </div>
    </>
  );
};

export default RefHook;
