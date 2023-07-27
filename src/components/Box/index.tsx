import CheckImage from 'assets/icons/svg/check.svg';

interface BoxProps {
  image: string;
  title: string;
  children: Array<string>;
}

export const Box = ({ image, title, children }: BoxProps) => {
  return (
    <div className="px-2 select-none">
      <div className="item flex flex-col w-fit h-full p-4 sm:p-4 md:p-10 items-center text-center border border-solid border-primary rounded-xl">
        <img src={image} className="w-[60px] sm:w-[80px] mb-4 sm:mb-6" />
        <div className="font-bold text-lg sm:text-[28px] leading-tight mb-4 sm:mb-6">
          {title}
        </div>
        <ul className="list-none text-left flex flex-col gap-2">
          {children?.map((item, index) => (
            <li key={index} className="flex items-start">
              <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
              <span className="text-base sm:text-[17px] mt-[1px]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
