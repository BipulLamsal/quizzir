import { ReactNode } from 'react'

function Button({children} : {children : ReactNode})  {
  return (
    <button className='bg-purple-800 text-white px-4 py-2 rounded flex gap-2 items-center'>
        {children}
    </button>
  )
}

export default Button