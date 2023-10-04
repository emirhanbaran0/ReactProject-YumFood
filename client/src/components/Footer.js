import React from 'react'
import { FaDribbbleSquare,FaFacebook,FaFacebookSquare,FaGitSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-orange-500'>YumFood</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt porro animi omnis autem beatae repudiandae a blanditiis ad nihil debitis atque obcaecati odio nobis rerum, similique, qui deserunt molestias fugit.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>İstanbul</li>
                            <li className='py-2 text-sm'>Ankara</li>
                            <li className='py-2 text-sm'>Bursa</li>
                            <li className='py-2 text-sm'>Gaziantep</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>Tekirdağ</li>
                            <li className='py-2 text-sm'>Konya</li>
                            <li className='py-2 text-sm'>Samsun</li>
                            <li className='py-2 text-sm'>Sivas</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>Kastamonu</li>
                            <li className='py-2 text-sm'>Şanlurfa</li>
                            <li className='py-2 text-sm'>Batman</li>
                            <li className='py-2 text-sm'>Kocaeli</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>Sakarya</li>
                            <li className='py-2 text-sm'>Sinop</li>
                            <li className='py-2 text-sm'>Gümüşhane</li>
                            <li className='py-2 text-sm'>Kars</li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer
