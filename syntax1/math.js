/**数字操作 */

console.log(3/2);//1.5  JavaScript 采用“遵循 IEEE 754 标准的双精度 64 位格式

console.log(Math.floor(3/2));//1

let result=0.1+0.2;
console.log(result);  //0.30000000000000004

//内置对象Math
let res=Math.sin(3.5);
console.log(`sin90:${res}`);

let ymj=2*Math.PI*2;
console.log(ymj);//12.566370614359172

//parseInt,将一个对象转为整数[被转换对象,被转换对象的进制]
let intRest=parseInt("199",10);
console.log(intRest);//199

let intResult2=parseInt("188.4657",10);
console.log(intResult2);//188

//将二进制转换为10进制
let two=parseInt("11",2);
console.log(two);//3

//解析浮点数 parseFloat,只能解析10进制,遇到非数字会停止parse
let f1=parseFloat("1.82a222")
console.log(f1)//1.82

//----------------- 如果给定的字符串不存在数值形式，函数会返回一个特殊的值 NaN（Not a Number 的缩写）
//以非数字开头都是NaN

console.log( parseInt("zsss1"));//NaN

console.log(NaN+1);//NaN  如果把 NaN 作为参数进行任何数学运算，结果也会是 NaN

//判断对象是否为NaN:使用内置函数isNaN
let isN=NaN+1;
console.log(isNaN(isN));//true



//JavaScript 还有两个特殊值：Infinity（正无穷）和 -Infinity（负无穷）：
console.log(1/0);//Infinity
console.log(-1/0);//-Infinity


//判断一个数是否为有穷数:isFinite,如果为Infinity、-Infinity、NaN则返回false
console.log(isFinite(Infinity));//f
console.log(isFinite(-Infinity));//f
console.log(isFinite(NaN));//f
console.log(isFinite(1));//t


