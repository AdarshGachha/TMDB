import React from 'react'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown';

import {styles} from "./style.module.css";

const Nav = () => {
  return (
    <>
    <div className="navigate d-flex align-items-center justify-content-center">
        <div className="left-nav">
           <h1>logo</h1>

        </div>
        <div className="right-nav">
      {/* Movies Dropdown */}
            <Dropdown>
      <Dropdown.Toggle className='bg-transparent text-white ' variant="" id="dropdown-basic">
       Movies
      </Dropdown.Toggle>

      <Dropdown.Menu className='bg-dark d-flex flex-column align-items-start px-3'>
       <Link href="/movies">Popular</Link>
       <Link href="/movies">Now Playing</Link>
       <Link href="/movies">Upcoming</Link>
       <Link href="/movies">Top Rated</Link>
        
      </Dropdown.Menu>
    </Dropdown>

      {/* Movies Dropdown */}

      {/* TV Dropdown */}
      <Dropdown toggle={function noRefCheck(){}}>
  <DropdownToggle
    data-toggle="dropdown"
    tag="span"
  >
    Custom Dropdown Content
  </DropdownToggle>
  <DropdownMenu>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
  </DropdownMenu>
</Dropdown>

      {/* TV Dropdown */}
      

    
    <Link href="/">People</Link>
            
            <Link href="">more</Link>

        </div>


    </div>
    </>
    
  )
}

export default Nav