
																			// HOMEWORK #4 //

//1.//Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.  So if we call your function with triangleStars(4)
const f = function (num, str){
let a = '';
	while(num>0){
		a = a+str;
	
	num--;
	} 
	return a;
};

const triangleStars = function(num){

let t = 0;
let x = num*2 -1

while (t<num){
	console.log(f(t,' ') + f(x,'*'));
	x = x -2;
	t++;
}

};
triangleStars(4);

//2.// Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays. Example:  multiToSingle([[1, 2, 3], [4, 5, 6]]);  // will return [1, 2, 3, 4, 5, 6

const multiToSingle = function(array){
let newarr = [];
let i = 0;
let j = 0;
while(i<array.length){
	while(j < array[i].length){
		newarr[newarr.length]= array[i][j];
		j++;
	}
	j = 0;
	i++;
}
return newarr;
};
console.log(multiToSingle([[1, 2, 3], [4, 5, 6]]));

//3.// Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.  It returns the smallest number in the given array if the second argument is false.
//Example: findMinMax([4, 2, 66, -44, 8], true); // should return 66
//Example: findMinMax([4, 2, 66, -44, 8], false); // should return -44

const findMinMax = function(array, b){
	let i = 1;
	let n;
	let j=array[0];
	if (b){
		while(i<array.length){
			if (j>=array[i]){j=j;}
			else{j= array[i]}
			i++;
		}		
	}
	else{
		while(i<array.length){
			if (j<=array[i]){j=j;}
			else{j= array[i]}
			i++;
	}
	}
	console.log(j);
};
findMinMax([4, 2, 66, -44, 87], false);

//4.//Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.

//Example: forEach([4, 3, 2], function(val) {
//  console.log(val);
//}); // doing this should result in this in the console:
//4
//3
//2
const forEach = function(a,b){
	let  i =0;
	while(i<a.length){
		b(a[i]);
		i++;
	}
};
forEach([4, 3, 2], function(val) {
  console.log(val);
  });
  
 //5.//  Create a function 'sum' that takes an array of numbers and returns their sum.  Example: sum([4, 3, 2]); // should return 9
 
 const sum= function(arr){
	 let i = 0;
	 let n = 0;
	 while(i<arr.length){
		 n=n+arr[1];
		 i++;
	 }
	 return n;
 };
console.log(sum([4, 3, 2]));


//6.// Write a function 'reverse' that reverses the given string.  

const array =function(str){

	let i = 0;
	let arr = [];
	while(i<str.length){
		arr[arr.length]= str[i];
		i++;
	}
	return arr;	
};

const stringify = function(result){
	let r = result.length-1;
	let v ='';
	while(r>=0){
		v=v+result[r];
		r--;
	}
	return v;
};

console.log(stringify(array('abcd')));


//7.// Create a function called checkerboard using while loop which, given a size in argument, will draw n by n checkerboard on the screen.

function checkboard(num){
    let y=0;
      while (y<num){
        if(y % 2 === 1){
          console.log (" "+merge("* ", num))
        }  
        else{
        console.log (merge("* ", num));
        }
        y++;
      }
    }; 
function merge(str,num){
     let x=0;
     let p="";
     while (x<num){
       p=p+str;
       x++;
     }
     return p;
    };
    
    console.log(checkboard(8));








