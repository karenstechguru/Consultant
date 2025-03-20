import React from 'react'
import consultantImg from '../images/consultantImg.png'
import VerifiedConsultants from '../images/VerifiedConsultants.png'
const HeroSection = () => {
  return (
    <>

    <div className='bg-gradient-to-r from-slate-200 to-white flex justify-around relative align-middle p-6'>
       <div className=' felx  justify-around relative align-middle p-4 mt-16 h-1/4'>
      <h1 className='text-5xl text-slate-700 font-semibold relative  leading-normal '>Your Wellness, <br></br>Our  Priority: Where Health <br></br>Meets Care.</h1>
       <p className=''>Our expert team of consultants combines cutting-edge medical technology with<br></br>
        compassionate, personalized attention to provide precision medicine tailored<br></br>
        to your unique needs. From routine check-ups to complex treatments, trust us<br></br>
        to be your unwavering partner in health.</p>
       </div>
       
        <img className='w-1/3' src={consultantImg} alt='consultantImage'/>
    </div>

    <div className='flex justify-around bg-slate-600 h-72'>
    
      <div className='bg-gradient-to-r from-slate-200 to-blue-100  border rounded-md  p-6 m-5'>
      <img className='w-20' src={VerifiedConsultants} alt='verfied Consultants'/>
      <div className='text-2xl'>24/7 Services</div>
       <div className='mt-2'>
        Discover skilled Consultants based on<br></br>
        specialization and location.<br></br>
       </div> 
        <button className='bg-gradient-to-r from-blue-400 to-blue-700  text-white p-2 w-1/2 border rounded-md mt-3'>Read more</button>
        </div>

        <div className='bg-sky-100 border rounded-md  p-6 m-5'>
      <img className='w-20' src={VerifiedConsultants} alt='verfied Consultants'/>
      <div className='text-2xl'>24/7 Services</div>
       <div className='mt-2'>
        Discover skilled Consultants based on<br></br>
        specialization and location.<br></br>
       </div> 
        <button className='bg-gradient-to-r from-blue-400 to-blue-700  text-white p-2 w-1/2 border rounded-md mt-3'>Read more</button>
        </div>

        <div className='bg-sky-100 border rounded-md  p-6 m-5'>
      <img className='w-20' src={VerifiedConsultants} alt='verfied Consultants'/>
      <div className='text-2xl'>24/7 Services</div>
       <div className='mt-2'>
        Discover skilled Consultants based on<br></br>
        specialization and location.<br></br>
       </div> 
        <button className='bg-gradient-to-r from-blue-400 to-blue-700  text-white p-2 w-1/2 border rounded-md mt-3'>Read more</button>
        </div>
    </div>
    </>
  )
}

export default HeroSection