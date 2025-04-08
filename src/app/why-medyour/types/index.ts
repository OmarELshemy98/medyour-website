export interface BenefitType {
  icon: (color: string) => JSX.Element;
  title: string[];
  description: string;
  color: string;
}