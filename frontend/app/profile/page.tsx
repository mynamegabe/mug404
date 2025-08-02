"use client";
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
  Calendar,
  Camera,
  CameraIcon,
  ChartColumn,
  CircleCheck,
  ClockIcon,
  GitGraph,
  Goal,
  LayoutDashboard,
  Lightbulb,
  Medal,
  MessageCircleWarningIcon,
  NotebookText,
  Settings,
  Target,
  TrendingUp,
  User,
  UserIcon,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const [results, setResults] = useState<Record<string, any>>({});
  const [score, setScore] = useState<number | null>(null);

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
              <Link
                href="/profile"
                className="flex flex-row items-center gap-2"
              >
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
            <div className="flex items-center gap-4">
              <UserIcon
                height={80}
                width={80}
                className="text-white bg-muted-foreground/[0.4] rounded-full p-4"
              />
              <div className="flex flex-col gap-2">
                <CardTitle
                  className={`${syncopate.className} text-white font-bold`}
                >
                  Gabriel Seet
                </CardTitle>
                <CardDescription className="text-white">
                  Ready to enhance your learning today?
                </CardDescription>
              </div>
            </div>
            <div className="flex flex-col items-end text-white">
              <p className="text-xs">Overall Progress</p>
              <p className="font-semibold text-md mb-2">Level 5</p>
              <Progress value={75} className="w-48 [&>div]:bg-white" />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="w-full gap-8">
          <TabsList>
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <ChartColumn /> Overview
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="flex items-center gap-2"
            >
              <Medal />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings />
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="flex flex-col gap-8">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
              <Card>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Book
                      height={40}
                      width={40}
                      className="text-blue-500 bg-blue-500/[0.2] p-2 rounded-md"
                    />
                    <p className="text-emerald-500 text-xs">+12%</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-2xl">24</p>
                    <p>Essays Analyzed</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Camera
                      height={40}
                      width={40}
                      className="text-blue-500 bg-blue-500/[0.2] p-2 rounded-md"
                    />
                    <p className="text-emerald-500 text-xs">+8%</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-2xl">18</p>
                    <p>Problems Solved</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Calendar
                      height={40}
                      width={40}
                      className="text-blue-500 bg-blue-500/[0.2] p-2 rounded-md"
                    />
                    <p className="text-emerald-500 text-xs">Current</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-2xl">7 days</p>
                    <p>Study streak</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Target
                      height={40}
                      width={40}
                      className="text-blue-500 bg-blue-500/[0.2] p-2 rounded-md"
                    />
                    <p className="text-emerald-500 text-xs">+5%</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-2xl">87%</p>
                    <p>Average Score</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="col-span-1 md:col-span-2">
              <CardHeader className="border-b">
                <CardTitle
                  className={`${syncopate.className} text-lg font-bold`}
                >
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
                        className="text-[#f40752] bg-[#f40752]/[.2] p-2 rounded-sm"
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
                        className="text-[#f40752] bg-[#f40752]/[.2] p-2 rounded-sm"
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
          </TabsContent>
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle className={`${syncopate.className}`}>
                  Your Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 grid-rows-2 gap-4">
                <Card className="bg-emerald-50">
                  <CardContent className="flex gap-4">
                    <Book height={32} width={32} />
                    <div className="flex flex-col gap-2">
                      <p className="text-md font-semibold">Writing Master</p>
                      <p className="text-muted-forefround text-xs">
                        Completed 20 essay analyses with 90%+ scores
                      </p>
                      <p className="flex items-center gap-2 text-xs text-emerald-600">
                        <Medal width={16} />
                        Earned 2 days ago
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-emerald-50">
                  <CardContent className="flex gap-4">
                    <Camera height={32} width={32} />
                    <div className="flex flex-col gap-2">
                      <p className="text-md font-semibold">Problem solver</p>
                      <p className="text-muted-forefround text-xs">
                        Solved 15 math problems correctly
                      </p>
                      <p className="flex items-center gap-2 text-xs text-emerald-600">
                        <Medal width={16} />
                        Earned 1 week ago
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-emerald-50">
                  <CardContent className="flex gap-4">
                    <Calendar height={32} width={32} />
                    <div className="flex flex-col gap-2">
                      <p className="text-md font-semibold">
                        Consistent Learner
                      </p>
                      <p className="text-muted-forefround text-xs">
                        Maintained a 7-day study streak
                      </p>
                      <p className="flex items-center gap-2 text-xs text-emerald-600">
                        <Medal width={16} />
                        Earned today
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="brightness-[0.95]">
                  <CardContent className="flex gap-4">
                    <Medal height={32} width={32} />
                    <div className="flex flex-col gap-2">
                      <p className="text-md font-semibold">Quiz Champion</p>
                      <p className="text-muted-forefround text-xs">
                        Completed 20 essay analyses with 90%+ scores
                      </p>
                      <span className="flex items-center justify-between">
                        <p className="text-xs">Progress</p>
                        <p className="text-xs font-semibold">60%</p>
                      </span>
                      <Progress value={60} />
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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
