import LeftView from './containers/LeftView';
import MainView from './containers/MainView';

export default function App() {
  return (
    <div className="flex h-full">
      <LeftView />
      <MainView />
    </div>
  );
}
