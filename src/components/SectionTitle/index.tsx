import { HtmlHTMLAttributes } from 'react';
import classNames from 'classnames';

export const SectionTitle = ({
  className,
  children,
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames(
        'text-h3',
        'sm:text-h2',
        'md:text-h1 leading-tight',
        className
      )}
    >
      {children}
    </div>
  );
};
