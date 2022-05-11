import React,{useState} from "react";
import "./App.css";
import Cards from "./component/Cards";


function App() {
  const cardList = [
    {
      title: "Product1",
      image:
        "https://www.thenews.com.pk//assets/uploads/magazine/2019-07-09/495576_5105744_mango-mid_magazine.jpg",
      price: 11,
      quantity: 1,
      weight: "100 Kg",
    },
    {
      title: "Product2",
      image:
        "https://www.thenews.com.pk//assets/uploads/magazine/2019-07-09/495576_5105744_mango-mid_magazine.jpg",
      price: 11,
      quantity: 1,
      weight: "100 Kg",
    },
    {
      title: "Product3",
      image:
        "https://www.thenews.com.pk//assets/uploads/magazine/2019-07-09/495576_5105744_mango-mid_magazine.jpg",
      price: 11,
      quantity: 1,
      weight: "100 Kg",
    },
    {
      title: "Product4",
      image:
        "https://www.thenews.com.pk//assets/uploads/magazine/2019-07-09/495576_5105744_mango-mid_magazine.jpg",
      price: 11,
      quantity: 1,
      weight: "100 Kg",
    },
    {
      title: "Product5",
      image:
        "https://www.thenews.com.pk//assets/uploads/magazine/2019-07-09/495576_5105744_mango-mid_magazine.jpg",
      price: 11,
      quantity: 1,
      weight: "100 Kg",
    },
  ];
  const showAlert = (item)=>{
    alert(`Title: ${item.title}  Price: ${item.price}  Quantity: ${item.quantity}  Weight: ${item.weight}  Url:${item.image}`)

  }
  return (
    <div >
    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      {cardList.map((item) => (
        <Cards key={item.title} item={item} showAlert={showAlert}/>
      ))}
    </div>
    </div>
  );
}


export default App;
