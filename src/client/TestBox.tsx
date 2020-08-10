import React from "react"
import {useState} from 'react'

interface Props {
  text: string;
}

export const TestBox: React.FC<Props> = ({text}) => {
  const [width, setWidth] = useState<number>(200)


  const increaseWidth = () => {
    setWidth(width + 20);
  }

  return (
    <div
      style={{width: `${width}px`, height: "200px", backgroundColor: "#fc3", padding: "1em"}}
      onClick={increaseWidth}
    >
      {text} (width: {width})
    </div>
  )
};
