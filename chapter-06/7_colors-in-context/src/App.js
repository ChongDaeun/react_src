import React, { useState } from "react";
// import colorData from "./color-data.json";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm.js";
// import {v4} from "uuid";

export default function App() {

  return (
    <>
      <AddColorForm />
      <ColorList />
    </> 
  );
}

  // const [colors, setColors] = useState(colorData);

  // const removeColor = id => {
  //   const newColors = colors.filter(color => color.id !== id);
  //   setColors(newColors);
  // };

  // const rateColor = (id, rating) => {
  //   const newColors = colors.map(color =>
  //     color.id === id ? {...color, rating} : color
  //   );
  //   setColors(newColors);
  // };

  // const createColor = (title, color) => {
  //   const newColors = [
  //     {
  //       id: v4(),
  //       rating: 0,
  //       title,
  //       color
  //     },
  //     ...colors

  //   ];
  //   setColors(newColors);
  // };

  