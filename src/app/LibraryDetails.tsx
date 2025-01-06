"use client";

import React, { useState } from "react";
import { X, Star, Check, ArrowLeft } from "lucide-react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LibraryProps } from "@/(data)/libraries";

type FeaturesType = {
  [key: string]: {
    components: number;
    customization: number;
    documentation: number;
    ecosystem: number;
    features: {
      name: string;
      available: boolean;
    }[];
    installation: string;
    examples: {
      name: string;
      component: React.JSX.Element;
    }[];
  };
};

type LibProps = {
  library: LibraryProps;
  onBack: () => void;
};

const LibraryDetails = ({ library, onBack }: LibProps) => {
  const [previewMode, setPreviewMode] = useState<string | null>(null);

  const features: FeaturesType = {
    "Material UI": {
      components: 95,
      customization: 90,
      documentation: 95,
      ecosystem: 90,
      features: [
        { name: "Theme Customization", available: true },
        { name: "Server Components", available: true },
        { name: "TypeScript Support", available: true },
        { name: "SSR Support", available: true },
        { name: "RTL Support", available: true },
      ],
      installation: "npm install @mui/material @emotion/react @emotion/styled",
      examples: [
        {
          name: "Default",
          component: (
            <div className="space-y-4 p-4">
              <h1 className="text-2xl font-normal">Material Design</h1>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Primary Button
              </button>
            </div>
          ),
        },
        {
          name: "Custom Theme",
          component: (
            <div className="space-y-4 p-4 bg-purple-50">
              <h1 className="text-2xl font-normal text-purple-900">
                Custom Theme
              </h1>
              <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Themed Button
              </button>
            </div>
          ),
        },
      ],
    },
    // Add other libraries here
  };

  const currentLibrary = features[library.name];

  const PreviewComponent = ({ mode }: { mode: string }) => {
    const example = currentLibrary.examples.find((ex) => ex.name === mode);
    return (
      <div className="w-full min-h-screen transition-all duration-300">
        {example?.component}
      </div>
    );
  };

  return (
    <div className="container mx-auto pb-5 xl:pb-16 py-8" id="library-details">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Libraries
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl">{library.name}</CardTitle>
                  <CardDescription className="mt-2">
                    {library.description}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="text-lg">
                  <Star className="h-4 w-4 mr-1" />
                  {library.stars}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Installation</h3>
                  <code className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg block">
                    {currentLibrary.installation}
                  </code>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {currentLibrary.features.map((feature) => (
                      <div key={feature.name} className="flex items-center">
                        {feature.available ? (
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                        ) : (
                          <X className="h-4 w-4 text-red-500 mr-2" />
                        )}
                        {feature.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Metrics</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Components</span>
                        <span>{currentLibrary.components}%</span>
                      </div>
                      <Progress value={currentLibrary.components} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Customization</span>
                        <span>{currentLibrary.customization}%</span>
                      </div>
                      <Progress value={currentLibrary.customization} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Documentation</span>
                        <span>{currentLibrary.documentation}%</span>
                      </div>
                      <Progress value={currentLibrary.documentation} />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Preview Modes</CardTitle>
              <CardDescription>See how your UI would look</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentLibrary.examples.map((example) => (
                  <Button
                    key={example.name}
                    variant={
                      previewMode === example.name ? "default" : "outline"
                    }
                    className="w-full"
                    onClick={() => {
                      setPreviewMode(example.name);
                    }}
                  >
                    {example.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {previewMode && (
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Preview: {previewMode}</CardTitle>
            </CardHeader>
            <CardContent>
              <PreviewComponent mode={previewMode} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default LibraryDetails;
