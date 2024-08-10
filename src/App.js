import { ConfigProvider } from 'antd';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#495E57'
        }
      }} >
      <Routes />

      </ConfigProvider>
    </div>
  );
}

export default App;
