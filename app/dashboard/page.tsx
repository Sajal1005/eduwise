import Header from './Header'
import TopCards from './TopCards'
import BarChart from './BarChart'
import PieChart from './PieChart'
import  Sidebar  from './Sidebar'
import Link from 'next/link'
import {RxDashboard, RxPerson} from 'react-icons/rx'
import {AiOutlineHome} from 'react-icons/ai'
import {PiNotepad} from 'react-icons/pi'
import {FiSettings} from 'react-icons/fi'
import { currentProfile } from "@/lib/current-profile";

async function DashBoard() {
    const profile = await currentProfile();
  return (
    <>
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/dashboard'>
                    <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                        <AiOutlineHome size={20}/>
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href='/dashboard'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block text-black'>
                        <RxDashboard size={20}/>
                    </div>
                </Link>
                <Link href='/dashboard/teachers'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block text-black'>
                        <RxPerson size={20}/>
                    </div>
                </Link>
                <Link href='/dashboard/students'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block text-black'>
                        <PiNotepad size={20}/>
                    </div>
                </Link>
            </div>
        </div>
      <main className='ml-20 w-full'>
      <div className='bg-gray-100 text-black'>
        <Header />
        {/* <TopCards /> */}
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
        <div className='p-4 grid md:grid-cols-2 grid-cols-1 gap-4'>
            <BarChart />
            <PieChart />
        </div>
      </div>
      </main>
    </div>
      
    </>
  )
}

export default DashBoard