import React,{useState} from 'react'
import Menu from "./MenuApi.js"
import MenuCard from "./MenuCard"


export const Resturant = () => {
    const [menuData,setMenuData]=useState(Menu);

    const filterItem=(category)=>{
      const updatedList=Menu.filter((curElem)=>{
      return curElem.category===category;
      });
      setMenuData(updatedList);

    };

  return (
    <>
     <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' onClick={()=>filterItem("Kawasaki")}>
        Kawasaki</button>
        <button className='btn-group__item' onClick={()=>filterItem("Harley-Davidson")}>
        Harley-Davidson</button>
        <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>
          all</button>
      </div>
     </nav>

     <MenuCard menuData={menuData}/>
    </>
  )
};

