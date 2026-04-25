import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h2 className="heading">
        Kind words from <span className="text-purple-300">satisfied clients</span>
      </h2>

      <div className="flex flex-col items-center md:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="mb-10 mt-10"
          pauseOnHover={true}
        />

        {/* Powered by text */}
        <h2 className="py-20 heading">
          Technology <span className="text-purple-300">Stack</span>
        </h2>

        {/* Companies / Powered by logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
          {companies.map(({ id, img, name }) => (
            <img key={id} src={img} alt={name} className="h-8 md:h-10 my-2 lg:m-4" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients