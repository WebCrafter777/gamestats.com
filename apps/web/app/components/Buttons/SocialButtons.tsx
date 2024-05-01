import { Icon } from "@/app/styles/Icon"
import { SocialIcons } from "@/public/svg/SocialIcons"

export const GoogleLogin = ({label}:{label:string}) => {
  return (
    <button className="w-full py-[15px] flex justify-center items-center gap-[15px] bg-white rounded-[10px]">
        <Icon
            svg={SocialIcons['google']}
        />
        <h2 className="text-[#0000008e] font-medium">
            {label}
        </h2>
    </button>
  )
}

export const SteamLogin = ({label}:{label:string}) => {
  return (
    <button className="w-full py-[15px] flex justify-center items-center gap-[15px] bg-[#84AD0B] rounded-[10px]">
        <Icon
            svg={SocialIcons['steam']}
        />
        <h2 className="text-[#FFF] font-medium">
            {label}
        </h2>
    </button>
  )
}
