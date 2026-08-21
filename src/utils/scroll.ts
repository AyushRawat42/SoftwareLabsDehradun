export function scrollToId(id: string, offset = 88) {
  const element = document.getElementById(id);
  if (!element) return;

  const scroller = getScrollParent(element);
  const elementTop = element.getBoundingClientRect().top;

  if (scroller === window) {
    const top = elementTop + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    return;
  }

  const container = scroller as HTMLElement;
  const top = elementTop - container.getBoundingClientRect().top + container.scrollTop - offset;
  container.scrollTo({ top, behavior: 'smooth' });
}

function getScrollParent(element: HTMLElement): HTMLElement | Window {
  let parent = element.parentElement;

  while (parent && parent !== document.body) {
    const style = window.getComputedStyle(parent);
    const overflowY = style.overflowY;
    const canScroll = overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay';
    if (canScroll && parent.scrollHeight > parent.clientHeight) {
      return parent;
    }
    parent = parent.parentElement;
  }

  return window;
}

type EnquiryListener = (projectType: string) => void;

const listeners = new Set<EnquiryListener>();
let pendingEnquiry: string | null = null;

export function requestEnquiry(projectType: string) {
  pendingEnquiry = projectType;
  listeners.forEach((listener) => listener(projectType));
  scrollToId('contact');
}

export function subscribeEnquiry(listener: EnquiryListener) {
  listeners.add(listener);
  if (pendingEnquiry) {
    listener(pendingEnquiry);
  }
  return () => {
    listeners.delete(listener);
  };
}
