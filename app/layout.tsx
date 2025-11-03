import DotNavigation from "@/components/dot-navigation/DotNavigation";
import Footer from "@/components/Footer";
import { NavigationInViewProvider } from "@/context/NavigationInViewProvider";
import { Box, Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Joeffrey Pilar Portfolio",
  description:
    "A showcase of Joeffrey Pilar’s front-end web development projects, skills, and experience — featuring modern, responsive, and user-focused designs.",
  icons: {
    icon: "/my-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="">
        <Theme
          className="!bg-ebony-clay !text-white !font-inter"
          accentColor="gray"
        >
          <NavBar />
          <NavigationInViewProvider>
            <Box p="2">
              <Container>{children}</Container>
              <Box className="fixed top-52 lg:top-38 right-2 xl:right-20 z-50">
                <DotNavigation />
              </Box>
            </Box>
          </NavigationInViewProvider>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
