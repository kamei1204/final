import React, { useRef, useState, VFC } from 'react'
import styled, { keyframes } from 'styled-components'

const Box = styled.div`
display:flex;
cursor:pointer;
position: fixed;
left:3rem;
top:8rem;
z-index:10;
&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`

const Line = styled.span`
    background: #0084ff;
    border: 1px solid transparent;
    animation:${play} 1s ease infinite;
    animation-play-state: ${props => props.click ? "running" : "paused"};
    height: 1rem;
    width: 2px;
    margin:0 0.1rem
`


const SoundBar:VFC = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
    setClick(!click);

    if(!click){
        ref.current.play();
    }else{
        ref.current.pause();
    }
    }
    return (
    <Box onClick={() => handleClick()}>
        <Line click={click}/>
        <Line click={click}/>
        <Line click={click}/>
        <Line click={click}/>
        <Line click={click}/>


        <audio src="music.mp3" ref={ref}  loop />
    </Box>
)
}

export default SoundBar