//九九的空表格
str = '<table border="1">'
for(let i=1;i<10;++i){
    str +='<tr>'
    for (var j=1;j<=9;++j){
        //;拼接单元格
        str += '<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</table>'
//设置div的html文档内容
document.getElementById('table1').innerHTML = str
//倒九九乘法表的空表
str1 = '<table border="1">'
for(let i=9;i>0;--i){
    str1 +='<tr>'
    for (var j=i;j>0;--j){
        str1 += '<td>&nbsp;</td>'
    }
    str1 += '</tr>'
}
str1 += '</table>'
//设置div的html文档内容
document.getElementById('table2').innerHTML = str1
//倒九九乘法表

str1 = '<table border="1">'
for(let i=9;i>0;--i){
    str1 +='<tr>'
    for (var j=i;j>0;--j){
        str1 += '<td>' + j +'*'+ i + '=' + j*i  + '</td>'
    }
    str1 += '</tr>'
}
str1 += '</table>'
//设置div的html文档内容
document.getElementById('table3').innerHTML = str1