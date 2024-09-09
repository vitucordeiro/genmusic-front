"use client"
import { getAccessTokenSpotify } from '@/hooks/useSpotifyToken';
import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import Loadscreen from '../../load/Loadscreen';

export function StepOne({ onSubmit, setStep }: { onSubmit: (data: any) => void, setStep: (data:any) => void }) {
  const [mood, setMood] = useState('');
  const [spotifyToken, setSpotifyToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataMood = JSON.stringify(mood)
    setIsLoading(true);
    try {
      const response = await axios('http://localhost:3000/app/create', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': spotifyToken
        },
        data: {
          prompt:dataMood
          
        },
      });
      const data:ResponseCreate = response.data;
      onSubmit(data)
    } catch (error) {
      console.error('Error on POST Request for Back-end:', error);
      

    } finally {
   
      setIsLoading(false);
      setStep(1)
    }
  };

  return (
    <div>
      {isLoading ? ( <Loadscreen/> ) : ( 
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-full w-screen space-y-6 px-4 sm:px-8 md:px-16 lg:px-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
              What's your vibe?
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-prose text-center">
              Playlist name 
            </p>
            <textarea
              className="w-screen  md:w-2/3 lg:w-1/2 h-20 p-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none shadow-inner"
              placeholder="Ex: Feeling happy and energetic, need to unwind after a long day, feeling nostalgic..."
              onChange={(e) => { 
                 localStorage.removeItem('playlistName');
                 localStorage.setItem('playlistName', e.target.value);
                }}
              
            />  
            <p className="text-gray-600 text-lg sm:text-xl max-w-prose text-center">
              Tell us about your mood, and we'll craft a playlist that hits the spot.
            </p>
            <textarea
              className="w-screen  md:w-2/3 lg:w-1/2 h-20 p-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none shadow-inner"
              placeholder="Ex: Feeling happy and energetic, need to unwind after a long day, feeling nostalgic..."
              value={mood}
              onChange={(e) => {
                setMood(e.target.value)
              }}
              />
              <div className="flex  space-x-5 justify-around">          
                <button
                  type="submit"
                  className="px-8 w-[12.5em] py-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-200 shadow-md"
                  >
                  create playlist
                </button>
        
              </div>
            </form>
      )}
      

    </div>
  );
}

