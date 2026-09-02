declare module "wow.js" {
  interface WOWConfig {
    boxClass?: string;
    animateClass?: string;
    offset?: number;
    mobile?: boolean;
    live?: boolean;
    callback?: (element: HTMLElement) => void;
    scrollContainer?: string | HTMLElement | null;
  }

  export default class WOW {
    constructor(config?: WOWConfig);
    init(): void;
    sync(): void;
    stop(): void;
  }
}
