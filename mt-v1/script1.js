 const myKeysValues = window.location.search;
                const urlParams = new URLSearchParams(myKeysValues);
                const param1 = urlParams.get('token');
                if (param1 !== null){
                       sessionStorage.setItem("token-t", param1);
                       
					   setTimeout(function(){
            window.location.href = "run.html";
         }, 1000);
                }
