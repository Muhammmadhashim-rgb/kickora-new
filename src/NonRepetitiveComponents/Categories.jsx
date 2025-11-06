import React, { Component } from 'react'

export default class Categories extends Component {
   render() {
      return (
         <div>
            <div className=' 2xl:ps-44 xl:ps-44 lg:ps-44 md:ps-0  mt-24   bg-[#232321]'>



               <div className='flex justify-between md:mx-12 sm:mx-10 xs:mx-10  2xl:mx-0  xl:mx-0   lg:mx-0 '>
                  <h1 className='text-white pt-16  2xl:text-[4rem] xl:text-[3.8rem] lg:text-[3.5rem]  md:text-[3rem] sm:text-[3rem] xs:text-[1.2rem]   font-semibold font-rubik leading-normal  '>Categories</h1>

                  <div className='xs:hidden 2xl:flex xl:flex lg:flex md:flex sm:flex gap-6 mt-20 2xl:me-44 xl:me-44 lg:me-44  md:me-0'>
                     <button className="rounded-[0.5rem] cursor-pointer bg-[#858582]   h-12 2xl:px-3 xl:px-2 lg:px-2 2xl:py-8 flex justify-center items-center gap-1 text-black font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M14.03 7.47a.75.75 0 0 1 0 1.06L10.56 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0" clipRule="evenodd" /></svg>
                     </button>

                     <button className="rounded-[0.5rem] cursor-pointer  bg-[#E7E7E3]  h-12 2xl:px-3 xl:px-2  lg:px-2 2xl:py-8 flex justify-center items-center gap-1 text-black font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M9.97 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L13.44 12L9.97 8.53a.75.75 0 0 1 0-1.06" clipRule="evenodd" /></svg>
                     </button>
                  </div>


               </div>




               <div className='flex flex-col lg:flex-row  md:mx-12 sm:mx-10 xs:mx-10  2xl:mx-0  xl:mx-0   lg:mx-0'>

                  <div className='2xl:w-[50%]  xl:w-[50%] lg:w-[50%]  xl:h-[40rem] lg:h-[35rem]    mt-[3.2rem] rounded-tl-[64px]   bg-[#ECEEF0]'>

                     <div className="2xl:w-[70%] xl:w-[27rem] md:w-[30rem]  xs:w-[9rem] sm:w-[28rem]  lg:w-[24rem] xl:h-60 2xl:h-64 2xl:mt-48 xl:mt-48  lg:mt-48 md:mt-[9rem]    xs:mt-[4rem]  sm:mt-[4rem]  2xl:ms-[10rem]  md:mx-auto xl:ms-[10rem] lg:ms-[3rem] sm:ms-[8rem]  xs:ms-[3rem]  overflow-hidden">

                        <img
                           className=" object-cover  object-center"
                           src="/Images/CategoriesiImage1.png"
                           alt="Category Image"
                        />

                     </div>

                     <div className='flex justify-between 2xl:mt-6 xl:mt-6 lg:mt-6 items-center'>
                        <h1 className=' ps-16 pt-12 xs:ps-10 text-[#232321] font-rubik 2xl:text-[2.25rem] md:text-[2rem]  sm:text-[1.8rem]  xl:text-[2rem] lg:text-[1.8rem]   font-semibold leading-normal uppercase'>Lifestyle <span className='block '>Shoes</span></h1>

                        <button className="rounded-[0.5rem]  mb-5 mt-[4.7rem] me-16 bg-[#232321] hover:bg-[#005F73] 2xl:h-12 xl:h-10 lg:h-8 sm:h-8  2xl:px-7 2xl:py-8 xl:px-7 xl:py-8 lg:px-7 lg:py-8 md:px-7 md:py-8 sm:px-7 sm:py-8 xs:px-4 xs:py-4 flex justify-center items-center gap-1 text-white font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M2.16681 1.10565H14.8947V13.8336M14.0108 1.98954L1.10615 14.8942" stroke="#E7E7E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </button>

                     </div>

                  </div>

                  <div className='2xl:w-[50%]  xl:w-[50%] lg:w-[50%] xl:h-[40rem] lg:h-[35rem]  2xl:mt-[3.2rem] xl:mt-[3.2rem] lg:mt-[3.2rem] md:mt-[0rem]   bg-[#F6F6F6]'>


                     <div className="2xl:w-[70%] xl:w-[27rem] md:w-[30rem] xs:w-[9rem]  sm:w-[28rem] sm:mt-[4rem]  lg:w-[24rem]  2xl:h-64   sm:ms-[8rem]  md:mt-[9rem]  xs:ms-[3rem] xs:mt-[4rem] 2xl:mt-48 xl:mt-48 lg:mt-36 2xl:ms-[10rem] md:mx-auto xl:ms-[6rem] lg:ms-[3rem]">
                        <img
                           className=" object-cover  object-center"
                           src="/Images/CategoriesiImage2.png"
                           alt="Category Image"
                        />
                     </div>

                     <div className='flex justify-between 2xl:mt-[0.5rem] xl:mt-[0.5rem] lg:mt-[0.5rem] items-center'>
                        <h1 className=' 2xl:ps-16 xl:ps-16 lg:ps-16 md:ps-16 sm:ps-16 xs:ps-10 pt-12  text-[#232321] font-rubik  2xl:text-[2.25rem] md:text-[2rem]  xl:text-[2rem] sm:text-[1.8rem] lg:text-[1.8rem]  font-semibold leading-normal uppercase'>Basketball <span className='block '>Shoes</span></h1>

                        <button className="rounded-[0.5rem] mb-5 mt-[4.7rem] me-16 bg-[#232321] hover:bg-[#005F73] 2xl:h-12 xl:h-10 lg:h-8 sm:h-8  2xl:px-7 2xl:py-8 xl:px-7 xl:py-8 lg:px-7 lg:py-8 md:px-7 md:py-8 sm:px-7 sm:py-8 xs:px-4 xs:py-4 flex justify-center items-center gap-1 text-white font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M2.16681 1.10565H14.8947V13.8336M14.0108 1.98954L1.10615 14.8942" stroke="#E7E7E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </button>

                     </div>


                  </div>
               </div>

            </div>
         </div>
      )
   }
}
