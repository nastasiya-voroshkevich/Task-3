function treeSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i = 1 + i) {
      if (Array.isArray(array[i])) {
        sum += treeSum(array[i]);
      } else {
        sum +=array[i];
      }
    }
 /* array.forEach(function(item ,i , array) {
     if (Array.isArray(item)){
      sum += treeSum(item) ;
      } else {           
       sum += item;
      }
    });*/
        return sum;
}

    let a =   [ 5, 7, 
        [ 4, [2], 8, [1,3], 2 ], 
        [ 9, [] ], 
        1, 8, 8
      ];
    console.log('Cумма:' + treeSum(a));




