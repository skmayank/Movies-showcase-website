/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { moviesList } from '../utility/constants';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { useLocation } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const SingleMovie = () => {

  const loacation = useLocation()
  const { Images, Title, Plot, Genre, Year, Released, Director, Writer, Actors, Language } = loacation.state

  return (
    <div className='mt-5'>
      <Carousel
        itemClass="image-item"
        responsive={responsive}
        swipeable={true}
        infinite
      >
        {Images.map((image, i) => {
          return (
            <>
              <img
                key={i}
                className="rounded-3 w-full h-[400px]"
                src={image}
                height={400}
              />
            </>
          );
        })}
      </Carousel>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{Title}</div>
        <p className="text-gray-700 text-base">
          {Plot}
        </p>
        <div className="px-6 pt-4 pb-2">
          {Genre?.map((d, i) => (
            <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{d}</span>
          ))}
        </div>
        <div className="text-xl mb-2">Year: {Year}</div>
        <div className="text-xl mb-2">Released: {Released}</div>
        <div className="text-xl mb-2">Director {Director}</div>
        <div className="text-xl mb-2">Writer: {Writer}</div>
        <div className="text-xl mb-2">Actors: {Actors}</div>
        <div className="text-xl mb-2">Language: {Language}</div>
      </div>

    </div>

  )
}

export default SingleMovie
