import React from 'react';

const Card = ({movie}) => {
  const { Images, Title, Plot, Genre } = movie;
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={Images[0]} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{Title}</div>
        <p class="text-gray-700 text-base">
          {Plot}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        {Genre?.split(',')?.map(d => (
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{d}</span>
        ))}
        {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
      </div>
    </div>
  )
}

export default Card;
