import {create} from 'zustand'

interface Props{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
    serverIp:string
}

export const useServerVerificationModal = create<Props>((set)=>({
    isOpen:false,
    serverIp:'',
    onOpen:() => set({
        isOpen:true
    }),
    onClose:() => set({
        isOpen:false
    }),
}))