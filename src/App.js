import React from 'react';

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bgw.kr%2Fwp-content%2Fuploads%2F2019%2F12%2F%25EC%2588%2598%25EC%259E%2585%25EA%25B9%2580%25EC%25B9%2598.png&imgrefurl=https%3A%2F%2Fwww.bgw.kr%2Fproduct%2Fchinakimchi%2F&tbnid=RnBfod6PBFjCBM&vet=12ahUKEwj_9ufl1uDtAhUSDpQKHTkVDRQQMygAegUIARDeAQ..i&docid=wysFCe_0AfkpLM&w=800&h=800&q=%EA%B9%80%EC%B9%98&ved=2ahUKEwj_9ufl1uDtAhUSDpQKHTkVDRQQMygAegUIARDeAQ"
  },
  {
    id: 2,
    name: "samgyeopsal",
    image: "https://www.google.com/aclk?sa=l&ai=DChcSEwil3OeP1-DtAhXMq5YKHQ82A_gYABAHGgJ0bA&sig=AOD64_3xQwH3_WitRuBWQ-cwN5oHmf6Png&adurl&ctype=5&ved=2ahUKEwjn9d2P1-DtAhWNL6YKHZB_Bd8Qwg96BAgBEFs"
  }
];

function Food({ name, image }) {
  return(
    <div>
      <h1>I like { name } </h1>
      <img src={image} alt={name}/>
    </div> 
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => 
        <Food key={dish.id} name={dish.name} image={dish.image}/>
      )}
    </div>
  );
}

export default App;
