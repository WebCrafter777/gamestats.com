import Image from "next/image";
import { useEffect, useState } from "react";

export const LazyLoadedImage = ({ src, alt }:any) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setIsIntersecting(true)
                    observer.unobserve(entry.target)
                }
            },
            {rootMargin:'0px 0px 100px 0px'}
        )
        const image = document.getElementById(alt)
        if(image){
            observer.observe(image)
            return () => observer.disconnect()
        }
    },[alt])
  
    return (
      <div id={alt} className="flex justify-center items-center h-[25px] w-[35px] relative">
        {isIntersecting && (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        )}
      </div>
    );
  };
  