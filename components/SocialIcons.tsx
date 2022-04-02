import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { VFC } from 'react'
import styled from 'styled-components'
import { DarkTheme, DarkThemeNext } from './Theme'

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body  };
`


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index:3;
cursor: pointer;
&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const SocialIcons:VFC = (props) => {
    return (
        
            <Icons>
                <motion.div
                    initial={{transform:"scale(0)"}}
                    animate={{scale:[0,1,1.5,1]}}
                    transition={{type:'spring', duration:1, delay:1}}
                >
                <Link href="https://github.com/kamei1204" style={{color:'inherits'}}>
                <img src="https://img.icons8.com/nolan/64/github.png" className='w-[30px] h-[30px] ' />
                </Link>
                </motion.div>
                
                <motion.div
                    initial={{transform:"scale(0)"}}
                    animate={{scale:[0,1,1.5,1]}}
                    transition={{type:'spring', duration:1, delay:1.2}}
                >
                    <Link href="https://www.google.com/?hl=ja">
                    <img src="https://img.icons8.com/nolan/64/google-logo.png" className='w-[30px] h-[30px] '/>
                    </Link>
                    </motion.div>
                
                    <motion.div
                    initial={{transform:"scale(0)"}}
                    animate={{scale:[0,1,1.5,1]}}
                    transition={{type:'spring', duration:1, delay:1.4}}
                >
                    <Link href="https://twitter.com/kame_sunny">
                    <img src="https://img.icons8.com/nolan/64/twitter.png" className='w-[30px] h-[30px] '/>
                    </Link>
                    </motion.div>
                
                    <motion.div
                    initial={{transform:"scale(0)"}}
                    animate={{scale:[0,1,1.5,1]}}
                    transition={{type:'spring', duration:1, delay:1.6}}
                >
                    <Link href="https://www.youtube.com/">
                    <img src="https://img.icons8.com/nolan/64/youtube.png" className='w-[30px] h-[30px] '/>
                    </Link>
                    </motion.div>

                    <Line 
                        initial={
                            {
                                height:0
                            }
                        }
                        animate={{
                            height: '8rem'
                        }}
                        transition={{
                            type:'spring', duration:1, delay:0.8
                        }}
                    />

                </Icons>   
    )
}
        
export default SocialIcons
            
            



        

            
        
            
        
            

            