import {create} from 'zustand'

interface Props{
    isDarkMode?:boolean,
    setIsDarkMode:(isDarkMode:boolean)=>void
}

export const useDarkMode = create<Props>((set)=>({
    isDarkMode:undefined,
    setIsDarkMode:(isDarkMode) => set({
        isDarkMode:isDarkMode
    })
}))