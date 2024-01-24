import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar'


const MainLayout = () => {

    return (
      <div className='flex flex-col h-screen bg-red-100'>
        <div className='flex flex-grow overflow-hidden bg-[#F5F5F5]'>
          <Sidebar />
          <div className='flex flex-col w-full'>
            <main className='items-center justify-center overflow-auto'>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    )
}

export default MainLayout