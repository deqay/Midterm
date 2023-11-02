import React, { useState } from 'react';
import './App.css';
import logo from './header.png';

function ProductForm() {
  const [inputs, setInputs] = useState({
    name: "", 
    description: "", 
    category: "", 
    quantity: "", 
    price: "", 
  });
  
  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value; 
    setInputs({ ...inputs, [name]: value });


  };

  const handleSubmit = (e) => {

  e.preventDefault();

  if (inputs.name === "" || inputs.description === "" || inputs.category === "" || inputs.quantity === "" || inputs.price === "") {
    alert("Please fill out ALL required fields!");
  }

  else {

    alert(
      `Name: ${inputs.name}\n` +
      `Description: ${inputs.description}\n` +
      `Category: ${inputs.category}\n` +
      `Quantity: ${inputs.quantity}\n` +
      `Price: $${inputs.price}\n`
    );
    
  }

  };

const onClear = (e) => {
setInputs({
  name: "", 
  description: "", 
  category: "", 
  quantity: "", 
  price: "",

});
};

  return (
    <div>
            <img src={logo} alt="Logo" className="logo" />
      <h1>Sanrio Products</h1>
 <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text"
         name='name'
         value={inputs.name}
         onChange={handleChange} />
      </label>

      <label>Description:
        <input type="text" 
        name='description' 
        value={inputs.description}
        onChange={handleChange}/>
      </label>

      <label>Category:

      <select name='category' value={inputs.category} onChange={handleChange}>

      <option value="">--Select Category--</option>
      <option value="Stationary">Stationary</option>
      <option value="Plushes">Plushes</option>
      <option value="Clothing">Clothing</option>
      <option value="Miscellaneous">Miscellaneous</option>
       </select>
       
       </label>


      <label>Quantity:
        <input type="number" 
        name='quantity' 
        value={inputs.quantity}
        onChange={handleChange}/>
      </label>

      <label>Price:
        <input type="number" 
        name='price'
        value={inputs.price}
        onChange={handleChange}/>
      </label>

      <div className='buttons-container'>

      <button type='submit'>Submit</button>
      <button type='button' onClick={onClear}>Cancel</button>

      </div>

    </form>
    </div>
      );
}

export default ProductForm;

