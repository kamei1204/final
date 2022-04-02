import React, { VFC } from 'react'
import { ChangeThemeButton } from './ChangeThemeButton'

export const Header: VFC = () => {
    return (
        <header className="absolute top-8 ml-[48%]">
        <div className="">
            <span className="group inline-flex items-center text-xl font-medium hover:bg-green-200 rounded-full border-2 shadow-md">
            <ChangeThemeButton />
            </span>
        </div>
        </header>
    )
}
