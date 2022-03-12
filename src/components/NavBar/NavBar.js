import React, {useState} from 'react'
import './NavBar.scss'
import Menu from '../menuApi'



const unqList = [...new Set(Menu.map((curList) => {
    return(
        curList.category
    )
}))]
// console.log(unqList);
const NavBar = ({setMenuData, menuData}) => {
    const[isOpen, setOpen] = useState(false);
const [menuList, setMenuList] = useState(unqList);
    const filterItem = (category) => {
        const updatedList = Menu.filter((curEle)=>{
            return curEle.category === category;
        },[]);
        setMenuData(updatedList);
    }
  return (
    <div className={`navBar ${isOpen && 'is-active'}`}>

        <button className={`navBarBut`} onClick={()=>setOpen(!isOpen)}><span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span></button>
<ul>


    {
       menuList.map((curLis, index) => {
            return <li key={curLis.index}><button onClick={()=>filterItem(curLis)}>{curLis}</button></li>
       }) 
    }
    
   
</ul>
        </div>
  )
}

export default NavBar