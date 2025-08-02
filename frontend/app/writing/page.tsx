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
  Camera,
  CameraIcon,
  CircleCheck,
  ClockIcon,
  GitGraph,
  Goal,
  LayoutDashboard,
  Lightbulb,
  Medal,
  MessageCircleWarningIcon,
  NotebookText,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <Book
            height={64}
            width={64}
            className="text-white bg-gradient-to-r from-[#f40752] to-[#f9ab8f] p-3 rounded-md"
          />
          <h1
            className={`${syncopate.className} text-1xl sm:text-2xl font-bold`}
          >
            Writing Coach
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Get detailed analysis and feedback on your Essays
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Card className="w-2/3 h-fit">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Essay Analysis
              </CardTitle>
              <CardDescription>
                Upload your essay and get detailed feedback on structure,
                grammar, and style.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* form with 2 select fields for education level and subject */}
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Education Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="elementary">
                        Elementary School
                      </SelectItem>
                      <SelectItem value="comiddlellege">
                        Middle School
                      </SelectItem>
                      <SelectItem value="high">High School</SelectItem>
                      <SelectItem value="college">College</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">
                        English Literature
                      </SelectItem>
                      <SelectItem value="math">Creative Writing</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="philosophy">Philosophy</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea
                  placeholder="Paste your essay here for analysis..."
                  className="h-64"
                />
                <p className="text-sm text-muted-foreground">0 characters</p>
                <Button
                  type="submit"
                  className="mt-4"
                  onClick={(e) => {
                    e.preventDefault();
                    setResults({
                      grammar: 92,
                      structure: 85,
                      style: 84,
                    });
                    setScore(85); // Example score
                  }}
                >
                  <NotebookText className="mr-2" />
                  Analyze Essay
                </Button>
              </form>
            </CardContent>
          </Card>
          {results && Object.keys(results).length > 0 ? (
            <div className="flex flex-col gap-4 w-1/3">
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 h-full">
                  <Medal height={32} width={32} className="" />
                  <h2 className="text-lg font-semibold">Overall Score</h2>
                  <p
                    className={
                      "text-2xl font-bold p-4 rounded-md text-white " +
                      (score > 50 ? "bg-emerald-500" : "bg-rose-500")
                    }
                  >
                    {score}
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    Excellent work! Your essay shows strong writing skills.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    <TrendingUp height={32} width={32} className="" />
                    <h2 className="text-lg font-semibold">Detailed Analysis</h2>
                  </CardTitle>
                  <CardDescription>
                    Detailed feedback on your essay.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center gap-4 h-full">
                  {Object.entries(results).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center gap-2"
                    >
                      <p
                        className={
                          "text-2xl font-bold p-4 rounded-md text-white " +
                          (value > 90
                            ? "bg-emerald-500"
                            : value > 80
                            ? "bg-yellow-500"
                            : "bg-rose-500")
                        }
                      >
                        {value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 h-full">
                <NotebookText height={32} width={32} className="" />
                <h2 className="text-lg font-semibold">Ready to Analyze</h2>
                <p className="text-sm text-muted-foreground text-center">
                  Select your level, subject, and paste your essay to get
                  started.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
        {results && Object.keys(results).length > 0 && (
          <div className="grid grid-cols-3 gap-4 w-full">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <CircleCheck
                    height={24}
                    width={24}
                    className="text-emerald-500"
                  />{" "}
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-xs text-muted-foreground">
                  <li>Strong thesis statement with clear argument</li>
                  <li>Excellent use of supporting evidence</li>
                  <li>Good paragraph transitions</li>
                  <li>Proper citation format</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <MessageCircleWarningIcon
                    height={24}
                    width={24}
                    className="text-orange-500"
                  />{" "}
                  Improvements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-xs text-muted-foreground">
                  <li>Consider varying sentence length for better flow</li>
                  <li>Strengthen the conclusion with a call to action</li>
                  <li>Add more specific examples in body paragraphs</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <Lightbulb height={24} width={24} className="text-blue-500" />{" "}
                  Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-xs text-muted-foreground">
                  <li>Try using more sophisticated vocabulary</li>
                  <li>Consider restructuring the second paragraph</li>
                  <li>Add counterarguments to strengthen your position</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
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
