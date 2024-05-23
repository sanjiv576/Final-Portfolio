import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants/index';
import { backend, menu, close, creator, mylogo } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(true);

  const navigate = useNavigate();
  return (
    <nav className={`${styles.paddingX} w-full flex items-center 
    py-5  top-0 z-0 bg-primary`}>

      <div className="w-full flex justify-between items-center
       max-w-7xl mx-auto">

        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={mylogo}
            className='w-10 h-10 object-contain'
            alt="My Logo" />

          <p className='text-white text-[16px] font-bold cursor-pointer flex'>Sanjiv Shrestha &nbsp;
            <span className='sm:block hidden text-[16x]'> | &nbsp; Portfolio</span></p>
        </Link>
        <ul className='list-none flex-row hidden sm:flex gap-10'>

          {
            navLinks.map((link) => (
              <li key={link.id}

                className={`
              ${active === link.title ? "text-white" : "text-secondary"} 
              hover:text-white font-bold cursor-pointer
              `}
                onClick={() => setActive(link.title)}
              >
                {/* <a href={`#${link.id}`}>{link.title}</a> */}

                <NavLink to={`/${link.id}`}>{link.title}</NavLink>

                
                </li>
            ))
          }

        </ul>

        {/* for mobile screen */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? menu : close}
            alt="menu pic"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`
               ${toggle ? 'hidden' : 'flex'}
               p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
               z-20 rounded-xl
            `}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>

              {
                navLinks.map((link) => (
                  <li key={link.id}

                    className={`
                    ${active === link.title ? "text-white" : "text-secondary"} 
                    hover:text-white cursor-pointer text-[16px]
                    `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);

                    }}
                  >
                    {/* <a href={`#${link.id}`}>{link.title}</a> */}
                    <NavLink to={`/${link.id}`}>{link.title}</NavLink>

                  </li>
                ))
              }

            </ul>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar