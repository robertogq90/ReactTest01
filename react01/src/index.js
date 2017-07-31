import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserList from './components/UserList'

let empleados = [  
  { idUser: 1, name: "Laya Dueñas", title: "CEO" },
  { idUser: 2, name: "Astryd Vallés", title: "CMO" },
  { idUser: 3, name: "Shantell Meza", title: "CFO" },
  { idUser: 4, name: "Sergio Ocampo", title: "CTO" },
  { idUser: 5, name: "Ares Jiménez", title: "Art Director" },
  { idUser: 6, name: "Marta Pérez", title: "Frontend Dev" },
  { idUser: 7, name: "Ellen Balderas", title: "Digital Strategist" },
  { idUser: 8, name: "Cynthia Valentín", title: "Backend Dev" },
  { idUser: 9, name: "Bernard Jung", title: "DevOps Engineer" }
]

ReactDOM.render(<UserList listado={empleados} />, document.getElementById('root'));
registerServiceWorker();
