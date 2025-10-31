import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className='bg-[#005F73] w-full  2xl:rounded-t-[48px] xl:rounded-t-[48px] lg:rounded-t-[48px] md:rounded-t-[48px] sm:rounded-t-[48px] xs:rounded-t-[35px] 2xl:p-[72px] xl:p-[65px] lg:p-[55px] md:p-[40px] gap-[70px] sm:p-[32px] xs:p-[24px]  flex lg:justify-between '>
          <div>
            <h1 className='font-rubik 2xl:text-[48px] xl:text-[38px] lg:text-[30px] xs:text-[1rem]  font-[600] text-white'>Join our KicksPlus <br /> Club & get 15% off</h1>
            <p className='font-rubik 2xl:text-[20px] xl:text-[18px] lg:text-[15px] xs:text-[15px] font-[400] text-[#E7E7E3] my-3'>Sign up for free! Join the community.</p>

            <div className='my-6 flex '>
              <input className='2xl:w-[342px]  xl:w-[300px] lg:w-[280px] xs:w-[140px]  2xl:px-5 2xl:py-3 xl:px-5 xl:py-3 lg:px-5 lg:py-3 md:px-5 md:py-3 sm:px-5 sm:py-3 xs:px-2 xs:py-2 outline-none rounded-[10px]  bg-transparent border-[2px] text-[#E7E7E3] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] xs:text-[14px]' type="text" name="" id="" placeholder='Email address' />

              <button className=' ms-4 bg-[#232321] hover:bg-[#2c2c2a]  text-white text-[14px]   sm:px-[1rem] xs:px-[0.8rem] xs:py-[0.2rem]  sm:py-[0.6rem] md:px-[1.2rem] md:py-[0.8rem]  2xl:px-8 2xl:py-4 xl:px-8 xl:py-4 lg:px-8 lg:py-4 2xl:text-[1rem] xl:text-[1rem] lg:text-[1rem]  md:text-[0.8rem] xs:text-[0.7rem] font-[500] font-rubik  rounded-[8px]'>Submit</button>
            </div>
          </div>
          <div className='2xl:mt-[5rem] 2xl:flex xl:flex lg:flex md:flex sm:flex sm:mt-[0rem]  xs:hidden lg:mt-[4rem] lg:w-[45%] md:w-[35%]'>
            <img  src="\Images\Footer-pic.svg" alt="" />
          </div>
        </div>




        <div className=' xs:px-[24px] xs:pt-[24px]  xs:rounded-t-[35px] w-full 2xl:pt-[72px] xl:pt-[68px] lg:pt-[62px] md:pt-[30px] sm:pt-[32px] 2xl:px-[72px] xl:px-[68px] lg:px-[62px] md:px-[40px] sm:px-[32px] 2xl:mt-[-60px] xl:mt-[-60px] lg:mt-[-60px] md:mt-[-50px] sm:mt-[-44px] xs:mt-[-33px] rounded-[3rem] bg-[#232321] overflow-clip'>
          <div className='2xl:flex xl:flex lg:flex md:flex sm:flex  2xl:gap-[10rem] xl:gap-[6rem] lg:gap-[3rem]  md:gap-[2rem]  sm:gap-[2rem]'>
            <div>
              <h1 className='2xl:text-[2rem] xl:text-[1.5rem] lg:text-[1.3rem] font-rubik font-[600] text-[#FFA52F]'>About us</h1>
              <p className='2xl:text-[1.25rem] xl:text-[1.2rem] lg:text-[1rem] sm:text-[0.8rem] xs:text-[0.7rem] font-sans-serif font-normal text-[#E7E7E3] mt-3'>We are the biggest hyperstore in the universe.  We got you all cover with our exclusive collections and latest drops.</p>
            </div>
            <div>
              <h1 className='2xl:text-[2rem] xl:text-[1.5rem] lg:text-[1.3rem] font-rubik font-[600] text-[#FFA52F]'>Categories</h1>
              <ul className='mt-3'>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem] sm:text-[0.8rem] lg:text-[1rem] cursor-pointer  xs:text-[0.7rem] font-sans-serif font-normal text-[#E7E7E3]'>Runners</p>
                </li>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem] sm:text-[0.8rem] lg:text-[1rem]   xs:text-[0.7rem] cursor-pointer font-sans-serif font-normal text-[#E7E7E3]'>Sneakers</p>
                </li>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem] sm:text-[0.8rem] lg:text-[1rem]   xs:text-[0.7rem] cursor-pointer font-sans-serif font-normal text-[#E7E7E3]'>Hiking</p>
                </li>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem] sm:text-[0.8rem] lg:text-[1rem]  xs:text-[0.7rem] cursor-pointer  font-sans-serif font-normal text-[#E7E7E3]'>Golf</p>
                </li>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem] sm:text-[0.8rem] lg:text-[1rem]  xs:text-[0.7rem] cursor-pointer  font-sans-serif font-normal text-[#E7E7E3]'>Outdoor</p>
                </li>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem] sm:text-[0.8rem] lg:text-[1rem]  xs:text-[0.7rem] cursor-pointer  font-sans-serif font-normal text-[#E7E7E3]'>Basketball</p>
                </li>
              </ul>
            </div>
            <div>
              <h1 className='2xl:text-[2rem] xl:text-[1.5rem] lg:text-[1.3rem] font-rubik font-[600] text-[#FFA52F]'>Company</h1>
              <ul className='mt-3'>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem] sm:text-[0.8rem] lg:text-[1rem] font-sans-serif  xs:text-[0.7rem] font-normal cursor-pointer  text-[#E7E7E3]'>About</p>
                </li>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem] sm:text-[0.8rem] lg:text-[1rem] font-sans-serif  xs:text-[0.7rem] font-normal cursor-pointer  text-[#E7E7E3]'>Contact</p>
                </li>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem] sm:text-[0.8rem] lg:text-[1rem] font-sans-serif  xs:text-[0.7rem] font-normal cursor-pointer  text-[#E7E7E3]'>Blogs</p>
                </li>
              </ul>
            </div>
            <div>
              <h1 className='2xl:text-[2rem] xl:text-[1.5rem] lg:text-[1.3rem] font-rubik font-[600] text-[#FFA52F]'>Follow us</h1>
              <ul className='flex gap-5 mt-3'>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem] sm:text-[0.8rem] lg:text-[1rem] cursor-pointer font-sans-serif font-normal text-[#E7E7E3]'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" fill="#E7E7E3" />
                  </svg></p>
                </li>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem]  xs:text-[0.7rem] sm:text-[0.8rem] lg:text-[1rem] cursor-pointer font-sans-serif font-normal text-[#E7E7E3]'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="#E7E7E3" />
                  </svg></p>
                </li>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem]  xs:text-[0.7rem] lg:text-[1rem] sm:text-[0.8rem] cursor-pointer font-sans-serif font-normal text-[#E7E7E3]'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22.4591 6C21.6891 6.35 20.8591 6.58 19.9991 6.69C20.8791 6.16 21.5591 5.32 21.8791 4.31C21.0491 4.81 20.1291 5.16 19.1591 5.36C18.3691 4.5 17.2591 4 15.9991 4C13.6491 4 11.7291 5.92 11.7291 8.29C11.7291 8.63 11.7691 8.96 11.8391 9.27C8.27906 9.09 5.10906 7.38 2.99906 4.79C2.62906 5.42 2.41906 6.16 2.41906 6.94C2.41906 8.43 3.16906 9.75 4.32906 10.5C3.61906 10.5 2.95906 10.3 2.37906 10V10.03C2.37906 12.11 3.85906 13.85 5.81906 14.24C5.18979 14.4122 4.52916 14.4362 3.88906 14.31C4.16067 15.1625 4.6926 15.9084 5.41008 16.4429C6.12756 16.9775 6.99451 17.2737 7.88906 17.29C6.37269 18.4904 4.49306 19.1393 2.55906 19.13C2.21906 19.13 1.87906 19.11 1.53906 19.07C3.43906 20.29 5.69906 21 8.11906 21C15.9991 21 20.3291 14.46 20.3291 8.79C20.3291 8.6 20.3291 8.42 20.3191 8.23C21.1591 7.63 21.8791 6.87 22.4591 6Z" fill="#E7E7E3" />
                  </svg></p>
                </li>
                <li>
                  <p className='2xl:text-[1.25rem] xl:text-[1.2rem]  xs:text-[0.7rem] sm:text-[0.8rem] lg:text-[1rem] cursor-pointer font-sans-serif font-normal text-[#E7E7E3]'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16.6002 5.82C16.6002 5.82 17.1102 6.32 16.6002 5.82C15.9166 5.03962 15.5399 4.03743 15.5402 3H12.4502V15.4C12.4263 16.071 12.143 16.7066 11.6599 17.1729C11.1768 17.6393 10.5316 17.8999 9.86016 17.9C8.44016 17.9 7.26016 16.74 7.26016 15.3C7.26016 13.58 8.92016 12.29 10.6302 12.82V9.66C7.18016 9.2 4.16016 11.88 4.16016 15.3C4.16016 18.63 6.92016 21 9.85016 21C12.9902 21 15.5402 18.45 15.5402 15.3V9.01C16.7932 9.90985 18.2975 10.3926 19.8402 10.39V7.3C19.8402 7.3 17.9602 7.39 16.6002 5.82Z" fill="#E7E7E3" />
                  </svg></p>
                </li>
              </ul>
            </div>
          </div>

          <img src="\Images\footer-logo.svg"  className='mt-[85px] w-[100%]' alt="" />
        </div>
      </div>
    )
  }
}
