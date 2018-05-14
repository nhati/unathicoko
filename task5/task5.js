(function() {
      var count =1;
      document .getElementById('button').addEventListener('click', funtion(){
      count++

     if(count%2===0) {
         document.getElementById('box').style.backgroundcolor = 'green'
         document.addEventListener('button').innerHTML = "Make red"
    }
    else{
         document.getElementById('box').style.backgroundcolor = 'red'
         document.addEventListener('button').innerHTML = "Make green"
      }
})
})()
