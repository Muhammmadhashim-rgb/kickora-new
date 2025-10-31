import React, { props } from 'react'


function ReviewsCarts(props) {

  return (
    <div>
      <div className='reviewsbackground  2xl-w-[29rem] xl-w-[22rem] md-w-[22rem] bg-white  rounded-[2rem]'>
        <div className='2xl:p-[30px] xl:p-[25px] lg:p-[20px] md:p-[20px] sm:p-[15px] xs:p-[10px]'>
          <div className='flex items-center justify-between'>
            <h1 className='font-rubik 2xl:text-[1.5rem] xl:text-[1.4rem] lg:text-[1.2rem] font-[600] text-[#232321]'>{props.h1}</h1>
            <img className='lg:w-[25%] md:w-[30%] sm:w-[30%]' src={props.reviewProflieImage} alt="" />
          </div>
          <p className='font-sans-serif 2xl:text-[1.1rem] xl:text-[1rem] lg:text-[0.8rem] sm:text-[0.9rem]  pr-[23px]'>{props.para}</p>

          <div className='mt-[18px] flex gap-[5px]  '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFA52F" d="M12.865 2.996a1 1 0 0 0-1.73 0L8.421 7.674a1.25 1.25 0 0 1-.894.608L2.44 9.05c-.854.13-1.154 1.208-.488 1.76l3.789 3.138c.35.291.515.75.43 1.197L5.18 20.35a1 1 0 0 0 1.448 1.072l4.79-2.522a1.25 1.25 0 0 1 1.164 0l4.79 2.522a1 1 0 0 0 1.448-1.072l-.991-5.205a1.25 1.25 0 0 1 .43-1.197l3.79-3.139c.665-.55.365-1.63-.49-1.759l-5.085-.768a1.25 1.25 0 0 1-.895-.608z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFA52F" d="M12.865 2.996a1 1 0 0 0-1.73 0L8.421 7.674a1.25 1.25 0 0 1-.894.608L2.44 9.05c-.854.13-1.154 1.208-.488 1.76l3.789 3.138c.35.291.515.75.43 1.197L5.18 20.35a1 1 0 0 0 1.448 1.072l4.79-2.522a1.25 1.25 0 0 1 1.164 0l4.79 2.522a1 1 0 0 0 1.448-1.072l-.991-5.205a1.25 1.25 0 0 1 .43-1.197l3.79-3.139c.665-.55.365-1.63-.49-1.759l-5.085-.768a1.25 1.25 0 0 1-.895-.608z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFA52F" d="M12.865 2.996a1 1 0 0 0-1.73 0L8.421 7.674a1.25 1.25 0 0 1-.894.608L2.44 9.05c-.854.13-1.154 1.208-.488 1.76l3.789 3.138c.35.291.515.75.43 1.197L5.18 20.35a1 1 0 0 0 1.448 1.072l4.79-2.522a1.25 1.25 0 0 1 1.164 0l4.79 2.522a1 1 0 0 0 1.448-1.072l-.991-5.205a1.25 1.25 0 0 1 .43-1.197l3.79-3.139c.665-.55.365-1.63-.49-1.759l-5.085-.768a1.25 1.25 0 0 1-.895-.608z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFA52F" d="M12.865 2.996a1 1 0 0 0-1.73 0L8.421 7.674a1.25 1.25 0 0 1-.894.608L2.44 9.05c-.854.13-1.154 1.208-.488 1.76l3.789 3.138c.35.291.515.75.43 1.197L5.18 20.35a1 1 0 0 0 1.448 1.072l4.79-2.522a1.25 1.25 0 0 1 1.164 0l4.79 2.522a1 1 0 0 0 1.448-1.072l-.991-5.205a1.25 1.25 0 0 1 .43-1.197l3.79-3.139c.665-.55.365-1.63-.49-1.759l-5.085-.768a1.25 1.25 0 0 1-.895-.608z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFA52F" d="M12.865 2.996a1 1 0 0 0-1.73 0L8.421 7.674a1.25 1.25 0 0 1-.894.608L2.44 9.05c-.854.13-1.154 1.208-.488 1.76l3.789 3.138c.35.291.515.75.43 1.197L5.18 20.35a1 1 0 0 0 1.448 1.072l4.79-2.522a1.25 1.25 0 0 1 1.164 0l4.79 2.522a1 1 0 0 0 1.448-1.072l-.991-5.205a1.25 1.25 0 0 1 .43-1.197l3.79-3.139c.665-.55.365-1.63-.49-1.759l-5.085-.768a1.25 1.25 0 0 1-.895-.608z" /></svg>

            <p className='font-rubik 2xl:text-[1.2rem] xl:text-[1.1rem]  lg:text-[1rem]  items-center'>{props.data}</p>
          </div>
        </div>
        <img className='w-[100%] rounded-t-none rounded-b-[2rem]' src={props.reviewImage} alt="" />
      </div>
    </div >
  )
}


export default ReviewsCarts