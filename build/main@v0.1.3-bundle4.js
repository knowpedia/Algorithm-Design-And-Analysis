
/*************************** [bundle] ****************************/
// Original file:./src/greedy-algorithm.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('46');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('47');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-da441338":""},[createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-da441338":""},[createElement('header',{"id":"fixed-top","data-quickpaper-da441338":""},["贪心算法"]),createElement('h1',{"id":"fixed-jbys","data-quickpaper-da441338":""},["基本要素"]),createElement('p',{"data-quickpaper-da441338":""},["算法的主体思路就是每次做的选择都是当前状态下局部最好的选择，这种策略并不总是能获得最优解。"]),createElement('p',{"data-quickpaper-da441338":""},["怎么知道是否可以用贪心算法解此问题，以及能否得到问题的最优解呢？这类问题一般都具有两个重要的性质：",createElement('span',{"class":"important","data-quickpaper-da441338":""},["贪心选择性质"]),"和",createElement('span',{"class":"important","data-quickpaper-da441338":""},["最优子结构性质"]),"。"]),createElement('h2',{"id":"fixed-txxzxz","data-quickpaper-da441338":""},["贪心选择性质"]),createElement('p',{"data-quickpaper-da441338":""},["也就是所求问题的整体最优解可以通过一系列局部最优的选择，即贪心选择来达到。"]),createElement('h2',{"id":"fixed-zuzkgxz","data-quickpaper-da441338":""},["最优子结构性质"]),createElement('p',{"data-quickpaper-da441338":""},["当一个问题的最优解包含其子问题的最优解时，称此问题具有最优子结构性质。"]),createElement('h1',{"id":"fixed-hdapwt","data-quickpaper-da441338":""},["活动安排问题"]),createElement('p',{"data-quickpaper-da441338":""},["设有n个活动的集合{active(1),active(2),...,active(n)}，其中，每个活动都有一个开始和结束时间，需要知道的是，在同一时刻，只有一个活动可以进行，如何安排，可以保证最多的活动个数。"]),createElement('p',{"data-quickpaper-da441338":""},["依据贪心算法的思想，只需要把所有任务的结束时间按照非减序排列，然后，依次选择可行且最早结束的活动即可："]),createElement('pre',{"q-code":"","data-quickpaper-da441338":""},["for (var i = 1; i < active.length; i++) {↵↵    // 如果当前活动的开始时间不小于上一个活动的结束时间↵    if (active[i][0] >= active[preActive][1]) {↵        active[i][2] = true;↵        preActive = i;↵        count += 1;↵    }↵↵    // 否则就不可行↵    else {↵        active[i][2] = false;↵    }↵}"]),createElement('p',{"data-quickpaper-da441338":""},["完整的代码请",createElement('a',{"target":"_blank","class":"link","href":"https://github.com/agile-contrib/algorithm-practice/tree/master/1.【贪心算法】活动安排问题","data-quickpaper-da441338":""},["点击此处"]),"进行查看。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/greedy-algorithm.paper?QuickPaper&type=script&lang=js&hash=da441338
/*****************************************************************/
window.__etcpack__bundleSrc__['46']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/greedy-algorithm.paper?QuickPaper&type=style&lang=css&hash=da441338
/*****************************************************************/
window.__etcpack__bundleSrc__['47']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
