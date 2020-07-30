
window.onload = init;

function init(){
st = "";
var inputs = document.getElementsByTagName("input");

for (var i = 0 ; i<inputs.length ; i++){
	
	inputs[i].onclick = function(eventObj){
	 
			 var display = document.getElementById("display");
			 var eve = eventObj.target;
			 if (eve.value == "clear")
				 clear();
			 else if(eve.value == "DEL")
				 del();
			 else if(eve.value == "=")
				 calculate();
			 else
			 st = st + eve.value;
			 display.innerHTML = st;
	 
	}
  }
}

function clear(){
	
	st = "";
}

function del(){
	
	st = st.slice(0,-1);
}

function calculate(){
	
	var flag = Number(st);
	
	if(!isNaN(flag))
		st = "Select an operation";
	else if(st.indexOf("%") != -1){
		
		var temp = st.split("%");
		var mod = Number(temp[0])%Number(temp[1]);
		mod = mod.toString();
		st = mod;
		
		}
	else{
		
		var sum;
		var arr1 = st.split(/[\+\*\/-]+/);
		var arr2 = st.split(/[\d"\. ]*/);
		arr2.pop();
		arr2.shift();
		

		while(arr2.length > 0){

		var div = arr2.indexOf("/");
		var mul = arr2.indexOf("*");
		var add = arr2.indexOf("+");
		var sub = arr2.indexOf("-");
		if(div != -1){
			
			sum = Number(arr1[div])/Number(arr1[div+1]);
			arr1[div] = sum;
			arr1.splice(div+1,1);
			arr2.splice(div,1);
			
		}
		if(mul != -1){
			sum = Number(arr1[mul])*Number(arr1[mul+1]);
			arr1[mul] = sum;
			arr1.splice(mul+1,1);
			arr2.splice(mul,1);
			
		}

		if(add != -1){
			
			sum = Number(arr1[add]) + Number(arr1[add+1]);
			arr1[add] = sum;
			arr1.splice(add+1,1);
			arr2.splice(add,1);
			
		}


		if(sub != -1){
			sum = Number(arr1[sub])- Number(arr1[sub+1]);
			arr1[sub] = sum;
			arr1.splice(sub+1,1);
			arr2.splice(sub,1);
		  }
      }
	  sum = sum.toString();
	  st = sum;
	}
}


