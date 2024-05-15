"use server"
import React from 'react';
import Spotify from './components/spotify';
import Weather from './components/weather';
import Link from 'next/link';
const App = () => {
 
    return (
      <main>
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="text-white text-3xl text-center">Programador, camionero virtual y gilipollas</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <p className="text-white text-center text-2xl">otter friendly 🦦</p> {/* eeee emoji asqueroso pero es lo q hay */}
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <Link href="https://twitter.com/Polo_1245Ofi" className="text-sky-400 text-center text-xl">Twitter</Link>
        </div>
        

        <div className='flex justify-center mt-10 items-center'>
          <div className="mx-4">
            <Spotify /> 
          </div>
          <div className="mx-4">
            <Weather />
          </div>
          
        </div>
      </main>
    );
  };
  
  export default App;