import LogoComponent from 'components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import { motion, } from "framer-motion";
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import SocialIcons from './SocialIcons';
import Intro from './Intro';
import SoundBar from './SoundBar';

const ABOUT = styled.div`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
font-weight: bold;
position: absolute;
bottom: 2rem;
left: 30%;
cursor: pointer;
z-index:1;
`

const WORK = styled.div`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: 3rem;
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
cursor: pointer;
z-index:1;
`
const Blog = styled.div`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
right: calc(0.2rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
cursor: pointer;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
&>:first-child{
    animation: ${rotate} infinite 2.5s linear;
}
&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='w-screen h-screen overflow-hidden relative font-sans font-medium bg-hero-pattern'>
            <DarkDiv click={click}/>
            <div>
                <Center click={click}>
                        <Image src='/center6.PNG'onClick={()=> handleClick()} width={200} height={200} alt="center.img" />
                        <span className='pt-4'>click here</span>
                </Center>

                
                <SoundBar />

                <LogoComponent theme={click ? 'dark' :'light'}/>
                <SocialIcons theme={click ? 'dark' :'light'}/>
                

                <Link href="natunoasanicatchball1204@gmail.com">
                    <motion.h2 
                        initial={{
                            y:-200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        className='absolute top-12 right-8 font-bold z-1 cursor-pointer'
                        >Say hi...
                    </motion.h2>
                </Link>
                <Blog>
                <Link href="/Blog">
                    <motion.h2
                    initial={{
                        y:200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                        Blog
                    </motion.h2>
                </Link>

                </Blog>
                <WORK click={click}>
                    <Link href="/work">
                        <motion.h2
                            initial={{
                                y:-200,
                                transition: { type:'spring', duration: 1.5, delay:1}
                            }}
                            animate={{
                                y:0,
                                transition: { type:'spring', duration: 1.5, delay:1}
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>Work
                        </motion.h2>
                    </Link>
                </WORK>
                <ABOUT click={click}>
                            <Link href="/AboutPage">
                                <motion.h2
                                    initial={{
                                        y:200,
                                        transition: { type:'spring', duration: 1.5, delay:1}
                                    }}
                                    animate={{
                                        y:0,
                                        transition: { type:'spring', duration: 1.5, delay:1}
                                    }}
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}>about
                                </motion.h2>
                            </Link>
                </ABOUT>
                        <div>
                            <Link href="https://buhi-buhi.vercel.app/">
                                <motion.h2
                                    initial={{
                                        y:200,
                                        transition: { type:'spring', duration: 1.5, delay:1}
                                    }}
                                    animate={{
                                        y:0,
                                        transition: { type:'spring', duration: 1.5, delay:1}
                                    }}
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    className='absolute bottom-8 right-[30%] font-bold z-1 cursor-pointer'>BuhiBuhi
                                </motion.h2>
                            </Link>
                        </div>
            </div>
                {click ? <Intro click={click} /> : null }
        </div>
    )
}

export default Main

                


                



                        
                        

                        


