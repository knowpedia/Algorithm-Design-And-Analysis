(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{30:function(a,e,p){var d=p(31);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);(0,p(1).default)("data-quickpaper-5ea79d69",d,!0)},31:function(a,e,p){(a.exports=p(0)(!1)).push([a.i,"",""])},37:function(a,e,p){"use strict";p.r(e);var d={};p(30);d.render=function(a){return a("div",{quickpaper:"","data-quickpaper-5ea79d69":""},[a("div",{class:"doc-view",id:"root-view","data-quickpaper-5ea79d69":""},[a("header",{id:"fixed-top","data-quickpaper-5ea79d69":""},["分支限界法"]),a("h1",{id:"fixed-sfsx","data-quickpaper-5ea79d69":""},["算法思想"]),a("p",{"data-quickpaper-5ea79d69":""},["对比回溯法就很容易思考，用广度优先的办法，不断扩大当前节点的孩子为当前节点，主要是求解一个最优解，算法相比回溯法要简单些。"]),a("h1",{id:"fixed-zzwt","data-quickpaper-5ea79d69":""},["装载问题"]),a("p",{"data-quickpaper-5ea79d69":""},["有一批共有n个集装箱要装上两艘载重量分别为c",a("sub",{"data-quickpaper-5ea79d69":""},["1"]),"和c",a("sub",{"data-quickpaper-5ea79d69":""},["2"]),"的轮船，其中，集装箱i的重量为w",a("sub",{"data-quickpaper-5ea79d69":""},["i"]),"，且 (w",a("sub",{"data-quickpaper-5ea79d69":""},["1"]),"+↵            w",a("sub",{"data-quickpaper-5ea79d69":""},["2"]),"+...+ w",a("sub",{"data-quickpaper-5ea79d69":""},["n"]),") <= c",a("sub",{"data-quickpaper-5ea79d69":""},["1"]),"+ c",a("sub",{"data-quickpaper-5ea79d69":""},["2"]),"。确定是否有一个合理的装载方案可将这n个集装箱装上这两艘轮船？如果有，找出一种装载方案。"]),a("p",{"data-quickpaper-5ea79d69":""},["我们先尽力的把第一艘轮船装满，越多越好，余下的如果看看第二艘船是否可以装下即可。"]),a("p",{"data-quickpaper-5ea79d69":""},["如何求解第一艘的载重？"]),a("p",{"data-quickpaper-5ea79d69":""},["类似的，每个物品标记0或1表示不装入和装入，也就是会形成一棵二叉树，当然也可以通过回溯法遍历，而这里，我们换个遍历方式。"]),a("p",{"data-quickpaper-5ea79d69":""},["我们可以维护一个数组nodeArray，开始的时候只有一个根结点，然后，按照下面这个方法进行遍历："]),a("ul",{"data-quickpaper-5ea79d69":""},[a("li",{"data-quickpaper-5ea79d69":""},["（1）依次取出所有的结点，判断下一层次对应的货物是否可以装入，如果可以，在数组nodeArray中放回选择了当前货物和没选择当前货物两个结点，否则只放入没选择当前货物的结点。"]),a("li",{"data-quickpaper-5ea79d69":""},["（2）按照上面的方式，逐层深入，直到到达叶子结点时停止。"]),a("li",{"data-quickpaper-5ea79d69":""},["（3）此时，数组nodeArray中都是可行动叶子结点，选择最佳的即可。"])]),a("p",{"data-quickpaper-5ea79d69":""},["完整的代码请",a("a",{target:"_blank",class:"link",href:"https://github.com/hai2007/algorithm.js/blob/master/workbook/%E5%88%86%E6%94%AF%E9%99%90%E7%95%8C%E6%B3%95/no2-%E8%A3%85%E8%BD%BD%E9%97%AE%E9%A2%98.js","data-quickpaper-5ea79d69":""},["点击此处"]),"进行查看。"])])])};e.default=d}}]);