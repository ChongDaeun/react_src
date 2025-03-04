import React, { useContext } from  "react";
import Color from "./Color";
import { ColorContext } from ".";

export default function ColorList () {
  const { colors } = useContext(ColorContext);
  if(!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div>
      {colors.map(color => ( 
        <Color 
          key={color.id} 
          {...color}
          onRemove = { onRemoveColor }
          onRate = { onRateColor }
        />
      ))}
    </div>
  );
}