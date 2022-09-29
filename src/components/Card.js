import { useNavigate } from "react-router-dom";

const Card = ({movie, handleSingleMovie }) => {
  const { Images, Title, Plot, Genre } = movie;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/singleMovie');
    handleSingleMovie(movie);
  }

  return (
    <div class="rounded overflow-hidden shadow-lg cursor-pointer w-full sm:w-[48%] md:w-[31%] lg:w-[24%]" onClick={handleCardClick}>
      <img class="w-full" src={Images[0]} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{Title}</div>
        <p class="text-gray-700 text-base">
          {Plot}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        {Genre?.map(d => (
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{d}</span>
        ))}
      </div>
    </div>
  )
}

export default Card;
