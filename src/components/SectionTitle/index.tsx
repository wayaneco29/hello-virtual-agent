import { HtmlHTMLAttributes } from 'react';
import classNames from 'classnames';

export const SectionTitle = ({
  className,
  children,
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames(
        'text-3xl',
        'sm:text-4xl',
        'md:text-h1 leading-tight',
        className
      )}
    >
      {children}
    </div>
  );
};
