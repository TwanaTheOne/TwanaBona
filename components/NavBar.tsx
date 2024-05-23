import React from 'react'
import NavBarLink from './NavBarLink'
import { links } from "@/data/dummydata";
import Link from 'next/link';
//import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart, FaPager, FaAllergies, FaBacon } from 'react-icons/fa';
import { IoLogInOutline } from "react-icons/io5";
import link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import Dropdown from './Dropdown';




const NavBar : React.FC = () => {
 
  return (
    <nav>
    <div className="grid grid-cols-1 height ='15px' bg-blue-200">
        <div className="text-green flex justify-left gap-4">

        <div className= ' hover:text-accent bg-blue-600' style={{ fontSize: '2.5em' }}>
      <GiHamburgerMenu />

    </div>

      <Link href="/" className="text-2xl hover:text-blue-wavy font-bold text-black-wavy">
      
        BonaBeauty.... Brand NR.1
      </Link>


      <div className='text-green flex justify-between hover:text-red  gap-3'>

<div className='flex justify-between gap-3'>
            <Dropdown title="HOME" items={['Item A', 'Item B', 'Item C']} href={[]} />
            <Dropdown title="DAM" items={['Dam A', 'Dam B']} href={[]}/>
            <Dropdown title="HERR" items={['Herr X', 'Herr Y', 'Herr Z']} href={[]} />
            <Dropdown title="BARN" items={['Child A', 'Child B', 'Child C', 'Child D']} href={[]}/>
            <Dropdown title="Skönhet" items={['Basic 1', 'Basic 2', 'Basic 3']} href={[]}/>
            <Dropdown title="IProduct" items={['Product A', 'Product B', 'Product C']} href={[]}/>
            <Dropdown title="Login" items={['Option one', 'Option two', 'Option three']} href={[]}/>
          </div>

  </div>
    
 
  
  </div>

</div>
  
    </nav>
        
  )
}

export default NavBar;





/*

{isMobileMenuOpen  && (
  <div className=" sm:hidden flex flex-col p-4">
      <Dropdown title="HOME" items={['Item A', 'Item B', 'Item C']} href={[]} />    
      <Dropdown title="DAM" items={['Dam A', 'Dam B']} href={[]}/>
      <Dropdown title="HERR" items={['Herr X', 'Herr Y', 'Herr Z']} href={[]} />
      <Dropdown title="BARN" items={['Child A', 'Child B', 'Child C', 'Child D']} href={[]}/>
      <Dropdown title="Skönhet" items={['Basic 1', 'Basic 2', 'Basic 3']} href={[]}/>
      <Dropdown title="IProduct" items={['Product A', 'Product B', 'Product C']} href={[]}/>
      <Dropdown title="Login" items={['Option one', 'Option two', 'Option three']} href={[]}/>

</div>
*/