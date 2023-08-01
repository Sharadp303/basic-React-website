import React from "react";
const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
      <section className="main-card">
        {menuData.map((curElem) => {
            const {id,category,name,description,image}=curElem;
         
            return (
            <>
              <div className="container">
                    <img src={image} alt="Image" className="card-image"></img> 
                    
                    <div className="card" key={id} >
                        <span>{id}</span>
                        <span className="card-author">{category}</span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-description">{description}</span>
                    </div>
                  
                  <div className="card-order"><a href="#">ORDER</a></div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
