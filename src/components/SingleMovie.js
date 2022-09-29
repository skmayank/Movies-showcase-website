/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
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
  const { Images, Title, Plot, Genre, Released, Director, Writer, Actors, Language } = loacation.state

  return (
    <div className='w-full'>
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
                alt=""
              />
            </>
          );
        })}
      </Carousel>

      <div className="px-[40px] py-8">
        <div className="font-bold text-3xl mb-2 border-b-[3px] text-sky-600 border-sky-600 pb-3 mb-5">{Title}</div>
        <p className="text-gray-700 text-lg">
          {Plot}
        </p>
        <div className="pt-4 pb-2">
          {Genre?.map((d, i) => (
            <span key={i} className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{d}</span>
          ))}
        </div>
        <div className='flex flex-wrap'>
          <div className="text-xl mb-2 w-full lg:w-4/12 flex gap-4"><span className='text-sky-600 font-semibold min-w-[100px]'>Released:</span> <span>{Released}</span></div>
          <div className="text-xl mb-2 w-full lg:w-4/12 flex gap-4"><span className='text-sky-600 font-semibold min-w-[100px]'>Director:</span> <span>{Director}</span></div>
          <div className="text-xl mb-2 w-full lg:w-4/12 flex gap-4"><span className='text-sky-600 font-semibold min-w-[100px]'>Writer:</span> <span>{Writer}</span></div>
          <div className="text-xl mb-2 w-full lg:w-4/12 flex gap-4"><span className='text-sky-600 font-semibold min-w-[100px]'>Actors:</span> <span>{Actors}</span></div>
          <div className="text-xl mb-2 w-full lg:w-4/12 flex gap-4"><span className='text-sky-600 font-semibold min-w-[100px]'>Language:</span> <span>{Language}</span></div>
        </div>
      </div>

    </div>

  )
}

export default SingleMovie
