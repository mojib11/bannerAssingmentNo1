


let ageBtn = document.getElementById('ageBtn');
let inputAge = document.getElementById('ageInput');
let ageValue = inputAge.value;


    if (ageValue>=18)
    { 
      
        ageBtn.addEventListener('click', function (e) {
        
            document.getElementById('adult').classList.remove('d-none');
            
            e.defaultPrevent()
          });

 }else if(ageValue==''){
 
  ageBtn.addEventListener('click', function () {

    document.getElementById('empty').classList.remove('d-none');
    e.defaultPrevent()

  });


 }
  else {
  
    ageBtn.addEventListener('click', function () {
      document.getElementById('child').classList.remove('d-none');
      e.defaultPrevent()
    });



   }






