import classNames from 'classnames';

interface CurveSVGProps {
  position?: string;
  color?: string;
}

export const CurveSVG = ({
  position = 'bottom-0 ',
  color = 'fill-white',
}: CurveSVGProps) => {
  return (
    <svg
      className={classNames('absolute left-0', position, color)}
      viewBox="0 0 1920 139.87"
    >
      <path d="M0,613.82c232.26-24.2,421.46-21.7,551-15,408.01,21.11,593.6,103.04,960,80,175.66-11.05,317.74-41.5,409-65V28.82c-111.48,24.64-287.58,55.77-505,59-316.3,4.71-469.28-53.35-818-73C458.46,7.01,253.37,3.26,0,28.82V613.82Z" />
    </svg>
  );
};
