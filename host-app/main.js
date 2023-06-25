import { loadScripts } from "./load-scripts"
document.querySelector('#app').innerHTML = `
  <div>
    <header-react></header-react>
    <footer-react></footer-react>
  </div>
`;
loadScripts();
