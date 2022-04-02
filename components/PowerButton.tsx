import { useRouter } from 'next/router'
import React, { VFC } from 'react'

const PowerButton:VFC = () => {
    const router = useRouter()
    return (
        <button onClick={() => router.push('/')} className='fixed top-12 left-[50%] translate-x-[-50%] w-12 h-12 flex items-center justify-center cursor-pointer'>
            <img src="https://img.icons8.com/nolan/64/dog-house.png"/>
        </button>
    )
}

export default PowerButton