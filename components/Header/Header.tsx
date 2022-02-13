import { Menu } from './Menu';
import { Settings } from './Settings';
import { Title } from './Title';

export const Header: React.FC = () => {
  return (
    <header className="px-6 pb-12 font-jost antialiased">
      <nav className="relative z-50 h-24 select-none">
        <div className="flex h-24 flex-wrap items-center justify-between border-b border-gray-200 px-2 font-medium">
          <div className="flex h-full w-1/4 items-center pr-4">
            <Title />
          </div>
          <div className="w-1/3">
            <Menu />
          </div>
          <div className="flex w-1/4 justify-end">
            <Settings />
          </div>
        </div>
      </nav>
    </header>
  );
};
