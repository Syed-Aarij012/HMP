type Spacing = {
  height: number;
  paddingTop: string;
  paddingBottom: string;
  marginTop: string;
  marginRight: string;
  marginBottom: string;
  marginLeft: string;
};

const pendingTimers = new WeakMap<HTMLElement, number>();

function buildTransition(duration: number) {
  return [
    `height ${duration}ms ease`,
    `padding-top ${duration}ms ease`,
    `padding-bottom ${duration}ms ease`,
    `margin-top ${duration}ms ease`,
    `margin-right ${duration}ms ease`,
    `margin-bottom ${duration}ms ease`,
    `margin-left ${duration}ms ease`,
  ].join(", ");
}

function isCollapsed(element: HTMLElement) {
  return element.dataset.slideToggle !== "open";
}

function clearPendingTransition(element: HTMLElement) {
  const timer = pendingTimers.get(element);
  if (timer) {
    window.clearTimeout(timer);
    pendingTimers.delete(element);
  }
}

function setCollapsed(element: HTMLElement) {
  element.dataset.slideToggle = "closed";
  element.style.display = "block";
  element.style.height = "0";
  element.style.paddingTop = "0";
  element.style.paddingBottom = "0";
  element.style.marginTop = "0";
  element.style.marginRight = "0";
  element.style.marginBottom = "0";
  element.style.marginLeft = "0";
  element.style.visibility = "hidden";
  element.style.overflow = "hidden";
}

function setExpanded(element: HTMLElement) {
  element.dataset.slideToggle = "open";
  element.style.display = "block";
  element.style.height = "auto";
  element.style.paddingTop = "";
  element.style.paddingBottom = "";
  element.style.marginTop = "";
  element.style.marginRight = "";
  element.style.marginBottom = "";
  element.style.marginLeft = "";
  element.style.visibility = "visible";
  element.style.overflow = "";
  element.style.transition = "";
}

function measureExpanded(element: HTMLElement): Spacing {
  element.style.display = "block";
  element.style.visibility = "hidden";
  element.style.height = "auto";
  element.style.paddingTop = "";
  element.style.paddingBottom = "";
  element.style.marginTop = "";
  element.style.marginRight = "";
  element.style.marginBottom = "";
  element.style.marginLeft = "";
  element.style.overflow = "hidden";

  const style = window.getComputedStyle(element);

  return {
    height: element.offsetHeight,
    paddingTop: style.paddingTop,
    paddingBottom: style.paddingBottom,
    marginTop: style.marginTop,
    marginRight: style.marginRight,
    marginBottom: style.marginBottom,
    marginLeft: style.marginLeft,
  };
}

function scheduleTransitionEnd(
  element: HTMLElement,
  onComplete: () => void,
  duration: number,
) {
  clearPendingTransition(element);

  const timer = window.setTimeout(() => {
    pendingTimers.delete(element);
    onComplete();
  }, duration + 50);

  pendingTimers.set(element, timer);
}

function runTransition(
  element: HTMLElement,
  applyStart: () => void,
  applyEnd: () => void,
  onComplete: () => void,
  duration: number,
) {
  clearPendingTransition(element);

  applyStart();
  element.style.transition = "none";
  void element.offsetHeight;

  element.style.transition = buildTransition(duration);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      applyEnd();
      scheduleTransitionEnd(element, onComplete, duration);
    });
  });
}

export function slideToggle(element: HTMLElement, duration = 300) {
  if (isCollapsed(element)) {
    const target = measureExpanded(element);

    runTransition(
      element,
      () => {
        setCollapsed(element);
        element.style.visibility = "visible";
      },
      () => {
        element.style.height = `${target.height}px`;
        element.style.paddingTop = target.paddingTop;
        element.style.paddingBottom = target.paddingBottom;
        element.style.marginTop = target.marginTop;
        element.style.marginRight = target.marginRight;
        element.style.marginBottom = target.marginBottom;
        element.style.marginLeft = target.marginLeft;
      },
      () => setExpanded(element),
      duration,
    );

    return;
  }

  const style = window.getComputedStyle(element);

  runTransition(
    element,
    () => {
      element.style.height = `${element.offsetHeight}px`;
      element.style.paddingTop = style.paddingTop;
      element.style.paddingBottom = style.paddingBottom;
      element.style.marginTop = style.marginTop;
      element.style.marginRight = style.marginRight;
      element.style.marginBottom = style.marginBottom;
      element.style.marginLeft = style.marginLeft;
      element.style.overflow = "hidden";
      element.style.visibility = "visible";
    },
    () => {
      element.style.height = "0";
      element.style.paddingTop = "0";
      element.style.paddingBottom = "0";
      element.style.marginTop = "0";
      element.style.marginRight = "0";
      element.style.marginBottom = "0";
      element.style.marginLeft = "0";
    },
    () => {
      setCollapsed(element);
      element.style.transition = "";
    },
    duration,
  );
}

export function resetSlideToggleStyles(element: HTMLElement) {
  clearPendingTransition(element);
  delete element.dataset.slideToggle;
  element.style.removeProperty("display");
  element.style.removeProperty("height");
  element.style.removeProperty("padding-top");
  element.style.removeProperty("padding-bottom");
  element.style.removeProperty("margin-top");
  element.style.removeProperty("margin-right");
  element.style.removeProperty("margin-bottom");
  element.style.removeProperty("margin-left");
  element.style.removeProperty("visibility");
  element.style.removeProperty("overflow");
  element.style.removeProperty("transition");
}
