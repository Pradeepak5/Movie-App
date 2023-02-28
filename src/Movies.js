import ButtonAppBar from './Navbar';
import { CardDesign } from './CardDesign';

export function Movies({ movieList }) {

  return (
    <div>
      <ButtonAppBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {movieList.map((data,index) => <CardDesign movies={data} key={index} id={index} />
        )}
      </div>
    </div>
  );
}
