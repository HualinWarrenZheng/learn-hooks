import { useState } from "react"

const UseStateComponet = () => {
    const [color, setColor] = useState("Red");
    const [car, setCar] = useState({
            Make: 'Toyota',
            year: 2017,
            color: 'red',
            isImported: true
        });

    function changeColor(color: string){
        setCar(pre => {
            return {...pre, color: color }
        });
    }
    const colors = ['pink', 'black', 'blue', 'yellow', 'green', 'red', 'orange' ];
    const random = Math.floor(Math.random() * colors.length);
    function changeColorRandomly(){
        const newColor = colors[random];
        changeColor(newColor);
    }
    
    return(
        <div>
            <h1>{car.Make} Car</h1>
            <ul>
                <li>Year: {car.year}</li>
                <li>Color: <span  style={{color: car.color}}> {car.color}</span></li>
                <li>Imported: {car.isImported ? 'yes' : 'no'}</li>
            </ul>
            <button type="button" onClick={changeColorRandomly}>Change Color</button>
        </div>
    ) 

}

export default UseStateComponet