
/*************************** [bundle] ****************************/
// Original file:./src/backtracking-method.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('48');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('49');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-a28adb6c":""},[createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-a28adb6c":""},[createElement('header',{"id":"fixed-top","data-quickpaper-a28adb6c":""},["回溯法"]),createElement('h1',{"id":"fixed-sfsx","data-quickpaper-a28adb6c":""},["算法思想"]),createElement('p',{"data-quickpaper-a28adb6c":""},["说的直白点就是深度优先方式系统搜索问题的算法。"]),createElement('p',{"data-quickpaper-a28adb6c":""},["它在问题的解空间树中，按深度优先策略，从根结点出发搜索解空间树。算法搜索至解空间树的任一结点时，先判断该结点是否包含问题的解，如果肯定不包含，则跳过对以该结点为根的子树的搜索，逐层向其祖先结点回溯，否则，进入该子树，继续按深度优先策略搜索。"]),createElement('p',{"data-quickpaper-a28adb6c":""},["回溯法求问题的所有解时，要回溯到根，且根结点多所有子树都被搜索遍才结束，而在求一个解时，只有搜索到问题的一个解就可结束。"]),createElement('h1',{"id":"fixed-01bbwt","data-quickpaper-a28adb6c":""},["0-1背包问题"]),createElement('p',{"data-quickpaper-a28adb6c":""},["给定n种物品和一背包，物品i的重量是w",createElement('sub',{"data-quickpaper-a28adb6c":""},["i"]),"，其价值为v",createElement('sub',{"data-quickpaper-a28adb6c":""},["i"]),"，背包的容量为C。问：应该如何选择装入背包的物品，使得装入背包中物品的总价值最大？"]),createElement('p',{"data-quickpaper-a28adb6c":""},["每个货物选择或者不选择可以标记为1和0，由此就可以构造出一棵二叉树，1是左树，0是右树，按照如下几条规则遍历："]),createElement('ul',{"data-quickpaper-a28adb6c":""},[createElement('li',{"data-quickpaper-a28adb6c":""},["（1）面对一个结点，先考虑左树是否可行，如果可以，进入当前结点的左树，如果不可以进入右树。"]),createElement('li',{"data-quickpaper-a28adb6c":""},["（2）遍历的时候如何到达了一个叶子结点，和当前取得的最大值进行比较，判断是否是更好的选择。"]),createElement('li',{"data-quickpaper-a28adb6c":""},["（3）到达一个叶子结点之后，就需要回溯，回溯的时候，如果发现是从右树回溯的，继续，直到从左树回溯或到达了根。"]),createElement('li',{"data-quickpaper-a28adb6c":""},["（4）回溯停止的时候，如果到达了根且上一次是从右树回溯的，遍历结束，否则，进入右树继续遍历。"])]),createElement('p',{"data-quickpaper-a28adb6c":""},["在遍历树图中，我们会发现，遍历子树和树是类似的，由此，就可以设计一个递归的算法实现："]),createElement('pre',{"q-code":"","data-quickpaper-a28adb6c":""},["function doCalc(deep,_volume){↵↵    // 先判断左树是否可行↵    if (_volume >= weight[index - 1]) {↵        var _sub_1_result = doCalc(index + 1, _volume - weight[index - 1]);↵    }↵↵    // 再计算右树的值↵    var _sub_0_result = doCalc(index + 1, _volume);↵↵    // 最后，选择其中最佳的↵    return _sub_1_result>_sub_0_result?'1':'0';↵}"]),createElement('h2',{"id":"fixed-01bbwt-xcdg","data-quickpaper-a28adb6c":""},["消除递归"]),createElement('p',{"data-quickpaper-a28adb6c":""},["递归的写法虽然简单，但在空间上总是有点浪费，其实，可以借助一个数组来记录当前路径从而消除递归。"]),createElement('p',{"data-quickpaper-a28adb6c":""},["一个一维数组，值是0或1，分别表示对应层次选择的是左树还是右树，还有一个deep表示当前的遍历层次。进入树的时候，更新数组中对应的值，回溯的时候，通过查看值即可知道是从左树还是右树回溯的，而在到达叶子结点的时候，通过当前数组的记录，也可以构建出当前值的解。"]),createElement('p',{"data-quickpaper-a28adb6c":""},["完整的代码请",createElement('a',{"target":"_blank","class":"link","href":"https://github.com/agile-contrib/algorithm-practice/tree/master/6.【回溯法】0-1背包问题","data-quickpaper-a28adb6c":""},["点击此处"]),"进行查看。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/backtracking-method.paper?QuickPaper&type=script&lang=js&hash=a28adb6c
/*****************************************************************/
window.__etcpack__bundleSrc__['48']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/backtracking-method.paper?QuickPaper&type=style&lang=css&hash=a28adb6c
/*****************************************************************/
window.__etcpack__bundleSrc__['49']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
