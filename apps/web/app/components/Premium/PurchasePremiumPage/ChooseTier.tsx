import { useState } from "react";
import { Icon } from "@/app/styles/Icon";
import { ArrowIcons } from "@/public/svg/ArrowIcons";
import { PremiumIcons } from "@/public/svg/PremiumIcons";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { PrimaryButton } from "../../Buttons/PrimaryButton";

const tiers = [
  {
    name: "Premium",
    price: "5 USD",
    duration: "(1 month)",
    svg: PremiumIcons["premium_pearl"],
    image:'/images/screenshots/homeBanner.webp',
    title:`Premium server boost`,
    description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
    turpis nec elit lacinia condimentum et vel dolor. Quisque scelerisque
    ligula a lorem pulvinar pulvinar. Donec odio diam, vulputate non
    commodo a, suscipit non justo. Praesent commodo velit leo, et
    consequat diam venenatis ultrices. Praesent non purus vel purus semper
    ullamcorper. Sed finibus odio arcu, quis facilisis purus consectetur
    non. In at elit sed risus vehicula fermentum quis nec est. Fusce
    imperdiet mauris ullamcorper ante commodo, quis efficitur urna
    dapibus. Sed ac ullamcorper felis. Mauris volutpat at ligula ut
    lacinia. Vivamus sed metus massa. Donec purus mauris, iaculis non orci
    nec, condimentum fringilla mi. Etiam vitae quam porta, consequat dui
    et, convallis ante. Mauris ultrices, erat nec aliquam dapibus, urna
    dolor facilisis ante, vel auctor libero massa nec eros. Phasellus
    sapien ex, tincidunt vitae ornare et, faucibus non ex. Suspendisse
    odio magna, pulvinar at erat vel, imperdiet porttitor risus. Nunc
    malesuada purus a tortor molestie accumsan. Pellentesque sit amet orci
    dictum ipsum hendrerit tristique. Mauris tellus velit, maximus vitae
    diam et, molestie consectetur lectus. Sed enim enim, rhoncus et
    tristique a, mattis ut neque. Pellentesque pellentesque ac massa
    aliquam tempus. Integer magna lectus, porttitor nec massa vitae,
    consequat finibus purus. Donec sit amet nisi in velit vulputate
    sagittis. Sed ac nunc sed leo ultricies tincidunt tempus ac lorem.
    Curabitur scelerisque nulla sed nisl elementum, nec imperdiet nisl
    eleifend.`
  },
  {
    name: "Vip+",
    price: "3 USD",
    duration: "(1 month)",
    svg: PremiumIcons['vip+'],
    image:'/images/screenshots/premiumSlider.webp',
    title:`Vip server boost`,
    description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
    turpis nec elit lacinia condimentum et vel dolor. Quisque scelerisque
    ligula a lorem pulvinar pulvinar. Donec odio diam, vulputate non
    commodo a, suscipit non justo. Praesent commodo velit leo, et
    consequat diam venenatis ultrices. Praesent non purus vel purus semper
    ullamcorper. Sed finibus odio arcu, quis facilisis purus consectetur
    non. In at elit sed risus vehicula fermentum quis nec est. Fusce
    imperdiet mauris ullamcorper ante commodo, quis efficitur urna
    dapibus. Sed ac ullamcorper felis. Mauris volutpat at ligula ut
    lacinia. Vivamus sed metus massa. Donec purus mauris, iaculis non orci
    nec, condimentum fringilla mi. Etiam vitae quam porta, consequat dui
    et, convallis ante. Mauris ultrices, erat nec aliquam dapibus, urna
    dolor facilisis ante, vel auctor libero massa nec eros. Phasellus
    sapien ex, tincidunt vitae ornare et, faucibus non ex. Suspendisse
    odio magna, pulvinar at erat vel, imperdiet porttitor risus. Nunc
    malesuada purus a tortor molestie accumsan. Pellentesque sit amet orci
    dictum ipsum hendrerit tristique. Mauris tellus velit, maximus vitae
    diam et, molestie consectetur lectus. Sed enim enim, rhoncus et
    tristique a, mattis ut neque. Pellentesque pellentesque ac massa
    aliquam tempus. Integer magna lectus, porttitor nec massa vitae,
    consequat finibus purus. Donec sit amet nisi in velit vulputate
    sagittis. Sed ac nunc sed leo ultricies tincidunt tempus ac lorem.
    Curabitur scelerisque nulla sed nisl elementum, nec imperdiet nisl
    eleifend.`
  },
  {
    name: "Vip",
    price: "1 USD",
    duration: "(1 month)",
    svg: PremiumIcons["premium_pearl"],
    image:'/images/screenshots/vip.webp',
    title:`Vip server boost`,
    description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
    turpis nec elit lacinia condimentum et vel dolor. Quisque scelerisque
    ligula a lorem pulvinar pulvinar. Donec odio diam, vulputate non
    commodo a, suscipit non justo. Praesent commodo velit leo, et
    consequat diam venenatis ultrices. Praesent non purus vel purus semper
    ullamcorper. Sed finibus odio arcu, quis facilisis purus consectetur
    non. In at elit sed risus vehicula fermentum quis nec est. Fusce
    imperdiet mauris ullamcorper ante commodo, quis efficitur urna
    dapibus. Sed ac ullamcorper felis. Mauris volutpat at ligula ut
    lacinia. Vivamus sed metus massa. Donec purus mauris, iaculis non orci
    nec, condimentum fringilla mi. Etiam vitae quam porta, consequat dui
    et, convallis ante. Mauris ultrices, erat nec aliquam dapibus, urna
    dolor facilisis ante, vel auctor libero massa nec eros. Phasellus
    sapien ex, tincidunt vitae ornare et, faucibus non ex. Suspendisse
    odio magna, pulvinar at erat vel, imperdiet porttitor risus. Nunc
    malesuada purus a tortor molestie accumsan. Pellentesque sit amet orci
    dictum ipsum hendrerit tristique. Mauris tellus velit, maximus vitae
    diam et, molestie consectetur lectus. Sed enim enim, rhoncus et
    tristique a, mattis ut neque. Pellentesque pellentesque ac massa
    aliquam tempus. Integer magna lectus, porttitor nec massa vitae,
    consequat finibus purus. Donec sit amet nisi in velit vulputate
    sagittis. Sed ac nunc sed leo ultricies tincidunt tempus ac lorem.
    Curabitur scelerisque nulla sed nisl elementum, nec imperdiet nisl
    eleifend.`
  },
];

export const ChooseTier = ({
  values: { tier },
  onChange,
  handleNextPage,
}: {
  values: { tier: string | null };
  onChange: (comp: string, val: string | null) => void;
  handleNextPage: () => void;
}) => {
  const [expandedTier, setExpandedTier] = useState<number | null>(null);

  const toggleTier = (index: number) => {
    setExpandedTier(expandedTier === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-[10px] w-full mt-[50px] mb-[100px]">
      {tiers.map((tier, index) => (
        <div className="relative" key={index}>
          <div
            key={index}
            className={`flex items-center justify-between w-full p-[10px] border-yellow_loud border-[1px] rounded-[5px]
             md:hover:bg-light_primary transition-colors duration-150 group cursor-pointer select-none  relative
             ${
               expandedTier === index
                 ? "bg-light_primary !text-black !rounded-b-none"
                 : ""
             }`}
            onClick={() => toggleTier(index)}
          >
            <div className="flex gap-[5px] items-center">
              <Icon svg={tier.svg} className="w-[25px] h-[25px]" />
              <h2 className="font-medium text-[16px] group-hover:text-black">
                {tier.name}
              </h2>
            </div>
            <div className="flex gap-[5px] font-medium items-center">
              <p className="text-text_gray">{tier.price}</p>
              <p className="text-text_gray">{tier.duration}</p>
              <Icon
                svg={ArrowIcons["arrow_bottom_black"]}
                className={`w-[14px] h-[12px] grayIcon transition-all duration-150 ${index === expandedTier && "rotate-180"}`}
              />
            </div>
          </div>

          <AnimatePresence>
            {expandedTier === index && (
              <motion.div
                initial={{opacity: "0%" }}
                exit={{ opacity: "0%" }}
                animate={{ opacity: "100%" }}
                transition={{ duration: 0.3 }}
                className="text-white border-yellow_loud border-[1px] p-[10px] relative"
              >
                <div className="flex flex-col">
                  <div className={`w-full relative ${tier.name === 'Premium' ? 'md:h-[350px]  h-[30vw]' : 'h-[50px]'}`}>
                    <Image
                      src={tier.image}
                      alt={tier.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <h1 className="text-[22px] font-medium mt-[20px]">
                    {tier.title}
                  </h1>
                  <p className="text-[14px] text-text_gray mt-[5px]">
                    {tier.description}
                  </p>
                  <PrimaryButton className="mt-[10px] w-fit text-[12px] ml-auto px-[22px]" variant='third' onClick={()=>{
                    onChange('tier',tier.name)
                    handleNextPage()
                    }}>
                    Choose
                  </PrimaryButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
