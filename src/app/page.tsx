"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Grid,
  List,
  Copy,
  ExternalLink,
  ChevronRight,
  CircleCheckBig,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { libraries, LibraryProps } from "@/(data)/libraries";
import PaginationComponent from "@/components/buttomPag";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LibraryDetails from "./LibraryDetails";
import Image from "next/image";
import clsx from "clsx";

const Home = () => {
  const itemsPerPage: number = 9;

  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [layout, setLayout] = useState<string>("grid");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [category, setCategory] = useState<string | null>(null);
  const [selectedLibrary, setSelectedLibrary] = useState<LibraryProps | null>(
    null
  );

  const libraryCart = category
    ? libraries.filter((lib) => lib.category === category)
    : libraries;

  const copyToClipboard = (text: string) => {
    setIsCopied(true);
    navigator.clipboard.writeText(text);

    setTimeout(() => {
      setIsCopied(false);
    }, 1200);
  };

  const scrollIntoView = ({ behavior }: { behavior: ScrollBehavior }) => {
    const element = document.getElementById("library-details");
    if (element) {
      element.scrollIntoView({ behavior });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }
  }, []);

  // useEffect(() => {
  //   const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   document.documentElement.classList.toggle("dark", isDark);
  // }, []);

  return (
    <div className="min-h-screen">
      {selectedLibrary ? (
        <LibraryDetails
          library={selectedLibrary}
          onBack={() => setSelectedLibrary(null)}
        />
      ) : (
        <div className="min-h-screen pb-5 xl:pb-12 bg-gray-50 dark:bg-gray-900 dark:text-white">
          <div className="container mx-auto px-4 py-8">
            <header className="max-w-4xl mx-auto px-4 py-12 text-center">
              <h1 className="text-5xl font-bold mb-8 leading-tight">
                React UI Libraries for
                <br />
                your Project
              </h1>

              <p className="text-lg text-gray-500 mb-4 max-w-2xl mx-auto">
                Discover and compare the best UI libraries for your React
                project. Easily and efficiently build your project with the best
                UI component libraries in React ecosystem.
              </p>

              {isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                  <p className="text-sm text-gray-400">
                    Installing each library is as simple as running the
                    following
                  </p>
                  <div className="bg-gray-900 rounded-lg py-2 px-4 flex items-center gap-2 border border-gray-700">
                    <code className="font-mono text-gray-300 flex items-center">
                      npx shadcn@latest init
                    </code>
                    <button
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={() => copyToClipboard("npx shadcn@latest init")}
                    >
                      {!isCopied ? (
                        <Copy size={18} />
                      ) : (
                        <CircleCheckBig size={18} />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </header>

            <section className="flex justify-between items-center mb-2 pb-5 xl:px-16">
              <div>
                <Badge
                  variant="outline"
                  className={clsx(
                    "mr-2 text-sm cursor-pointer",
                    category === null
                      ? "bg-primary dark:bg-gray-800 dark:border-gray-800 text-white"
                      : "bg-inherit"
                  )}
                  onClick={() => setCategory(null)}
                >
                  All
                </Badge>
                {[...new Set(libraries.map((lib) => lib.category))].map(
                  (uniqueCategory) => (
                    <Badge
                      key={uniqueCategory}
                      variant="outline"
                      onClick={() => setCategory(uniqueCategory)}
                      className={clsx(
                        "mr-2 text-sm cursor-pointer",
                        category === uniqueCategory
                          ? "bg-primary dark:bg-gray-800 dark:border-gray-800 text-white"
                          : "bg-inherit"
                      )}
                    >
                      {uniqueCategory}
                    </Badge>
                  )
                )}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setLayout("grid")}
                  className={
                    layout === "grid"
                      ? "bg-primary dark:bg-gray-800 dark:border-gray-800 text-white"
                      : "bg-inherit"
                  }
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setLayout("list")}
                  className={
                    layout === "list"
                      ? "bg-primary dark:bg-gray-800 dark:border-gray-800 text-white"
                      : "bg-inherit"
                  }
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </section>

            {isLoading ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-5 xl:px-16">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="h-56 w-full bg-gray-300 dark:bg-gray-700 rounded-t-lg border-b border-b-gray-800"></div>
                    <div className="p-4 bg-gray-700">
                      <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded mb-2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <section
                  className={`grid ${
                    layout === "grid"
                      ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
                      : "grid-cols-2"
                  } gap-6 pb-5 xl:px-16`}
                >
                  {libraryCart
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage
                    )
                    .map((lib) => (
                      <div key={lib.name}>
                        <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-0">
                          <div className="w-full h-58">
                            <Image
                              src={lib.img || "/placeholder.png"}
                              alt={`${lib.name} preview`}
                              width={300}
                              height={100}
                              className="w-full h-full object-cover rounded-t-lg"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                              {lib.name}
                              <Badge variant="secondary">{lib.category}</Badge>
                            </CardTitle>
                            <CardDescription>{lib.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex gap-4">
                              <Badge variant="outline">⭐ {lib.stars}</Badge>
                              <Badge variant="outline">{lib.license}</Badge>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setSelectedLibrary(lib);
                                scrollIntoView({ behavior: "smooth" });
                              }}
                            >
                              Learn More
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Button variant="default" size="sm" asChild>
                              <Link href={lib.url} target="_blank" passHref>
                                See in Action
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    ))}
                </section>

                <PaginationComponent
                  currentPage={currentPage}
                  totalPages={Math.ceil(libraryCart.length / itemsPerPage)}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
