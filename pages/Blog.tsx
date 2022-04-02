import Anchor from 'components/Anchor'
import BigTitle from 'components/BigTitle'
import BlogComponent from 'components/BlogComponent'
import LogoComponent from 'components/Logo'
import PowerButton from 'components/PowerButton'
import SocialIcons from 'components/SocialIcons'
import SoundBar from 'components/SoundBar'
import React, { VFC } from 'react'
import {Blogs} from '../data/Blogs'


const Blog:VFC = () => {
    
    return (
        <div className='bg-hero-pattern'>
            <div className='w-full h-auto relative pb-20'>
                <LogoComponent/>
                <SocialIcons />
                <Anchor />
            <div className='flex justify-center items-center pt-40'>
                <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2 xl:grid-cols-3'  >
                    {
                        Blogs.map(blog => {
                            return <BlogComponent key={blog.id} blog={blog}/>
                        })
                    }
                </div>    
            </div>   
            </div>
            <BigTitle text="Blog" top="0" right="10%"/>
        </div>
    )
}

export default Blog