import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

function App () {

  const location = useLocation();
  const navigate = useNavigate();

  
  const [access, setAccess] = useState(false);
  
  const username = 'ejemplo@gmail.com';
  const password = '123456a';
  
  const [characters, setCharacters] = useState([]);

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    } 
  }

  function logout(){
    setAccess(false);
    navigate('/');
  }

  useEffect(() => {
  !access && navigate('/');
  }, [access]); 

  function onSearch(character) {
    
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  function onClose(id){
    setCharacters(characters.filter((char) => char.id !== id))
  }
 

  return (
    <div className='App' style={{ padding: '25px'}}>
    
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
      </div>
      <Routes>
        <Route path='/' element={<Form login={login}/>} />

        <Route 
          path='/home' 
          element={<Cards characters={characters} onClose={onClose}/>}/>

        <Route 
          path='/favorites'
          element={<Favorites />}/>
        <Route path='/about' element={<About />}/>

        <Route path='/detail/:detailId' element={<Detail />}/>
      </Routes>  
        
    </div>
  )
}

export default App
