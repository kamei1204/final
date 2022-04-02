// ライトモードとダークモードを切り替えるボタンのコンポーネント
import React, { useState, useEffect, VFC } from 'react'
// useThemeフックでテーマ情報を受け取る
import { useTheme } from 'next-themes'
import { SunLight, HalfMoon, FlashOff, Flash } from 'iconoir-react'

export const ChangeThemeButton: VFC = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => setMounted(true), [])

    return (
        <>
        <button
            className=" text-xl font-medium hover:bg-green-200 rounded-full border-2 shadow-md"
            //aria-label 要素のラベルにする文字列を属性値として指定する属性です。
            aria-label="DarkModeToggle"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {mounted && <>{theme === 'dark' ? <Flash /> : <FlashOff />}</>}
        </button>
        </>
    )
}