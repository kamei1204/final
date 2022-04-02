import PowerButton from 'components/PowerButton'
import SocialIcons from 'components/SocialIcons'
import React, { VFC } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from 'components/Theme'
import LogoComponent from 'components/Logo'
import ParticleComponent from 'components/ParticleComponent'
import BigTitle from 'components/BigTitle'

const float = keyframes`
    0% { transform: translateY(-10px)}
    50% { transform: translateY(15px) translateX(15px)}
    100% { transform: translateY(-10px)}
`

const SpaceMan = styled.div`
    position: absolute;
    top: 3%;
    right: 8%;
    width: 25vw;
    animation: ${float} 4s ease infinite;
    text-decoration: none;
`


const AboutPage:VFC = () => {
    return (
        <div className='bg-hero-pattern'>
            <div className='relative w-full h-screen ' >
                <LogoComponent/>
                <SocialIcons />
                <ParticleComponent />
            </div>


                <SpaceMan>
                    <img src='space.png' />
                    <a href="https://icons8.com/illustrations/author/ARh4OKrFtdfC"></a><a href="https://icons8.com/illustrations"></a>
                </SpaceMan>
                <div className='absolute p-8 top-[20%] left-[18%] w-[350px] h-[470px] lg:w-[550px] xl:w-[700px] border-solid border-white border-2 leading-6 text-white flex justify-center items-center z-30 filter backdrop-blur-sm'>
                    react-particles-jsはGIF画を見て分かる通り、Reactでも動く背景を実装できるんですがnpmの公式では現在は非推奨となっております。

                    ですが私は非推奨なのは確認済みで、もちろん分かっておりました。

                    それはローカルではエラーなくしっかり表示されていたので紹介致しました。
                    <br></br>
                    このreact-particles-jsで背景を実装しbuildして本番環境に実装してみた所
                    <br></br>

                    私の環境では表示される事はありませんでした。

                    非推奨なのでもしや、かと思ったんですがやはりそうでした
                </div>
                <BigTitle text="About" top="5%" left="10%"/>
        </div>
    )
}

export default AboutPage

