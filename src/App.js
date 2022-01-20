import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  };

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  };

  return (
    <>
      <div style={{ fontSize: '35px', marginLeft: '740px', marginTop: '220px' }}>{cash}</div>
      <div style={{ display: 'flex', marginTop: '50px', marginLeft: '550px' }}>
        <button onClick={() => addCash(Number(prompt()))}>ПОПОВНИТИ РАХУНОК</button>
        <button onClick={() => getCash(Number(prompt()))}>ЗНЯТИ З РАХУНКУ</button>
      </div>
    </>
  );
}

export default App;
