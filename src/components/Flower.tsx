import React from "react"
import flower from "../assets/flower.png"
const Flower: React.FC = () => {
    return(
        <img
        src={flower}
        alt="Flower"
        className="fixed bottom-0 left-0 w-full pointer-events-none z-0"
      />
    )
}

export default Flower