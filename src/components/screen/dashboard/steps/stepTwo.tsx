import React from 'react';

export function StepTwo({ playlist, setStep }: { playlist: ResponseCreate[], setStep: (data:any) => void }) {
    const generatePlaylistSpotify = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

    }
    const back = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setStep(0);
    }
  return (
    <div className='flex flex-col justify-between items-center '>
   
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

      {Array.isArray(playlist) && playlist.map((item) => (
          <div 
          key={item.uri} 
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
          {item.albumImage && (
              <img 
              src={item.albumImage} 
              alt={item.name} 
              className="w-full h-48 object-cover" 
              />
            )}
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
            <p className="text-gray-600">{item.artist}</p>
           
          </div>
        </div>
      ))}
    </div>
    <form onSubmit={generatePlaylistSpotify}>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
            GENERATE
        </button>
    </form>

    <form onSubmit={back}>
        <button type="submit" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            back
        </button>
    </form>

    </div>
  );
}