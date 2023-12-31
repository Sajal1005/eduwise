import React from 'react'
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import { studentdata } from './studentdata'
import Link from 'next/link'
import {RxDashboard, RxPerson} from 'react-icons/rx'
import {AiOutlineHome} from 'react-icons/ai'
import {PiNotepad} from 'react-icons/pi'
import {FiSettings} from 'react-icons/fi'
import { currentProfile } from "@/lib/current-profile";


async function students(){
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

            </div>
        </div>
      <main className='ml-20 w-full'>
      <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <h2>Student List</h2>
            <h2>Welcome back, {profile.name}</h2>
        </div>
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <span>Name</span>
                    <span className='sm:text-left text-right'>Id</span>
                    <span className='hidden md:grid'>Attendance</span>
                    <span className='hidden sm:grid'>Marks</span>
                </div>
                <ul>
                    {studentdata.map((stu,id)=>(
                        <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                            <div className='flex items-center'>
                                <div className='bg-purple-100 p-3 rounded-lg'>
                                    <BsPersonFill className='text-purple-800'/>
                                </div>
                                <p className='pl-4'>{stu.name.first+' '+stu.name.last}</p>
                            </div>
                            <p className='text-gray-600 sm:text-left text-right'>{stu.id}</p>
                            <p className='hidden md:flex'>
                                <span className={stu.attendance >=75 ?'bg-green-300 rounded-lg p-2' : 'bg-red-500 p-2 rounded-lg'}>
                                    {stu.attendance}
                                </span>
                            </p>
                            <div className='sm:flex hidden justify-between items-center'>
                                <p>{stu.marks}</p>
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

export default students