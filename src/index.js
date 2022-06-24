import ReactDOM from 'react-dom';

import './index.css';
import App from './App'; 


//the contents of div element (id = root) is being replaced by App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
 