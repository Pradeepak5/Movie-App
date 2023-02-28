import './App.css';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Addcolor } from './Addcolor';
import { Home } from './Home';
import { Movies } from './Movies';
import { useState } from 'react';
import { AddMovies } from './AddMovies';
import ButtonAppBar from './Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

function App() {

  const [movieList,setMovieList] = useState([
    {
      "id": "98",
      "name": "Vikram",
      "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      "rating": 8.4,
      "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
      "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
    },
    {
      "id": "99",
      "name": "Varisu",
      "poster": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1130637b-ff57-48b5-b8d6-bfe756c7af58/dfgbfyx-d2690edb-b11d-4682-8bed-12a4c23e955c.jpg/v1/fill/w_1280,h_1716,q_75,strp/varisu_poster_by_kajandra_dfgbfyx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxNiIsInBhdGgiOiJcL2ZcLzExMzA2MzdiLWZmNTctNDhiNS1iOGQ2LWJmZTc1NmM3YWY1OFwvZGZnYmZ5eC1kMjY5MGVkYi1iMTFkLTQ2ODItOGJlZC0xMmE0YzIzZTk1NWMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4vhcxvTQ8U47Jf07dLxvVTCKbZQ9kRJ9u5HkLnATO40",
      "rating": 6.7,
      "summary": "Family Entertainment. Vijay's youthful look makes the movie more fantastic.",
      "trailer": "https://youtube.com/embed/9fux9swQ5AQ"
    },
    {
      "id": "100",
      "name": "RRR",
      "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      "rating": 8.8,
      "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      "id": "101",
      "name": "Iron man 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 7,
      "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      "id": "102",
      "name": "No Country for Old Men",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "rating": 8.1,
      "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      "id": "103",
      "name": "Jai Bhim",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      "rating": 8.8,
      "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      "id": "104",
      "name": "The Avengers",
      "rating": 8,
      "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      "id": "105",
      "name": "Interstellar",
      "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      "rating": 8.6,
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      "id": "106",
      "name": "Baahubali",
      "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      "rating": 8,
      "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      "id": "107",
      "name": "Ratatouille",
      "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      "rating": 8,
      "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
      "name": "PS2",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
      "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      "rating": 8,
      "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
      "id": "108"
    }
  ]);
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/color-game' element={<Addcolor />}/>
        <Route path='/movies' element={<Movies movieList={movieList} />}/>
        <Route path='/add-movies' element={<AddMovies movieList={movieList} setMovieList={setMovieList} />}/>
        <Route path='/movies/:id' element={<MovieDetails movieList={movieList} />}/>
      </Routes>
    </div>
  );
}

function MovieDetails({movieList}){

  let navigate = useNavigate();
  const {id} = useParams();
  console.log(id);
  let movieData = movieList[id];
  return (
    <div>
      <ButtonAppBar />
      <IconButton color='primary' onClick={()=> navigate(-1)}><ArrowBackIcon /> Back</IconButton>
      <iframe 
      width="100%" 
      height="500" 
      src={movieData.trailer} 
      title={movieData.name + `trailer`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
      <div className='movie-details'>
        <h1>{movieData.name} Trailer</h1>
        <h3>⭐{movieData.rating}</h3>
      </div>
      <p>
        {movieData.summary}
      </p>
    </div>
  )
}

export default App;
