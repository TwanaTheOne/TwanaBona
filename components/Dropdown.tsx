
"use client";

import React, { use, useState } from 'react';
import NavBar from './NavBar';
import NavBarLink from './NavBarLink';




interface DropdownProps {
  title: string;
  items : string[];
  href: string[];
}


interface DropdownItem {
  label: string;
  href: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown">
      <div tabIndex={1} role="button" className="bg bg-red m-1" onClick={handleToggle}>{title}</div>
      {isOpen && (
        <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
          <div className="card-body">
            <h3 className="card-title"></h3>

      
           </div>

            <div>
            {items.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                 <li key={index}><a href={`#${item}`}>{item}</a></li>
                ))}
              
            </div>
          </div>
        
      )}
    </div>
  );
};

export default Dropdown;










/*

<ul>
<li><a href="#home">Home</a></li>
<li><a href="#dam">Dam</a></li>
<li><a href="#herr">Herr</a></li>
<li><a href="#barn">Barn</a></li>
</ul>
*/

/*
const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-blue-300">
      <div className="flex justify-end flex-1 px-2">


      <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
    <div className="card-body">
      <h3 className="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>

      <ul>
<li><a href="#home">Home</a></li>
<li><a href="#dam">Dam</a></li>
<li><a href="#herr">Herr</a></li>
<li><a href="#barn">Barn</a></li>
</ul>

    </div>
  </div>
</div>


      </div>
      </div>
    
      )

    };
      
  
  

export default Dropdown;
*/
