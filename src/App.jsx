import { useEffect, useState } from 'react'
import SearchArtist from './SearchArtist'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputForm from './InputForm'

function App() {

  const [search, setSearch] = useState()

  const randomArray = ["Beyoncé",
    "The Beatles",
    "Kendrick Lamar",
    "Rihanna",
    "AC/DC",
    "Joni Mitchell",
    "Frank Ocean",
    "Radiohead",
    "Bob Marley",
    "David Bowie",]



  const getRandomElement = () => {
    const randomIndex = Math.floor(Math.random() * randomArray.length);
    return randomArray[randomIndex];
  };

  const randomQ = getRandomElement();

  return (
    <div className="App container">
      <div className="row justify-content-center" >
        <div className='col-12 col-lg-9 col-xl-6'>
          <InputForm search={search} setSearch={setSearch} />
          <SearchArtist artistSearch={search ? search : randomQ} />
        </div>
      </div>

    </div>
  )
}

export default App
