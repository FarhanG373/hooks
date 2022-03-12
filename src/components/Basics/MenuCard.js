import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData);
  return (
      <>
      {
        menuData.map((curEle)=>{
            const {id, name, category, description, image, price} = curEle;
              return(
                <div className='card' key={id}>
                <div className='cardImage'><img src={image} alt={name}/></div>
                <div className='cardBody'>
                    <div className='itemName'>{name}</div>
                    <div className='itemCategory'>{category}</div>
                    <div className='itemDescription'>{description}</div>
                    <div className='itemPrice'>Price: {price}$</div>
                </div>
            </div>
              )
          })
      }
    </>
  )
}

export default MenuCard