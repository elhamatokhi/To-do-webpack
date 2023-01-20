import './style.css';
import todoActions from './modules/UI.js';
import Crud from './modules/storage.js';

todoActions();

const todoClass = new Crud();
todoClass.updateUI();
