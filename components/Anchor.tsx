import React, { useEffect, useRef, VFC } from 'react'

const Anchor:VFC = (props) => {

    const ref = useRef(null);
    const hiddenRef = useRef(null);

    useEffect(() => {
        
        const handleScroll = () => {

            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;
            
            let diff = Math.max(bodyHeight - (scrollPosition + windowSize) )
            //diff*100/scrollposition
            let diffP = (diff * 100) / (bodyHeight - windowSize);

            ref.current.style.transform = `translateY(${-diffP}%)`

        }

        window.addEventListener('scroll', handleScroll)

        return () =>  window.removeEventListener('scroll', handleScroll)


    }, [])
    return (
        <div className='relative'>
            <div className='absolute top-0 right-8' ref={hiddenRef}>
                <img src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-anchor-pirates-icongeek26-outline-colour-icongeek26.png" className='w-[70px] h-[70px] hidden'/>
            </div>
            <div className='fixed top-0 right-8 flex flex-col items-center justify-center translate-y-[-100%]' ref={ref}>
                {
                    [...Array(25)].map((id) =>{
                        return <img src="https://img.icons8.com/external-bearicons-blue-bearicons/64/000000/external-link-graphic-design-bearicons-blue-bearicons.png" key={id} className='h-[25px] w-[25px] rotate-90'/>
                    })
                }
                <img src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-anchor-pirates-icongeek26-outline-colour-icongeek26.png" className='w-[70px] h-[70px]'/>
            </div>
        </div>
    )
}

export default Anchor 