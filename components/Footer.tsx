import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data';

const Footer = () => {
const year = new Date().getFullYear();

  return (
    <footer className='w-full pb-10 mb-5 md:mb-5' id='contact'>
    <div className='flex flex-col items-center'>
      <h1 className='heading lg:max-w-[45vw]'>
        Ready to take <span className='text-purple-300'>your</span> digital presence to the next level?
      </h1>
      <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
      <a href='mailto:ahmedbukhari.uni@gmail.com'>
        <MagicButton 
        title="Let's get in touch"
        icon={<FaLocationArrow />}
        position='right'
        />
      </a>
    </div>
    <div>
        <p className=' pt-15 md:text-base text-sm md:font-normal font-light text-center md:text-left'>Copyright © {year} synbear</p>
        <div className='pt-5 flex items-center md:gap-3 gap-6 justify-center md:justify-start'>
        {socialMedia.map((profile =>
            <a 
            key={profile.id}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <img src={profile.img} alt={String(profile.id)} width={20} height={20} />
            </a>
        ))}
        </div>
    </div>
    </footer>
  )
}

export default Footer