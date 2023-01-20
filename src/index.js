import './style.css';
// import UI from './modules/UI.js';
import Storage from './modules/storage.js';
import events from './modules/UI.js';

events();

const todoClass = new Storage();
todoClass.updateUI();
