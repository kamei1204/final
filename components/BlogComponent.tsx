import { useRouter } from 'next/router'
import React, { VFC } from 'react'
import styled from 'styled-components'

const Box = styled.div`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 20rem;
    padding: 1rem;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
    backdrop-filter: blur(2px);
    box-shadow:0 0 1rem 0 rgba(0,0,0,0.2);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    z-index:5;
    &:hover{
    color:black;
    background-color: #fff3b8;
    transition: all 0.3s ease;
}
`
const ImageFile = styled.div`
    background-image: ${props => `url(${props.img})`};
    width: 100%;
    height: 60%;
    background-size: cover;
    border: 1px, solid transparent;
    background-position: center;
`
const Title = styled.div`
    color: inherit;
    padding: 0.5rem, 0;
    padding-top: 1rem;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.text};

    ${Box}:hover &{
        border-bottom: 1px solid black;
    }
`


const BlogComponent:VFC = (props) => {
    const router = useRouter();

    const {name,tags,data,imgSrc,link} = props.blog
    return (
        <Box onClick={() => router.push(link)}>
            <ImageFile img={imgSrc}/>
            <Title>{name}</Title>
            <div className='p-2'>
                {
                    tags.map((tag,id) => {
                        return<span className='pr-2' key={id}>#{tag}</span>
                    })
                }
            </div>
            <span className='p-[2,0]'>
                {data}
            </span>
        </Box>
    )
}

export default BlogComponent