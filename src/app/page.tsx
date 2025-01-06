"use client";

import Link from "next/link";
import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LibraryDetails from "./LibraryDetails";
import { libraries, LibraryProps } from "@/(data)/libraries";
import Image from "next/image";

const Home = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [layout, setLayout] = useState<string>("grid");
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

              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <p className="text-sm text-gray-400">
                  Installing each library is as simple as running the following
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
            </header>

            <section className="flex justify-between items-center mb-8 pb-5 xl:px-16">
              <div>
                <Badge
                  variant="outline"
                  className="mr-2 text-sm cursor-pointer"
                  onClick={() => setCategory(null)}
                >
                  All
                </Badge>
                {[
                  ...new Set(libraries.map((category) => category.category)),
                ].map((uniqueCategory) => (
                  <Badge
                    key={uniqueCategory}
                    variant="outline"
                    className="mr-2 text-sm cursor-pointer"
                    onClick={() => setCategory(uniqueCategory)}
                  >
                    {uniqueCategory}
                  </Badge>
                ))}
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

            <section
              className={`grid ${
                layout === "grid"
                  ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-2"
              } gap-6 pb-5 xl:px-16`}
            >
              {libraryCart.map((lib) => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
