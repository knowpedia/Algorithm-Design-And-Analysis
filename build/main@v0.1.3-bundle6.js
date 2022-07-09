
/*************************** [bundle] ****************************/
// Original file:./src/branch-and-bound.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('50');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('51');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-03b6f382":""},[createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-03b6f382":""},[createElement('header',{"id":"fixed-top","data-quickpaper-03b6f382":""},["分支限界法"]),createElement('h1',{"id":"fixed-sfsx","data-quickpaper-03b6f382":""},["算法思想"]),createElement('p',{"data-quickpaper-03b6f382":""},["对比回溯法就很容易思考，用广度优先的办法，不断扩大当前节点的孩子为当前节点，主要是求解一个最优解，算法相比回溯法要简单些。"]),createElement('h1',{"id":"fixed-zzwt","data-quickpaper-03b6f382":""},["装载问题"]),createElement('p',{"data-quickpaper-03b6f382":""},["有一批共有n个集装箱要装上两艘载重量分别为c",createElement('sub',{"data-quickpaper-03b6f382":""},["1"]),"和c",createElement('sub',{"data-quickpaper-03b6f382":""},["2"]),"的轮船，其中，集装箱i的重量为w",createElement('sub',{"data-quickpaper-03b6f382":""},["i"]),"，且 (w",createElement('sub',{"data-quickpaper-03b6f382":""},["1"]),"+↵            w",createElement('sub',{"data-quickpaper-03b6f382":""},["2"]),"+...+ w",createElement('sub',{"data-quickpaper-03b6f382":""},["n"]),") <= c",createElement('sub',{"data-quickpaper-03b6f382":""},["1"]),"+ c",createElement('sub',{"data-quickpaper-03b6f382":""},["2"]),"。确定是否有一个合理的装载方案可将这n个集装箱装上这两艘轮船？如果有，找出一种装载方案。"]),createElement('p',{"data-quickpaper-03b6f382":""},["我们先尽力的把第一艘轮船装满，越多越好，余下的如果看看第二艘船是否可以装下即可。"]),createElement('p',{"data-quickpaper-03b6f382":""},["如何求解第一艘的载重？"]),createElement('p',{"data-quickpaper-03b6f382":""},["类似的，每个物品标记0或1表示不装入和装入，也就是会形成一棵二叉树，当然也可以通过回溯法遍历，而这里，我们换个遍历方式。"]),createElement('p',{"data-quickpaper-03b6f382":""},["我们可以维护一个数组nodeArray，开始的时候只有一个根结点，然后，按照下面这个方法进行遍历："]),createElement('ul',{"data-quickpaper-03b6f382":""},[createElement('li',{"data-quickpaper-03b6f382":""},["（1）依次取出所有的结点，判断下一层对应的货物是否可以装入，如果可以，在数组nodeArray中放回选择了当前货物和没选择当前货物两个结点，否则只放入没选择当前货物的结点。"]),createElement('li',{"data-quickpaper-03b6f382":""},["（2）按照上面的方式，逐层深入，直到到达叶子结点时停止。"]),createElement('li',{"data-quickpaper-03b6f382":""},["（3）此时，数组nodeArray中都是可行的叶子结点，选择最佳的即可。"])]),createElement('p',{"data-quickpaper-03b6f382":""},["完整的代码请",createElement('a',{"target":"_blank","class":"link","href":"https://github.com/agile-contrib/algorithm-practice/tree/master/4.【分支限界法】装载问题","data-quickpaper-03b6f382":""},["点击此处"]),"进行查看。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/branch-and-bound.paper?QuickPaper&type=script&lang=js&hash=03b6f382
/*****************************************************************/
window.__etcpack__bundleSrc__['50']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/branch-and-bound.paper?QuickPaper&type=style&lang=css&hash=03b6f382
/*****************************************************************/
window.__etcpack__bundleSrc__['51']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
