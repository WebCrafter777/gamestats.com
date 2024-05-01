import {create} from 'zustand'

interface Props{
    isHovering:boolean,
    data:{
        left:null | number,
        top:null | number,
        activeId:null | string,
        width:null | number
    },
    onHover:()=>void,
    onCancelHover:()=>void,
    changeData:(id:string | null,left?:number | null, top?:number | null,width?:number | null)=>void
}

export const usePremiumSliderComponentTooltip = create<Props>((set)=>({
    isHovering:false,
    data:{
        left:null,
        top:null,
        activeId:null,
        width:null
    },
    onHover:()=>{
        set({isHovering:true})
    },
    onCancelHover:()=>{
        set({isHovering:false})
    },
    changeData:(id,left,top,width)=>{
        set({
            data:{
                left:left || null,
                top:top || null,
                activeId:id,
                width:width || null
            }
        })
    }
}))