import {Provider} from 'react-redux';
import store from './store';
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
