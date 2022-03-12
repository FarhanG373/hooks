import React, {useState} from 'react'
import NavBar from '../NavBar/NavBar';
import Menu from './../menuApi'
import MenuCard from './MenuCard'
const Resturent = () => {

    const [menuData, setMenuData] = useState(Menu);
       
  return (
<>
    <NavBar setMenuData={setMenuData} menuData={menuData}/>

    <div className='wrap'>
    <MenuCard menuData={menuData}/>
    </div>
    </>
  )
}

export default Resturent