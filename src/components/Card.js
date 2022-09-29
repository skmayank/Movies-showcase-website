import { useNavigate } from "react-router-dom";

const Card = ({movie, handleSingleMovie }) => {
  const { Images, Title, Plot, Genre } = movie;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/singleMovie');
    handleSingleMovie(movie);
  }

  return (
    <div className="rounded overflow-hidden shadow-lg cursor-pointer w-full sm:w-[48%] md:w-[31%] lg:w-[24%]" onClick={handleCardClick}>
      <img className="w-full h-[275px]" src={Images[0]} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{Title}</div>
        {/* <p className="text-gray-700 text-base">
          {Plot}
        </p> */}
      </div>
      <div className="px-6 pt-4 pb-2">
        {Genre?.map(d => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{d}</span>
        ))}
      </div>
    </div>
  )
}

export default Card;
