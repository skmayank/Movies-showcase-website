import { useNavigate } from "react-router-dom";

const Card = ({ movie, handleSingleMovie }) => {
  const { Poster, Title, Genre, Year } = movie;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${Title}`, { state: movie });
    handleSingleMovie(movie);
  }

  return (
    <div className="rounded overflow-hidden shadow-lg cursor-pointer w-full sm:w-[48%] md:w-[31%] lg:w-[24%]" onClick={handleCardClick}>
      <img className="w-full h-[275px]" src={Poster} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{Title}</div>
        <div className="text-xl mb-2">{Year}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {Genre?.map((d, i) => (
          <span key={i} className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{d}</span>
        ))}
      </div>
    </div>
  )
}

export default Card;
