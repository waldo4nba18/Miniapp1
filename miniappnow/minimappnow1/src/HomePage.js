import React, {useContext} from 'react';
import { AppContext } from './AppContext';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  margin: 0 auto;
  align-items: center;
  width:100%;
// background-image: url("https://static.wikia.nocookie.net/rickandmorty/images/d/da/S4e3_2019-11-28-13h18m09s324.png/revision/latest?cb=20191128184508");

background-size: cover;
border: solid black 10px;
`

export default function HomePage() {
  const {movieList} = React.useContext(AppContext);
  console.log(movieList);
   
    return (
      <Container>
        <h1>Movie List</h1>
        <ul>
            {movieList.map(movie => (
                <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
      </Container>
    )
  }
  
