import React, { useState } from 'react';
import OrderedList from './OrderedList'; 
import SelectedData from './SelectedData';
import './ListComponent.css';

const ListComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const addToList = () => {
    const trimmedValue = inputValue.trim();
  
    // Prevent empty input
    if (trimmedValue === '') {
      alert('Input cannot be empty');
      return;
    }
  
    s
    const isDuplicate = list.some(item => item.toLowerCase() === trimmedValue.toLowerCase());
    
    if (isDuplicate) {
      alert('Bro You Entered the Same Input Twice!');
      return; // Exit the function if a duplicate is found
    }
  
    
    setList((prevList) => [...prevList, trimmedValue]);
    setInputValue(''); 
  };
  const handleCheckboxClick = (item) => {
    setList(list.filter((i) => i !== item));
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const handleDelete = (itemToDelete) => {
    setSelectedItems(selectedItems.filter((item) => item !== itemToDelete));
  };

  return (
    <>
      <h1 style={{ textAlign: 'center',marginTop:'100px',marginBottom:'25px',fontFamily:'sans-serif',fontSize:'2.5 rem',marginRight:'25px',color:' #ff7f50' }}>Todo-List</h1>
      <div className="container">
        <input
          className="input-box"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input value
          placeholder="Enter item"
        />
        <button className="btn" onClick={addToList}>+</button>
      </div>

      <div className="sec-container">
        <OrderedList 
          list={list} 
          onCheckboxClick={handleCheckboxClick} 
          selectedItems={selectedItems} 
        />
      </div>

      {selectedItems.length > 0 && (
        <div className="third-container">
          <h3>Selected Items</h3>
          {selectedItems.map((item, index) => (
            <SelectedData key={index} data={item} onDelete={() => handleDelete(item)} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListComponent;
