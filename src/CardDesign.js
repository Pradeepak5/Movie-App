import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Counter } from './Counter';
import { CounterDislike } from "./CounterDislike";
import Info  from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

export function CardDesign({ movies, id }) {

  const navigate = useNavigate();

  const [like,setLike] = useState(0);
  const [dislike,setDislike] = useState(0);
  const [show, setShow] = useState(true);
  const summaryToggle = {
    display: show ? 'none' : 'block',
  };
  const styledratting = {
    color: movies.rating >= 8.5 ? 'green' : 'red',
  };
  return (
    <div className='card'>
      <Card sx={{ maxWidth: 250, minWidth: 250 }} style={{ margin: '10px', height: '100%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={movies.poster}
            alt={movies.name} />
          <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography gutterBottom variant="h6" component="div">
                {movies.name}
              </Typography>
              {show ? <KeyboardArrowDownIcon style={{ color: 'blue' }} onClick={() => {
                  setShow(!show);
                }}></KeyboardArrowDownIcon> : <KeyboardArrowUpIcon onClick={() => {
                  setShow(!show);
                }}></KeyboardArrowUpIcon>}
              <IconButton color='primary' onClick={()=> navigate(`/movies/${id}`)}><Info /></IconButton>
              <Typography gutterBottom style={styledratting} component="div">
                ⭐{movies.rating}
              </Typography>

            </div>
            <Typography variant="body2" color="text.secondary" style={summaryToggle}>
              {movies.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div style={{display:'flex'}}>
            <button style={{backgroundColor:'white',border:'none'}} onClick={()=>setLike(like+1)}><Counter like={like}/></button>
            <button style={{backgroundColor:'white',border:'none'}} onClick={()=>setDislike(dislike+1)}><CounterDislike dislike={dislike}/></button>
        </div>
      </Card>
    </div>
  );
}
