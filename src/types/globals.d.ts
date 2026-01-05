// Global CSS module declarations
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

// For side-effect imports (like global CSS)
declare module "*.css" {
  const content: any;
  export = content;
}
