import React from 'react';
import Fetch from '../components/fetchPosts';

const App = () => {
  return (
    <main className='text-xl text-white'>
      <div className='flex justify-center items-center'>
        <div className="max-w-5xl mx-auto md:grid-cols-3 gap-4 mt-12">
          <Fetch />
        </div>
      </div>
    </main>
  );
};

export default App;