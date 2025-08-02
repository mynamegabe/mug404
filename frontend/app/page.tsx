import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Syncopate, Geist_Mono } from "next/font/google";
import {
  Book,
  BookIcon,
  Camera,
  CameraIcon,
  ClockIcon,
  GitGraph,
  Goal,
  LayoutDashboard,
  Medal,
  TrendingUp,
  User,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div
      className={`font-sans grid grid-rows-[0px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 ${geistMono.className}`}
    >
      <NavigationMenu className="flex justify-between w-full max-w-7xl">
        <NavigationMenuList>
          <Link href="/" className={`${syncopate.className} font-bold`}>
            MUG404
          </Link>
        </NavigationMenuList>

        <NavigationMenuList>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/dashboard"
                className="flex flex-row items-center gap-2"
              >
                <LayoutDashboard />
                Dashboard
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/writing"
                className="flex flex-row items-center gap-2"
              >
                <Book />
                Writing Coach
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/snap" className="flex flex-row items-center gap-2">
                <CameraIcon />
                Snap & Solve
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator orientation="vertical" />
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/profile" className="flex flex-row items-center gap-2">
                <User />
                Profile
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <main className="flex flex-col gap-[32px] row-start-2 w-full max-w-7xl items-center sm:items-start">
        <Card className="w-full bg-[linear-gradient(45deg,#f40752,#f9ab8f)]">
          <CardContent className="flex items-center justify-between gap-4 px-8 py-4">
            <div className="flex flex-col gap-2">
              <CardTitle
                className={`${syncopate.className} text-white font-bold`}
              >
                Welcome back, Gabriel!
              </CardTitle>
              <CardDescription className="text-white">
                Ready to enhance your learning today?
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <BookIcon /> Analyze Essay
              </Button>

              <Button variant="secondary" size="sm">
                <CameraIcon /> Snap & Solve
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* grid of 1x4 with 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-7xl">
          <Card className="w-full">
            <CardContent className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p
                  className={`${syncopate.className} text-xs font-semibold min-h-[32px]`}
                >
                  Essays Analyzed
                </p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <BookIcon
                height={40}
                width={40}
                className="bg-[#f40752] text-white p-2 rounded-sm"
              />
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p
                  className={`${syncopate.className} text-xs font-semibold min-h-[32px]`}
                >
                  Problems Solved
                </p>
                <p className="text-2xl font-bold">18</p>
              </div>
              <CameraIcon
                height={40}
                width={40}
                className="bg-[#F5255D] text-white p-2 rounded-sm"
              />
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p
                  className={`${syncopate.className} text-xs font-semibold min-h-[32px]`}
                >
                  Improvement Score
                </p>
                <p className="text-2xl font-bold">87%</p>
              </div>
              <TrendingUp
                height={40}
                width={40}
                className="bg-[#F76F79] text-white p-2 rounded-sm"
              />
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p
                  className={`${syncopate.className} text-xs font-semibold min-h-[32px]`}
                >
                  Achievements
                </p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Medal
                height={40}
                width={40}
                className="bg-[#f9ab8f] text-white p-2 rounded-sm"
              />
            </CardContent>
          </Card>
        </div>
        {/*  grid that spans 3 cols" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader className="border-b">
              <CardTitle className={`${syncopate.className} text-lg font-bold`}>
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-8 pl-5">
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <BookIcon
                      height={32}
                      width={32}
                      className="text-[#f40752] bg-[#f40752]/[.6] p-2 rounded-sm"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs">
                        Persuasive Essay Analysis
                      </p>
                      <p className="text-xs">English Literature</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-32">
                    <p className="text-xs text-emerald-500 ml-1">92%</p>
                    <p className="flex items-center text-xs text-gray-500">
                      <ClockIcon height={12} /> 2 hours ago
                    </p>
                  </div>
                </li>
                <li className="flex justify-between items-center ">
                  <div className="flex items-center gap-4">
                    <Camera
                      height={32}
                      width={32}
                      className="text-emerald-500 bg-emerald-500/[.4] p-2 rounded-sm"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs">
                        Algebra Word Problem
                      </p>
                      <p className="text-xs">Mathematics</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-32">
                    <p className="text-xs text-emerald-500 ml-1">88%</p>
                    <p className="flex items-center text-xs text-gray-500">
                      <ClockIcon height={12} /> 5 hours ago
                    </p>
                  </div>
                </li>
                <li className="flex justify-between items-center ">
                  <div className="flex items-center gap-4">
                    <BookIcon
                      height={32}
                      width={32}
                      className="text-[#f40752] bg-[#f40752]/[.6] p-2 rounded-sm"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs">
                        Research Paper Review
                      </p>
                      <p className="text-xs">History</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-32">
                    <p className="text-xs text-emerald-500 ml-1">95%</p>
                    <p className="flex items-center text-xs text-gray-500">
                      <ClockIcon height={12} /> 1 day ago
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View All Activities
              </Button>
            </CardFooter>
          </Card>

          {/* div that has 3 rows, first row spanning 2 rows */}
          <div className="col-span-1 md:col-span-1 grid grid-rows-3 gap-4">
            <Card className="row-span-2">
              <CardHeader className="border-b">
                <CardTitle
                  className={`flex items-center gap-2 ${syncopate.className} text-sm font-bold`}
                >
                  <Goal height={24} /> Weekly Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-4">
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold">Essays Analyzed</p>
                      <span className="text-xs text-gray-500">4/5</span>
                    </div>
                    <Progress value={80} />
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold">Problems Solved</p>
                      <span className="text-xs text-gray-500">6/8</span>
                    </div>
                    <Progress value={75} />
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold">Study Time</p>
                      <span className="text-xs text-gray-500">12/15 hours</span>
                    </div>
                    <Progress value={80} />
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[linear-gradient(45deg,#8de9d5,#32c4c0)] text-white">
              <CardHeader>
                <CardTitle
                  className={`flex items-center gap-2 ${syncopate.className} text-sm font-bold`}
                >
                  <Medal height={24} /> Latest Achievement
                </CardTitle>
                <CardDescription className="text-xs text-gray-700">
                  <p className="font-semibold mb-1">Writing Master</p>
                  <p className="text-gray-600">
                    Completed 20 essay analyses with 90%+ scores
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
      </footer>
    </div>
  );
}
