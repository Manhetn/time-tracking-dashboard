import './index.css';
import Dashboard from '../../scripts/Dashboard/Dashboard';

const dashboardElem = document.querySelector('.dashboard');

document.addEventListener('DOMContentLoaded', () => {
  new Dashboard(dashboardElem).init();
});
