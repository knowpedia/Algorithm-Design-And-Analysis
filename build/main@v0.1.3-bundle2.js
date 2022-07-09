
/*************************** [bundle] ****************************/
// Original file:./src/recursion-and-divide.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('42');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('43');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-673ea148":""},[createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-673ea148":""},[createElement('header',{"id":"fixed-top","data-quickpaper-673ea148":""},["递归与分治策略"]),createElement('h1',{"id":"fixed-dgdgl","data-quickpaper-673ea148":""},["递归的概念"]),createElement('p',{"data-quickpaper-673ea148":""},["直接或间接地调用自身的算法称为递归算法。"]),createElement('p',{"data-quickpaper-673ea148":""},["那什么是分治策略？"]),createElement('p',{"data-quickpaper-673ea148":""},["有时候，一个问题的规模比较大，也比较难，将一个难以直接解决的大问题，分割成一些规模较小的相同问题，以便各个击破，分而治之，便是分治策略。"]),createElement('p',{"class":"warn","data-quickpaper-673ea148":""},["比如对100个数进行排序要比对2个数进行排序要困难。"]),createElement('p',{"data-quickpaper-673ea148":""},["而分治往往产生许多原问题的较小规模的子问题，自然就导致递归算法。因此，分治与递归总是如影随形的出现（当然，有时候我们会出于一些原因的考虑想办法消除递归）。"]),createElement('h1',{"id":"fixed-kspx","data-quickpaper-673ea148":""},["快速排序"]),createElement('p',{"data-quickpaper-673ea148":""},["其基本思想是，对于输入的子数组a[p:r]，按以下3个步骤进行排序："]),createElement('ul',{"data-quickpaper-673ea148":""},[createElement('li',{"data-quickpaper-673ea148":""},["（1）分解（divide）：以a[p]为基准元素将a[p:r]划分成3段a[p:q-1]、a[q]和a[q+1:r]，使得a[p:q-1]中任何元素小于等于a[q]，a[q+1:r]中任何元素大于等于a[q]。下标q在划分过程中确定。"]),createElement('li',{"data-quickpaper-673ea148":""},["（2）递归求解（conquer）：通过递归调用快速排序算法，分别对a[p:q-1]和a[q+1:r]进行排序。"]),createElement('li',{"data-quickpaper-673ea148":""},["（3）合并（merge）：由于对a[p:q-1]和a[q+1:r]的排序是就地进行的，所以在a[p:q-1]和a[q+1:r]都已拍好序后，不需要执行任何计算，a[p:r]就已排好序。"])]),createElement('p',{"data-quickpaper-673ea148":""},["基于这个思想，可实现快速排序的算法如下。"]),createElement('p',{"data-quickpaper-673ea148":""},["首先是用于分解的方法："]),createElement('pre',{"q-code":"","data-quickpaper-673ea148":""},["function partition(begin, end) {↵↵    // 把起点作为判断点↵    var left = begin, right = end + 1;↵↵    var compareData = dataArray[begin];↵    while (true) {↵↵        // left左边的值比判断点小↵        do {↵            left += 1;↵        } while (dataArray[left] < compareData && left < end);↵↵        // right右边的值比判断点小↵        do {↵            right -= 1;↵        } while (dataArray[right] > compareData);↵↵        // 如果交叉了，判断完毕↵        if (left >= right) break;↵↵        // 停止意味着需要交换left和right坐标对应的值↵        var temp = dataArray[left];↵        dataArray[left] = dataArray[right];↵        dataArray[right] = temp;↵↵    }↵↵    // 由于起点作为划分标准，和分界线的值进行交换↵    dataArray[begin] = dataArray[right];↵    dataArray[right] = compareData;↵↵    // 返回划分点的坐标↵    return right;↵}"]),createElement('p',{"data-quickpaper-673ea148":""},["然后，就是利用这个分解方法进行递归求解："]),createElement('pre',{"q-code":"","data-quickpaper-673ea148":""},["function quickSort(begin, end) {↵    if (begin < end) {↵        var splitIndex = partition(begin, end);↵        quickSort(begin, splitIndex - 1);↵        quickSort(splitIndex + 1, end);↵    }↵}"]),createElement('p',{"data-quickpaper-673ea148":""},["完整的代码请",createElement('a',{"target":"_blank","class":"link","href":"https://github.com/agile-contrib/algorithm-practice/tree/master/9.【递归与分治策略】快速排序","data-quickpaper-673ea148":""},["点击此处"]),"进行查看。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/recursion-and-divide.paper?QuickPaper&type=script&lang=js&hash=673ea148
/*****************************************************************/
window.__etcpack__bundleSrc__['42']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/recursion-and-divide.paper?QuickPaper&type=style&lang=css&hash=673ea148
/*****************************************************************/
window.__etcpack__bundleSrc__['43']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
