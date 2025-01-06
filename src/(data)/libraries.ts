import { StaticImageData } from "next/image";
import Mui from "@/assets/mui.png";

export interface LibraryProps {
  img?: StaticImageData | string;
  name: string;
  category: string;
  description: string;
  stars: string;
  license: string;
  url: string;
}

export const libraries = [
  {
    img: Mui,
    name: "Material UI",
    category: "Component Libraries",
    description: "Google's Material Design implemented for React",
    stars: "85.9k",
    license: "MIT",
    url: "https://mui.com/",
  },
  {
    name: "Ant Design",
    category: "Component Libraries",
    description: "Enterprise-class UI designed for web applications",
    url: "https://ant.design/",
    stars: "85.1k",
    license: "MIT",
  },
  {
    name: "Chakra UI",
    category: "Component Libraries",
    description: "Simple, modular and accessible UI components",
    stars: "33.2k",
    license: "MIT",
    url: "https://chakra-ui.com/",
  },

  {
    name: "Tailwind UI",
    category: "Utility-First",
    url: "https://tailwindui.com/",
    description: "Official Tailwind CSS components",
    stars: "20.1k",
    license: "Commercial",
  },
  {
    name: "DaisyUI",
    category: "Utility-First",
    url: "https://daisyui.com/",
    description: "Tailwind CSS components with semantic classes",
    stars: "23.4k",
    license: "MIT",
  },
  {
    name: "Radix UI",
    category: "Headless UI",
    url: "https://radix-ui.com/",
    description: "Unstyled, accessible UI components",
    stars: "27.3k",
    license: "MIT",
  },
  {
    category: "Headless UI",
    name: "Headless UI",
    url: "https://headlessui.dev/",
    description: "Completely unstyled, accessible UI components",
    stars: "20.8k",
    license: "MIT",
  },
  {
    name: "React Bootstrap",
    category: "Component Libraries",
    description: "Bootstrap rebuilt for React",
    stars: "21.2k",
    license: "MIT",
    url: "https://react-bootstrap.github.io/",
  },
  {
    name: "Semantic UI React",
    category: "Component Libraries",
    description: "The official Semantic-UI-React integration",
    stars: "12.1k",
    license: "MIT",
    url: "https://react.semantic-ui.com/",
  },
  {
    name: "Blueprint",
    category: "Component Libraries",
    description: "A React-based UI toolkit for the web",
    stars: "19.3k",
    license: "Apache-2.0",
    url: "https://blueprintjs.com/",
  },
  {
    name: "Evergreen",
    category: "Component Libraries",
    description: "A React UI Framework for building ambitious products",
    stars: "11.5k",
    license: "MIT",
    url: "https://evergreen.segment.com/",
  },
  {
    name: "Grommet",
    category: "Component Libraries",
    description:
      "A react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package",
    stars: "8.1k",
    license: "Apache-2.0",
    url: "https://v2.grommet.io/",
  },
  {
    name: "Rebass",
    category: "Component Libraries",
    description: "React primitive UI components built with styled-system",
    stars: "7.6k",
    license: "MIT",
    url: "https://rebassjs.org/",
  },
  {
    name: "React Suite",
    category: "Component Libraries",
    description:
      "A suite of React components, sensible UI design, and a friendly development experience",
    stars: "6.8k",
    license: "MIT",
    url: "https://rsuitejs.com/",
  },
  {
    name: "PrimeReact",
    category: "Component Libraries",
    description: "A rich set of open source UI components for React",
    stars: "3.2k",
    license: "MIT",
    url: "https://www.primefaces.org/primereact/",
  },
  {
    name: "React Toolbox",
    category: "Component Libraries",
    description:
      "A set of React components implementing Google's Material Design",
    stars: "8.7k",
    license: "MIT",
    url: "http://react-toolbox.io/",
  },
  {
    name: "Onsen UI",
    category: "Component Libraries",
    description: "Mobile app UI framework and SDK for HTML5",
    stars: "8.6k",
    license: "Apache-2.0",
    url: "https://onsen.io/react/",
  },
  {
    name: "Reactstrap",
    category: "Component Libraries",
    description: "Simple React Bootstrap 4 components",
    stars: "10.1k",
    license: "MIT",
    url: "https://reactstrap.github.io/",
  },
  {
    name: "React Admin",
    category: "Component Libraries",
    description:
      "A frontend Framework for building admin applications on top of REST/GraphQL services",
    stars: "19.5k",
    license: "MIT",
    url: "https://marmelab.com/react-admin/",
  },
  {
    name: "React Virtualized",
    category: "Utility-First",
    description:
      "React components for efficiently rendering large lists and tabular data",
    stars: "23.4k",
    license: "MIT",
    url: "https://bvaughn.github.io/react-virtualized/",
  },
  {
    name: "React DnD",
    category: "Utility-First",
    description: "Drag and Drop for React",
    stars: "18.1k",
    license: "MIT",
    url: "https://react-dnd.github.io/react-dnd/about",
  },
  {
    name: "React Beautiful DnD",
    category: "Utility-First",
    description: "Beautiful and accessible drag and drop for lists with React",
    stars: "28.1k",
    license: "MIT",
    url: "https://github.com/atlassian/react-beautiful-dnd",
  },
  {
    name: "React Spring",
    category: "Utility-First",
    description: "A spring physics based React animation library",
    stars: "24.3k",
    license: "MIT",
    url: "https://www.react-spring.io/",
  },
  {
    name: "React Motion",
    category: "Utility-First",
    description: "A spring that solves your animation problems",
    stars: "20.9k",
    license: "MIT",
    url: "https://github.com/chenglou/react-motion",
  },
  {
    name: "React Use",
    category: "Utility-First",
    description: "A collection of essential React Hooks",
    stars: "36.2k",
    license: "MIT",
    url: "https://github.com/streamich/react-use",
  },
  {
    name: "React Hook Form",
    category: "Utility-First",
    description:
      "Performant, flexible and extensible forms with easy-to-use validation",
    stars: "34.5k",
    license: "MIT",
    url: "https://react-hook-form.com/",
  },
  {
    name: "Formik",
    category: "Utility-First",
    description: "Build forms in React, without the tears",
    stars: "32.1k",
    license: "MIT",
    url: "https://formik.org/",
  },
  {
    name: "React Final Form",
    category: "Utility-First",
    description:
      "High performance subscription-based form state management for React",
    stars: "7.1k",
    license: "MIT",
    url: "https://final-form.org/react",
  },
  {
    name: "React Query",
    category: "Utility-First",
    description:
      "Hooks for fetching, caching and updating asynchronous data in React",
    stars: "36.4k",
    license: "MIT",
    url: "https://react-query.tanstack.com/",
  },
  {
    name: "SWR",
    category: "Utility-First",
    description: "React Hooks library for remote data fetching",
    stars: "27.3k",
    license: "MIT",
    url: "https://swr.vercel.app/",
  },
  {
    name: "React Table",
    category: "Utility-First",
    description:
      "Hooks for building fast and extendable tables and datagrids for React",
    stars: "20.1k",
    license: "MIT",
    url: "https://react-table.tanstack.com/",
  },
  {
    name: "React i18next",
    category: "Utility-First",
    description: "Internationalization for React done right",
    stars: "7.3k",
    license: "MIT",
    url: "https://react.i18next.com/",
  },
  {
    name: "React Helmet",
    category: "Utility-First",
    description: "A document head manager for React",
    stars: "16.3k",
    license: "MIT",
    url: "https://github.com/nfl/react-helmet",
  },
  {
    name: "React Hot Toast",
    category: "Utility-First",
    description: "Smoking hot React notifications",
    stars: "7.1k",
    license: "MIT",
    url: "https://react-hot-toast.com/",
  },
];
