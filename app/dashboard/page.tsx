import Header from './Header'
import TopCards from './TopCards'
import BarChart from './BarChart'
import PieChart from './PieChart'
import  Sidebar  from './Sidebar'

function DashBoard() {
  return (
    <Sidebar>
    <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-2 grid-cols-1 gap-4'>
            <BarChart />
            <PieChart />
        </div>
      </main>
       </Sidebar>
  )
}

export default DashBoard