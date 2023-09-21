import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import Sidebar from './components/Sidebar'
import MainSection from './components/MainSection'


const App = () => {
  return (
    <main className='main'>
      <header className='header'>
        <div className='logoBox'> Logo</div>
        <div className='triangle-topleft'/>
        <div className='companyInfo'>
          <div className='companyName'>
            XYZ Enterprises Pvt.Ltd
          </div>
          <div className='companyName'><IoIosArrowDown/></div>
        </div>
      </header>
      <aside className='sidebar'>
        <Sidebar/>
      </aside>
      <section className='mainSection'>
        <MainSection/>
      </section>
    </main>
    
  )
}

export default App