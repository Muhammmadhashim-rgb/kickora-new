import React, { Component } from 'react'

function shoesCard(props) {

   return (
      <div className=''>
         <div>
            <img  className='2xl:w-[23rem] xl:w-[18rem] lg:w-[18rem] xs:w-full  sm:w-full md:w-full' src={props.cardImage} alt="" />

            <h1 className=  '  mt-3 text-[#232321] font-rubik 2xl:text-[1.5rem] xl:text-[1.3rem] md:text-[1.4rem] xs:text-[0.9rem]   sm:text-[1rem]  lg:text-[1rem]  not-italic font-semibold leading-normal'> {props.cardHeading1} <span className='block'>{props.cardHeading2}</span></h1>
            </div>

             <button className=" mt-3 rounded-md mb-5 bg-[#232321] hover:bg-[#005F73]   2xl:px-20 xl:px-[4rem] lg:px-[2rem] md:px-[5.5rem] sm:px-[4rem]    xs:text-[0.7rem] xs:px-[0.8rem] xs:py-[0.6rem]  2xl:py-[1rem] xl:py-[1rem] lg:py-[1rem] md:py-[1rem] sm:py-[1rem]  flex justify-center items-center gap-1 text-white font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
            View Product - <span className='text-[#FFA52F]'>{props.cardPrize}</span>
          </button>
      </div>
      
   )

} 


  

export default shoesCard 