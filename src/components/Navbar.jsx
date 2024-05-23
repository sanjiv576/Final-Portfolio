import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants/index';
import { backend, menu, close, creator, mylogo } from '../assets';
import { Snackbar, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import sound from '../assets/music/sound.wav';
import { MySnackbar } from './MySnackBar';
import cvPath from '../assets/cv/cv_underconstruction.pdf'
const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(true);
  const [snack, setSnack] = useState({
    type: '',
    message: '',
  });

  const play = () => new Audio(sound).play();


  // for open and close snackbar
  const [open, setOpen] = React.useState(false);

  // for closing snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // download CV pdf file
  const handleDownload = async (e) => {
    e.preventDefault();

    const confirmation = window.confirm('Are you sure you want to download the CV?');
    if (confirmation) {
      try {
        const response = await fetch(cvPath);
        if (!response.ok) {
          // throw new Error('Network response was not ok');
          setSnack({
            type: 'error',
            message: 'Network response was not ok',
          });
          setOpen(true);
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Sanjiv Shrestha Resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);

        // Call the play function to play the music
        play();

        // Set the snack state to show success message
        setSnack({
          type: 'success',
          message: 'CV is ready to download.',
        });
        setOpen(true);
      } catch (error) {
        console.error('There was an error downloading the CV:', error);

        // Optionally, set the snack state to show error message
        setSnack({
          type: 'error',
          message: 'Failed to download CV.',
        });
        setOpen(true);
      }
    }
  };

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

        <Tooltip title="Just click to down CV.">
          <a
            href="#"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline btn-info"
            onClick={handleDownload}>
            Download CV <span><DownloadIcon /></span>
          </a>
        </Tooltip>
        <MySnackbar open={open} handleClose={handleClose} type={snack.type} message={snack.message} />

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