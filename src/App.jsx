import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axiosClient from './api/axiosClient';

function App() {

  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    axiosClient.get('/news') // thay bằng endpoint bạn đang test
      .then(response => {
        console.log('hehe'); // 🎉 In ra khi kết nối thành công
        console.log(response.data);
        setNewsList(response.data); // Dữ liệu thực tế (tuỳ bạn)
      })
      .catch(error => {
        console.error('Lỗi API:', error);
      });
  }, []);

  const [count, setCount] = useState(0)
  const handleIncrease = () =>
  {
    setCount(count +1)
  }

  return (
      <div>
          <p>hehe</p>
          <ul>
        {newsList.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.age}</p>
          </li>
        ))}
      </ul>
          <p>{count}</p>
          <button onClick={handleIncrease}>increase</button>
      </div>
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
