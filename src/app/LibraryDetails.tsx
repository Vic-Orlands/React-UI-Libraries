"use client";

import React, { useState } from "react";
import {
  X,
  Star,
  Copy,
  Check,
  ArrowLeft,
  ExternalLink,
  CircleCheckBig,
} from "lucide-react";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LibraryProps } from "@/(data)/libraries";
import { features } from "@/(data)/overview";

type LibProps = {
  library: LibraryProps;
  onBack: () => void;
};

const LibraryDetails = ({ library, onBack }: LibProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [previewMode, setPreviewMode] = useState<string | null>(null);
  const [installMethod, setInstallMethod] = useState<"npm" | "yarn" | "pnpm">(
    "npm"
  );

  const currentLibrary = features[library.name];

  // function to copy the UI installation command
  const copyToClipboard = (text: string | undefined) => {
    if (!text) return;

    setIsCopied(true);
    navigator.clipboard.writeText(text);

    setTimeout(() => {
      setIsCopied(false);
    }, 1200);
  };

  // preview the UI component
  const PreviewComponent = ({ mode }: { mode: string }) => {
    const example = currentLibrary.examples.find((ex) => ex.name === mode);
    return (
      <div className="w-full min-h-screen transition-all duration-300">
        {/* {example?.component} */}
        <p>Coming soon...</p>
      </div>
    );
  };

  // case tabs selection of the UI components
  const TabContent = ({ value = "features" }) => {
    switch (value) {
      case "installation":
        return (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={installMethod === "npm" ? "default" : "outline"}
                size="sm"
                onClick={() => setInstallMethod("npm")}
              >
                npm
              </Button>
              <Button
                variant={installMethod === "yarn" ? "default" : "outline"}
                size="sm"
                onClick={() => setInstallMethod("yarn")}
              >
                yarn
              </Button>
              <Button
                variant={installMethod === "pnpm" ? "default" : "outline"}
                size="sm"
                onClick={() => setInstallMethod("pnpm")}
              >
                pnpm
              </Button>
            </div>
            <code className="bg-gray-100 flex justify-between items-center dark:bg-gray-800 p-3 rounded-lg">
              {currentLibrary.installation[installMethod]}
              {!isCopied ? (
                <Copy
                  size={18}
                  className="cursor-pointer"
                  onClick={() =>
                    copyToClipboard(currentLibrary.installation[installMethod])
                  }
                />
              ) : (
                <CircleCheckBig size={18} className="text-green-500" />
              )}
            </code>
          </div>
        );

      case "features":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features[library.name].features.map((feature) => (
                <Card
                  key={feature.name}
                  className="bg-gray-50 dark:bg-gray-800"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        {feature.available ? (
                          <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                            <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                        ) : (
                          <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                            <X className="h-4 w-4 text-red-600 dark:text-red-400" />
                          </div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">{feature.name}</h4>
                        {feature.description && (
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "metrics":
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Performance Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Components</span>
                      <span className="text-sm text-muted-foreground">
                        {features[library.name].components}%
                      </span>
                    </div>
                    <Progress value={features[library.name].components} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Customization</span>
                      <span className="text-sm text-muted-foreground">
                        {features[library.name].customization}%
                      </span>
                    </div>
                    <Progress value={features[library.name].customization} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Developer Experience</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Documentation</span>
                      <span className="text-sm text-muted-foreground">
                        {features[library.name].documentation}%
                      </span>
                    </div>
                    <Progress value={features[library.name].documentation} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Ecosystem</span>
                      <span className="text-sm text-muted-foreground">
                        {features[library.name].ecosystem}%
                      </span>
                    </div>
                    <Progress value={features[library.name].ecosystem} />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-medium mb-4">Additional Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold">
                      {features[library.name].bundleSize}
                    </div>
                    <p className="text-sm text-muted-foreground">Bundle Size</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold">{library.stars}</div>
                    <p className="text-sm text-muted-foreground">
                      GitHub Stars
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold">
                      {features[library.name].lastUpdate}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Last Updated
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      case "frameworks":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features[library.name].frameworks.map((framework) => (
                <Card key={framework} className="bg-gray-50 dark:bg-gray-800">
                  <CardContent className="flex items-center justify-between pt-6">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{framework}</span>
                    </div>
                    <Badge variant="outline">Supported</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gray-50 dark:bg-gray-800 border-dashed">
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground">
                  <p>
                    This library provides official support for the frameworks
                    listed above. For other frameworks, community support may be
                    available.
                  </p>
                  <p className="mt-2">
                    Check the official documentation for detailed integration
                    guides.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container min-h-screen mx-auto px-5 xl:px-20 py-8 dark:bg-gray-900">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6"
        id="library-details"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Libraries
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-4">
                    <CardTitle className="text-3xl">{library.name}</CardTitle>
                    <Badge variant="outline" className="text-sm">
                      Last updated: {features[library.name].lastUpdate}
                    </Badge>
                  </div>
                  <CardDescription className="mt-2">
                    {library.description}
                  </CardDescription>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant="secondary" className="text-lg">
                    <Star className="h-4 w-4 mr-1" />
                    {library.stars}
                  </Badge>
                  <Badge variant="outline">
                    {features[library.name].bundleSize}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="installation" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="installation">Installation</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="metrics">Metrics</TabsTrigger>
                  <TabsTrigger value="frameworks">
                    Framework Support
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="installation">
                  <TabContent value="installation" />
                </TabsContent>

                <TabsContent value="features">
                  <TabContent value="features" />
                </TabsContent>

                <TabsContent value="metrics">
                  <TabContent value="metrics" />
                </TabsContent>

                <TabsContent value="frameworks">
                  <TabContent value="frameworks" />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Preview section */}
          {previewMode && (
            <Card>
              <CardHeader>
                <CardTitle>Preview: {previewMode}</CardTitle>
                <CardDescription>
                  {
                    features[library.name].examples.find(
                      (ex) => ex.name === previewMode
                    )?.description
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <PreviewComponent mode={previewMode} />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-1 space-y-6">
          {/* Right sidebar cards... */}
          <Card>
            <CardHeader>
              <CardTitle>Learning Resources</CardTitle>
              <CardDescription>Official and community guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {features[library.name].learning.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      {resource.title}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preview Modes</CardTitle>
              <CardDescription>
                Explore different themes and variations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Coming soon...</p>

                {/* {features[library.name].examples.map((example) => (
                  <Button
                    key={example.name}
                    variant={
                      previewMode === example.name ? "default" : "outline"
                    }
                    className="w-full"
                    onClick={() => setPreviewMode(example.name)}
                  >
                    {example.name}
                  </Button>
                ))} */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetails;
