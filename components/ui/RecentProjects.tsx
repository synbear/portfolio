'use client'

import { projects } from '@/data'
import React, { useRef, useEffect } from 'react'
import { PinContainer } from './3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A collection of <span className='text-purple-300'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }, index) => (
          <div
            key={id}
            className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
          >
            <PinContainer title={link} href={link}>
              {index === 0 || index === projects.length - 1 ? (
                <InfiniteScrollImage img={img} /> // infinite repeating scroll
              ) : (
                <SingleScrollImage img={img} /> // normal scroll
              )}

              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mt-4'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, i) => (
                    <div
                      key={icon}
                      className='border border-white/0.2 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{ transform: `translateX(-${5 * i * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>
                <div className='flex items-center'>
                  <p className='flex lg:text-xl md:text-xs text-sm'>Check Live Site</p>
                  <FaLocationArrow className='ms-3' color='#CBACF9' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects

// Infinite repeating scroll for first & last project
const InfiniteScrollImage = ({ img }: { img: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef1 = useRef<HTMLImageElement>(null)
  const imgRef2 = useRef<HTMLImageElement>(null)
  const speed = 1

  useEffect(() => {
    let offset = 0
    let animationFrame: number

    const scroll = () => {
      if (imgRef1.current && imgRef2.current) {
        const imgHeight = imgRef1.current.offsetHeight
        offset += speed
        if (offset >= imgHeight) offset = 0
        imgRef1.current.style.transform = `translateY(-${offset}px)`
        imgRef2.current.style.transform = `translateY(-${offset}px)`
      }
      animationFrame = requestAnimationFrame(scroll)
    }

    animationFrame = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div
      ref={containerRef}
      className='relative overflow-hidden sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] mb-10 lg:rounded-3xl bg-[#13162d]'
    >
      <img ref={imgRef1} src={img} alt='project' className='absolute top-0 w-full' />
      <img ref={imgRef2} src={img} alt='project duplicate' className='absolute top-[100%] w-full' />
    </div>
  )
}

// Single scroll from top to bottom for middle projects
const SingleScrollImage = ({ img }: { img: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const speed = 1
  const offsetRef = useRef(0)

  useEffect(() => {
    let animationFrame: number

    const scroll = () => {
      if (imgRef.current) {
        const imgHeight = imgRef.current.offsetHeight
        const containerHeight = containerRef.current?.offsetHeight || 0
        offsetRef.current += speed

        // reset after reaching the bottom
        if (offsetRef.current >= imgHeight - containerHeight) offsetRef.current = 0
        imgRef.current.style.transform = `translateY(-${offsetRef.current}px)`
      }

      animationFrame = requestAnimationFrame(scroll)
    }

    animationFrame = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div
      ref={containerRef}
      className='relative overflow-hidden sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] mb-10 lg:rounded-3xl bg-[#13162d]'
    >
      <img ref={imgRef} src={img} alt='project' className='absolute top-0 w-full' />
    </div>
  )
}