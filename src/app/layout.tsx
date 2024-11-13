import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,

  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
 
} from "~/components/ui/navigation-menu";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const MobileNav = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <nav className="mt-6 flex flex-col space-y-4 space-x-4">
          <Link href="/" className="text-lg font-medium">
            Home
          </Link>
          <Link href="/leaderboard" className="text-lg font-medium ">
            Leaderboard
          </Link>
          <Link href="/prizes" className="text-lg font-medium">
            Prizes
          </Link>
        </nav>
      </DialogContent>
    </Dialog>
  );
};

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
          <img
            className="h-12 w-12"
            src="/logo.svg"
            alt="Logo"
          />
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileNav />

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-4 md:flex ">
            <NavigationMenu>
              <NavigationMenuList>
           
                <NavigationMenuItem className="px-2">
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="px-2">
                  <Link href="/leaderboard" legacyBehavior passHref>
                    <NavigationMenuLink>Leaderboard</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="px-2">
                  <Link href="/prizes" legacyBehavior passHref>
                    <NavigationMenuLink>Prizes</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-2">
          <Link href="/host" className="hidden md:block">
              <Button variant="outline" size="sm">
                Sign Up
              </Button>
            </Link>


            <Link href="/host" className="hidden md:block">
              <Button variant="default" size="sm">
                Login
              </Button>
            </Link>


          </div>
        </div>
      </div>
    </header>
  );
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={cn("antialiased", GeistSans.variable)}>
      <body className="min-h-screen bg-background">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
