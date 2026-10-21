import type { Metadata } from "next";
import SiteShell from "@/components/ui/SiteShell";
import { dmSans, manrope } from "./fonts";
import "./globals.css";
import "./header.css";
import "./home.css";
import "./footer.css";
import "./responsive.css";

export const metadata: Metadata = {
  title: "DataLife e-Health | Clinical Portal",
  description: "A privacy-conscious consultation and audit console for the DataLife e-Health ecosystem.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${dmSans.variable} ${manrope.variable}`}>
    <SiteShell>{children}</SiteShell>
  </body></html>;
}
