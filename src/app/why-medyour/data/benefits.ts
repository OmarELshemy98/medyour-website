import { 
  InclusiveIcon,
  DigitalIcon,
  UserFriendlyIcon,
  FinancialIcon,
  ConvenientIcon,
  ExtensiveIcon,
  InstantIcon 
} from '@/app/why-medyour/components/icons';
import { BenefitType } from '@/app/why-medyour/types';

export const benefits: BenefitType[] = [
  {
    icon: InclusiveIcon,
    title: ["Inclusive", "Healthcare", "Coverage"],
    description: "Plans are available for all ages, ensuring that individuals and corporations alike receive the care they deserve.",
    color: "#2196F3"  // Blue color for Inclusive icon
  },
  {
    icon: DigitalIcon,
    title: ["Digital", "Transformation"],
    description: "Experience a fully digital healthcare journey with a user-friendly platform that eliminates the need for paper-based processes.",
    color: "#4CAF50"  // Green color for Digital icon
  },
  {
    icon: UserFriendlyIcon,
    title: ["User-Friendly", "Interface"],
    description: "Navigate our platform with ease through an intuitive interface designed for seamless user experience.",
    color: "#FFA726"  // Orange color for User-Friendly icon
  },
  {
    icon: FinancialIcon,
    title: ["Financial", "Flexibility"],
    description: "Manage your healthcare expenses efficiently with our flexible payment options and transparent pricing.",
    color: "#4CAF50"  // Green color for Financial icon
  },
  {
    icon: ConvenientIcon,
    title: ["Convenient", "Online Payment" , "Options"],
    description: "Access healthcare services anytime, anywhere through our comprehensive digital platform.",
    color: "#2196F3"  // Blue color for Convenient icon
  },
  {
    icon: ExtensiveIcon,
    title: ["Extensive", "Provider", "Access"],
    description: "Enjoy hassle-free payment methods across our wide network of providers.",
    color: "#4CAF50"  // Green color for Extensive icon
  },
  {
    icon: InstantIcon,
    title: ["Instant", "Results"],
    description: "Receive lab and diagnostic results directly through the app, enabling quick and informed health decisions.",
    color: "#2196F3"  // Blue color for Instant icon
  }
];