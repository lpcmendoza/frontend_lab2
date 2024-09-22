function ArtistDetails(props) {
  
    const { artist } = props;
  
    return (
      <div className="artist-details">
        <img className="image" src={artist.photo_url} alt={artist.name} width="100" />
        <div className="text">
          <h2>{artist.name}</h2>
          <p><strong>Country:</strong> {artist.country}<br/><strong>Years Active:</strong> {artist.years_active}</p>
        </div>
      </div>
    );
  }
  
  export default ArtistDetails;