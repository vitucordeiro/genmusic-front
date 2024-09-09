import { Button } from "@/components/ui/button";

export function StepThree() {
  const urlPlaylist = localStorage.getItem('playlistURL');
  const imgPlaylist = localStorage.getItem('playlistIMG');

  if (!urlPlaylist) {
    return <div>Loading playlist information...</div>;
  }

  return (
    <div>
      <h2>Your Playlist is Ready!</h2>
      {urlPlaylist && (
        <div>
          <img src={imgPlaylist || ''} alt="Playlist cover" />
          <a   href={urlPlaylist} target="_blank" rel="noopener noreferrer">
            Open Playlist on Spotify
          </a>
        </div>
      )}
    </div>
  );
}