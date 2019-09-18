
(function(){
    'use strict';
  
    var btn = document.getElementById('btn');
  
    btn.addEventListener('click', function(){
      var n = Math.random()
      if(n < 0.3){
        this.textContent = 'Japanese'; // 30%
      }else if (n < 0.45){
        this.textContent = 'Italian';  // 30%
      }else if (n < 0.60){
        this.textContent = 'French';  // 30%
      }else if (n < 0.85){
        this.textContent = 'Filipino';  // 30%
      }else{
        this.textContent = 'American';  // 30%
      }
  
    });
    btn.addEventListener('mousedown', function(){
      this.className = 'pushed';
    });
    btn.addEventListener('mouseup', function(){
      this.className = '';
    });
  })();
  