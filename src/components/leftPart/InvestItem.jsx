import React from 'react'

function InvestItem({ item }) {
    const { title, desc, icon, upOrDown, percent, price } = item;
  return (
    <div className='w-full py-2 px-2 items-center justify-between flex'>
        {/* icon  + text */}
        <div className='w-full items-center justify-center space-x-4 flex'>
            <div className='bg-[#DBEEF4] rounded-full py-2 px-2'>
                <span> {icon} </span>
            </div>
            <div className='w-full space-y-1'>
                <h1 className='font-bold'> {title} </h1>
                <p className='font-sm'> {desc} </p>
            </div>
        </div>
        {/* price + percentage */}
        <div className='w-full items-end justify-end flex flex-col'>
            <h1 className='font-bold'> ${price} </h1>
            <p className={`${upOrDown === "up" ? "text-green-400" : "text-red-400"}`}> {percent} </p>
        </div>
    </div>
  )
}

export default InvestItem