interface HeaderProps {
  leftUI?: React.ReactNode;
  rightUI?: React.ReactNode;
  title?: string;
}

const Header = ({ leftUI, rightUI, title }: HeaderProps) => {
  return (
    <header className="w-full h-[46px] flex items-center justify-between">
      <div className="flex justify-center items-center min-w-[64px]">
        {leftUI}
      </div>
      <h1 className="text-hl font-bold">{title}</h1>
      <div className="flex justify-center items-center min-w-[64px]">
        {rightUI}
      </div>
    </header>
  );
};

export default Header;
