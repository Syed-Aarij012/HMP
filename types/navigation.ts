export type NavMenuItem = {
  id: string;
  label: string;
  href?: string;
  className?: string;
  children?: NavMenuItem[];
};
