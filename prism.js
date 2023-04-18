/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+c+cpp+dart+docker+linker-script+go+go-module+gradle+groovy+handlebars+haskell+http+java+javadoc+javadoclike+javastacktrace+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+makefile+markdown+markup-templating+python+jsx+tsx+ruby+rust+textile+toml+typescript+typoscript+yaml */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (e) {
        var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            r = {},
            a = {
                manual: e.Prism && e.Prism.manual,
                disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(n) {
                        return n instanceof i ? new i(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function (e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++t
                        }), e.__id
                    },
                    clone: function e(n, t) {
                        var r, i;
                        switch (t = t || {}, a.util.type(n)) {
                            case "Object":
                                if (i = a.util.objId(n), t[i]) return t[i];
                                for (var l in r = {}, t[i] = r, n) n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                                return r;
                            case "Array":
                                return i = a.util.objId(n), t[i] ? t[i] : (r = [], t[i] = r, n.forEach((function (n, a) {
                                    r[a] = e(n, t)
                                })), r);
                            default:
                                return n
                        }
                    },
                    getLanguage: function (e) {
                        for (; e;) {
                            var t = n.exec(e.className);
                            if (t) return t[1].toLowerCase();
                            e = e.parentElement
                        }
                        return "none"
                    },
                    setLanguage: function (e, t) {
                        e.className = e.className.replace(RegExp(n, "gi"), ""), e.classList.add("language-" + t)
                    },
                    currentScript: function () {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error
                        } catch (r) {
                            var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
                            if (e) {
                                var n = document.getElementsByTagName("script");
                                for (var t in n)
                                    if (n[t].src == e) return n[t]
                            }
                            return null
                        }
                    },
                    isActive: function (e, n, t) {
                        for (var r = "no-" + n; e;) {
                            var a = e.classList;
                            if (a.contains(n)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement
                        }
                        return !!t
                    }
                },
                languages: {
                    plain: r,
                    plaintext: r,
                    text: r,
                    txt: r,
                    extend: function (e, n) {
                        var t = a.util.clone(a.languages[e]);
                        for (var r in n) t[r] = n[r];
                        return t
                    },
                    insertBefore: function (e, n, t, r) {
                        var i = (r = r || a.languages)[e],
                            l = {};
                        for (var o in i)
                            if (i.hasOwnProperty(o)) {
                                if (o == n)
                                    for (var s in t) t.hasOwnProperty(s) && (l[s] = t[s]);
                                t.hasOwnProperty(o) || (l[o] = i[o])
                            } var u = r[e];
                        return r[e] = l, a.languages.DFS(a.languages, (function (n, t) {
                            t === u && n != e && (this[n] = l)
                        })), l
                    },
                    DFS: function e(n, t, r, i) {
                        i = i || {};
                        var l = a.util.objId;
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                t.call(n, o, n[o], r || o);
                                var s = n[o],
                                    u = a.util.type(s);
                                "Object" !== u || i[l(s)] ? "Array" !== u || i[l(s)] || (i[l(s)] = !0, e(s, t, o, i)) : (i[l(s)] = !0, e(s, t, null, i))
                            }
                    }
                },
                plugins: {},
                highlightAll: function (e, n) {
                    a.highlightAllUnder(document, e, n)
                },
                highlightAllUnder: function (e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    a.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), a.hooks.run("before-all-elements-highlight", r);
                    for (var i, l = 0; i = r.elements[l++];) a.highlightElement(i, !0 === n, r.callback)
                },
                highlightElement: function (n, t, r) {
                    var i = a.util.getLanguage(n),
                        l = a.languages[i];
                    a.util.setLanguage(n, i);
                    var o = n.parentElement;
                    o && "pre" === o.nodeName.toLowerCase() && a.util.setLanguage(o, i);
                    var s = {
                        element: n,
                        language: i,
                        grammar: l,
                        code: n.textContent
                    };

                    function u(e) {
                        s.highlightedCode = e, a.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, a.hooks.run("after-highlight", s), a.hooks.run("complete", s), r && r.call(s.element)
                    }
                    if (a.hooks.run("before-sanity-check", s), (o = s.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"), !s.code) return a.hooks.run("complete", s), void (r && r.call(s.element));
                    if (a.hooks.run("before-highlight", s), s.grammar)
                        if (t && e.Worker) {
                            var c = new Worker(a.filename);
                            c.onmessage = function (e) {
                                u(e.data)
                            }, c.postMessage(JSON.stringify({
                                language: s.language,
                                code: s.code,
                                immediateClose: !0
                            }))
                        } else u(a.highlight(s.code, s.grammar, s.language));
                    else u(a.util.encode(s.code))
                },
                highlight: function (e, n, t) {
                    var r = {
                        code: e,
                        grammar: n,
                        language: t
                    };
                    if (a.hooks.run("before-tokenize", r), !r.grammar) throw new Error('The language "' + r.language + '" has no grammar.');
                    return r.tokens = a.tokenize(r.code, r.grammar), a.hooks.run("after-tokenize", r), i.stringify(a.util.encode(r.tokens), r.language)
                },
                tokenize: function (e, n) {
                    var t = n.rest;
                    if (t) {
                        for (var r in t) n[r] = t[r];
                        delete n.rest
                    }
                    var a = new s;
                    return u(a, a.head, e), o(e, a, n, a.head, 0),
                        function (e) {
                            for (var n = [], t = e.head.next; t !== e.tail;) n.push(t.value), t = t.next;
                            return n
                        }(a)
                },
                hooks: {
                    all: {},
                    add: function (e, n) {
                        var t = a.hooks.all;
                        t[e] = t[e] || [], t[e].push(n)
                    },
                    run: function (e, n) {
                        var t = a.hooks.all[e];
                        if (t && t.length)
                            for (var r, i = 0; r = t[i++];) r(n)
                    }
                },
                Token: i
            };

        function i(e, n, t, r) {
            this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length
        }

        function l(e, n, t, r) {
            e.lastIndex = n;
            var a = e.exec(t);
            if (a && r && a[1]) {
                var i = a[1].length;
                a.index += i, a[0] = a[0].slice(i)
            }
            return a
        }

        function o(e, n, t, r, s, g) {
            for (var f in t)
                if (t.hasOwnProperty(f) && t[f]) {
                    var h = t[f];
                    h = Array.isArray(h) ? h : [h];
                    for (var d = 0; d < h.length; ++d) {
                        if (g && g.cause == f + "," + d) return;
                        var v = h[d],
                            p = v.inside,
                            m = !!v.lookbehind,
                            y = !!v.greedy,
                            k = v.alias;
                        if (y && !v.pattern.global) {
                            var x = v.pattern.toString().match(/[imsuy]*$/)[0];
                            v.pattern = RegExp(v.pattern.source, x + "g")
                        }
                        for (var b = v.pattern || v, w = r.next, A = s; w !== n.tail && !(g && A >= g.reach); A += w.value.length, w = w.next) {
                            var E = w.value;
                            if (n.length > e.length) return;
                            if (!(E instanceof i)) {
                                var P, L = 1;
                                if (y) {
                                    if (!(P = l(b, A, e, m)) || P.index >= e.length) break;
                                    var S = P.index,
                                        O = P.index + P[0].length,
                                        j = A;
                                    for (j += w.value.length; S >= j;) j += (w = w.next).value.length;
                                    if (A = j -= w.value.length, w.value instanceof i) continue;
                                    for (var C = w; C !== n.tail && (j < O || "string" == typeof C.value); C = C.next) L++, j += C.value.length;
                                    L--, E = e.slice(A, j), P.index -= A
                                } else if (!(P = l(b, 0, E, m))) continue;
                                S = P.index;
                                var N = P[0],
                                    _ = E.slice(0, S),
                                    M = E.slice(S + N.length),
                                    W = A + E.length;
                                g && W > g.reach && (g.reach = W);
                                var z = w.prev;
                                if (_ && (z = u(n, z, _), A += _.length), c(n, z, L), w = u(n, z, new i(f, p ? a.tokenize(N, p) : N, k, N)), M && u(n, w, M), L > 1) {
                                    var I = {
                                        cause: f + "," + d,
                                        reach: W
                                    };
                                    o(e, n, t, w.prev, A, I), g && I.reach > g.reach && (g.reach = I.reach)
                                }
                            }
                        }
                    }
                }
        }

        function s() {
            var e = {
                value: null,
                prev: null,
                next: null
            },
                n = {
                    value: null,
                    prev: e,
                    next: null
                };
            e.next = n, this.head = e, this.tail = n, this.length = 0
        }

        function u(e, n, t) {
            var r = n.next,
                a = {
                    value: t,
                    prev: n,
                    next: r
                };
            return n.next = a, r.prev = a, e.length++, a
        }

        function c(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
            n.next = r, r.prev = n, e.length -= a
        }
        if (e.Prism = a, i.stringify = function e(n, t) {
            if ("string" == typeof n) return n;
            if (Array.isArray(n)) {
                var r = "";
                return n.forEach((function (n) {
                    r += e(n, t)
                })), r
            }
            var i = {
                type: n.type,
                content: e(n.content, t),
                tag: "span",
                classes: ["token", n.type],
                attributes: {},
                language: t
            },
                l = n.alias;
            l && (Array.isArray(l) ? Array.prototype.push.apply(i.classes, l) : i.classes.push(l)), a.hooks.run("wrap", i);
            var o = "";
            for (var s in i.attributes) o += " " + s + '="' + (i.attributes[s] || "").replace(/"/g, "&quot;") + '"';
            return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">"
        }, !e.document) return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", (function (n) {
            var t = JSON.parse(n.data),
                r = t.language,
                i = t.code,
                l = t.immediateClose;
            e.postMessage(a.highlight(i, a.languages[r], r)), l && e.close()
        }), !1), a) : a;
        var g = a.util.currentScript();

        function f() {
            a.manual || a.highlightAll()
        }
        if (g && (a.filename = g.src, g.hasAttribute("data-manual") && (a.manual = !0)), !a.manual) {
            var h = document.readyState;
            "loading" === h || "interactive" === h && g && g.defer ? document.addEventListener("DOMContentLoaded", f) : window.requestAnimationFrame ? window.requestAnimationFrame(f) : window.setTimeout(f, 16)
        }
        return a
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
    },
    prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
    },
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: !0
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
        }
    },
    cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
    },
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [{
                        pattern: /^=/,
                        alias: "attr-equals"
                    }, {
                        pattern: /^(\s*)["']|["']$/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", (function (a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
})), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function (a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var t = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: s
            }
        };
        t["language-" + e] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[e]
        };
        var n = {};
        n[a] = {
            pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, (function () {
                return a
            })), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: t
        }, Prism.languages.insertBefore("markup", "cdata", n)
    }
}), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function (a, e) {
        Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp("(^|[\"'\\s])(?:" + a + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
            lookbehind: !0,
            inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                        value: {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: !0,
                            alias: [e, "language-" + e],
                            inside: Prism.languages[e]
                        },
                        punctuation: [{
                            pattern: /^=/,
                            alias: "attr-equals"
                        }, /"|'/]
                    }
                }
            }
        })
    }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
! function (s) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + e.source + ")*?(?:;|(?=\\s*\\{))"),
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0
                }
            }
        },
        url: {
            pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {
                    pattern: RegExp("^" + e.source + "$"),
                    alias: "url"
                }
            }
        },
        selector: {
            pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
            lookbehind: !0
        },
        string: {
            pattern: e,
            greedy: !0
        },
        property: {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0
        },
        important: /!important\b/i,
        function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0
        },
        punctuation: /[(){};:,]/
    }, s.languages.css.atrule.inside.rest = s.languages.css;
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"))
}(Prism);
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
        pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
        lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),
        lookbehind: !0,
        greedy: !0,
        inside: {
            "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: Prism.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
        }
    },
    "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
    },
    "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    },
    "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
    }
}), Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
    }
}), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript;
Prism.languages.c = Prism.languages.extend("clike", {
    comment: {
        pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    string: {
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
        lookbehind: !0
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
}), Prism.languages.insertBefore("c", "string", {
    char: {
        pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
        greedy: !0
    }
}), Prism.languages.insertBefore("c", "string", {
    macro: {
        pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
        inside: {
            string: [{
                pattern: /^(#\s*include\s*)<[^>]+>/,
                lookbehind: !0
            }, Prism.languages.c.string],
            char: Prism.languages.c.char,
            comment: Prism.languages.c.comment,
            "macro-name": [{
                pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                lookbehind: !0
            }, {
                pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                lookbehind: !0,
                alias: "function"
            }],
            directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword"
            },
            "directive-hash": /^#/,
            punctuation: /##|\\(?=[\r\n])/,
            expression: {
                pattern: /\S[\s\S]*/,
                inside: Prism.languages.c
            }
        }
    }
}), Prism.languages.insertBefore("c", "function", {
    constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
}), delete Prism.languages.c.boolean;
! function (e) {
    var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
        n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g, (function () {
            return t.source
        }));
    e.languages.cpp = e.languages.extend("c", {
        "class-name": [{
            pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, (function () {
                return t.source
            }))),
            lookbehind: !0
        }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
        keyword: t,
        number: {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: !0
        },
        operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:false|true)\b/
    }), e.languages.insertBefore("cpp", "string", {
        module: {
            pattern: RegExp('(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' + "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g, (function () {
                return n
            })) + ")"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                string: /^[<"][\s\S]+/,
                operator: /:/,
                punctuation: /\./
            }
        },
        "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0
        }
    }), e.languages.insertBefore("cpp", "keyword", {
        "generic-function": {
            pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
            inside: {
                function: /^\w+/,
                generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: e.languages.cpp
                }
            }
        }
    }), e.languages.insertBefore("cpp", "operator", {
        "double-colon": {
            pattern: /::/,
            alias: "punctuation"
        }
    }), e.languages.insertBefore("cpp", "class-name", {
        "base-clause": {
            pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
            lookbehind: !0,
            greedy: !0,
            inside: e.languages.extend("cpp", {})
        }
    }), e.languages.insertBefore("inside", "double-colon", {
        "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, e.languages.cpp["base-clause"])
}(Prism);
! function (e) {
    var a = [/\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],
        n = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
        s = {
            pattern: RegExp(n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
            lookbehind: !0,
            inside: {
                namespace: {
                    pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                    inside: {
                        punctuation: /\./
                    }
                }
            }
        };
    e.languages.dart = e.languages.extend("clike", {
        "class-name": [s, {
            pattern: RegExp(n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),
            lookbehind: !0,
            inside: s.inside
        }],
        keyword: a,
        operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
    }), e.languages.insertBefore("dart", "string", {
        "string-literal": {
            pattern: /r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /^\$\{?|\}$/,
                        expression: {
                            pattern: /[\s\S]+/,
                            inside: e.languages.dart
                        }
                    }
                },
                string: /[\s\S]+/
            }
        },
        string: void 0
    }), e.languages.insertBefore("dart", "class-name", {
        metadata: {
            pattern: /@\w+/,
            alias: "function"
        }
    }), e.languages.insertBefore("dart", "class-name", {
        generics: {
            pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
            inside: {
                "class-name": s,
                keyword: a,
                punctuation: /[<>(),.:]/,
                operator: /[?&|]/
            }
        }
    })
}(Prism);
! function (e) {
    var n = "(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g, (function () {
        return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])"
    })),
        r = "\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",
        t = "--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(/<STR>/g, (function () {
            return r
        })),
        o = {
            pattern: RegExp(r),
            greedy: !0
        },
        i = {
            pattern: /(^[ \t]*)#.*/m,
            lookbehind: !0,
            greedy: !0
        };

    function a(e, r) {
        return e = e.replace(/<OPT>/g, (function () {
            return t
        })).replace(/<SP>/g, (function () {
            return n
        })), RegExp(e, r)
    }
    e.languages.docker = {
        instruction: {
            pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
            lookbehind: !0,
            greedy: !0,
            inside: {
                options: {
                    pattern: a("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*", "i"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        property: {
                            pattern: /(^|\s)--[\w-]+/,
                            lookbehind: !0
                        },
                        string: [o, {
                            pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                            lookbehind: !0
                        }],
                        operator: /\\$/m,
                        punctuation: /=/
                    }
                },
                keyword: [{
                    pattern: a("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b", "i"),
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: a("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS", "i"),
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: a("(^ONBUILD<SP>)\\w+", "i"),
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /^\w+/,
                    greedy: !0
                }],
                comment: i,
                string: o,
                variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                operator: /\\$/m
            }
        },
        comment: i
    }, e.languages.dockerfile = e.languages.docker
}(Prism);
Prism.languages["linker-script"] = {
    comment: {
        pattern: /(^|\s)\/\*[\s\S]*?(?:$|\*\/)/,
        lookbehind: !0,
        greedy: !0
    },
    identifier: {
        pattern: /"[^"\r\n]*"/,
        greedy: !0
    },
    "location-counter": {
        pattern: /\B\.\B/,
        alias: "important"
    },
    section: {
        pattern: /(^|[^\w*])\.\w+\b/,
        lookbehind: !0,
        alias: "keyword"
    },
    function: /\b[A-Z][A-Z_]*(?=\s*\()/,
    number: /\b(?:0[xX][a-fA-F0-9]+|\d+)[KM]?\b/,
    operator: />>=?|<<=?|->|\+\+|--|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?/,
    punctuation: /[(){},;]/
}, Prism.languages.ld = Prism.languages["linker-script"];
Prism.languages.go = Prism.languages.extend("clike", {
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
        lookbehind: !0,
        greedy: !0
    },
    keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    boolean: /\b(?:_|false|iota|nil|true)\b/,
    number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
}), Prism.languages.insertBefore("go", "string", {
    char: {
        pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
        greedy: !0
    }
}), delete Prism.languages.go["class-name"];
Prism.languages["go-mod"] = Prism.languages["go-module"] = {
    comment: {
        pattern: /\/\/.*/,
        greedy: !0
    },
    version: {
        pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,
        lookbehind: !0,
        alias: "number"
    },
    "go-version": {
        pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,
        lookbehind: !0,
        alias: "number"
    },
    keyword: {
        pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,
        lookbehind: !0
    },
    operator: /=>/,
    punctuation: /[()[\],]/
};
! function (e) {
    var n = {
        pattern: /((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/,
        lookbehind: !0,
        inside: {
            "interpolation-punctuation": {
                pattern: /^\$\{?|\}$/,
                alias: "punctuation"
            },
            expression: {
                pattern: /[\s\S]+/,
                inside: null
            }
        }
    };
    e.languages.gradle = e.languages.extend("clike", {
        string: {
            pattern: /'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/,
            greedy: !0
        },
        keyword: /\b(?:apply|def|dependencies|else|if|implementation|import|plugin|plugins|project|repositories|repository|sourceSets|tasks|val)\b/,
        number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,
        operator: {
            pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
            lookbehind: !0
        },
        punctuation: /\.+|[{}[\];(),:$]/
    }), e.languages.insertBefore("gradle", "string", {
        shebang: {
            pattern: /#!.+/,
            alias: "comment",
            greedy: !0
        },
        "interpolation-string": {
            pattern: /"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
            greedy: !0,
            inside: {
                interpolation: n,
                string: /[\s\S]+/
            }
        }
    }), e.languages.insertBefore("gradle", "punctuation", {
        "spock-block": /\b(?:and|cleanup|expect|given|setup|then|when|where):/
    }), e.languages.insertBefore("gradle", "function", {
        annotation: {
            pattern: /(^|[^.])@\w+/,
            lookbehind: !0,
            alias: "punctuation"
        }
    }), n.inside.expression.inside = e.languages.gradle
}(Prism);
! function (e) {
    var n = {
        pattern: /((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/,
        lookbehind: !0,
        inside: {
            "interpolation-punctuation": {
                pattern: /^\$\{?|\}$/,
                alias: "punctuation"
            },
            expression: {
                pattern: /[\s\S]+/,
                inside: null
            }
        }
    };
    e.languages.groovy = e.languages.extend("clike", {
        string: {
            pattern: /'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/,
            greedy: !0
        },
        keyword: /\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
        number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,
        operator: {
            pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
            lookbehind: !0
        },
        punctuation: /\.+|[{}[\];(),:$]/
    }), e.languages.insertBefore("groovy", "string", {
        shebang: {
            pattern: /#!.+/,
            alias: "comment",
            greedy: !0
        },
        "interpolation-string": {
            pattern: /"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
            greedy: !0,
            inside: {
                interpolation: n,
                string: /[\s\S]+/
            }
        }
    }), e.languages.insertBefore("groovy", "punctuation", {
        "spock-block": /\b(?:and|cleanup|expect|given|setup|then|when|where):/
    }), e.languages.insertBefore("groovy", "function", {
        annotation: {
            pattern: /(^|[^.])@\w+/,
            lookbehind: !0,
            alias: "punctuation"
        }
    }), n.inside.expression.inside = e.languages.groovy
}(Prism);
! function (e) {
    function n(e, n) {
        return "___" + e.toUpperCase() + n + "___"
    }
    Object.defineProperties(e.languages["markup-templating"] = {}, {
        buildPlaceholders: {
            value: function (t, a, r, o) {
                if (t.language === a) {
                    var c = t.tokenStack = [];
                    t.code = t.code.replace(r, (function (e) {
                        if ("function" == typeof o && !o(e)) return e;
                        for (var r, i = c.length; - 1 !== t.code.indexOf(r = n(a, i));) ++i;
                        return c[i] = e, r
                    })), t.grammar = e.languages.markup
                }
            }
        },
        tokenizePlaceholders: {
            value: function (t, a) {
                if (t.language === a && t.tokenStack) {
                    t.grammar = e.languages[a];
                    var r = 0,
                        o = Object.keys(t.tokenStack);
                    ! function c(i) {
                        for (var u = 0; u < i.length && !(r >= o.length); u++) {
                            var g = i[u];
                            if ("string" == typeof g || g.content && "string" == typeof g.content) {
                                var l = o[r],
                                    s = t.tokenStack[l],
                                    f = "string" == typeof g ? g : g.content,
                                    p = n(a, l),
                                    k = f.indexOf(p);
                                if (k > -1) {
                                    ++r;
                                    var m = f.substring(0, k),
                                        d = new e.Token(a, e.tokenize(s, t.grammar), "language-" + a, s),
                                        h = f.substring(k + p.length),
                                        v = [];
                                    m && v.push.apply(v, c([m])), v.push(d), h && v.push.apply(v, c([h])), "string" == typeof g ? i.splice.apply(i, [u, 1].concat(v)) : g.content = v
                                }
                            } else g.content && c(g.content)
                        }
                        return i
                    }(t.tokens)
                }
            }
        }
    })
}(Prism);
! function (a) {
    a.languages.handlebars = {
        comment: /\{\{![\s\S]*?\}\}/,
        delimiter: {
            pattern: /^\{\{\{?|\}\}\}?$/,
            alias: "punctuation"
        },
        string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        boolean: /\b(?:false|true)\b/,
        block: {
            pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
            lookbehind: !0,
            alias: "keyword"
        },
        brackets: {
            pattern: /\[[^\]]+\]/,
            inside: {
                punctuation: /\[|\]/,
                variable: /[\s\S]+/
            }
        },
        punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
        variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
    }, a.hooks.add("before-tokenize", (function (e) {
        a.languages["markup-templating"].buildPlaceholders(e, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)
    })), a.hooks.add("after-tokenize", (function (e) {
        a.languages["markup-templating"].tokenizePlaceholders(e, "handlebars")
    })), a.languages.hbs = a.languages.handlebars, a.languages.mustache = a.languages.handlebars
}(Prism);
Prism.languages.haskell = {
    comment: {
        pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--(?:(?=.)[^-!#$%*+=?&@|~.:<>^\\\/].*|$)|\{-[\s\S]*?-\})/m,
        lookbehind: !0
    },
    char: {
        pattern: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|ACK|BEL|BS|CAN|CR|DC1|DC2|DC3|DC4|DEL|DLE|EM|ENQ|EOT|ESC|ETB|ETX|FF|FS|GS|HT|LF|NAK|NUL|RS|SI|SO|SOH|SP|STX|SUB|SYN|US|VT|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
        alias: "string"
    },
    string: {
        pattern: /"(?:[^\\"]|\\(?:\S|\s+\\))*"/,
        greedy: !0
    },
    keyword: /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
    "import-statement": {
        pattern: /(^[\t ]*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
        lookbehind: !0,
        inside: {
            keyword: /\b(?:as|hiding|import|qualified)\b/,
            punctuation: /\./
        }
    },
    builtin: /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
    number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
    operator: [{
        pattern: /`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/,
        greedy: !0
    }, {
        pattern: /(\s)\.(?=\s)/,
        lookbehind: !0
    }, /[-!#$%*+=?&@|~:<>^\\\/][-!#$%*+=?&@|~.:<>^\\\/]*|\.[-!#$%*+=?&@|~.:<>^\\\/]+/],
    hvariable: {
        pattern: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*/,
        inside: {
            punctuation: /\./
        }
    },
    constant: {
        pattern: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*/,
        inside: {
            punctuation: /\./
        }
    },
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.hs = Prism.languages.haskell;
! function (t) {
    function a(t) {
        return RegExp("(^(?:" + t + "):[ \t]*(?![ \t]))[^]+", "i")
    }
    t.languages.http = {
        "request-line": {
            pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
            inside: {
                method: {
                    pattern: /^[A-Z]+\b/,
                    alias: "property"
                },
                "request-target": {
                    pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
                    lookbehind: !0,
                    alias: "url",
                    inside: t.languages.uri
                },
                "http-version": {
                    pattern: /^(\s)HTTP\/[\d.]+/,
                    lookbehind: !0,
                    alias: "property"
                }
            }
        },
        "response-status": {
            pattern: /^HTTP\/[\d.]+ \d+ .+/m,
            inside: {
                "http-version": {
                    pattern: /^HTTP\/[\d.]+/,
                    alias: "property"
                },
                "status-code": {
                    pattern: /^(\s)\d+(?=\s)/,
                    lookbehind: !0,
                    alias: "number"
                },
                "reason-phrase": {
                    pattern: /^(\s).+/,
                    lookbehind: !0,
                    alias: "string"
                }
            }
        },
        header: {
            pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
            inside: {
                "header-value": [{
                    pattern: a("Content-Security-Policy"),
                    lookbehind: !0,
                    alias: ["csp", "languages-csp"],
                    inside: t.languages.csp
                }, {
                    pattern: a("Public-Key-Pins(?:-Report-Only)?"),
                    lookbehind: !0,
                    alias: ["hpkp", "languages-hpkp"],
                    inside: t.languages.hpkp
                }, {
                    pattern: a("Strict-Transport-Security"),
                    lookbehind: !0,
                    alias: ["hsts", "languages-hsts"],
                    inside: t.languages.hsts
                }, {
                    pattern: a("[^:]+"),
                    lookbehind: !0
                }],
                "header-name": {
                    pattern: /^[^:]+/,
                    alias: "keyword"
                },
                punctuation: /^:/
            }
        }
    };
    var e, n = t.languages,
        s = {
            "application/javascript": n.javascript,
            "application/json": n.json || n.javascript,
            "application/xml": n.xml,
            "text/xml": n.xml,
            "text/html": n.html,
            "text/css": n.css,
            "text/plain": n.plain
        },
        i = {
            "application/json": !0,
            "application/xml": !0
        };

    function r(t) {
        var a = t.replace(/^[a-z]+\//, "");
        return "(?:" + t + "|\\w+/(?:[\\w.-]+\\+)+" + a + "(?![+\\w.-]))"
    }
    for (var p in s)
        if (s[p]) {
            e = e || {};
            var l = i[p] ? r(p) : p;
            e[p.replace(/\//g, "-")] = {
                pattern: RegExp("(content-type:\\s*" + l + "(?:(?:\r\n?|\n)[\\w-].*)*(?:\r(?:\n|(?!\n))|\n))[^ \t\\w-][^]*", "i"),
                lookbehind: !0,
                inside: s[p]
            }
        } e && t.languages.insertBefore("http", "header", e)
}(Prism);
! function (e) {
    var n = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
        t = "(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
        s = {
            pattern: RegExp("(^|[^\\w.])" + t + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
            lookbehind: !0,
            inside: {
                namespace: {
                    pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                    inside: {
                        punctuation: /\./
                    }
                },
                punctuation: /\./
            }
        };
    e.languages.java = e.languages.extend("clike", {
        string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
            lookbehind: !0,
            greedy: !0
        },
        "class-name": [s, {
            pattern: RegExp("(^|[^\\w.])" + t + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),
            lookbehind: !0,
            inside: s.inside
        }, {
                pattern: RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)" + t + "[A-Z]\\w*\\b"),
                lookbehind: !0,
                inside: s.inside
            }],
        keyword: n,
        function: [e.languages.clike.function, {
            pattern: /(::\s*)[a-z_]\w*/,
            lookbehind: !0
        }],
        number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        operator: {
            pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
            lookbehind: !0
        },
        constant: /\b[A-Z][A-Z_\d]+\b/
    }), e.languages.insertBefore("java", "string", {
        "triple-quoted-string": {
            pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
            greedy: !0,
            alias: "string"
        },
        char: {
            pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
            greedy: !0
        }
    }), e.languages.insertBefore("java", "class-name", {
        annotation: {
            pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
            lookbehind: !0,
            alias: "punctuation"
        },
        generics: {
            pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
            inside: {
                "class-name": s,
                keyword: n,
                punctuation: /[<>(),.:]/,
                operator: /[?&|]/
            }
        },
        import: [{
            pattern: RegExp("(\\bimport\\s+)" + t + "(?:[A-Z]\\w*|\\*)(?=\\s*;)"),
            lookbehind: !0,
            inside: {
                namespace: s.inside.namespace,
                punctuation: /\./,
                operator: /\*/,
                "class-name": /\w+/
            }
        }, {
            pattern: RegExp("(\\bimport\\s+static\\s+)" + t + "(?:\\w+|\\*)(?=\\s*;)"),
            lookbehind: !0,
            alias: "static",
            inside: {
                namespace: s.inside.namespace,
                static: /\b\w+$/,
                punctuation: /\./,
                operator: /\*/,
                "class-name": /\w+/
            }
        }],
        namespace: {
            pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, (function () {
                return n.source
            }))),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        }
    })
}(Prism);
! function (a) {
    var e = a.languages.javadoclike = {
        parameter: {
            pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
            lookbehind: !0
        },
        punctuation: /[{}]/
    };
    Object.defineProperty(e, "addSupport", {
        value: function (e, n) {
            "string" == typeof e && (e = [e]), e.forEach((function (e) {
                ! function (e, n) {
                    var t = "doc-comment",
                        r = a.languages[e];
                    if (r) {
                        var o = r[t];
                        if (o || (o = (r = a.languages.insertBefore(e, "comment", {
                            "doc-comment": {
                                pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                lookbehind: !0,
                                alias: "comment"
                            }
                        }))[t]), o instanceof RegExp && (o = r[t] = {
                            pattern: o
                        }), Array.isArray(o))
                            for (var i = 0, s = o.length; i < s; i++) o[i] instanceof RegExp && (o[i] = {
                                pattern: o[i]
                            }), n(o[i]);
                        else n(o)
                    }
                }(e, (function (a) {
                    a.inside || (a.inside = {}), a.inside.rest = n
                }))
            }))
        }
    }), e.addSupport(["java", "javascript", "php"], e)
}(Prism);
! function (a) {
    var e = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,
        n = "(?:\\b[a-zA-Z]\\w+\\s*\\.\\s*)*\\b[A-Z]\\w*(?:\\s*<mem>)?|<mem>".replace(/<mem>/g, (function () {
            return "#\\s*\\w+(?:\\s*\\([^()]*\\))?"
        }));
    a.languages.javadoc = a.languages.extend("javadoclike", {}), a.languages.insertBefore("javadoc", "keyword", {
        reference: {
            pattern: RegExp("(@(?:exception|link|linkplain|see|throws|value)\\s+(?:\\*\\s*)?)(?:" + n + ")"),
            lookbehind: !0,
            inside: {
                function: {
                    pattern: /(#\s*)\w+(?=\s*\()/,
                    lookbehind: !0
                },
                field: {
                    pattern: /(#\s*)\w+/,
                    lookbehind: !0
                },
                namespace: {
                    pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
                    inside: {
                        punctuation: /\./
                    }
                },
                "class-name": /\b[A-Z]\w*/,
                keyword: a.languages.java.keyword,
                punctuation: /[#()[\],.]/
            }
        },
        "class-name": {
            pattern: /(@param\s+)<[A-Z]\w*>/,
            lookbehind: !0,
            inside: {
                punctuation: /[.<>]/
            }
        },
        "code-section": [{
            pattern: /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
            lookbehind: !0,
            inside: {
                code: {
                    pattern: e,
                    lookbehind: !0,
                    inside: a.languages.java,
                    alias: "language-java"
                }
            }
        }, {
            pattern: /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
            lookbehind: !0,
            inside: {
                line: {
                    pattern: e,
                    lookbehind: !0,
                    inside: {
                        tag: a.languages.markup.tag,
                        entity: a.languages.markup.entity,
                        code: {
                            pattern: /.+/,
                            inside: a.languages.java,
                            alias: "language-java"
                        }
                    }
                }
            }
        }],
        tag: a.languages.markup.tag,
        entity: a.languages.markup.entity
    }), a.languages.javadoclike.addSupport("java", a.languages.javadoc)
}(Prism);
Prism.languages.javastacktrace = {
    summary: {
        pattern: /^([\t ]*)(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m,
        lookbehind: !0,
        inside: {
            keyword: {
                pattern: /^([\t ]*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,
                lookbehind: !0
            },
            string: {
                pattern: /^(\s*)"[^"]*"/,
                lookbehind: !0
            },
            exceptions: {
                pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
                lookbehind: !0,
                inside: {
                    "class-name": /[\w$]+$/,
                    namespace: /\b[a-z]\w*\b/,
                    punctuation: /\./
                }
            },
            message: {
                pattern: /(:\s*)\S.*/,
                lookbehind: !0,
                alias: "string"
            },
            punctuation: /:/
        }
    },
    "stack-frame": {
        pattern: /^([\t ]*)at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,
        lookbehind: !0,
        inside: {
            keyword: {
                pattern: /^(\s*)at(?= )/,
                lookbehind: !0
            },
            source: [{
                pattern: /(\()\w+\.\w+:\d+(?=\))/,
                lookbehind: !0,
                inside: {
                    file: /^\w+\.\w+/,
                    punctuation: /:/,
                    "line-number": {
                        pattern: /\b\d+\b/,
                        alias: "number"
                    }
                }
            }, {
                pattern: /(\()[^()]*(?=\))/,
                lookbehind: !0,
                inside: {
                    keyword: /^(?:Native Method|Unknown Source)$/
                }
            }],
            "class-name": /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
            function: /(?:<init>|[\w$]+)(?=\()/,
            "class-loader": {
                pattern: /(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/,
                lookbehind: !0,
                alias: "namespace",
                inside: {
                    punctuation: /\./
                }
            },
            module: {
                pattern: /([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/,
                lookbehind: !0,
                inside: {
                    version: {
                        pattern: /(@)[\s\S]+/,
                        lookbehind: !0,
                        alias: "number"
                    },
                    punctuation: /[@.]/
                }
            },
            namespace: {
                pattern: /(?:\b[a-z]\w*\.)+/,
                inside: {
                    punctuation: /\./
                }
            },
            punctuation: /[()/.]/
        }
    },
    more: {
        pattern: /^([\t ]*)\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
        lookbehind: !0,
        inside: {
            punctuation: /\.{3}/,
            number: /\d+/,
            keyword: /\b[a-z]+(?: [a-z]+)*\b/
        }
    }
};
! function (e) {
    e.languages.typescript = e.languages.extend("javascript", {
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null
        },
        builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
    var s = e.languages.extend("typescript", {});
    delete s["class-name"], e.languages.typescript["class-name"].inside = s, e.languages.insertBefore("typescript", "function", {
        decorator: {
            pattern: /@[$\w\xA0-\uFFFF]+/,
            inside: {
                at: {
                    pattern: /^@/,
                    alias: "operator"
                },
                function: /^[\s\S]+/
            }
        },
        "generic-function": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
            greedy: !0,
            inside: {
                function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: s
                }
            }
        }
    }), e.languages.ts = e.languages.typescript
}(Prism);
! function (e) {
    var a = e.languages.javascript,
        n = "\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})+\\}",
        t = "(@(?:arg|argument|param|property)\\s+(?:" + n + "\\s+)?)";
    e.languages.jsdoc = e.languages.extend("javadoclike", {
        parameter: {
            pattern: RegExp(t + "(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)"),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        }
    }), e.languages.insertBefore("jsdoc", "keyword", {
        "optional-parameter": {
            pattern: RegExp(t + "\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)"),
            lookbehind: !0,
            inside: {
                parameter: {
                    pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                },
                code: {
                    pattern: /(=)[\s\S]*(?=\]$)/,
                    lookbehind: !0,
                    inside: a,
                    alias: "language-javascript"
                },
                punctuation: /[=[\]]/
            }
        },
        "class-name": [{
            pattern: RegExp("(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*".replace(/<TYPE>/g, (function () {
                return n
            }))),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        }, {
            pattern: RegExp("(@[a-z]+\\s+)" + n),
            lookbehind: !0,
            inside: {
                string: a.string,
                number: a.number,
                boolean: a.boolean,
                keyword: e.languages.typescript.keyword,
                operator: /=>|\.\.\.|[&|?:*]/,
                punctuation: /[.,;=<>{}()[\]]/
            }
        }],
        example: {
            pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
            lookbehind: !0,
            inside: {
                code: {
                    pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
                    lookbehind: !0,
                    inside: a,
                    alias: "language-javascript"
                }
            }
        }
    }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc)
}(Prism);
! function (a) {
    function e(a, e) {
        return RegExp(a.replace(/<ID>/g, (function () {
            return "(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*"
        })), e)
    }
    a.languages.insertBefore("javascript", "function-variable", {
        "method-variable": {
            pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source),
            lookbehind: !0,
            alias: ["function-variable", "method", "function", "property-access"]
        }
    }), a.languages.insertBefore("javascript", "function", {
        method: {
            pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source),
            lookbehind: !0,
            alias: ["function", "property-access"]
        }
    }), a.languages.insertBefore("javascript", "constant", {
        "known-class-name": [{
            pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: "class-name"
        }, {
            pattern: /\b(?:[A-Z]\w*)Error\b/,
            alias: "class-name"
        }]
    }), a.languages.insertBefore("javascript", "keyword", {
        imports: {
            pattern: e("(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)"),
            lookbehind: !0,
            inside: a.languages.javascript
        },
        exports: {
            pattern: e("(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})"),
            lookbehind: !0,
            inside: a.languages.javascript
        }
    }), a.languages.javascript.keyword.unshift({
        pattern: /\b(?:as|default|export|from|import)\b/,
        alias: "module"
    }, {
        pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
        alias: "control-flow"
    }, {
        pattern: /\bnull\b/,
        alias: ["null", "nil"]
    }, {
        pattern: /\bundefined\b/,
        alias: "nil"
    }), a.languages.insertBefore("javascript", "operator", {
        spread: {
            pattern: /\.{3}/,
            alias: "operator"
        },
        arrow: {
            pattern: /=>/,
            alias: "operator"
        }
    }), a.languages.insertBefore("javascript", "punctuation", {
        "property-access": {
            pattern: e("(\\.\\s*)#?<ID>"),
            lookbehind: !0
        },
        "maybe-class-name": {
            pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
            lookbehind: !0
        },
        dom: {
            pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
            alias: "variable"
        },
        console: {
            pattern: /\bconsole(?=\s*\.)/,
            alias: "class-name"
        }
    });
    for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < t.length; r++) {
        var n = t[r],
            s = a.languages.javascript[n];
        "RegExp" === a.util.type(s) && (s = a.languages.javascript[n] = {
            pattern: s
        });
        var o = s.inside || {};
        s.inside = o, o["maybe-class-name"] = /^[A-Z][\s\S]*/
    }
}(Prism);
Prism.languages.json = {
    property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
        pattern: /\bnull\b/,
        alias: "keyword"
    }
}, Prism.languages.webmanifest = Prism.languages.json;
! function (n) {
    var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
    n.languages.json5 = n.languages.extend("json", {
        property: [{
            pattern: RegExp(e.source + "(?=\\s*:)"),
            greedy: !0
        }, {
            pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
            alias: "unquoted"
        }],
        string: {
            pattern: e,
            greedy: !0
        },
        number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
    })
}(Prism);
Prism.languages.jsonp = Prism.languages.extend("json", {
    punctuation: /[{}[\]();,.]/
}), Prism.languages.insertBefore("jsonp", "punctuation", {
    function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
});
Prism.languages.jsstacktrace = {
    "error-message": {
        pattern: /^\S.*/m,
        alias: "string"
    },
    "stack-frame": {
        pattern: /(^[ \t]+)at[ \t].*/m,
        lookbehind: !0,
        inside: {
            "not-my-code": {
                pattern: /^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,
                alias: "comment"
            },
            filename: {
                pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
                lookbehind: !0,
                alias: "url"
            },
            function: {
                pattern: /(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
                lookbehind: !0,
                inside: {
                    punctuation: /\./
                }
            },
            punctuation: /[()]/,
            keyword: /\b(?:at|new)\b/,
            alias: {
                pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
                alias: "variable"
            },
            "line-number": {
                pattern: /:\d+(?::\d+)?\b/,
                alias: "number",
                inside: {
                    punctuation: /:/
                }
            }
        }
    }
};
! function (e) {
    var t = e.languages.javascript["template-string"],
        n = t.pattern.source,
        r = t.inside.interpolation,
        a = r.inside["interpolation-punctuation"],
        i = r.pattern.source;

    function o(t, r) {
        if (e.languages[t]) return {
            pattern: RegExp("((?:" + r + ")\\s*)" + n),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                "embedded-code": {
                    pattern: /[\s\S]+/,
                    alias: t
                }
            }
        }
    }

    function s(e, t) {
        return "___" + t.toUpperCase() + "_" + e + "___"
    }

    function p(t, n, r) {
        var a = {
            code: t,
            grammar: n,
            language: r
        };
        return e.hooks.run("before-tokenize", a), a.tokens = e.tokenize(a.code, a.grammar), e.hooks.run("after-tokenize", a), a.tokens
    }

    function l(t) {
        var n = {};
        n["interpolation-punctuation"] = a;
        var i = e.tokenize(t, n);
        if (3 === i.length) {
            var o = [1, 1];
            o.push.apply(o, p(i[1], e.languages.javascript, "javascript")), i.splice.apply(i, o)
        }
        return new e.Token("interpolation", i, r.alias, t)
    }

    function g(t, n, r) {
        var a = e.tokenize(t, {
            interpolation: {
                pattern: RegExp(i),
                lookbehind: !0
            }
        }),
            o = 0,
            g = {},
            u = p(a.map((function (e) {
                if ("string" == typeof e) return e;
                for (var n, a = e.content; - 1 !== t.indexOf(n = s(o++, r)););
                return g[n] = a, n
            })).join(""), n, r),
            c = Object.keys(g);
        return o = 0,
            function e(t) {
                for (var n = 0; n < t.length; n++) {
                    if (o >= c.length) return;
                    var r = t[n];
                    if ("string" == typeof r || "string" == typeof r.content) {
                        var a = c[o],
                            i = "string" == typeof r ? r : r.content,
                            s = i.indexOf(a);
                        if (-1 !== s) {
                            ++o;
                            var p = i.substring(0, s),
                                u = l(g[a]),
                                f = i.substring(s + a.length),
                                y = [];
                            if (p && y.push(p), y.push(u), f) {
                                var v = [f];
                                e(v), y.push.apply(y, v)
                            }
                            "string" == typeof r ? (t.splice.apply(t, [n, 1].concat(y)), n += y.length - 1) : r.content = y
                        }
                    } else {
                        var d = r.content;
                        Array.isArray(d) ? e(d) : e([d])
                    }
                }
            }(u), new e.Token(r, u, "language-" + r, t)
    }
    e.languages.javascript["template-string"] = [o("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"), o("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="), o("svg", "\\bsvg"), o("markdown", "\\b(?:markdown|md)"), o("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"), o("sql", "\\bsql"), t].filter(Boolean);
    var u = {
        javascript: !0,
        js: !0,
        typescript: !0,
        ts: !0,
        jsx: !0,
        tsx: !0
    };

    function c(e) {
        return "string" == typeof e ? e : Array.isArray(e) ? e.map(c).join("") : c(e.content)
    }
    e.hooks.add("after-tokenize", (function (t) {
        t.language in u && function t(n) {
            for (var r = 0, a = n.length; r < a; r++) {
                var i = n[r];
                if ("string" != typeof i) {
                    var o = i.content;
                    if (Array.isArray(o))
                        if ("template-string" === i.type) {
                            var s = o[1];
                            if (3 === o.length && "string" != typeof s && "embedded-code" === s.type) {
                                var p = c(s),
                                    l = s.alias,
                                    u = Array.isArray(l) ? l[0] : l,
                                    f = e.languages[u];
                                if (!f) continue;
                                o[1] = g(p, f, u)
                            }
                        } else t(o);
                    else "string" != typeof o && t([o])
                }
            }
        }(t.tokens)
    }))
}(Prism);
Prism.languages.makefile = {
    comment: {
        pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
        lookbehind: !0
    },
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "builtin-target": {
        pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
        alias: "builtin"
    },
    target: {
        pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
        alias: "symbol",
        inside: {
            variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
        }
    },
    variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
    keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
    function: {
        pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
        lookbehind: !0
    },
    operator: /(?:::|[?:+!])?=|[|@]/,
    punctuation: /[:;(){}]/
};
! function (n) {
    function e(n) {
        return n = n.replace(/<inner>/g, (function () {
            return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))"
        })), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")")
    }
    var t = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
        a = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(/__/g, (function () {
            return t
        })),
        i = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";
    n.languages.markdown = n.languages.extend("markup", {}), n.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
            pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                punctuation: /^---|---$/,
                "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: n.languages.yaml
                }
            }
        },
        blockquote: {
            pattern: /^>(?:[\t ]*>)*/m,
            alias: "punctuation"
        },
        table: {
            pattern: RegExp("^" + a + i + "(?:" + a + ")*", "m"),
            inside: {
                "table-data-rows": {
                    pattern: RegExp("^(" + a + i + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                        "table-data": {
                            pattern: RegExp(t),
                            inside: n.languages.markdown
                        },
                        punctuation: /\|/
                    }
                },
                "table-line": {
                    pattern: RegExp("^(" + a + ")" + i + "$"),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\||:?-{3,}:?/
                    }
                },
                "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                        "table-header": {
                            pattern: RegExp(t),
                            alias: "important",
                            inside: n.languages.markdown
                        },
                        punctuation: /\|/
                    }
                }
            }
        },
        code: [{
            pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: "keyword"
        }, {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
                "code-block": {
                    pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                    lookbehind: !0
                },
                "code-language": {
                    pattern: /^(```).+/,
                    lookbehind: !0
                },
                punctuation: /```/
            }
        }],
        title: [{
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: {
                punctuation: /==+$|--+$/
            }
        }, {
            pattern: /(^\s*)#.+/m,
            lookbehind: !0,
            alias: "important",
            inside: {
                punctuation: /^#+|#+$/
            }
        }],
        hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        "url-reference": {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
                variable: {
                    pattern: /^(!?\[)[^\]]+/,
                    lookbehind: !0
                },
                string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/
            },
            alias: "url"
        },
        bold: {
            pattern: e("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /\*\*|__/
            }
        },
        italic: {
            pattern: e("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /[*_]/
            }
        },
        strike: {
            pattern: e("(~~?)(?:(?!~)<inner>)+\\2"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /~~?/
            }
        },
        "code-snippet": {
            pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
            lookbehind: !0,
            greedy: !0,
            alias: ["code", "keyword"]
        },
        url: {
            pattern: e('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'),
            lookbehind: !0,
            greedy: !0,
            inside: {
                operator: /^!/,
                content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {}
                },
                variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0
                },
                url: {
                    pattern: /(^\]\()[^\s)]+/,
                    lookbehind: !0
                },
                string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0
                }
            }
        }
    }), ["url", "bold", "italic", "strike"].forEach((function (e) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach((function (t) {
            e !== t && (n.languages.markdown[e].inside.content.inside[t] = n.languages.markdown[t])
        }))
    })), n.hooks.add("after-tokenize", (function (n) {
        "markdown" !== n.language && "md" !== n.language || function n(e) {
            if (e && "string" != typeof e)
                for (var t = 0, a = e.length; t < a; t++) {
                    var i = e[t];
                    if ("code" === i.type) {
                        var r = i.content[1],
                            o = i.content[3];
                        if (r && o && "code-language" === r.type && "code-block" === o.type && "string" == typeof r.content) {
                            var l = r.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"),
                                s = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                            o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s]
                        }
                    } else n(i.content)
                }
        }(n.tokens)
    })), n.hooks.add("wrap", (function (e) {
        if ("code-block" === e.type) {
            for (var t = "", a = 0, i = e.classes.length; a < i; a++) {
                var s = e.classes[a],
                    d = /language-(.+)/.exec(s);
                if (d) {
                    t = d[1];
                    break
                }
            }
            var p = n.languages[t];
            if (p) e.content = n.highlight(e.content.replace(r, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, (function (n, e) {
                var t;
                return "#" === (e = e.toLowerCase())[0] ? (t = "x" === e[1] ? parseInt(e.slice(2), 16) : Number(e.slice(1)), l(t)) : o[e] || n
            })), p, t);
            else if (t && "none" !== t && n.plugins.autoloader) {
                var u = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random());
                e.attributes.id = u, n.plugins.autoloader.loadLanguages(t, (function () {
                    var e = document.getElementById(u);
                    e && (e.innerHTML = n.highlight(e.textContent, n.languages[t], t))
                }))
            }
        }
    }));
    var r = RegExp(n.languages.markup.tag.pattern.source, "gi"),
        o = {
            amp: "&",
            lt: "<",
            gt: ">",
            quot: '"'
        },
        l = String.fromCodePoint || String.fromCharCode;
    n.languages.md = n.languages.markdown
}(Prism);
Prism.languages.python = {
    comment: {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0,
        greedy: !0
    },
    "string-interpolation": {
        pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                    "format-spec": {
                        pattern: /(:)[^:(){}]+(?=\}$)/,
                        lookbehind: !0
                    },
                    "conversion-option": {
                        pattern: /![sra](?=[:}]$)/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            string: /[\s\S]+/
        }
    },
    "triple-quoted-string": {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: !0,
        alias: "string"
    },
    string: {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: !0
    },
    function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: !0
    },
    "class-name": {
        pattern: /(\bclass\s+)\w+/i,
        lookbehind: !0
    },
    decorator: {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: !0,
        alias: ["annotation", "punctuation"],
        inside: {
            punctuation: /\./
        }
    },
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
! function (t) {
    var n = t.util.clone(t.languages.javascript),
        e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";

    function a(t, n) {
        return t = t.replace(/<S>/g, (function () {
            return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"
        })).replace(/<BRACES>/g, (function () {
            return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"
        })).replace(/<SPREAD>/g, (function () {
            return e
        })), RegExp(t, n)
    }
    e = a(e).source, t.languages.jsx = t.languages.extend("markup", n), t.languages.jsx.tag.pattern = a("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"), t.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, t.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, t.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, t.languages.jsx.tag.inside.comment = n.comment, t.languages.insertBefore("inside", "attr-name", {
        spread: {
            pattern: a("<SPREAD>"),
            inside: t.languages.jsx
        }
    }, t.languages.jsx.tag), t.languages.insertBefore("inside", "special-attr", {
        script: {
            pattern: a("=<BRACES>"),
            alias: "language-javascript",
            inside: {
                "script-punctuation": {
                    pattern: /^=(?=\{)/,
                    alias: "punctuation"
                },
                rest: t.languages.jsx
            }
        }
    }, t.languages.jsx.tag);
    var s = function (t) {
        return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(s).join("") : ""
    },
        g = function (n) {
            for (var e = [], a = 0; a < n.length; a++) {
                var o = n[a],
                    i = !1;
                if ("string" != typeof o && ("tag" === o.type && o.content[0] && "tag" === o.content[0].type ? "</" === o.content[0].content[0].content ? e.length > 0 && e[e.length - 1].tagName === s(o.content[0].content[1]) && e.pop() : "/>" === o.content[o.content.length - 1].content || e.push({
                    tagName: s(o.content[0].content[1]),
                    openedBraces: 0
                }) : e.length > 0 && "punctuation" === o.type && "{" === o.content ? e[e.length - 1].openedBraces++ : e.length > 0 && e[e.length - 1].openedBraces > 0 && "punctuation" === o.type && "}" === o.content ? e[e.length - 1].openedBraces-- : i = !0), (i || "string" == typeof o) && e.length > 0 && 0 === e[e.length - 1].openedBraces) {
                    var r = s(o);
                    a < n.length - 1 && ("string" == typeof n[a + 1] || "plain-text" === n[a + 1].type) && (r += s(n[a + 1]), n.splice(a + 1, 1)), a > 0 && ("string" == typeof n[a - 1] || "plain-text" === n[a - 1].type) && (r = s(n[a - 1]) + r, n.splice(a - 1, 1), a--), n[a] = new t.Token("plain-text", r, null, r)
                }
                o.content && "string" != typeof o.content && g(o.content)
            }
        };
    t.hooks.add("after-tokenize", (function (t) {
        "jsx" !== t.language && "tsx" !== t.language || g(t.tokens)
    }))
}(Prism);
! function (e) {
    var a = e.util.clone(e.languages.typescript);
    e.languages.tsx = e.languages.extend("jsx", a), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"];
    var t = e.languages.tsx.tag;
    t.pattern = RegExp("(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")", t.pattern.flags), t.lookbehind = !0
}(Prism);
! function (e) {
    e.languages.ruby = e.languages.extend("clike", {
        comment: {
            pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
        operator: /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
        punctuation: /[(){}[\].,;]/
    }), e.languages.insertBefore("ruby", "operator", {
        "double-colon": {
            pattern: /::/,
            alias: "punctuation"
        }
    });
    var n = {
        pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
        lookbehind: !0,
        inside: {
            content: {
                pattern: /^(#\{)[\s\S]+(?=\}$)/,
                lookbehind: !0,
                inside: e.languages.ruby
            },
            delimiter: {
                pattern: /^#\{|\}$/,
                alias: "punctuation"
            }
        }
    };
    delete e.languages.ruby.function;
    var t = "(?:" + ["([^a-zA-Z0-9\\s{(\\[<=])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^]|\\((?:[^()\\\\]|\\\\[^])*\\))*\\)", "\\{(?:[^{}\\\\]|\\\\[^]|\\{(?:[^{}\\\\]|\\\\[^])*\\})*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^]|\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\])*\\]", "<(?:[^<>\\\\]|\\\\[^]|<(?:[^<>\\\\]|\\\\[^])*>)*>"].join("|") + ")",
        i = '(?:"(?:\\\\.|[^"\\\\\r\n])*"|(?:\\b[a-zA-Z_]\\w*|[^\\s\0-\\x7F]+)[?!]?|\\$.)';
    e.languages.insertBefore("ruby", "keyword", {
        "regex-literal": [{
            pattern: RegExp("%r" + t + "[egimnosux]{0,6}"),
            greedy: !0,
            inside: {
                interpolation: n,
                regex: /[\s\S]+/
            }
        }, {
            pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                interpolation: n,
                regex: /[\s\S]+/
            }
        }],
        variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
        symbol: [{
            pattern: RegExp("(^|[^:]):" + i),
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: RegExp("([\r\n{(,][ \t]*)" + i + "(?=:(?!:))"),
            lookbehind: !0,
            greedy: !0
        }],
        "method-definition": {
            pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
            lookbehind: !0,
            inside: {
                function: /\b\w+$/,
                keyword: /^self\b/,
                "class-name": /^\w+/,
                punctuation: /\./
            }
        }
    }), e.languages.insertBefore("ruby", "string", {
        "string-literal": [{
            pattern: RegExp("%[qQiIwWs]?" + t),
            greedy: !0,
            inside: {
                interpolation: n,
                string: /[\s\S]+/
            }
        }, {
            pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
            greedy: !0,
            inside: {
                interpolation: n,
                string: /[\s\S]+/
            }
        }, {
            pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
            alias: "heredoc-string",
            greedy: !0,
            inside: {
                delimiter: {
                    pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
                    inside: {
                        symbol: /\b\w+/,
                        punctuation: /^<<[-~]?/
                    }
                },
                interpolation: n,
                string: /[\s\S]+/
            }
        }, {
            pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
            alias: "heredoc-string",
            greedy: !0,
            inside: {
                delimiter: {
                    pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
                    inside: {
                        symbol: /\b\w+/,
                        punctuation: /^<<[-~]?'|'$/
                    }
                },
                string: /[\s\S]+/
            }
        }],
        "command-literal": [{
            pattern: RegExp("%x" + t),
            greedy: !0,
            inside: {
                interpolation: n,
                command: {
                    pattern: /[\s\S]+/,
                    alias: "string"
                }
            }
        }, {
            pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
            greedy: !0,
            inside: {
                interpolation: n,
                command: {
                    pattern: /[\s\S]+/,
                    alias: "string"
                }
            }
        }]
    }), delete e.languages.ruby.string, e.languages.insertBefore("ruby", "number", {
        builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
        constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
    }), e.languages.rb = e.languages.ruby
}(Prism);
! function (e) {
    for (var a = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", t = 0; t < 2; t++) a = a.replace(/<self>/g, (function () {
        return a
    }));
    a = a.replace(/<self>/g, (function () {
        return "[^\\s\\S]"
    })), e.languages.rust = {
        comment: [{
            pattern: RegExp("(^|[^\\\\])" + a),
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
            greedy: !0
        },
        char: {
            pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
            greedy: !0
        },
        attribute: {
            pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
            greedy: !0,
            alias: "attr-name",
            inside: {
                string: null
            }
        },
        "closure-params": {
            pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                "closure-punctuation": {
                    pattern: /^\||\|$/,
                    alias: "punctuation"
                },
                rest: null
            }
        },
        "lifetime-annotation": {
            pattern: /'\w+/,
            alias: "symbol"
        },
        "fragment-specifier": {
            pattern: /(\$\w+:)[a-z]+/,
            lookbehind: !0,
            alias: "punctuation"
        },
        variable: /\$\w+/,
        "function-definition": {
            pattern: /(\bfn\s+)\w+/,
            lookbehind: !0,
            alias: "function"
        },
        "type-definition": {
            pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
            lookbehind: !0,
            alias: "class-name"
        },
        "module-declaration": [{
            pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
            lookbehind: !0,
            alias: "namespace"
        }, {
            pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
            lookbehind: !0,
            alias: "namespace",
            inside: {
                punctuation: /::/
            }
        }],
        keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
        function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
        macro: {
            pattern: /\b\w+!/,
            alias: "property"
        },
        constant: /\b[A-Z_][A-Z_\d]+\b/,
        "class-name": /\b[A-Z]\w*\b/,
        namespace: {
            pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
            inside: {
                punctuation: /::/
            }
        },
        number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
        operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
    }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string
}(Prism);
! function (n) {
    function e(n, e) {
        return RegExp(n.replace(/<MOD>/g, (function () {
            return "(?:\\([^|()\n]+\\)|\\[[^\\]\n]+\\]|\\{[^}\n]+\\})"
        })).replace(/<PAR>/g, (function () {
            return "(?:\\)|\\((?![^|()\n]+\\)))"
        })), e || "")
    }
    var i = {
        css: {
            pattern: /\{[^{}]+\}/,
            inside: {
                rest: n.languages.css
            }
        },
        "class-id": {
            pattern: /(\()[^()]+(?=\))/,
            lookbehind: !0,
            alias: "attr-value"
        },
        lang: {
            pattern: /(\[)[^\[\]]+(?=\])/,
            lookbehind: !0,
            alias: "attr-value"
        },
        punctuation: /[\\\/]\d+|\S/
    },
        t = n.languages.textile = n.languages.extend("markup", {
            phrase: {
                pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
                lookbehind: !0,
                inside: {
                    "block-tag": {
                        pattern: e("^[a-z]\\w*(?:<MOD>|<PAR>|[<>=])*\\."),
                        inside: {
                            modifier: {
                                pattern: e("(^[a-z]\\w*)(?:<MOD>|<PAR>|[<>=])+(?=\\.)"),
                                lookbehind: !0,
                                inside: i
                            },
                            tag: /^[a-z]\w*/,
                            punctuation: /\.$/
                        }
                    },
                    list: {
                        pattern: e("^[*#]+<MOD>*\\s+\\S.*", "m"),
                        inside: {
                            modifier: {
                                pattern: e("(^[*#]+)<MOD>+"),
                                lookbehind: !0,
                                inside: i
                            },
                            punctuation: /^[*#]+/
                        }
                    },
                    table: {
                        pattern: e("^(?:(?:<MOD>|<PAR>|[<>=^~])+\\.\\s*)?(?:\\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.))[^|]*)+\\|", "m"),
                        inside: {
                            modifier: {
                                pattern: e("(^|\\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+(?=\\.)"),
                                lookbehind: !0,
                                inside: i
                            },
                            punctuation: /\||^\./
                        }
                    },
                    inline: {
                        pattern: e("(^|[^a-zA-Z\\d])(\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>*.+?\\2(?![a-zA-Z\\d])"),
                        lookbehind: !0,
                        inside: {
                            bold: {
                                pattern: e("(^(\\*\\*?)<MOD>*).+?(?=\\2)"),
                                lookbehind: !0
                            },
                            italic: {
                                pattern: e("(^(__?)<MOD>*).+?(?=\\2)"),
                                lookbehind: !0
                            },
                            cite: {
                                pattern: e("(^\\?\\?<MOD>*).+?(?=\\?\\?)"),
                                lookbehind: !0,
                                alias: "string"
                            },
                            code: {
                                pattern: e("(^@<MOD>*).+?(?=@)"),
                                lookbehind: !0,
                                alias: "keyword"
                            },
                            inserted: {
                                pattern: e("(^\\+<MOD>*).+?(?=\\+)"),
                                lookbehind: !0
                            },
                            deleted: {
                                pattern: e("(^-<MOD>*).+?(?=-)"),
                                lookbehind: !0
                            },
                            span: {
                                pattern: e("(^%<MOD>*).+?(?=%)"),
                                lookbehind: !0
                            },
                            modifier: {
                                pattern: e("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>+"),
                                lookbehind: !0,
                                inside: i
                            },
                            punctuation: /[*_%?@+\-^~]+/
                        }
                    },
                    "link-ref": {
                        pattern: /^\[[^\]]+\]\S+$/m,
                        inside: {
                            string: {
                                pattern: /(^\[)[^\]]+(?=\])/,
                                lookbehind: !0
                            },
                            url: {
                                pattern: /(^\])\S+$/,
                                lookbehind: !0
                            },
                            punctuation: /[\[\]]/
                        }
                    },
                    link: {
                        pattern: e('"<MOD>*[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),
                        inside: {
                            text: {
                                pattern: e('(^"<MOD>*)[^"]+(?=")'),
                                lookbehind: !0
                            },
                            modifier: {
                                pattern: e('(^")<MOD>+'),
                                lookbehind: !0,
                                inside: i
                            },
                            url: {
                                pattern: /(:).+/,
                                lookbehind: !0
                            },
                            punctuation: /[":]/
                        }
                    },
                    image: {
                        pattern: e("!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),
                        inside: {
                            source: {
                                pattern: e("(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),
                                lookbehind: !0,
                                alias: "url"
                            },
                            modifier: {
                                pattern: e("(^!)(?:<MOD>|<PAR>|[<>=])+"),
                                lookbehind: !0,
                                inside: i
                            },
                            url: {
                                pattern: /(:).+/,
                                lookbehind: !0
                            },
                            punctuation: /[!:]/
                        }
                    },
                    footnote: {
                        pattern: /\b\[\d+\]/,
                        alias: "comment",
                        inside: {
                            punctuation: /\[|\]/
                        }
                    },
                    acronym: {
                        pattern: /\b[A-Z\d]+\([^)]+\)/,
                        inside: {
                            comment: {
                                pattern: /(\()[^()]+(?=\))/,
                                lookbehind: !0
                            },
                            punctuation: /[()]/
                        }
                    },
                    mark: {
                        pattern: /\b\((?:C|R|TM)\)/,
                        alias: "comment",
                        inside: {
                            punctuation: /[()]/
                        }
                    }
                }
            }
        }),
        a = t.phrase.inside,
        o = {
            inline: a.inline,
            link: a.link,
            image: a.image,
            footnote: a.footnote,
            acronym: a.acronym,
            mark: a.mark
        };
    t.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
    var r = a.inline.inside;
    r.bold.inside = o, r.italic.inside = o, r.inserted.inside = o, r.deleted.inside = o, r.span.inside = o;
    var d = a.table.inside;
    d.inline = o.inline, d.link = o.link, d.image = o.image, d.footnote = o.footnote, d.acronym = o.acronym, d.mark = o.mark
}(Prism);
! function (e) {
    function n(e) {
        return e.replace(/__/g, (function () {
            return "(?:[\\w-]+|'[^'\n\r]*'|\"(?:\\\\.|[^\\\\\"\r\n])*\")"
        }))
    }
    e.languages.toml = {
        comment: {
            pattern: /#.*/,
            greedy: !0
        },
        table: {
            pattern: RegExp(n("(^[\t ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])"), "m"),
            lookbehind: !0,
            greedy: !0,
            alias: "class-name"
        },
        key: {
            pattern: RegExp(n("(^[\t ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)"), "m"),
            lookbehind: !0,
            greedy: !0,
            alias: "property"
        },
        string: {
            pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0
        },
        date: [{
            pattern: /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
            alias: "number"
        }, {
            pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,
            alias: "number"
        }],
        number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /[.,=[\]{}]/
    }
}(Prism);
! function (E) {
    var n = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
    E.languages.typoscript = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^"'])#.*/,
            lookbehind: !0,
            greedy: !0
        }],
        function: [{
            pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
            inside: {
                string: {
                    pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
                    inside: {
                        keyword: n
                    }
                },
                keyword: {
                    pattern: /INCLUDE_TYPOSCRIPT/
                }
            }
        }, {
            pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
            inside: {
                string: /"[^"\r\n]*"|'[^'\r\n]*'/
            }
        }],
        string: {
            pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/,
            lookbehind: !0,
            inside: {
                function: /\{\$.*\}/,
                keyword: n,
                number: /^\d+$/,
                punctuation: /[,|:]/
            }
        },
        keyword: n,
        number: {
            pattern: /\b\d+\s*[.{=]/,
            inside: {
                operator: /[.{=]/
            }
        },
        tag: {
            pattern: /\.?[-\w\\]+\.?/,
            inside: {
                punctuation: /\./
            }
        },
        punctuation: /[{}[\];(),.:|]/,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
    }, E.languages.tsconfig = E.languages.typoscript
}(Prism);
! function (e) {
    var n = /[*&][^\s[\]{},]+/,
        r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
        t = "(?:" + r.source + "(?:[ \t]+" + n.source + ")?|" + n.source + "(?:[ \t]+" + r.source + ")?)",
        a = "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g, (function () {
            return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"
        })),
        d = "\"(?:[^\"\\\\\r\n]|\\\\.)*\"|'(?:[^'\\\\\r\n]|\\\\.)*'";

    function o(e, n) {
        n = (n || "").replace(/m/g, "") + "m";
        var r = "([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))".replace(/<<prop>>/g, (function () {
            return t
        })).replace(/<<value>>/g, (function () {
            return e
        }));
        return RegExp(r, n)
    }
    e.languages.yaml = {
        scalar: {
            pattern: RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g, (function () {
                return t
            }))),
            lookbehind: !0,
            alias: "string"
        },
        comment: /#.*/,
        key: {
            pattern: RegExp("((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)".replace(/<<prop>>/g, (function () {
                return t
            })).replace(/<<key>>/g, (function () {
                return "(?:" + a + "|" + d + ")"
            }))),
            lookbehind: !0,
            greedy: !0,
            alias: "atrule"
        },
        directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important"
        },
        datetime: {
            pattern: o("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),
            lookbehind: !0,
            alias: "number"
        },
        boolean: {
            pattern: o("false|true", "i"),
            lookbehind: !0,
            alias: "important"
        },
        null: {
            pattern: o("null|~", "i"),
            lookbehind: !0,
            alias: "important"
        },
        string: {
            pattern: o(d),
            lookbehind: !0,
            greedy: !0
        },
        number: {
            pattern: o("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "i"),
            lookbehind: !0
        },
        tag: r,
        important: n,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }, e.languages.yml = e.languages.yaml
}(Prism);
