import { useNavigate } from 'react-router-dom';
import ButtonAppBar from './Navbar';
import { Button } from '@mui/material';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function AddMovies({ movieList, setMovieList }) {
  let histroy = useNavigate();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");

  const handleButton = (e) => {
    e.preventDefault();
    const id = uuid();
    let uniqueId = id.slice(0, 1);
    let newMovie = {
      "name": name,
      "poster": poster,
      "summary": summary,
      "rating": rating,
      "trailer": trailer,
      "id": uniqueId
    };
    console.log(newMovie.id);

    setMovieList([...movieList, newMovie]);
    histroy('/movies');
  };
  return (
    <div>
      <ButtonAppBar />
      <div className='form-container'>
        <div className='form'>
          <input type='text' placeholder='Enter movie name' onChange={(e) => setName(e.target.value)} />
          <input type='text' placeholder='Poster URL' onChange={(e) => setPoster(e.target.value)} />
          <input type='text' placeholder='Summary' onChange={(e) => setSummary(e.target.value)} />
          <input type='number' placeholder='Rating' onChange={(e) => setRating(e.target.value)} />
          <input type='text' placeholder='Trailer URL' onChange={(e) => setTrailer(e.target.value)} />
          <Button style={{ marginLeft: '35%' }} onClick={(e) => handleButton(e)}>Add Movie</Button>
        </div>
      </div>
    </div>
  );
}
