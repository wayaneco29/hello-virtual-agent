import classNames from 'classnames';
import { ButtonHTMLAttributes, useMemo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  variant?: 'contained' | 'outline';
}
export const Button = ({
  rounded,
  className,
  children,
  variant,
  ...props
}: ButtonProps) => {
  const buttonStyle = useMemo(() => {
    let style = '';
    if (rounded) {
      style += 'rounded-full ';
    }

    if (variant) {
      style +=
        variant === 'contained'
          ? 'bg-primary '
          : 'border-2 border-solid border-primary ';
    }

    return style;
  }, [rounded]);

  console.log(buttonStyle);
  return (
    <button
      className={classNames('py-2 px-4', buttonStyle, className)}
      {...props}
    >
      {children}
    </button>
  );
};
