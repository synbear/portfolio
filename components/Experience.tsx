import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className='py-20' id='experience'>
      <h1 className='heading'>
        My
        <span className='text-purple-300'> work experience</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={3000 + Math.floor(Math.random() * 4000)}
            borderRadius='1.75rem'
            className='flex flex-col lg:flex-row items-center text-white border-neutral-200 dark:border-slate-800 p-5'
          >
            <div className='flex-shrink-0 flex justify-center lg:justify-start'>
              <img
                src={card.thumbnail}
                alt={card.title}
                className='lg:w-24 md:w-20 w-16'
              />
            </div>
            <div className='flex-1 lg:ms-5 mt-4 lg:mt-0'>
              <h1 className='text-start text-xl md:text-2xl font-bold'>
                {card.title}
              </h1>
              <p className='text-start text-white-100 mt-3 font-semibold'>
                {card.desc}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience