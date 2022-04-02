import PowerButton from 'components/PowerButton'
import SocialIcons from 'components/SocialIcons'
import React, { useEffect, useRef, VFC } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from 'components/Theme'
import LogoComponent from 'components/Logo'
import  { WorkData } from '../data/WorkData' 
import Cards from 'components/Cards'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BigTitle from 'components/BigTitle'

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:10%;
height: 40vh;
display: flex;

color:white;
`
const container = {

    hidden: {opacity:0},
    show: {
    opacity:1,

    transition:{
    staggerChildren: 0.5,
    duration: 0.5,
    }
}

}


const Work:VFC = () => {

    const ref = useRef();
    const unique = useRef(null);

    useEffect(() => {
        let element = ref.current

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`

            return (unique.current.style.transform =
                'rotate(' + -window.pageYOffset + 'deg)')
        }

        window.addEventListener('scroll', rotate)
        return () => {
        window.removeEventListener('scroll', rotate);
        }

    },[])

    return (
        <ThemeProvider theme={DarkTheme}>
            <div className='relative h-[400vh] flex items-center bg-pink-300'>
                <LogoComponent/>
                <SocialIcons />
                <Main ref={ref} initial='hidden' animate='show' variants={container}>
                    {
                        WorkData.map( data =>
                            <Cards key={data.id} data={data}/>
                            )
                    }
                </Main>
                <span className='block fixed right-4 bottom-4 w-[80px] h-[80px] z-10' ref={unique}>
                    <Image src='/center6.PNG' width={200} height={200} alt="center.img" /> 
                </span>
                <BigTitle text="WORK" top='10%' right="20%" />
            </div>
        </ThemeProvider>
    )
}

export default Work
