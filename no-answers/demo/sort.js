var arr1 = [10, 8, 1, 4, 9, 2, -1, -2, 0];
var arr2 = [10, 8, 1, 4, 9, 2, -1, -2, 0];
var arr3 = [10, 8, 1, 4, 9, 2, -1, -2, 0];
var arr4 = [10, 8, 1, 4, 9, 2, -1, -2, 0];
var arr5 = [10, 8, 1, 4, 9, 2, -1, -2, 0];
var arr6 = [10, 8, 1, 4, 9, 2, -1, -2, 0];
var arr7 = [10, 8, 1, 4, 9, 2, -1, -2, 0];

/*
 * 冒泡排序
 * 时间复杂度n的平方
 *
 */
function bubbleSort(arr) {
  for(var i = 0;i < arr.length - 1;i++) {
    for(var j = i + 1;j < arr.length;j++) {
      if(arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i]= arr[j];
        arr[j]= temp;
      }
    }
  }
  return arr;
}

/*
 * 选择排序
 * 时间复杂度n的平方
 *
 */
function selectSort(arr) {
  for(var i = 0;i < arr.length - 1;i++) {
    var minIndex = i;
    for(var j = i;j < arr.length;j++) {
      if(arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if(minIndex != i) {
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

/*
 * 插入排序
 * 构造有序区与无序区
 * 左边是有序区
 * 右边是无序区
 * 接下来几步:
 * 1. 保存要被插入的数
 * 2. 保存有序区的最大的数的下标
 * 3. 开始移动
 * 4. 插入
 *
 */
function insertSort(arr) {
  for(var i = 1;i < arr.length;i++) {
    if(arr[i - 1] > arr[i]) {
      var guard = arr[i];
      var j = i - 1;

      while(j >= 0 && arr[j] > guard) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = guard;
    }
  }
  return arr;
}

/*
 * 快速排序
 * 快速排序的思想是使用归并方法
 * 大事化小，小事化了
 *
 */
function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var leftArr = [];
  var rightArr = [];
  for(var i = 0;i < arr.length;i++) {
    if(arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  return leftArr.concat([pivot], rightArr);;
}


console.log("冒泡排序:" + bubbleSort(arr1));
console.log("选择排序:" + selectSort(arr2));
console.log("插入排序:" + insertSort(arr3));
console.log("快速排序:" + quickSort(arr4));
