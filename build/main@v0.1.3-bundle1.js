
/*************************** [bundle] ****************************/
// Original file:./src/idea.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('40');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('41');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-a4161fce":""},[createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-a4161fce":""},[createElement('header',{"id":"fixed-top","data-quickpaper-a4161fce":""},["算法引论"]),createElement('h1',{"id":"fixed-sfycx","data-quickpaper-a4161fce":""},["算法与程序"]),createElement('p',{"data-quickpaper-a4161fce":""},["通俗地讲，",createElement('span',{"class":"important","data-quickpaper-a4161fce":""},["算法"]),"是指解决问题的方法或过程。严格地讲，算法是满足下述性质的指令序列："]),createElement('ul',{"data-quickpaper-a4161fce":""},[createElement('li',{"data-quickpaper-a4161fce":""},["（1）输入：有零个或多个外部量作为算法的输入。"]),createElement('li',{"data-quickpaper-a4161fce":""},["（2）输出：算法产生至少一个量作为输出。"]),createElement('li',{"data-quickpaper-a4161fce":""},["（3）确定性：组成算法的每条指令是清晰度、无歧义的。"]),createElement('li',{"data-quickpaper-a4161fce":""},["（4）有限性：算法中每条指令的执行次数有限，执行每条指令的时间也有限。"])]),createElement('p',{"data-quickpaper-a4161fce":""},["而",createElement('span',{"class":"important","data-quickpaper-a4161fce":""},["程序"]),"与算法不同，↵            程序是算法用某种程序设计语言的具体实现。"]),createElement('p',{"data-quickpaper-a4161fce":""},["程序可以不满足算法的性质（4）即有限性，例如操作系统，它是在无限循环中执行的程序。然而，可把操作系统的各种任务看成一些单独的问题，每一个问题由操作系统中的一个子程序通过特定的算法实现，该子程序得到输出结果后便停止。"]),createElement('h1',{"id":"fixed-bdsfdcxjz","data-quickpaper-a4161fce":""},["表达算法的抽象机制"]),createElement('p',{"data-quickpaper-a4161fce":""},["对于一个明确的数学问题，设计它的算法，总是先选用该问题的一个数据模型。"]),createElement('p',{"data-quickpaper-a4161fce":""},["接着弄清楚该问题数据模型在已知条件下的初始状态和要求的结果状态，以及这两个状态之间的隐含关系。"]),createElement('p',{"data-quickpaper-a4161fce":""},["然后探索从数据模型的已知初始状态到达要求的结果状态所需的运算步骤（这些运算步骤就是求解该问题的算法）。"]),createElement('h1',{"id":"fixed-sffzxfx","data-quickpaper-a4161fce":""},["算法复杂性分析"]),createElement('p',{"data-quickpaper-a4161fce":""},["算法复杂性的高低体现在运行该算法所需要的计算机资源的多少上，所需要的资源越多，该算法的复杂性越高，反之就越低。"]),createElement('p',{"data-quickpaper-a4161fce":""},["而计算机中，最重要的资源就是时间和空间（即存储器），因此，算法的复杂性有",createElement('span',{"class":"important","data-quickpaper-a4161fce":""},["时间复杂性"]),"和",createElement('span',{"class":"important","data-quickpaper-a4161fce":""},["空间复杂性"]),"之分。↵            对于任意一个给定的问题，设计出复杂性尽可能低的算法是在设计算法时追求的重要目标。"]),createElement('p',{"data-quickpaper-a4161fce":""},["但是，在有些情况下，复杂性的追求也不完全是越低越好，比如：可读性、可扩展等也很重要，需要结合实际情况选择，切莫陷入“虚无的理想主义者”陷阱中去。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/idea.paper?QuickPaper&type=script&lang=js&hash=a4161fce
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/idea.paper?QuickPaper&type=style&lang=css&hash=a4161fce
/*****************************************************************/
window.__etcpack__bundleSrc__['41']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
