import logo from './logo.svg';
import './App.css';
import Routers from './Routers';
import { ChatUIProvider } from '@pushprotocol/uiweb';

function App() {
  return (
    <ChatUIProvider env='staging'>
      <Routers />
    </ChatUIProvider>
  );
}

export default App;
