/******/
/******/  // EtcPack Bootstrap/******/  
/******/  // （ https://etcpack.github.io/api/ ）/******/  
/******/  /******/  
/******/  // 记录bundle的函数源码/******/  
/******/  window.__etcpack__bundleSrc__ = {};/******/  
/******/  /******/  
/******/  // 记录bundle的运行结果/******/  
/******/  window.__etcpack__bundleObj__ = {};/******/  
/******/  /******/  
/******/  // 获取bundle结果/******/  
/******/  window.__etcpack__getBundle = function (bundleName) {/******/  
/******/  /******/  
/******/      // 一个bundle只有第一次导入的时候需要执行/******/  
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {/******/  
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();/******/  
/******/      }/******/  
/******/  /******/  
/******/      // 返回需要的bundle的结果/******/  
/******/      return window.__etcpack__bundleObj__[bundleName];/******/  
/******/  }/******/  
/******/  /******/  
/******/  window.__etcpack__bundleFile__ = {};/******/  
/******/  /******/  
/******/  // 获取懒加载bundle结果/******/  
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {/******/  
/******/      return new Promise(function (resolve) {/******/  
/******/  /******/  
/******/          // 如果加载过了/******/  
/******/          if (window.__etcpack__bundleFile__[fileName]) {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/              return;/******/  
/******/          }/******/  
/******/  /******/  
/******/          // 获取head标签/******/  
/******/          var head = document.getElementsByTagName('head')[0];/******/  
/******/  /******/  
/******/          // 创建script/******/  
/******/          var script = document.createElement('script');/******/  
/******/  /******/  
/******/          // 设置属性/******/  
/******/          script.src = fileName;/******/  
/******/  /******/  
/******/          // 追加到页面/******/  
/******/          head.appendChild(script);/******/  
/******/  /******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;/******/  
/******/  /******/  
/******/          script.addEventListener('load', function () {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/          }, false);/******/  
/******/  /******/  
/******/  /******/  
/******/      });/******/  
/******/  }/******/  
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/entry.js
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var QuickPaper =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('2');
var MathFormula =__etcpack__scope_args__.default;

QuickPaper.use(MathFormula); // 兼容文件

__etcpack__scope_args__=window.__etcpack__getBundle('20');
 // 引入样式

__etcpack__scope_args__=window.__etcpack__getBundle('23');

__etcpack__scope_args__=window.__etcpack__getBundle('24');

__etcpack__scope_args__=window.__etcpack__getBundle('25');

__etcpack__scope_args__=window.__etcpack__getBundle('26');

__etcpack__scope_args__=window.__etcpack__getBundle('27');
var qCode =__etcpack__scope_args__.default;

QuickPaper.directive('qCode', qCode);
__etcpack__scope_args__=window.__etcpack__getBundle('29');
var App =__etcpack__scope_args__.default;
 // 创建对象

window.quickPaper = new QuickPaper({
  // 挂载点
  el: document.getElementById('root'),
  // 启动组件
  render: function render(createElement) {
    return createElement(App);
  }
});
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/quick-paper/dist/quick-paper.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        "use strict";

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function ownKeys(e, t) {
  var n = Object.keys(e);

  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }

  return n;
}

function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ownKeys(Object(n), !0).forEach(function (t) {
      _defineProperty(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }

  return e;
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
    return _typeof2(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
  })(e);
}
/*!
* quick-paper v1.2.2
* (c) 2019-2021 你好2007 git+https://github.com/hai2007/quick-paper.git
* License: MIT
*/


!function () {
  var e = Object.prototype.toString;

  function t(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : e.call(t);
  }

  var n = function n(e, _n) {
    return null !== _n && "object" === _typeof(_n) && e.indexOf(_n.nodeType) > -1 && !function (e) {
      if (null === e || "object" !== _typeof(e) || "[object Object]" != t(e)) return !1;
      if (null === Object.getPrototypeOf(e)) return !0;

      for (var n = e; null !== Object.getPrototypeOf(n);) {
        n = Object.getPrototypeOf(n);
      }

      return Object.getPrototypeOf(e) === n;
    }(_n);
  },
      r = function r(e) {
    var n = _typeof(e);

    return "string" === n || "object" === n && null != e && !Array.isArray(e) && "[object String]" === t(e);
  },
      o = function o(e) {
    if (!function (e) {
      var t = _typeof(e);

      return null != e && ("object" === t || "function" === t);
    }(e)) return !1;
    var n = t(e);
    return "[object Function]" === n || "[object AsyncFunction]" === n || "[object GeneratorFunction]" === n || "[object Proxy]" === n;
  };

  function i(e) {
    /^[_$]/.test(e) && console.error("The beginning of _ or $ is not allowed：" + e);
  }

  var s = 1;

  function a(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        o = {},
        i = [];
    if (!r(e)) return {
      type: "component",
      options: e,
      attrs: {},
      children: []
    };

    for (var s in t) {
      /^@/.test(s) ? o[s.replace(/^@/, "q-on:")] = t[s] : /^:/.test(s) ? o["q-bind" + s] = t[s] : o[s] = t[s];
    }

    for (var a, c = 0; c < n.length; c++) {
      a = n[c], r(a) ? /\{\{[^}]+\}\}/.test(a) ? i.push({
        type: "bindText",
        content: ('" ' + a + ' "').replace(/\{\{([^}]+)\}\}/g, '"+$1+"')
      }) : i.push({
        type: "text",
        content: a
      }) : i.push(a);
    }

    return {
      type: "none",
      tagName: e,
      attrs: o,
      children: i
    };
  }

  function c(e) {
    for (var t = (e + "").toLowerCase(), n = (e + "").toUpperCase(), r = "", o = !1, i = 0; i < e.length; i++) {
      "-" != e[i] ? o ? (r += n[i], o = !1) : r += t[i] : o = !0;
    }

    return r;
  }

  var l = Object.prototype.toString;

  var p = function p(e) {
    var t = _typeof(e);

    return "string" === t || "object" === t && null != e && !Array.isArray(e) && "[object String]" === function (e) {
      return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : l.call(e);
    }(e);
  },
      u = function u(e) {
    return Array.isArray(e);
  },
      f = {
    blankReg: new RegExp("[\\x20\\t\\r\\n\\f]"),
    blanksReg: /^[\x20\t\r\n\f]{0,}$/,
    identifier: /^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/
  },
      d = ["+", "-", "*", "/", "%", "&", "|", "!", "?", ":", "[", "]", "(", ")", ">", "<", "="],
      h = ["+", "-", "*", "/", "%", "&", "|", "!", "?", ":", ">", "<", "=", "<=", ">=", "==", "===", "!=", "!=="];

  function v(e, t, n) {
    t = t.trim();

    var r = -1,
        o = null,
        i = function i() {
      return o = r++ < t.length - 1 ? t[r] : null;
    },
        s = function s(e) {
      return t.substring(r, e + r > t.length ? t.length : e + r);
    };

    i();

    for (var a = []; !(r >= t.length);) {
      if (d.indexOf(o) > -1) {
        if (["&", "|", "="].indexOf(o) > -1) {
          if (["==="].indexOf(s(3)) > -1) a.push(s(3)), r += 2, i();else {
            if (!(["&&", "||", "=="].indexOf(s(2)) > -1)) throw new Error("Illegal expression : " + t + "\nstep='analyseExpress',index=" + r);
            a.push(s(2)), r += 1, i();
          }
        } else ["!=="].indexOf(s(3)) > -1 ? (a.push(s(3)), r += 2, i()) : [">=", "<=", "!="].indexOf(s(2)) > -1 ? (a.push(s(2)), r += 1, i()) : (a.push(o), i());
      } else if (['"', "'"].indexOf(o) > -1) {
        var c = "",
            l = o;

        for (i(); o != l;) {
          if (r >= t.length) throw new Error("String unclosed error : " + t + "\nstep='analyseExpress',index=" + r);
          c += o, i();
        }

        a.push(c + "@string"), i();
      } else if (/\d/.test(o)) {
        var u = "no";
        c = o;

        for (i(); r < t.length;) {
          if (/\d/.test(o)) c += o, "error" == u && (u = "yes");else {
            if ("." != o || "no" != u) break;
            c += o, u = "error";
          }
          i();
        }

        "error" == u && (c += "0"), a.push(+c);
      } else if (["null", "true"].indexOf(s(4)) > -1) a.push({
        "null": null,
        "true": !0
      }[s(4)]), r += 3, i();else if (["false"].indexOf(s(5)) > -1) a.push({
        "false": !1
      }[s(5)]), r += 4, i();else if (["undefined"].indexOf(s(9)) > -1) a.push({
        undefined: void 0
      }[s(9)]), r += 8, i();else if (f.blankReg.test(o)) do {
        i();
      } while (f.blankReg.test(o) && r < t.length);else {
        var v = !1;
        if ("." == o && (v = !0, i()), !f.identifier.test(o)) throw new Error("Illegal express : " + t + "\nstep='analyseExpress',index=" + r);

        for (var y = 1; r + y <= t.length && f.identifier.test(s(y));) {
          y += 1;
        }

        if (v) a.push("["), a.push(s(y - 1) + "@string"), a.push("]");else {
          var _ = s(y - 1),
              g = _ in n ? n[_] : e[_];

          a.push(p(g) ? g + "@string" : g);
        }
        r += y - 2, i();
      }
    }

    for (var b = 0, m = 0; m < a.length; m++) {
      ["+", "-"].indexOf(a[m]) > -1 && (0 == m || h.indexOf(a[b - 1]) > -1) ? (a[b++] = +(a[m] + a[m + 1]), m += 1) : a[b++] = a[m];
    }

    return a.length = b, a;
  }

  var y = function y(e) {
    return "string" == typeof e ? e.replace(/@string$/, "") : e;
  };

  function _(e) {
    for (var t, n = 0, r = 0; r < e.length; r++) {
      "!" == e[r] ? e[n] = !e[++r] : e[n] = e[r], n += 1;
    }

    if (1 == n) return y(e[0]);

    for (e.length = n, n = 0, r = 0; r < e.length; r++) {
      "*" == e[r] ? e[n - 1] = y(e[n - 1]) * y(e[++r]) : "/" == e[r] ? e[n - 1] = y(e[n - 1]) / y(e[++r]) : "%" == e[r] ? e[n - 1] = y(e[n - 1]) % y(e[++r]) : e[n++] = e[r];
    }

    if (1 == n) return y(e[0]);

    for (e.length = n, n = 0, r = 0; r < e.length; r++) {
      "+" == e[r] ? e[n - 1] = "string" == typeof (t = y(e[n - 1]) + y(e[++r])) ? t + "@string" : t : "-" == e[r] ? e[n - 1] = y(e[n - 1]) - y(e[++r]) : e[n++] = e[r];
    }

    if (1 == n) return y(e[0]);

    for (e.length = n, n = 0, r = 0; r < e.length; r++) {
      ">" == e[r] ? e[n - 1] = y(e[n - 1]) > y(e[++r]) : "<" == e[r] ? e[n - 1] = y(e[n - 1]) < y(e[++r]) : "<=" == e[r] ? e[n - 1] = y(e[n - 1]) <= y(e[++r]) : ">=" == e[r] ? e[n - 1] = y(e[n - 1]) >= y(e[++r]) : e[n++] = e[r];
    }

    if (1 == n) return y(e[0]);

    for (e.length = n, n = 0, r = 0; r < e.length; r++) {
      "==" == e[r] ? e[n - 1] = y(e[n - 1]) == y(e[++r]) : "===" == e[r] ? e[n - 1] = y(e[n - 1]) === y(e[++r]) : "!=" == e[r] ? e[n - 1] = y(e[n - 1]) != y(e[++r]) : "!==" == e[r] ? e[n - 1] = y(e[n - 1]) !== y(e[++r]) : e[n++] = e[r];
    }

    if (1 == n) return y(e[0]);

    for (e.length = n, n = 0, r = 0; r < e.length; r++) {
      "&&" == e[r] ? (e[n - 1] = y(e[n - 1]) && y(e[1 + r]), r += 1) : "||" == e[r] ? (e[n - 1] = y(e[n - 1]) || y(e[1 + r]), r += 1) : e[n++] = e[r];
    }

    if (1 == n) return y(e[0]);

    for (e.length = n, n = 0, r = 0; r < e.length; r++) {
      "?" == e[r] ? (e[n - 1] = y(e[n - 1]) ? y(e[r + 1]) : y(e[r + 3]), r += 3) : e[n++] = e[r];
    }

    if (1 == n) return y(e[0]);
    throw e.length = n, new Error("Unrecognized expression : [" + e.toString() + "]");
  }

  var g = function g(e) {
    for (var t = !0; t;) {
      t = !1;

      for (var n = [], r = [], o = !1, i = 0; i < e.length; i++) {
        if ("[" == e[i] && 0 != i && "]" != e[i - 1]) {
          if (o) {
            n.push("[");

            for (var s = 0; s < r.length; s++) {
              n.push(r[s]);
            }
          } else o = !0;

          r = [];
        } else if ("]" == e[i] && o) {
          t = !0;

          var a = _(r),
              c = n[n.length - 1][a];

          n[n.length - 1] = p(c) ? c + "@string" : c, o = !1;
        } else o ? r.push(e[i]) : n.push(e[i]);
      }

      e = n;
    }

    return e;
  },
      b = function b(e) {
    for (var t = [], n = [], r = 0; r < e.length; r++) {
      "[" == e[r] ? n = [] : "]" == e[r] ? t.push(_(n)) : n.push(e[r]);
    }

    return t;
  };

  function m(e, t, n) {
    var r,
        o = function e(t, n, r) {
      if (n.indexOf("(") > -1) {
        for (var o = [], i = [], s = 0, a = 0; a < n.length; a++) {
          if ("(" == n[a]) s > 0 && i.push("("), s += 1;else if (")" == n[a]) {
            if (s > 1 && i.push(")"), 0 == (s -= 1)) {
              var c = _(e(t, i));

              o.push(p(c) ? c + "@string" : c), i = [];
            }
          } else s > 0 ? i.push(n[a]) : o.push(n[a]);
        }

        n = o;
      }

      return g(n);
    }(e, t);

    if ("[" != o[0]) r = [_(o)];else if ("]" == o[o.length - 1]) r = b(o);else {
      var i = o.lastIndexOf("]"),
          s = b(o.slice(0, i + 1)),
          a = o.slice(i + 1);
      a.unshift(function (e, t, n) {
        for (var r = (t[0] in n) ? n[t[0]] : e[t[0]], o = 1; o < t.length; o++) {
          try {
            r = r[t[o]];
          } catch (r) {
            throw console.error({
              target: e,
              scope: n,
              expressArray: t,
              index: o
            }), r;
          }
        }

        return r;
      }(e, s, n)), r = [_(a)];
    }
    return r;
  }
  /*!
     * 🔪 - 设置或获取指定对象上字符串表达式对应的值
     * https://github.com/hai2007/algorithm.js/blob/master/value.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2020-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */


  var x = function x(e, t, n) {
    arguments.length < 3 && (n = {});
    var r = v(e, t, n),
        o = m(e, r, n);
    if (o.length > 1) throw new Error("Illegal expression : " + t + "\nstep='evalExpress',path=" + o + ",expressArray=" + r);
    return o[0];
  };

  function O(e, t, n) {
    window.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n, !1);
  }

  function $(e) {
    if (!(this instanceof $)) throw new Error("QuickPaper is a constructor and should be called with the `new` keyword");
    var t;
    this._name = e.name || "noname", this.$$lifecycle(e.beforeCreate), this.$$init(e), this.$$lifecycle("created"), t = this._el, n([1, 9, 11], t) && this.$$mount();
  }

  !function (e) {
    e.prototype.$$init = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

      for (var t in this._options = e, this._uid = s++, this._data = o(e.data) ? e.data() : e.data, this._el = e.el, this.__isMounted = !1, this.__isDestroyed = !1, e.methods) {
        i(t), this[t] = e.methods[t];
      }

      for (var n in this._data) {
        this[n] = this._data[n];
      }

      for (var r in this.__componentLib_scope = {}, e.component) {
        this.__componentLib_scope[r] = e.component[r];
      }

      for (var a in this.__directiveLib_scope = {}, e.directive) {
        this.__directiveLib_scope[a] = e.directive[a];
      }
    };
  }($), function (e) {
    e.prototype.$$lifecycle = function (e) {
      o(e) ? e() : ["created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed"].indexOf(e) > -1 && o(this._options[e]) && this._options[e].call(this);
    };
  }($), function (e) {
    e.prototype.$$mountComponent = function () {
      this.$$lifecycle("beforeMount"), this._vnode = this.$$render(a), this.__directiveTask = [], this.__componentTask = [], this.__bindTextTask = [], function e(t, n, r, o) {
        var i,
            s = x(t, n);

        if (s) {
          if ("none" == s.type) {
            var a = c(s.tagName);
            t.__componentLib[a] || t.__componentLib_scope[a] ? (s.options = t.__componentLib[a] || t.__componentLib_scope[a], s.type = "component") : s.type = "tag";
          }

          if ("component" == s.type) {
            i = document.createElement("quick-paper-component"), r.appendChild(i), s.options.el = i, "render" in s.options || (s.options.render = function (e) {
              return e("quick-paper-component", {}, []);
            }), s.instance = new o(s.options), s.instance.__parent = t;
            var l = {};

            for (var p in s.attrs) {
              /^data-quickpaper-/.test(p) || (/^:/.test(p) ? l[p.replace("q-bind" + p)] = s.attrs[p] : /^@/.test(p) ? l[p.replace(p.replace(/^@/, "q-on:"))] = s.attrs[p] : l[p] = s.attrs[p]);
            }

            var u = {
              attrs: l,
              instance: s.instance
            };

            if ("component" == u.instance._name) {
              var f = u.attrs["q-bind:is"];
              u.instance.lister(o, t[f]);
            }

            t.__componentTask.push(u);
          } else if ("tag" == s.type) {
            for (var d in i = document.createElement(s.tagName), "Quick-Paper-COMPONENT" == r.nodeName || "Quick-Paper-COMPONENT" == r._nodeName ? (b = i, (g = r).parentNode.replaceChild(b, g), t._el = i) : r.appendChild(i), s.attrs) {
              var h = s.attrs[d],
                  v = (d + ":").split(":"),
                  y = t.__directiveLib[c(v[0])] || t.__directiveLib_scope[c(v[0])];

              y ? t.__directiveTask.push(_objectSpread(_objectSpread({
                el: i
              }, y), {}, {
                value: h,
                type: v[1]
              })) : i.setAttribute(d, h);
            }

            for (var _ = 0; _ < s.children.length; _++) {
              e(t, n + ".children[" + _ + "]", i, o);
            }
          } else "text" == s.type ? ((i = document.createTextNode("")).textContent = s.content.replace(/↵/g, "\n"), r.appendChild(i)) : "bindText" == s.type ? ((i = document.createTextNode("")).textContent = x(t, s.content).replace(/↵/g, "\n"), r.appendChild(i), t.__bindTextTask.push({
            el: i,
            content: s.content
          })) : console.error("Type not expected：" + s.type);

          var g, b;
        } else console.error("vnode is undefined!");
      }(this, "_vnode", this._el, e);

      for (var t = 0; t < this.__directiveTask.length; t++) {
        var n = this.__directiveTask[t];

        if (o(n.inserted)) {
          var r = void 0;

          try {
            r = x(this, n.value);
          } catch (e) {}

          n.inserted(n.el, {
            target: this,
            exp: n.value,
            value: r,
            type: n.type
          });
        }
      }

      !function (e) {
        var t = function t(_t) {
          i(_t), o(e[_t]) && console.error('Data property "' + _t + '" has already been defined as a Method.');
          var n = e._data[_t];
          e[_t] = n, Object.defineProperty(e, _t, {
            get: function get() {
              return n;
            },
            set: function set(t) {
              n = t, e.$$updateComponent();
            }
          });
        };

        for (var n in e._data) {
          t(n);
        }
      }(this), this.__isMounted = !0, this.$$lifecycle("mounted");
    }, e.prototype.$$updateComponent = function () {
      this.$$lifecycle("beforeUpdate");

      for (var t = 0; t < this.__directiveTask.length; t++) {
        var n = this.__directiveTask[t];

        if (o(n.update)) {
          var r = void 0;

          try {
            r = x(this, n.value);
          } catch (e) {}

          n.update(n.el, {
            target: this,
            exp: n.value,
            value: r,
            type: n.type
          });
        }
      }

      for (var i = 0; i < this.__bindTextTask.length; i++) {
        var s = this.__bindTextTask[i],
            a = x(this, s.content).replace(/↵/g, "\n");
        s.el.textContent != a && (s.el.textContent = a);
      }

      for (var c = 0; c < this.__componentTask.length; c++) {
        var l = this.__componentTask[c];

        if ("component" == l.instance._name) {
          var p = l.attrs["q-bind:is"];
          l.instance.lister(e, this[p]);
        }
      }

      this.$$lifecycle("updated");
    }, e.prototype.$$destroyComponent = function () {
      this.$$lifecycle("beforeDestroy");

      for (var e = 0; e < this.__directiveTask.length; e++) {
        var t = this.__directiveTask[e];
        o(t["delete"]) && t["delete"](t.el, {
          target: this,
          exp: t.value,
          value: x(this, t.value),
          type: t.type
        });
      }

      this.$$lifecycle("destroyed");
    };
  }($), function (e) {
    e.prototype.__directiveLib = {}, e.prototype.__componentLib = {}, function (e) {
      e.directive = function (t, n) {
        e.prototype.__directiveLib[t] = n;
      }, e.component = function (t, n) {
        e.prototype.__componentLib[t] = n;
      };
    }(e), function (e) {
      e.use = function (t) {
        t.install.call(t, e);
      };
    }(e);
  }($), $.prototype.$$mount = function () {
    if (!o(this._options.render)) throw new Error("options.render needs to be a function");
    this.$$render = this._options.render, this.$$mountComponent();
  };

  var w = function w(e, t) {
    r(t.type) && t.type.length > 0 ? e.getAttribute(t.type) != t.value && e.setAttribute(t.type, t.value) : e.value == t.value && e.textContent == t.value || (e.value = e.textContent = t.value);
  },
      j = {
    inserted: w,
    update: w
  },
      k = {
    inserted: function inserted(e, t) {
      for (var n = t.type.split("."), r = {
        prevent: !1,
        stop: !1,
        once: !1
      }, o = 1; o < n.length; o++) {
        r[n[o]] = !0;
      }

      O(e, n[0], function o(i) {
        r.stop && function (e) {
          (e = e || window.event).stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
        }(i), r.prevent && function (e) {
          (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1;
        }(i);
        var s,
            a,
            c,
            l = /^([^(]+)(\([^)]{0,}\)){0,1}/.exec(t.exp),
            p = [],
            u = [];

        if (l[2]) {
          var f = l[2].replace(/^\(/, "").replace(/\)$/, "").trim();
          f.length > 0 && (u = f.split(","));
        }

        for (var d = 0; d < u.length; d++) {
          var h = u[d];
          h = x(t.target, h), p.push(h);
        }

        p.push(i), t.target[l[1]].apply(t.target, p), r.once && (s = e, a = n[0], c = o, window.detachEvent ? s.detachEvent("on" + a, c) : s.removeEventListener(a, c, !1));
      });
    }
  },
      T = {
    inserted: function inserted(e, t) {
      e.value = t.value, O(e, "input", function () {
        !function (e, t, n, r) {
          arguments.length < 3 && (r = {});

          for (var o = v(e, t, r), i = m(e, o, r), s = e, a = 0; a < i.length - 1; a++) {
            i[a] in s || (s[i[a]] = u(s) ? [] : {}), s = s[i[a]];
          }

          s[i[i.length - 1]] = n;
        }(t.target, "." + t.exp, e.value);
      });
    },
    update: function update(e, t) {
      e.value = t.value;
    }
  };

  $.directive("qBind", j), $.directive("qOn", k), $.directive("qModel", T), $.component("component", {
    name: "component",
    data: function data() {
      return {
        is: null
      };
    },
    methods: {
      lister: function lister(e, t) {
        if (t != this.is && null != t) {
          var n = this._oldComponent;
          n && n.$$lifecycle("beforeDestroy"), this.is = t;
          var r = t;
          r.el = this._el, r.el._nodeName = "Quick-Paper-COMPONENT", this._oldComponent = new e(r), this._el = this._oldComponent._el, n && (n.$$lifecycle("destroyed"), n = null);
        }
      }
    }
  }), "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = $ : window.QuickPaper = $;
}();

        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/knowpedia/mathFormula/index.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 数学式子
 */
// 展示意图指令
__etcpack__scope_args__=window.__etcpack__getBundle('3');
var kpMathFormula =__etcpack__scope_args__.default;
 // 意图捕获方法集

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var mathFormula =__etcpack__scope_args__.default;

/**
 * 导出
 */

__etcpack__scope_bundle__.default= {
  install: function install(QuickPaper) {
    QuickPaper.directive("kpMathFormula", kpMathFormula);
    QuickPaper.prototype.$mathFormula = mathFormula;
  }
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/knowpedia/mathFormula/mathFormula/kp-math-formula.js
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

__etcpack__scope_args__=window.__etcpack__getBundle('4');
var CrossEndCanvas =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('5');
var config =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var drawBracket=__etcpack__scope_args__.drawBracket;

var index = 0;

var doit = function doit(el, binding) {
  // 随机生成唯一标志
  var id = "kp-math-formula-id-" + index++; // 获取需要绘制的式子的数据

  var mathFormulaData = binding.value;
  if (!mathFormulaData) return; // 设置画布大小并插入页面

  el.innerHTML = "<canvas id='" + id + "' style='width:" + mathFormulaData.width + "px;height:" + mathFormulaData.height + "px;vertical-align: middle;'>非常抱歉，您的浏览器不支持canvas!</canvas>"; // 建立绘图对象

  CrossEndCanvas({
    id: id,
    platform: 'web'
  }).then(function (painter) {
    // 统一配置画笔
    painter.config({
      "textAlign": "center",
      "textBaseline": "middle",
      "font-size": config.mathFormula['font-size']
    });

    var drawFormula = function drawFormula(x, y, data) {
      switch (data.type) {
        case "string":
          {
            painter.fillText(data.contents[0], x + data.width * 0.5, y + data.height * 0.5);
            break;
          }

        case "gen":
          {
            // 先绘制根号下的表达式
            drawFormula(x + 5 + config.mathFormula['padding-size'], y + config.mathFormula['padding-size'], data.contents[0]); // 然后绘制根号

            painter.beginPath().lineTo(x + config.mathFormula['padding-size'], y + data.height - config.mathFormula['padding-size']).lineTo(x + config.mathFormula['padding-size'] + 2.5, y + data.height - config.mathFormula['padding-size'] - 2.5).lineTo(x + config.mathFormula['padding-size'] + 5, y + data.height - config.mathFormula['padding-size']).lineTo(x + config.mathFormula['padding-size'] + 5, y + config.mathFormula['padding-size'] * 0.5).lineTo(x + data.width - config.mathFormula['padding-size'], y + config.mathFormula['padding-size'] * 0.5).stroke();
            break;
          }

        case "limt":
          {
            var leftTop = y + data.contents[1].height * 0.5 - data._help.limtSize.height * 0.5; // 先绘制极限文字和趋势

            painter.fillText("lim", x + config.mathFormula['padding-size'] + data._help.leftWidth * 0.5, config.mathFormula['padding-size'] + leftTop);
            drawFormula(x, data._help.limtSize.height + leftTop - config.mathFormula['padding-size'], data.contents[0]); // 然后绘制表达式

            drawFormula(x + config.mathFormula['padding-size'] + data._help.leftWidth, y, data.contents[1]);
            break;
          }

        case "sum":
          {
            // 先绘制左边的，从下到上
            drawFormula(x + data._help.leftWidth * 0.5 - data._help.p1Width * 0.5 + config.mathFormula["padding-size"], y + data.height * 0.5 + 10 + config.mathFormula["padding-size"], data.contents[0]);
            painter.beginPath().lineTo(x + data._help.leftWidth * 0.5 + 10 + config.mathFormula["padding-size"], y + data.height * 0.5 - 10 + config.mathFormula["padding-size"]).lineTo(x + data._help.leftWidth * 0.5 - 10 + config.mathFormula["padding-size"], y + data.height * 0.5 - 10 + config.mathFormula["padding-size"]).lineTo(x + data._help.leftWidth * 0.5 + 7 + config.mathFormula["padding-size"], y + data.height * 0.5 + config.mathFormula["padding-size"]).lineTo(x + data._help.leftWidth * 0.5 - 10 + config.mathFormula["padding-size"], y + data.height * 0.5 + 10 + config.mathFormula["padding-size"]).lineTo(x + data._help.leftWidth * 0.5 + 10 + config.mathFormula["padding-size"], y + data.height * 0.5 + 10 + config.mathFormula["padding-size"]).stroke();
            drawFormula(x + data._help.leftWidth * 0.5 - data._help.p2Width * 0.5 + config.mathFormula["padding-size"], y + data.height * 0.5 - 10 - data._help.p2Height + config.mathFormula["padding-size"], data.contents[1]); // 然后绘制右边的

            drawFormula(x + data._help.leftWidth + config.mathFormula["padding-size"], y + data.height * 0.5 - data._help.rightHeight * 0.5, data.contents[2]);
            break;
          }

        case "join":
          {
            // 从左到右，一个个绘制即可
            var _iterator = _createForOfIteratorHelper(data.contents),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                drawFormula(x + config.mathFormula["padding-size"], y - item.height * 0.5 + data.height * 0.5, item);
                x += item.width;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            break;
          }

        case "matrix":
          {
            // 先绘制内容
            for (var i in data.contents) {
              for (var j in data.contents[i]) {
                var curData = data.contents[i][j]; // 对于"|"特殊处理

                if (curData.contents[0] == '|') {
                  painter.beginPath().lineTo(x + data._help.colCenter[j], y + data._help.rowCenter[i] - curData.height * 0.5).lineTo(x + data._help.colCenter[j], y + data._help.rowCenter[i] + curData.height * 0.5).stroke();
                } else {
                  drawFormula(x + data._help.colCenter[j] - curData.width * 0.5, y + data._help.rowCenter[i] - curData.height * 0.5, curData);
                }
              }
            } // 绘制两边


            if (data._help.isHLS) {
              painter.beginPath().lineTo(x + config.mathFormula["padding-size"] + 5, y + config.mathFormula["padding-size"]).lineTo(x + config.mathFormula["padding-size"] + 5, y + data.height - config.mathFormula["padding-size"]).stroke();
              painter.beginPath().lineTo(x - config.mathFormula["padding-size"] - 5 + data.width, y + config.mathFormula["padding-size"]).lineTo(x - config.mathFormula["padding-size"] - 5 + data.width, y + data.height - config.mathFormula["padding-size"]).stroke();
            } else {
              painter.beginPath().lineTo(x + config.mathFormula["padding-size"] + 10, y + config.mathFormula["padding-size"]).lineTo(x + config.mathFormula["padding-size"] + 5, y + config.mathFormula["padding-size"] + 5).lineTo(x + config.mathFormula["padding-size"] + 5, y + data.height - config.mathFormula["padding-size"] - 5).lineTo(x + config.mathFormula["padding-size"] + 10, y + data.height - config.mathFormula["padding-size"]).stroke();
              painter.beginPath().lineTo(x - config.mathFormula["padding-size"] - 10 + data.width, y + config.mathFormula["padding-size"]).lineTo(x - config.mathFormula["padding-size"] - 5 + data.width, y + config.mathFormula["padding-size"] + 5).lineTo(x - config.mathFormula["padding-size"] - 5 + data.width, y + data.height - config.mathFormula["padding-size"] - 5).lineTo(x - config.mathFormula["padding-size"] - 10 + data.width, y + data.height - config.mathFormula["padding-size"]).stroke();
            }

            break;
          }

        case "division":
          {
            // 先绘制内容，从上到下
            drawFormula(x + (data.width - data.contents[0].width) * 0.5, y + config.mathFormula["padding-size"], data.contents[0]);
            drawFormula(x + (data.width - data.contents[1].width) * 0.5, y + config.mathFormula["padding-size"] + data.contents[0].height + 2, data.contents[1]); // 再绘制中间的线条

            painter.beginPath().lineTo(x + config.mathFormula["padding-size"], y + data.contents[0].height + 1).lineTo(x + data.width - config.mathFormula["padding-size"], y + data.contents[0].height + 1).stroke();
            break;
          }

        case "bracket":
          {
            // 先绘制中间的内容
            drawFormula(x + config.mathFormula["padding-size"] + 10, y + config.mathFormula["padding-size"], data.contents[0]); // 再绘制括号

            drawBracket(painter, data._help.type, 'left', x + config.mathFormula["padding-size"], y + config.mathFormula["padding-size"], data.height - 2 * config.mathFormula["padding-size"]);
            drawBracket(painter, data._help.type, 'right', x + data.width - config.mathFormula["padding-size"] - 10, y + config.mathFormula["padding-size"], data.height - 2 * config.mathFormula["padding-size"]);
            break;
          }

        case "rightTop":
          {
            drawFormula(x + 0.5 * config.mathFormula["padding-size"], y + data.height - data._help.p1Height - config.mathFormula["padding-size"], data.contents[0]);
            drawFormula(x - 1.5 * config.mathFormula["padding-size"] + data._help.p1Width, y + 0.5 * config.mathFormula["padding-size"], data.contents[1]);
            break;
          }

        case "rightBottom":
          {
            drawFormula(x + 0.5 * config.mathFormula["padding-size"], y + config.mathFormula["padding-size"], data.contents[0]);
            drawFormula(x - 1.5 * config.mathFormula["padding-size"] + data._help.p1Width, y + data.height - 0.5 * config.mathFormula["padding-size"] - data._help.p2Height, data.contents[1]);
            break;
          }

        case "equationSet":
          {
            drawBracket(painter, "big", 'left', x + config.mathFormula["padding-size"], y + config.mathFormula["padding-size"], data.height - 2 * config.mathFormula["padding-size"]);

            for (var _i in data.contents) {
              drawFormula(x + config.mathFormula["padding-size"] + 10, y + data._help.pxTops[_i], data.contents[_i]);
            }

            break;
          }

        case "upLine":
          {
            drawFormula(x, y + config.mathFormula["padding-size"], data.contents[0]);
            painter.beginPath().lineTo(x, y + config.mathFormula["padding-size"]).lineTo(x + data.width, y + config.mathFormula["padding-size"]).stroke();
            break;
          }

        case "downLine":
          {
            drawFormula(x, y, data.contents[0]);
            painter.beginPath().lineTo(x, y + data.height - config.mathFormula["padding-size"]).lineTo(x + data.width, y + data.height - config.mathFormula["padding-size"]).stroke();
            break;
          }

        case "absoluteValue":
          {
            drawFormula(x + config.mathFormula["padding-size"], y, data.contents[0]);
            painter.beginPath().lineTo(x + config.mathFormula["padding-size"], y).lineTo(x + config.mathFormula["padding-size"], y + data.height).stroke();
            painter.beginPath().lineTo(x + data.width - config.mathFormula["padding-size"], y).lineTo(x + data.width - config.mathFormula["padding-size"], y + data.height).stroke();
            break;
          }

        case "integral":
          {
            drawFormula(x + config.mathFormula["padding-size"] + 15, y + config.mathFormula["padding-size"], data.contents[3]);
            drawFormula(x + config.mathFormula["padding-size"] + 10, y + data.height - data.contents[2].height - config.mathFormula["padding-size"], data.contents[2]);
            drawFormula(x + config.mathFormula["padding-size"] + 15, y + config.mathFormula["padding-size"] + data.contents[3].height, data.contents[0]);
            drawFormula(x + config.mathFormula["padding-size"] + 15 + data.contents[0].width, y + config.mathFormula["padding-size"] + data.contents[3].height + 0.5 * (data.contents[0].height - data.contents[1].height), data.contents[1]); // 然后绘制积分符号

            painter.beginPath().moveTo(x + config.mathFormula["padding-size"], y + data.height - config.mathFormula["padding-size"] - 2.5).arc(x + config.mathFormula["padding-size"] + 2.5, y + data.height - config.mathFormula["padding-size"] - 2.5, 2.5, Math.PI, -Math.PI).lineTo(x + config.mathFormula["padding-size"] + 10, y + config.mathFormula["padding-size"] + 2.5).arc(x + config.mathFormula["padding-size"] + 12.5, y + config.mathFormula["padding-size"] + 2.5, 2.5, Math.PI, Math.PI).stroke();
            break;
          }

        case "listedOr":
          {
            drawFormula(x + data.width * 0.5 - data.contents[0].width * 0.5, y + data.height - config.mathFormula["padding-size"] - data.contents[0].height, data.contents[0]);
            drawFormula(x + data.width * 0.5 - data.contents[1].width * 0.5, y + config.mathFormula["padding-size"], data.contents[1]);
            painter.beginPath().moveTo(x + data.width * 0.5 - 15, y + config.mathFormula["padding-size"] + data.contents[1].height).lineTo(x + data.width * 0.5 - 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 25).bezierCurveTo(x + data.width * 0.5 - 10, y + config.mathFormula["padding-size"] + data.contents[1].height + 30, x + data.width * 0.5 + 10, y + config.mathFormula["padding-size"] + data.contents[1].height + 30, x + data.width * 0.5 + 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 25).lineTo(x + data.width * 0.5 + 15, y + config.mathFormula["padding-size"] + data.contents[1].height).stroke();
            break;
          }

        case "listedAnd":
          {
            drawFormula(x + data.width * 0.5 - data.contents[0].width * 0.5, y + data.height - config.mathFormula["padding-size"] - data.contents[0].height, data.contents[0]);
            drawFormula(x + data.width * 0.5 - data.contents[1].width * 0.5, y + config.mathFormula["padding-size"], data.contents[1]);
            painter.beginPath().moveTo(x + data.width * 0.5 - 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 35).lineTo(x + data.width * 0.5 - 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 10).bezierCurveTo(x + data.width * 0.5 - 10, y + config.mathFormula["padding-size"] + data.contents[1].height + 5, x + data.width * 0.5 + 10, y + config.mathFormula["padding-size"] + data.contents[1].height + 5, x + data.width * 0.5 + 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 10).lineTo(x + data.width * 0.5 + 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 35).stroke();
            break;
          }

        default:
          {
            console.error('未匹配的数据格式：');
            console.error(x, y, data);
          }
      }
    };

    drawFormula(0, 0, mathFormulaData);
  });
};
/**
 * 根据 mathFormula 提供的方法生成的数据，
 * 绘制出数学式子
 */


__etcpack__scope_bundle__.default= {
  inserted: function inserted(el, binding) {
    doit(el, binding);
  },
  update: function update(el, binding) {
    doit(el, binding);
  }
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/cross-end-canvas/dist/cross-end-canvas.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
 * cross-end-canvas - 提供跨端的canvas画笔，保持一致的绘图方法和效果，包括普通的web端、uniapp框架、微信小程序等小程序等。
 *
 * git+https://github.com/hai2007/cross-end-canvas.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.1
 *
 * Copyright (c) 2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Tue Aug 24 2021 11:02:07 GMT+0800 (中国标准时间)
 */
(function () {
  "use strict";

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var rotate = function rotate(cx, cy, deg, x, y) {
    var cos = Math.cos(deg),
        sin = Math.sin(deg);
    return [+((x - cx) * cos - (y - cy) * sin + cx).toFixed(7), +((x - cx) * sin + (y - cy) * cos + cy).toFixed(7)];
  };

  function arc(beginA, rotateA, cx, cy, r1, r2, doback) {
    if (rotateA < 0) {
      beginA += rotateA;
      rotateA *= -1;
    }

    var temp = [],
        p;
    p = rotate(0, 0, beginA, r1, 0);
    temp[0] = p[0];
    temp[1] = p[1];
    p = rotate(0, 0, rotateA, p[0], p[1]);
    temp[2] = p[0];
    temp[3] = p[1];
    p = rotate(0, 0, beginA, r2, 0);
    temp[4] = p[0];
    temp[5] = p[1];
    p = rotate(0, 0, rotateA, p[0], p[1]);
    temp[6] = p[0];
    temp[7] = p[1];
    doback(beginA, beginA + rotateA, temp[0] + cx, temp[1] + cy, temp[4] + cx, temp[5] + cy, temp[2] + cx, temp[3] + cy, temp[6] + cx, temp[7] + cy, (r2 - r1) * .5);
  }

  var initPainterConfig = {
    fillStyle: "black",
    strokeStyle: "black",
    lineWidth: 1,
    textAlign: "left",
    textBaseline: "middle",
    "font-size": 16,
    "font-family": "sans-serif",
    "arc-start-cap": "butt",
    "arc-end-cap": "butt",
    lineDash: [],
    shadowBlur: 0,
    shadowColor: "black"
  };

  var initText = function initText(painter, config, x, y, deg, platform) {
    painter.beginPath();
    painter.translate(x, y);
    painter.rotate(deg);

    if (platform != "web") {
      painter.setFontSize(config["font-size"]);
    } else {
      painter.font = config["font-size"] + "px " + config["font-family"];
    }

    return painter;
  };

  var initArc = function initArc(painter, config, cx, cy, r1, r2, beginDeg, deg) {
    if (r1 > r2) {
      var temp = r1;
      r1 = r2;
      r2 = temp;
    }

    beginDeg = beginDeg % (Math.PI * 2);

    if (deg >= Math.PI * 1.999999 || deg <= -Math.PI * 1.999999) {
      deg = Math.PI * 2;
    } else {
      deg = deg % (Math.PI * 2);
    }

    arc(beginDeg, deg, cx, cy, r1, r2, function (beginA, endA, begInnerX, begInnerY, begOuterX, begOuterY, endInnerX, endInnerY, endOuterX, endOuterY, r) {
      if (r < 0) r = -r;
      painter.beginPath();
      painter.moveTo(begInnerX, begInnerY);
      painter.arc(cx, cy, r1, beginA, endA, false);
      if (config["arc-end-cap"] != "round") painter.lineTo(endOuterX, endOuterY);else painter.arc((endInnerX + endOuterX) * .5, (endInnerY + endOuterY) * .5, r, endA - Math.PI, endA, true);
      painter.arc(cx, cy, r2, endA, beginA, true);
      if (config["arc-start-cap"] != "round") painter.lineTo(begInnerX, begInnerY);else painter.arc((begInnerX + begOuterX) * .5, (begInnerY + begOuterY) * .5, r, beginA, beginA - Math.PI, true);
    });
    if (config["arc-start-cap"] == "butt") painter.closePath();
    return painter;
  };

  var initCircle = function initCircle(painter, cx, cy, r) {
    painter.beginPath();
    painter.moveTo(cx + r, cy);
    painter.arc(cx, cy, r, 0, Math.PI * 2);
    return painter;
  };

  var initRect = function initRect(painter, x, y, width, height) {
    painter.beginPath();
    painter.rect(x, y, width, height);
    return painter;
  };

  var linearGradient = function linearGradient(painter, x0, y0, x1, y1) {
    var gradient = painter.createLinearGradient(x0, y0, x1, y1);
    var enhanceGradient = {
      value: function value() {
        return gradient;
      },
      addColorStop: function addColorStop(stop, color) {
        gradient.addColorStop(stop, color);
        return enhanceGradient;
      }
    };
    return enhanceGradient;
  };

  var radialGradient = function radialGradient(painter, cx, cy, r) {
    var gradient = painter.createRadialGradient(cx, cy, 0, cx, cy, r);
    var enhanceGradient = {
      value: function value() {
        return gradient;
      },
      addColorStop: function addColorStop(stop, color) {
        gradient.addColorStop(stop, color);
        return enhanceGradient;
      }
    };
    return enhanceGradient;
  };

  var unSupportAttr = {};

  function painterFactory(painter, platform) {
    var config = {};
    var useConfig = platform == "uni-app" ? function (key, value) {
      if (["font-size", "font-family", "arc-start-cap", "arc-end-cap"].indexOf(key) > -1) {
        config[key] = value;
      } else {
        try {
          painter["set" + key[0].toUpperCase() + key.substr(1)](value);
        } catch (e) {
          if (!unSupportAttr[platform]) {
            unSupportAttr[platform] = {};
          }

          if (!unSupportAttr[platform][key]) {
            unSupportAttr[platform][key] = true;
            console.warn("内置画笔的" + key + "属性在" + platform + "平台上不支持！");
          }
        }
      }
    } : function (key, value) {
      if (key == "lineDash") {
        painter.setLineDash(value);
      } else if (["font-size", "font-family", "arc-start-cap", "arc-end-cap"].indexOf(key) > -1) {
        config[key] = value;
      } else if (key in initPainterConfig) {
        painter[key] = value;
      } else {
        throw new Error("Illegal configuration item of painter : " + key + " !");
      }
    };
    var enhancePainter = {
      config: function config() {
        if (arguments.length === 1) {
          if (_typeof(arguments[0]) !== "object") return painter[arguments[0]];

          for (var key in arguments[0]) {
            useConfig(key, arguments[0][key]);
          }
        } else if (arguments.length === 2) {
          useConfig(arguments[0], arguments[1]);
        }

        return enhancePainter;
      },
      fillText: function fillText(text, x, y, deg) {
        painter.save();
        initText(painter, config, x, y, deg || 0, platform).fillText(text, 0, 0);
        painter.restore();
        return enhancePainter;
      },
      strokeText: function strokeText(text, x, y, deg) {
        painter.save();
        initText(painter, config, x, y, deg || 0, platform).strokeText(text, 0, 0);
        painter.restore();
        return enhancePainter;
      },
      fullText: function fullText(text, x, y, deg) {
        painter.save();
        initText(painter, config, x, y, deg || 0, platform);
        painter.fillText(text, 0, 0);
        painter.strokeText(text, 0, 0);
        painter.restore();
        return enhancePainter;
      },
      beginPath: function beginPath() {
        painter.beginPath();
        return enhancePainter;
      },
      closePath: function closePath() {
        painter.closePath();
        return enhancePainter;
      },
      moveTo: function moveTo(x, y) {
        painter.moveTo(x, y);
        return enhancePainter;
      },
      lineTo: function lineTo(x, y) {
        painter.lineTo(x, y);
        return enhancePainter;
      },
      arc: function arc(x, y, r, beginDeg, deg) {
        painter.arc(x, y, r, beginDeg, beginDeg + deg, deg < 0);
        return enhancePainter;
      },
      fill: function fill() {
        painter.fill();
        return enhancePainter;
      },
      stroke: function stroke() {
        painter.stroke();
        return enhancePainter;
      },
      full: function full() {
        painter.fill();
        painter.stroke();
        return enhancePainter;
      },
      save: function save() {
        painter.save();
        return enhancePainter;
      },
      restore: function restore() {
        painter.restore();
        return enhancePainter;
      },
      quadraticCurveTo: function quadraticCurveTo(cpx, cpy, x, y) {
        painter.quadraticCurveTo(cpx, cpy, x, y);
        return enhancePainter;
      },
      bezierCurveTo: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        return enhancePainter;
      },
      clearRect: function clearRect(x, y, w, h) {
        painter.clearRect(x, y, w, h);
        return enhancePainter;
      },
      fillArc: function fillArc(cx, cy, r1, r2, beginDeg, deg) {
        initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).fill();
        return enhancePainter;
      },
      strokeArc: function strokeArc(cx, cy, r1, r2, beginDeg, deg) {
        initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).stroke();
        return enhancePainter;
      },
      fullArc: function fullArc(cx, cy, r1, r2, beginDeg, deg) {
        initArc(painter, config, cx, cy, r1, r2, beginDeg, deg);
        painter.fill();
        painter.stroke();
        return enhancePainter;
      },
      fillCircle: function fillCircle(cx, cy, r) {
        initCircle(painter, cx, cy, r).fill();
        return enhancePainter;
      },
      strokeCircle: function strokeCircle(cx, cy, r) {
        initCircle(painter, cx, cy, r).stroke();
        return enhancePainter;
      },
      fullCircle: function fullCircle(cx, cy, r) {
        initCircle(painter, cx, cy, r);
        painter.fill();
        painter.stroke();
        return enhancePainter;
      },
      fillRect: function fillRect(x, y, width, height) {
        initRect(painter, x, y, width, height).fill();
        return enhancePainter;
      },
      strokeRect: function strokeRect(x, y, width, height) {
        initRect(painter, x, y, width, height).stroke();
        return enhancePainter;
      },
      fullRect: function fullRect(x, y, width, height) {
        initRect(painter, x, y, width, height);
        painter.fill();
        painter.stroke();
        return enhancePainter;
      },
      createLinearGradient: function createLinearGradient(x0, y0, x1, y1) {
        return linearGradient(painter, x0, y0, x1, y1);
      },
      createRadialGradient: function createRadialGradient(cx, cy, r) {
        return radialGradient(painter, cx, cy, r);
      }
    };
    if (platform == "uni-app") enhancePainter.draw = function () {
      painter.draw();
      return enhancePainter;
    };
    return enhancePainter;
  }

  var CrossEndCanvas = function CrossEndCanvas(config) {
    return new Promise(function (resolve, reject) {
      if (config.platform == "web") {
        var canvas = document.getElementById(config.id);
        var width = canvas.clientWidth,
            height = canvas.clientHeight;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        canvas.setAttribute("width", width * 2);
        canvas.setAttribute("height", height * 2);
        var painter = canvas.getContext("2d");
        painter.scale(2, 2);
        resolve([painter, config.platform]);
      } else if (config.platform == "uni-app") {
        resolve([uni.createCanvasContext(config.id, config.target), config.platform]);
      } else if (config.platform == "weixin") {
        var dpr = wx.getSystemInfoSync().pixelRatio;
        wx.createSelectorQuery()["in"](config.target).select("#" + config.id).fields({
          node: true,
          size: true
        }).exec(function (res) {
          var canvas = res[0].node;
          var painter = canvas.getContext("2d");
          canvas.width = res[0].width * dpr;
          canvas.height = res[0].height * dpr;
          painter.scale(dpr, dpr);
          resolve([painter, config.platform]);
        });
      } else {
        reject("你必须配置一个合法的平台");
      }
    }).then(function (data) {
      return painterFactory(data[0], data[1]);
    });
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = CrossEndCanvas;
  } else {
    window.CrossEndCanvas = CrossEndCanvas;
  }
})();

        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/knowpedia/mathFormula/config.js
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
  mathFormula: {
    "font-size": 12,
    "padding-size": 3
  }
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/knowpedia/mathFormula/mathFormula/draw.js
/*****************************************************************/
window.__etcpack__bundleSrc__['6']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    // 绘制括号
__etcpack__scope_bundle__.drawBracket = function drawBracket(painter, type, position, x, y, size) {
  if (type == 'small') {
    if (position == 'left') {
      painter.beginPath().moveTo(x + 10, y).quadraticCurveTo(x, y + size * 0.5, x + 10, y + size).stroke();
    } else if (position = 'right') {
      painter.beginPath().moveTo(x, y).quadraticCurveTo(x + 10, y + size * 0.5, x, y + size).stroke();
    }
  } else if (type == 'middle') {
    if (position == 'left') {
      painter.beginPath().lineTo(x + 10, y).lineTo(x + 5, y).lineTo(x + 5, y + size).lineTo(x + 10, y + size).stroke();
    } else if (position = 'right') {
      painter.beginPath().lineTo(x, y).lineTo(x + 5, y).lineTo(x + 5, y + size).lineTo(x, y + size).stroke();
    }
  } else if (type == 'big') {
    if (position == 'left') {
      painter.beginPath().lineTo(x + 10, y).lineTo(x + 5, y + 3).lineTo(x + 5, y + size * 0.5 - 3).lineTo(x + 2, y + size * 0.5).lineTo(x + 5, y + size * 0.5 + 3).lineTo(x + 5, y + size - 3).lineTo(x + 10, y + size).stroke();
    } else if (position = 'right') {
      painter.beginPath().lineTo(x, y).lineTo(x + 5, y + 3).lineTo(x + 5, y + size * 0.5 - 3).lineTo(x + 7, y + size * 0.5).lineTo(x + 5, y + size * 0.5 + 3).lineTo(x + 5, y + size - 3).lineTo(x, y + size).stroke();
    }
  }
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/knowpedia/mathFormula/mathFormula/$mathFormula.js
/*****************************************************************/
window.__etcpack__bundleSrc__['7']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 用于捕获用户意图的一系列方法
 */
__etcpack__scope_args__=window.__etcpack__getBundle('8');
var calcSize =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var isString=__etcpack__scope_args__.isString;
var isNumber=__etcpack__scope_args__.isNumber;

__etcpack__scope_args__=window.__etcpack__getBundle('5');
var config =__etcpack__scope_args__.default;


var formatBasic = function formatBasic(p1) {
  if (isString(p1) || isNumber(p1)) {
    var contentSize = calcSize(p1);
    return {
      width: contentSize.width + config.mathFormula["padding-size"] * 2,
      height: contentSize.height + config.mathFormula["padding-size"] * 2,
      contents: [p1],
      type: 'string'
    };
  } else {
    return p1;
  }
};

var helpSize = {};

var getContentSize = function getContentSize(p1) {
  if (!(p1 in helpSize)) {
    helpSize[p1] = calcSize(p1);
  }

  return helpSize[p1];
};

var mathFormula = {
  // 根号
  gen: function gen(p1) {
    var p1Obj = formatBasic(p1);
    return {
      width: p1Obj.width + 5 + config.mathFormula["padding-size"] * 2,
      height: p1Obj.height + config.mathFormula["padding-size"] * 2,
      contents: [p1Obj],
      type: 'gen'
    };
  },
  // 极限
  limt: function limt(p1, p2) {
    var p1Obj = formatBasic(p1);
    var p2Obj = formatBasic(p2); // 对底部趋近进行兼容

    p1Obj.width -= config.mathFormula["padding-size"] * 2;
    p1Obj.height -= config.mathFormula["padding-size"] * 2;
    var limtSize = getContentSize('limt');
    var leftHeight = limtSize.height + p1Obj.height * 2;
    return {
      width: p1Obj.width + p2Obj.width + config.mathFormula["padding-size"] * 2,
      height: (leftHeight > p2Obj.height ? leftHeight : p2Obj.height) * 0.5 + p2Obj.height * 0.5,
      contents: [p1Obj, p2Obj],
      type: 'limt',
      _help: {
        limtSize: limtSize,
        leftWidth: p1Obj.width
      }
    };
  },
  // 求和
  sum: function sum(p1, p2, p3) {
    var p1Obj = formatBasic(p1);
    var p2Obj = formatBasic(p2);
    var p3Obj = formatBasic(p3);
    var leftWidth = Math.max(p1Obj.width, p2Obj.width, 20);
    return {
      width: leftWidth + p3Obj.width + config.mathFormula["padding-size"] * 2,
      height: Math.max(Math.max(p1Obj.height, p2Obj.height) * 2 + 20, p3Obj.height) + config.mathFormula["padding-size"] * 2,
      contents: [p1Obj, p2Obj, p3Obj],
      type: "sum",
      _help: {
        leftWidth: leftWidth,
        p1Height: p1Obj.height,
        p1Width: p1Obj.width,
        p2Height: p2Obj.height,
        p2Width: p2Obj.width,
        rightHeight: p3Obj.height
      }
    };
  },
  // 拼接组合
  join: function join() {
    var pxObjs = [],
        width = 0,
        height = 0;

    for (var _len = arguments.length, px = new Array(_len), _key = 0; _key < _len; _key++) {
      px[_key] = arguments[_key];
    }

    for (var _i = 0, _px = px; _i < _px.length; _i++) {
      var p = _px[_i];
      var pxObj = formatBasic(p);
      pxObjs.push(pxObj);
      width += pxObj.width;
      height = pxObj.height > height ? pxObj.height : height;
    }

    return {
      width: width + config.mathFormula["padding-size"] * 2,
      height: height + config.mathFormula["padding-size"] * 2,
      contents: pxObjs,
      type: "join"
    };
  },
  // 矩阵和行列式
  matrix: function matrix(p1, p2) {
    var pxObjs = []; // 分别用于记录当前行最高多少和当前列最宽多少

    var rowMax = [],
        colMax = [];

    for (var i in p1) {
      rowMax[i] = 0;
    }

    for (var j in p1[0]) {
      colMax[j] = 0;
    }

    for (var _i2 in p1) {
      var rowPxObjs = [],
          row = p1[_i2];

      for (var _j in row) {
        var col = row[_j];
        var colPxObj = formatBasic(col);
        rowPxObjs.push(colPxObj); // 校对行和列的最值

        if (rowMax[_i2] < colPxObj.height) rowMax[_i2] = colPxObj.height;
        if (colMax[_j] < colPxObj.width) colMax[_j] = colPxObj.width;
      }

      pxObjs.push(rowPxObjs);
    } // 计算得出宽和高


    var width = 0,
        height = 0;

    for (var _i3 = 0, _rowMax = rowMax; _i3 < _rowMax.length; _i3++) {
      var value = _rowMax[_i3];
      height += value;
    }

    for (var _i4 = 0, _colMax = colMax; _i4 < _colMax.length; _i4++) {
      var _value = _colMax[_i4];
      width += _value;
    } // 计算中心位置


    var rowCenter = [],
        colCenter = [];
    rowCenter[0] = config.mathFormula["padding-size"] + rowMax[0] * 0.5;
    colCenter[0] = config.mathFormula["padding-size"] + colMax[0] * 0.5 + 10;

    for (var _i5 = 1; _i5 < rowMax.length; _i5++) {
      rowCenter[_i5] = rowCenter[_i5 - 1] + (rowMax[_i5 - 1] + rowMax[_i5]) * 0.5;
    }

    for (var _j2 = 1; _j2 < colMax.length; _j2++) {
      colCenter[_j2] = colCenter[_j2 - 1] + (colMax[_j2 - 1] + colMax[_j2]) * 0.5;
    }

    return {
      width: width + config.mathFormula["padding-size"] * 2 + 20,
      height: height + config.mathFormula["padding-size"] * 2,
      contents: pxObjs,
      type: "matrix",
      _help: {
        isHLS: p2,
        rowCenter: rowCenter,
        colCenter: colCenter
      }
    };
  },
  // 除
  division: function division(p1, p2) {
    var p1Obj = formatBasic(p1);
    var p2Obj = formatBasic(p2);
    return {
      width: Math.max(p1Obj.width, p2Obj.width) + config.mathFormula["padding-size"] * 2,
      height: p1Obj.height + p2Obj.height + 2 + config.mathFormula["padding-size"] * 2,
      contents: [p1Obj, p2Obj],
      type: "division"
    };
  },
  // 括号
  // p2表示括号的类型，可选的有：
  // small、middle、big，分别表示，小括号、中括号、大括号
  bracket: function bracket(p1, p2) {
    var p1Obj = formatBasic(p1);
    return {
      width: p1Obj.width + 20 + config.mathFormula["padding-size"] * 2,
      height: p1Obj.height + config.mathFormula["padding-size"] * 2,
      contents: [p1Obj],
      type: "bracket",
      _help: {
        type: p2
      }
    };
  },
  // 特殊位置
  rightTop: function rightTop(p1, p2) {
    var p1Obj = formatBasic(p1);
    var p2Obj = formatBasic(p2);
    return {
      width: p1Obj.width + p2Obj.width - config.mathFormula["padding-size"] * 2,
      height: p1Obj.height + p2Obj.height - config.mathFormula["padding-size"] * 2 - 5,
      contents: [p1Obj, p2Obj],
      type: "rightTop",
      _help: {
        p1Width: p1Obj.width,
        p1Height: p1Obj.height
      }
    };
  },
  rightBottom: function rightBottom(p1, p2) {
    var p1Obj = formatBasic(p1);
    var p2Obj = formatBasic(p2);
    return {
      width: p1Obj.width + p2Obj.width - config.mathFormula["padding-size"] * 2,
      height: p1Obj.height + p2Obj.height - config.mathFormula["padding-size"] * 2 - 5,
      contents: [p1Obj, p2Obj],
      type: "rightBottom",
      _help: {
        p1Width: p1Obj.width,
        p2Height: p2Obj.height
      }
    };
  },
  // 方程组
  equationSet: function equationSet() {
    var pxObjs = [],
        width = 0,
        height = 0,
        pxTop = config.mathFormula["padding-size"],
        pxTops = [];

    for (var _len2 = arguments.length, px = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      px[_key2] = arguments[_key2];
    }

    for (var _i6 = 0, _px2 = px; _i6 < _px2.length; _i6++) {
      var p = _px2[_i6];
      var pxObj = formatBasic(p);
      pxObjs.push(pxObj);
      height += pxObj.height;
      width = pxObj.width > width ? pxObj.width : width;
      pxTops.push(pxTop);
      pxTop += pxObj.height;
    }

    return {
      width: width + 10 + config.mathFormula["padding-size"] * 2,
      height: height + config.mathFormula["padding-size"] * 2,
      contents: pxObjs,
      type: "equationSet",
      _help: {
        pxTops: pxTops
      }
    };
  },
  // 上线
  upLine: function upLine(p1) {
    var p1Obj = formatBasic(p1);
    return {
      width: p1Obj.width,
      height: p1Obj.height + config.mathFormula["padding-size"],
      contents: [p1Obj],
      type: "upLine"
    };
  },
  // 下线
  downLine: function downLine(p1) {
    var p1Obj = formatBasic(p1);
    return {
      width: p1Obj.width,
      height: p1Obj.height + config.mathFormula["padding-size"],
      contents: [p1Obj],
      type: "downLine"
    };
  },
  // 绝对值
  absoluteValue: function absoluteValue(p1) {
    var p1Obj = formatBasic(p1);
    return {
      width: p1Obj.width + config.mathFormula["padding-size"] * 2,
      height: p1Obj.height,
      contents: [p1Obj],
      type: "absoluteValue"
    };
  },
  // 定积分和不定积分
  integral: function integral(p1, p2) {
    var p3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var p4 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var p1Obj = formatBasic(p1);
    var p2Obj = formatBasic(p2);
    var p3Obj = formatBasic(p3);
    var p4Obj = formatBasic(p4);
    return {
      width: Math.max(p1Obj.width + p2Obj.width, p3Obj.width - 5, p4Obj.width) + 15 + config.mathFormula["padding-size"] * 2,
      height: p1Obj.height + p3Obj.height + p4Obj.height + config.mathFormula["padding-size"] * 2,
      contents: [p1Obj, p2Obj, p3Obj, p4Obj],
      type: "integral"
    };
  },
  // 可列交和并
  listedOr: function listedOr(p1, p2) {
    var p1Obj = formatBasic(p1);
    var p2Obj = formatBasic(p2);
    return {
      width: Math.max(p1Obj.width, p2Obj.width, 30) + config.mathFormula["padding-size"] * 2,
      height: p1Obj.height + p2Obj.height + 35 + config.mathFormula["padding-size"] * 2,
      contents: [p1Obj, p2Obj],
      type: 'listedOr'
    };
  },
  listedAnd: function listedAnd(p1, p2) {
    var p1Obj = formatBasic(p1);
    var p2Obj = formatBasic(p2);
    return {
      width: Math.max(p1Obj.width, p2Obj.width, 30) + config.mathFormula["padding-size"] * 2,
      height: p1Obj.height + p2Obj.height + 35 + config.mathFormula["padding-size"] * 2,
      contents: [p1Obj, p2Obj],
      type: 'listedAnd'
    };
  }
};
__etcpack__scope_bundle__.default= mathFormula;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/knowpedia/mathFormula/tool/calcSize.js
/*****************************************************************/
window.__etcpack__bundleSrc__['8']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    // 主要用于计算文字的宽
__etcpack__scope_args__=window.__etcpack__getBundle('9');
var xhtml =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('5');
var config =__etcpack__scope_args__.default;

var helpHidden = null;
__etcpack__scope_bundle__.default= function (texts) {
  if (!helpHidden) {
    helpHidden = xhtml.toNode("<div></div>"); // 设置一些必要的样式

    xhtml.setStyles(helpHidden, {
      "font-size": config.mathFormula['font-size'] + "px",
      "font-family": "sans-serif",
      "padding": "0",
      "border": "none",
      "position": "fixed",
      "bottom": "-100px"
    });
    xhtml.append(document.body, helpHidden);
  }

  helpHidden.innerText = texts;
  return xhtml.size(helpHidden);
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/xhtml.js
/*****************************************************************/
window.__etcpack__bundleSrc__['9']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 💡 - 提供常用的DOM操作方法
 * https://github.com/hai2007/tool.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */
// 命名空间路径
var namespace = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
/**
 * 结点操作补充
 */

__etcpack__scope_bundle__.default= {
  // 阻止冒泡
  "stopPropagation": function stopPropagation(event) {
    event = event || window.event;

    if (event.stopPropagation) {
      //这是其他非IE浏览器
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  // 阻止默认事件
  "preventDefault": function preventDefault(event) {
    event = event || window.event;

    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  // 判断是否是结点
  "isNode": function isNode(param) {
    return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
  },
  // 绑定事件
  "bind": function bind(dom, eventType, callback) {
    if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
      for (var i = 0; i < dom.length; i++) {
        this.bind(dom[i], eventType, callback);
      }

      return;
    }

    if (window.attachEvent) dom.attachEvent("on" + eventType, callback);else dom.addEventListener(eventType, callback, false);
  },
  // 去掉绑定事件
  "unbind": function unbind(dom, eventType, handler) {
    if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
      for (var i = 0; i < dom.length; i++) {
        this.unbind(dom[i], eventType, handler);
      }

      return;
    }

    if (window.detachEvent) dom.detachEvent('on' + eventType, handler);else dom.removeEventListener(eventType, handler, false);
  },
  // 在当前上下文context上查找结点
  // selectFun可选，返回boolean用以判断当前面对的结点是否保留
  "find": function find(context, selectFun, tagName) {
    if (!this.isNode(context)) return [];
    var nodes = context.getElementsByTagName(tagName || '*');
    var result = [];

    for (var i = 0; i < nodes.length; i++) {
      if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i]))) result.push(nodes[i]);
    }

    return result;
  },
  // 寻找当前结点的孩子结点
  // selectFun可选，返回boolean用以判断当前面对的结点是否保留
  "children": function children(dom, selectFun) {
    var nodes = dom.childNodes;
    var result = [];

    for (var i = 0; i < nodes.length; i++) {
      if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i]))) result.push(nodes[i]);
    }

    return result;
  },
  // 判断结点是否有指定class
  // clazzs可以是字符串或数组字符串
  // notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可
  "hasClass": function hasClass(dom, clazzs, notStrict) {
    if (clazzs.constructor !== Array) clazzs = [clazzs];
    var class_str = " " + (dom.getAttribute('class') || "") + " ";

    for (var i = 0; i < clazzs.length; i++) {
      if (class_str.indexOf(" " + clazzs[i] + " ") >= 0) {
        if (notStrict) return true;
      } else {
        if (!notStrict) return false;
      }
    }

    return true;
  },
  // 删除指定class
  "removeClass": function removeClass(dom, clazz) {
    var oldClazz = " " + (dom.getAttribute('class') || "") + " ";
    var newClazz = oldClazz.replace(" " + clazz.trim() + " ", " ");
    dom.setAttribute('class', newClazz.trim());
  },
  // 添加指定class
  "addClass": function addClass(dom, clazz) {
    if (this.hasClass(dom, clazz)) return;
    var oldClazz = dom.getAttribute('class') || "";
    dom.setAttribute('class', oldClazz + " " + clazz);
  },
  // 字符串变成结点
  // isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型
  "toNode": function toNode(template, isSvg) {
    var frame; // html和svg上下文不一样

    if (isSvg) frame = document.createElementNS(namespace.svg, 'svg');else {
      var frameTagName = 'div'; // 大部分的标签可以直接使用div作为容器
      // 部分特殊的需要特殊的容器标签

      if (/^<tr[> ]/.test(template)) {
        frameTagName = "tbody";
      } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {
        frameTagName = "tr";
      } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {
        frameTagName = "table";
      }

      frame = document.createElement(frameTagName);
    } // 低版本浏览器svg没有innerHTML，考虑是vue框架中，没有补充

    frame.innerHTML = template;
    var childNodes = frame.childNodes;

    for (var i = 0; i < childNodes.length; i++) {
      if (this.isNode(childNodes[i])) return childNodes[i];
    }
  },
  // 主动触发事件
  "trigger": function trigger(dom, eventType) {
    //创建event的对象实例。
    if (document.createEventObject) {
      // IE浏览器支持fireEvent方法
      dom.fireEvent('on' + eventType, document.createEventObject());
    } // 其他标准浏览器使用dispatchEvent方法
    else {
        var _event = document.createEvent('HTMLEvents'); // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为


        _event.initEvent(eventType, true, false);

        dom.dispatchEvent(_event);
      }
  },
  // 获取样式
  "getStyle": function getStyle(dom, name) {
    // 获取结点的全部样式
    var allStyle = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(dom, null) : dom.currentStyle; // 如果没有指定属性名称，返回全部样式

    return typeof name === 'string' ? allStyle.getPropertyValue(name) : allStyle;
  },
  // 获取元素位置
  "offsetPosition": function offsetPosition(dom) {
    var left = 0;
    var top = 0;
    top = dom.offsetTop;
    left = dom.offsetLeft;
    dom = dom.offsetParent;

    while (dom) {
      top += dom.offsetTop;
      left += dom.offsetLeft;
      dom = dom.offsetParent;
    }

    return {
      "left": left,
      "top": top
    };
  },
  // 获取鼠标相对元素位置
  "mousePosition": function mousePosition(dom, event) {
    var bounding = dom.getBoundingClientRect();
    if (!event || !event.clientX) throw new Error('Event is necessary!');
    return {
      "x": event.clientX - bounding.left,
      "y": event.clientY - bounding.top
    };
  },
  // 删除结点
  "remove": function remove(dom) {
    dom.parentNode.removeChild(dom);
  },
  // 设置多个样式
  "setStyles": function setStyles(dom, styles) {
    for (var key in styles) {
      dom.style[key] = styles[key];
    }
  },
  // 获取元素大小
  "size": function size(dom, type) {
    var elemHeight, elemWidth;

    if (type == 'content') {
      //内容
      elemWidth = dom.clientWidth - (this.getStyle(dom, 'padding-left') + "").replace('px', '') - (this.getStyle(dom, 'padding-right') + "").replace('px', '');
      elemHeight = dom.clientHeight - (this.getStyle(dom, 'padding-top') + "").replace('px', '') - (this.getStyle(dom, 'padding-bottom') + "").replace('px', '');
    } else if (type == 'padding') {
      //内容+内边距
      elemWidth = dom.clientWidth;
      elemHeight = dom.clientHeight;
    } else if (type == 'border') {
      //内容+内边距+边框
      elemWidth = dom.offsetWidth;
      elemHeight = dom.offsetHeight;
    } else if (type == 'scroll') {
      //滚动的宽（不包括border）
      elemWidth = dom.scrollWidth;
      elemHeight = dom.scrollHeight;
    } else {
      elemWidth = dom.offsetWidth;
      elemHeight = dom.offsetHeight;
    }

    return {
      width: elemWidth,
      height: elemHeight
    };
  },
  // 在被选元素内部的结尾插入内容
  "append": function append(el, template) {
    var node = this.isNode(template) ? template : this.toNode(template);
    el.appendChild(node);
    return node;
  },
  // 在被选元素内部的开头插入内容
  "prepend": function prepend(el, template) {
    var node = this.isNode(template) ? template : this.toNode(template);
    el.insertBefore(node, el.childNodes[0]);
    return node;
  },
  // 在被选元素之后插入内容
  "after": function after(el, template) {
    var node = this.isNode(template) ? template : this.toNode(template);
    el.parentNode.insertBefore(node, el.nextSibling);
    return node;
  },
  // 在被选元素之前插入内容
  "before": function before(el, template) {
    var node = this.isNode(template) ? template : this.toNode(template);
    el.parentNode.insertBefore(node, el);
    return node;
  }
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/type.js
/*****************************************************************/
window.__etcpack__bundleSrc__['10']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__etcpack__scope_args__=window.__etcpack__getBundle('11');
var _isObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('12');
var _isBoolean =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('14');
var _isNumber =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('15');
var _isString =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('16');
var _isSymbol =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('17');
var _isFunction =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('18');
var _isError =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('19');
var _isPlainObject =__etcpack__scope_args__.default;


var domTypeHelp = function domTypeHelp(types, value) {
  return value !== null && _typeof(value) === 'object' && types.indexOf(value.nodeType) > -1 && !_isPlainObject(value);
};
/*!
 * 💡 - 值类型判断方法
 * https://github.com/hai2007/tool.js/blob/master/type.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */


__etcpack__scope_bundle__.isObject = _isObject; // 基本类型

__etcpack__scope_bundle__.isUndefined = function isUndefined(input) {
  return input === undefined;
};
__etcpack__scope_bundle__.isNull = function isNull(input) {
  return input === null;
};
__etcpack__scope_bundle__.isBoolean = _isBoolean;
__etcpack__scope_bundle__.isNumber = _isNumber;
__etcpack__scope_bundle__.isString = _isString;
__etcpack__scope_bundle__.isSymbol = _isSymbol; // 引用类型

__etcpack__scope_bundle__.isFunction = _isFunction;
__etcpack__scope_bundle__.isArray = function isArray(input) {
  return Array.isArray(input);
};
__etcpack__scope_bundle__.isError = _isError;
__etcpack__scope_bundle__.isPlainObject = _isPlainObject; // 结点类型

__etcpack__scope_bundle__.isElement = function isElement(input) {
  return domTypeHelp([1, 9, 11], input);
};
__etcpack__scope_bundle__.isAttribute = function isAttribute(input) {
  return domTypeHelp([2], input);
};
__etcpack__scope_bundle__.isText = function isText(input) {
  return domTypeHelp([3], input);
};
__etcpack__scope_bundle__.isComment = function isComment(input) {
  return domTypeHelp([8], input);
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['11']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 判断一个值是不是Object。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Object返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
  var type = _typeof(value);

  return value != null && (type === 'object' || type === 'function');
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isBoolean.js
/*****************************************************************/
window.__etcpack__bundleSrc__['12']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__etcpack__scope_args__=window.__etcpack__getBundle('13');
var getType =__etcpack__scope_args__.default;

/**
 * 判断一个值是不是Boolean。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Boolean返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
  return value === true || value === false || value !== null && _typeof(value) === 'object' && getType(value) === '[object Boolean]';
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/getType.js
/*****************************************************************/
window.__etcpack__bundleSrc__['13']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toString = Object.prototype.toString;
/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */

__etcpack__scope_bundle__.default= function (value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return toString.call(value);
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isNumber.js
/*****************************************************************/
window.__etcpack__bundleSrc__['14']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__etcpack__scope_args__=window.__etcpack__getBundle('13');
var getType =__etcpack__scope_args__.default;

/**
 * 判断一个值是不是number。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是number返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
  return typeof value === 'number' || value !== null && _typeof(value) === 'object' && getType(value) === '[object Number]';
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['15']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__etcpack__scope_args__=window.__etcpack__getBundle('13');
var getType =__etcpack__scope_args__.default;

/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
  var type = _typeof(value);

  return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]';
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isSymbol.js
/*****************************************************************/
window.__etcpack__bundleSrc__['16']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__etcpack__scope_args__=window.__etcpack__getBundle('13');
var getType =__etcpack__scope_args__.default;

/**
 * 判断一个值是不是symbol。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是symbol返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
  var type = _typeof(value);

  return type === 'symbol' || type === 'object' && value !== null && getType(value) === '[object Symbol]';
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isFunction.js
/*****************************************************************/
window.__etcpack__bundleSrc__['17']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('13');
var getType =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('11');
var isObject =__etcpack__scope_args__.default;

/**
 * 判断一个值是不是Function。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Function返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
  if (!isObject(value)) {
    return false;
  }

  var type = getType(value);
  return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isError.js
/*****************************************************************/
window.__etcpack__bundleSrc__['18']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__etcpack__scope_args__=window.__etcpack__getBundle('19');
var isPlainObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('13');
var getType =__etcpack__scope_args__.default;

/**
 * 判断一个值是不是错误对象。
 * `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, or `URIError`
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是错误对象返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
  if (value === null || _typeof(value) !== 'object') {
    return false;
  }

  var type = getType(value);
  return type === '[object Error]' || type === '[object DOMException]' || typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value);
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isPlainObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['19']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__etcpack__scope_args__=window.__etcpack__getBundle('13');
var getType =__etcpack__scope_args__.default;

/**
 * 判断一个值是不是一个朴素的'对象'
 * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
  if (value === null || _typeof(value) !== 'object' || getType(value) != '[object Object]') {
    return false;
  } // 如果原型为null


  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/Promise.js
/*****************************************************************/
window.__etcpack__bundleSrc__['20']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */
__etcpack__scope_args__=window.__etcpack__getBundle('21');
var globalNAMESPACE =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('22');
var doResolve=__etcpack__scope_args__.doResolve;
var changeState=__etcpack__scope_args__.changeState;
var triggerEvent=__etcpack__scope_args__.triggerEvent;


function Promise(doback) {
  if (!(this instanceof Promise)) {
    // 所有的报错方式和内容我们都尽力和原生的保持一致，下同
    throw new TypeError('undefined is not a promise');
  }

  if (!isFunction(doback)) {
    throw new TypeError('Promise resolver ' + doback + ' is not a function');
  }
  /**
   * 参数初始化
   */
  // 当前的值


  this.__value = undefined; // 记录着由于then，catch或finally登记的方法
  // Array<onFulfilled|undefined, onRejected|undefined, callback|undefined>

  this.__hocks = []; // 状态

  this.__state = 'pending';
  /**
   * 准备完毕以后，开始处理
   */

  doResolve(doback, this);
} // 添加辅助方法


Promise.prototype.$$changeState = changeState;
Promise.prototype.$$triggerEvent = triggerEvent;
/**
 * 原型上的方法
 */
// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise,
// 返回一个新的 promise,
// 将以回调的返回值来resolve。

Promise.prototype.then = function (onFulfilled, onRejected) {
  this.__hocks.push([onFulfilled, onRejected, undefined]);

  if (this.__state != 'pending') {
    this.$$triggerEvent();
  }

  return this;
}; // 添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
// 当这个回调函数被调用，
// 新 promise 将以它的返回值来resolve，
// 否则如果当前promise 进入fulfilled状态，
// 则以当前promise的完成结果作为新promise的完成结果。


Promise.prototype["catch"] = function (onRejected) {
  this.__hocks.push([undefined, onRejected, undefined]);

  if (this.__state != 'pending') {
    this.$$triggerEvent();
  }

  return this;
}; // 添加一个事件处理回调于当前promise对象，
// 并且在原promise对象解析完毕后，
// 返回一个新的promise对象。
// 回调会在当前promise运行完毕后被调用，
// 无论当前promise的状态是完成(fulfilled)还是失败(rejected)。


Promise.prototype["finally"] = function (callback) {
  this.__hocks.push([undefined, undefined, callback]);

  if (this.__state != 'pending') {
    this.$$triggerEvent();
  }

  return this;
};
/**
 * 静态方法
 */
// 返回一个状态由给定value决定的Promise对象。
// 如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；
// 否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，
// 并且将该value传递给对应的then方法。
// 通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。


Promise.resolve = function (value) {
  if (isObject(value) && value.constructor === Promise) {
    return value;
  }

  return new Promise(function (resolve) {
    resolve(value);
  });
}; // 返回一个状态为失败的Promise对象，
// 并将给定的失败信息传递给对应的处理方法。


Promise.reject = function (reason) {
  return new Promise(function (resolve, reject) {
    reject(reason);
  });
}; // 这个方法返回一个新的promise对象，
// 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
// 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
// 这个新的promise对象在触发成功状态以后，
// 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
// 顺序跟iterable的顺序保持一致；
// 如果这个新的promise对象触发了失败状态，
// 它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
// Promise.all方法常被用于处理多个promise对象的状态集合.


Promise.all = function (iterable) {
  return new Promise(function (resolve, reject) {
    if (!isArray(iterable)) {
      return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
    }

    var resultData = Array.prototype.slice.call(iterable),
        num = 0;
    if (resultData.length == 0) resolve([]);

    var doHelp = function doHelp(index, item) {
      if (item.__state !== "pending") {
        num += 1;

        if (item.__state == 'rejected') {
          // 如果遇到第一个失败的，拒绝即可
          reject(item.__value);
        } else {
          resultData[index] = item.__value;

          if (num == resultData.length) {
            resolve(resultData);
          }
        }
      } else {
        setTimeout(function () {
          doHelp(index, item);
        });
      }
    };

    for (var i = 0; i < resultData.length; i++) {
      doHelp(i, resultData[i]);
    }
  });
}; // 等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。
// 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。


Promise.allSettled = function (iterable) {
  return new Promise(function (resolve, reject) {
    if (!isArray(iterable)) {
      return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
    }

    var resultData = Array.prototype.slice.call(iterable),
        num = 0;
    if (resultData.length == 0) resolve([]);

    var doHelp = function doHelp(index, item) {
      if (item.__state !== "pending") {
        num += 1;
        resultData[index] = {
          status: item.__state
        };

        if (item.__state == 'fulfilled') {
          resultData[index].value = item.__value;
        } else {
          resultData[index].reason = item.__value;
        }

        if (num == resultData.length) {
          resolve(resultData);
        }
      } else {
        setTimeout(function () {
          doHelp(index, item);
        });
      }
    };

    for (var i = 0; i < resultData.length; i++) {
      doHelp(i, resultData[i]);
    }
  });
}; // 收一个Promise对象的集合，
// 当其中的一个 promise 成功，
// 就返回那个成功的promise的值。


Promise.any = function (iterable) {
  return new Promise(function (resolve, reject) {
    if (!isArray(iterable)) {
      return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
    }

    var num = 0;
    if (iterable.length == 0) resolve(undefined);

    var doHelp = function doHelp(index, item) {
      if (item.__state !== "pending") {
        num += 1;

        if (item.__state == 'rejected') {
          if (num == iterable.length) {
            // 为了兼容性，我们放弃AggregateError
            return reject(new Error('All promises were rejected'));
          }
        } else {
          // 遇到第一个成功的，标记解决即可
          resolve(item.__value);
        }
      } else {
        setTimeout(function () {
          doHelp(index, item);
        });
      }
    };

    for (var i = 0; i < iterable.length; i++) {
      doHelp(i, iterable[i]);
    }
  });
}; // 当iterable参数里的任意一个子promise被成功或失败后，
// 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，
// 并返回该promise对象。


Promise.race = function (iterable) {
  return new Promise(function (resolve, reject) {
    if (!isArray(iterable)) {
      return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
    }

    if (iterable.length == 0) resolve(undefined);

    var doHelp = function doHelp(index, item) {
      if (item.__state !== "pending") {
        if (item.__state == 'rejected') {
          reject(item.__value);
        } else {
          resolve(item.__value);
        }
      } else {
        setTimeout(function () {
          doHelp(index, item);
        });
      }
    };

    for (var i = 0; i < iterable.length; i++) {
      doHelp(i, iterable[i]);
    }
  });
}; // 如果Promise不存在


if (!('Promise' in globalNAMESPACE)) {
  globalNAMESPACE['Promise'] = Promise;
} // 由于不同浏览器对一些具体的方法兼容不一样
// （比如一些浏览器支持Promise，可是不支持某个方法，需要对该方法进行兼容）
// 需要进一步嗅探
// 推迟支持
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/globalNAMESPACE.js
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var globalNAMESPACE = function () {
  // 浏览器环境
  if (typeof window !== 'undefined') return window; // nodejs环境

  if (typeof global !== 'undefined') return global;
  throw new Error('The current environment is not known!');
}(); // 获取当前环境的全局变量


__etcpack__scope_bundle__.default= globalNAMESPACE;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/Promise/doResolve.js
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('10');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;

__etcpack__scope_bundle__.changeState = function changeState(data, state) {
  // 更改状态
  this.__state = state;
  this.__value = data; // 由于状态改变了，触发对then，finnaly，catch等的执行更新

  this.$$triggerEvent();
};
__etcpack__scope_bundle__.triggerEvent = function triggerEvent() {
  // 这个方法的任务就是把__hocks中记录的方法依次执行了
  // 什么时候会停止？两种情况：
  // 1.队列执行完了
  // 2.遇到其中一个执行方法返回Promise
  var currentHock = null; // 同意状态就去寻找下一个onFulfilled
  // 拒绝状态就去寻找下一个onRejected
  // 数组下标0和1分别记录这两个状态，因此先根据状态确定下标即可

  var index = this.__state == 'fulfilled' ? 0 : 1,
      i; // 可能找到，可能到结尾都没有找到

  while (this.__hocks.length > 0) {
    if (isFunction(this.__hocks[0][index])) {
      currentHock = this.__hocks.shift();
      break;
    } // 对于路过的finally执行一下
    else if (isFunction(this.__hocks[0][2])) {
        this.__hocks[0][2]();
      }

    this.__hocks.shift();
  } // 如果找到了


  if (currentHock !== null) {
    var result = currentHock[index](this.__value); // 如果是Promise

    if (isObject(result) && result.constructor === this.constructor) {
      for (var i = 0; i < this.__hocks.length; i++) {
        result.__hocks.push(this.__hocks[i]);

        if (result.__state != 'pending') result.$$triggerEvent();
      }

      this.then = function (onFulfilled, onRejected) {
        result.then(onFulfilled, onRejected);
      };

      this["catch"] = function (onRejected) {
        result["catch"](onRejected);
      };

      this["finally"] = function (callback) {
        result["finally"](callback);
      };
    } // 否则
    else {
        this.__value = result;
        this.__state = "fulfilled";
        this.$$triggerEvent();
      }
  }
};
__etcpack__scope_bundle__.doResolve = function doResolve(doback, that) {
  // 防止重复修改状态
  var done = false;

  try {
    doback(function (value) {
      if (done) return;
      done = true;
      that.$$changeState(value, 'fulfilled');
    }, function (reason) {
      if (done) return;
      done = true;
      that.$$changeState(reason, 'rejected');
    });
  } catch (error) {
    if (done) return;
    done = true;
    that.$$changeState(error, 'rejected');
  }
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/style/normalize.css
/*****************************************************************/
window.__etcpack__bundleSrc__['23']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "/*!\n * 👁️ - 统一不同浏览器的基础样式\n * https://github.com/hai2007/style.css/blob/master/normalize.css\n *\n * author hai2007 < https://hai2007.gitee.io/sweethome >\n *\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\n * Released under the MIT license\n */\n\nhtml {\n    /* 防止iPhone在坚屏转向横屏时放大文字 */\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    /* 统一行高 */\n    line-height: 1.15;\n}\n\nbutton,\ninput {\n    /* 兼容部分手机下border不显示问题 */\n    border: 1px solid #b2b2bd;\n}\n\narticle,\nfooter,\nheader,\nnav,\nsection {\n    /* 修正旧浏览器未定义的块级元素 */\n    display: block;\n}\n\ncanvas,\nsvg {\n    /* 修正旧浏览器未定义的行内块元素 */\n    display: inline-block;\n}\n\n* {\n    /* 统一不同浏览器盒子尺寸计算方法 */\n    box-sizing: border-box;\n}\n\n::-ms-clear,\n::-ms-reveal {\n    /* 去掉IE浏览器输入框叉叉和眼睛 */\n    display: none;\n}\n\nimg {\n    /* 针对火狐浏览器在img标签没有src时候的差异修复 */\n    display: inline-block;\n}\n\nhtml {\n    /* 设置默认字体为统一的安全字体 */\n    font-family: sans-serif;\n}\n\na {\n    /* 默认去掉下划线 */\n    text-decoration: none;\n}\n\nli {\n    /* 去掉前置索引 */\n    list-style-type: none;\n}\n\nul,\nol,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    /* 去掉不喜欢的间距 */\n    -webkit-margin-before: 0;\n    -webkit-margin-after: 0;\n    -webkit-padding-start: 0;\n    /* 去掉不喜欢的间距，针对火狐浏览器等 */\n    margin-block-end: 0;\n    margin-block-start: 0;\n    padding-inline-start: 0;\n    /* 修改IE和其它浏览器不一致问题 */\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    /* 去掉默认的8px */\n    margin: 0;\n}\n\ntable {\n    /* 设置默认表格边框合并为一个单一的边框 */\n    border-collapse: collapse;\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/style/style.css
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "html {\n    font-size: 100px;\n}\n\nbody {\n    font-size: .16rem;\n}\n\n/* 补充样式 */\n.center-line{\n    text-align: center;\n    margin: 10px 0;\n    display: block;\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/style/doc.css
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = ".doc-view {\n    width: 7rem;\n    margin: auto;\n    padding-bottom: 20px;\n}\n\n.doc-view>header {\n    font-size: .3rem;\n    padding: .3rem 0 .2rem 0;\n}\n\n.doc-view>h1 {\n    font-size: .18rem;\n    line-height: 2em;\n    margin-top: .2rem;\n}\n\n.sub-title {\n    color: #555;\n    font-size: .8em;\n    margin: .1em .3em;\n}\n\n.doc-view>h1::before {\n    content: \"#\";\n    color: #2396b9;\n    margin-right: .05rem;\n}\n\n\n.doc-view>h2 {\n    font-size: .15rem;\n    padding: .1rem 0;\n    margin-top: .3rem;\n    font-weight: 800;\n}\n\n.doc-view>p {\n    line-height: 1.6em;\n    text-indent: 2em;\n    color: rgb(60, 57, 57);\n    font-weight: 400;\n    font-size: .14rem;\n    margin: .1rem 0;\n}\n\n.doc-view .important {\n    color: red;\n    font-weight: 800;\n    padding: 0 2px;\n}\n\n.doc-view .url {\n    text-decoration: underline;\n    color: rgb(2, 141, 2);\n}\n\n.doc-view>ul {\n    margin-left: .5rem;\n}\n\n.doc-view>ul li {\n    line-height: 2em;\n    font-size: .13rem;\n    color: #000000;\n}\n\n.doc-view .link {\n    text-decoration: underline;\n    margin: 0 10px;\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/style/menu.css
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "div.menu-view {\n    height: 100vh;\n    white-space: nowrap;\n}\n\ndiv.menu-view>div {\n    height: 100vh;\n    overflow: auto;\n    display: inline-block;\n    vertical-align: top;\n    white-space: normal;\n}\n\n\ndiv.menu-view>div:first-child {\n    width: 2.8rem;\n    padding: .2rem;\n}\n\ndiv.menu-view>div:first-child h3,\ndiv.menu-view>div:first-child h4 {\n    font-weight: 400;\n    font-size: .14rem;\n    color: #304455;\n    cursor: pointer;\n    display: inline-block;\n    margin: .07rem 0;\n    height: 1.2em;\n}\n\ndiv.menu-view>div:first-child h3:hover,\ndiv.menu-view>div:first-child h4:hover {\n    border-bottom: 2px solid #2396b9;\n}\n\ndiv.menu-view>div:first-child h2 {\n    padding: 30px 0;\n    font-size: .16rem;\n}\n\ndiv.menu-view>div:first-child li {\n    margin-left: 1em;\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/quick-paper/directive/q-code.js
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__etcpack__scope_args__=window.__etcpack__getBundle('9');
var xhtml =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('28');
var OpenWebEditor =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= {
  inserted: function inserted(el, binding) {
    var code = el.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    var owe = new OpenWebEditor({
      // 编辑器挂载点
      el: el,
      // 初始化文本
      content: code,
      // 是否只读
      readonly: binding.type != 'editor',
      // 着色语言
      shader: [binding.exp || 'javascript', {
        insign: "#000000",
        "css": {
          insign: "#000000"
        },
        "javascript": {
          insign: "#000000"
        }
      }],
      // 设置颜色
      color: {
        background: "rgb(239, 235, 234)",

        /*编辑器背景*/
        text: "#000000",

        /*文本颜色*/
        number: "#888484",

        /*行号颜色*/
        edit: "#eaeaf1",

        /*编辑行背景色*/
        cursor: "#ff0000",

        /*光标颜色*/
        select: "gray"
        /*选择背景*/

      },
      // 是否隐藏行号
      // 如果只有一行，就不显示行号(编辑界面一定显示)
      noLineNumber: !/\n/.test(code)
    }); // 添加复制按钮

    var btnNode = xhtml.prepend(el, '<span class="copy-btn" title="复制到剪切板">复制<span></span></span>');
    xhtml.bind(btnNode, 'click', function () {
      owe.copy(function () {
        alert('复制成功');
      }, function (error) {
        console.log(error);
        alert('复制失败');
      });
    });
    xhtml.setStyles(btnNode, _defineProperty({
      position: "absolute",
      right: "10px",
      top: "6px",
      border: "none",
      outline: 0,
      padding: "4p 10p",
      transition: "0.2s",
      "font-size": "12px",
      cursor: "pointer",
      "z-index": 1,
      "line-height": '20px',
      "background-color": "#f8f8f8"
    }, "padding", "5px 10px"));
    el.__owe__ = owe;
  }
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/open-web-editor/dist/open-web-editor.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
* Open Web Editor - ✍️ An Editor Used on the Browser Side.
* git+https://github.com/hai2007/Open-Web-Editor.git
*
* author 你好2007
*
* version 0.3.2
*
* Copyright (c) 2020-2021 hai2007 走一步，再走一步。
* Released under the MIT license
*
* Date:Tue Jul 20 2021 13:18:11 GMT+0800 (中国标准时间)
*/
"use strict";

function _toConsumableArray(t) {
  return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(t, e) {
  if (!t) return;
  if (typeof t === "string") return _arrayLikeToArray(t, e);
  var n = Object.prototype.toString.call(t).slice(8, -1);
  if (n === "Object" && t.constructor) n = t.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(t);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(t, e);
}

function _iterableToArray(t) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(t)) return Array.from(t);
}

function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) return _arrayLikeToArray(t);
}

function _arrayLikeToArray(t, e) {
  if (e == null || e > t.length) e = t.length;

  for (var n = 0, r = new Array(e); n < e; n++) {
    r[n] = t[n];
  }

  return r;
}

function _typeof(t) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function t(e) {
      return typeof e;
    };
  } else {
    _typeof = function t(e) {
      return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
  }

  return _typeof(t);
}

(function () {
  "use strict";

  function n(t) {
    var e = _typeof(t);

    return t != null && (e === "object" || e === "function");
  }

  var e = Object.prototype.toString;

  function r(t) {
    if (t == null) {
      return t === undefined ? "[object Undefined]" : "[object Null]";
    }

    return e.call(t);
  }

  function t(t) {
    var e = _typeof(t);

    return e === "string" || e === "object" && t != null && !Array.isArray(t) && r(t) === "[object String]";
  }

  function i(t) {
    if (!n(t)) {
      return false;
    }

    var e = r(t);
    return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object Proxy]";
  }

  function o(t) {
    if (t === null || _typeof(t) !== "object" || r(t) != "[object Object]") {
      return false;
    }

    if (Object.getPrototypeOf(t) === null) {
      return true;
    }

    var e = t;

    while (Object.getPrototypeOf(e) !== null) {
      e = Object.getPrototypeOf(e);
    }

    return Object.getPrototypeOf(t) === e;
  }

  var l = function t(e, n) {
    return n !== null && _typeof(n) === "object" && e.indexOf(n.nodeType) > -1 && !o(n);
  };

  var s = t;
  var f = i;

  var a = function t(e) {
    return Array.isArray(e);
  };

  var u = function t(e) {
    return l([1, 9, 11], e);
  };

  var h = {
    stopPropagation: function t(e) {
      e = e || window.event;

      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
    },
    preventDefault: function t(e) {
      e = e || window.event;

      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    },
    bind: function t(e, n, r) {
      if (window.attachEvent) {
        e.attachEvent("on" + n, r);
      } else {
        e.addEventListener(n, r, false);
      }
    },
    trigger: function t(e, n) {
      var r;

      if (document.createEventObject) {
        r = document.createEventObject();
        e.fireEvent("on" + n, r);
      } else {
        r = document.createEvent("HTMLEvents");
        r.initEvent(n, true, false);
        e.dispatchEvent(r);
      }
    },
    toNode: function t(e) {
      var n = document.createElement("div");
      n.innerHTML = e;
      var r = n.childNodes;

      for (var i = 0; i < r.length; i++) {
        if (u(r[i])) return r[i];
      }

      return null;
    },
    appendTo: function t(e, n) {
      var r = u(n) ? n : this.toNode(n);
      e.appendChild(r);
      return r;
    },
    prependTo: function t(e, n) {
      var r = u(n) ? n : this.toNode(n);
      e.insertBefore(r, e.childNodes[0]);
      return r;
    },
    remove: function t(e) {
      e.parentNode.removeChild(e);
    },
    after: function t(e, n) {
      var r = u(n) ? n : this.toNode(n);
      e.parentNode.insertBefore(r, e.nextSibling);
      return r;
    },
    css: function t(e, n) {
      for (var r in n) {
        e.style[r] = n[r];
      }
    },
    attr: function t(e, n) {
      for (var r in n) {
        e.setAttribute(r, n[r]);
      }
    },
    position: function t(e, n) {
      n = n || window.event;
      var r = e.getBoundingClientRect();
      if (!n || !n.clientX) throw new Error("Event is necessary!");
      var i = {
        x: n.clientX - r.left + e.scrollLeft,
        y: n.clientY - r.top + e.scrollTop
      };
      return i;
    },
    copy: function t(e, n, r) {
      var i = this.appendTo(document.body, "<textarea>" + e + "</textarea>");
      i.select();

      try {
        var o = window.document.execCommand("copy", false, null);

        if (o) {
          if (f(n)) n();
        } else {
          if (f(r)) r();
        }
      } catch (t) {
        if (f(r)) r(t);
      }

      document.body.removeChild(i);
    }
  };

  function c(t) {
    this.__helpCalcDOM.innerText = t;
    return this.__helpCalcDOM.offsetWidth;
  }

  function _(t, e) {
    if (arguments.length < 2) e = e || this.__lineNum;
    var n = this._contentArray[e];
    if (t <= 40) return 0;
    if (t - 40 >= this.$$textWidth(n)) return n.length;
    var r = t - 40,
        i = 1;

    for (; i < n.length; i++) {
      var o = Math.abs(t - 40 - this.$$textWidth(n.substr(0, i)));
      if (o > r) break;
      r = o;
    }

    return i - 1;
  }

  function p(t, e) {
    return {
      x: this.$$textWidth(this._contentArray[e].substr(0, t)),
      y: e * 21
    };
  }

  function m() {
    return this.__cursor1.lineNum != this.__cursor2.lineNum || this.__cursor1.leftNum != this.__cursor2.leftNum;
  }

  function d(t, e, n) {
    var r = this;
    var i = "";
    i += "<div style='min-width: fit-content;white-space: nowrap;line-height:21px;height:21px;'>";
    var o = n ? "font-size:0;" : "";
    i += "<em style='" + o + "color:" + this._colorNumber + ";user-select: none;display:inline-block;font-style:normal;width:35px;text-align:right;margin-right:5px;'>" + (e + 1) + "</em>";
    t.forEach(function (t) {
      var e = t.content;
      e = e.replace(/\&/g, "&amp;");
      e = e.replace(/</g, "&lt;");
      e = e.replace(/>/g, "&gt;");
      i += "<span style='user-select: none;font-weight:" + r._fontWeight + ";white-space: pre;color:" + t.color + "'>" + e + "</span>";
    });
    return i + "</div>";
  }

  function y(t) {
    return {
      leftNum: t.__leftNum,
      lineNum: t.__lineNum,
      x: t.__cursorLeft,
      y: t.__cursorTop,
      lineHeight: 21
    };
  }

  function v() {
    var e = this;
    this._el.innerHTML = "";
    h.css(this._el, {
      "font-size": "12px",
      position: "relative",
      cursor: "text",
      "font-family": this._fontFamily,
      background: this._colorBackground,
      overflow: "auto"
    });
    h.bind(this._el, "click", function () {
      setTimeout(function () {
        e.__focusDOM.focus();
      });
    });
    this.__helpCalcDOM = h.appendTo(this._el, "<span></span>");
    h.css(this.__helpCalcDOM, {
      position: "absolute",
      "z-index": "-1",
      "white-space": "pre",
      top: 0,
      left: 0,
      color: "rgba(0,0,0,0)",
      "font-weight": this._fontWeight
    });
    this.__helpInputDOM = h.appendTo(this._el, "<div></div>");
    h.css(this.__helpInputDOM, {
      position: "absolute",
      "z-index": 1
    });
    h.bind(this.__helpInputDOM, "click", function (t) {
      h.stopPropagation(t);
      h.preventDefault(t);

      e.__focusDOM.focus();
    });
    this.__focusDOM = h.appendTo(this._el, "<textarea></textarea>");
    h.css(this.__focusDOM, {
      position: "absolute",
      width: "6px",
      "margin-top": "3px",
      height: "15px",
      "line-height": "15px",
      resize: "none",
      overflow: "hidden",
      padding: "0",
      outline: "none",
      border: "none",
      background: "rgba(0,0,0,0)",
      color: this._colorCursor
    });
    h.attr(this.__focusDOM, {
      wrap: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false"
    });

    if (this._readonly) {
      h.attr(this.__focusDOM, {
        readonly: true
      });
    }

    this.__showDOM = h.appendTo(this._el, "<div></div>");
    h.css(this.__showDOM, {
      padding: "10px 0"
    });
    this.__selectCanvas = h.appendTo(this._el, "<canvas></canvas>");
    h.css(this.__selectCanvas, {
      position: "absolute",
      left: "40px",
      top: "10px",
      opacity: "0.5"
    });
    this.$$updateCanvasSize(1, 1);
  }

  function N() {
    h.css(this.__focusDOM, {
      left: 40 + this.$$textWidth(this._contentArray[this.__lineNum]) + "px",
      top: 10 + this.__lineNum * 21 + "px"
    });
  }

  function g() {
    var n = this;

    if (this.__diff && this.__diff.beginNum + this.__diff.endNum > 10) {
      var t = this.__showDOM.childNodes;
      var e = t.length;

      for (var r = e - this.__diff.endNum - 1; r >= this.__diff.beginNum; r--) {
        h.remove(t[r]);
      }

      if (this.__diff.beginNum > 0) {
        for (var i = this.__formatData.length - 1 - this.__diff.endNum; i >= this.__diff.beginNum; i--) {
          h.after(t[this.__diff.beginNum - 1], this.$$toTemplate(this.__formatData[i], i, this._noLineNumber));
        }
      } else {
        for (var o = this.__formatData.length - this.__diff.endNum - 1; o >= 0; o--) {
          h.prependTo(this.__showDOM, this.$$toTemplate(this.__formatData[o], o, this._noLineNumber));
        }
      }

      t = this.__showDOM.childNodes;

      for (var l = this.__diff.beginNum; l < this.__formatData.length; l++) {
        t[l].getElementsByTagName("em")[0].innerText = l + 1;
      }
    } else if (this.__diff != "not update") {
      var s = "";

      this.__formatData.forEach(function (t, e) {
        s += n.$$toTemplate(t, e, n._noLineNumber);
      });

      this.__showDOM.innerHTML = s;
    }

    this.__diff = "not update";
    var a = this.__showDOM.childNodes[this.__lineNum];

    if (!this._readonly && this.__lineDom) {
      this.__lineDom.style.backgroundColor = "rgba(0, 0, 0, 0)";
      a.style.backgroundColor = this._colorEdit;
    }

    this.__lineDom = a;
  }

  function $() {
    var l = this;

    var s = this.__selectCanvas.getContext("2d");

    s.fillStyle = this._colorSelect;
    s.clearRect(0, 0, this.__selectCanvas.scrollWidth, this.__selectCanvas.scrollHeight);

    var t = function t(e, n, r) {
      var i = l.$$calcCanvasXY(e, r);
      var o = l.$$calcCanvasXY(n, r);

      if (e == n && e == 0) {
        s.fillRect(i.x, i.y, 5, 21);
      } else {
        s.fillRect(i.x, i.y, o.x - i.x, 21);
      }
    };

    if (this.__cursor1.lineNum == this.__cursor2.lineNum && this.__cursor1.leftNum == this.__cursor2.leftNum) return;
    s.beginPath();

    if (this.__cursor1.lineNum == this.__cursor2.lineNum) {
      t(this.__cursor1.leftNum, this.__cursor2.leftNum, this.__cursor1.lineNum);
    } else {
      var e, n;

      if (this.__cursor1.lineNum < this.__cursor2.lineNum) {
        e = this.__cursor1;
        n = this.__cursor2;
      } else {
        e = this.__cursor2;
        n = this.__cursor1;
      }

      t(e.leftNum, this._contentArray[e.lineNum].length, e.lineNum);
      t(0, n.leftNum, n.lineNum);

      for (var r = e.lineNum + 1; r < n.lineNum; r++) {
        t(0, this._contentArray[r].length, r);
      }
    }
  }

  function b() {
    this.__cursorTop = this.__lineNum * 21 + 10;
    this.__cursorLeft = 40 + this.$$textWidth(this._contentArray[this.__lineNum].substring(0, this.__leftNum));
    h.css(this.__focusDOM, {
      top: this.__cursorTop + "px",
      left: this.__cursorLeft + "px"
    });
  }

  function w(t, e) {
    if (arguments.length < 2) {
      t = this._el.scrollWidth - 40;
      e = this._el.scrollHeight - 10;
    }

    h.css(this.__selectCanvas, {
      width: t + "px",
      height: e + "px"
    });
    h.attr(this.__selectCanvas, {
      width: t,
      height: e
    });
  }

  function A() {
    this.$$updateCanvasSize(1, 1);
    this.__cursor1 = {
      leftNum: 0,
      lineNum: 0
    };
    this.__cursor2 = {
      leftNum: 0,
      lineNum: 0
    };
  }

  function x() {
    var t = this.__cursor2,
        e = this.__cursor1;

    if (this.__cursor1.lineNum < this.__cursor2.lineNum) {
      t = this.__cursor1;
      e = this.__cursor2;
    } else if (this.__cursor1.lineNum == this.__cursor2.lineNum) {
      if (this.__cursor1.leftNum < this.__cursor2.leftNum) {
        t = this.__cursor1;
        e = this.__cursor2;
      }
    }

    var n = this._contentArray[t.lineNum].substr(0, t.leftNum) + this._contentArray[e.lineNum].substr(e.leftNum);

    this._contentArray.splice(t.lineNum, e.lineNum - t.lineNum + 1, n);

    this.__leftNum = this.__cursor1.leftNum = this.__cursor2.leftNum = t.leftNum;
    this.__lineNum = this.__cursor1.lineNum = this.__cursor2.lineNum = t.lineNum;
    this.$$cancelSelect();
  }

  var O = {
    48: [0, ")"],
    49: [1, "!"],
    50: [2, "@"],
    51: [3, "#"],
    52: [4, "$"],
    53: [5, "%"],
    54: [6, "^"],
    55: [7, "&"],
    56: [8, "*"],
    57: [9, "("],
    96: [0, 0],
    97: 1,
    98: 2,
    99: 3,
    100: 4,
    101: 5,
    102: 6,
    103: 7,
    104: 8,
    105: 9,
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    65: ["a", "A"],
    66: ["b", "B"],
    67: ["c", "C"],
    68: ["d", "D"],
    69: ["e", "E"],
    70: ["f", "F"],
    71: ["g", "G"],
    72: ["h", "H"],
    73: ["i", "I"],
    74: ["j", "J"],
    75: ["k", "K"],
    76: ["l", "L"],
    77: ["m", "M"],
    78: ["n", "N"],
    79: ["o", "O"],
    80: ["p", "P"],
    81: ["q", "Q"],
    82: ["r", "R"],
    83: ["s", "S"],
    84: ["t", "T"],
    85: ["u", "U"],
    86: ["v", "V"],
    87: ["w", "W"],
    88: ["x", "X"],
    89: ["y", "Y"],
    90: ["z", "Z"],
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    33: "page up",
    34: "page down",
    35: "end",
    36: "home",
    16: "shift",
    17: "ctrl",
    18: "alt",
    91: "command",
    92: "command",
    93: "command",
    9: "tab",
    20: "caps lock",
    32: "spacebar",
    8: "backspace",
    13: "enter",
    27: "esc",
    46: "delete",
    45: "insert",
    144: "number lock",
    145: "scroll lock",
    12: "clear",
    19: "pause",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    189: ["-", "_"],
    187: ["=", "+"],
    219: ["[", "{"],
    221: ["]", "}"],
    220: ["\\", "|"],
    186: [";", ":"],
    222: ["'", '"'],
    188: [",", "<"],
    190: [".", ">"],
    191: ["/", "?"],
    192: ["`", "~"]
  };
  var D = ["shift", "ctrl", "alt"];

  function M(t) {
    t = t || window.event;
    var e = t.keyCode || t.which;
    var n = O[e] || e;
    if (!n) return;
    if (n.constructor !== Array) n = [n, n];
    var r = n[0];
    var i = t.shiftKey ? "shift+" : "",
        o = t.altKey ? "alt+" : "",
        l = t.ctrlKey ? "ctrl+" : "";
    var s = "",
        a = l + i + o;

    if (D.indexOf(n[0]) >= 0) {
      n[0] = n[1] = "";
    }

    var u = t.code == "Key" + t.key && !i;
    s = a + (a == "" && u ? n[1] : n[0]);

    if (n[0] == "") {
      s = s.replace(/\+$/, "");
    }

    return s == "" ? r : s;
  }

  function k() {
    var a = this;
    var e = false;

    var n = function t(e) {
      var n = h.position(a._el, e);
      var r = Math.round((n.y - 20.5) / 21);
      if (r < 0) r = 0;
      if (r >= a._contentArray.length) r = a._contentArray.length - 1;
      return {
        leftNum: a.$$bestLeftNum(n.x, r),
        lineNum: r
      };
    };

    var u = function t() {
      var e = a.__cursor2,
          n = a.__cursor1;

      if (a.__cursor1.lineNum < a.__cursor2.lineNum) {
        e = a.__cursor1;
        n = a.__cursor2;
      } else if (a.__cursor1.lineNum == a.__cursor2.lineNum) {
        if (a.__cursor1.leftNum < a.__cursor2.leftNum) {
          e = a.__cursor1;
          n = a.__cursor2;
        }

        return a._contentArray[e.lineNum].substring(e.leftNum, n.leftNum);
      }

      var r = "";
      r += a._contentArray[e.lineNum].substr(e.leftNum) + "\n";

      for (var i = e.lineNum + 1; i < n.lineNum; i++) {
        r += a._contentArray[i] + "\n";
      }

      r += a._contentArray[n.lineNum].substr(0, n.leftNum);
      return r;
    };

    h.bind(this._el, "mousedown", function (t) {
      e = true;
      a.__cursor2 = a.__cursor1 = n(t);
      a.$$updateCanvasSize();
      a.$$updateSelectView();
    });
    h.bind(this._el, "mousemove", function (t) {
      if (!e) return;
      a.__cursor2 = n(t);
      a.$$updateSelectView();
    });
    h.bind(this._el, "mouseup", function () {
      return e = false;
    });
    h.bind(this._el, "click", function (t) {
      a.__helpInputDOM.innerHTML = "";
      var e = h.position(a._el, t);
      var n = Math.round((e.y - 20.5) / 21);
      if (n < 0 || n >= a._contentArray.length) return;
      a.__lineNum = n;
      a.__leftNum = a.$$bestLeftNum(e.x);
      a.$$updateCursorPosition();
      a.$$updateView();
    });

    var c = function t(e) {
      e = e || a.__focusDOM.value;
      e = a.$$filterText(e);
      a.__focusDOM.value = "";
      if (a.$$selectIsNotBlank()) a.$$deleteSelect();

      if (/^\n$/.test(e)) {
        if (a.__leftNum >= a._contentArray[a.__lineNum].length) {
          a._contentArray.splice(a.__lineNum + 1, 0, "");
        } else {
          a._contentArray.splice(a.__lineNum + 1, 0, a._contentArray[a.__lineNum].substring(a.__leftNum));

          a._contentArray[a.__lineNum] = a._contentArray[a.__lineNum].substring(0, a.__leftNum);
        }

        a.__lineNum += 1;
        a.__leftNum = 0;
      } else {
        var n = e.split(/\n/);

        if (a._contentArray == null) {
          a._contentArray = n;
          a.__lineNum = a._contentArray.length - 1;
          a.__leftNum = a._contentArray[a.__lineNum].length;
        } else if (n.length <= 1) {
          a._contentArray[a.__lineNum] = a._contentArray[a.__lineNum].substring(0, a.__leftNum) + e + a._contentArray[a.__lineNum].substring(a.__leftNum);
          a.__leftNum += e.length;
        } else {
          var r;

          var i = a._contentArray[a.__lineNum].substring(0, a.__leftNum);

          var o = a._contentArray[a.__lineNum].substring(a.__leftNum);

          n[0] = i + n[0];
          n[n.length - 1] += o;

          (r = a._contentArray).splice.apply(r, [a.__lineNum, 1].concat(_toConsumableArray(n)));

          a.__lineNum += n.length - 1;
          a.__leftNum = n[n.length - 1].length - o.length;
        }
      }

      a.__formatData = a.$$diff(a.$shader(a._contentArray.join("\n")));
      a.$$updateCursorPosition();
      a.$$updateView();

      a.__updated__();
    };

    h.bind(this.__focusDOM, "compositionstart", function () {
      a.__needUpdate = false;
      a.__focusDOM.style.color = "rgba(0,0,0,0)";
      a.__focusDOM.style.borderLeft = "1px solid " + a._colorCursor;
    });
    h.bind(this.__focusDOM, "compositionend", function () {
      a.__needUpdate = true;
      a.__focusDOM.style.color = a._colorCursor;
      a.__focusDOM.style.borderLeft = "none";
      c();
      if (a.$input != null) a.__helpInputEvent = a.$input(a.__helpInputDOM, y(a), a._contentArray) || {};
    });
    h.bind(this.__focusDOM, "input", function () {
      if (a.__needUpdate) {
        c();
        if (a.$input != null) a.__helpInputEvent = a.$input(a.__helpInputDOM, y(a), a._contentArray) || {};
      }
    });
    var _ = false;
    h.bind(this._el, "keyup", function (t) {
      var e = M(t);
      if (e == "command") _ = false;
    });
    h.bind(this._el, "keydown", function (t) {
      var e = M(t);
      if (e == "command") _ = true;

      if (_ && ["a", "c", "x"].indexOf(e) > -1) {
        e = "ctrl+" + e;
      }

      if (a.__helpInputDOM.innerHTML != "") {
        var n = a.__helpInputEvent[e];

        if (f(n)) {
          if (!n()) return;
        } else {
          a.__helpInputDOM.innerHTML = "";
        }
      }

      if (a._readonly && ["ctrl+a", "ctrl+c"].indexOf(e) < 0) return;

      switch (e) {
        case "ctrl+a":
          {
            a.__cursor1 = {
              leftNum: 0,
              lineNum: 0
            };
            a.__cursor2 = {
              lineNum: a._contentArray.length - 1,
              leftNum: a._contentArray[a._contentArray.length - 1].length
            };
            a.$$updateSelectView();
            break;
          }

        case "ctrl+c":
          {
            if (a.$$selectIsNotBlank()) {
              h.copy(u());

              a.__focusDOM.focus();
            }

            break;
          }

        case "ctrl+x":
          {
            if (a.$$selectIsNotBlank()) {
              h.copy(u());

              a.__focusDOM.focus();

              a.$$deleteSelect();
              a.__formatData = a.$$diff(a.$shader(a._contentArray.join("\n")));
              a.$$updateCursorPosition();
              a.$$updateView();
              a.$$cancelSelect();

              a.__updated__();
            }

            break;
          }

        case "tab":
          {
            h.stopPropagation(t);
            h.preventDefault(t);
            var r = "";

            for (var i = 0; i < a._tabSpace; i++) {
              r += " ";
            }

            if (a.$$selectIsNotBlank()) {
              var o = a.__cursor1.lineNum,
                  l = a.__cursor2.lineNum;

              if (o > l) {
                o = a.__cursor2.lineNum;
                l = a.__cursor1.lineNum;
              }

              for (var s = o; s <= l; s++) {
                a._contentArray[s] = r + a._contentArray[s];
              }

              a.__cursor1.leftNum += a._tabSpace;
              a.__cursor2.leftNum += a._tabSpace;
              a.__leftNum += a._tabSpace;
              a.__formatData = a.$$diff(a.$shader(a._contentArray.join("\n")));
              a.$$updateCursorPosition();
              a.$$updateView();
              a.$$updateCanvasSize();
              a.$$updateSelectView();

              a.__updated__();
            } else {
              c(r);
            }

            break;
          }

        case "up":
          {
            if (a.__lineNum <= 0) return;
            a.__lineNum -= 1;
            a.__leftNum = a.$$bestLeftNum(a.$$textWidth(a._contentArray[a.__lineNum + 1].substr(0, a.__leftNum)) + 40);
            a.$$updateCursorPosition();
            a.$$updateView();
            a.$$cancelSelect();
            a._el.scrollTop -= 21;
            break;
          }

        case "down":
          {
            if (a.__lineNum >= a._contentArray.length - 1) return;
            a.__lineNum += 1;
            a.__leftNum = a.$$bestLeftNum(a.$$textWidth(a._contentArray[a.__lineNum - 1].substr(0, a.__leftNum)) + 40);
            a.$$updateCursorPosition();
            a.$$updateView();
            a.$$cancelSelect();
            a._el.scrollTop += 21;
            break;
          }

        case "left":
          {
            if (a.__leftNum <= 0) {
              if (a.__lineNum <= 0) return;
              a.__lineNum -= 1;
              a.__leftNum = a._contentArray[a.__lineNum].length;
            } else {
              a.__leftNum -= 1;
            }

            a.$$updateCursorPosition();
            a.$$cancelSelect();
            break;
          }

        case "right":
          {
            if (a.__leftNum >= a._contentArray[a.__lineNum].length) {
              if (a.__lineNum >= a._contentArray.length - 1) return;
              a.__lineNum += 1;
              a.__leftNum = 0;
            } else {
              a.__leftNum += 1;
            }

            a.$$updateCursorPosition();
            a.$$cancelSelect();
            break;
          }

        case "backspace":
          {
            if (a.$$selectIsNotBlank()) {
              a.$$deleteSelect();
            } else {
              if (a.__leftNum <= 0) {
                if (a.__lineNum <= 0) return;
                a.__lineNum -= 1;
                a.__leftNum = a._contentArray[a.__lineNum].length;
                a._contentArray[a.__lineNum] += a._contentArray[a.__lineNum + 1];

                a._contentArray.splice(a.__lineNum + 1, 1);
              } else {
                a.__leftNum -= 1;
                a._contentArray[a.__lineNum] = a._contentArray[a.__lineNum].substring(0, a.__leftNum) + a._contentArray[a.__lineNum].substring(a.__leftNum + 1);
              }
            }

            a.__formatData = a.$$diff(a.$shader(a._contentArray.join("\n")));
            a.$$updateCursorPosition();
            a.$$updateView();
            a.$$cancelSelect();

            a.__updated__();

            break;
          }
      }
    });
  }

  var S = function t(e, n) {
    if (e.length != n.length) return false;

    for (var r = 0; r < e.length; r++) {
      if (e[r].content != n[r].content || e[r].color != n[r].color) return false;
    }

    return true;
  };

  function C(t) {
    var e = this.__formatData;

    if (e) {
      var n = 0;

      for (var r = 0; r < e.length && r < t.length; r++) {
        if (!S(e[r], t[r])) {
          break;
        }

        n += 1;
      }

      var i = 0;

      for (var o = 1; o <= e.length && o <= t.length; o++) {
        if (!S(e[e.length - o], t[t.length - o])) {
          break;
        }

        i += 1;
      }

      var l = Math.min(e.length, t.length);

      if (n + i >= l) {
        i = l - n - 1;
        if (i < 0) i = 0;
      }

      this.__diff = {
        beginNum: n,
        endNum: i
      };
    }

    return t;
  }

  function T(t) {
    var e = "";

    for (var n = 0; n < this._tabSpace; n++) {
      e += " ";
    }

    return t.replace(/\t/g, e);
  }

  function j(n, e) {
    var r = [];
    var i = 0;

    var t = function t(e) {
      return n.substring(i, e + i > n.length ? n.length : e + i);
    };

    var o = "";
    var l = "tag";

    var s = function t() {
      if (o != "") {
        r.push({
          color: {
            tag: e.selector,
            attr: e.attrKey,
            string: e.attrValue
          }[l],
          content: o
        });
      }

      o = "";
    };

    while (true) {
      if (t(2) == "/*") {
        s();

        while (t(2) !== "*/" && i < n.length) {
          o += n[i++];
        }

        r.push({
          color: e.annotation,
          content: o + t(2)
        });
        i += 2;
        o = "";
      } else if (["'", '"'].indexOf(t(1)) > -1) {
        var a = t(1);
        s();

        do {
          o += n[i++];
        } while (t(1) != a && i < n.length);

        if (t(1) != a) {
          a = "";
        } else {
          i += 1;
        }

        r.push({
          color: e.attrValue,
          content: o + a
        });
        o = "";
      } else if ([":", "{", "}", ";"].indexOf(t(1)) > -1) {
        s();
        r.push({
          color: e.insign,
          content: t(1)
        });
        o = "";

        if (t(1) == "{" || t(1) == ";") {
          l = "attr";
        } else if (t(1) == "}") {
          l = "tag";
        } else {
          l = "string";
        }

        i += 1;
      } else {
        if (i >= n.length) {
          s();
          break;
        } else {
          o += n[i++];
        }
      }
    }

    return r;
  }

  var E = ["abstract", "arguments", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"];

  function L(n, e) {
    var r = [];
    var i = 0;

    var t = function t(e) {
      return n.substring(i, e + i > n.length ? n.length : e + i);
    };

    var o = "";

    var l = function t() {
      if (o != "") {
        if (o[0] == "(") {
          r.push({
            color: e.insign,
            content: "("
          });
          o = o.substr(1);
        }

        r.push({
          color: e.text,
          content: o
        });
      }

      o = "";
    };

    while (true) {
      if (t(2) == "/*") {
        l();

        while (t(2) !== "*/" && i < n.length) {
          o += n[i++];
        }

        r.push({
          color: e.annotation,
          content: o + t(2)
        });
        i += 2;
        o = "";
      } else if (t(2) == "//") {
        l();

        while (t(1) !== "\n" && i < n.length) {
          o += n[i++];
        }

        r.push({
          color: e.annotation,
          content: o
        });
        o = "";
      } else if (["'", '"', "`"].indexOf(t(1)) > -1) {
        var s = t(1);
        l();

        do {
          o += n[i++];
        } while (t(1) != s && i < n.length);

        if (t(1) != s) {
          s = "";
        } else {
          i += 1;
        }

        r.push({
          color: e.string,
          content: o + s
        });
        o = "";
      } else if (t(1) == "(" && (o[0] == " " || i - o.length - 1 >= 0 && n[i - o.length - 1] == " ")) {
        r.push({
          color: e.funName,
          content: o
        });
        i += 1;
        o = "(";
      } else if (t(1) == "(") {
        r.push({
          color: e.execName,
          content: o
        });
        i += 1;
        o = "(";
      } else if ([";", "{", "}", "(", ")", ".", "\n", "=", "+", ">", "<", "[", "]", "-", "*", "/", "^", "*", "!"].indexOf(t(1)) > -1) {
        l();
        r.push({
          color: e.insign,
          content: t(1)
        });
        o = "";
        i += 1;
      } else if (t(1) == " " && E.indexOf(o.trim()) > -1) {
        r.push({
          color: e.key,
          content: o + " "
        });
        o = "";
        i += 1;
      } else {
        if (i >= n.length) {
          l();
          break;
        } else {
          o += n[i++];
        }
      }
    }

    return r;
  }

  function I(n, r) {
    var i = [];
    var o = 0;

    var l = function t(e) {
      return n.substring(o, e + o > n.length ? n.length : e + o);
    };

    var s = "";

    var t = function t() {
      if (s != "") {
        i.push({
          color: r.text,
          content: s
        });
      }

      s = "";
    };

    var e = function t() {
      var e = " ";
      if (l(1) == '"') e = '"';
      if (l(1) == "'") e = "'";

      do {
        s += n[o++];
      } while (l(1) != e && o < n.length);

      if (e != " " && o < n.length) {
        s += e;
        o += 1;
      }

      i.push({
        color: r.attrValue,
        content: s
      });
      s = "";
    };

    while (true) {
      if (l(4) == "\x3c!--") {
        t();

        while (l(3) !== "--\x3e" && o < n.length) {
          s += n[o++];
        }

        i.push({
          color: r.annotation,
          content: s + l(3)
        });
        o += 3;
        s = "";
      } else if (l(2) == "</") {
        t();
        i.push({
          color: r.insign,
          content: "</"
        });
        o += 2;

        while (l(1) !== ">" && o < n.length) {
          s += n[o++];
        }

        if (s != "") {
          i.push({
            color: r.node,
            content: s
          });
          s = "";

          if (o < n.length) {
            i.push({
              color: r.insign,
              content: ">"
            });
            o += 1;
          }
        }
      } else if (l(1) == "<" && l(2) != "< ") {
        var a = "";
        t();
        i.push({
          color: r.insign,
          content: "<"
        });
        o += 1;

        while (l(1) != ">" && l(1) != " " && o < n.length) {
          s += n[o++];
        }

        if (s != "") {
          if (s == "style" || s == "script") {
            a = "</" + s + ">";
          }

          i.push({
            color: r.node,
            content: s
          });
          s = "";

          if (o < n.length) {
            while (o < n.length) {
              if (l(1) == ">") {
                t();
                i.push({
                  color: r.insign,
                  content: ">"
                });
                o += 1;
                break;
              } else if (l(1) != " ") {
                t();

                if (l(1) != '"' && l(1) != "'") {
                  while (l(1) != "=" && l(1) != ">" && o < n.length && l(1) != " ") {
                    s += n[o++];
                  }

                  if (s != "") {
                    i.push({
                      color: r.attrKey,
                      content: s
                    });
                    s = "";

                    if (l(1) == "=") {
                      i.push({
                        color: r.insign,
                        content: "="
                      });
                      o += 1;

                      if (o < n.length && l(1) != " " && l(1) != ">") {
                        e();
                      }
                    }
                  } else {
                    s += n[o++];
                  }
                } else if (l(1) == "=") {
                  i.push({
                    color: r.insign,
                    content: "="
                  });
                  o += 1;
                } else {
                  if (o < n.length && l(1) != " " && l(1) != ">") {
                    e();
                  }
                }
              } else {
                s += n[o++];
              }
            }
          }
        }

        if (a != "") {
          var u = o,
              c = s,
              _,
              f;

          while (l(a.length) != a && o < n.length) {
            s += n[o++];
          }

          if (o < n.length) {
            _ = a.replace(/<\//, "");
            f = {
              "style>": j,
              "script>": L
            }[_](s, {
              "style>": r._css,
              "script>": r._javascript
            }[_]);
            f.forEach(function (t) {
              i.push(t);
            });
            s = "";
          } else {
            s = c;
            o = u;
          }
        }
      } else {
        if (o >= n.length) {
          t();
          break;
        } else {
          s += n[o++];
        }
      }
    }

    return i;
  }

  var V = function t(e) {
    var r = [[]],
        i = 0;
    e.forEach(function (t) {
      var e = t.content.split(/\n/),
          n;
      r[i].push({
        color: t.color,
        content: e[0]
      });

      for (n = 1; n < e.length; n++) {
        i += 1;
        r.push([]);
        r[i].push({
          color: t.color,
          content: e[n]
        });
      }
    });
    return r;
  };

  var P = function t(e, n) {
    var r;

    for (r in n) {
      try {
        e[r] = n[r];
      } catch (t) {
        throw new Error("Illegal property value！");
      }
    }

    return e;
  };

  var W = {
    text: "#000000",
    annotation: "#6a9955",
    insign: "#ffffff",
    node: "#1e50b3",
    attrKey: "#1e83b1",
    attrValue: "#ac4c1e"
  };
  var B = {
    annotation: "#6a9955",
    insign: "#ffffff",
    selector: "#1e50b3",
    attrKey: "#1e83b1",
    attrValue: "#ac4c1e"
  };
  var z = {
    text: "#000000",
    annotation: "#6a9955",
    insign: "#ffffff",
    key: "#ff0000",
    string: "#ac4c1e",
    funName: "#1e50b3",
    execName: "#1e83b1"
  };

  function H(t, e) {
    e = e || {};
    var n, r;

    if (t == "html") {
      e._css = P(B, e.css);
      e._javascript = P(z, e.javascript);
      r = P(W, e);
      n = I;
    } else if (t == "css") {
      r = P(B, e);
      n = j;
    } else if (t == "javascript") {
      r = P(z, e);
      n = L;
    } else {
      throw new Error("Language not supported:" + t + ",The languages available include: html、css、javascript!");
    }

    return function (t) {
      return V(n(t, r));
    };
  }

  var K = function t(e) {
    var r = this;

    if (!(this instanceof t)) {
      throw new Error("Open-Web-Editor is a constructor and should be called with the `new` keyword");
    }

    if (u(e.el)) {
      var n = function t() {
        var e = [];

        r._contentArray.forEach(function (t) {
          e.push([{
            content: t,
            color: r._colorText
          }]);
        });

        return e;
      };

      var i = function t(e) {
        return e;
      };

      this._el = e.el;
      this._el.owe_terminal = "none";
      e.color = e.color || {};
      this._colorBackground = e.color.background || "#d6d6e4";
      this._colorText = e.color.text || "#000000";
      this._colorNumber = e.color.number || "#888484";
      this._colorEdit = e.color.edit || "#eaeaf1";
      this._colorCursor = e.color.cursor || "#ff0000";
      this._colorSelect = e.color.select || "#6c6cf1";
      this._fontFamily = e["font-family"] || "新宋体";
      this._fontWeight = e["font-weight"] || 600;
      this._tabSpace = e.tabSpace || 4;
      this._readonly = e.readonly || false;
      this._noLineNumber = e.noLineNumber || false;
      this._contentArray = s(e.content) ? (this.$$filterText(e.content) + "").split("\n") : [""];
      this.$shader = f(e.shader) ? e.shader : a(e.shader) ? H.apply(void 0, _toConsumableArray(e.shader)) : n;
      this.$format = f(e.format) ? e.format : i;
      this.$input = f(e.input) ? e.input : null;
    } else {
      throw new Error("options.el is not a element!");
    }

    this.$$initDom();
    this.__needUpdate = true;
    this.__lineNum = this._contentArray.length - 1;
    this.__leftNum = this._contentArray[this.__lineNum].length;
    this.__cursor1 = this.__cursor2 = {
      leftNum: 0,
      lineNum: 0
    };
    this.__formatData = this.$$diff(this.$shader(this._contentArray.join("\n")));
    this.$$initView();
    this.$$updateView();
    this.$$bindEvent();

    this.__updated__ = function () {};

    this.updated = function (t) {
      r.__updated__ = t;
    };

    this.valueOf = function (t) {
      if (t || t == "") {
        r._contentArray = null;
        r.__focusDOM.value = t;
        h.trigger(r.__focusDOM, "input");

        r.__focusDOM.focus();
      }

      return r._contentArray.join("\n");
    };

    this.input = function () {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (e != 0) {
        if (n != 0) {
          r._contentArray[r.__lineNum] = r._contentArray[r.__lineNum].substring(0, r.__leftNum + e) + r._contentArray[r.__lineNum].substring(r.__leftNum + e + n);
        }

        r.__leftNum += e;
      }

      r.__focusDOM.value = t;
      h.trigger(r.__focusDOM, "input");

      r.__focusDOM.focus();
    };

    this.format = function () {
      r._contentArray = r.$format(r._contentArray.join("\n"), r._tabSpace).split("\n");
      r.__lineNum = r._contentArray.length - 1;
      r.__leftNum = r._contentArray[r.__lineNum].length;
      r.__formatData = r.$$diff(r.$shader(r._contentArray.join("\n")));
      r.$$updateView();
      r.$$initView();
    };

    this.copy = function (t, e) {
      h.copy(r.valueOf(), t, e);
    };
  };

  K.prototype.$$textWidth = c;
  K.prototype.$$bestLeftNum = _;
  K.prototype.$$calcCanvasXY = p;
  K.prototype.$$selectIsNotBlank = m;
  K.prototype.$$filterText = T;
  K.prototype.$$toTemplate = d;
  K.prototype.$$initDom = v;
  K.prototype.$$initView = N;
  K.prototype.$$updateView = g;
  K.prototype.$$updateSelectView = $;
  K.prototype.$$updateCursorPosition = b;
  K.prototype.$$updateCanvasSize = w;
  K.prototype.$$cancelSelect = A;
  K.prototype.$$deleteSelect = x;
  K.prototype.$$bindEvent = k;
  K.prototype.$$diff = C;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = K;
  } else {
    window.OpenWebEditor = K;
  }
})();

        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('30');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('39');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-347ecaca":""},[createElement('div',{"class":"menu-view","data-quickpaper-347ecaca":""},[createElement('div',{"data-quickpaper-347ecaca":""},[createElement('a',{"href":"https://knowpedia.github.io/entry/","target":"_blank","class":"knowpedia","data-quickpaper-347ecaca":""},[]),createElement('h2',{"data-quickpaper-347ecaca":""},["《算法设计与分析》"]),createElement('ul',{":active":"pagename==\"idea\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h3',{"@click":"openPage(\"idea\",\"top\")","data-quickpaper-347ecaca":""},["算法引论"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"sfycx\")","data-quickpaper-347ecaca":""},["算法与程序"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"bdsfdcxjz\")","data-quickpaper-347ecaca":""},["表达算法的抽象机制"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"sffzxfx\")","data-quickpaper-347ecaca":""},["算法复杂性分析"])])])])]),createElement('ul',{":active":"pagename==\"recursion-and-divide\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h3',{"@click":"openPage(\"recursion-and-divide\",\"top\")","data-quickpaper-347ecaca":""},["递归与分治策略"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"dgdgl\")","data-quickpaper-347ecaca":""},["递归的概念"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"kspx\")","data-quickpaper-347ecaca":""},["快速排序"])])])])]),createElement('ul',{":active":"pagename==\"dynamic-programming\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h3',{"@click":"openPage(\"dynamic-programming\",\"top\")","data-quickpaper-347ecaca":""},["动态规划"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"sfsx\")","data-quickpaper-347ecaca":""},["算法思想"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"jzlcwt\")","data-quickpaper-347ecaca":""},["矩阵连乘问题"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"zcggzxl\")","data-quickpaper-347ecaca":""},["最长公共子序列"])])])])]),createElement('ul',{":active":"pagename==\"greedy-algorithm\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h3',{"@click":"openPage(\"greedy-algorithm\",\"top\")","data-quickpaper-347ecaca":""},["贪心算法"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"jbys\")","data-quickpaper-347ecaca":""},["基本要素"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"txxzxz\")","data-quickpaper-347ecaca":""},["贪心选择性质"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"zuzkgxz\")","data-quickpaper-347ecaca":""},["最优子结构性质"])])])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"hdapwt\")","data-quickpaper-347ecaca":""},["活动安排问题"])])])])]),createElement('ul',{":active":"pagename==\"backtracking-method\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h3',{"@click":"openPage(\"backtracking-method\",\"top\")","data-quickpaper-347ecaca":""},["回溯法"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"sfsx\")","data-quickpaper-347ecaca":""},["算法思想"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"01bbwt\")","data-quickpaper-347ecaca":""},["0-1背包问题"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"01bbwt-xcdg\")","data-quickpaper-347ecaca":""},["消除递归"])])])])])])]),createElement('ul',{":active":"pagename==\"branch-and-bound\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h3',{"@click":"openPage(\"branch-and-bound\",\"top\")","data-quickpaper-347ecaca":""},["分支限界法"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"sfsx\")","data-quickpaper-347ecaca":""},["算法思想"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"zzwt\")","data-quickpaper-347ecaca":""},["装载问题"])])])])]),createElement('a',{"href":"https://github.com/knowpedia/Algorithm-Design-And-Analysis","target":"_blank","data-quickpaper-347ecaca":""},["Fork Me On Github"])])]),createElement('div',{"class":"content","data-quickpaper-347ecaca":""},[createElement('div',{"id":"root-view","data-quickpaper-347ecaca":""},[createElement('component',{":is":"page","data-quickpaper-347ecaca":""},[])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=script&lang=js&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('31');
var fixedScroll =__etcpack__scope_args__.default;


    let pages = {
        idea: () => window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle1.js','33'),
        "recursion-and-divide": () => window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle2.js','34'),
        "dynamic-programming": () => window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle3.js','35'),
        "greedy-algorithm": () => window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle4.js','36'),
        "backtracking-method": () => window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle5.js','37'),
        "branch-and-bound": () => window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle6.js','38')
    };

    __etcpack__scope_bundle__.default= {
        data() {
            return {
                page: null,
                pagename: ""
            };
        },
        mounted() {
            let routerString = (window.location.href + "").split('#/')[1];
            let pagename = 'idea', fixedName = 'top';
            if (routerString) {
                let temp = routerString.split('/');
                if (temp[0] in pages) pagename = temp[0];
                fixedName = temp[1] || "top";
            }
            this.openPage(pagename, fixedName);
        },
        methods: {
            openPage(pagename, fixedName) {
                pages[pagename]().then(data => {
                    this.page = data.default;
                    this.pagename = pagename;
                    window.location.href = "#/" + pagename + "/" + fixedName;
                    fixedScroll();
                });
            },
            doScroll(fixedName) {
                window.location.href = "#/" + this.pagename + "/" + fixedName;
                fixedScroll();
            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/Service/fixedScroll.js
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('32');
var animation =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= function (overValue) {
  overValue = overValue || 0;
  var element = document.documentElement;
  var routerString = (window.location.href + "").split('#/')[1];
  var fixed = routerString ? routerString.split('/')[1] : false;

  if (fixed) {
    // 获取滚动调整结点
    var fixedDom = document.getElementById('fixed-' + fixed);

    if (fixedDom) {
      var offsetTop = fixedDom.offsetTop - overValue;
      var currentScrollTop = element.scrollTop || 0;
      animation(function (deep) {
        element.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop;
      }, 500, function () {
        element.scrollTop = offsetTop;
      });
    }
  } else {
    element.scrollTop = 0;
  }

  document.getElementById('root-view').scrollTop = 0;
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/animation.js
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    //当前正在运动的动画的tick函数堆栈
var $timers = []; //唯一定时器的定时间隔

var $interval = 13; //指定了动画时长duration默认值

var $speeds = 400; //定时器ID

var $timerId = null;
/*!
 * 💡 - 动画轮播
 * https://github.com/hai2007/tool.js/blob/master/animation.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

/**
 * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
 * @param {number} duration 动画时长，可选
 * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
 *
 * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
 */

__etcpack__scope_bundle__.default= function (doback, duration, callback) {
  // 如果没有传递时间，使用内置默认值
  if (arguments.length < 2) duration = $speeds;
  var clock = {
    //把tick函数推入堆栈
    "timer": function timer(tick, duration, callback) {
      if (!tick) {
        throw new Error('Tick is required!');
      }

      var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
      $timers.push({
        "id": id,
        "createTime": new Date(),
        "tick": tick,
        "duration": duration,
        "callback": callback
      });
      clock.start();
      return id;
    },
    //开启唯一的定时器timerId
    "start": function start() {
      if (!$timerId) {
        $timerId = setInterval(clock.tick, $interval);
      }
    },
    //被定时器调用，遍历timers堆栈
    "tick": function tick() {
      var createTime,
          flag,
          tick,
          callback,
          timer,
          duration,
          passTime,
          needStop,
          timers = $timers;
      $timers = [];
      $timers.length = 0;

      for (flag = 0; flag < timers.length; flag++) {
        //初始化数据
        timer = timers[flag];
        createTime = timer.createTime;
        tick = timer.tick;
        duration = timer.duration;
        callback = timer.callback;
        needStop = false; //执行

        passTime = (+new Date() - createTime) / duration;

        if (passTime >= 1) {
          needStop = true;
        }

        passTime = passTime > 1 ? 1 : passTime;
        tick(passTime);

        if (passTime < 1 && timer.id) {
          //动画没有结束再添加
          $timers.push(timer);
        } else if (callback) {
          callback(passTime);
        }
      }

      if ($timers.length <= 0) {
        clock.stop();
      }
    },
    //停止定时器，重置timerId=null
    "stop": function stop() {
      if ($timerId) {
        clearInterval($timerId);
        $timerId = null;
      }
    }
  };
  var id = clock.timer(function (deep) {
    //其中deep为0-1，表示改变的程度
    doback(deep);
  }, duration, callback); // 返回一个函数
  // 用于在动画结束前结束动画

  return function () {
    var i;

    for (i in $timers) {
      if ($timers[i].id == id) {
        $timers[i].id = undefined;
        return;
      }
    }
  };
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=style&lang=css&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper][data-quickpaper-347ecaca]{\n\nwhite-space: nowrap;\n\n}\n\n [quickpaper]>div[data-quickpaper-347ecaca]{\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nwhite-space: normal;\n\nheight: 100vh;\n\n}\n\n [quickpaper]>div.menu-view[data-quickpaper-347ecaca]{\n\nwidth: 300px;\n\nposition: fixed;\n\nleft: 0;\n\ntop: 0;\n\nbackground-color: white;\n\n}\n\n [quickpaper]>div.menu-view>div [active='no']>li>ul[data-quickpaper-347ecaca]{\n\ndisplay: none;\n\n}\n\n [quickpaper]>div.menu-view>div [active='yes']>li>h3[data-quickpaper-347ecaca]{\n\nfont-weight: 800;\n\n}\n\n [quickpaper]>div.menu-view>div>a[data-quickpaper-347ecaca]{\n\nbackground-color: #529bcf;\n\ncolor: white;\n\ntext-align: center;\n\nmargin-top: .3rem;\n\ncursor: pointer;\n\nfont-size: .15rem;\n\ndisplay: block;\n\nwidth: 2.6rem;\n\npadding: .1rem 0;\n\n}\n\n [quickpaper]>div.menu-view>div>a.knowpedia[data-quickpaper-347ecaca]{\n\nbackground-image: url('./logo.png');\n\nheight: 150px;\n\nbackground-color: transparent;\n\nbackground-size: auto 100%;\n\nbackground-position: center;\n\nmargin-top: 0;\n\nbackground-repeat: no-repeat;\n\n}\n\n [quickpaper]>div.content[data-quickpaper-347ecaca]{\n\nmargin-left: 300px;\n\nwidth: calc(100vw - 300px);\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();