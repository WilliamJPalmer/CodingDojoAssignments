// remove duplicates

// function removeDuplicates (arr){
//   var newArr = []
//   var x = 0
//   for (var i = 0; i < arr.length; i++){
//     if(arr[i] != arr[i + 1]){
//       newArr[x] = arr[i];
//       x++;
//     }
//   }
//   return newArr;
// }
// removeDuplicates([1,2,2,3,4,5,5,6,7])
//
// function rfactorial(num){
//   if(num == 1){
//     return 1;
//   }
//   else {
//     return num * rfactorial(num-1);
//   }
// }
// console.log(rfactorial(6));

//===========================================

// function rBinaryStrExp(str){
//   var arr = [];
//   var curr = "";
//   (function helper(str, curr, arr){
//     if(curr.length == str.length){
//       arr.push(curr);
//     }
//     else {
//       helper(str, curr + "0", arr);
//       helper(str, curr + "1", arr);
//     }
//   })(str,curr,arr);
//   return arr;
// }
// console.log(rBinaryStrExp("1,2"));

// function rBinaryStrExp(str){
//   var arr = [];
//   var curr = "";
//   function helper(str, curr, arr){
//     if(curr.length == str.length){
//       arr.push(curr);
//     }
//     else {
//       helper(str, curr + "0", arr);
//       helper(str, curr + "1", arr);
//     }
//   };
//   helper(str, curr, arr);
//   return arr;
// }
// console.log(rBinaryStrExp("AB"));

//
// function binaryStringExpansion(str, substr, arr){
//   return helper(str, "", []);
//   function helper(str, substr, arr){
//     if(!str[substr.length]){
//       arr.push(substr);
//     }
//     else {
//       if(str[substr.length] != "?"){
//         helper(str, substr + str[substr.length], arr)
//       }
//       else {
//         helper(str, substr + "0", arr);
//         helper(str, substr + "1", arr);
//       }
//     }
//     return arr;
//   }
// }
//
// console.log(binaryStringExpansion("??"));

//--------------------------------------------------
//----- r Anagram recursion

// function rAnagram(str){
//   var arr = [];
//   if(str.length < 2){
//     arr.push(str);
//     return arr;
//   }
//   var tempArr = str.split("");
//   helper = function(tempArr, tempStr, arr){
//     if(tempArr.length == 1){
//       arr.push(tempStr + tempArr[0]);
//     }
//     else {
//       for(var i = 0; i < tempArr.length; i ++){
//         var str = tempArr[i];
//         tempArr.splice(i, 1);
//         helper(tempArr, tempStr + str, arr);
//         tempArr.splice(i, 0 , str);
//       }
//     }
//   }
//   helper(tempArr, "", arr);
//   return arr;
// }
// // console.log(rAnagram("CATS"));
// console.log(rAnagram("WILL"));

// //--------------------------------------------------
//
// function stringEncode(str){
//   if(str<2){
//     return str;
//   }
//   var str2 = "";
//   var count = 1;
//   for(var i = 0; i < str.length; i += count){
//     count = 1;
//     for(var j = i + 1; j < str.length; j++){
//       if(str[j] == str[i]){
//         count ++;
//       }
//     }
//     str2 += str[i] + count;
//
//   }
//   return str2;
// }
//
// console.log(stringEncode("aaabbbbbccccccdd"));

// //--------------------------------------------------
//
// function decode(str){
//   var newStr = '';
//   var count = 0;
//   for(var i = 0; i < str.length; i ++){
//     if(i != NaN){
//       count = str[i];
//       newStr += str[i - 1] * count;
//       if((i + 1) != NaN){
//         var tempNum = (str[i] * 10) + (str[i + 1]);
//         newStr += str[i - 1] * tempNum;
//       }
//     }
//   }
//   return newStr;
// }
//
// console.log(decode("a3b2c1d3"));

//-0-255

// function decode(str){
//   var newStr = '';
//   var count = 0;
//   for(var i = 0; i < str.length; i ++){
//     if(i != NaN){
//       count = str[i];
//       // newStr += str[i - 1] * count;
//       if((i + 1) != NaN){
//         var tempNum = (str[i] * 10) + (str[i + 1]);
//         for(var j = 0; j < count; j ++){
//           newStr += str[i - 1];
//         }
//       }
//     }
//   }
//   return newStr;
// }
//
// console.log(decode("a3b2c1d3"));

// function bubbleSort(arr){
//   var temp = 0;
//   var count = 0;
//   while(count < arr.length){
//     for(var i = 0; i < arr.length; i ++){
//       if(arr[i] > arr[i + 1]){
//         temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//     count ++;
//   }
//   return arr;
// }
// console.log(bubbleSort([6,1,3,2,4,8,7,5]));


// function bubbleSort(arr){
//   var temp = 0;
//   for(var i = 0; i < arr.length; i++){
//     for(var x = 0; x < arr.length; x++){
//       if(arr[i] > arr[x]){
//         temp = arr[x];
//         arr[x] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// }


// function bubbleSort(arr){
//   var temp = 0;
//   var count = 0;
//   while(count < arr.length){
//     var flag = false;
//     for(var i = 0; i < arr.length; i ++){
//       if(arr[i] > arr[i + 1]){
//         flag=true
//         temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         console.log(arr);
//       }
//     }
//     count ++;
//     if(flag == false){
//       return arr;
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([6,1,3,2,4,8,7,5]));

// function selectionSort(arr){
//   var temp = 0;
//   for(var A = 0; A < arr.length; A++){
//     var min = A;
//     for(var B = A+1; B < arr.length; B++){
//       if(arr[B] < arr[min]){
//         min = B;
//       }
//     }
//     temp = arr[min];
//     arr[min] = arr[A];
//     arr[A] = temp;
//   }
//   return arr;
// }
//
// console.log(selectionSort([6,14,23,61,78,2004,2,13,662,11]));


function insertionSort(arr){
  for(var A = 1; A < arr.length; A ++){
    var temp = arr[A];
    for(var B = A - 1; B >= 0; B--){
      if(arr[B] > temp){
        arr[B + 1] = arr[B];
        arr[B] = temp;
      }
      else{
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([5,2,9,8,5,3,10,7]));


















//
