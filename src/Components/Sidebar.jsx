import "../App.css";

// React-icons
import {HiMenu} from "react-icons/hi"
import {MdOutlineSpaceDashboard} from "react-icons/md"
import { AiOutlineEdit, AiOutlineBars } from "react-icons/ai"


// React
import { NavLink } from 'react-router-dom'
import { useState } from "react";

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen (!isOpen)
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdOutlineSpaceDashboard />
    },
    {
      path: "/todo",
      name: "Todo",
      icon: <AiOutlineBars />
    },
    {
      path: "/notes",
      name: "Notes",
      icon: <AiOutlineEdit />
    }
  ]

  return (
    <div className='container'>
      <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
        <div className="top_section">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo">place</h1>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
            <HiMenu onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar