import { useState } from 'react'
import Button from './components/Button'

const colors = [
  {name: 'Red', hex: '#ff0000'},
  {name: 'Green', hex: '#00FF00'},  
  {name: 'Blue', hex: '#FF0000'},
  {name: 'Yellow', hex: '#FFFF00'},
  {name: 'Orange', hex: '#FFA500'},
  {name: 'Purple', hex: '#800080'},
  {name: 'Pink', hex: '#FFC0CB'},
  {name: 'Brown', hex: '#A52A2A'},
  {name: 'Black', hex: '#000000'},
  {name: 'White', hex: '#FFFFFF'},
  {name: 'Gray', hex: '#808080'},
  {name: 'Cyan', hex: '#00FFFF'},
  {name: 'Magenta', hex: '#FF00FF'},
  {name: 'Lime', hex: '#00FF00'},
  {name: 'Teal', hex: '#008080'},
  {name: 'Maroon', hex: '#800000'},
  {name: 'Navy', hex: '#000080'},
  {name: 'Olive', hex: '#808000'},
  {name: 'Sky Blue', hex: '#87CEEB'},
  {name: 'Turquoise', hex: '#40E0D0'},
  {name: 'Indigo', hex: '#4B0082'},
  {name: 'Violet', hex: '#EE82EE'},
  {name: 'Gold', hex: '#FFD700'},
  {name: 'Silver', hex: '#C0C0C0'},
  {name: 'Bronze', hex: '#CD7F32'},
  {name: 'Copper', hex: '#B87333'},
  {name: 'Platinum', hex: '#E5E4E2'},
  {name: 'Cobalt', hex: '#0047AB'},
  {name: 'Nickel', hex: '#727472'},
  {name: 'Zinc', hex: '#7D7D7D'},
  {name: 'Iron', hex: '#A3A3A3'},
  {name: 'Tin', hex: '#BFBFBF'},
  {name: 'Lead', hex: '#575757'},
  {name: 'Mercury', hex: '#B8B8B8'},
  {name: 'Aluminum', hex: '#A9A9A9'},
  {name: 'Titanium', hex: '#C2B280'},
  {name: 'Uranium', hex: '#008000'},
  {name: 'Plutonium', hex: '#0000FF'},
  {name: 'Neptunium', hex: '#FF0000'},
  {name: 'Americium', hex: '#FFFF00'},
  {name: 'Curium', hex: '#FFA500'},
  {name: 'Berkelium', hex: '#800080'},
  {name: 'Californium', hex: '#FFC0CB'},
  {name: 'Einsteinium', hex: '#A52A2A'},
  {name: 'Fermium', hex: '#000000'},
  {name: 'Mendelevium', hex: '#FFFFFF'},
  {name: 'Nobelium', hex: '#808080'},
  {name: 'Lawrencium', hex: '#00FFFF'},
  {name: 'Rutherfordium', hex: '#FF00FF'},
  {name: 'Dubnium', hex: '#00FF00'},
  {name: 'Seaborgium', hex: '#008080'},
  {name: 'Bohrium', hex: '#800000'},
  {name: 'Hassium', hex: '#000080'},
  {name: 'Meitnerium', hex: '#808000'},
  {name: 'Darmstadtium', hex: '#87CEEB'},
  {name: 'Roentgenium', hex: '#40E0D0'},
  {name: 'Copernicium', hex: '#4B0082'},
  {name: 'Nihonium', hex: '#EE82EE'},
  {name: 'Flerovium', hex: '#FFD700'},
  {name: 'Moscovium', hex: '#C0C0C0'},
  {name: 'Livermorium', hex: '#CD7F32'},
  {name: 'Tennessine', hex: '#B87333'},
  {name: 'Oganesson', hex: '#E5E4E2'},
  {name: 'Ununennium', hex: '#0047AB'},
 


 

]



function App() {
  const [selectedColor, setSelectedColor] = useState('blue')

  const changeColor = () => {
    setSelectedColor('red')
  }

  return (
    <>
      
      <div className='h-screen p-3'style={{backgroundColor: selectedColor}}>
        <div className='bg-gray-100 p-2 rounded shadow'>
          {
            colors.map((color, index) => (
              <Button title={color.name} color={color.hex} key={index} onClick={() => setSelectedColor(color.hex)}>{color.name}</Button>
            ))
          }
          <Button onClick={changeColor} /> 
        </div>

      </div>
        
    </>
  )
}

export default App
