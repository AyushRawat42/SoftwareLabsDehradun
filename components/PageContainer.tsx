import type { ElementType, ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/**
 * Reusable layout wrapper enforcing strict mobile scroll constraint and
 * concise, balanced page heights across all viewports.
 * Tailwind specs:
 * w-full min-h-[calc(100vh-80px)] py-8 px-4 sm:px-6 md:px-12 flex flex-col justify-between max-w-7xl mx-auto overflow-hidden
 */
export default function PageContainer({
  children,
  className = '',
  as: Component = 'main',
}: PageContainerProps) {
  return (
    <Component
      className={`w-full min-h-[calc(100vh-80px)] py-8 px-4 sm:px-6 md:px-12 flex flex-col justify-between max-w-7xl mx-auto overflow-hidden ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
