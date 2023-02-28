import { useState } from 'react';
import ButtonAppBar from './Navbar';
import Button from '@mui/material/Button';


export function Addcolor() {
  const [color, setColor] = useState("orange");
  const [colorlist, setColorlist] = useState([]);
  const styled = {
    backgroundColor: color,
    fontSize: '1em'
  };
  return (
    <div>
      <ButtonAppBar />
      <div className='add-color'>
        <input style={styled} type="text" placeholder='Enter color' value={color} onChange={(e) => setColor(e.target.value)} />
        <Button varient="outlined" onClick={() => {
          setColorlist([...colorlist, color]);
        }}>Add color</Button>
        {colorlist.map((color) => {
          const styled = {
            backgroundColor: color,
            width: '250px',
            height: '30px',
            margin: '5px 5px 5px 0px'
          };
          return (
            <div style={styled}>
            </div>
          );
        })}
      </div>
    </div>
  );
}
