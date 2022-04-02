import { useRouter } from 'next/router'
import { VFC } from 'react'


const LogoComponent:VFC = () => {
const router = useRouter()

    return (
        <div className='fixed left-6 top-8 z-30 cursor-pointer' onClick={() => router.push('/')}>
            <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-french-bulldog-dog-breeds-icongeek26-linear-colour-icongeek26.png"/>
        </div>
    )
}

export default LogoComponent


