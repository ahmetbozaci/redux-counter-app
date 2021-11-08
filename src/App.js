import {Provider} from 'react-redux';
import store from './redux/configureStore';
import { Counter, Buttons } from './components';
function App() {
  return (
    <Provider store={store} >
      <Counter />
      <Buttons />
    </Provider>
  );
}

export default App;
