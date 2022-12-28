import LeftView from './containers/left-view';
import MainView from './containers/main-view';

export default function App() {
  return (
    <div className="flex h-full bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-400">
      <LeftView />
      <MainView />
    </div>
  );
}
