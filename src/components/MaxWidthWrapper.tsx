import { FC, ReactNode } from "react";

interface MaxWidthWrapperAbdullahProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper: FC<MaxWidthWrapperAbdullahProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
