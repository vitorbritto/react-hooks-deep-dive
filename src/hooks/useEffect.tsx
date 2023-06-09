import { useEffect, useState } from "react";

const EffectHook = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchResourceType = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
      const data = await response.json();

      setItems(data.slice(0, 10));
    }

    fetchResourceType();
  }, [resourceType]);

  useEffect(() => {
    // componentDidMount
    console.log('component mounted');

    return () => {
      // componentWillUnmount
      console.log('component unmounted');
    }
  }, []);

  const changeResourceType = (type: string) => {
    setResourceType(type);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => changeResourceType('posts')}>Posts</button>
        <button onClick={() => changeResourceType('comments')}>Comments</button>
        <button onClick={() => changeResourceType('todos')}>Todos</button>
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

export default EffectHook;
