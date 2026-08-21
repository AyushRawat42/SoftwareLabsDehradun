export function scrollToId(id: string, offset = 80) {
  const element = document.getElementById(id);
  if (!element) return;

  const offsetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
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
