import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
      <div className='w-full bg-white py-[10rem] px-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
              

              <div className='w-full text-center shadow-2xl rounded-xl p-4 my-4 flex flex-col hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto bg-transparent mt-[-3rem]' src={Single} alt="/" />
                  <h2 className='text-2xl font-bold py-8'>Single User</h2>
                  <p className='text-4xl font-bold'>$149</p>
                  <div className='font-medium'>
                      <p className='py-2 border-b mt-8'>500 GB Storage</p>
                      <p className='py-2 border-b'>1 Granted User</p>
                      <p className='py-2 border-b'>Send up to 2 GB</p>
                  </div>
                  <button className="bg-green-400 w-[200px] rounded-md mx-auto px-6 font-medium my-6 py-3 text-black">Start Trial</button>
              </div>
              <div className='w-full text-center bg-gray-200 shadow-2xl rounded-xl p-4 my-4 md:my-0 flex flex-col hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto bg-transparent mt-[-3rem]' src={Double} alt="/" />
                  <h2 className='text-2xl font-bold py-8'>Double Users</h2>
                  <p className='text-4xl font-bold'>$199</p>
                  <div className='font-medium'>
                      <p className='py-2 border-b mt-8'>1000 GB Storage</p>
                      <p className='py-2 border-b'>2 Granted User</p>
                      <p className='py-2 border-b'>Send up to 4 GB</p>
                  </div>
                  <button className="text-green-400 w-[200px] rounded-md mx-auto px-6 font-medium my-6 py-3 bg-black">Start Trial</button>
              </div>
              <div className='w-full text-center shadow-2xl rounded-xl p-4 my-4 flex flex-col hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto bg-transparent mt-[-3rem]' src={Triple} alt="/" />
                  <h2 className='text-2xl font-bold py-8'>Group Users</h2>
                  <p className='text-4xl font-bold'>$249</p>
                  <div className='font-medium'>
                      <p className='py-2 border-b mt-8'>2500 GB Storage</p>
                      <p className='py-2 border-b'>3 Granted User</p>
                      <p className='py-2 border-b'>Send up to 6 GB</p>
                  </div>
                  <button className="bg-green-400 w-[200px] rounded-md mx-auto px-6 font-medium my-6 py-3 text-black">Start Trial</button>
              </div>
              
          </div>
    </div>
  )
}

export default Cards