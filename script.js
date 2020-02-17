 
 var btn = document.getElementById('btn1');
 btn.addEventListener("click",myFunction);
 var c = 0;  
    function myFunction() 
    {
       var box = document.getElementById('box').value;
       var col = document.getElementById('box11').value;
        for (let i = 0; i < box; i++) 
        {
            c++;
            var btn = document.createElement("div");
            btn.id="div2";
            btn.innerHTML = c;
            btn.style="background-color:"+col+";"
            document.body.appendChild(btn);
        }
    }