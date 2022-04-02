import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { VFC } from 'react'
import styled from 'styled-components'



const Box = styled(motion.li)`
width: 18rem;
height: 45vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 6rem;
margin-left: 3rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;
&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};
}
`
// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 2
        }
    }
}

const Cards:VFC = (props) => {

    const { id, name, description, tags, demo, github} = props.data
    const router = useRouter()
    return (
        <Box key={id} variants={Item}>
            <h2 className='font-bold'>{name}</h2>
            <h2 className='text-sm'>{description}</h2>
            <div className='border-t-2 border-solid pt-2 flex flex-wrap'>
                {
                    tags.map((tag,id) => {
                        return<span className='mr-2 hover:text-white' key={id}>#{tag}</span>
                    })
                }
            </div>
            <footer className='flex justify-between items-center'>
                <div onClick={() => router.push(`${demo}`)} className=' py-6 px-16 border-2 rounded-full hover:shadow-lg hover:bg-yellow-100 cursor-pointer'>
                    <p className=' text-xl font-semibold text-pink-400'>visit</p>
                </div>
                <div onClick={() => router.push(`${github}`)} className=''>
                    <img src="https://img.icons8.com/nolan/64/github.png" className='w-[40px] h-[40px] ' />
                </div>

            </footer>
        </Box>
    )
}

export default Cards