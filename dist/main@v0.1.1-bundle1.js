(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{24:function(a,p,c){var d=c(25);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);(0,c(1).default)("data-quickpaper-9cfd640a",d,!0)},25:function(a,p,c){(a.exports=c(0)(!1)).push([a.i,"",""])},28:function(a,p,c){"use strict";c.r(p);var d={};c(24);d.render=function(a){return a("div",{quickpaper:"","data-quickpaper-9cfd640a":""},[a("div",{class:"doc-view",id:"root-view","data-quickpaper-9cfd640a":""},[a("header",{id:"fixed-top","data-quickpaper-9cfd640a":""},["动态规划"]),a("h1",{id:"fixed-sfsx","data-quickpaper-9cfd640a":""},["算法思想"]),a("p",{"data-quickpaper-9cfd640a":""},["基本的思想也是将待解问题分解称若干个子问题，先求解子问题，然后从这些子问题的解得到原问题的解。"]),a("p",{"data-quickpaper-9cfd640a":""},["但与分治法不同的是，子问题往往不是互相独立的，可能存在需要重复求解的子问题，这点非常重要。由此，我们在求解一个子问题的时候会记录其解，下次遇到类似的问题，先去查一下表，如果已经有了解，直接使用，否则再计算后进行登记。"]),a("p",{"data-quickpaper-9cfd640a":""},["通常可以按以下步骤设计算法："]),a("ul",{"data-quickpaper-9cfd640a":""},[a("li",{"data-quickpaper-9cfd640a":""},["（1）找出最优解的性质，并刻画其结构性质。"]),a("li",{"data-quickpaper-9cfd640a":""},["（2）递归地定义最优值。"]),a("li",{"data-quickpaper-9cfd640a":""},["（3）以自底向上的方式计算出最优值。"]),a("li",{"data-quickpaper-9cfd640a":""},["（4）根据计算最优值时得到的信息，构造最优解。"])]),a("p",{"data-quickpaper-9cfd640a":""},["可以看出来，求解的规模是从小到大进行的，这意味着所有的子问题都会被求解一遍。而在有时候，比如我们可能只是需要一个解，那也可以考虑从大到小进行，也就是",a("span",{class:"important","data-quickpaper-9cfd640a":""},["备忘录算法"]),"。"]),a("p",{"data-quickpaper-9cfd640a":""},["一般来说，如果一个问题的所有子问题都至少要解一次时，用动态规划比备忘录要好，因为此时动态规划没有任何多余的计算。当子问题中部分可不必求解时，用备忘录则更好。"]),a("h1",{id:"fixed-jzlcwt","data-quickpaper-9cfd640a":""},["矩阵连乘问题"]),a("p",{"data-quickpaper-9cfd640a":""},["给定n个矩阵{A",a("sub",{"data-quickpaper-9cfd640a":""},["1"]),",A",a("sub",{"data-quickpaper-9cfd640a":""},["2"]),",A",a("sub",{"data-quickpaper-9cfd640a":""},["3"]),",...,A",a("sub",{"data-quickpaper-9cfd640a":""},["n"]),"},其中A",a("sub",{"data-quickpaper-9cfd640a":""},["i"]),"和A",a("sub",{"data-quickpaper-9cfd640a":""},["i+1"]),"是可乘的，i=1,2,...,n-1。↵            我们知道，这n个矩阵相乘，由于矩阵对乘法满足结合律，所以可以有很多种乘法，现在，我们希望知道哪一种相乘的方式运算的次数最少。"]),a("p",{"data-quickpaper-9cfd640a":""},["采用动态规划，规模从小到大，整体是思路就是："]),a("ul",{"data-quickpaper-9cfd640a":""},[a("li",{"data-quickpaper-9cfd640a":""},["（1）对规模为1和2的进行初始化，直接表中登记。"]),a("li",{"data-quickpaper-9cfd640a":""},["（2）求解规模为n的时候，规模1~规模n-1的已经在表中有了解，由此，依次求解在第一个矩阵后切割、第二个矩阵后切割、...、第n-1个矩阵后切割的求解步骤，并得出局部最优解登记到表中。"]),a("li",{"data-quickpaper-9cfd640a":""},["（3）不断的扩大规模，直到问题解决。"]),a("li",{"data-quickpaper-9cfd640a":""},["（4）根据表中的记录，整理出最优值和最优解。"])]),a("p",{"data-quickpaper-9cfd640a":""},["完整的代码请",a("a",{target:"_blank",class:"link",href:"https://github.com/hai2007/algorithm.js/blob/master/workbook/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/no1-%E7%9F%A9%E9%98%B5%E8%BF%9E%E4%B9%98%E9%97%AE%E9%A2%98.js","data-quickpaper-9cfd640a":""},["点击此处"]),"进行查看。"]),a("h1",{id:"fixed-zcggzxl","data-quickpaper-9cfd640a":""},["最长公共子序列"]),a("p",{"data-quickpaper-9cfd640a":""},["给定两个字符串X和Y，而另一字符串Z，同时是X和Y的子串，现在已知X和的Y，求解最大长度的Z。"]),a("p",{"data-quickpaper-9cfd640a":""},["根据备忘录算法，可以这样构造最优子结构。"]),a("p",{"data-quickpaper-9cfd640a":""},["设序列X={x",a("sub",{"data-quickpaper-9cfd640a":""},["1"]),",x",a("sub",{"data-quickpaper-9cfd640a":""},["2"]),",...,x",a("sub",{"data-quickpaper-9cfd640a":""},["m"]),"}↵            和另一序列Y={y",a("sub",{"data-quickpaper-9cfd640a":""},["1"]),",y",a("sub",{"data-quickpaper-9cfd640a":""},["2"]),",...,y",a("sub",{"data-quickpaper-9cfd640a":""},["n"]),"}的最长公共子序列为Z={z",a("sub",{"data-quickpaper-9cfd640a":""},["1"]),",z",a("sub",{"data-quickpaper-9cfd640a":""},["2"]),",...,z",a("sub",{"data-quickpaper-9cfd640a":""},["k"]),"}，则："]),a("ul",{"data-quickpaper-9cfd640a":""},[a("li",{"data-quickpaper-9cfd640a":""},["（1）x",a("sub",{"data-quickpaper-9cfd640a":""},["m"]),"=y",a("sub",{"data-quickpaper-9cfd640a":""},["n"]),"，则z",a("sub",{"data-quickpaper-9cfd640a":""},["k"]),"=x",a("sub",{"data-quickpaper-9cfd640a":""},["m"]),"=y",a("sub",{"data-quickpaper-9cfd640a":""},["n"]),"，且Z",a("sub",{"data-quickpaper-9cfd640a":""},["k-1"]),"是X",a("sub",{"data-quickpaper-9cfd640a":""},["m-1"]),"和Y",a("sub",{"data-quickpaper-9cfd640a":""},["n-1"]),"的最长公共子序列。"]),a("li",{"data-quickpaper-9cfd640a":""},["（2）x",a("sub",{"data-quickpaper-9cfd640a":""},["m"]),"≠y",a("sub",{"data-quickpaper-9cfd640a":""},["n"]),"且z",a("sub",{"data-quickpaper-9cfd640a":""},["k"]),"≠x",a("sub",{"data-quickpaper-9cfd640a":""},["m"]),"，则Z是X",a("sub",{"data-quickpaper-9cfd640a":""},["m-1"]),"和Y的最长公共子序列。"]),a("li",{"data-quickpaper-9cfd640a":""},["（3）x",a("sub",{"data-quickpaper-9cfd640a":""},["m"]),"≠y",a("sub",{"data-quickpaper-9cfd640a":""},["n"]),"且z",a("sub",{"data-quickpaper-9cfd640a":""},["k"]),"≠y",a("sub",{"data-quickpaper-9cfd640a":""},["n"]),"，则Z是X和Y",a("sub",{"data-quickpaper-9cfd640a":""},["n-1"]),"的最长公共子序列。"])]),a("p",{"data-quickpaper-9cfd640a":""},["其中，X",a("sub",{"data-quickpaper-9cfd640a":""},["m-1"]),"={x",a("sub",{"data-quickpaper-9cfd640a":""},["1"]),",x",a("sub",{"data-quickpaper-9cfd640a":""},["2"]),",...,x",a("sub",{"data-quickpaper-9cfd640a":""},["m-1"]),"}，↵            Y",a("sub",{"data-quickpaper-9cfd640a":""},["n-1"]),"={y",a("sub",{"data-quickpaper-9cfd640a":""},["1"]),",y",a("sub",{"data-quickpaper-9cfd640a":""},["2"]),",...,y",a("sub",{"data-quickpaper-9cfd640a":""},["n-1"]),"}，↵            Z",a("sub",{"data-quickpaper-9cfd640a":""},["k-1"]),"={z",a("sub",{"data-quickpaper-9cfd640a":""},["1"]),",z",a("sub",{"data-quickpaper-9cfd640a":""},["2"]),",...,z",a("sub",{"data-quickpaper-9cfd640a":""},["k-1"]),"}。"]),a("p",{"data-quickpaper-9cfd640a":""},["完整的代码请",a("a",{target:"_blank",class:"link",href:"https://github.com/hai2007/algorithm.js/blob/master/workbook/%E5%A4%87%E5%BF%98%E5%BD%95%E7%AE%97%E6%B3%95/no1-%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%AD%90%E5%BA%8F%E5%88%97.js","data-quickpaper-9cfd640a":""},["点击此处"]),"进行查看。"])])])};p.default=d}}]);