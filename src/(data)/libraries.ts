import { StaticImageData } from "next/image";
import MuiImage from "@/assets/mui.png";
import ChakraImage from "@/assets/chakra.png";
import AntdesignImage from "@/assets/antdesign.png";
import TailwindImage from "@/assets/tailwind.png";
import DaisyUIImage from "@/assets/daisy.png";
import RadixImage from "@/assets/radix.png";
import HeadlessImage from "@/assets/headless.png";
import BootstrapImage from "@/assets/bootstrap.png";
import SemanticImage from "@/assets/semanticui.png";
import BlueprintImage from "@/assets/blueprint.png";
import EvergreenImage from "@/assets/evergreen.png";
import GrommetImage from "@/assets/grommet.png";
import RebassImage from "@/assets/rebass.png";
import ReactSuiteImage from "@/assets/reactsuite.png";
import PrimeReactImage from "@/assets/prime.png";
import Onsen from "@/assets/Onsen.png";
import ReactstrapImage from "@/assets/reactstrap.png";
import ReactAdminImage from "@/assets/reactadmin.png";
import ReactVirtualizedImage from "@/assets/ReactVirtualized.png";
import ReactDNDImage from "@/assets/reactdnd.png";
import ReactSpringImage from "@/assets/reactsprings.png";
import ReacttoolboxImage from "@/assets/reacttoolbox.png";
import ReactBeautifulDNDImage from "@/assets/ReactBeautifulDnD.png";
import ReactMotionImage from "@/assets/reactmotion.png";
import ReactUseImage from "@/assets/reactuse.png";
import ReactHookFormImage from "@/assets/reacthookform.png";
import FormikImage from "@/assets/formik.png";
import ReactFinalFormImage from "@/assets/reactfinalform.png";
import ReactQueryImage from "@/assets/tanstackquery.png";
import SWRImage from "@/assets/swr.png";
import ReactTableImage from "@/assets/tanstacktable.png";
import Reacti8Image from "@/assets/reacti8.png";
import ReactHelmetImage from "@/assets/reacthelmet.png";
import ReactHotToastImage from "@/assets/reacthottoast.png";
import MantineImage from "@/assets/mantine.png";
import ShadcnImage from "@/assets/shadcn.png";
import ParkUIImage from "@/assets/parkui.png";
import NextUIImage from "@/assets/nextui.png";
import CoreUIImage from "@/assets/core ui.png";

export interface LibraryProps {
  img?: StaticImageData;
  name: string;
  category: string;
  description: string;
  stars: string;
  license: string;
  url: string;
}

export const libraries = [
  {
    img: ChakraImage,
    name: "Chakra UI",
    category: "Component Libraries",
    description: "Simple, modular and accessible UI components",
    stars: "38.3K",
    license: "MIT",
    url: "https://chakra-ui.com/",
  },
  {
    img: MuiImage,
    name: "Material UI",
    category: "Component Libraries",
    description: "Google's Material Design implemented for React",
    stars: "85.9k",
    license: "MIT",
    url: "https://mui.com/",
  },
  {
    img: AntdesignImage,
    name: "Ant Design",
    category: "Component Libraries",
    description: "Enterprise-class UI designed for web applications",
    url: "https://ant.design/",
    stars: "85.1k",
    license: "MIT",
  },
  {
    img: MantineImage,
    name: "Mantine",
    category: "Component Libraries",
    description:
      "Fully functional React UI library with over 100 customizable components and 50 hooks",
    stars: "25k",
    license: "MIT",
    url: "https://mantine.dev/",
  },
  {
    img: ShadcnImage,
    name: "Shadcn UI",
    category: "Component Libraries",
    description:
      "Component library leveraging Tailwind CSS and Radix UI for styling",
    stars: "66k",
    license: "MIT",
    url: "https://ui.shadcn.com/",
  },
  {
    img: ParkUIImage,
    name: "Park UI",
    category: "Component Libraries",
    description: "React component library built on Ark UI and Panda CSS",
    stars: "1.8k",
    license: "MIT",
    url: "https://park-ui.com/",
  },
  {
    img: NextUIImage,
    name: "Next UI",
    category: "Component Libraries",
    description:
      "A React UI library with a well-scaled default dark theme and support for component lazy loading",
    stars: "21k",
    license: "MIT",
    url: "https://nextui.org/",
  },
  {
    img: CoreUIImage,
    name: "Core UI",
    category: "Component Libraries",
    description:
      "A React UI library built using SASS with support for charts and data visualization",
    stars: "600",
    license: "MIT",
    url: "https://coreui.io/react/",
  },
  {
    img: TailwindImage,
    name: "Tailwind UI",
    category: "Utility-First",
    url: "https://tailwindui.com/",
    description: "Official Tailwind CSS components",
    stars: "20.1k",
    license: "Commercial",
  },
  {
    img: DaisyUIImage,
    name: "DaisyUI",
    category: "Utility-First",
    url: "https://daisyui.com/",
    description: "Tailwind CSS components with semantic classes",
    stars: "23.4k",
    license: "MIT",
  },
  {
    img: RadixImage,
    name: "Radix UI",
    category: "Headless UI",
    url: "https://radix-ui.com/",
    description: "Unstyled, accessible UI components",
    stars: "27.3k",
    license: "MIT",
  },
  {
    img: HeadlessImage,
    name: "Headless UI",
    category: "Headless UI",
    url: "https://headlessui.dev/",
    description:
      "Collection of unstyled, accessible UI components built on top of Tailwind CSS",
    stars: "20.8k",
    license: "MIT",
  },
  {
    img: BootstrapImage,
    name: "React Bootstrap",
    category: "Component Libraries",
    description: "Bootstrap rebuilt for React",
    stars: "21.2k",
    license: "MIT",
    url: "https://react-bootstrap.github.io/",
  },
  {
    img: SemanticImage,
    name: "Semantic UI React",
    category: "Component Libraries",
    description: "The official Semantic-UI-React integration",
    stars: "12.1k",
    license: "MIT",
    url: "https://react.semantic-ui.com/",
  },
  {
    img: BlueprintImage,
    name: "Blueprint",
    category: "Component Libraries",
    description: "A React-based UI toolkit for the web",
    stars: "19.3k",
    license: "Apache-2.0",
    url: "https://blueprintjs.com/",
  },
  {
    img: EvergreenImage,
    name: "Evergreen",
    category: "Component Libraries",
    description: "A React UI Framework for building ambitious products",
    stars: "11.5k",
    license: "MIT",
    url: "https://evergreen.segment.com/",
  },
  {
    img: GrommetImage,
    name: "Grommet",
    category: "Component Libraries",
    description:
      "A react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package",
    stars: "8.1k",
    license: "Apache-2.0",
    url: "https://v2.grommet.io/",
  },
  {
    img: RebassImage,
    name: "Rebass",
    category: "Component Libraries",
    description: "React primitive UI components built with styled-system",
    stars: "7.9k",
    license: "MIT",
    url: "https://rebass-v3.vercel.app/",
  },
  {
    img: ReactSuiteImage,
    name: "React Suite",
    category: "Component Libraries",
    description:
      "A suite of React components, sensible UI design, and a friendly development experience",
    stars: "6.8k",
    license: "MIT",
    url: "https://rsuitejs.com/",
  },
  {
    img: PrimeReactImage,
    name: "PrimeReact",
    category: "Component Libraries",
    description: "A rich set of open source UI components for React",
    stars: "3.2k",
    license: "MIT",
    url: "https://www.primefaces.org/primereact/",
  },
  {
    img: ReacttoolboxImage,
    name: "React Toolbox",
    category: "Component Libraries",
    description:
      "A set of React components implementing Google's Material Design",
    stars: "8.7k",
    license: "MIT",
    url: "http://react-toolbox.io/",
  },
  {
    img: Onsen,
    name: "Onsen UI",
    category: "Component Libraries",
    description: "Mobile app UI framework and SDK for HTML5",
    stars: "8.6k",
    license: "Apache-2.0",
    url: "https://onsen.io/react/",
  },
  {
    img: ReactstrapImage,
    name: "Reactstrap",
    category: "Component Libraries",
    description: "Simple React Bootstrap 4 components",
    stars: "10.1k",
    license: "MIT",
    url: "https://reactstrap.github.io/",
  },
  {
    img: ReactAdminImage,
    name: "React Admin",
    category: "Component Libraries",
    description:
      "A frontend Framework for building admin applications on top of REST/GraphQL services",
    stars: "19.5k",
    license: "MIT",
    url: "https://marmelab.com/react-admin/",
  },
  {
    img: ReactVirtualizedImage,
    name: "React Virtualized",
    category: "Utility-First",
    description:
      "React components for efficiently rendering large lists and tabular data",
    stars: "23.4k",
    license: "MIT",
    url: "https://bvaughn.github.io/react-virtualized/",
  },
  {
    img: ReactDNDImage,
    name: "React DnD",
    category: "Utility-First",
    description: "Drag and Drop for React",
    stars: "18.1k",
    license: "MIT",
    url: "https://react-dnd.github.io/react-dnd/about",
  },
  {
    img: ReactBeautifulDNDImage,
    name: "React Beautiful DnD",
    category: "Utility-First",
    description: "Beautiful and accessible drag and drop for lists with React",
    stars: "28.1k",
    license: "MIT",
    url: "https://github.com/atlassian/react-beautiful-dnd",
  },
  {
    img: ReactSpringImage,
    name: "React Spring",
    category: "Utility-First",
    description: "A spring physics based React animation library",
    stars: "24.3k",
    license: "MIT",
    url: "https://www.react-spring.io/",
  },
  {
    img: ReactMotionImage,
    name: "React Motion",
    category: "Utility-First",
    description: "A spring that solves your animation problems",
    stars: "20.9k",
    license: "MIT",
    url: "https://github.com/chenglou/react-motion",
  },
  {
    img: ReactUseImage,
    name: "React Use",
    category: "Utility-First",
    description: "A collection of essential React Hooks",
    stars: "36.2k",
    license: "MIT",
    url: "https://github.com/streamich/react-use",
  },
  {
    img: ReactHookFormImage,
    name: "React Hook Form",
    category: "Utility-First",
    description:
      "Performant, flexible and extensible forms with easy-to-use validation",
    stars: "34.5k",
    license: "MIT",
    url: "https://react-hook-form.com/",
  },
  {
    img: FormikImage,
    name: "Formik",
    category: "Utility-First",
    description: "Build forms in React, without the tears",
    stars: "32.1k",
    license: "MIT",
    url: "https://formik.org/",
  },
  {
    img: ReactFinalFormImage,
    name: "React Final Form",
    category: "Utility-First",
    description:
      "High performance subscription-based form state management for React",
    stars: "7.1k",
    license: "MIT",
    url: "https://final-form.org/react",
  },
  {
    img: ReactQueryImage,
    name: "React Query",
    category: "Utility-First",
    description:
      "Hooks for fetching, caching and updating asynchronous data in React",
    stars: "36.4k",
    license: "MIT",
    url: "https://react-query.tanstack.com/",
  },
  {
    img: SWRImage,
    name: "SWR",
    category: "Utility-First",
    description: "React Hooks library for remote data fetching",
    stars: "27.3k",
    license: "MIT",
    url: "https://swr.vercel.app/",
  },
  {
    img: ReactTableImage,
    name: "React Table",
    category: "Utility-First",
    description:
      "Hooks for building fast and extendable tables and datagrids for React",
    stars: "20.1k",
    license: "MIT",
    url: "https://react-table.tanstack.com/",
  },
  {
    img: Reacti8Image,
    name: "React i18next",
    category: "Utility-First",
    description: "Internationalization for React done right",
    stars: "7.3k",
    license: "MIT",
    url: "https://react.i18next.com/",
  },
  {
    img: ReactHelmetImage,
    name: "React Helmet",
    category: "Utility-First",
    description: "A document head manager for React",
    stars: "16.3k",
    license: "MIT",
    url: "https://github.com/nfl/react-helmet",
  },
  {
    img: ReactHotToastImage,
    name: "React Hot Toast",
    category: "Utility-First",
    description: "Smoking hot React notifications",
    stars: "7.1k",
    license: "MIT",
    url: "https://react-hot-toast.com/",
  },

  // start here
];
