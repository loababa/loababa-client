interface HeaderProps {
  leftUI?: React.ReactNode;
  rightUI?: React.ReactNode;
  title?: string;
}

const Header = ({ leftUI, rightUI, title }: HeaderProps) => {
  return (
    <header className="w-full max-h-[70px] py-[23px] px-[20px] flex items-center justify-between">
      <div className="flex justify-center items-center min-w-[32px]">
        {leftUI}
      </div>
      <h1 className="text-hl font-bold">{title}</h1>
      <div className="flex justify-center items-center min-w-[32px]">
        {rightUI}
      </div>
    </header>
  );
};

export default Header;
