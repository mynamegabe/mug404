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
  Play,
  TrendingUp,
  Trophy,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  const [question, setQuestion] = useState<Record<string, any>>({});
  const [image, setImage] = useState<File | null>(null);

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
              <Link href="/snap" className="flex flex-row items-center gap-2">
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
          <Camera
            height={64}
            width={64}
            className="text-white bg-gradient-to-r from-[#f40752] to-[#f9ab8f] p-3 rounded-md"
          />
          <h1
            className={`${syncopate.className} text-1xl sm:text-2xl font-bold`}
          >
            Snap & Solve
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Upload a photo of any question and get instant solutions with
            interactive quizzes
          </p>
        </div>

        <div className="flex justify-center gap-4 w-full">
          <Card className="w-1/2 h-fit">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Upload Question Image
              </CardTitle>
              <CardDescription>
                Upload a photo of your question for instant solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4">
                {image ? (
                  <div className="flex flex-col items-center">
                    <Image
                      src={URL.createObjectURL(image)}
                      alt="Uploaded Question"
                      width={300}
                      height={200}
                      className="rounded-md mb-4"
                    />
                    <Button variant="secondary" onClick={() => setImage(null)}>
                      Remove Image
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 border-dotted border-2 border-gray-300 p-4 rounded-md relative">
                    <Input
                      type="file"
                      id="image"
                      className="w-full h-full opacity-0 absolute top-0 left-0"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setImage(file);
                          setQuestion({
                            question: "Solve for x: 2x + 5 = 13",
                            answer: "x = 4",
                            steps: [
                              "Subtract 5 from both sides: 2x = 8",
                              "Divide both sides by 2: x = 4",
                            ],
                            quiz: [
                              {
                                question: "What is the value of x?",
                                options: ["3", "4", "5", "6"],
                              },
                            ],
                          });
                        }
                      }}
                    />
                    <CameraIcon
                      width={32}
                      height={32}
                      className="text-gray-500 mx-auto"
                    />
                    <p className="text-sm text-center text-semibold">
                      Upload an image
                    </p>
                    <p className="text-xs text-center text-muted-foreground">
                      Take a photo or upload an image of your question
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
          {image ? (
            <div className="flex flex-col gap-4 w-1/2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Solution Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-4 h-full">
                  <Card className="w-full">
                    <CardContent className="text-xs">
                      <p className="font-semibold">Question:</p>
                      <br />
                      {question.question
                        ? question.question
                        : "Solve for x: 2x + 5 = 13"}
                    </CardContent>
                  </Card>
                  <p className="text-sm text-muted-foreground w-full">
                    {question.answer
                      ? question.answer
                      : "This is a linear equation that can be solved by isolating the variable x. We need to perform inverse operations to both sides of the equation."}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    <h2 className="text-lg font-semibold">
                      Step-by-Step Solution
                    </h2>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center gap-4 h-full">
                  {question.steps ? (
                    question.steps.map((step, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <p className="flex items-center justify-center text-sm font-semibold h-6 w-6 bg-gray-200 p-1 rounded">
                          {index + 1}
                        </p>
                        <p className="text-sm text-muted-foreground">{step}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No steps available. Please upload an image of your
                      question.
                    </p>
                  )}
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-[#f40752]/[0.15] to-[#f9ab8f]/[0.15] text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold text-violet-950">
                    <Trophy className="text-violet-800" />
                    Test Your Understanding
                  </CardTitle>
                  <CardDescription className="text-violet-800">
                    Ready to test what you've learned? Take our interactive quiz
                    based on this problem!
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  {question.quiz ? (
                    // question.quiz.map((quiz, index) => (
                    //   <div key={index} className="flex flex-col gap-2">
                    //     <p className="text-sm font-semibold">{quiz.question}</p>
                    //     {quiz.options.map((option, optIndex) => (
                    //       <Button
                    //         key={optIndex}
                    //         variant="outline"
                    //         className="w-full"
                    //       >
                    //         {option}
                    //       </Button>
                    //     ))}
                    //   </div>
                    // ))
                    <Button
                      className="bg-gradient-to-r from-[#f40752] to-[#f9ab8f] text-white w-fit"
                      onClick={() => alert("Quiz functionality coming soon!")}
                    >
                      <Play />
                      Start Quiz
                    </Button>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No quiz questions available.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 h-full">
                <NotebookText height={32} width={32} className="" />
                <h2 className="text-lg font-semibold">Ready to Solve</h2>
                <p className="text-sm text-muted-foreground text-center">
                  Upload an image of your question to get started with
                  AI-powered solutions.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
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
