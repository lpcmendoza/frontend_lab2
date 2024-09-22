import ArtistDetails from "./components/ArtistDetails";
import { artists } from "./best-selling-music-artists"; // Assuming artists is in a file

function App() {
  return (
    <div className="content">
      <h1>Best-selling Music Artists &#127928;</h1>
      <div className="artist-details-component">
        {artists.map((artist, index) => (
          <ArtistDetails key={index} artist={artist} />
        ))}    
      </div>
    </div>
  );
}

export default App;