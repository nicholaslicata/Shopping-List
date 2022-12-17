import { FaPlus, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import uniqid from 'uniqid';
import List from './components/List';
import Clear from './components/Clear';

function App() {
  const [shopList, setShopList] = useState([]);
  const [item, setItem] = useState({
    name: '',
    quantity: 1,
    complete: false,
    id: '',
  })
  const [error, setError] = useState(false);
  
  function handleChange(e) {
    setItem({
      ...item,
        name: e.target.value,
    })
  }

  function handleAdd(newItem) {
    setShopList([
      ...shopList,
          newItem,
    ])
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!item.name) {
      setError(true);
    } else {
      setError(false);
      handleAdd({
        ...item,
        id: uniqid()
      })
    }
    setItem({
      ...item,
        name: '',
    })
   }

  function handleIncrement(index) {
   const newList = [...shopList];
   newList[index].quantity++;
   setShopList(newList);
  }

  function handleDecrement(index) {
    const newList = [...shopList];
    if (newList[index].quantity > 0) {
      newList[index].quantity--;
      setShopList(newList);
    } else return;
  }

  function handleClear() {
    setShopList([]);
  }

  function handleComplete(id) {
    setShopList(
      shopList.map(item => {
        if (item.id === id) {
          return {...item,
                  complete: !item.complete}
        } else {
          return item;
        }
      })
    )
  }

return (
    <div className="content">
      <div className="main-container">
      {error ? (<div className="error-container"><span className="error">Please enter an item</span></div>) : ''}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
          <input onChange={handleChange} value={item.name} placeholder="Add an item..."></input>
          <button className="add-btn">
          <FaPlus />
          </button>
          </div>
          {/* {error ? (<div className="error-container"><span className="error">Please enter an item</span></div>) : ''} */}
          <List shopList={shopList} FaChevronLeft={FaChevronLeft} FaChevronRight={FaChevronRight} FaCheck={FaCheck} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleComplete={handleComplete}/>
        </form>
      </div>  
    <div className="clear-container">
      <Clear handleClear={handleClear}/>
    </div>
    </div>
  );
}


export default App;
