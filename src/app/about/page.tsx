import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Homepage from "@/assets/homepage.png";
import ChakraUI from "@/assets/chakra.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="py-12 px-4 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center space-ylg:order-2 xl:order-2-4">
          <h1 className="text-4xl font-bold mb-2">About React UI Libraries</h1>
          <p className="text-md text-muted-foreground">
            A comprehensive directory of modern React UI component libraries and
            packages.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Our Mission</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="order-2 md:order-1 space-y-4">
              <p className="text-md leading-relaxed text-muted-foreground">
                <a
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  href="https://prismic.io/blog/react-component-libraries"
                >
                  React Component Libraries
                </a>{" "}
                inspired this project, because the article has over 300k views
                and counting. I was getting series of messages to either include
                new libraries or to show thoughtfulness for curating the
                article. <br />
                <br /> React UI Libraries serves as a centralized resource for
                developers and organizations seeking to enhance their React
                applications with high-quality UI components. We evaluate and
                catalog React UI libraries based on crucial metrics including
                documentation quality, community support, accessibility
                standards, and overall maintained status.
              </p>
            </div>

            <div className="rounded-lg order-1 md:order-2 overflow-hidden border border-gray-500">
              <Image
                src={Homepage}
                height={400}
                width={800}
                alt="Library Comparison Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Evaluation Criteria</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Performance Metrics",
                description:
                  "Bundle size analysis, render performance, and optimization capabilities",
                icon: "⚡",
              },
              {
                title: "Accessibility",
                description:
                  "WCAG compliance, keyboard navigation, and screen reader support",
                icon: "♿",
              },
              {
                title: "Documentation",
                description:
                  "API reference quality, examples, and implementation guides",
                icon: "📖",
              },
            ].map((feature) => (
              <Card key={feature.title} className="p-6 dark:bg-gray-800">
                <CardContent className="space-y-4 p-0">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Library Card Example */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Library Card Interface</h2>
          <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800">
            <div className="w-full h-58 relative">
              <Image
                src={ChakraUI}
                height={400}
                width={800}
                alt="UI Library Preview"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Chakra UI Library
                <Badge variant="secondary">Component Library</Badge>
              </CardTitle>
              <p className="text-muted-foreground">
                A comprehensive React UI library featuring customizable
                components with strong TypeScript support and accessibility
                features.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Badge variant="outline">⭐ 38.3k</Badge>
                <Badge variant="outline">MIT License</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Library Categories */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Library Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { category: "Component Libraries", count: "45+" },
              { category: "Design Systems", count: "30+" },
              { category: "Headless UI", count: "15+" },
              { category: "Animation Libraries", count: "20+" },
              { category: "Form Libraries", count: "25+" },
              { category: "Layout Systems", count: "10+" },
            ].map((item) => (
              <Card key={item.category} className="p-4 dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="font-semibold">{item.category}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.count} libraries
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Integration Example */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Integration Example</h2>
          <Card className="bg-gray-50 dark:bg-gray-800">
            <CardContent className="p-6">
              <pre className="text-sm overflow-x-auto">
                <code>
                  {`import { useState } from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function LibraryCard({ name, category, stars }) {
  return (
    <Card className="hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {name}
          <Badge variant="secondary">{category}</Badge>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}`}
                </code>
              </pre>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
