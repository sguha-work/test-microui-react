export function loadScripts() {
  let scriptsSrc = [
    
  ];
  scriptsSrc.forEach((src)=>{
    const script = document.createElement('script');
    script.setAttribute('src',src);
    script.setAttribute('type','text/javascript');
    document.body.appendChild(script);
  });
  
}
