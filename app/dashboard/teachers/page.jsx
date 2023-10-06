import React from 'react'
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import { teacherdata } from './teacherdata'
import Link from 'next/link'
import Image from 'next/image'
import {RxDashboard, RxPerson} from 'react-icons/rx'
import {AiOutlineHome} from 'react-icons/ai'
import {PiNotepad} from 'react-icons/pi'
import {FiSettings} from 'react-icons/fi'
import { currentProfile } from "@/lib/current-profile";



async function teachers(){
    const profile = await currentProfile();
  return (
    <div className='flex text-black'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/dashboard'>
                    <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                        <AiOutlineHome size={20}/>
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href='/dashboard'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxDashboard size={20}/>
                    </div>
                </Link>
                <Link href='/dashboard/teachers'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxPerson size={20}/>
                    </div>
                </Link>
                <Link href='/dashboard/students'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <PiNotepad size={20}/>
                    </div>
                </Link>
                <Link href='/dashboard'>
                </Link>
            </div>
        </div>
      <main className='ml-20 w-full'>
      <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <h2>Teacher List</h2>
            <h2>Welcome back, {profile.name}</h2>
        </div>
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <span>Name</span>
                    <span className='sm:text-left text-right'>Id</span>
                    <span className='hidden md:grid'>Subject</span>
                    <span className='hidden sm:grid'>Email</span>
                </div>
                <ul>
                    {teacherdata.map((teach,Tid)=>(
                        <li key={Tid} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                            <div className='flex items-center'>
                                <div className='bg-purple-100 p-3 rounded-lg'>
                                    <BsPersonFill className='text-purple-800'/>
                                </div>
                                <p className='pl-4'>{teach.name.first+' '+teach.name.last}</p>
                            </div>
                            <p className='text-gray-600 sm:text-left text-right'>{teach.Tid}</p>
                            <p className='hidden md:flex'>{teach.subject}</p>
                            <div className='sm:flex hidden justify-between items-center'>
                                <p>{teach.email}</p>
                                <BsThreeDotsVertical/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
      </main>
    </div>
  )
}

export default teachers