import React from "react";

const Navbar=({filterItem,menuList})=>{
    return (
        <>
        <div className="nav-btn">
            {
                menuList.map((currEle)=>{
                    return (
                        <>
                        <button class="btn" onClick={()=>filterItem(currEle)}>{currEle}</button>
                        </>
                    )

                })
            }               
        </div>
        </>
    );

}

export default Navbar;