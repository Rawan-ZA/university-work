
    function forceAttack(){
      var enter_pass = document.getElementById('password').value;
      var pass = Math.round(Math.random()*100000+1);
      const start = Date.now();
     for (let i = 0; i < 99999; i++){
       if(enter_pass != pass || enter_pass.length != '5'){
        alert('Password is Wrong try again');
        var enter_pass = document.getElementById('password').value = '';
        window.location ='index.html';
        break;
       }
       else if(enter_pass == pass ){
        alert('Password is true login  seccuss');
        break;
      }
        }
      const stop = Date.now();
      alert(`Time Taken to  matching password =  ${Math.round((stop - start)/1000)}  seconds`); 
        }

        // call function when user click in button
        var submit = document.getElementById('submit');
        submit.addEventListener('click', ()=>{ 
          forceAttack();
        });
       

     
