import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='font-bold text-2xl'>100</p>
                <p className='text-gray-600'>Total Teachers</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-600 text-lg'>+20</span>
            </p>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='font-bold text-2xl'>500</p>
                <p className='text-gray-600'>Total Students</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-600 text-lg'>+80</span>
            </p>
      </div>
      <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='font-bold text-2xl'>4</p>
                <p className='text-gray-600'>Total Admins</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-600 text-lg'>+1</span>
            </p>
      </div>

    </div>
  )
}

export default TopCards
