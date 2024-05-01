import localFont from "next/font/local";

export const Roboto = localFont({
  src: [
    {
      path: "../../../public/fonts/roboto/Roboto-Black.ttf",
      weight: "800",
    },
    {
      path: "../../../public/fonts/roboto/Roboto-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../../public/fonts/roboto/Roboto-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/roboto/Roboto-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/roboto/Roboto-Light.ttf",
      weight: "300",
    },
  ],
  variable: "--font-roboto",
});

export const Inter = localFont({
  src: [
    {
      path: "../../../public/fonts/inter/Inter-Black.ttf",
      weight: "800",
    },
    {
      path: "../../../public/fonts/inter/Inter-Bold.ttf",
      weight: "700",
    }, 
    {
      path: "../../../public/fonts/inter/Inter-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../../public/fonts/inter/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/inter/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/inter/Inter-Light.ttf",
      weight: "300",
    },
  ],
  variable: "--font-inter",
});
