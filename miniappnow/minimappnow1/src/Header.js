import React, {useState} from 'react';
import { AppContext } from './AppContext';
import styled from 'styled-components';
import { BrowserRouter as useNavigate } from 'react';


const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100px;
  padding: 0 10px;
  margin: 0 auto;
  align-items: center;
  width:100%;
background-image: url("https://w7.pngwing.com/pngs/354/191/png-transparent-star-material-effect-snow-effect-star-snow.png");

background-size: stretch;

`
const Container2 = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 200px;
  padding: 0 10px;
  margin: 0 auto;
  align-items: center;
  width:100%;
background-image: url("https://images.alphacoders.com/876/876589.jpg");
background-size: stretch;

`
const Button = styled.button`
border-radius: 50px;
display: row;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-weight: 700;
width: 200px;
height: 100px;
padding: 10px 80px;
background-color: green;
color: white;
&:hover {
  opacity: 0.8;
  transform: scale (0.98);
  font-type: poppins;
  `
  const StyledForm = styled.form`
display:flex;
flex-direction: column;
`
const SubmitButton = styled.input`
width: 187px;
border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px
font-weight: 700;
padding: 15px 60px;
background-color: black;
color: white;
&:hover {
  opacity: 0.8;
  transform: scale (0.98);
  font-type: poppins;
`

export default function Header() {

    const [searchText, setSearchText] = useState('');

    const handleSubmit = (e) => {
        e.preventdefault();
        setSearchText(searchText);

    }
   
    
    return (
        <>
        <Container style={{height: '100px'}}>
        <h1 style={{color: 'Gold'}}>Movie Galaxy</h1>
        </Container>
      <Container2>
        
        <Button >
            <h2 style={{fontSize:"20px"}}>Don't Click</h2>
        </Button>
        <form action="/" method="get">
        
        <input
            onSubmit={handleSubmit}
            type="text"
            id="header-search"
            placeholder="Search Movies"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} 
        />
        <button type="submit">Go!</button>
    </form>
       
      </Container2>
      </>
    )
  }
  
