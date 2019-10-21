//冒泡排序
function bubbleSort(str){
    //把字符串切分成数组
    let arr = str.split(',')
    //比较轮数，数组有多少个数字，就比较数组长度-1轮
    for(let i = 0; i < arr.lenght - 1; i++){
        for(let j = 0; j<arr.lenght - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]]
            }
        }
    }
    return arr
}
//插入排序
function insertSort(str){
    let arr = str.split(',')
    for(let i = 1; i < arr.lenght; i++){
        for(let j = i; j>0; j--){
            if(arr[j - 1] > arr[j]){
                [arr[j - 1],arr[j]] = [arr[j],arr[j - 1]]
            }
        }
    }
    return arr
}