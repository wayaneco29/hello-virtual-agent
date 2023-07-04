import { HtmlHTMLAttributes } from 'react';
import classNames from 'classnames';

interface ContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  parentClassName?: string;
  subParentClassName?: string;
}

export const Container = ({
  id,
  children,
  className,
  parentClassName,
  subParentClassName,
  ...props
}: ContainerProps) => {
  return (
    <section className={classNames('relative', parentClassName)} id={id}>
      <div className={subParentClassName}>
        <div className={classNames('main-wrapper', className)} {...props}>
          {children}
        </div>
      </div>
    </section>
  );
};
