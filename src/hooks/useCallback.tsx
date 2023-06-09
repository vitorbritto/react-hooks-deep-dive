import { useEffect, useState, useCallback } from 'react';

const CallbackHook = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [resourceType, setResourceType] = useState('posts');

  const getItems = useCallback(async () => {
    console.log('getItems function called');
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resourceType}`
    );
    const data = await response.json();

    return data.slice(0, 10);
  }, [resourceType]);

  useEffect(() => {
    const fetchResourceType = async () => {
      const items = await getItems();

      setItems(items);
    };

    fetchResourceType();
  }, [resourceType, getItems]);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        <button onClick={() => setResourceType('todos')}>Todos</button>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <h2>{resourceType}</h2>
      <ul>
        {items.map((item: any) => (
          <li key={item?.id}>
            #{item?.id} - {item?.title ?? 'No title found'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CallbackHook;
