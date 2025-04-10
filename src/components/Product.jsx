import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice'

const Product = (curEle) => {

    const {id, name, image, price, category} = curEle;
    // console.log(name);
  return (
    <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
            <figure>
                <img src={image} alt={name} />
                <figcaption className='caption'>{category}</figcaption>
            </figure>
            <div className="card-data">
                <div className="card-data-flex">
                    <h4>{name}</h4>
                    <div className="card-data--price">
                        {<FormatPrice price={price}/>}
                    </div>
                </div>
            </div>
        </div>
    </NavLink>
  )
}

export default Product