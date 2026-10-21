import localFont from "next/font/local";

export const dmSans = localFont({
  src: [
    { path: "./fonts/DM-Sans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/DM-Sans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/DM-Sans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/DM-Sans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const manrope = localFont({
  src: [
    { path: "./fonts/Manrope-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Manrope-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Manrope-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Manrope-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Manrope-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-manrope",
  display: "swap",
});
