import React from "react";

type FeaturesType = {
  [key: string]: {
    components: number;
    customization: number;
    documentation: number;
    ecosystem: number;
    bundleSize: string;
    lastUpdate: string;
    features: {
      name: string;
      available: boolean;
      description?: string;
    }[];
    installation: {
      npm: string;
      yarn?: string;
      pnpm?: string;
    };
    examples: {
      name: string;
      description: string;
      component: React.JSX.Element;
    }[];
    frameworks: string[];
    community: {
      github: string;
      discord?: string;
      stackoverflow?: string;
    };
    learning: {
      title: string;
      url: string;
      type: "official" | "community" | "video";
    }[];
  };
};

export const features: FeaturesType = {
  "Material UI": {
    components: 95,
    customization: 90,
    documentation: 95,
    ecosystem: 90,
    bundleSize: "768.4kB",
    lastUpdate: "2 days ago (2024-01-05)",
    features: [
      {
        name: "Typography System",
        available: true,
        description: "Consistent text styling with typography guidelines",
      },
      {
        name: "Theme Provider",
        available: true,
        description: "Supports dark and light modes with customizable themes",
      },
      {
        name: "Form Controls",
        available: true,
        description: "Pre-built form components with accessibility support",
      },
      {
        name: "Icon System",
        available: true,
        description: "Comprehensive icon collection via @mui/icons-material",
      },
      {
        name: "Theme Customization",
        available: true,
        description:
          "Comprehensive theming system with support for custom palettes and components",
      },
      {
        name: "Server Components",
        available: true,
        description: "Full support for React Server Components in Next.js 13+",
      },
    ],
    installation: {
      npm: "npm install @mui/material @emotion/react @emotion/styled",
      yarn: "yarn add @mui/material @emotion/react @emotion/styled",
      pnpm: "pnpm add @mui/material @emotion/react @emotion/styled",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard Material Design implementation",
      // //   component: (
      //     // <div className="space-y-4 p-4">
      //     //   <h1 className="text-2xl font-normal">Material Design</h1>
      //     //   <div className="flex gap-4">
      //     //     <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //     //       Primary
      //     //     </button>
      //     //     <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //     //       Secondary
      //     //     </button>
      //     //   </div>
      //     // </div>
      // //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix", "Vite"],
    community: {
      github: "92.9k",
      discord: "muicommunity",
      stackoverflow: "material-ui",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://mui.com/getting-started/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://mui.com/store/",
        type: "community",
      },
    ],
  },
  "Ant Design": {
    components: 85,
    customization: 85,
    documentation: 90,
    ecosystem: 85,
    bundleSize: "894.2kB",
    lastUpdate: "3 days ago",
    features: [
      {
        name: "Internationalization",
        available: true,
        description: "Built-in support for dozens of languages",
      },
      {
        name: "Data Visualization",
        available: true,
        description: "Charts and graphs via @ant-design/charts",
      },
      {
        name: "Enterprise Components",
        available: true,
        description: "Complex components for enterprise applications",
      },
      {
        name: "Theme Customization",
        available: true,
        description: "Supports light/dark themes and custom theming",
      },
      {
        name: "Design System",
        available: true,
        description: "Comprehensive design system with extensive components",
      },
    ],
    installation: {
      npm: "npm install antd",
      yarn: "yarn add antd",
      pnpm: "pnpm add antd",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard Ant Design implementation",
      // //   component: (
      // //     <div className="space-y-4 p-4">
      // //       <h1 className="text-2xl font-normal">Ant Design</h1>
      // //       <div className="flex gap-4">
      // //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      // //           Primary
      // //         </button>
      // //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      // //           Secondary
      // //         </button>
      // //       </div>
      // //     </div>
      // //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix", "Umi"],
    community: {
      github: "ant-design/ant-design",
      discord: "ant-design",
      stackoverflow: "ant-design",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://ant.design/docs/react/introduce",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://ant.design/docs/spec/template",
        type: "community",
      },
    ],
  },
  "Chakra UI": {
    components: 85,
    customization: 95,
    documentation: 90,
    ecosystem: 80,
    bundleSize: "642.3kB",
    lastUpdate: "5 days ago (2024-01-03)",
    features: [
      {
        name: "Style Props",
        available: true,
        description: "Direct styling through props",
      },
      {
        name: "Form Controls",
        available: true,
        description: "Built-in form validation and controls",
      },
      {
        name: "Theme Customization",
        available: true,
        description: "Dark mode compatible with customizable themes",
      },
      {
        name: "Icon System",
        available: true,
        description: "Icon collection via @chakra-ui/icons",
      },
    ],
    installation: {
      npm: "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion",
      yarn: "yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion",
      pnpm: "pnpm add @chakra-ui/react @emotion/react @emotion/styled framer-motion",
    },
    examples: [
      // {
      //   name: "Light Theme",
      //   description: "Default Chakra UI components with light theme",
      // //   component: (
      // //     <div className="space-y-4 p-4">
      // //       <h1 className="text-2xl font-medium">Chakra UI</h1>
      // //       <div className="flex gap-4">
      // //         <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
      // //           Primary
      // //         </button>
      // //         <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200">
      // //           Secondary
      // //         </button>
      // //       </div>
      // //     </div>
      // //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "chakra-ui/chakra-ui",
      discord: "chakra-ui",
      stackoverflow: "chakra-ui",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://chakra-ui.com/getting-started",
        type: "official",
      },
    ],
  },
  "Tailwind UI": {
    components: 75,
    customization: 85,
    documentation: 80,
    ecosystem: 70,
    bundleSize: "500KB (core)",
    lastUpdate: "7 days ago",
    features: [
      {
        name: "Utility-First",
        available: true,
        description: "Utility-first CSS framework for rapid UI development",
      },
      {
        name: "Pre-built Components",
        available: true,
        description: "Production-ready UI components",
      },
      {
        name: "Framework Support",
        available: true,
        description: "Supports React, Vue, and Alpine.js",
      },
      {
        name: "Premium Support",
        available: true,
        description: "One-on-one email support",
      },
      {
        name: "Growing Library",
        available: true,
        description: "Continuously updated component library",
      },
    ],
    installation: {
      npm: "npm install @tailwindcss/ui",
      yarn: "yarn add @tailwindcss/ui",
      pnpm: "pnpm add @tailwindcss/ui",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard Tailwind UI implementation",
      // //   component: (
      // //     <div className="space-y-4 p-4">
      // //       <h1 className="text-2xl font-normal">Tailwind UI</h1>
      // //       <div className="flex gap-4">
      // //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      // //           Primary
      // //         </button>
      // //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      // //           Secondary
      // //         </button>
      // //       </div>
      // //     </div>
      // //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "tailwindlabs/tailwindcss",
      discord: "tailwindcss",
      stackoverflow: "tailwind-css",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://tailwindcss.com/docs",
        type: "official",
      },
    ],
  },
  DaisyUI: {
    components: 70,
    customization: 80,
    documentation: 75,
    ecosystem: 65,
    bundleSize: "450KB (core)",
    lastUpdate: "10 days ago",
    features: [
      {
        name: "Semantic Classes",
        available: true,
        description: "Tailwind CSS components with semantic classes",
      },
    ],
    installation: {
      npm: "npm install daisyui",
      yarn: "yarn add daisyui",
      pnpm: "pnpm add daisyui",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard DaisyUI implementation",
      // //   component: (
      // //     <div className="space-y-4 p-4">
      // //       <h1 className="text-2xl font-normal">DaisyUI</h1>
      // //       <div className="flex gap-4">
      // //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      // //           Primary
      // //         </button>
      // //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      // //           Secondary
      // //         </button>
      // //       </div>
      // //     </div>
      // //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "saadeghi/daisyui",
      discord: "daisyui",
      stackoverflow: "daisyui",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://daisyui.com/docs",
        type: "official",
      },
    ],
  },
  "Radix UI": {
    components: 25,
    customization: 80,
    documentation: 85,
    ecosystem: 75,
    bundleSize: "400KB (core)",
    lastUpdate: "1 month ago",
    features: [
      {
        name: "Radix Themes",
        available: true,
        description: "Provides colors and other styles via Radix Themes",
      },
      {
        name: "Radix Colors",
        available: true,
        description: "Color system with over 390 colors",
      },
      {
        name: "Radix Primitives",
        available: true,
        description: "Collection of over 25 unstyled components",
      },
      {
        name: "Supports Server-Side Rendering (SSR)",
        available: true,
        description:
          "Compatible with server-side rendering for better performance",
      },
    ],
    installation: {
      npm: "npm install @radix-ui/react",
      yarn: "yarn add @radix-ui/react",
      pnpm: "pnpm add @radix-ui/react",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard Radix UI implementation",
      // //   component: (
      // //     <div className="space-y-4 p-4">
      // //       <h1 className="text-2xl font-normal">Radix UI</h1>
      // //       <div className="flex gap-4">
      // //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      // //           Primary
      // //         </button>
      // //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      // //           Secondary
      // //         </button>
      // //       </div>
      // //     </div>
      // //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "radix-ui/primitives",
      discord: "radix-ui",
      stackoverflow: "radix-ui",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://radix-ui.com/docs/primitives/overview/introduction",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://www.radix-ui.com/docs/primitives/examples",
        type: "community",
      },
    ],
  },
  "Headless UI": {
    components: 65,
    customization: 75,
    documentation: 70,
    ecosystem: 65,
    bundleSize: "420KB (core)",
    lastUpdate: "15 days ago",
    features: [
      {
        name: "Unstyled Components",
        available: true,
        description: "Completely unstyled, accessible UI components",
      },
      {
        name: "Accessibility Focus",
        available: true,
        description:
          "Ensures components are keyboard navigable and screen reader compatible",
      },
      {
        name: "Tailwind CSS Integration",
        available: true,
        description:
          "Seamlessly integrates with Tailwind CSS for rapid styling",
      },
    ],
    installation: {
      npm: "npm install @headlessui/react",
      yarn: "yarn add @headlessui/react",
      pnpm: "pnpm add @headlessui/react",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard Headless UI implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">Headless UI</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "tailwindlabs/headlessui",
      discord: "headlessui",
      stackoverflow: "headlessui",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://headlessui.dev/docs",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://headlessui.dev/examples",
        type: "community",
      },
    ],
  },
  "React Bootstrap": {
    components: 80,
    customization: 85,
    documentation: 80,
    ecosystem: 75,
    bundleSize: "600KB (core)",
    lastUpdate: "8 days ago",
    features: [
      {
        name: "Bootstrap Components",
        available: true,
        description: "React-powered Bootstrap components",
      },
      {
        name: "SASS Variables",
        available: true,
        description: "Theme support through Bootstrap SASS variables",
      },
      {
        name: "React Hooks Support",
        available: true,
        description: "Components compatible with React hooks",
      },
      {
        name: "Responsive Grid",
        available: true,
        description: "Built with Flexbox and fully responsive",
      },
    ],
    installation: {
      npm: "npm install react-bootstrap bootstrap",
      yarn: "yarn add react-bootstrap bootstrap",
      pnpm: "pnpm add react-bootstrap bootstrap",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React Bootstrap implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React Bootstrap</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "react-bootstrap/react-bootstrap",
      discord: "react-bootstrap",
      stackoverflow: "react-bootstrap",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://react-bootstrap.github.io/getting-started/introduction",
        type: "official",
      },
    ],
  },
  "Semantic UI React": {
    components: 75,
    customization: 80,
    documentation: 75,
    ecosystem: 70,
    bundleSize: "580KB (core)",
    lastUpdate: "9 days ago (2023-12-28)",
    features: [
      {
        name: "Semantic Components",
        available: true,
        description: "The official Semantic-UI-React integration",
      },
      {
        name: "Auto Controlled State",
        available: true,
        description: "Self-managed component states",
      },
      {
        name: "Shorthand Props",
        available: true,
        description: "Simplified props for generating markup",
      },
      {
        name: "Component Augmentation",
        available: true,
        description: "Render components as other components using 'as' prop",
      },
    ],
    installation: {
      npm: "npm install semantic-ui-react semantic-ui-css",
      yarn: "yarn add semantic-ui-react semantic-ui-css",
      pnpm: "pnpm add semantic-ui-react semantic-ui-css",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard Semantic UI React implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">Semantic UI React</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "Semantic-Org/Semantic-UI-React",
      discord: "semantic-ui-react",
      stackoverflow: "semantic-ui-react",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://react.semantic-ui.com/usage",
        type: "official",
      },
    ],
  },
  Blueprint: {
    components: 70,
    customization: 75,
    documentation: 70,
    ecosystem: 65,
    bundleSize: "560KB (core)",
    lastUpdate: "11 days ago",
    features: [
      {
        name: "UI Toolkit",
        available: true,
        description: "A React-based UI toolkit for the web",
      },
    ],
    installation: {
      npm: "npm install @blueprintjs/core",
      yarn: "yarn add @blueprintjs/core",
      pnpm: "pnpm add @blueprintjs/core",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard Blueprint implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">Blueprint</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "palantir/blueprint",
      discord: "blueprint",
      stackoverflow: "blueprint",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://blueprintjs.com/docs",
        type: "official",
      },
    ],
  },
  Evergreen: {
    components: 65,
    customization: 70,
    documentation: 75,
    ecosystem: 60,
    bundleSize: "500KB (core)",
    lastUpdate: "2 weeks ago",
    features: [
      {
        name: "UI Framework",
        available: true,
        description: "A React UI Framework for building ambitious products",
      },
    ],
    installation: {
      npm: "npm install evergreen-ui",
      yarn: "yarn add evergreen-ui",
      pnpm: "pnpm add evergreen-ui",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard Evergreen implementation",
      //     // component: (
      //     //   <div className="space-y-4 p-4">
      //     //     <h1 className="text-2xl font-normal">Evergreen</h1>
      //     //     <div className="flex gap-4">
      //     //       <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
      //     //         Primary
      //     //       </button>
      //     //       <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //     //         Secondary
      //     //       </button>
      //     //     </div>
      //     //   </div>
      //     // ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "segmentio/evergreen",
      discord: "evergreen",
      stackoverflow: "evergreen",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://evergreen.segment.com/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://evergreen.segment.com/templates",
        type: "community",
      },
    ],
  },
  Grommet: {
    components: 60,
    customization: 75,
    documentation: 70,
    ecosystem: 65,
    bundleSize: "600KB (core)",
    lastUpdate: "3 weeks ago",
    features: [
      {
        name: "UI Framework",
        available: true,
        description:
          "A react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package",
      },
      {
        name: "Theming",
        available: true,
        description: "Built-in themes with customization options",
      },
      {
        name: "Accessibility",
        available: true,
        description: "Follows web accessibility standards",
      },
      {
        name: "Form Validation",
        available: true,
        description: "Built-in form validation features",
      },
      {
        name: "Animation",
        available: true,
        description: "Support for animations and transitions",
      },
    ],
    installation: {
      npm: "npm install grommet",
      yarn: "yarn add grommet",
      pnpm: "pnpm add grommet",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard Grommet implementation",
      //     component: (
      //       <div className="space-y-4 p-4">
      //         <h1 className="text-2xl font-normal">Grommet</h1>
      //         <div className="flex gap-4">
      //           <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
      //             Primary
      //           </button>
      //           <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //             Secondary
      //           </button>
      //         </div>
      //       </div>
      //     ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "grommet/grommet",
      discord: "grommet",
      stackoverflow: "grommet",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://v2.grommet.io/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://v2.grommet.io/templates",
        type: "community",
      },
    ],
  },
  Rebass: {
    components: 50,
    customization: 70,
    documentation: 65,
    ecosystem: 60,
    bundleSize: "400KB (core)",
    lastUpdate: "1 month ago",
    features: [
      {
        name: "UI Components",
        available: true,
        description: "React primitive UI components built with styled-system",
      },
    ],
    installation: {
      npm: "npm install rebass",
      yarn: "yarn add rebass",
      pnpm: "pnpm add rebass",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard Rebass implementation",
      //     component: (
      //       <div className="space-y-4 p-4">
      //         <h1 className="text-2xl font-normal">Rebass</h1>
      //         <div className="flex gap-4">
      //           <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
      //             Primary
      //           </button>
      //           <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //             Secondary
      //           </button>
      //         </div>
      //       </div>
      //     ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "rebassjs/rebass",
      discord: "rebass",
      stackoverflow: "rebass",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://rebassjs.org/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://rebassjs.org/templates",
        type: "community",
      },
    ],
  },
  "React Suite": {
    components: 55,
    customization: 70,
    documentation: 75,
    ecosystem: 65,
    bundleSize: "500KB (core)",
    lastUpdate: "2 months ago",
    features: [
      {
        name: "UI Components",
        available: true,
        description:
          "A suite of React components, sensible UI design, and a friendly development experience",
      },
    ],
    installation: {
      npm: "npm install rsuite",
      yarn: "yarn add rsuite",
      pnpm: "pnpm add rsuite",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard React Suite implementation",
      //     component: (
      //       <div className="space-y-4 p-4">
      //         <h1 className="text-2xl font-normal">React Suite</h1>
      //         <div className="flex gap-4">
      //           <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //             Primary
      //           </button>
      //           <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //             Secondary
      //           </button>
      //         </div>
      //       </div>
      //     ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "rsuite/rsuite",
      discord: "rsuite",
      stackoverflow: "rsuite",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://rsuitejs.com/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://rsuitejs.com/templates",
        type: "community",
      },
    ],
  },
  PrimeReact: {
    components: 70,
    customization: 75,
    documentation: 80,
    ecosystem: 70,
    bundleSize: "600KB (core)",
    lastUpdate: "3 months ago",
    features: [
      {
        name: "UI Components",
        available: true,
        description: "A rich set of open source UI components for React",
      },
      {
        name: "Data Tables",
        available: true,
        description:
          "Advanced data table components with sorting and filtering",
      },
      {
        name: "Charts",
        available: true,
        description: "Built-in chart components",
      },
      {
        name: "Rich Text Editor",
        available: true,
        description: "Integrated rich text editor component",
      },
      {
        name: "Lazy Loading",
        available: true,
        description: "Support for component lazy loading",
      },
    ],
    installation: {
      npm: "npm install primereact",
      yarn: "yarn add primereact",
      pnpm: "pnpm add primereact",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard PrimeReact implementation",
      //     component: (
      //       <div className="space-y-4 p-4">
      //         <h1 className="text-2xl font-normal">PrimeReact</h1>
      //         <div className="flex gap-4">
      //           <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
      //             Primary
      //           </button>
      //           <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //             Secondary
      //           </button>
      //         </div>
      //       </div>
      //     ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "primefaces/primereact",
      discord: "primereact",
      stackoverflow: "primereact",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://primereact.org/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://www.primefaces.org/store/",
        type: "community",
      },
    ],
  },
  "React Toolbox": {
    components: 60,
    customization: 70,
    documentation: 65,
    ecosystem: 60,
    bundleSize: "500KB (core)",
    lastUpdate: "4 months ago",
    features: [
      {
        name: "UI Components",
        available: true,
        description:
          "A set of React components implementing Google's Material Design",
      },
    ],
    installation: {
      npm: "npm install react-toolbox",
      yarn: "yarn add react-toolbox",
      pnpm: "pnpm add react-toolbox",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard React Toolbox implementation",
      //     component: (
      //       <div className="space-y-4 p-4">
      //         <h1 className="text-2xl font-normal">React Toolbox</h1>
      //         <div className="flex gap-4">
      //           <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //             Primary
      //           </button>
      //           <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //             Secondary
      //           </button>
      //         </div>
      //       </div>
      //     ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "react-toolbox/react-toolbox",
      discord: "react-toolbox",
      stackoverflow: "react-toolbox",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "http://react-toolbox.io/#/",
        type: "official",
      },
      {
        title: "Templates",
        url: "http://react-toolbox.io/#/templates",
        type: "community",
      },
    ],
  },
  "Onsen UI": {
    components: 55,
    customization: 65,
    documentation: 70,
    ecosystem: 60,
    bundleSize: "450KB (core)",
    lastUpdate: "5 months ago",
    features: [
      {
        name: "Mobile-First UI",
        available: true,
        description: "Mobile app UI framework and SDK for HTML5",
      },
      {
        name: "Gesture Support",
        available: true,
        description: "Built-in support for mobile gestures",
      },
      {
        name: "Native Look",
        available: true,
        description: "Components with native mobile app look and feel",
      },
      {
        name: "Cross-Platform",
        available: true,
        description: "Works on both iOS and Android",
      },
    ],
    installation: {
      npm: "npm install onsenui",
      yarn: "yarn add onsenui",
      pnpm: "pnpm add onsenui",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard Onsen UI implementation",
      //     component: (
      //       <div className="space-y-4 p-4">
      //         <h1 className="text-2xl font-normal">Onsen UI</h1>
      //         <div className="flex gap-4">
      //           <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
      //             Primary
      //           </button>
      //           <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //             Secondary
      //           </button>
      //         </div>
      //       </div>
      //     ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "OnsenUI/OnsenUI",
      discord: "onsenui",
      stackoverflow: "onsenui",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://onsen.io/v2/guide/react/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://onsen.io/v2/guide/templates.html",
        type: "community",
      },
    ],
  },
  Reactstrap: {
    components: 60,
    customization: 70,
    documentation: 75,
    ecosystem: 65,
    bundleSize: "500KB (core)",
    lastUpdate: "6 months ago",
    features: [
      {
        name: "Bootstrap Components",
        available: true,
        description: "Simple React Bootstrap 4 components",
      },
    ],
    installation: {
      npm: "npm install reactstrap",
      yarn: "yarn add reactstrap",
      pnpm: "pnpm add reactstrap",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard Reactstrap implementation",
      //     component: (
      //       <div className="space-y-4 p-4">
      //         <h1 className="text-2xl font-normal">Reactstrap</h1>
      //         <div className="flex gap-4">
      //           <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //             Primary
      //           </button>
      //           <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //             Secondary
      //           </button>
      //         </div>
      //       </div>
      //     ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "reactstrap/reactstrap",
      discord: "reactstrap",
      stackoverflow: "reactstrap",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://reactstrap.github.io/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://reactstrap.github.io/components/",
        type: "community",
      },
    ],
  },
  "React Admin": {
    components: 65,
    customization: 70,
    documentation: 75,
    ecosystem: 70,
    bundleSize: "600KB (core)",
    lastUpdate: "7 months ago",
    features: [
      {
        name: "Admin Framework",
        available: true,
        description:
          "A frontend Framework for building admin applications on top of REST/GraphQL services",
      },
    ],
    installation: {
      npm: "npm install react-admin",
      yarn: "yarn add react-admin",
      pnpm: "pnpm add react-admin",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard React Admin implementation",
      //     component: (
      //       <div className="space-y-4 p-4">
      //         <h1 className="text-2xl font-normal">React Admin</h1>
      //         <div className="flex gap-4">
      //           <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //             Primary
      //           </button>
      //           <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //             Secondary
      //           </button>
      //         </div>
      //       </div>
      //     ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "marmelab/react-admin",
      discord: "react-admin",
      stackoverflow: "react-admin",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://marmelab.com/react-admin/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://marmelab.com/react-admin/Tutorial.html",
        type: "community",
      },
    ],
  },
  "React Virtualized": {
    components: 50,
    customization: 60,
    documentation: 65,
    ecosystem: 55,
    bundleSize: "400KB (core)",
    lastUpdate: "8 months ago",
    features: [
      {
        name: "Virtualized Lists",
        available: true,
        description:
          "React components for efficiently rendering large lists and tabular data",
      },
    ],
    installation: {
      npm: "npm install react-virtualized",
      yarn: "yarn add react-virtualized",
      pnpm: "pnpm add react-virtualized",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard React Virtualized implementation",
      //     component: (
      //       <div className="space-y-4 p-4">
      //         <h1 className="text-2xl font-normal">React Virtualized</h1>
      //         <div className="flex gap-4">
      //           <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //             Primary
      //           </button>
      //           <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //             Secondary
      //           </button>
      //         </div>
      //       </div>
      //     ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "bvaughn/react-virtualized",
      discord: "react-virtualized",
      stackoverflow: "react-virtualized",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://bvaughn.github.io/react-virtualized/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://bvaughn.github.io/react-virtualized/#/components/List",
        type: "community",
      },
    ],
  },
  "React DnD": {
    components: 30,
    customization: 70,
    documentation: 80,
    ecosystem: 75,
    bundleSize: "150KB (core)",
    lastUpdate: "1 month ago",
    features: [
      {
        name: "Drag and Drop",
        available: true,
        description: "Drag and Drop for React",
      },
    ],
    installation: {
      npm: "npm install react-dnd",
      yarn: "yarn add react-dnd",
      pnpm: "pnpm add react-dnd",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React DnD implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React DnD</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "react-dnd/react-dnd",
      discord: "react-dnd",
      stackoverflow: "react-dnd",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://react-dnd.github.io/react-dnd/about",
        type: "official",
      },
      {
        title: "Examples",
        url: "https://react-dnd.github.io/react-dnd/examples",
        type: "community",
      },
    ],
  },
  "React Beautiful DnD": {
    components: 20,
    customization: 60,
    documentation: 75,
    ecosystem: 70,
    bundleSize: "200KB (core)",
    lastUpdate: "2 months ago",
    features: [
      {
        name: "Drag and Drop",
        available: true,
        description:
          "Beautiful and accessible drag and drop for lists with React",
      },
    ],
    installation: {
      npm: "npm install react-beautiful-dnd",
      yarn: "yarn add react-beautiful-dnd",
      pnpm: "pnpm add react-beautiful-dnd",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React Beautiful DnD implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React Beautiful DnD</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "atlassian/react-beautiful-dnd",
      discord: "react-beautiful-dnd",
      stackoverflow: "react-beautiful-dnd",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://github.com/atlassian/react-beautiful-dnd",
        type: "official",
      },
      {
        title: "Examples",
        url: "https://github.com/atlassian/react-beautiful-dnd#examples",
        type: "community",
      },
    ],
  },
  "React Spring": {
    components: 25,
    customization: 80,
    documentation: 85,
    ecosystem: 75,
    bundleSize: "50KB (core)",
    lastUpdate: "3 weeks ago",
    features: [
      {
        name: "Animation",
        available: true,
        description: "A spring physics based React animation library",
      },
    ],
    installation: {
      npm: "npm install @react-spring/web",
      yarn: "yarn add @react-spring/web",
      pnpm: "pnpm add @react-spring/web",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React Spring implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React Spring</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "pmndrs/react-spring",
      discord: "react-spring",
      stackoverflow: "react-spring",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://www.react-spring.io/docs",
        type: "official",
      },
      {
        title: "Examples",
        url: "https://www.react-spring.io/examples",
        type: "community",
      },
    ],
  },
  "React Motion": {
    components: 15,
    customization: 70,
    documentation: 75,
    ecosystem: 65,
    bundleSize: "30KB (core)",
    lastUpdate: "4 months ago",
    features: [
      {
        name: "Animation",
        available: true,
        description: "A spring that solves your animation problems",
      },
    ],
    installation: {
      npm: "npm install react-motion",
      yarn: "yarn add react-motion",
      pnpm: "pnpm add react-motion",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React Motion implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React Motion</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "chenglou/react-motion",
      discord: "react-motion",
      stackoverflow: "react-motion",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://github.com/chenglou/react-motion",
        type: "official",
      },
      {
        title: "Examples",
        url: "https://github.com/chenglou/react-motion#examples",
        type: "community",
      },
    ],
  },
  "React Use": {
    components: 50,
    customization: 60,
    documentation: 70,
    ecosystem: 80,
    bundleSize: "N/A",
    lastUpdate: "2 weeks ago",
    features: [
      {
        name: "Hooks",
        available: true,
        description: "A collection of essential React Hooks",
      },
    ],
    installation: {
      npm: "npm install react-use",
      yarn: "yarn add react-use",
      pnpm: "pnpm add react-use",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React Use implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React Use</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "streamich/react-use",
      discord: "react-use",
      stackoverflow: "react-use",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://github.com/streamich/react-use",
        type: "official",
      },
      {
        title: "Examples",
        url: "https://github.com/streamich/react-use#examples",
        type: "community",
      },
    ],
  },
  "React Hook Form": {
    components: 40,
    customization: 70,
    documentation: 85,
    ecosystem: 75,
    bundleSize: "20KB (core)",
    lastUpdate: "1 week ago",
    features: [
      {
        name: "Forms",
        available: true,
        description:
          "Performant, flexible and extensible forms with easy-to-use validation",
      },
    ],
    installation: {
      npm: "npm install react-hook-form",
      yarn: "yarn add react-hook-form",
      pnpm: "pnpm add react-hook-form",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React Hook Form implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React Hook Form</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "react-hook-form/react-hook-form",
      discord: "react-hook-form",
      stackoverflow: "react-hook-form",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://react-hook-form.com/get-started",
        type: "official",
      },
      {
        title: "Examples",
        url: "https://react-hook-form.com/examples",
        type: "community",
      },
    ],
  },
  Formik: {
    components: 30,
    customization: 60,
    documentation: 80,
    ecosystem: 70,
    bundleSize: "15KB (core)",
    lastUpdate: "2 weeks ago",
    features: [
      {
        name: "Forms",
        available: true,
        description: "Build forms in React, without the tears",
      },
    ],
    installation: {
      npm: "npm install formik",
      yarn: "yarn add formik",
      pnpm: "pnpm add formik",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard Formik implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">Formik</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "jaredpalmer/formik",
      discord: "formik",
      stackoverflow: "formik",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://formik.org/docs/overview",
        type: "official",
      },
      {
        title: "Examples",
        url: "https://formik.org/docs/examples",
        type: "community",
      },
    ],
  },
  "React Final Form": {
    components: 25,
    customization: 60,
    documentation: 75,
    ecosystem: 65,
    bundleSize: "10KB (core)",
    lastUpdate: "3 weeks ago",
    features: [
      {
        name: "Forms",
        available: true,
        description:
          "High performance subscription-based form state management for React",
      },
    ],
    installation: {
      npm: "npm install react-final-form",
      yarn: "yarn add react-final-form",
      pnpm: "pnpm add react-final-form",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React Final Form implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React Final Form</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "final-form/react-final-form",
      discord: "react-final-form",
      stackoverflow: "react-final-form",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://final-form.org/react",
        type: "official",
      },
      {
        title: "Examples",
        url: "https://final-form.org/docs/react-final-form/examples",
        type: "community",
      },
    ],
  },
  "React Query": {
    components: 35,
    customization: 70,
    documentation: 85,
    ecosystem: 80,
    bundleSize: "25KB (core)",
    lastUpdate: "1 week ago",
    features: [
      {
        name: "Data Fetching",
        available: true,
        description:
          "Hooks for fetching, caching and updating asynchronous data in React",
      },
    ],
    installation: {
      npm: "npm install @tanstack/react-query",
      yarn: "yarn add @tanstack/react-query",
      pnpm: "pnpm add @tanstack/react-query",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React Query implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React Query</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "tanstack/react-query",
      discord: "react-query",
      stackoverflow: "react-query",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://react-query.tanstack.com/overview",
        type: "official",
      },
      {
        title: "Examples",
        url: "https://react-query.tanstack.com/examples",
        type: "community",
      },
    ],
  },
  "React Table": {
    components: 40,
    customization: 70,
    documentation: 85,
    ecosystem: 80,
    bundleSize: "15KB (core)",
    lastUpdate: "1 month ago",
    features: [
      {
        name: "Data Tables",
        available: true,
        description:
          "Hooks for building fast and extendable tables and datagrids for React",
      },
    ],
    installation: {
      npm: "npm install @tanstack/react-table",
      yarn: "yarn add @tanstack/react-table",
      pnpm: "pnpm add @tanstack/react-table",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React Table implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React Table</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "tanstack/react-table",
      discord: "react-table",
      stackoverflow: "react-table",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://react-table.tanstack.com/docs/overview",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://react-table.tanstack.com/docs/examples/basic",
        type: "community",
      },
    ],
  },
  "React i18next": {
    components: 20,
    customization: 60,
    documentation: 75,
    ecosystem: 70,
    bundleSize: "10KB (core)",
    lastUpdate: "2 months ago",
    features: [
      {
        name: "Internationalization",
        available: true,
        description: "Internationalization for React done right",
      },
    ],
    installation: {
      npm: "npm install react-i18next i18next",
      yarn: "yarn add react-i18next i18next",
      pnpm: "pnpm add react-i18next i18next",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React i18next implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React i18next</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "i18next/react-i18next",
      discord: "react-i18next",
      stackoverflow: "react-i18next",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://react.i18next.com/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://react.i18next.com/latest/using-with-hooks",
        type: "community",
      },
    ],
  },
  "React Helmet": {
    components: 10,
    customization: 50,
    documentation: 70,
    ecosystem: 65,
    bundleSize: "5KB (core)",
    lastUpdate: "3 months ago",
    features: [
      {
        name: "Document Head Management",
        available: true,
        description: "A document head manager for React",
      },
    ],
    installation: {
      npm: "npm install react-helmet",
      yarn: "yarn add react-helmet",
      pnpm: "pnpm add react-helmet",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React Helmet implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React Helmet</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "nfl/react-helmet",
      discord: "react-helmet",
      stackoverflow: "react-helmet",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://github.com/nfl/react-helmet",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://github.com/nfl/react-helmet#readme",
        type: "community",
      },
    ],
  },
  "React Hot Toast": {
    components: 15,
    customization: 55,
    documentation: 65,
    ecosystem: 60,
    bundleSize: "8KB (core)",
    lastUpdate: "1 month ago",
    features: [
      {
        name: "Notifications",
        available: true,
        description: "Smoking hot React notifications",
      },
    ],
    installation: {
      npm: "npm install react-hot-toast",
      yarn: "yarn add react-hot-toast",
      pnpm: "pnpm add react-hot-toast",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard React Hot Toast implementation",
      //     component: (
      //       <div className="space-y-4 p-4">
      //         <h1 className="text-2xl font-normal">React Hot Toast</h1>
      //         <div className="flex gap-4">
      //           <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //             Primary
      //           </button>
      //           <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //             Secondary
      //           </button>
      //         </div>
      //       </div>
      //     ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "timolins/react-hot-toast",
      discord: "react-hot-toast",
      stackoverflow: "react-hot-toast",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://react-hot-toast.com/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://react-hot-toast.com/docs",
        type: "community",
      },
    ],
  },
  SWR: {
    components: 10,
    customization: 50,
    documentation: 75,
    ecosystem: 70,
    bundleSize: "5KB (core)",
    lastUpdate: "2 weeks ago",
    features: [
      {
        name: "Data Fetching",
        available: true,
        description: "React Hooks library for remote data fetching",
      },
    ],
    installation: {
      npm: "npm install swr",
      yarn: "yarn add swr",
      pnpm: "pnpm add swr",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard SWR implementation",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">SWR</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "React", "Remix"],
    community: {
      github: "vercel/swr",
      discord: "swr",
      stackoverflow: "swr",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://swr.vercel.app/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://swr.vercel.app/examples/basic",
        type: "community",
      },
    ],
  },

  //   new UI
  "Shadcn UI": {
    components: 50,
    customization: 10,
    documentation: 8,
    ecosystem: 7,
    bundleSize: "0kB",
    lastUpdate: "2024-01-07",
    features: [
      {
        name: "Component Copy/Paste",
        available: true,
        description: "Direct code access for complete component control",
      },
      {
        name: "Themes and Theme Editor",
        available: true,
        description: "Visual editor for customizing components",
      },
      {
        name: "Dark Mode",
        available: true,
        description: "Built-in dark mode support",
      },
      {
        name: "Tailwind Integration",
        available: true,
        description: "Built on top of Tailwind CSS",
      },
      {
        name: "Edit in v0",
        available: true,
        description: "Allows editing components in Vercel's AI tool v0",
      },
    ],
    installation: {
      npm: "npx shadcn-ui@latest init",
      pnpm: "pnpm dlx shadcn-ui@latest init",
    },
    examples: [],
    frameworks: ["React", "Next.js", "Gatsby", "Remix"],
    community: {
      github: "shadcn/shadcn-ui",
      discord: "shadcn-ui",
      stackoverflow: "shadcn-ui",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://ui.shadcn.com",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://shadcn.dev/templates",
        type: "community",
      },
    ],
  },
  "Next UI": {
    components: 70,
    customization: 9,
    documentation: 8,
    ecosystem: 7,
    bundleSize: "456.3kB",
    lastUpdate: "2024-01-06",
    features: [
      {
        name: "Dark Theme",
        available: true,
        description: "Well-scaled default dark theme",
      },
      {
        name: "Lazy Loading",
        available: true,
        description: "Support for component lazy loading",
      },
      {
        name: "Internationalization",
        available: true,
        description: "Built-in internationalization support",
      },
      {
        name: "Animations",
        available: true,
        description: "Framer Motion animations integration",
      },
    ],
    installation: {
      npm: "npm install @nextui-org/react",
      yarn: "yarn add @nextui-org/react",
    },
    examples: [],
    frameworks: ["React", "Next.js"],
    community: {
      github: "21k",
      discord: "nextui",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://nextui.org/",
        type: "official",
      },
    ],
  },
  "Core UI": {
    components: 70,
    customization: 8,
    documentation: 8,
    ecosystem: 7,
    bundleSize: "524.6kB",
    lastUpdate: "2024-01-04",
    features: [
      {
        name: "SASS Support",
        available: true,
        description: "Built using SASS for cleaner CSS",
      },
      {
        name: "Data Visualization",
        available: true,
        description: "Support for charts and data visualization",
      },
      {
        name: "Admin Templates",
        available: true,
        description: "Pre-built admin dashboard templates",
      },
      {
        name: "Cross-browser",
        available: true,
        description: "Compatible across different browsers",
      },
    ],
    installation: {
      npm: "npm install @coreui/react",
      yarn: "yarn add @coreui/react",
    },
    examples: [],
    frameworks: ["React", "Angular", "Vue"],
    community: {
      github: "600",
      stackoverflow: "coreui",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://coreui.io/react/",
        type: "official",
      },
    ],
  },
  "Mantine": {
    components: 100,
    customization: 85,
    documentation: 90,
    ecosystem: 80,
    bundleSize: "N/A",
    lastUpdate: "1 week ago",
    features: [
      {
        name: "Components",
        available: true,
        description:
          "Various UI components, from basic to complex ones like modals and notifications",
      },
      {
        name: "Theme",
        available: true,
        description:
          "Supports themes and allows developers to customize their preferred themes",
      },
      {
        name: "Animations and Transitions",
        available: true,
        description: "Built-in support for smooth animations and transitions",
      },
      {
        name: "Hooks",
        available: true,
        description:
          "Up to 50 hooks that help simplify tasks like form handling and animations",
      },
      {
        name: "Icons",
        available: true,
        description:
          "Supports icon libraries like react-icons, font awesome, and radix icons",
      },
    ],
    installation: {
      npm: "npm install @mantine/core @mantine/hooks",
      yarn: "yarn add @mantine/core @mantine/hooks",
      pnpm: "pnpm add @mantine/core @mantine/hooks",
    },
    examples: [
      //   {
      //     name: "Default Theme",
      //     description: "Standard Mantine components",
      //     component: (
      //       <div className="space-y-4 p-4">
      //         <h1 className="text-2xl font-normal">Mantine</h1>
      //         <div className="flex gap-4">
      //           <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //             Primary
      //           </button>
      //           <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //             Secondary
      //           </button>
      //         </div>
      //       </div>
      //     ),
      //   },
    ],
    frameworks: ["Next.js", "Gatsby", "Create React App", "Remix"],
    community: {
      github: "mantinedev/mantine",
      discord: "mantine",
      stackoverflow: "mantine",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://mantine.dev/docs/getting-started/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://mantine.dev/templates/",
        type: "community",
      },
    ],
  },
  "React-Admin": {
    components: 50,
    customization: 70,
    documentation: 85,
    ecosystem: 80,
    bundleSize: "N/A",
    lastUpdate: "2 weeks ago",
    features: [
      {
        name: "Data Visualization",
        available: true,
        description: "Provides different chart types to visualize data",
      },
      {
        name: "Authentication",
        available: true,
        description: "Built-in authentication with authProvider object",
      },
      {
        name: "Form Validation",
        available: true,
        description: "Uses react-hook-form for form validation",
      },
      {
        name: "Internationalization (i18n)",
        available: true,
        description: "Supports multiple languages with i18nProvider and hooks",
      },
    ],
    installation: {
      npm: "npm install react-admin",
      yarn: "yarn add react-admin",
      pnpm: "pnpm add react-admin",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard React-Admin components",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">React-Admin</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "Create React App", "Remix"],
    community: {
      github: "marmelab/react-admin",
      discord: "react-admin",
      stackoverflow: "react-admin",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://marmelab.com/react-admin/",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://marmelab.com/react-admin/Tutorial.html",
        type: "community",
      },
    ],
  },
  "Park UI": {
    components: 30,
    customization: 80,
    documentation: 75,
    ecosystem: 70,
    bundleSize: "N/A",
    lastUpdate: "1 month ago",
    features: [
      {
        name: "Theme Editor",
        available: true,
        description:
          "Allows defining custom styles for fonts, colors, and radius via its editor panel",
      },
      {
        name: "Supports Panda CSS",
        available: true,
        description: "Built on Panda CSS, a CSS-in-JS library",
      },
      {
        name: "Blocks",
        available: true,
        description:
          "Provides pre-built collection of common UI elements like banners, footers, and cards",
      },
    ],
    installation: {
      npm: "npm install park-ui",
      yarn: "yarn add park-ui",
      pnpm: "pnpm add park-ui",
    },
    examples: [
      // {
      //   name: "Default Theme",
      //   description: "Standard Park UI components",
      //   component: (
      //     <div className="space-y-4 p-4">
      //       <h1 className="text-2xl font-normal">Park UI</h1>
      //       <div className="flex gap-4">
      //         <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      //           Primary
      //         </button>
      //         <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //           Secondary
      //         </button>
      //       </div>
      //     </div>
      //   ),
      // },
    ],
    frameworks: ["Next.js", "Gatsby", "Create React App", "Remix"],
    community: {
      github: "park-ui/park-ui",
      discord: "park-ui",
      stackoverflow: "park-ui",
    },
    learning: [
      {
        title: "Official Documentation",
        url: "https://park-ui.dev/docs",
        type: "official",
      },
      {
        title: "Templates",
        url: "https://park-ui.dev/templates",
        type: "community",
      },
    ],
  },
};
