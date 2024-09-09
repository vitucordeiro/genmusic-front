"use client"
import { getAccessTokenSpotify } from '@/hooks/useSpotifyToken';

import React from 'react';
import {useEffect,useState} from 'react'
import axios from 'axios';
import Loadscreen from '../../load/Loadscreen';

export function StepTwo({ playlist, setStep,  }: { playlist: ResponseCreate[], setStep: (data:any) => void }) {
    const [isLoading, setIsLoading ] = useState(false);
    const [spotifyToken, setSpotifyToken] = useState('');
    const playlistName = localStorage.getItem('playlistName');


    useEffect(() => {
      const fetchSpotifyToken = async () => {
        try {
          const token = await getAccessTokenSpotify();
          if(token.length > 0) return setSpotifyToken(`Bearer ${token}`);
        } catch (error) {
          console.error('Error with getAcessTokenSpotify():', error);
        }
      };
      fetchSpotifyToken();
    }, []);

    const generatePlaylistSpotify = async () => {
      setIsLoading(true);
      try {
        const uris = playlist.map(item => item.uri);
        const response = await axios('http://localhost:3000/app/generate', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': spotifyToken
          },
          data:{
            uris:uris,
            playlistName: playlistName
          } ,
        });
        const data = response.data;
        localStorage.setItem('playlistURL', data[0])
        localStorage.setItem('playlistIMG', data[1])

        console.log(data)
        const [playlistUrl, playlistImage] = data
        return;
      } catch (error) {
        console.error('Error on POST Request for Back-end:', error);

      } finally {
        setStep(2)
        setIsLoading(false);
      }
    }
    const back = () => {
        setStep(0);
    }
  return (
    <>
    {isLoading ? (<Loadscreen/>) : (

      <div className='flex flex-col w-full max-w-3xl mx-auto overflow-y-auto'>
       <div className="h-96 overflow-y-auto">
         <ul className="divide-y divide-gray-200">
           {Array.isArray(playlist) && playlist.map((item) => (
             <li key={item.uri} className="py-4 flex items-center hover:bg-gray-50 transition duration-150 ease-in-out">
               {item.albumImage ? (
                 <img 
                 src={item.albumImage} 
                 alt={item.name} 
                 className="h-16 w-16 object-cover rounded-sm mr-4" 
                 />
               ) : (
                 <div className="h-16 w-16 bg-gray-200 rounded-sm mr-4 flex items-center justify-center">
                   <span className="text-gray-400">No image</span>
                 </div>
               )}
               <div className="min-w-0 flex-1">
                 <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                 <p className="text-sm text-gray-500 truncate">{item.artist}</p>
               </div>
             </li>
           ))}
         </ul>
       </div>
     <div className="mt-6 flex justify-center space-x-4">
        <button onClick={generatePlaylistSpotify} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-150 ease-in-out">
          Generate Playlist
        </button>
        <button onClick={back} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full transition duration-150 ease-in-out">
          Back
        </button>
      </div>
     </div>
    ) }
     
    </>
  );
}