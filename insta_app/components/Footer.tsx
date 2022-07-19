import React from 'react'
import { footerList1,footerList2,footerList3 } from '../utils/constants'


const List =({items,mt}: { items :string[],mt:boolean}) => (
    <div className = {`flex flex-rap gap-2 ${mt && 'mt-5'}`}>
        {items.map((items) => (
            <p key={items} className="text-gray-400 text-sm hover:underline cursor-pointer">
                {items}
            </p>
        ))}
    </div>

)

export const Footer = () => {
  return (
    <div className='mt-6 hidden xl:block flex flex-wrap'>
        <List items={footerList1} mt={false}/>
        <List items={footerList2} mt/>
        <List items={footerList3} mt />
        <p className='text-gray-400 text-sm mt-5'>@mediatex</p>
        
    </div>
  )
}
