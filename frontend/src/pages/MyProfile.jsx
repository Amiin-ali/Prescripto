import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Amiin Ali",
    image: assets.profile_pic,
    email: "amiinali29@email.com",
    phone: '+252 61000000',
    address: "deyniile, mogadishu, somalia",
    gender: "male",
    dob: "2004-06-01"
  })
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {
        isEdit
          ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input type="phone" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit
              ? <input type="text" value={userData.address} onChange={e => setUserData(prev => ({ ...prev, address: e.target.value }))} />
              : <p className='bg-gray-50'>{userData.address}</p>
          }
          <div>
            <p className='text-neutral-500 underline mt-3'>BASIC_INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
              <p className='font-medium'>Gender:</p>
              {
                isEdit
                  ? <select className='max-w-20 bg-gray-100 ' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} >
                    <option value="Male"> Male</option>
                    <option value="Female">Female</option>
                  </select>
                  : <p className='text-gray-400'>{userData.gender}</p>
              }
              <p className='font-medium'>Brithday:</p>
              {
                isEdit 
                ? <input className='max-w-20 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                : <p className='text-gray-400'>{userData.dob}</p>
              }
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4'>
        {
          isEdit
          ? <button className='border birder-[#5f6fff] px-8 py-2 rounded-full hover:bg-[#5f6fff] hover:text-white transition-all duration-400' onClick={()=>setIsEdit(false)}>Save Information</button>
          : <button className='border birder-[#5f6fff] px-8 py-2 rounded-full hover:bg-[#5f6fff] hover:text-white transition-all duration-400' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile