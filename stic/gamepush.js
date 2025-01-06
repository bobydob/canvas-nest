/*! For license information please see gamepush.js.LICENSE.txt */
(() => {
    var e, t, n, i, r = {
            2616: e => {
                "use strict";
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map((function(t) {
                            var n = e(t);
                            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                        })).join("")
                    }, t.i = function(e, n, i) {
                        "string" == typeof e && (e = [
                            [null, e, ""]
                        ]);
                        var r = {};
                        if (i)
                            for (var s = 0; s < this.length; s++) {
                                var a = this[s][0];
                                null != a && (r[a] = !0)
                            }
                        for (var o = 0; o < e.length; o++) {
                            var c = [].concat(e[o]);
                            i && r[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c))
                        }
                    }, t
                }
            },
            5585: e => {
                ! function(t) {
                    e.exports = t;
                    var n = {
                        on: function(e, t) {
                            return s(this, e).push(t), this
                        },
                        once: function(e, t) {
                            var n = this;
                            return i.originalListener = t, s(n, e).push(i), n;

                            function i() {
                                r.call(n, e, i), t.apply(this, arguments)
                            }
                        },
                        off: r,
                        emit: function(e, t) {
                            var n = this,
                                i = s(n, e, !0);
                            if (!i) return !1;
                            var r = arguments.length;
                            if (1 === r) i.forEach(o);
                            else if (2 === r) i.forEach(c);
                            else {
                                var a = Array.prototype.slice.call(arguments, 1);
                                i.forEach(l)
                            }
                            return !!i.length;

                            function o(e) {
                                e.call(n)
                            }

                            function c(e) {
                                e.call(n, t)
                            }

                            function l(e) {
                                e.apply(n, a)
                            }
                        }
                    };

                    function i(e) {
                        for (var t in n) e[t] = n[t];
                        return e
                    }

                    function r(e, t) {
                        var n, i = this;
                        if (arguments.length) {
                            if (t) {
                                if (n = s(i, e, !0)) {
                                    if (!(n = n.filter(a)).length) return r.call(i, e);
                                    i.listeners[e] = n
                                }
                            } else if ((n = i.listeners) && (delete n[e], !Object.keys(n).length)) return r.call(i)
                        } else delete i.listeners;
                        return i;

                        function a(e) {
                            return e !== t && e.originalListener !== t
                        }
                    }

                    function s(e, t, n) {
                        if (!n || e.listeners) {
                            var i = e.listeners || (e.listeners = {});
                            return i[t] || (i[t] = [])
                        }
                    }
                    i(t.prototype), t.mixin = i
                }((function e() {
                    if (!(this instanceof e)) return new e
                }))
            },
            4809: (e, t, n) => {
                "use strict";
                n.d(t, {
                    ZP: () => m
                });
                var i = n(3559),
                    r = n(9691);

                function s(e) {
                    return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var a = new Map,
                    o = new Map,
                    c = !0,
                    l = !1;

                function h(e) {
                    return e.replace(/[\s,]+/g, " ").trim()
                }

                function d(e) {
                    var t, n, d, u = h(e);
                    if (!a.has(u)) {
                        var p = (0, r.Qc)(e, {
                            experimentalFragmentVariables: l
                        });
                        if (!p || "Document" !== p.kind) throw new Error("Not a valid GraphQL document.");
                        a.set(u, function(e) {
                            var t = new Set(e.definitions);
                            t.forEach((function(e) {
                                e.loc && delete e.loc, Object.keys(e).forEach((function(n) {
                                    var i = e[n];
                                    i && "object" === s(i) && t.add(i)
                                }))
                            }));
                            var n = e.loc;
                            return n && (delete n.startToken, delete n.endToken), e
                        }((t = p, n = new Set, d = [], t.definitions.forEach((function(e) {
                            if ("FragmentDefinition" === e.kind) {
                                var t = e.name.value,
                                    i = h((s = e.loc).source.body.substring(s.start, s.end)),
                                    r = o.get(t);
                                r && !r.has(i) ? c && console.warn("Warning: fragment with name " + t + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : r || o.set(t, r = new Set), r.add(i), n.has(i) || (n.add(i), d.push(e))
                            } else d.push(e);
                            var s
                        })), (0, i.pi)((0, i.pi)({}, t), {
                            definitions: d
                        }))))
                    }
                    return a.get(u)
                }

                function u(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    "string" == typeof e && (e = [e]);
                    var i = e[0];
                    return t.forEach((function(t, n) {
                        t && "Document" === t.kind ? i += t.loc.source.body : i += t, i += e[n + 1]
                    })), d(i)
                }
                var p, f = u;
                (p = u || (u = {})).gql = f, p.resetCaches = function() {
                    a.clear(), o.clear()
                }, p.disableFragmentWarnings = function() {
                    c = !1
                }, p.enableExperimentalFragmentVariables = function() {
                    l = !0
                }, p.disableExperimentalFragmentVariables = function() {
                    l = !1
                }, u.default = u;
                const m = u
            },
            4943: e => {
                "use strict";
                e.exports = i, e.exports.isMobile = i, e.exports.default = i;
                var t = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
                    n = /android|ipad|playbook|silk/i;

                function i(e) {
                    e || (e = {});
                    var i = e.ua;
                    if (i || "undefined" == typeof navigator || (i = navigator.userAgent), i && i.headers && "string" == typeof i.headers["user-agent"] && (i = i.headers["user-agent"]), "string" != typeof i) return !1;
                    var r = t.test(i) || !!e.tablet && n.test(i);
                    return !r && e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && -1 !== i.indexOf("Macintosh") && -1 !== i.indexOf("Safari") && (r = !0), r
                }
            },
            2096: () => {
                "function" != typeof Promise.prototype.finally && (Promise.prototype.finally = function(e) {
                    var t = this;
                    return this.then((function(n) {
                        return t.constructor.resolve(e()).then((function() {
                            return n
                        }))
                    })).catch((function(n) {
                        return t.constructor.resolve(e()).then((function() {
                            throw n
                        }))
                    }))
                })
            },
            3559: (e, t, n) => {
                "use strict";
                n.d(t, {
                    pi: () => i
                });
                var i = function() {
                    return (i = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                };
                Object.create, Object.create
            },
            6256: function(e, t, n) {
                var i;

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                e = n.nmd(e),
                    function(s, a) {
                        "use strict";
                        var o = "function",
                            c = "undefined",
                            l = "object",
                            h = "string",
                            d = "model",
                            u = "name",
                            p = "type",
                            f = "vendor",
                            m = "version",
                            v = "architecture",
                            y = "console",
                            g = "mobile",
                            w = "tablet",
                            b = "smarttv",
                            P = "wearable",
                            E = "embedded",
                            T = "Amazon",
                            S = "Apple",
                            _ = "ASUS",
                            A = "BlackBerry",
                            I = "Google",
                            C = "Huawei",
                            k = "LG",
                            R = "Microsoft",
                            O = "Motorola",
                            D = "Samsung",
                            N = "Sharp",
                            x = "Sony",
                            L = "Xiaomi",
                            F = "Zebra",
                            M = "Facebook",
                            j = "Chromium OS",
                            U = "Mac OS",
                            $ = function(e) {
                                for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                                return t
                            },
                            G = function(e, t) {
                                return r(e) === h && -1 !== B(t).indexOf(B(e))
                            },
                            B = function(e) {
                                return e.toLowerCase()
                            },
                            q = function(e, t) {
                                if (r(e) === h) return e = e.replace(/^\s\s*/, ""), r(t) === c ? e : e.substring(0, 350)
                            },
                            V = function(e, t) {
                                for (var n, i, s, c, h, d, u = 0; u < t.length && !h;) {
                                    var p = t[u],
                                        f = t[u + 1];
                                    for (n = i = 0; n < p.length && !h && p[n];)
                                        if (h = p[n++].exec(e))
                                            for (s = 0; s < f.length; s++) d = h[++i], r(c = f[s]) === l && c.length > 0 ? 2 === c.length ? r(c[1]) == o ? this[c[0]] = c[1].call(this, d) : this[c[0]] = c[1] : 3 === c.length ? r(c[1]) !== o || c[1].exec && c[1].test ? this[c[0]] = d ? d.replace(c[1], c[2]) : a : this[c[0]] = d ? c[1].call(this, d, c[2]) : a : 4 === c.length && (this[c[0]] = d ? c[3].call(this, d.replace(c[1], c[2])) : a) : this[c] = d || a;
                                    u += 2
                                }
                            },
                            W = function(e, t) {
                                for (var n in t)
                                    if (r(t[n]) === l && t[n].length > 0) {
                                        for (var i = 0; i < t[n].length; i++)
                                            if (G(t[n][i], e)) return "?" === n ? a : n
                                    } else if (G(t[n], e)) return "?" === n ? a : n;
                                return e
                            },
                            z = {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            },
                            Y = {
                                browser: [
                                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                    [m, [u, "Chrome"]],
                                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                    [m, [u, "Edge"]],
                                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                    [u, m],
                                    [/opios[\/ ]+([\w\.]+)/i],
                                    [m, [u, "Opera Mini"]],
                                    [/\bopr\/([\w\.]+)/i],
                                    [m, [u, "Opera"]],
                                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                    [u, m],
                                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                    [m, [u, "UCBrowser"]],
                                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                    [m, [u, "WeChat(Win) Desktop"]],
                                    [/micromessenger\/([\w\.]+)/i],
                                    [m, [u, "WeChat"]],
                                    [/konqueror\/([\w\.]+)/i],
                                    [m, [u, "Konqueror"]],
                                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                    [m, [u, "IE"]],
                                    [/ya(?:search)?browser\/([\w\.]+)/i],
                                    [m, [u, "Yandex"]],
                                    [/(avast|avg)\/([\w\.]+)/i],
                                    [
                                        [u, /(.+)/, "$1 Secure Browser"], m
                                    ],
                                    [/\bfocus\/([\w\.]+)/i],
                                    [m, [u, "Firefox Focus"]],
                                    [/\bopt\/([\w\.]+)/i],
                                    [m, [u, "Opera Touch"]],
                                    [/coc_coc\w+\/([\w\.]+)/i],
                                    [m, [u, "Coc Coc"]],
                                    [/dolfin\/([\w\.]+)/i],
                                    [m, [u, "Dolphin"]],
                                    [/coast\/([\w\.]+)/i],
                                    [m, [u, "Opera Coast"]],
                                    [/miuibrowser\/([\w\.]+)/i],
                                    [m, [u, "MIUI Browser"]],
                                    [/fxios\/([-\w\.]+)/i],
                                    [m, [u, "Firefox"]],
                                    [/\bqihu|(qi?ho?o?|360)browser/i],
                                    [
                                        [u, "360 Browser"]
                                    ],
                                    [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                    [
                                        [u, /(.+)/, "$1 Browser"], m
                                    ],
                                    [/(comodo_dragon)\/([\w\.]+)/i],
                                    [
                                        [u, /_/g, " "], m
                                    ],
                                    [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                    [u, m],
                                    [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                    [u],
                                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                    [
                                        [u, M], m
                                    ],
                                    [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                    [u, m],
                                    [/\bgsa\/([\w\.]+) .*safari\//i],
                                    [m, [u, "GSA"]],
                                    [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                    [m, [u, "TikTok"]],
                                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                                    [m, [u, "Chrome Headless"]],
                                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                                    [
                                        [u, "Chrome WebView"], m
                                    ],
                                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                    [m, [u, "Android Browser"]],
                                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                    [u, m],
                                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                    [m, [u, "Mobile Safari"]],
                                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                    [m, u],
                                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                    [u, [m, W, {
                                        "1.0": "/8",
                                        1.2: "/1",
                                        1.3: "/3",
                                        "2.0": "/412",
                                        "2.0.2": "/416",
                                        "2.0.3": "/417",
                                        "2.0.4": "/419",
                                        "?": "/"
                                    }]],
                                    [/(webkit|khtml)\/([\w\.]+)/i],
                                    [u, m],
                                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                    [
                                        [u, "Netscape"], m
                                    ],
                                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                    [m, [u, "Firefox Reality"]],
                                    [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                    [u, m],
                                    [/(cobalt)\/([\w\.]+)/i],
                                    [u, [m, /master.|lts./, ""]]
                                ],
                                cpu: [
                                    [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                    [
                                        [v, "amd64"]
                                    ],
                                    [/(ia32(?=;))/i],
                                    [
                                        [v, B]
                                    ],
                                    [/((?:i[346]|x)86)[;\)]/i],
                                    [
                                        [v, "ia32"]
                                    ],
                                    [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                    [
                                        [v, "arm64"]
                                    ],
                                    [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                    [
                                        [v, "armhf"]
                                    ],
                                    [/windows (ce|mobile); ppc;/i],
                                    [
                                        [v, "arm"]
                                    ],
                                    [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                    [
                                        [v, /ower/, "", B]
                                    ],
                                    [/(sun4\w)[;\)]/i],
                                    [
                                        [v, "sparc"]
                                    ],
                                    [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                    [
                                        [v, B]
                                    ]
                                ],
                                device: [
                                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                    [d, [f, D],
                                        [p, w]
                                    ],
                                    [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                    [d, [f, D],
                                        [p, g]
                                    ],
                                    [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                    [d, [f, S],
                                        [p, g]
                                    ],
                                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                    [d, [f, S],
                                        [p, w]
                                    ],
                                    [/(macintosh);/i],
                                    [d, [f, S]],
                                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                    [d, [f, N],
                                        [p, g]
                                    ],
                                    [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                    [d, [f, C],
                                        [p, w]
                                    ],
                                    [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                    [d, [f, C],
                                        [p, g]
                                    ],
                                    [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                    [
                                        [d, /_/g, " "],
                                        [f, L],
                                        [p, g]
                                    ],
                                    [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                    [
                                        [d, /_/g, " "],
                                        [f, L],
                                        [p, w]
                                    ],
                                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                    [d, [f, "OPPO"],
                                        [p, g]
                                    ],
                                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                    [d, [f, "Vivo"],
                                        [p, g]
                                    ],
                                    [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                    [d, [f, "Realme"],
                                        [p, g]
                                    ],
                                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                    [d, [f, O],
                                        [p, g]
                                    ],
                                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                    [d, [f, O],
                                        [p, w]
                                    ],
                                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                    [d, [f, k],
                                        [p, w]
                                    ],
                                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                    [d, [f, k],
                                        [p, g]
                                    ],
                                    [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                    [d, [f, "Lenovo"],
                                        [p, w]
                                    ],
                                    [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                    [
                                        [d, /_/g, " "],
                                        [f, "Nokia"],
                                        [p, g]
                                    ],
                                    [/(pixel c)\b/i],
                                    [d, [f, I],
                                        [p, w]
                                    ],
                                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                    [d, [f, I],
                                        [p, g]
                                    ],
                                    [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                    [d, [f, x],
                                        [p, g]
                                    ],
                                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                    [
                                        [d, "Xperia Tablet"],
                                        [f, x],
                                        [p, w]
                                    ],
                                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                    [d, [f, "OnePlus"],
                                        [p, g]
                                    ],
                                    [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                    [d, [f, T],
                                        [p, w]
                                    ],
                                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                    [
                                        [d, /(.+)/g, "Fire Phone $1"],
                                        [f, T],
                                        [p, g]
                                    ],
                                    [/(playbook);[-\w\),; ]+(rim)/i],
                                    [d, f, [p, w]],
                                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                    [d, [f, A],
                                        [p, g]
                                    ],
                                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                    [d, [f, _],
                                        [p, w]
                                    ],
                                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                    [d, [f, _],
                                        [p, g]
                                    ],
                                    [/(nexus 9)/i],
                                    [d, [f, "HTC"],
                                        [p, w]
                                    ],
                                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                    [f, [d, /_/g, " "],
                                        [p, g]
                                    ],
                                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                    [d, [f, "Acer"],
                                        [p, w]
                                    ],
                                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                    [d, [f, "Meizu"],
                                        [p, g]
                                    ],
                                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                    [f, d, [p, g]],
                                    [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                    [f, d, [p, w]],
                                    [/(surface duo)/i],
                                    [d, [f, R],
                                        [p, w]
                                    ],
                                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                    [d, [f, "Fairphone"],
                                        [p, g]
                                    ],
                                    [/(u304aa)/i],
                                    [d, [f, "AT&T"],
                                        [p, g]
                                    ],
                                    [/\bsie-(\w*)/i],
                                    [d, [f, "Siemens"],
                                        [p, g]
                                    ],
                                    [/\b(rct\w+) b/i],
                                    [d, [f, "RCA"],
                                        [p, w]
                                    ],
                                    [/\b(venue[\d ]{2,7}) b/i],
                                    [d, [f, "Dell"],
                                        [p, w]
                                    ],
                                    [/\b(q(?:mv|ta)\w+) b/i],
                                    [d, [f, "Verizon"],
                                        [p, w]
                                    ],
                                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                    [d, [f, "Barnes & Noble"],
                                        [p, w]
                                    ],
                                    [/\b(tm\d{3}\w+) b/i],
                                    [d, [f, "NuVision"],
                                        [p, w]
                                    ],
                                    [/\b(k88) b/i],
                                    [d, [f, "ZTE"],
                                        [p, w]
                                    ],
                                    [/\b(nx\d{3}j) b/i],
                                    [d, [f, "ZTE"],
                                        [p, g]
                                    ],
                                    [/\b(gen\d{3}) b.+49h/i],
                                    [d, [f, "Swiss"],
                                        [p, g]
                                    ],
                                    [/\b(zur\d{3}) b/i],
                                    [d, [f, "Swiss"],
                                        [p, w]
                                    ],
                                    [/\b((zeki)?tb.*\b) b/i],
                                    [d, [f, "Zeki"],
                                        [p, w]
                                    ],
                                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                    [
                                        [f, "Dragon Touch"], d, [p, w]
                                    ],
                                    [/\b(ns-?\w{0,9}) b/i],
                                    [d, [f, "Insignia"],
                                        [p, w]
                                    ],
                                    [/\b((nxa|next)-?\w{0,9}) b/i],
                                    [d, [f, "NextBook"],
                                        [p, w]
                                    ],
                                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                    [
                                        [f, "Voice"], d, [p, g]
                                    ],
                                    [/\b(lvtel\-)?(v1[12]) b/i],
                                    [
                                        [f, "LvTel"], d, [p, g]
                                    ],
                                    [/\b(ph-1) /i],
                                    [d, [f, "Essential"],
                                        [p, g]
                                    ],
                                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                    [d, [f, "Envizen"],
                                        [p, w]
                                    ],
                                    [/\b(trio[-\w\. ]+) b/i],
                                    [d, [f, "MachSpeed"],
                                        [p, w]
                                    ],
                                    [/\btu_(1491) b/i],
                                    [d, [f, "Rotor"],
                                        [p, w]
                                    ],
                                    [/(shield[\w ]+) b/i],
                                    [d, [f, "Nvidia"],
                                        [p, w]
                                    ],
                                    [/(sprint) (\w+)/i],
                                    [f, d, [p, g]],
                                    [/(kin\.[onetw]{3})/i],
                                    [
                                        [d, /\./g, " "],
                                        [f, R],
                                        [p, g]
                                    ],
                                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                    [d, [f, F],
                                        [p, w]
                                    ],
                                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                    [d, [f, F],
                                        [p, g]
                                    ],
                                    [/smart-tv.+(samsung)/i],
                                    [f, [p, b]],
                                    [/hbbtv.+maple;(\d+)/i],
                                    [
                                        [d, /^/, "SmartTV"],
                                        [f, D],
                                        [p, b]
                                    ],
                                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                    [
                                        [f, k],
                                        [p, b]
                                    ],
                                    [/(apple) ?tv/i],
                                    [f, [d, "Apple TV"],
                                        [p, b]
                                    ],
                                    [/crkey/i],
                                    [
                                        [d, "Chromecast"],
                                        [f, I],
                                        [p, b]
                                    ],
                                    [/droid.+aft(\w)( bui|\))/i],
                                    [d, [f, T],
                                        [p, b]
                                    ],
                                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                    [d, [f, N],
                                        [p, b]
                                    ],
                                    [/(bravia[\w ]+)( bui|\))/i],
                                    [d, [f, x],
                                        [p, b]
                                    ],
                                    [/(mitv-\w{5}) bui/i],
                                    [d, [f, L],
                                        [p, b]
                                    ],
                                    [/Hbbtv.*(technisat) (.*);/i],
                                    [f, d, [p, b]],
                                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                    [
                                        [f, q],
                                        [d, q],
                                        [p, b]
                                    ],
                                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                    [
                                        [p, b]
                                    ],
                                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                    [f, d, [p, y]],
                                    [/droid.+; (shield) bui/i],
                                    [d, [f, "Nvidia"],
                                        [p, y]
                                    ],
                                    [/(playstation [345portablevi]+)/i],
                                    [d, [f, x],
                                        [p, y]
                                    ],
                                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                    [d, [f, R],
                                        [p, y]
                                    ],
                                    [/((pebble))app/i],
                                    [f, d, [p, P]],
                                    [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                    [d, [f, S],
                                        [p, P]
                                    ],
                                    [/droid.+; (glass) \d/i],
                                    [d, [f, I],
                                        [p, P]
                                    ],
                                    [/droid.+; (wt63?0{2,3})\)/i],
                                    [d, [f, F],
                                        [p, P]
                                    ],
                                    [/(quest( 2| pro)?)/i],
                                    [d, [f, M],
                                        [p, P]
                                    ],
                                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                    [f, [p, E]],
                                    [/(aeobc)\b/i],
                                    [d, [f, T],
                                        [p, E]
                                    ],
                                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                    [d, [p, g]],
                                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                    [d, [p, w]],
                                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                    [
                                        [p, w]
                                    ],
                                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                    [
                                        [p, g]
                                    ],
                                    [/(android[-\w\. ]{0,9});.+buil/i],
                                    [d, [f, "Generic"]]
                                ],
                                engine: [
                                    [/windows.+ edge\/([\w\.]+)/i],
                                    [m, [u, "EdgeHTML"]],
                                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                    [m, [u, "Blink"]],
                                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                    [u, m],
                                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                    [m, u]
                                ],
                                os: [
                                    [/microsoft (windows) (vista|xp)/i],
                                    [u, m],
                                    [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                    [u, [m, W, z]],
                                    [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                    [
                                        [u, "Windows"],
                                        [m, W, z]
                                    ],
                                    [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                    [
                                        [m, /_/g, "."],
                                        [u, "iOS"]
                                    ],
                                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                    [
                                        [u, U],
                                        [m, /_/g, "."]
                                    ],
                                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                    [m, u],
                                    [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                    [u, m],
                                    [/\(bb(10);/i],
                                    [m, [u, A]],
                                    [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                    [m, [u, "Symbian"]],
                                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                    [m, [u, "Firefox OS"]],
                                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                    [m, [u, "webOS"]],
                                    [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                    [m, [u, "watchOS"]],
                                    [/crkey\/([\d\.]+)/i],
                                    [m, [u, "Chromecast"]],
                                    [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                    [
                                        [u, j], m
                                    ],
                                    [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                    [u, m],
                                    [/(sunos) ?([\w\.\d]*)/i],
                                    [
                                        [u, "Solaris"], m
                                    ],
                                    [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                    [u, m]
                                ]
                            },
                            K = function e(t, n) {
                                if (r(t) === l && (n = t, t = a), !(this instanceof e)) return new e(t, n).getResult();
                                var i = r(s) !== c && s.navigator ? s.navigator : a,
                                    d = t || (i && i.userAgent ? i.userAgent : ""),
                                    u = i && i.userAgentData ? i.userAgentData : a,
                                    p = n ? function(e, t) {
                                        var n = {};
                                        for (var i in e) t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                                        return n
                                    }(Y, n) : Y,
                                    f = i && i.userAgent == d;
                                return this.getBrowser = function() {
                                    var e, t = {};
                                    return t.name = a, t.version = a, V.call(t, d, p.browser), t.major = r(e = t.version) === h ? e.replace(/[^\d\.]/g, "").split(".")[0] : a, f && i && i.brave && r(i.brave.isBrave) == o && (t.name = "Brave"), t
                                }, this.getCPU = function() {
                                    var e = {};
                                    return e.architecture = a, V.call(e, d, p.cpu), e
                                }, this.getDevice = function() {
                                    var e = {};
                                    return e.vendor = a, e.model = a, e.type = a, V.call(e, d, p.device), f && !e.type && u && u.mobile && (e.type = g), f && "Macintosh" == e.model && i && r(i.standalone) !== c && i.maxTouchPoints && i.maxTouchPoints > 2 && (e.model = "iPad", e.type = w), e
                                }, this.getEngine = function() {
                                    var e = {};
                                    return e.name = a, e.version = a, V.call(e, d, p.engine), e
                                }, this.getOS = function() {
                                    var e = {};
                                    return e.name = a, e.version = a, V.call(e, d, p.os), f && !e.name && u && "Unknown" != u.platform && (e.name = u.platform.replace(/chrome os/i, j).replace(/macos/i, U)), e
                                }, this.getResult = function() {
                                    return {
                                        ua: this.getUA(),
                                        browser: this.getBrowser(),
                                        engine: this.getEngine(),
                                        os: this.getOS(),
                                        device: this.getDevice(),
                                        cpu: this.getCPU()
                                    }
                                }, this.getUA = function() {
                                    return d
                                }, this.setUA = function(e) {
                                    return d = r(e) === h && e.length > 350 ? q(e, 350) : e, this
                                }, this.setUA(d), this
                            };
                        K.VERSION = "1.0.35", K.BROWSER = $([u, m, "major"]), K.CPU = $([v]), K.DEVICE = $([d, f, p, y, g, b, w, P, E]), K.ENGINE = K.OS = $([u, m]), r(t) !== c ? (r(e) !== c && e.exports && (t = e.exports = K), t.UAParser = K) : r(n.amdD) === o && n.amdO ? (i = function() {
                            return K
                        }.call(t, n, t, e)) === a || (e.exports = i) : r(s) !== c && (s.UAParser = K);
                        var J = r(s) !== c && (s.jQuery || s.Zepto);
                        if (J && !J.ua) {
                            var Z = new K;
                            J.ua = Z.getResult(), J.ua.get = function() {
                                return Z.getUA()
                            }, J.ua.set = function(e) {
                                Z.setUA(e);
                                var t = Z.getResult();
                                for (var n in t) J.ua[n] = t[n]
                            }
                        }
                    }("object" === ("undefined" == typeof window ? "undefined" : r(window)) ? window : this)
            },
            8205: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var i = n(2616),
                    r = n.n(i)()((function(e) {
                        return e[1]
                    }));
                r.push([e.id, ".gs-global-loader{position:fixed;z-index:99999;top:8px;right:8px;width:48px;height:48px}@media only screen and (min-width: 1024px){.gs-global-loader{top:inherit;right:16px;bottom:16px}}.gs-loader{position:relative;width:40px;height:40px;border-radius:50%;display:flex}.gs-loader__outter{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-left-color:transparent;width:100%;height:100%;border-radius:50%;-webkit-animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}.gs-loader__inner{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-radius:50%;width:20px;height:20px;left:calc(50% - 10px);top:calc(50% - 10px);border-top-color:transparent;-webkit-animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}@keyframes loader-outter{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-inner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}.gs-loader-hidden{display:none}", ""]);
                const s = r
            },
            4610: (e, t, n) => {
                "use strict";
                n.d(t, {
                    _: () => v
                });
                var i = n(9312),
                    r = n(824),
                    s = n(1654),
                    a = n(6803);

                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function c(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }

                function l(e, t) {
                    return !t || "object" !== o(t) && "function" != typeof t ? h(e) : t
                }

                function h(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function d(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return (d = function(e) {
                        if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                        var n;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, i)
                        }

                        function i() {
                            return u(e, arguments, m(this).constructor)
                        }
                        return i.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: i,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), f(i, e)
                    })(e)
                }

                function u(e, t, n) {
                    return (u = p() ? Reflect.construct : function(e, t, n) {
                        var i = [null];
                        i.push.apply(i, t);
                        var r = new(Function.bind.apply(e, i));
                        return n && f(r, n.prototype), r
                    }).apply(null, arguments)
                }

                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }

                function f(e, t) {
                    return (f = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function m(e) {
                    return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var v = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && f(e, t)
                    }(v, e);
                    var t, n, o, d, u = (t = v, n = p(), function() {
                        var e, i = m(t);
                        if (n) {
                            var r = m(this).constructor;
                            e = Reflect.construct(i, arguments, r)
                        } else e = i.apply(this, arguments);
                        return l(this, e)
                    });

                    function v(e, t, n, r, a, o, c) {
                        var d, p, f, m, y;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, v), y = u.call(this, e);
                        var g, w = Array.isArray(t) ? 0 !== t.length ? t : void 0 : t ? [t] : void 0,
                            b = n;
                        !b && w && (b = null === (g = w[0].loc) || void 0 === g ? void 0 : g.source);
                        var P, E = r;
                        !E && w && (E = w.reduce((function(e, t) {
                            return t.loc && e.push(t.loc.start), e
                        }), [])), E && 0 === E.length && (E = void 0), r && n ? P = r.map((function(e) {
                            return (0, s.k)(n, e)
                        })) : w && (P = w.reduce((function(e, t) {
                            return t.loc && e.push((0, s.k)(t.loc.source, t.loc.start)), e
                        }), []));
                        var T = c;
                        if (null == T && null != o) {
                            var S = o.extensions;
                            (0, i.Z)(S) && (T = S)
                        }
                        return Object.defineProperties(h(y), {
                            name: {
                                value: "GraphQLError"
                            },
                            message: {
                                value: e,
                                enumerable: !0,
                                writable: !0
                            },
                            locations: {
                                value: null !== (d = P) && void 0 !== d ? d : void 0,
                                enumerable: null != P
                            },
                            path: {
                                value: null != a ? a : void 0,
                                enumerable: null != a
                            },
                            nodes: {
                                value: null != w ? w : void 0
                            },
                            source: {
                                value: null !== (p = b) && void 0 !== p ? p : void 0
                            },
                            positions: {
                                value: null !== (f = E) && void 0 !== f ? f : void 0
                            },
                            originalError: {
                                value: o
                            },
                            extensions: {
                                value: null !== (m = T) && void 0 !== m ? m : void 0,
                                enumerable: null != T
                            }
                        }), null != o && o.stack ? (Object.defineProperty(h(y), "stack", {
                            value: o.stack,
                            writable: !0,
                            configurable: !0
                        }), l(y)) : (Error.captureStackTrace ? Error.captureStackTrace(h(y), v) : Object.defineProperty(h(y), "stack", {
                            value: Error().stack,
                            writable: !0,
                            configurable: !0
                        }), y)
                    }
                    return o = v, (d = [{
                        key: "toString",
                        value: function() {
                            return function(e) {
                                var t = e.message;
                                if (e.nodes)
                                    for (var n = 0, i = e.nodes; n < i.length; n++) {
                                        var r = i[n];
                                        r.loc && (t += "\n\n" + (0, a.Q)(r.loc))
                                    } else if (e.source && e.locations)
                                        for (var s = 0, o = e.locations; s < o.length; s++) {
                                            var c = o[s];
                                            t += "\n\n" + (0, a.z)(e.source, c)
                                        }
                                return t
                            }(this)
                        }
                    }, {
                        key: r.YF,
                        get: function() {
                            return "Object"
                        }
                    }]) && c(o.prototype, d), v
                }(d(Error))
            },
            7303: (e, t, n) => {
                "use strict";
                n.d(t, {
                    h: () => r
                });
                var i = n(4610);

                function r(e, t, n) {
                    return new i._("Syntax Error: ".concat(n), void 0, e, [t])
                }
            },
            1087: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var i = n(3077),
                    r = n(7986);

                function s(e) {
                    var t = e.prototype.toJSON;
                    "function" == typeof t || (0, i.Z)(0), e.prototype.inspect = t, r.Z && (e.prototype[r.Z] = t)
                }
            },
            3767: (e, t, n) => {
                "use strict";

                function i(e, t) {
                    if (!Boolean(e)) throw new Error(t)
                }
                n.d(t, {
                    Z: () => i
                })
            },
            6589: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var i = n(7986);

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function s(e) {
                    return a(e, [])
                }

                function a(e, t) {
                    switch (r(e)) {
                        case "string":
                            return JSON.stringify(e);
                        case "function":
                            return e.name ? "[function ".concat(e.name, "]") : "[function]";
                        case "object":
                            return null === e ? "null" : function(e, t) {
                                if (-1 !== t.indexOf(e)) return "[Circular]";
                                var n = [].concat(t, [e]),
                                    r = function(e) {
                                        var t = e[String(i.Z)];
                                        return "function" == typeof t ? t : "function" == typeof e.inspect ? e.inspect : void 0
                                    }(e);
                                if (void 0 !== r) {
                                    var s = r.call(e);
                                    if (s !== e) return "string" == typeof s ? s : a(s, n)
                                } else if (Array.isArray(e)) return function(e, t) {
                                    if (0 === e.length) return "[]";
                                    if (t.length > 2) return "[Array]";
                                    for (var n = Math.min(10, e.length), i = e.length - n, r = [], s = 0; s < n; ++s) r.push(a(e[s], t));
                                    return 1 === i ? r.push("... 1 more item") : i > 1 && r.push("... ".concat(i, " more items")), "[" + r.join(", ") + "]"
                                }(e, n);
                                return function(e, t) {
                                    var n = Object.keys(e);
                                    return 0 === n.length ? "{}" : t.length > 2 ? "[" + function(e) {
                                        var t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                                        if ("Object" === t && "function" == typeof e.constructor) {
                                            var n = e.constructor.name;
                                            if ("string" == typeof n && "" !== n) return n
                                        }
                                        return t
                                    }(e) + "]" : "{ " + n.map((function(n) {
                                        return n + ": " + a(e[n], t)
                                    })).join(", ") + " }"
                                }(e, n)
                            }(e, t);
                        default:
                            return String(e)
                    }
                }
            },
            9495: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                const i = function(e, t) {
                    return e instanceof t
                }
            },
            3077: (e, t, n) => {
                "use strict";

                function i(e, t) {
                    if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
                }
                n.d(t, {
                    Z: () => i
                })
            },
            9312: (e, t, n) => {
                "use strict";

                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function r(e) {
                    return "object" == i(e) && null !== e
                }
                n.d(t, {
                    Z: () => r
                })
            },
            7986: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                const i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0
            },
            2387: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Ye: () => r,
                    WU: () => s
                });
                var i = n(1087),
                    r = function() {
                        function e(e, t, n) {
                            this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
                        }
                        return e.prototype.toJSON = function() {
                            return {
                                start: this.start,
                                end: this.end
                            }
                        }, e
                    }();
                (0, i.Z)(r);
                var s = function() {
                    function e(e, t, n, i, r, s, a) {
                        this.kind = e, this.start = t, this.end = n, this.line = i, this.column = r, this.value = a, this.prev = s, this.next = null
                    }
                    return e.prototype.toJSON = function() {
                        return {
                            kind: this.kind,
                            value: this.value,
                            line: this.line,
                            column: this.column
                        }
                    }, e
                }();
                (0, i.Z)(s)
            },
            7420: (e, t, n) => {
                "use strict";

                function i(e) {
                    var t = e.split(/\r\n|[\n\r]/g),
                        n = function(e) {
                            for (var t, n = !0, i = !0, r = 0, s = null, a = 0; a < e.length; ++a) switch (e.charCodeAt(a)) {
                                case 13:
                                    10 === e.charCodeAt(a + 1) && ++a;
                                case 10:
                                    n = !1, i = !0, r = 0;
                                    break;
                                case 9:
                                case 32:
                                    ++r;
                                    break;
                                default:
                                    i && !n && (null === s || r < s) && (s = r), i = !1
                            }
                            return null !== (t = s) && void 0 !== t ? t : 0
                        }(e);
                    if (0 !== n)
                        for (var i = 1; i < t.length; i++) t[i] = t[i].slice(n);
                    for (var s = 0; s < t.length && r(t[s]);) ++s;
                    for (var a = t.length; a > s && r(t[a - 1]);) --a;
                    return t.slice(s, a).join("\n")
                }

                function r(e) {
                    for (var t = 0; t < e.length; ++t)
                        if (" " !== e[t] && "\t" !== e[t]) return !1;
                    return !0
                }
                n.d(t, {
                    W7: () => i
                })
            },
            4643: (e, t, n) => {
                "use strict";
                n.d(t, {
                    B: () => i
                });
                var i = Object.freeze({
                    QUERY: "QUERY",
                    MUTATION: "MUTATION",
                    SUBSCRIPTION: "SUBSCRIPTION",
                    FIELD: "FIELD",
                    FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
                    FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
                    INLINE_FRAGMENT: "INLINE_FRAGMENT",
                    VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
                    SCHEMA: "SCHEMA",
                    SCALAR: "SCALAR",
                    OBJECT: "OBJECT",
                    FIELD_DEFINITION: "FIELD_DEFINITION",
                    ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
                    INTERFACE: "INTERFACE",
                    UNION: "UNION",
                    ENUM: "ENUM",
                    ENUM_VALUE: "ENUM_VALUE",
                    INPUT_OBJECT: "INPUT_OBJECT",
                    INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
                })
            },
            6450: (e, t, n) => {
                "use strict";
                n.d(t, {
                    h: () => i
                });
                var i = Object.freeze({
                    NAME: "Name",
                    DOCUMENT: "Document",
                    OPERATION_DEFINITION: "OperationDefinition",
                    VARIABLE_DEFINITION: "VariableDefinition",
                    SELECTION_SET: "SelectionSet",
                    FIELD: "Field",
                    ARGUMENT: "Argument",
                    FRAGMENT_SPREAD: "FragmentSpread",
                    INLINE_FRAGMENT: "InlineFragment",
                    FRAGMENT_DEFINITION: "FragmentDefinition",
                    VARIABLE: "Variable",
                    INT: "IntValue",
                    FLOAT: "FloatValue",
                    STRING: "StringValue",
                    BOOLEAN: "BooleanValue",
                    NULL: "NullValue",
                    ENUM: "EnumValue",
                    LIST: "ListValue",
                    OBJECT: "ObjectValue",
                    OBJECT_FIELD: "ObjectField",
                    DIRECTIVE: "Directive",
                    NAMED_TYPE: "NamedType",
                    LIST_TYPE: "ListType",
                    NON_NULL_TYPE: "NonNullType",
                    SCHEMA_DEFINITION: "SchemaDefinition",
                    OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
                    SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
                    OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
                    FIELD_DEFINITION: "FieldDefinition",
                    INPUT_VALUE_DEFINITION: "InputValueDefinition",
                    INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
                    UNION_TYPE_DEFINITION: "UnionTypeDefinition",
                    ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
                    ENUM_VALUE_DEFINITION: "EnumValueDefinition",
                    INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
                    DIRECTIVE_DEFINITION: "DirectiveDefinition",
                    SCHEMA_EXTENSION: "SchemaExtension",
                    SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
                    OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
                    INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
                    UNION_TYPE_EXTENSION: "UnionTypeExtension",
                    ENUM_TYPE_EXTENSION: "EnumTypeExtension",
                    INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
                })
            },
            2496: (e, t, n) => {
                "use strict";
                n.d(t, {
                    h: () => o,
                    u: () => c
                });
                var i = n(7303),
                    r = n(2387),
                    s = n(7525),
                    a = n(7420),
                    o = function() {
                        function e(e) {
                            var t = new r.WU(s.T.SOF, 0, 0, 0, 0, null);
                            this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
                        }
                        var t = e.prototype;
                        return t.advance = function() {
                            return this.lastToken = this.token, this.token = this.lookahead()
                        }, t.lookahead = function() {
                            var e = this.token;
                            if (e.kind !== s.T.EOF)
                                do {
                                    var t;
                                    e = null !== (t = e.next) && void 0 !== t ? t : e.next = h(this, e)
                                } while (e.kind === s.T.COMMENT);
                            return e
                        }, e
                    }();

                function c(e) {
                    return e === s.T.BANG || e === s.T.DOLLAR || e === s.T.AMP || e === s.T.PAREN_L || e === s.T.PAREN_R || e === s.T.SPREAD || e === s.T.COLON || e === s.T.EQUALS || e === s.T.AT || e === s.T.BRACKET_L || e === s.T.BRACKET_R || e === s.T.BRACE_L || e === s.T.PIPE || e === s.T.BRACE_R
                }

                function l(e) {
                    return isNaN(e) ? s.T.EOF : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"')
                }

                function h(e, t) {
                    for (var n = e.source, a = n.body, o = a.length, c = t.end; c < o;) {
                        var l = a.charCodeAt(c),
                            h = e.line,
                            f = 1 + c - e.lineStart;
                        switch (l) {
                            case 65279:
                            case 9:
                            case 32:
                            case 44:
                                ++c;
                                continue;
                            case 10:
                                ++c, ++e.line, e.lineStart = c;
                                continue;
                            case 13:
                                10 === a.charCodeAt(c + 1) ? c += 2 : ++c, ++e.line, e.lineStart = c;
                                continue;
                            case 33:
                                return new r.WU(s.T.BANG, c, c + 1, h, f, t);
                            case 35:
                                return u(n, c, h, f, t);
                            case 36:
                                return new r.WU(s.T.DOLLAR, c, c + 1, h, f, t);
                            case 38:
                                return new r.WU(s.T.AMP, c, c + 1, h, f, t);
                            case 40:
                                return new r.WU(s.T.PAREN_L, c, c + 1, h, f, t);
                            case 41:
                                return new r.WU(s.T.PAREN_R, c, c + 1, h, f, t);
                            case 46:
                                if (46 === a.charCodeAt(c + 1) && 46 === a.charCodeAt(c + 2)) return new r.WU(s.T.SPREAD, c, c + 3, h, f, t);
                                break;
                            case 58:
                                return new r.WU(s.T.COLON, c, c + 1, h, f, t);
                            case 61:
                                return new r.WU(s.T.EQUALS, c, c + 1, h, f, t);
                            case 64:
                                return new r.WU(s.T.AT, c, c + 1, h, f, t);
                            case 91:
                                return new r.WU(s.T.BRACKET_L, c, c + 1, h, f, t);
                            case 93:
                                return new r.WU(s.T.BRACKET_R, c, c + 1, h, f, t);
                            case 123:
                                return new r.WU(s.T.BRACE_L, c, c + 1, h, f, t);
                            case 124:
                                return new r.WU(s.T.PIPE, c, c + 1, h, f, t);
                            case 125:
                                return new r.WU(s.T.BRACE_R, c, c + 1, h, f, t);
                            case 34:
                                return 34 === a.charCodeAt(c + 1) && 34 === a.charCodeAt(c + 2) ? v(n, c, h, f, t, e) : m(n, c, h, f, t);
                            case 45:
                            case 48:
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                return p(n, c, l, h, f, t);
                            case 65:
                            case 66:
                            case 67:
                            case 68:
                            case 69:
                            case 70:
                            case 71:
                            case 72:
                            case 73:
                            case 74:
                            case 75:
                            case 76:
                            case 77:
                            case 78:
                            case 79:
                            case 80:
                            case 81:
                            case 82:
                            case 83:
                            case 84:
                            case 85:
                            case 86:
                            case 87:
                            case 88:
                            case 89:
                            case 90:
                            case 95:
                            case 97:
                            case 98:
                            case 99:
                            case 100:
                            case 101:
                            case 102:
                            case 103:
                            case 104:
                            case 105:
                            case 106:
                            case 107:
                            case 108:
                            case 109:
                            case 110:
                            case 111:
                            case 112:
                            case 113:
                            case 114:
                            case 115:
                            case 116:
                            case 117:
                            case 118:
                            case 119:
                            case 120:
                            case 121:
                            case 122:
                                return g(n, c, h, f, t)
                        }
                        throw (0, i.h)(n, c, d(l))
                    }
                    var y = e.line,
                        w = 1 + c - e.lineStart;
                    return new r.WU(s.T.EOF, o, o, y, w, t)
                }

                function d(e) {
                    return e < 32 && 9 !== e && 10 !== e && 13 !== e ? "Cannot contain the invalid character ".concat(l(e), ".") : 39 === e ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : "Cannot parse the unexpected character ".concat(l(e), ".")
                }

                function u(e, t, n, i, a) {
                    var o, c = e.body,
                        l = t;
                    do {
                        o = c.charCodeAt(++l)
                    } while (!isNaN(o) && (o > 31 || 9 === o));
                    return new r.WU(s.T.COMMENT, t, l, n, i, a, c.slice(t + 1, l))
                }

                function p(e, t, n, a, o, c) {
                    var h = e.body,
                        d = n,
                        u = t,
                        p = !1;
                    if (45 === d && (d = h.charCodeAt(++u)), 48 === d) {
                        if ((d = h.charCodeAt(++u)) >= 48 && d <= 57) throw (0, i.h)(e, u, "Invalid number, unexpected digit after 0: ".concat(l(d), "."))
                    } else u = f(e, u, d), d = h.charCodeAt(u);
                    if (46 === d && (p = !0, d = h.charCodeAt(++u), u = f(e, u, d), d = h.charCodeAt(u)), 69 !== d && 101 !== d || (p = !0, 43 !== (d = h.charCodeAt(++u)) && 45 !== d || (d = h.charCodeAt(++u)), u = f(e, u, d), d = h.charCodeAt(u)), 46 === d || function(e) {
                            return 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122
                        }(d)) throw (0, i.h)(e, u, "Invalid number, expected digit but got: ".concat(l(d), "."));
                    return new r.WU(p ? s.T.FLOAT : s.T.INT, t, u, a, o, c, h.slice(t, u))
                }

                function f(e, t, n) {
                    var r = e.body,
                        s = t,
                        a = n;
                    if (a >= 48 && a <= 57) {
                        do {
                            a = r.charCodeAt(++s)
                        } while (a >= 48 && a <= 57);
                        return s
                    }
                    throw (0, i.h)(e, s, "Invalid number, expected digit but got: ".concat(l(a), "."))
                }

                function m(e, t, n, a, o) {
                    for (var c, h, d, u, p = e.body, f = t + 1, m = f, v = 0, g = ""; f < p.length && !isNaN(v = p.charCodeAt(f)) && 10 !== v && 13 !== v;) {
                        if (34 === v) return g += p.slice(m, f), new r.WU(s.T.STRING, t, f + 1, n, a, o, g);
                        if (v < 32 && 9 !== v) throw (0, i.h)(e, f, "Invalid character within String: ".concat(l(v), "."));
                        if (++f, 92 === v) {
                            switch (g += p.slice(m, f - 1), v = p.charCodeAt(f)) {
                                case 34:
                                    g += '"';
                                    break;
                                case 47:
                                    g += "/";
                                    break;
                                case 92:
                                    g += "\\";
                                    break;
                                case 98:
                                    g += "\b";
                                    break;
                                case 102:
                                    g += "\f";
                                    break;
                                case 110:
                                    g += "\n";
                                    break;
                                case 114:
                                    g += "\r";
                                    break;
                                case 116:
                                    g += "\t";
                                    break;
                                case 117:
                                    var w = (c = p.charCodeAt(f + 1), h = p.charCodeAt(f + 2), d = p.charCodeAt(f + 3), u = p.charCodeAt(f + 4), y(c) << 12 | y(h) << 8 | y(d) << 4 | y(u));
                                    if (w < 0) {
                                        var b = p.slice(f + 1, f + 5);
                                        throw (0, i.h)(e, f, "Invalid character escape sequence: \\u".concat(b, "."))
                                    }
                                    g += String.fromCharCode(w), f += 4;
                                    break;
                                default:
                                    throw (0, i.h)(e, f, "Invalid character escape sequence: \\".concat(String.fromCharCode(v), "."))
                            }
                            m = ++f
                        }
                    }
                    throw (0, i.h)(e, f, "Unterminated string.")
                }

                function v(e, t, n, o, c, h) {
                    for (var d = e.body, u = t + 3, p = u, f = 0, m = ""; u < d.length && !isNaN(f = d.charCodeAt(u));) {
                        if (34 === f && 34 === d.charCodeAt(u + 1) && 34 === d.charCodeAt(u + 2)) return m += d.slice(p, u), new r.WU(s.T.BLOCK_STRING, t, u + 3, n, o, c, (0, a.W7)(m));
                        if (f < 32 && 9 !== f && 10 !== f && 13 !== f) throw (0, i.h)(e, u, "Invalid character within String: ".concat(l(f), "."));
                        10 === f ? (++u, ++h.line, h.lineStart = u) : 13 === f ? (10 === d.charCodeAt(u + 1) ? u += 2 : ++u, ++h.line, h.lineStart = u) : 92 === f && 34 === d.charCodeAt(u + 1) && 34 === d.charCodeAt(u + 2) && 34 === d.charCodeAt(u + 3) ? (m += d.slice(p, u) + '"""', p = u += 4) : ++u
                    }
                    throw (0, i.h)(e, u, "Unterminated string.")
                }

                function y(e) {
                    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
                }

                function g(e, t, n, i, a) {
                    for (var o = e.body, c = o.length, l = t + 1, h = 0; l !== c && !isNaN(h = o.charCodeAt(l)) && (95 === h || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122);) ++l;
                    return new r.WU(s.T.NAME, t, l, n, i, a, o.slice(t, l))
                }
            },
            1654: (e, t, n) => {
                "use strict";

                function i(e, t) {
                    for (var n, i = /\r\n|[\n\r]/g, r = 1, s = t + 1;
                        (n = i.exec(e.body)) && n.index < t;) r += 1, s = t + 1 - (n.index + n[0].length);
                    return {
                        line: r,
                        column: s
                    }
                }
                n.d(t, {
                    k: () => i
                })
            },
            9691: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Qc: () => h
                });
                var i = n(7303),
                    r = n(6450),
                    s = n(2387),
                    a = n(7525),
                    o = n(1112),
                    c = n(4643),
                    l = n(2496);

                function h(e, t) {
                    return new d(e, t).parseDocument()
                }
                var d = function() {
                    function e(e, t) {
                        var n = (0, o.T)(e) ? e : new o.H(e);
                        this._lexer = new l.h(n), this._options = t
                    }
                    var t = e.prototype;
                    return t.parseName = function() {
                        var e = this.expectToken(a.T.NAME);
                        return {
                            kind: r.h.NAME,
                            value: e.value,
                            loc: this.loc(e)
                        }
                    }, t.parseDocument = function() {
                        var e = this._lexer.token;
                        return {
                            kind: r.h.DOCUMENT,
                            definitions: this.many(a.T.SOF, this.parseDefinition, a.T.EOF),
                            loc: this.loc(e)
                        }
                    }, t.parseDefinition = function() {
                        if (this.peek(a.T.NAME)) switch (this._lexer.token.value) {
                            case "query":
                            case "mutation":
                            case "subscription":
                                return this.parseOperationDefinition();
                            case "fragment":
                                return this.parseFragmentDefinition();
                            case "schema":
                            case "scalar":
                            case "type":
                            case "interface":
                            case "union":
                            case "enum":
                            case "input":
                            case "directive":
                                return this.parseTypeSystemDefinition();
                            case "extend":
                                return this.parseTypeSystemExtension()
                        } else {
                            if (this.peek(a.T.BRACE_L)) return this.parseOperationDefinition();
                            if (this.peekDescription()) return this.parseTypeSystemDefinition()
                        }
                        throw this.unexpected()
                    }, t.parseOperationDefinition = function() {
                        var e = this._lexer.token;
                        if (this.peek(a.T.BRACE_L)) return {
                            kind: r.h.OPERATION_DEFINITION,
                            operation: "query",
                            name: void 0,
                            variableDefinitions: [],
                            directives: [],
                            selectionSet: this.parseSelectionSet(),
                            loc: this.loc(e)
                        };
                        var t, n = this.parseOperationType();
                        return this.peek(a.T.NAME) && (t = this.parseName()), {
                            kind: r.h.OPERATION_DEFINITION,
                            operation: n,
                            name: t,
                            variableDefinitions: this.parseVariableDefinitions(),
                            directives: this.parseDirectives(!1),
                            selectionSet: this.parseSelectionSet(),
                            loc: this.loc(e)
                        }
                    }, t.parseOperationType = function() {
                        var e = this.expectToken(a.T.NAME);
                        switch (e.value) {
                            case "query":
                                return "query";
                            case "mutation":
                                return "mutation";
                            case "subscription":
                                return "subscription"
                        }
                        throw this.unexpected(e)
                    }, t.parseVariableDefinitions = function() {
                        return this.optionalMany(a.T.PAREN_L, this.parseVariableDefinition, a.T.PAREN_R)
                    }, t.parseVariableDefinition = function() {
                        var e = this._lexer.token;
                        return {
                            kind: r.h.VARIABLE_DEFINITION,
                            variable: this.parseVariable(),
                            type: (this.expectToken(a.T.COLON), this.parseTypeReference()),
                            defaultValue: this.expectOptionalToken(a.T.EQUALS) ? this.parseValueLiteral(!0) : void 0,
                            directives: this.parseDirectives(!0),
                            loc: this.loc(e)
                        }
                    }, t.parseVariable = function() {
                        var e = this._lexer.token;
                        return this.expectToken(a.T.DOLLAR), {
                            kind: r.h.VARIABLE,
                            name: this.parseName(),
                            loc: this.loc(e)
                        }
                    }, t.parseSelectionSet = function() {
                        var e = this._lexer.token;
                        return {
                            kind: r.h.SELECTION_SET,
                            selections: this.many(a.T.BRACE_L, this.parseSelection, a.T.BRACE_R),
                            loc: this.loc(e)
                        }
                    }, t.parseSelection = function() {
                        return this.peek(a.T.SPREAD) ? this.parseFragment() : this.parseField()
                    }, t.parseField = function() {
                        var e, t, n = this._lexer.token,
                            i = this.parseName();
                        return this.expectOptionalToken(a.T.COLON) ? (e = i, t = this.parseName()) : t = i, {
                            kind: r.h.FIELD,
                            alias: e,
                            name: t,
                            arguments: this.parseArguments(!1),
                            directives: this.parseDirectives(!1),
                            selectionSet: this.peek(a.T.BRACE_L) ? this.parseSelectionSet() : void 0,
                            loc: this.loc(n)
                        }
                    }, t.parseArguments = function(e) {
                        var t = e ? this.parseConstArgument : this.parseArgument;
                        return this.optionalMany(a.T.PAREN_L, t, a.T.PAREN_R)
                    }, t.parseArgument = function() {
                        var e = this._lexer.token,
                            t = this.parseName();
                        return this.expectToken(a.T.COLON), {
                            kind: r.h.ARGUMENT,
                            name: t,
                            value: this.parseValueLiteral(!1),
                            loc: this.loc(e)
                        }
                    }, t.parseConstArgument = function() {
                        var e = this._lexer.token;
                        return {
                            kind: r.h.ARGUMENT,
                            name: this.parseName(),
                            value: (this.expectToken(a.T.COLON), this.parseValueLiteral(!0)),
                            loc: this.loc(e)
                        }
                    }, t.parseFragment = function() {
                        var e = this._lexer.token;
                        this.expectToken(a.T.SPREAD);
                        var t = this.expectOptionalKeyword("on");
                        return !t && this.peek(a.T.NAME) ? {
                            kind: r.h.FRAGMENT_SPREAD,
                            name: this.parseFragmentName(),
                            directives: this.parseDirectives(!1),
                            loc: this.loc(e)
                        } : {
                            kind: r.h.INLINE_FRAGMENT,
                            typeCondition: t ? this.parseNamedType() : void 0,
                            directives: this.parseDirectives(!1),
                            selectionSet: this.parseSelectionSet(),
                            loc: this.loc(e)
                        }
                    }, t.parseFragmentDefinition = function() {
                        var e, t = this._lexer.token;
                        return this.expectKeyword("fragment"), !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.experimentalFragmentVariables) ? {
                            kind: r.h.FRAGMENT_DEFINITION,
                            name: this.parseFragmentName(),
                            variableDefinitions: this.parseVariableDefinitions(),
                            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
                            directives: this.parseDirectives(!1),
                            selectionSet: this.parseSelectionSet(),
                            loc: this.loc(t)
                        } : {
                            kind: r.h.FRAGMENT_DEFINITION,
                            name: this.parseFragmentName(),
                            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
                            directives: this.parseDirectives(!1),
                            selectionSet: this.parseSelectionSet(),
                            loc: this.loc(t)
                        }
                    }, t.parseFragmentName = function() {
                        if ("on" === this._lexer.token.value) throw this.unexpected();
                        return this.parseName()
                    }, t.parseValueLiteral = function(e) {
                        var t = this._lexer.token;
                        switch (t.kind) {
                            case a.T.BRACKET_L:
                                return this.parseList(e);
                            case a.T.BRACE_L:
                                return this.parseObject(e);
                            case a.T.INT:
                                return this._lexer.advance(), {
                                    kind: r.h.INT,
                                    value: t.value,
                                    loc: this.loc(t)
                                };
                            case a.T.FLOAT:
                                return this._lexer.advance(), {
                                    kind: r.h.FLOAT,
                                    value: t.value,
                                    loc: this.loc(t)
                                };
                            case a.T.STRING:
                            case a.T.BLOCK_STRING:
                                return this.parseStringLiteral();
                            case a.T.NAME:
                                switch (this._lexer.advance(), t.value) {
                                    case "true":
                                        return {
                                            kind: r.h.BOOLEAN, value: !0, loc: this.loc(t)
                                        };
                                    case "false":
                                        return {
                                            kind: r.h.BOOLEAN, value: !1, loc: this.loc(t)
                                        };
                                    case "null":
                                        return {
                                            kind: r.h.NULL, loc: this.loc(t)
                                        };
                                    default:
                                        return {
                                            kind: r.h.ENUM, value: t.value, loc: this.loc(t)
                                        }
                                }
                            case a.T.DOLLAR:
                                if (!e) return this.parseVariable()
                        }
                        throw this.unexpected()
                    }, t.parseStringLiteral = function() {
                        var e = this._lexer.token;
                        return this._lexer.advance(), {
                            kind: r.h.STRING,
                            value: e.value,
                            block: e.kind === a.T.BLOCK_STRING,
                            loc: this.loc(e)
                        }
                    }, t.parseList = function(e) {
                        var t = this,
                            n = this._lexer.token;
                        return {
                            kind: r.h.LIST,
                            values: this.any(a.T.BRACKET_L, (function() {
                                return t.parseValueLiteral(e)
                            }), a.T.BRACKET_R),
                            loc: this.loc(n)
                        }
                    }, t.parseObject = function(e) {
                        var t = this,
                            n = this._lexer.token;
                        return {
                            kind: r.h.OBJECT,
                            fields: this.any(a.T.BRACE_L, (function() {
                                return t.parseObjectField(e)
                            }), a.T.BRACE_R),
                            loc: this.loc(n)
                        }
                    }, t.parseObjectField = function(e) {
                        var t = this._lexer.token,
                            n = this.parseName();
                        return this.expectToken(a.T.COLON), {
                            kind: r.h.OBJECT_FIELD,
                            name: n,
                            value: this.parseValueLiteral(e),
                            loc: this.loc(t)
                        }
                    }, t.parseDirectives = function(e) {
                        for (var t = []; this.peek(a.T.AT);) t.push(this.parseDirective(e));
                        return t
                    }, t.parseDirective = function(e) {
                        var t = this._lexer.token;
                        return this.expectToken(a.T.AT), {
                            kind: r.h.DIRECTIVE,
                            name: this.parseName(),
                            arguments: this.parseArguments(e),
                            loc: this.loc(t)
                        }
                    }, t.parseTypeReference = function() {
                        var e, t = this._lexer.token;
                        return this.expectOptionalToken(a.T.BRACKET_L) ? (e = this.parseTypeReference(), this.expectToken(a.T.BRACKET_R), e = {
                            kind: r.h.LIST_TYPE,
                            type: e,
                            loc: this.loc(t)
                        }) : e = this.parseNamedType(), this.expectOptionalToken(a.T.BANG) ? {
                            kind: r.h.NON_NULL_TYPE,
                            type: e,
                            loc: this.loc(t)
                        } : e
                    }, t.parseNamedType = function() {
                        var e = this._lexer.token;
                        return {
                            kind: r.h.NAMED_TYPE,
                            name: this.parseName(),
                            loc: this.loc(e)
                        }
                    }, t.parseTypeSystemDefinition = function() {
                        var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
                        if (e.kind === a.T.NAME) switch (e.value) {
                            case "schema":
                                return this.parseSchemaDefinition();
                            case "scalar":
                                return this.parseScalarTypeDefinition();
                            case "type":
                                return this.parseObjectTypeDefinition();
                            case "interface":
                                return this.parseInterfaceTypeDefinition();
                            case "union":
                                return this.parseUnionTypeDefinition();
                            case "enum":
                                return this.parseEnumTypeDefinition();
                            case "input":
                                return this.parseInputObjectTypeDefinition();
                            case "directive":
                                return this.parseDirectiveDefinition()
                        }
                        throw this.unexpected(e)
                    }, t.peekDescription = function() {
                        return this.peek(a.T.STRING) || this.peek(a.T.BLOCK_STRING)
                    }, t.parseDescription = function() {
                        if (this.peekDescription()) return this.parseStringLiteral()
                    }, t.parseSchemaDefinition = function() {
                        var e = this._lexer.token,
                            t = this.parseDescription();
                        this.expectKeyword("schema");
                        var n = this.parseDirectives(!0),
                            i = this.many(a.T.BRACE_L, this.parseOperationTypeDefinition, a.T.BRACE_R);
                        return {
                            kind: r.h.SCHEMA_DEFINITION,
                            description: t,
                            directives: n,
                            operationTypes: i,
                            loc: this.loc(e)
                        }
                    }, t.parseOperationTypeDefinition = function() {
                        var e = this._lexer.token,
                            t = this.parseOperationType();
                        this.expectToken(a.T.COLON);
                        var n = this.parseNamedType();
                        return {
                            kind: r.h.OPERATION_TYPE_DEFINITION,
                            operation: t,
                            type: n,
                            loc: this.loc(e)
                        }
                    }, t.parseScalarTypeDefinition = function() {
                        var e = this._lexer.token,
                            t = this.parseDescription();
                        this.expectKeyword("scalar");
                        var n = this.parseName(),
                            i = this.parseDirectives(!0);
                        return {
                            kind: r.h.SCALAR_TYPE_DEFINITION,
                            description: t,
                            name: n,
                            directives: i,
                            loc: this.loc(e)
                        }
                    }, t.parseObjectTypeDefinition = function() {
                        var e = this._lexer.token,
                            t = this.parseDescription();
                        this.expectKeyword("type");
                        var n = this.parseName(),
                            i = this.parseImplementsInterfaces(),
                            s = this.parseDirectives(!0),
                            a = this.parseFieldsDefinition();
                        return {
                            kind: r.h.OBJECT_TYPE_DEFINITION,
                            description: t,
                            name: n,
                            interfaces: i,
                            directives: s,
                            fields: a,
                            loc: this.loc(e)
                        }
                    }, t.parseImplementsInterfaces = function() {
                        var e;
                        if (!this.expectOptionalKeyword("implements")) return [];
                        if (!0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLImplementsInterfaces)) {
                            var t = [];
                            this.expectOptionalToken(a.T.AMP);
                            do {
                                t.push(this.parseNamedType())
                            } while (this.expectOptionalToken(a.T.AMP) || this.peek(a.T.NAME));
                            return t
                        }
                        return this.delimitedMany(a.T.AMP, this.parseNamedType)
                    }, t.parseFieldsDefinition = function() {
                        var e;
                        return !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLEmptyFields) && this.peek(a.T.BRACE_L) && this._lexer.lookahead().kind === a.T.BRACE_R ? (this._lexer.advance(), this._lexer.advance(), []) : this.optionalMany(a.T.BRACE_L, this.parseFieldDefinition, a.T.BRACE_R)
                    }, t.parseFieldDefinition = function() {
                        var e = this._lexer.token,
                            t = this.parseDescription(),
                            n = this.parseName(),
                            i = this.parseArgumentDefs();
                        this.expectToken(a.T.COLON);
                        var s = this.parseTypeReference(),
                            o = this.parseDirectives(!0);
                        return {
                            kind: r.h.FIELD_DEFINITION,
                            description: t,
                            name: n,
                            arguments: i,
                            type: s,
                            directives: o,
                            loc: this.loc(e)
                        }
                    }, t.parseArgumentDefs = function() {
                        return this.optionalMany(a.T.PAREN_L, this.parseInputValueDef, a.T.PAREN_R)
                    }, t.parseInputValueDef = function() {
                        var e = this._lexer.token,
                            t = this.parseDescription(),
                            n = this.parseName();
                        this.expectToken(a.T.COLON);
                        var i, s = this.parseTypeReference();
                        this.expectOptionalToken(a.T.EQUALS) && (i = this.parseValueLiteral(!0));
                        var o = this.parseDirectives(!0);
                        return {
                            kind: r.h.INPUT_VALUE_DEFINITION,
                            description: t,
                            name: n,
                            type: s,
                            defaultValue: i,
                            directives: o,
                            loc: this.loc(e)
                        }
                    }, t.parseInterfaceTypeDefinition = function() {
                        var e = this._lexer.token,
                            t = this.parseDescription();
                        this.expectKeyword("interface");
                        var n = this.parseName(),
                            i = this.parseImplementsInterfaces(),
                            s = this.parseDirectives(!0),
                            a = this.parseFieldsDefinition();
                        return {
                            kind: r.h.INTERFACE_TYPE_DEFINITION,
                            description: t,
                            name: n,
                            interfaces: i,
                            directives: s,
                            fields: a,
                            loc: this.loc(e)
                        }
                    }, t.parseUnionTypeDefinition = function() {
                        var e = this._lexer.token,
                            t = this.parseDescription();
                        this.expectKeyword("union");
                        var n = this.parseName(),
                            i = this.parseDirectives(!0),
                            s = this.parseUnionMemberTypes();
                        return {
                            kind: r.h.UNION_TYPE_DEFINITION,
                            description: t,
                            name: n,
                            directives: i,
                            types: s,
                            loc: this.loc(e)
                        }
                    }, t.parseUnionMemberTypes = function() {
                        return this.expectOptionalToken(a.T.EQUALS) ? this.delimitedMany(a.T.PIPE, this.parseNamedType) : []
                    }, t.parseEnumTypeDefinition = function() {
                        var e = this._lexer.token,
                            t = this.parseDescription();
                        this.expectKeyword("enum");
                        var n = this.parseName(),
                            i = this.parseDirectives(!0),
                            s = this.parseEnumValuesDefinition();
                        return {
                            kind: r.h.ENUM_TYPE_DEFINITION,
                            description: t,
                            name: n,
                            directives: i,
                            values: s,
                            loc: this.loc(e)
                        }
                    }, t.parseEnumValuesDefinition = function() {
                        return this.optionalMany(a.T.BRACE_L, this.parseEnumValueDefinition, a.T.BRACE_R)
                    }, t.parseEnumValueDefinition = function() {
                        var e = this._lexer.token,
                            t = this.parseDescription(),
                            n = this.parseName(),
                            i = this.parseDirectives(!0);
                        return {
                            kind: r.h.ENUM_VALUE_DEFINITION,
                            description: t,
                            name: n,
                            directives: i,
                            loc: this.loc(e)
                        }
                    }, t.parseInputObjectTypeDefinition = function() {
                        var e = this._lexer.token,
                            t = this.parseDescription();
                        this.expectKeyword("input");
                        var n = this.parseName(),
                            i = this.parseDirectives(!0),
                            s = this.parseInputFieldsDefinition();
                        return {
                            kind: r.h.INPUT_OBJECT_TYPE_DEFINITION,
                            description: t,
                            name: n,
                            directives: i,
                            fields: s,
                            loc: this.loc(e)
                        }
                    }, t.parseInputFieldsDefinition = function() {
                        return this.optionalMany(a.T.BRACE_L, this.parseInputValueDef, a.T.BRACE_R)
                    }, t.parseTypeSystemExtension = function() {
                        var e = this._lexer.lookahead();
                        if (e.kind === a.T.NAME) switch (e.value) {
                            case "schema":
                                return this.parseSchemaExtension();
                            case "scalar":
                                return this.parseScalarTypeExtension();
                            case "type":
                                return this.parseObjectTypeExtension();
                            case "interface":
                                return this.parseInterfaceTypeExtension();
                            case "union":
                                return this.parseUnionTypeExtension();
                            case "enum":
                                return this.parseEnumTypeExtension();
                            case "input":
                                return this.parseInputObjectTypeExtension()
                        }
                        throw this.unexpected(e)
                    }, t.parseSchemaExtension = function() {
                        var e = this._lexer.token;
                        this.expectKeyword("extend"), this.expectKeyword("schema");
                        var t = this.parseDirectives(!0),
                            n = this.optionalMany(a.T.BRACE_L, this.parseOperationTypeDefinition, a.T.BRACE_R);
                        if (0 === t.length && 0 === n.length) throw this.unexpected();
                        return {
                            kind: r.h.SCHEMA_EXTENSION,
                            directives: t,
                            operationTypes: n,
                            loc: this.loc(e)
                        }
                    }, t.parseScalarTypeExtension = function() {
                        var e = this._lexer.token;
                        this.expectKeyword("extend"), this.expectKeyword("scalar");
                        var t = this.parseName(),
                            n = this.parseDirectives(!0);
                        if (0 === n.length) throw this.unexpected();
                        return {
                            kind: r.h.SCALAR_TYPE_EXTENSION,
                            name: t,
                            directives: n,
                            loc: this.loc(e)
                        }
                    }, t.parseObjectTypeExtension = function() {
                        var e = this._lexer.token;
                        this.expectKeyword("extend"), this.expectKeyword("type");
                        var t = this.parseName(),
                            n = this.parseImplementsInterfaces(),
                            i = this.parseDirectives(!0),
                            s = this.parseFieldsDefinition();
                        if (0 === n.length && 0 === i.length && 0 === s.length) throw this.unexpected();
                        return {
                            kind: r.h.OBJECT_TYPE_EXTENSION,
                            name: t,
                            interfaces: n,
                            directives: i,
                            fields: s,
                            loc: this.loc(e)
                        }
                    }, t.parseInterfaceTypeExtension = function() {
                        var e = this._lexer.token;
                        this.expectKeyword("extend"), this.expectKeyword("interface");
                        var t = this.parseName(),
                            n = this.parseImplementsInterfaces(),
                            i = this.parseDirectives(!0),
                            s = this.parseFieldsDefinition();
                        if (0 === n.length && 0 === i.length && 0 === s.length) throw this.unexpected();
                        return {
                            kind: r.h.INTERFACE_TYPE_EXTENSION,
                            name: t,
                            interfaces: n,
                            directives: i,
                            fields: s,
                            loc: this.loc(e)
                        }
                    }, t.parseUnionTypeExtension = function() {
                        var e = this._lexer.token;
                        this.expectKeyword("extend"), this.expectKeyword("union");
                        var t = this.parseName(),
                            n = this.parseDirectives(!0),
                            i = this.parseUnionMemberTypes();
                        if (0 === n.length && 0 === i.length) throw this.unexpected();
                        return {
                            kind: r.h.UNION_TYPE_EXTENSION,
                            name: t,
                            directives: n,
                            types: i,
                            loc: this.loc(e)
                        }
                    }, t.parseEnumTypeExtension = function() {
                        var e = this._lexer.token;
                        this.expectKeyword("extend"), this.expectKeyword("enum");
                        var t = this.parseName(),
                            n = this.parseDirectives(!0),
                            i = this.parseEnumValuesDefinition();
                        if (0 === n.length && 0 === i.length) throw this.unexpected();
                        return {
                            kind: r.h.ENUM_TYPE_EXTENSION,
                            name: t,
                            directives: n,
                            values: i,
                            loc: this.loc(e)
                        }
                    }, t.parseInputObjectTypeExtension = function() {
                        var e = this._lexer.token;
                        this.expectKeyword("extend"), this.expectKeyword("input");
                        var t = this.parseName(),
                            n = this.parseDirectives(!0),
                            i = this.parseInputFieldsDefinition();
                        if (0 === n.length && 0 === i.length) throw this.unexpected();
                        return {
                            kind: r.h.INPUT_OBJECT_TYPE_EXTENSION,
                            name: t,
                            directives: n,
                            fields: i,
                            loc: this.loc(e)
                        }
                    }, t.parseDirectiveDefinition = function() {
                        var e = this._lexer.token,
                            t = this.parseDescription();
                        this.expectKeyword("directive"), this.expectToken(a.T.AT);
                        var n = this.parseName(),
                            i = this.parseArgumentDefs(),
                            s = this.expectOptionalKeyword("repeatable");
                        this.expectKeyword("on");
                        var o = this.parseDirectiveLocations();
                        return {
                            kind: r.h.DIRECTIVE_DEFINITION,
                            description: t,
                            name: n,
                            arguments: i,
                            repeatable: s,
                            locations: o,
                            loc: this.loc(e)
                        }
                    }, t.parseDirectiveLocations = function() {
                        return this.delimitedMany(a.T.PIPE, this.parseDirectiveLocation)
                    }, t.parseDirectiveLocation = function() {
                        var e = this._lexer.token,
                            t = this.parseName();
                        if (void 0 !== c.B[t.value]) return t;
                        throw this.unexpected(e)
                    }, t.loc = function(e) {
                        var t;
                        if (!0 !== (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation)) return new s.Ye(e, this._lexer.lastToken, this._lexer.source)
                    }, t.peek = function(e) {
                        return this._lexer.token.kind === e
                    }, t.expectToken = function(e) {
                        var t = this._lexer.token;
                        if (t.kind === e) return this._lexer.advance(), t;
                        throw (0, i.h)(this._lexer.source, t.start, "Expected ".concat(p(e), ", found ").concat(u(t), "."))
                    }, t.expectOptionalToken = function(e) {
                        var t = this._lexer.token;
                        if (t.kind === e) return this._lexer.advance(), t
                    }, t.expectKeyword = function(e) {
                        var t = this._lexer.token;
                        if (t.kind !== a.T.NAME || t.value !== e) throw (0, i.h)(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(u(t), "."));
                        this._lexer.advance()
                    }, t.expectOptionalKeyword = function(e) {
                        var t = this._lexer.token;
                        return t.kind === a.T.NAME && t.value === e && (this._lexer.advance(), !0)
                    }, t.unexpected = function(e) {
                        var t = null != e ? e : this._lexer.token;
                        return (0, i.h)(this._lexer.source, t.start, "Unexpected ".concat(u(t), "."))
                    }, t.any = function(e, t, n) {
                        this.expectToken(e);
                        for (var i = []; !this.expectOptionalToken(n);) i.push(t.call(this));
                        return i
                    }, t.optionalMany = function(e, t, n) {
                        if (this.expectOptionalToken(e)) {
                            var i = [];
                            do {
                                i.push(t.call(this))
                            } while (!this.expectOptionalToken(n));
                            return i
                        }
                        return []
                    }, t.many = function(e, t, n) {
                        this.expectToken(e);
                        var i = [];
                        do {
                            i.push(t.call(this))
                        } while (!this.expectOptionalToken(n));
                        return i
                    }, t.delimitedMany = function(e, t) {
                        this.expectOptionalToken(e);
                        var n = [];
                        do {
                            n.push(t.call(this))
                        } while (this.expectOptionalToken(e));
                        return n
                    }, e
                }();

                function u(e) {
                    var t = e.value;
                    return p(e.kind) + (null != t ? ' "'.concat(t, '"') : "")
                }

                function p(e) {
                    return (0, l.u)(e) ? '"'.concat(e, '"') : e
                }
            },
            6803: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Q: () => r,
                    z: () => s
                });
                var i = n(1654);

                function r(e) {
                    return s(e.source, (0, i.k)(e.source, e.start))
                }

                function s(e, t) {
                    var n = e.locationOffset.column - 1,
                        i = o(n) + e.body,
                        r = t.line - 1,
                        s = e.locationOffset.line - 1,
                        c = t.line + s,
                        l = 1 === t.line ? n : 0,
                        h = t.column + l,
                        d = "".concat(e.name, ":").concat(c, ":").concat(h, "\n"),
                        u = i.split(/\r\n|[\n\r]/g),
                        p = u[r];
                    if (p.length > 120) {
                        for (var f = Math.floor(h / 80), m = h % 80, v = [], y = 0; y < p.length; y += 80) v.push(p.slice(y, y + 80));
                        return d + a([
                            ["".concat(c), v[0]]
                        ].concat(v.slice(1, f + 1).map((function(e) {
                            return ["", e]
                        })), [
                            [" ", o(m - 1) + "^"],
                            ["", v[f + 1]]
                        ]))
                    }
                    return d + a([
                        ["".concat(c - 1), u[r - 1]],
                        ["".concat(c), p],
                        ["", o(h - 1) + "^"],
                        ["".concat(c + 1), u[r + 1]]
                    ])
                }

                function a(e) {
                    var t = e.filter((function(e) {
                            return e[0], void 0 !== e[1]
                        })),
                        n = Math.max.apply(Math, t.map((function(e) {
                            return e[0].length
                        })));
                    return t.map((function(e) {
                        var t, i = e[0],
                            r = e[1];
                        return o(n - (t = i).length) + t + (r ? " | " + r : " |")
                    })).join("\n")
                }

                function o(e) {
                    return Array(e + 1).join(" ")
                }
            },
            1112: (e, t, n) => {
                "use strict";
                n.d(t, {
                    H: () => c,
                    T: () => l
                });
                var i = n(824),
                    r = n(6589),
                    s = n(3767),
                    a = n(9495);

                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var c = function() {
                    function e(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GraphQL request",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                line: 1,
                                column: 1
                            };
                        "string" == typeof e || (0, s.Z)(0, "Body must be a string. Received: ".concat((0, r.Z)(e), ".")), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || (0, s.Z)(0, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || (0, s.Z)(0, "column in locationOffset is 1-indexed and must be positive.")
                    }
                    var t, n;
                    return t = e, (n = [{
                        key: i.YF,
                        get: function() {
                            return "Source"
                        }
                    }]) && o(t.prototype, n), e
                }();

                function l(e) {
                    return (0, a.Z)(e, c)
                }
            },
            7525: (e, t, n) => {
                "use strict";
                n.d(t, {
                    T: () => i
                });
                var i = Object.freeze({
                    SOF: "<SOF>",
                    EOF: "<EOF>",
                    BANG: "!",
                    DOLLAR: "$",
                    AMP: "&",
                    PAREN_L: "(",
                    PAREN_R: ")",
                    SPREAD: "...",
                    COLON: ":",
                    EQUALS: "=",
                    AT: "@",
                    BRACKET_L: "[",
                    BRACKET_R: "]",
                    BRACE_L: "{",
                    PIPE: "|",
                    BRACE_R: "}",
                    NAME: "Name",
                    INT: "Int",
                    FLOAT: "Float",
                    STRING: "String",
                    BLOCK_STRING: "BlockString",
                    COMMENT: "Comment"
                })
            },
            824: (e, t, n) => {
                "use strict";
                n.d(t, {
                    YF: () => i
                }), "function" == typeof Symbol && null != Symbol.iterator && Symbol.iterator, "function" == typeof Symbol && null != Symbol.asyncIterator && Symbol.asyncIterator;
                var i = "function" == typeof Symbol && null != Symbol.toStringTag ? Symbol.toStringTag : "@@toStringTag"
            },
            3379: (e, t, n) => {
                "use strict";
                var i, r = function() {
                        var e = {};
                        return function(t) {
                            if (void 0 === e[t]) {
                                var n = document.querySelector(t);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head
                                } catch (e) {
                                    n = null
                                }
                                e[t] = n
                            }
                            return e[t]
                        }
                    }(),
                    s = [];

                function a(e) {
                    for (var t = -1, n = 0; n < s.length; n++)
                        if (s[n].identifier === e) {
                            t = n;
                            break
                        } return t
                }

                function o(e, t) {
                    for (var n = {}, i = [], r = 0; r < e.length; r++) {
                        var o = e[r],
                            c = t.base ? o[0] + t.base : o[0],
                            l = n[c] || 0,
                            h = "".concat(c, " ").concat(l);
                        n[c] = l + 1;
                        var d = a(h),
                            u = {
                                css: o[1],
                                media: o[2],
                                sourceMap: o[3]
                            }; - 1 !== d ? (s[d].references++, s[d].updater(u)) : s.push({
                            identifier: h,
                            updater: m(u, t),
                            references: 1
                        }), i.push(h)
                    }
                    return i
                }

                function c(e) {
                    var t = document.createElement("style"),
                        i = e.attributes || {};
                    if (void 0 === i.nonce) {
                        var s = n.nc;
                        s && (i.nonce = s)
                    }
                    if (Object.keys(i).forEach((function(e) {
                            t.setAttribute(e, i[e])
                        })), "function" == typeof e.insert) e.insert(t);
                    else {
                        var a = r(e.insert || "head");
                        if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        a.appendChild(t)
                    }
                    return t
                }
                var l, h = (l = [], function(e, t) {
                    return l[e] = t, l.filter(Boolean).join("\n")
                });

                function d(e, t, n, i) {
                    var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
                    if (e.styleSheet) e.styleSheet.cssText = h(t, r);
                    else {
                        var s = document.createTextNode(r),
                            a = e.childNodes;
                        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(s, a[t]) : e.appendChild(s)
                    }
                }

                function u(e, t, n) {
                    var i = n.css,
                        r = n.media,
                        s = n.sourceMap;
                    if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), s && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), e.styleSheet) e.styleSheet.cssText = i;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(i))
                    }
                }
                var p = null,
                    f = 0;

                function m(e, t) {
                    var n, i, r;
                    if (t.singleton) {
                        var s = f++;
                        n = p || (p = c(t)), i = d.bind(null, n, s, !1), r = d.bind(null, n, s, !0)
                    } else n = c(t), i = u.bind(null, n, t), r = function() {
                        ! function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(n)
                    };
                    return i(e),
                        function(t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                                i(e = t)
                            } else r()
                        }
                }
                e.exports = function(e, t) {
                    (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i));
                    var n = o(e = e || [], t);
                    return function(e) {
                        if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                            for (var i = 0; i < n.length; i++) {
                                var r = a(n[i]);
                                s[r].references--
                            }
                            for (var c = o(e, t), l = 0; l < n.length; l++) {
                                var h = a(n[l]);
                                0 === s[h].references && (s[h].updater(), s.splice(h, 1))
                            }
                            n = c
                        }
                    }
                }
            },
            233: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => Ar
                });
                var i = n(4943),
                    r = n.n(i),
                    s = n(8276),
                    a = n(8293),
                    o = n(180),
                    c = n(3357);
                class l {
                    constructor(e, t) {
                        this.config = e, this.adapter = t, t.isSupportsCloudSaves || e.progressSaveFormat !== o.pQ.Platform || (e.progressSaveFormat = o.pQ.Local), this.saveFormat = (0, c.q)(e.progressSaveFormat)
                    }
                    get hasIntegratedAuth() {
                        return this.adapter.hasIntegratedAuth
                    }
                    get hasAccountLinkingFeature() {
                        return this.adapter.hasAccountLinkingFeature
                    }
                    get isSecretCodeAuthAvailable() {
                        return this.adapter.isSecretCodeAuthAvailable
                    }
                    get _hasAuthModal() {
                        return this.adapter._hasAuthModal
                    }
                    get isLogoutAvailable() {
                        return this.adapter.isLogoutAvailable
                    }
                    get isExternalLinksAllowed() {
                        return this.adapter.isExternalLinksAllowed
                    }
                    get type() {
                        return this.adapter.type
                    }
                    get tag() {
                        var e;
                        return (null === (e = this.adapter) || void 0 === e ? void 0 : e.tag) || ""
                    }
                    get availableSocialNetworks() {
                        return this.adapter.socialNetworks
                    }
                    get isSupportsCloudSaves() {
                        return this.adapter.isSupportsCloudSaves
                    }
                    getSDK() {
                        return this.adapter.getSDK()
                    }
                    getNativeSDK() {
                        return this.adapter.getNativeSDK()
                    }
                    get isSupportsImageUploading() {
                        return this.adapter.isSupportsImageUploading
                    }
                    requestPermissions(e) {
                        return t = this, n = void 0, r = function*() {
                            return this.adapter.requestPermissions(e)
                        }, new((i = void 0) || (i = Promise))((function(e, s) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(t) {
                                var n;
                                t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function(e) {
                                    e(n)
                                }))).then(a, o)
                            }
                            c((r = r.apply(t, n || [])).next())
                        }));
                        var t, n, i, r
                    }
                    uploadImage(e) {
                        return this.adapter.uploadImage(e)
                    }
                }
                var h = n(3379),
                    d = n.n(h),
                    u = n(8205);
                d()(u.Z, {
                    insert: "head",
                    singleton: !1
                }), u.Z.locals;
                var p, f, m, v, y, g, w = n(6558),
                    b = n(9503),
                    P = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    E = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    },
                    T = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                class S {
                    constructor(e = []) {
                        this.storages = e, p.add(this), f.set(this, void 0), m.set(this, ""), v.set(this, !0), y.set(this, void 0), this.isEmptyOnBoot = !0, this.temp = {}, E(this, f, (0, a._)(), "f"), this.ready = T(this, f, "f").ready
                    }
                    get _storages() {
                        return this.storages
                    }
                    get activeStorages() {
                        return T(this, v, "f") ? this.storages : this.localStorages
                    }
                    get localStorages() {
                        return this.storages.filter((e => !0 === e.isLocal || null === e.isLocal))
                    }
                    setStorages(e, t) {
                        this.storages = e, E(this, y, t, "f"), Promise.all([this._get(e, "context"), this._get(T(this, y, "f"), "config")]).then((([e, t]) => {
                            E(this, m, e || "", "f"), this.isEmptyOnBoot = !t, T(this, f, "f").done()
                        }))
                    }
                    replaceStorages(e) {
                        this.storages = e
                    }
                    _get(e, t) {
                        const n = (0, a._)();
                        return Promise.all(e.map((e => {
                            const n = (0, a._)(a.s);
                            return e.get(t).then((e => {
                                n.done(e)
                            })).catch(n.abort), n.ready.catch((e => (w.kg.warn(e), null)))
                        }))).then((e => {
                            n.done(e.find((e => null != e)))
                        })), n.ready
                    }
                    _set(e, t, n) {
                        return Promise.all(e.map((e => e.set(t, n))))
                    }
                    set(e, t, n) {
                        return this._set(e, `${t}${T(this,m,"f")}`, n)
                    }
                    setRaw(e, t, n) {
                        return this._set(e, `${t}`, n)
                    }
                    get(e, t) {
                        return this._get(e, `${t}${T(this,m,"f")}`)
                    }
                    getRaw(e, t) {
                        return this._get(e, `${t}`)
                    }
                    isEmptyContext() {
                        return !T(this, m, "f")
                    }
                    setContext(e) {
                        E(this, m, e, "f"), this._set(this.localStorages, "context", T(this, m, "f"))
                    }
                    migrateToContext(e) {
                        return P(this, void 0, void 0, (function*() {
                            E(this, m, "", "f");
                            const [t, n, i] = yield Promise.all([this.loadPlayer(), this.loadSecretCode(), this.loadLanguage()]), r = n || (null == t ? void 0 : t.secretCode);
                            return E(this, m, e, "f"), yield Promise.all([this.savePlayer(t, T(this, v, "f")), this.saveSecretCode(r), this.saveLanguage(i)]), E(this, m, "", "f"), yield Promise.all([this.savePlayer(null, T(this, v, "f")), this.saveSecretCode(null), this.saveLanguage(null)]), [t, r]
                        }))
                    }
                    clearContext(e, t) {
                        return P(this, void 0, void 0, (function*() {
                            const n = T(this, m, "f");
                            E(this, m, e, "f"), yield Promise.all([this.savePlayer(null, t), this.saveSecretCode(null), this.saveLanguage(null)]), E(this, m, n, "f")
                        }))
                    }
                    extractFromContext(e, t = !1) {
                        return P(this, void 0, void 0, (function*() {
                            const n = T(this, m, "f");
                            E(this, m, e, "f");
                            const [i, r, s] = yield Promise.all(t ? [this.loadPlayerFromLocalStorage(), this.loadSecretCodeFromLocalStorage(), this.loadLanguage()] : [this.loadPlayer(), this.loadSecretCode(), this.loadLanguage()]), a = r || (null == i ? void 0 : i.secretCode);
                            return E(this, m, n, "f"), [i, a, s]
                        }))
                    }
                    copyFromContext(e, t, n) {
                        return P(this, void 0, void 0, (function*() {
                            const i = T(this, m, "f"),
                                [r, s, a] = yield this.extractFromContext(e);
                            E(this, m, t, "f"), yield Promise.all([this.savePlayer(r, n), this.saveSecretCode(s), this.saveLanguage(a)]), E(this, m, i, "f")
                        }))
                    }
                    checkIsMigrated(e) {
                        return P(this, void 0, void 0, (function*() {
                            let t = !1;
                            try {
                                t = yield this.get(T(this, y, "f"), `migrated:${e}`)
                            } catch (e) {}
                            return !!t
                        }))
                    }
                    setMigrated(e) {
                        return P(this, void 0, void 0, (function*() {
                            return this.set(T(this, y, "f"), `migrated:${e}`, !0)
                        }))
                    }
                    loadPlayer() {
                        return this.get(this.activeStorages, "players").then(T(this, p, "m", g))
                    }
                    loadPlayerFromPlatformCloud() {
                        const e = this.storages.filter((e => !e.isLocal));
                        return this.get(e, "players").then((([e] = [null]) => e))
                    }
                    loadPlayerFromLocalStorage() {
                        return this.get(this.localStorages, "players").then(T(this, p, "m", g))
                    }
                    savePlayer(e, t) {
                        return this.set(t ? this.storages : this.localStorages, "players", [e]).catch(w.kg.warn)
                    }
                    loadSecretCode() {
                        return P(this, void 0, void 0, (function*() {
                            return this.get(this.activeStorages, "sk").catch(w.kg.warn)
                        }))
                    }
                    loadSecretCodeFromLocalStorage() {
                        return P(this, void 0, void 0, (function*() {
                            return this.get(this.localStorages, "sk").catch(w.kg.warn)
                        }))
                    }
                    saveSecretCode(e) {
                        return this.set(this.activeStorages, "sk", e).catch(w.kg.warn)
                    }
                    setLocalRaw(e, t) {
                        return this.setRaw(this.localStorages, e, t).catch(w.kg.warn)
                    }
                    getLocalRaw(e) {
                        return this.getRaw(this.localStorages, e).catch(w.kg.warn)
                    }
                    loadLanguage() {
                        return this.get(T(this, y, "f"), "lang").catch((e => (w.kg.warn(e), null)))
                    }
                    saveLanguage(e) {
                        return this.set(T(this, y, "f"), "lang", e).catch(w.kg.warn)
                    }
                    loadConfig() {
                        return this._get(T(this, y, "f"), "config").then((e => Object.assign(Object.assign({}, b.lR), e))).catch((e => (w.kg.warn(e), b.lR)))
                    }
                    saveConfig(e) {
                        return this._set(T(this, y, "f"), "config", e).catch(w.kg.warn)
                    }
                    loadAdsInfo() {
                        const e = this._get(T(this, y, "f"), "adsInfo").then((e => Object.assign(Object.assign({}, b.GH), e))).catch((e => (w.kg.warn(e), b.GH)));
                        return e.then((e => this.temp.adsInfo = e)), e
                    }
                    saveAdsInfo(e) {
                        return this._set(T(this, y, "f"), "adsInfo", e).catch(w.kg.warn)
                    }
                    saveIsExistsShortcut(e) {
                        this.set(T(this, y, "f"), "isExistsShortcut", e)
                    }
                    loadIsExistsShortcut() {
                        return this.get(T(this, y, "f"), "isExistsShortcut")
                    }
                    isCrazyGamesAccountLinked(e) {
                        var t;
                        return P(this, void 0, void 0, (function*() {
                            return Boolean(null !== (t = yield this.getRaw(this.localStorages, `crazyGames.account${e}.linked`)) && void 0 !== t && t)
                        }))
                    }
                    setCrazyGamesAccountLinked(e) {
                        return P(this, void 0, void 0, (function*() {
                            yield this.setRaw(this.localStorages, `crazyGames.account${e}.linked`, !0)
                        }))
                    }
                    setSaveInPlatformStorage(e) {
                        E(this, v, e, "f")
                    }
                }
                f = new WeakMap, m = new WeakMap, v = new WeakMap, y = new WeakMap, p = new WeakSet, g = function(e) {
                    if (!e) return null;
                    const [t] = e;
                    return t
                };
                var _ = n(6388),
                    A = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    };
                class I extends Error {
                    constructor() {
                        super("throttled invocation was canceled"), this.name = "CanceledError"
                    }
                }
                class C {
                    constructor(e, t) {
                        this.canceled = !1;
                        const n = new Promise((e => {
                            this.timeout = setTimeout(e, t), this.resolve = e
                        }));
                        this.ready = e.then((() => n), (() => n))
                    }
                    flush() {
                        clearTimeout(this.timeout), this.resolve()
                    }
                    cancel() {
                        this.canceled = !0, clearTimeout(this.timeout), this.resolve()
                    }
                    then(e) {
                        return this.ready.then((() => {
                            if (this.canceled) throw new I;
                            return e()
                        }))
                    }
                }

                function k(e, t, n = {}) {
                    const i = null != t && Number.isFinite(t) ? Math.max(t, 0) : 0,
                        r = n.getNextArgs || ((e, t) => t);
                    let s, a = Promise.resolve(),
                        o = new C(a, 0),
                        c = null;

                    function l() {
                        const t = s;
                        c = null, s = null;
                        const n = (() => A(this, void 0, void 0, (function*() {
                            return yield e.apply(this, t)
                        })))();
                        return o = new C(n, i), n
                    }

                    function h(...e) {
                        return s = s ? r(s, e) : e, c || (c = o.then(l.bind(this))), c
                    }
                    return h.cancel = () => A(this, void 0, void 0, (function*() {
                        const e = a;
                        o.cancel(), c = null, s = null, a = Promise.resolve(), o = new C(a, 0), yield e
                    })), h.flush = () => A(this, void 0, void 0, (function*() {
                        o.flush(), yield a
                    })), h
                }

                function R(e) {
                    return function(t, n, i) {
                        const r = i.value;
                        return i.value = k(r, e), i
                    }
                }
                k.CanceledError = I;
                const O = e => {
                    if ("Problem" === (null == e ? void 0 : e.__typename)) throw e.message
                };
                new TextEncoder;
                var D = n(6480),
                    N = function(e, t, n, i) {
                        var r, s = arguments.length,
                            a = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
                        else
                            for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
                        return s > 3 && a && Object.defineProperty(t, n, a), a
                    },
                    x = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    };
                class L extends _.Z {
                    constructor(e) {
                        super(), this.gp = e
                    }
                    open(e = {
                        orderBy: ["score"]
                    }) {
                        return x(this, void 0, void 0, (function*() {
                            e.orderBy && "string" == typeof e.orderBy && (e.orderBy = [e.orderBy]);
                            const t = (Array.isArray(e.orderBy) ? e.orderBy : ["score"]).filter((e => "" !== e));
                            e = Object.assign(Object.assign({}, e), {
                                orderBy: t
                            });
                            const [n] = yield Promise.all([this.fetch(e), this.gp.loadOverlay()]);
                            this._events.emit("open"), yield this.gp.overlay.openLeaderboard(e, n), this._events.emit("close")
                        }))
                    }
                    openScoped(e) {
                        return x(this, void 0, void 0, (function*() {
                            const [t] = yield Promise.all([this.fetchScoped(e), this.gp.loadOverlay()]), n = Object.assign({}, e), i = t.fields.map((e => e.key));
                            n.orderBy = e.includeFields ? i.filter((t => !e.includeFields.includes(t))) : i, this._events.emit("open"), yield this.gp.overlay.openLeaderboard(n, t), this._events.emit("close")
                        }))
                    }
                    fetch(e = {}) {
                        return x(this, void 0, void 0, (function*() {
                            const t = (0, a._)();
                            this.gp.loader.inc();
                            const {
                                showNearest: n,
                                withMe: i,
                                limit: r
                            } = e, s = Object.assign(Object.assign({}, e), {
                                showNearest: (0, D.pY)(n),
                                withMe: (0, D.oo)(n, i)
                            });
                            try {
                                const {
                                    result: e,
                                    playerResult: n
                                } = yield this.gp._services.leaderboardsService.getRating(s);
                                O(e), O(n), F(e, n, s.showNearest, s.withMe, (0, D.wQ)(r, e.leaderboard)), t.done(e), this._events.emit("fetch", e)
                            } catch (e) {
                                t.abort(e), this._events.emit("error:fetch")
                            } finally {
                                this.gp.loader.dec()
                            }
                            return t.ready
                        }))
                    }
                    fetchScoped(e) {
                        return x(this, void 0, void 0, (function*() {
                            const t = (0, a._)();
                            this.gp.loader.inc();
                            const {
                                showNearest: n,
                                withMe: i,
                                limit: r
                            } = e, s = Object.assign(Object.assign({}, e), {
                                showNearest: (0, D.pY)(n),
                                withMe: (0, D.oo)(n, i)
                            });
                            try {
                                const e = yield this.gp._services.leaderboardsService.getRatingVariant(s), {
                                    result: n,
                                    playerResult: i
                                } = e;
                                O(n), O(i), F(n, i, s.showNearest, s.withMe, (0, D.wQ)(r, n.leaderboard)), t.done(n), this._events.emit("fetch", n)
                            } catch (e) {
                                t.abort(e), this._events.emit("error:fetch")
                            } finally {
                                this.gp.loader.dec()
                            }
                            return t.ready
                        }))
                    }
                    fetchPlayerRating(e = {}) {
                        return x(this, void 0, void 0, (function*() {
                            const t = (0, a._)();
                            this.gp.loader.inc();
                            const {
                                showNearest: n
                            } = e, i = Object.assign(Object.assign({}, e), {
                                showNearest: (0, D.pY)(n)
                            });
                            try {
                                const e = yield this.gp._services.leaderboardsService.getPlayerRating(i);
                                O(e), t.done(e), this._events.emit("fetchPlayer", e)
                            } catch (e) {
                                t.abort(e), this._events.emit("error:fetchPlayer", e)
                            } finally {
                                this.gp.loader.dec()
                            }
                            return t.ready
                        }))
                    }
                    fetchPlayerRatingScoped(e) {
                        return x(this, void 0, void 0, (function*() {
                            const t = (0, a._)();
                            this.gp.loader.inc();
                            const {
                                showNearest: n
                            } = e, i = Object.assign(Object.assign({}, e), {
                                showNearest: (0, D.pY)(n)
                            });
                            try {
                                const e = yield this.gp._services.leaderboardsService.getPlayerRatingVariant(i);
                                O(e), t.done(e), this._events.emit("fetchPlayerScoped", e)
                            } catch (e) {
                                t.abort(e), this._events.emit("error:fetchPlayerScoped", e)
                            } finally {
                                this.gp.loader.dec()
                            }
                            return t.ready
                        }))
                    }
                    publishRecord(e) {
                        return x(this, void 0, void 0, (function*() {
                            const t = (0, a._)();
                            this.gp.loader.inc();
                            try {
                                const n = yield this.gp._services.leaderboardsService.publishRecord(e);
                                t.done(n), this._events.emit("publishRecord", n)
                            } catch (e) {
                                t.abort(e), this._events.emit("error:publishRecord", e)
                            } finally {
                                this.gp.loader.dec()
                            }
                            return t.ready
                        }))
                    }
                }

                function F(e, t, n, i, r) {
                    e.countOfPlayersAbove = (0, D.q3)(e.players, (null == t ? void 0 : t.abovePlayers) || []), e.topPlayers = [...e.players], e.abovePlayers = [...(null == t ? void 0 : t.abovePlayers) || []], e.belowPlayers = [...(null == t ? void 0 : t.belowPlayers) || []], e.player = (null == t ? void 0 : t.player) || null, e.players = function(e, t, n, i, r, s, a) {
                        if (!i || !t || "none" === t) return e;
                        if (e.some((e => e.id === i.id && e.position === i.position))) return e.map((e => i.id === e.id ? i : e));
                        const o = e.length,
                            c = i.position - 1;
                        if (c > o) {
                            const t = e.findIndex((e => e.id === i.id));
                            t >= 0 && e.forEach(((e, n) => {
                                n >= t && (e.position -= 1)
                            }))
                        }
                        if (r && 0 !== r.length && c > n - 1 && (e = [...r, ...e]), s && 0 !== s.length && c > n - 1 && (e = [...e, ...s]), c < o) e.splice(c, 0, i), e.forEach(((e, t) => {
                            t <= c || e.position++
                        })), e.length > o && e.pop();
                        else switch (t) {
                            case "first":
                                e.unshift(i);
                                break;
                            case "last":
                                e.push(i)
                        }
                        return e = [...new Set(e.map((e => e.id)))].map((t => e.find((e => e.id === t)))), a && (e = e.sort(((e, t) => e.position - t.position))), e
                    }(e.players, (0, D.oo)(n, i), (0, D.wQ)(r, e.leaderboard), null == t ? void 0 : t.player, null == t ? void 0 : t.abovePlayers, null == t ? void 0 : t.belowPlayers, (0, D.pY)(n))
                }
                N([R(500)], L.prototype, "open", null), N([R(500)], L.prototype, "openScoped", null), N([R(500)], L.prototype, "fetch", null), N([R(500)], L.prototype, "fetchScoped", null), N([R(500)], L.prototype, "fetchPlayerRating", null), N([R(500)], L.prototype, "fetchPlayerRatingScoped", null), N([R(500)], L.prototype, "publishRecord", null);
                var M = n(5942),
                    j = n(264);
                const U = [],
                    $ = e => (U.push(e), () => {
                        U.splice(U.indexOf(e), 1)
                    });
                let G = performance.now();
                const B = e => {
                    const t = e - G;
                    G = e, U.forEach((e => e(t))), requestAnimationFrame(B)
                };
                requestAnimationFrame(B);
                var q, V, W, z, Y, K, J, Z, X, H, Q, ee, te, ne, ie, re, se, ae, oe, ce, le, he, de = function(e, t, n, i) {
                        var r, s = arguments.length,
                            a = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
                        else
                            for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
                        return s > 3 && a && Object.defineProperty(t, n, a), a
                    },
                    ue = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    pe = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    },
                    fe = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                const me = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                    ve = {
                        local: o.pQ.Local,
                        platform: o.pQ.Platform,
                        cloud: o.pQ.Cloud
                    };
                class ye extends j.Z {
                    constructor(e = {}, t, n, i, r, s) {
                        super(e, t, i), this.playerAdapter = n, this.coreSDk = i, q.add(this), this.isLoggedIn = !1, this.isLoggedInByPlatform = !1, this.hasAnyCredentials = !1, this.secretCode = "", this.tempSecredCode = "", this._hasFirstSync = !1, this.isFirstRequest = !1, this.credentials = "", this.stats = {
                            activeDays: 0,
                            activeDaysConsecutive: 0,
                            playtimeAll: 0,
                            playtimeToday: 0
                        }, V.set(this, ""), W.set(this, void 0), z.set(this, ""), Y.set(this, !1), K.set(this, {}), this._platformData = {}, J.set(this, void 0), Z.set(this, (() => {})), X.set(this, {}), H.set(this, {}), re.set(this, (function(e = {}) {
                            return ue(this, void 0, void 0, (function*() {
                                const {
                                    silent: t = !0,
                                    override: n = !1,
                                    storage: i = "preferred"
                                } = e;
                                this.gp.loader.inc();
                                const r = (0, a._)();
                                fe(this, X, "f")[i] = this.gp.serverTime;
                                const s = ve[i] || this.gp.platform.config.progressSaveFormat;
                                let o = !1;
                                const {
                                    isLocalSave: l,
                                    isCloudSave: h,
                                    isPlatformSave: d
                                } = (0, c.q)(s);
                                yield this.gp._storage.savePlayer(this.toJSON(), !l).catch(w.kg.warn);
                                try {
                                    yield fe(this, q, "m", ne).call(this, t);
                                    const e = this.gp.platform.config.alwaysSyncPublicFields && this.isPublicFieldsDirty;
                                    if (e || fe(this, W, "f").isDirty() && h || h || this.isFirstRequest) {
                                        const i = this.toJSON();
                                        !h && e && this.fields.forEach((e => {
                                            e.public || delete i[e.key]
                                        }));
                                        const a = yield this.gp._services.playerService.sync(Object.assign({
                                            override: n,
                                            playerState: i
                                        }, fe(this, W, "f").export()), {
                                            withToken: this.isFirstRequest
                                        });
                                        switch (a.__typename) {
                                            case "PlayerSyncConflict": {
                                                this.gp.loader.dec();
                                                const e = a;
                                                let n;
                                                d ? n = this.toJSON() : (yield this.gp.loadOverlay(), o = !0, n = yield this.gp.overlay.pickPlayerOnConflict(e)), this.has("name") && !n.name && (n.name = this.get("name")), this.has("avatar") && !n.avatar && (n.avatar = this.get("avatar")), this.gp.loader.inc();
                                                const i = yield this.gp._services.playerService.sync(Object.assign({
                                                    playerState: n,
                                                    override: !0
                                                }, fe(this, W, "f").export()), {
                                                    withToken: this.isFirstRequest
                                                });
                                                if ("Player" !== i.__typename) return void r.abort();
                                                t || fe(this, q, "m", ce).call(this, ""), o && this.gp.overlay.close(), yield fe(this, q, "m", ae).call(this, i, s), r.done(), yield fe(this, q, "m", oe).call(this, i.state);
                                                break
                                            }
                                            case "Player": {
                                                const {
                                                    state: e
                                                } = a;
                                                t || fe(this, q, "m", ce).call(this, ""), yield fe(this, q, "m", ae).call(this, a, s), r.done(), yield fe(this, q, "m", oe).call(this, e), this.playerAdapter.publishRecord(e);
                                                break
                                            }
                                        }
                                    } else if (t) yield this.gp._storage.savePlayer(this.toJSON(), !l).catch(w.kg.warn);
                                    else {
                                        const e = yield this.gp._storage.loadPlayerFromPlatformCloud(), t = yield this.gp._services.playerService.getPlayer({
                                            withToken: !0
                                        });
                                        let n = e;
                                        (!e || new j.Z(e, this.fields, this.gp).isStub) && (n = t.state), t.state = n, fe(this, q, "m", ae).call(this, t, s), r.done(), yield fe(this, q, "m", oe).call(this, n), this.playerAdapter.publishRecord(n)
                                    }
                                    r.done()
                                } catch (e) {
                                    r.abort(e)
                                } finally {
                                    this._hasFirstSync = !0, this.isPublicFieldsDirty = !1, this.isFirstRequest = !1, this.gp.loader.dec()
                                }
                                return r.ready.then((() => this._events.emit("sync", !0))).catch((() => this._events.emit("sync", !1))), r.ready
                            }))
                        })), se.set(this, (function() {
                            return ue(this, void 0, void 0, (function*() {
                                this.gp.loader.inc();
                                try {
                                    const e = yield this.gp._services.playerService.getPlayer({
                                        withToken: !0
                                    });
                                    yield fe(this, q, "m", ae).call(this, e, this.gp.platform.saveFormat.format), yield fe(this, q, "m", oe).call(this, e.state), this._events.emit("load", !0)
                                } catch (e) {
                                    w.kg.error(e), this._events.emit("load", !1)
                                } finally {
                                    this.gp.loader.dec(), this.isFirstRequest = !1
                                }
                            }))
                        })), this.gp = this.coreSDk;
                        const o = (0, a._)();
                        this.ready = o.ready, pe(this, J, s, "f"), pe(this, W, r, "f"), pe(this, z, `,${this.coreSDk.platform.type}${fe(this,q,"a",Q)?`:${this.gp.platform.tag}`:""},${this.coreSDk.isDev?"d":"p"},`, "f"), r.on("syncPlayer", (() => {
                            this.ready.then((() => this.sync().finally((() => r.commitSyncPlayer()))))
                        })), this._events.on("login", (e => ue(this, void 0, void 0, (function*() {
                            e && (yield fe(this, W, "f").syncPurchases())
                        })))), fe(this, q, "m", te).call(this).finally((() => this._init(o)))
                    }
                    get avatar() {
                        return this.get("avatar") || this.gp.generateAvatar(this.id, 64)
                    }
                    set avatar(e) {
                        this.set("avatar", e)
                    }
                    get _isRequredDataUpdate() {
                        return !this.get("name") || this._isRequredAvatarUpdate
                    }
                    get _isRequredAvatarUpdate() {
                        const e = this.get("avatar");
                        return !e || !this._hasFirstSync && this.playerAdapter.isPlatformAvatar(e)
                    }
                    get _authInfo() {
                        return Object.assign(Object.assign({}, this._platformData), {
                            secretCode: this.secretCode || fe(this, V, "f")
                        })
                    }
                    get(e) {
                        return "secretCode" === e ? this.secretCode || fe(this, V, "f") : "credentials" === e ? this.credentials || this.playerAdapter.userId : super.get(e)
                    }
                    loadProgress(e, t) {
                        return ue(this, void 0, void 0, (function*() {
                            const [n] = yield this.gp._storage.extractFromContext(t);
                            let i = !n;
                            if (n && (this.fromJSON(n), this.isStub && (i = !0)), i) {
                                const n = yield Promise.all(e.map((e => this.gp._storage.extractFromContext(e)))), i = null == n ? void 0 : n.find((([e]) => e && !new j.Z(e, this.fields, this.gp).isStub)), [r] = i || [];
                                r && (delete r.platformType, delete r.secretCode, delete r.credentials, r.id = this.id, this.fromJSON(r), this.gp._storage.setContext(t), yield fe(this, re, "f").call(this), this.gp._storage.setMigrated(t))
                            }
                        }))
                    }
                    _init(e) {
                        return ue(this, void 0, void 0, (function*() {
                            this.gp.ready.then((() => {
                                (this.id ? fe(this, se, "f").call(this) : fe(this, re, "f").call(this)).finally((() => ue(this, void 0, void 0, (function*() {
                                    this.isLoggedInByPlatform && (yield fe(this, W, "f").syncPurchases()), e.done(), this._events.emit("ready")
                                }))))
                            }))
                        }))
                    }
                    fetchFields() {
                        return ue(this, void 0, void 0, (function*() {
                            try {
                                this.fields = (yield this.gp._services.playerService.fetchFields()).items, this._events.emit("fetchFields", !0)
                            } catch (e) {
                                this._events.emit("fetchFields", !1)
                            }
                        }))
                    }
                    sync(e = {}) {
                        return ue(this, void 0, void 0, (function*() {
                            return fe(this, re, "f").call(this, e)
                        }))
                    }
                    enableAutoSync({
                        interval: e,
                        override: t = !1,
                        storage: n = "preferred"
                    } = {
                        interval: 0
                    }) {
                        if (fe(this, H, "f")[n]) return void w.kg.error(`AutoSync for ${n} storage already enabled. Call disableAutoSync() before re-enabling.`);
                        if (!e) return void w.kg.error("Interval is not defined");
                        let i = 0;
                        fe(this, H, "f")[n] = $((() => ue(this, void 0, void 0, (function*() {
                            (new Date(this.gp.serverTime).getTime() - (fe(this, X, "f")[n] ? new Date(fe(this, X, "f")[n]).getTime() : 0)) / 1e3 >= e && this.updateTime > i && (i = Date.now(), yield fe(this, re, "f").call(this, {
                                override: t,
                                storage: n
                            }))
                        }))))
                    }
                    disableAutoSync({
                        storage: e = "preferred"
                    } = {}) {
                        fe(this, H, "f")[e] ? (fe(this, H, "f")[e](), delete fe(this, H, "f")[e]) : w.kg.error(`AutoSync for ${e} storage disable attempt: not active`)
                    }
                    load() {
                        return ue(this, void 0, void 0, (function*() {
                            return fe(this, se, "f").call(this)
                        }))
                    }
                    login(e = {}) {
                        var t;
                        return ue(this, void 0, void 0, (function*() {
                            let n = !1;
                            if (this.gp.platform._hasAuthModal) return (yield this.playerAdapter.loginPlayer(this, {
                                isAuthModal: !0
                            })).id ? (yield fe(this, re, "f").call(this, {
                                silent: !1
                            }).then((() => {
                                n = !0, this._events.emit("login", !0)
                            })).catch((e => {
                                w.kg.error(e), this._events.emit("login", !1)
                            })), n) : (this._events.emit("login", !1), n);
                            if (!this.gp.platform.hasIntegratedAuth && !this.gp.platform.isSecretCodeAuthAvailable) return this._events.emit("login", !1), n;
                            try {
                                yield this.gp.loadOverlay();
                                const {
                                    type: i,
                                    secretCode: r
                                } = yield this.gp.overlay.login({
                                    withSecretCode: this.gp.platform.isSecretCodeAuthAvailable && (null === (t = e.withSecretCode) || void 0 === t || t)
                                });
                                switch (i) {
                                    case "PLATFORM_AUTH":
                                        yield fe(this, re, "f").call(this, {
                                            silent: !1
                                        }).then((() => {
                                            n = !0, this._events.emit("login", !0)
                                        })).catch((e => {
                                            w.kg.error(e), this._events.emit("login", !1)
                                        }));
                                        break;
                                    case "SECRET_KEY_AUTH_LOGIN":
                                        fe(this, q, "m", ce).call(this, r), yield fe(this, se, "f").call(this).then((() => {
                                            n = !0, this._events.emit("login", !0)
                                        })).catch((e => {
                                            w.kg.error(e), this._events.emit("login", !1)
                                        }))
                                }
                                this.gp.overlay.close()
                            } catch (e) {
                                w.kg.error(e), this._events.emit("login", !1)
                            }
                            return n
                        }))
                    }
                    logout() {
                        return ue(this, void 0, void 0, (function*() {
                            if (this.gp.platform.isLogoutAvailable)
                                if (this.isLoggedIn) try {
                                    const e = yield this.playerAdapter.logoutPlayer();
                                    yield this._onLogout(e)
                                } catch (e) {
                                    w.kg.error(e), this._events.emit("logout", !1)
                                } else this._events.emit("logout", !1);
                                else this._events.emit("logout", !1)
                        }))
                    }
                    _onLogout(e) {
                        return ue(this, void 0, void 0, (function*() {
                            this.resetCredentials(), this.isLoggedIn = !1, yield fe(this, q, "m", te).call(this), this._events.emit("logout", e), yield fe(this, se, "f").call(this)
                        }))
                    }
                    resetCredentials() {
                        pe(this, V, "", "f"), this.credentials = "", fe(this, q, "m", ce).call(this, ""), this._hasFirstSync = !1, this.isFirstRequest = !0
                    }
                }
                V = new WeakMap, W = new WeakMap, z = new WeakMap, Y = new WeakMap, K = new WeakMap, J = new WeakMap, Z = new WeakMap, X = new WeakMap, H = new WeakMap, re = new WeakMap, se = new WeakMap, q = new WeakSet, Q = function() {
                    return this.gp.platform.type === M.z.CUSTOM || this.gp.platform.type === M.z.PARTNER
                }, ee = function(e, t) {
                    return e ? t && (null == t ? void 0 : t.id) === e.id ? new Date(e.modifiedAt).getTime() > new Date(null == t ? void 0 : t.modifiedAt).getTime() + 3500 ? e : t : e : t
                }, te = function() {
                    var e;
                    return ue(this, void 0, void 0, (function*() {
                        const {
                            platformData: t,
                            key: n
                        } = yield this.playerAdapter.getPlayerContext().catch((e => (w.kg.error(e), {
                            platformData: null,
                            key: ""
                        })));
                        this._platformData = t || {}, fe(this, J, "f").call(this, this._authInfo), this.credentials = String("0" != n && n ? n : "");
                        const i = this._wasReset;
                        let r;
                        if (this._wasReset = !1, this.isFirstRequest = !0, r = fe(this, q, "a", Q) ? `,${this.gp.platform.type}:${this.gp.platform.config.tag},${this.gp.isDev?"d":"p"},${this.credentials}` : `,${this.gp.platform.type},${this.gp.isDev?"d":"p"},${this.credentials}`, null == t ? void 0 : t.savedState) {
                            w.kg.info("found saved state...");
                            const e = `,${this.gp.platform.type},${this.gp.isDev?"d":"p"},null`,
                                [t] = yield this.gp._storage.extractFromContext(e);
                            t && (this.fromJSON(t), yield fe(this, re, "f").call(this), yield this.gp._storage.copyFromContext(r, e, this.gp.platform.saveFormat.isPlatformSave))
                        }
                        const s = [M.z.POKI, M.z.VK_PLAY, M.z.CRAZY_GAMES, M.z.WG_PLAYGROUND, M.z.BEELINE, M.z.KONGREGATE, M.z.GOOGLE_PLAY, M.z.ANDROID, M.z.APP_GALLERY, M.z.GALAXY_STORE, M.z.ONE_STORE, M.z.AMAZON_APPSTORE, M.z.XIAOMI_GETAPPS, M.z.APTOIDE, M.z.RUSTORE, M.z.PLAYDECK, M.z.TELEGRAM, M.z.CUSTOM, M.z.Y8, M.z.PARTNER].includes(this.gp.platform.type),
                            a = [M.z.APP_GALLERY, M.z.GALAXY_STORE, M.z.ONE_STORE, M.z.AMAZON_APPSTORE, M.z.XIAOMI_GETAPPS, M.z.APTOIDE, M.z.RUSTORE, M.z.ANDROID].includes(this.gp.platform.type),
                            o = yield this.gp._storage.checkIsMigrated(r), c = [];
                        if (a && !o && c.push(`,GOOGLE_PLAY,${this.gp.isDev?"d":"p"},`), s && !o && c.push(`,NONE,${this.gp.isDev?"d":"p"},`), c.length > 0 && (yield this.loadProgress(c, r)), !this.gp._storage.isEmptyOnBoot && this.gp._storage.isEmptyContext() && this.isStub) {
                            w.kg.info("Applying migration...");
                            const [e, t] = yield this.gp._storage.migrateToContext(r);
                            this.secretCode = t, this.fromJSON(e), pe(this, V, e.secretCode, "f"), fe(this, J, "f").call(this, this._authInfo), yield fe(this, re, "f").call(this)
                        }
                        pe(this, Y, !!n, "f"), this.gp._storage.setContext(r);
                        const [l, h, d] = yield Promise.all([this.gp._storage.loadPlayer(), this.gp._storage.loadSecretCode(), this.gp._storage.loadPlayerFromLocalStorage()]);
                        if (this.isStub && !this.credentials && (null == l ? void 0 : l.credentials) && (null === (e = null == l ? void 0 : l.credentials) || void 0 === e ? void 0 : e.length) > 0) {
                            const [e] = yield this.gp._storage.extractFromContext(`${fe(this,z,"f")}${this.credentials}`);
                            e || (yield this.gp._storage.copyFromContext(fe(this, z, "f"), `${fe(this,z,"f")}${this.credentials}`, this.gp.platform.saveFormat.isPlatformSave)), yield this.gp._storage.clearContext(fe(this, z, "f"), this.gp.platform.saveFormat.isPlatformSave), fe(this, K, "f")[this.credentials] = !0
                        }
                        const u = fe(this, q, "m", ee).call(this, d, l);
                        if (this.fromJSON(u || {}), pe(this, V, (null == u ? void 0 : u.secretCode) || "", "f"), this.secretCode = h, fe(this, J, "f").call(this, this._authInfo), fe(this, Y, "f") && this.isStub && !i) {
                            const [e] = yield this.gp._storage.extractFromContext(fe(this, z, "f"));
                            e && (delete e.platformType, delete e.secretCode, delete e.credentials, e.name = this.name, e.avatar = this.avatar, e.id = this.id, this.fromJSON(e), yield fe(this, re, "f").call(this))
                        }
                    }))
                }, ne = function(e) {
                    return ue(this, void 0, void 0, (function*() {
                        let t;
                        if (e ? this._isRequredDataUpdate && (t = this.playerAdapter.getPlayer()) : t = this.playerAdapter.loginPlayer(this), t) {
                            const n = yield t.catch((e => {
                                if ("cancelled" === (null == e ? void 0 : e.message)) throw e;
                                return {
                                    name: "",
                                    photoLarge: ""
                                }
                            }));
                            yield fe(this, q, "m", ie).call(this, n, e)
                        }
                    }))
                }, ie = function(e, t) {
                    return ue(this, void 0, void 0, (function*() {
                        var n;
                        t || (yield fe(this, q, "m", te).call(this)), e.name && !this.get("name") && (this.name = e.name), this.name = (n = this.name) && me.test(n) ? n.replace(/@.*/, "") : n, e.photoLarge && this._isRequredAvatarUpdate && (this.avatar = e.photoLarge)
                    }))
                }, ae = function(e, t) {
                    return ue(this, void 0, void 0, (function*() {
                        const n = this.credentials,
                            i = this.id;
                        fe(this, W, "f").updateServerTime(e.serverTime), this._firstReqHash = e.firstReqHash, this.stats = e.stats, fe(this, q, "m", le).call(this, e.token), this.playerAdapter.setCredentials(e.state.credentials);
                        const r = Date.parse(e.state.modifiedAt) - Date.parse(this.modifiedAt) > 3500,
                            s = this.secretCode || fe(this, V, "f"),
                            {
                                isCloudSave: a,
                                isLocalSave: o
                            } = (0, c.q)(t);
                        if (this.credentials && this.credentials !== e.state.credentials || 0 === this.id || s && s != e.state.secretCode || a) {
                            if (this.fromJSON(e.state), this.gp.platform.config.alwaysSyncPublicFields && !a && !this.isFirstRequest) {
                                const e = this.fields.filter((e => !e.public)),
                                    t = yield this.gp._storage.loadPlayer();
                                e.forEach((e => {
                                    this.set(e.key, t[e.key])
                                }))
                            }
                        } else this.gp.platform.config.alwaysSyncPublicFields ? this.fields.filter((e => e.public)).forEach((t => {
                            this.set(t.key, e.state[t.key])
                        })) : r && this.fromJSON(e.state);
                        (yield fe(this, q, "m", he).call(this, this.credentials, this.id, n, i)) || (yield this.gp._storage.clearContext(fe(this, z, "f"), this.gp.platform.saveFormat.isPlatformSave), fe(this, K, "f")[this.credentials] = !0), pe(this, V, e.state.secretCode, "f"), this._events.emit("sync:before"), fe(this, J, "f").call(this, this._authInfo), yield this.gp._storage.savePlayer(this.toJSON(), !o);
                        const l = Date.parse(e.sessionStart),
                            h = l > 0 ? Date.parse(this.gp.serverTime) - l : 0;
                        let d = this.stats.playtimeAll + h / 1e3,
                            u = this.stats.playtimeToday + h / 1e3;
                        fe(this, Z, "f").call(this), pe(this, Z, $((e => {
                            d += e / 1e3, u += e / 1e3, d - this.stats.playtimeAll >= 1 && this._syncIncrementVariable(), this.stats.playtimeAll = Math.floor(d), this.stats.playtimeToday = Math.floor(u)
                        })), "f"), fe(this, W, "f").reset(), fe(this, W, "f").markTriggersActivated(e.rewardsData.activatedTriggersNow), fe(this, W, "f").markTriggersClaimed(e.rewardsData.claimedTriggersNow), fe(this, W, "f").markRewardsGiven(e.rewardsData.givenRewards), fe(this, W, "f").markAchievementsUnlocked(e.rewardsData.givenAchievements), fe(this, W, "f").markPurchasesGiven(e.rewardsData.givenProducts), fe(this, W, "f").markSchedulersDaysClaimed(e.rewardsData.claimedSchedulersDaysNow), fe(this, W, "f").setPlayerSegments(e.segments, e.newSegments, e.leftSegments), fe(this, W, "f").setAchievementsList(e.achievementsList), fe(this, W, "f").setPurchasedList(e.purchasesListV2), fe(this, W, "f").setRewardsList(e.rewards), fe(this, W, "f").setTriggersList(e.triggers), fe(this, W, "f").setPlayerSchedulersList(e.playerSchedulers), fe(this, W, "f").setPlayerEventsList(e.playerEvents), fe(this, W, "f").setExperiments(e.experiments), fe(this, W, "f").setUniques(e.uniques)
                    }))
                }, oe = function(e) {
                    return ue(this, void 0, void 0, (function*() {
                        this.isStub ? (this.tempSecredCode = e.secretCode, fe(this, q, "m", ce).call(this, e.secretCode)) : this.tempSecredCode && this.tempSecredCode === e.secretCode && (fe(this, q, "m", ce).call(this, ""), this.tempSecredCode = ""), this.isLoggedInByPlatform = this.playerAdapter.hasCredetials, this.isLoggedIn = this.isLoggedInByPlatform, this.hasAnyCredentials = this.isLoggedIn || !!this.secretCode, this.secretCode && this.secretCode != e.secretCode && fe(this, q, "m", ce).call(this, e.secretCode), this.hasAnyCredentials || (fe(this, q, "m", ce).call(this, e.secretCode), this.hasAnyCredentials = !0)
                    }))
                }, ce = function(e) {
                    this.secretCode = e, this.gp._storage.saveSecretCode(this.secretCode), fe(this, J, "f").call(this, this._authInfo)
                }, le = function(e) {
                    e && this.gp.channels._connect(e)
                }, he = function(e, t, n, i) {
                    return ue(this, void 0, void 0, (function*() {
                        if (e && !fe(this, K, "f")[e]) {
                            const [e] = yield this.gp._storage.extractFromContext(fe(this, z, "f"), !0);
                            if (e && e.id === t) return !1
                        }
                        return !!n || t !== i || !e
                    }))
                }, de([R(300)], ye.prototype, "fetchFields", null), de([R(300)], ye.prototype, "sync", null), de([R(300)], ye.prototype, "load", null);
                class ge extends _.Z {
                    constructor() {
                        super(), document.documentElement.addEventListener("fullscreenchange", (() => {
                            let e = this.isEnabled;
                            this._events.emit("change", e), this._events.emit(e ? "open" : "close")
                        }))
                    }
                    get isEnabled() {
                        return Boolean(document.fullscreenElement || document.webkitFullscreenElement)
                    }
                    open() {
                        this.isEnabled || (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen())
                    }
                    close() {
                        this.isEnabled && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                    }
                    toggle() {
                        this.isEnabled ? this.close() : this.open()
                    }
                }
                var we, be = function(e, t, n, i, r) {
                    if ("m" === i) throw new TypeError("Private method is not writable");
                    if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                };
                class Pe {
                    constructor() {
                        this.counters = [], this.visitParams = {}, this._experimentsVisitParams = {}, this._segmentsVisitParams = {}, we.set(this, 0)
                    }
                    addCounter(e) {
                        return t = this, n = void 0, r = function*() {
                            this.counters.push(e)
                        }, new((i = void 0) || (i = Promise))((function(e, s) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(t) {
                                var n;
                                t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function(e) {
                                    e(n)
                                }))).then(a, o)
                            }
                            c((r = r.apply(t, n || [])).next())
                        }));
                        var t, n, i, r
                    }
                    replaceCounters(e) {
                        this.counters = e
                    }
                    hit(e) {
                        this.counters.forEach((t => t.hit(e)))
                    }
                    goal(e, t) {
                        this.counters.forEach((n => n.goal(e, t)))
                    }
                    setVisitParams(e) {
                        this.visitParams = e,
                            function(e, t, n, i) {
                                if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                            }(this, we, "f") || be(this, we, window.setTimeout((() => {
                                be(this, we, 0, "f");
                                const e = Object.assign(Object.assign(Object.assign({}, this._experimentsVisitParams), this._segmentsVisitParams), this.visitParams);
                                this.counters.forEach((t => t.setVisitParams(e)))
                            }), 100), "f")
                    }
                }
                we = new WeakMap;
                var Ee, Te, Se, _e = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    Ae = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                class Ie extends _.Z {
                    constructor(e, t, n) {
                        super(), this.adapter = e, this.gp = t, this.config = n, Ee.add(this)
                    }
                    get isSupportsShare() {
                        return this.adapter.isSupportsShare
                    }
                    get isSupportsNativeShare() {
                        return this.adapter.isSupportsNativeShare
                    }
                    get isSupportsNativePosts() {
                        return this.adapter.isSupportsNativePosts
                    }
                    get isSupportsNativeInvite() {
                        return this.adapter.isSupportsNativeInvite
                    }
                    get isSupportShareParams() {
                        return this.adapter.isSupportShareParams
                    }
                    get isSupportsNativeCommunityJoin() {
                        return this.adapter.isSupportsNativeCommunityJoin
                    }
                    get canJoinCommunity() {
                        return this.adapter.canJoinCommunity && !!this.communityLink
                    }
                    get communityLink() {
                        return this.adapter.getCommunityLink(Ae(this, Ee, "a", Se))
                    }
                    get shareParams() {
                        return this.adapter.shareParams || {}
                    }
                    _getShareOptions(e) {
                        return _e(this, void 0, void 0, (function*() {
                            return yield this.gp.app.requestGameUrl(), {
                                text: e.text || this.gp.app.title,
                                image: e.image || "",
                                url: e.url || this.gp.app.url
                            }
                        }))
                    }
                    _shareByOverlay(e, t) {
                        var n;
                        return _e(this, void 0, void 0, (function*() {
                            if (this.gp.isMobile) try {
                                const e = yield this._getShareOptions(t), i = Object.assign({}, e);
                                if (e.image) {
                                    const t = yield fetch(e.image).then((e => e.blob()));
                                    i.files = [new File([t], "image.png", {
                                        type: t.type,
                                        lastModified: (new Date).getTime()
                                    })]
                                }
                                const r = window.navigator;
                                if (null === (n = r.canShare) || void 0 === n ? void 0 : n.call(r, i)) return r.share(i)
                            } catch (e) {
                                w.kg.warn(e)
                            }
                            return yield this.gp.loadOverlay(), this.gp.overlay.share(e, yield this._getShareOptions(t))
                        }))
                    }
                    share(e = {}) {
                        return _e(this, void 0, void 0, (function*() {
                            if (!this.isSupportsShare) return this._events.emit("share", !1), !1;
                            const t = this.isSupportsNativeShare ? this.adapter.share(yield this._getShareOptions(e)) : this._shareByOverlay("share", e),
                                n = yield t.catch((() => !1));
                            return this._events.emit("share", n), n
                        }))
                    }
                    post(e = {}) {
                        return _e(this, void 0, void 0, (function*() {
                            if (!this.isSupportsShare) return this._events.emit("post", !1), !1;
                            const t = this.isSupportsNativePosts ? this.adapter.post(yield this._getShareOptions(e)) : this._shareByOverlay("post", e),
                                n = yield t.catch((() => !1));
                            return this._events.emit("post", n), n
                        }))
                    }
                    invite(e = {}) {
                        return _e(this, void 0, void 0, (function*() {
                            if (!this.isSupportsShare) return this._events.emit("invite", !1), !1;
                            const t = this.isSupportsNativeInvite ? this.adapter.invite(yield this._getShareOptions(e)) : this._shareByOverlay("invite", e),
                                n = yield t.catch((() => !1));
                            return this._events.emit("invite", n), n
                        }))
                    }
                    joinCommunity() {
                        return _e(this, void 0, void 0, (function*() {
                            if (!this.canJoinCommunity) return this._events.emit("joinCommunity", !1), !1;
                            let e = !0;
                            return this.isSupportsNativeCommunityJoin && (e = yield this.adapter.joinCommunity(Ae(this, Ee, "a", Te))), window.open(this.communityLink, "_blank"), this._events.emit("joinCommunity", e), e
                        }))
                    }
                    addShareParamsToUrl(e, t = {}) {
                        return this.adapter.addShareParamsToUrl(e, t)
                    }
                    makeShareUrl(e = {}) {
                        return !!this.isSupportShareParams && (0 === Object.keys(e).length ? this.gp.app.url : this.adapter.makeShareUrl(e))
                    }
                    getShareParam(e) {
                        var t;
                        return !!this.isSupportShareParams && (null !== (t = this.adapter.getShareParam(e)) && void 0 !== t ? t : "")
                    }
                }
                Ee = new WeakSet, Te = function() {
                    return this.config.platformConfig.communityLinks[this.gp.language] || this.config.platformConfig.communityLinks.en || ""
                }, Se = function() {
                    return Ae(this, Ee, "a", Te) || this.config.config.communityLinks[this.gp.language] || this.config.config.communityLinks.en || ""
                };
                var Ce = n(2954),
                    ke = n(3607),
                    Re = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    };

                function Oe() {
                    var e;
                    return Re(this, void 0, void 0, (function*() {
                        const t = new URL(window.location.href),
                            {
                                searchParams: n,
                                hostname: i,
                                hash: r
                            } = t,
                            {
                                platformType: s
                            } = function() {
                                const {
                                    platformType: e
                                } = window.__GS_BOOT_CONFIG__ || {};
                                return {
                                    platformType: e
                                }
                            }(),
                            a = yield function() {
                                return Re(this, void 0, void 0, (function*() {
                                    const e = (0, ke._X)(),
                                        {
                                            cordova: t
                                        } = window;
                                    if (t) try {
                                        yield function() {
                                            const e = (0, ke._X)({
                                                timeout: 5e3
                                            });
                                            return document.addEventListener("deviceready", (() => e.done()), !1), e.ready
                                        }();
                                        const {
                                            device: n
                                        } = window;
                                        "Android" === (null == n ? void 0 : n.platform) ? e.done(!0): t.exec((() => {
                                            e.done(!0)
                                        }), (() => {
                                            e.done(!1)
                                        }), "GooglePlayServicesChecker", "check", [])
                                    } catch (t) {
                                        console.warn(t), e.done(!1)
                                    } else e.done(!1);
                                    return e.ready
                                }))
                            }();
                        return function(e) {
                            return !!e.hostname.includes(["games", "s3", "yandex", "net"].join(".")) || !!e.hash.includes("origin=https") && (e.hash.includes("app-id=") || e.searchParams.has("app-id"))
                        }(t) ? {
                            platformType: M.z.YANDEX
                        } : i.includes("gamemonetize.co") ? {
                            platformType: M.z.GAME_MONETIZE
                        } : i.includes("gamedistribution.co") ? {
                            platformType: M.z.GAME_DISTRIBUTION
                        } : i.includes("crazygames.com") ? {
                            platformType: M.z.CRAZY_GAMES
                        } : i.includes(".gamepix.com") ? {
                            platformType: M.z.GAMEPIX
                        } : i.includes(".wgplayground.com") ? {
                            platformType: M.z.WG_PLAYGROUND
                        } : i.includes("poki.com") || n.has("pokiDebug") || i.includes("poki-gdn.com") ? {
                            platformType: M.z.POKI
                        } : n.has("api_id") && n.has("viewer_id") && n.has("auth_key") || n.get("vk_user_id") && n.get("sign") && n.get("vk_app_id") ? {
                            platformType: M.z.VK
                        } : n.has("auth_sig") && n.has("session_key") ? {
                            platformType: M.z.OK
                        } : n.has("gp_beeline_token") ? {
                            platformType: M.z.BEELINE
                        } : i.includes(".konggames.com") || n.has("kongregate_game_version") && n.has("kongregate_host") ? {
                            platformType: M.z.KONGREGATE
                        } : i.includes("static.developer.sberdevices.ru") || Array.isArray(window.appInitialData) && window.appInitialData.some((e => "app_context" === (null == e ? void 0 : e.type))) ? {
                            platformType: M.z.SMARTMARKET
                        } : function(e) {
                            const {
                                searchParams: t
                            } = e;
                            if (!(t.get("lang") || "").includes("_")) return !1;
                            if (!t.has("currency")) return !1;
                            if (t.has("uid") && t.has("sign") && t.has("appid")) return !0;
                            const n = t.get("status");
                            return Number(t.get("appid")) > 0 || n.length > 0 && !Number.isNaN(t.get("status"))
                        }(t) ? {
                            platformType: M.z.VK_PLAY
                        } : s ? {
                            platformType: s
                        } : a ? {
                            platformType: M.z.GOOGLE_PLAY
                        } : "true" === n.get("telegram") && "true" === n.get("playdeck") ? {
                            platformType: M.z.PLAYDECK
                        } : r.includes("tgWebAppData") || r.includes("tgWebAppPlatform") ? {
                            platformType: M.z.TELEGRAM
                        } : function(e) {
                            var t, n;
                            const i = null === (t = e.get("_platform")) || void 0 === t ? void 0 : t.toUpperCase(),
                                r = null === (n = e.get("_platform-key")) || void 0 === n ? void 0 : n.trim();
                            return i === M.z.PARTNER && (r.startsWith("gp-") || r.startsWith("ss-"))
                        }(n) ? {
                            platformType: M.z.PARTNER,
                            platformKey: n.get("_platform-key") || ""
                        } : function(e) {
                            var t, n;
                            const i = null === (t = e.get("_platform")) || void 0 === t ? void 0 : t.toUpperCase(),
                                r = null === (n = e.get("_platform-key")) || void 0 === n ? void 0 : n.trim();
                            return i === M.z.CUSTOM && !!r
                        }(n) ? {
                            platformType: M.z.CUSTOM,
                            platformKey: n.get("_platform-key") || ""
                        } : n.has("apiId") && n.has("viewerId") && n.has("authKey") ? {
                            platformType: M.z.FOTOSTRANA
                        } : i.includes(".y8.com") ? {
                            platformType: M.z.Y8
                        } : function(e) {
                            return !!e.hostname.includes(["coolmathgames", "com"].join("."))
                        }(t) ? {
                            platformType: M.z.COOLMATH
                        } : (null === (e = n.get("_platform")) || void 0 === e ? void 0 : e.toUpperCase()) !== M.z.CUSTOM ? {
                            platformType: n.get("_platform")
                        } : {
                            platformType: M.z.NONE
                        }
                    }))
                }
                var De = n(3080),
                    Ne = n(2231),
                    xe = n(2665),
                    Le = n(4687),
                    Fe = n(1437),
                    Me = n(4835),
                    je = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    };
                const Ue = e => {
                        var t;
                        return (null === (t = null == e ? void 0 : e.resources[0]) || void 0 === t ? void 0 : t.src) || ""
                    },
                    $e = e => {
                        var {
                            assets: t
                        } = e, n = function(e, t) {
                            var n = {};
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var r = 0;
                                for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                            }
                            return n
                        }(e, ["assets"]);
                        return Object.assign(Object.assign({}, n), {
                            icon: Ue(t.icon)
                        })
                    },
                    Ge = [M.z.YANDEX, M.z.VK, M.z.OK, M.z.GAMEPIX, M.z.Y8];
                class Be extends _.Z {
                    constructor(e, t) {
                        super(), this.gp = e, this.adapter = t
                    }
                    get isAvailable() {
                        return this.gp.platform.isExternalLinksAllowed || Ge.includes(this.gp.platform.type)
                    }
                    open({
                        id: e,
                        tag: t,
                        shareParams: n
                    } = {
                        tag: "ALL",
                        shareParams: {}
                    }) {
                        return je(this, void 0, void 0, (function*() {
                            if (this.isAvailable) {
                                this.gp.loader.inc();
                                try {
                                    const [i] = yield Promise.all([this.fetch({
                                        id: e,
                                        tag: t,
                                        shareParams: n
                                    }), this.gp.loadOverlay(), (0, Fe.p)(Me.Z.app.trophy).catch(w.kg.error)]);
                                    this.gp.loader.dec(), i.games.length > 0 && (this._events.emit("open"), yield this.gp.overlay.openGamesCollections(i).catch(w.kg.error), this._events.emit("close"))
                                } catch (e) {
                                    this.gp.loader.dec(), w.kg.error(e)
                                }
                            } else w.kg.warn(`Not available on ${this.gp.platform.type}`)
                        }))
                    }
                    fetch({
                        id: e,
                        tag: t = "ALL",
                        shareParams: n = {}
                    } = {
                        tag: "ALL",
                        shareParams: {}
                    }) {
                        return je(this, void 0, void 0, (function*() {
                            if (!this.isAvailable) return void w.kg.warn(`Not available on ${this.gp.platform.type}`);
                            const i = (0, a._)();
                            this.gp.loader.inc();
                            try {
                                const r = yield this.gp._services.gamesCollectionsService.fetch({
                                    id: e,
                                    tag: t,
                                    urlFrom: this.gp.app.url
                                });
                                if (!r) throw new Error("can't fetch GamesCollections list");
                                const s = yield this.adapter.mapGamesCollections(r.games), a = Object.assign(Object.assign({}, r), {
                                    games: s.filter((e => e.url)).map($e)
                                });
                                Object.keys(n).length > 0 && (a.games = a.games.map((e => Object.assign(Object.assign({}, e), {
                                    url: this.gp.socials.addShareParamsToUrl(e.url, n)
                                })))), a.games || w.kg.warn("empty games collection"), i.done(a), this._events.emit("fetch", a)
                            } catch (e) {
                                i.abort(e), this._events.emit("error:fetch")
                            } finally {
                                this.gp.loader.dec()
                            }
                            return i.ready
                        }))
                    }
                }
                var qe, Ve, We, ze = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    Ye = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                class Ke {
                    constructor(e) {
                        this.queryBuilder = e, qe.set(this, {}), Ve.set(this, (function(e = {}, t) {
                            return ze(this, void 0, void 0, (function*() {
                                const n = (0, a._)();
                                e.limit = e.limit || 10;
                                try {
                                    const i = yield t(e), r = i.length === e.limit;
                                    Ye(this, qe, "f")[this.queryBuilder(e)] = Object.assign(Object.assign({}, e), {
                                        canLoadMore: r
                                    }), n.done({
                                        items: i,
                                        canLoadMore: r
                                    })
                                } catch (e) {
                                    n.abort(e)
                                }
                                return n.ready
                            }))
                        })), We.set(this, (function(e = {}, t) {
                            return ze(this, void 0, void 0, (function*() {
                                const n = this.queryBuilder(e),
                                    i = Ye(this, qe, "f")[n];
                                if (!i) return yield this.fetch(e, t);
                                if (!i.canLoadMore) return {
                                    items: [],
                                    canLoadMore: !1
                                };
                                const r = (0, a._)(),
                                    s = (i.offset || 0) + (i.limit || 0);
                                i.limit = e.limit || i.limit;
                                const o = Object.assign({}, Ye(this, qe, "f")[n]),
                                    c = Object.assign(Object.assign({}, i), {
                                        offset: s
                                    });
                                Ye(this, qe, "f")[n] = c;
                                try {
                                    const e = yield t(c), i = e.length === c.limit;
                                    Ye(this, qe, "f")[n].canLoadMore = i, r.done({
                                        items: e,
                                        canLoadMore: i
                                    })
                                } catch (e) {
                                    Ye(this, qe, "f")[n] = o, r.abort(e)
                                }
                                return r.ready
                            }))
                        }))
                    }
                    fetch(e = {}, t) {
                        return Ye(this, Ve, "f").call(this, e, t)
                    }
                    fetchMore(e = {}, t) {
                        return ze(this, void 0, void 0, (function*() {
                            return Ye(this, We, "f").call(this, e, t)
                        }))
                    }
                }
                qe = new WeakMap, Ve = new WeakMap, We = new WeakMap;
                var Je, Ze, Xe, He, Qe, et, tt, nt, it, rt, st = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    at = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    },
                    ot = function(e, t) {
                        var n = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    };
                class ct extends _.Z {
                    constructor(e, t) {
                        super(), this.gp = e, this._config = t, Je.set(this, new Ke((e => ["channels", (e.tags || []).join(","), e.search || "", (e.ids || []).join(","), e.onlyJoined || !1, e.onlyOwned || !1].join(":")))), Ze.set(this, new Ke((e => `channelsMembers:${e.channelId}`))), Xe.set(this, new Ke((e => `invites:${e.channelId}`))), He.set(this, new Ke((e => `channelsInvites:${e.channelId}`))), Qe.set(this, new Ke((e => "sentInvites"))), et.set(this, new Ke((e => `channelsJoinRequests:${e.channelId}`))), tt.set(this, new Ke((e => "sentJoinRequests"))), nt.set(this, new Ke((e => `channelsJoinRequests:${e.channelId}:${(e.tags||[]).join(",")}`))), it.set(this, new Ke((e => `channelsJoinRequests:${e.playerId}:${(e.tags||[]).join(",")}`))), rt.set(this, new Ke((e => `channelsJoinRequests:${e.playerId}:${(e.tags||[]).join(",")}`)))
                    }
                    get canBeOnline() {
                        return this._config.acl.canConnectOnline
                    }
                    get isMainChatEnabled() {
                        return this._config.project.enableMainChat && this.mainChatId > 0
                    }
                    get mainChatId() {
                        return this._config.project.mainChatId
                    }
                    _handleResponse(e, t) {
                        e.then((e => this._events.emit(t, e))), e.catch((e => {
                            w.kg.error(e), this._events.emit(`error:${t}`, e)
                        }))
                    }
                    sendInvite(e) {
                        const t = this.gp._services.channelsService.invites.sendInvite(e);
                        return this._handleResponse(t, "sendInvite"), t
                    }
                    cancelInvite(e) {
                        const t = this.gp._services.channelsService.invites.cancelInvite(e);
                        return this._handleResponse(t, "cancelInvite"), t
                    }
                    acceptInvite(e) {
                        const t = this.gp._services.channelsService.invites.acceptInvite(e);
                        return this._handleResponse(t, "acceptInvite"), t
                    }
                    rejectInvite(e) {
                        const t = this.gp._services.channelsService.invites.rejectInvite(e);
                        return this._handleResponse(t, "rejectInvite"), t
                    }
                    join(e) {
                        const t = this.gp._services.channelsService.members.join(e);
                        return this._handleResponse(t, "join"), t
                    }
                    leave(e) {
                        const t = this.gp._services.channelsService.members.leave(e);
                        return this._handleResponse(t, "leave"), t
                    }
                    cancelJoin(e) {
                        const t = this.gp._services.channelsService.members.cancelJoin(e);
                        return this._handleResponse(t, "cancelJoin"), t
                    }
                    acceptJoinRequest(e) {
                        const t = this.gp._services.channelsService.joinRequests.acceptJoinRequest(e);
                        return this._handleResponse(t, "acceptJoinRequest"), t
                    }
                    rejectJoinRequest(e) {
                        const t = this.gp._services.channelsService.joinRequests.rejectJoinRequest(e);
                        return this._handleResponse(t, "rejectJoinRequest"), t
                    }
                    fetchMessages(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, nt, "f").fetch(e, (e => this.gp._services.channelsService.messages.fetchMessages(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchMessages"), t
                        }))
                    }
                    fetchMoreMessages(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, nt, "f").fetchMore(e, (e => this.gp._services.channelsService.messages.fetchMessages(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchMoreMessages"), t
                        }))
                    }
                    fetchPersonalMessages(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, it, "f").fetch(e, (e => this.gp._services.channelsService.messages.fetchPersonalMessages(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchPersonalMessages"), t
                        }))
                    }
                    fetchMorePersonalMessages(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, it, "f").fetchMore(e, (e => this.gp._services.channelsService.messages.fetchPersonalMessages(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchMorePersonalMessages"), t
                        }))
                    }
                    fetchFeedMessages(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, rt, "f").fetch(e, (e => this.gp._services.channelsService.messages.fetchFeedMessages(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchFeedMessages"), t
                        }))
                    }
                    fetchMoreFeedMessages(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, rt, "f").fetchMore(e, (e => this.gp._services.channelsService.messages.fetchFeedMessages(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchMoreFeedMessages"), t
                        }))
                    }
                    sendMessage(e) {
                        const t = this.gp._services.channelsService.messages.sendMessage(e);
                        return this._handleResponse(t, "sendMessage"), t
                    }
                    sendFeedMessage(e) {
                        const t = this.gp._services.channelsService.messages.sendFeedMessage(e);
                        return this._handleResponse(t, "sendMessage"), t
                    }
                    sendPersonalMessage(e) {
                        const t = this.gp._services.channelsService.messages.sendPersonalMessage(e);
                        return this._handleResponse(t, "sendMessage"), t
                    }
                    editMessage(e) {
                        const t = this.gp._services.channelsService.messages.editMessage(e);
                        return this._handleResponse(t, "editMessage"), t
                    }
                    deleteMessage(e) {
                        const t = this.gp._services.channelsService.messages.deleteMessage(e);
                        return this._handleResponse(t, "deleteMessage"), t
                    }
                    mute(e) {
                        var {
                            seconds: t = 0
                        } = e;
                        const n = ot(e, ["seconds"]);
                        if (t > 0) {
                            const e = new Date;
                            e.setSeconds(e.getSeconds() + t), n.unmuteAt = e.toISOString()
                        }
                        const i = this.gp._services.channelsService.members.mute(n);
                        return this._handleResponse(i, "mute"), i
                    }
                    unmute(e) {
                        const t = this.gp._services.channelsService.members.unmute(e);
                        return this._handleResponse(t, "unmute"), t
                    }
                    fetchMembers(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, Ze, "f").fetch(e, (e => this.gp._services.channelsService.members.fetchMembers(e).then((e => e.players))));
                            return this._handleResponse(t, "fetchMembers"), t
                        }))
                    }
                    fetchMoreMembers(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, Ze, "f").fetchMore(e, (e => this.gp._services.channelsService.members.fetchMembers(e).then((e => e.players))));
                            return this._handleResponse(t, "fetchMoreMembers"), t
                        }))
                    }
                    fetchInvites(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, Xe, "f").fetch(e, (e => this.gp._services.channelsService.invites.fetchInvites(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchInvites"), t
                        }))
                    }
                    fetchMoreInvites(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, Xe, "f").fetchMore(e, (e => this.gp._services.channelsService.invites.fetchInvites(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchMoreInvites"), t
                        }))
                    }
                    fetchChannelInvites(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, He, "f").fetch(e, (e => this.gp._services.channelsService.invites.fetchChannelInvites(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchChannelInvites"), t
                        }))
                    }
                    fetchMoreChannelInvites(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, He, "f").fetchMore(e, (e => this.gp._services.channelsService.invites.fetchChannelInvites(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchMoreChannelInvites"), t
                        }))
                    }
                    fetchSentInvites(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, Qe, "f").fetch(e, (e => this.gp._services.channelsService.invites.fetchSentInvites(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchSentInvites"), t
                        }))
                    }
                    fetchMoreSentInvites(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, Qe, "f").fetchMore(e, (e => this.gp._services.channelsService.invites.fetchSentInvites(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchMoreSentInvites"), t
                        }))
                    }
                    fetchJoinRequests(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, et, "f").fetch(e, (e => this.gp._services.channelsService.joinRequests.fetchJoinRequests(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchJoinRequests"), t
                        }))
                    }
                    fetchMoreJoinRequests(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, et, "f").fetchMore(e, (e => this.gp._services.channelsService.joinRequests.fetchJoinRequests(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchMoreJoinRequests"), t
                        }))
                    }
                    fetchSentJoinRequests(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, tt, "f").fetch(e, (e => this.gp._services.channelsService.joinRequests.fetchSentJoinRequests(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchSentJoinRequests"), t
                        }))
                    }
                    fetchMoreSentJoinRequests(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = at(this, tt, "f").fetchMore(e, (e => this.gp._services.channelsService.joinRequests.fetchSentJoinRequests(e).then((e => e.items))));
                            return this._handleResponse(t, "fetchMoreSentJoinRequests"), t
                        }))
                    }
                    kick(e) {
                        const t = this.gp._services.channelsService.members.kick(e);
                        return this._handleResponse(t, "kick"), t
                    }
                    openChat({
                        id: e,
                        tags: t
                    } = {
                        id: 0,
                        tags: []
                    }) {
                        return st(this, void 0, void 0, (function*() {
                            let n = e;
                            if (!e && this._config.project.enableMainChat && (n = this._config.project.mainChatId), n) {
                                this.gp.loader.inc();
                                try {
                                    const e = this.gp.loadOverlay(),
                                        i = yield this.fetchChannel({
                                            channelId: n
                                        });
                                    if (!(i.ownerId === this.gp.player.id ? i.ownerAcl : i.memberAcl).canViewMessages) throw w.kg.error("access_denied"), Error("access_denied");
                                    i.isJoined || (yield this.join({
                                        channelId: n
                                    }), i.membersCount += 1, i.membersOnlineCount += 1, i.isJoined = !0);
                                    const [r] = yield Promise.all([this.fetchMessages({
                                        channelId: n,
                                        limit: 100,
                                        tags: t
                                    }), e]);
                                    this.gp.loader.dec(), this._events.emit("openChat"), yield this.openChatOverlay(i, r, t), this._events.emit("closeChat")
                                } catch (e) {
                                    this._events.emit("error:openChat", e), this.gp.loader.dec(), w.kg.error(e)
                                }
                            } else w.kg.error("empty_channel_id")
                        }))
                    }
                    openPersonalChat({
                        playerId: e,
                        tags: t
                    } = {
                        playerId: 0,
                        tags: []
                    }) {
                        return st(this, void 0, void 0, (function*() {
                            if (e) {
                                this.gp.loader.inc();
                                try {
                                    const n = this.gp.loadOverlay(),
                                        i = yield this.fetchPersonalChannel({
                                            playerId: e
                                        }), [r] = yield Promise.all([this.fetchPersonalMessages({
                                            playerId: e,
                                            limit: 100,
                                            tags: t
                                        }), n]);
                                    this.gp.loader.dec(), this._events.emit("openChat"), yield this.openChatOverlay(i, r, t), this._events.emit("closeChat")
                                } catch (e) {
                                    this._events.emit("error:openChat", e), this.gp.loader.dec(), w.kg.error(e)
                                }
                            } else w.kg.error("empty_player_id")
                        }))
                    }
                    openFeed({
                        playerId: e,
                        tags: t
                    } = {
                        playerId: 0,
                        tags: []
                    }) {
                        return st(this, void 0, void 0, (function*() {
                            if (e) {
                                this.gp.loader.inc();
                                try {
                                    const n = this.gp.loadOverlay(),
                                        i = yield this.fetchFeedChannel({
                                            playerId: e
                                        }), [r] = yield Promise.all([this.fetchFeedMessages({
                                            playerId: e,
                                            limit: 100,
                                            tags: t
                                        }), n]);
                                    this.gp.loader.dec(), this._events.emit("openChat"), yield this.openChatOverlay(i, r, t), this._events.emit("closeChat")
                                } catch (e) {
                                    this._events.emit("error:openFeed", e), this.gp.loader.dec(), w.kg.error(e)
                                }
                            } else w.kg.error("empty_player_id")
                        }))
                    }
                    openChatOverlay(e, t, n) {
                        return st(this, void 0, void 0, (function*() {
                            const {
                                playerId: i,
                                activeOverlay: r
                            } = this.processTags(e.tags, this.gp.player.id), s = i ? parseInt(i, 10) : this.gp.player.id, a = {
                                playerId: s,
                                tags: n,
                                channelName: e.name,
                                channelType: r
                            };
                            if ("personal" === r || "feed" === r) {
                                const e = yield this.gp.players.fetch({
                                    ids: [s]
                                }), [t] = e.players;
                                if (!t) throw "player_not_found";
                                a.channelName = t.state.name || null
                            }
                            yield this.gp.overlay.openChat(e, t, a)
                        }))
                    }
                    processTags(e, t) {
                        let n = "channel",
                            i = "";
                        return e.forEach((e => {
                            e.startsWith("@feed:") ? (n = "feed", i = e.split(":").filter((e => !isNaN(parseInt(e, 10)))).join("")) : e.startsWith("@personal:") && (n = "personal", i = e.split(":").filter((e => !isNaN(parseInt(e, 10)))).filter((e => e !== t.toString())).join(""))
                        })), {
                            playerId: i,
                            activeOverlay: n
                        }
                    }
                    fetchChannel(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = this.gp._services.channelsService.channels.fetchChannel(e);
                            return this._handleResponse(t, "fetchChannel"), t
                        }))
                    }
                    fetchPersonalChannel(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = this.gp._services.channelsService.channels.fetchPersonalChannel(e);
                            return this._handleResponse(t, "fetchPersonalChannel"), t
                        }))
                    }
                    fetchFeedChannel(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = this.gp._services.channelsService.channels.fetchFeedChannel(e);
                            return this._handleResponse(t, "fetchFeedChannel"), t
                        }))
                    }
                    fetchChannels(e) {
                        var {
                            ids: t = []
                        } = e, n = ot(e, ["ids"]);
                        return st(this, void 0, void 0, (function*() {
                            const e = n;
                            (t = t.map((e => Number(String(e).trim()))).filter(Boolean)).length > 0 && (e.ids = t);
                            const i = at(this, Je, "f").fetch(n, (e => this.gp._services.channelsService.channels.fetchChannels(e).then((e => e.items))));
                            return this._handleResponse(i, "fetchChannels"), i
                        }))
                    }
                    fetchMoreChannels(e) {
                        var {
                            ids: t = []
                        } = e, n = ot(e, ["ids"]);
                        return st(this, void 0, void 0, (function*() {
                            const e = n;
                            (t = null == t ? void 0 : t.map((e => Number(String(e).trim()))).filter(Boolean)).length > 0 && (e.ids = t);
                            const i = at(this, Je, "f").fetchMore(n, (e => this.gp._services.channelsService.channels.fetchChannels(e).then((e => e.items))));
                            return this._handleResponse(i, "fetchMoreChannels"), i
                        }))
                    }
                    createChannel(e) {
                        const t = this.gp._services.channelsService.channels.createChannel(e);
                        return this._handleResponse(t, "createChannel"), t
                    }
                    updateChannel(e) {
                        const t = this.gp._services.channelsService.channels.updateChannel(e);
                        return this._handleResponse(t, "updateChannel"), t
                    }
                    deleteChannel(e) {
                        const t = this.gp._services.channelsService.channels.deleteChannel(e);
                        return this._handleResponse(t, "deleteChannel"), t
                    }
                    _connect(e) {
                        return st(this, void 0, void 0, (function*() {
                            const t = () => this.gp._services.channelsService.ping(e);
                            if (window.setInterval(t, 3e4), t(), !this.canBeOnline) return;
                            const n = new TextDecoder,
                                i = yield this.gp._services.channelsService.createCentrifugeClient(e, "wss://ws.eponesh.com/connection/websocket?format=protobuf", "https://ws.eponesh.com/connection/http_stream?format=protobuf", "https://ws.eponesh.com/connection/sse?format=protobuf");
                            i && i.on("connected", (e => {
                                console.info(`connected over ${e.transport}`)
                            })).on("connecting", (function(e) {
                                console.info(`connecting: ${e.code}, ${e.reason}`)
                            })).on("disconnected", (function(e) {
                                console.info(`disconnected: ${e.code}, ${e.reason}`)
                            })).on("publication", (e => {
                                const t = JSON.parse(n.decode(e.data));
                                (null == t ? void 0 : t.type) && (this._events.emit("event", t), this._events.emit(t.type, t.data))
                            })).connect()
                        }))
                    }
                }
                Je = new WeakMap, Ze = new WeakMap, Xe = new WeakMap, He = new WeakMap, Qe = new WeakMap, et = new WeakMap, tt = new WeakMap, nt = new WeakMap, it = new WeakMap, rt = new WeakMap;
                var lt = function(e, t, n, i) {
                    return new(n || (n = Promise))((function(r, s) {
                        function a(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function o(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, o)
                        }
                        c((i = i.apply(e, t || [])).next())
                    }))
                };
                class ht extends _.Z {
                    constructor(e) {
                        super(), this.gp = e
                    }
                    open({
                        type: e
                    }) {
                        return lt(this, void 0, void 0, (function*() {
                            this.gp.loader.inc();
                            try {
                                const [t] = yield Promise.all([this.fetch({
                                    type: e
                                }), this.gp.loadOverlay(), (0, Fe.p)(Me.Z.app.trophy).catch(w.kg.error)]);
                                this.gp.loader.dec(), t ? (t.format = "HTML", this._events.emit("open"), yield this.gp.overlay.openDocument(t).catch(w.kg.error), this._events.emit("close")) : w.kg.error(new Error("document not found"))
                            } catch (e) {
                                this.gp.loader.dec(), w.kg.error(e)
                            }
                        }))
                    }
                    fetch({
                        type: e,
                        format: t = "HTML"
                    }) {
                        return lt(this, void 0, void 0, (function*() {
                            const n = (0, a._)();
                            this.gp.loader.inc();
                            try {
                                const i = yield this.gp._services.documentsService.fetch({
                                    type: e,
                                    format: t
                                });
                                if (!i) throw new Error("can't fetch privacy policy");
                                i.format = t, n.done(i), this._events.emit("fetch", i)
                            } catch (e) {
                                n.abort(e), this._events.emit("error:fetch", e)
                            } finally {
                                this.gp.loader.dec()
                            }
                            return n.ready
                        }))
                    }
                }
                var dt, ut = function(e, t, n, i) {
                        var r, s = arguments.length,
                            a = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
                        else
                            for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
                        return s > 3 && a && Object.defineProperty(t, n, a), a
                    },
                    pt = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                const ft = {
                    data: e => String(e || ""),
                    stats: e => Number(e) || 0,
                    flag: e => Boolean(e) || !1,
                    image: e => String(e || ""),
                    doc_html: e => String(e || ""),
                    file: e => String(e || "")
                };
                class mt extends _.Z {
                    constructor(e, t, n) {
                        super(), this.gp = e, this.platformAdapter = t, this.state = {}, this.list = [], dt.set(this, (function(e) {
                            this.state = {}, this.list = e, e.forEach((e => {
                                var t;
                                const n = (null === (t = ft[e.type]) || void 0 === t ? void 0 : t.call(ft, e.value)) || e.value;
                                this.state[e.key] = n
                            })), this._events.emit("change")
                        })), pt(this, dt, "f").call(this, n)
                    }
                    get isPlatformVariablesAvailable() {
                        return this.platformAdapter.isSupportsRemoteVariables
                    }
                    get(e) {
                        return this.state[e]
                    }
                    has(e) {
                        return Boolean(this.get(e))
                    }
                    type(e) {
                        var t;
                        return (null === (t = this.list.find((t => t.key === e))) || void 0 === t ? void 0 : t.type) || "data"
                    }
                    fetch() {
                        return e = this, t = void 0, i = function*() {
                            try {
                                const e = (yield this.gp._services.projectService.fetchVariables()).items;
                                return pt(this, dt, "f").call(this, e), this._events.emit("fetch", e), e
                            } catch (e) {
                                w.kg.error(e), this._events.emit("error:fetch", e)
                            }
                        }, new((n = void 0) || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }));
                        var e, t, n, i
                    }
                    fetchPlatformVariables(e) {
                        const t = this.platformAdapter.getVariables(e);
                        return t.then((e => this._events.emit("fetchPlatformVariables", e))).catch((e => {
                            w.kg.error(e), this._events.emit("error:fetchPlatformVariables", (null == e ? void 0 : e.message) || e)
                        })), t
                    }
                }
                dt = new WeakMap, ut([R(300)], mt.prototype, "fetch", null), ut([R(300)], mt.prototype, "fetchPlatformVariables", null);
                var vt, yt, gt, wt, bt = n(6041),
                    Pt = function(e, t, n, i) {
                        var r, s = arguments.length,
                            a = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
                        else
                            for (var o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
                        return s > 3 && a && Object.defineProperty(t, n, a), a
                    },
                    Et = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    Tt = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    },
                    St = function(e, t) {
                        var n = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    };
                const _t = "empty_url",
                    At = "empty_content",
                    It = "empty_filename";
                class Ct extends Ke {
                    constructor() {
                        super(kt), vt.set(this, void 0), yt.set(this, {}), gt.set(this, (function(e, t) {
                            var {
                                url: n,
                                filename: i
                            } = e, r = St(e, ["url", "filename"]);
                            return Et(this, void 0, void 0, (function*() {
                                if (!n) throw w.kg.error(_t), new Error(_t);
                                if (!i) throw w.kg.error(It), new Error(It);
                                if (Tt(this, yt, "f")[n]) {
                                    const e = new File([Tt(this, yt, "f")[n]], i, Tt(this, yt, "f")[n]);
                                    return t(Object.assign(Object.assign({}, r), {
                                        file: e
                                    }))
                                }
                                try {
                                    const e = yield fetch(n).then((e => e.blob()));
                                    return t(Object.assign(Object.assign({}, r), {
                                        file: new File([e], i, {
                                            type: e.type
                                        })
                                    }))
                                } catch (e) {
                                    throw w.kg.error(e), e
                                }
                            }))
                        })), wt.set(this, (function(e, t) {
                            return Et(this, void 0, void 0, (function*() {
                                const {
                                    content: n,
                                    filename: i
                                } = e, r = St(e, ["content", "filename"]);
                                if (!n.trim()) throw w.kg.error(At), new Error(At);
                                if (!i) throw w.kg.error(It), new Error(It);
                                return t(Object.assign(Object.assign({}, r), {
                                    file: new File([n], i)
                                }))
                            }))
                        }));
                        const {
                            openFile: e
                        } = function() {
                            let e = null;
                            const t = document.createElement("input");
                            t.type = "file", t.id = "gp-file-input", t.style.cssText = "position: fixed; top: -999px; left: -999px; z-index: 0;", t.onchange = e => i(e.target), t.tabIndex = -1, document.body.appendChild(t);
                            const n = () => {
                                    setTimeout((() => e.done(null)), 1e3), document.body.removeEventListener("focus", n, !0)
                                },
                                i = t => {
                                    const [i] = t.files ? Array.from(t.files) : [];
                                    document.body.removeEventListener("focus", n, !0), e.done(i)
                                };
                            return {
                                input: t,
                                openFile: (i = "*") => {
                                    return r = this, s = void 0, c = function*() {
                                        null == e || e.abort(), e = (0, a._)(), t.accept = i, t.click(), document.body.addEventListener("focus", n, !0);
                                        const r = yield e.ready;
                                        if (r) return r;
                                        throw new Error("cancelled")
                                    }, new((o = void 0) || (o = Promise))((function(e, t) {
                                        function n(e) {
                                            try {
                                                a(c.next(e))
                                            } catch (e) {
                                                t(e)
                                            }
                                        }

                                        function i(e) {
                                            try {
                                                a(c.throw(e))
                                            } catch (e) {
                                                t(e)
                                            }
                                        }

                                        function a(t) {
                                            var r;
                                            t.done ? e(t.value) : (r = t.value, r instanceof o ? r : new o((function(e) {
                                                e(r)
                                            }))).then(n, i)
                                        }
                                        a((c = c.apply(r, s || [])).next())
                                    }));
                                    var r, s, o, c
                                }
                            }
                        }();
                        ! function(e, t, n, i, r) {
                            if ("m" === i) throw new TypeError("Private method is not writable");
                            if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                            "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                        }(this, vt, e, "f")
                    }
                    chooseFile(e) {
                        return Et(this, void 0, void 0, (function*() {
                            const t = (0, a._)();
                            try {
                                const n = yield Tt(this, vt, "f").call(this, e), i = URL.createObjectURL(n);
                                Tt(this, yt, "f")[i] = n, t.done({
                                    file: n,
                                    tempUrl: i
                                })
                            } catch (e) {
                                t.abort(e)
                            }
                            return t.ready
                        }))
                    }
                    upload(e, t) {
                        return Et(this, void 0, void 0, (function*() {
                            const n = (0, a._)();
                            try {
                                e.file || (e.file = yield Tt(this, vt, "f").call(this, e.accept));
                                const i = yield t(e);
                                n.done(i)
                            } catch (e) {
                                n.abort(e)
                            }
                            return n.ready
                        }))
                    }
                    uploadUrl(e, t) {
                        return Et(this, void 0, void 0, (function*() {
                            return Tt(this, gt, "f").call(this, e, t)
                        }))
                    }
                    uploadContent(e, t) {
                        return Et(this, void 0, void 0, (function*() {
                            return Tt(this, wt, "f").call(this, e, t)
                        }))
                    }
                }

                function kt(e) {
                    return `p${e.playerId||0}:${(e.tags||[]).join(",")}`
                }
                vt = new WeakMap, yt = new WeakMap, gt = new WeakMap, wt = new WeakMap, Pt([R(300)], Ct.prototype, "uploadUrl", null), Pt([R(300)], Ct.prototype, "uploadContent", null);
                var Rt, Ot = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    Dt = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                const Nt = "image/png,.jpeg,.jpg";
                class xt extends _.Z {
                    constructor(e, t) {
                        super(), this.gp = e, this.acl = t, Rt.set(this, new Ct)
                    }
                    get canUpload() {
                        return this.acl.canUploadImages
                    }
                    resize(e, t, n, i) {
                        return (0, bt.Z)(e, t, n, i)
                    }
                    chooseFile() {
                        return Ot(this, void 0, void 0, (function*() {
                            const e = Dt(this, Rt, "f").chooseFile(Nt);
                            return e.then((e => this._events.emit("choose", e))), e.catch((e => this._events.emit("error:choose", e))), e
                        }))
                    }
                    upload(e = {}) {
                        return Ot(this, void 0, void 0, (function*() {
                            const t = Dt(this, Rt, "f").upload(Object.assign(Object.assign({}, e), {
                                accept: Nt
                            }), (({
                                file: e,
                                tags: t
                            }) => Ot(this, void 0, void 0, (function*() {
                                const n = this.gp.app.title,
                                    i = yield this.gp.platform.requestPermissions({
                                        allowUploadImages: !0
                                    });
                                if (!i.success) throw new Error("permission_not_allowed_by_user");
                                if (this.gp.platform.isSupportsImageUploading) {
                                    const r = yield this.gp.platform.uploadImage({
                                        file: e,
                                        tags: t,
                                        albumName: n,
                                        accessToken: i.payload.token
                                    });
                                    return this.gp._services.imagesService.saveByURL({
                                        src: r.src,
                                        tags: t,
                                        crop: {
                                            height: r.height,
                                            width: r.width,
                                            left: 0,
                                            top: 0
                                        }
                                    })
                                }
                                return this.gp._services.imagesService.upload({
                                    file: e,
                                    tags: t,
                                    accessPayload: i.payload
                                })
                            }))));
                            return this.gp.loader.inc(), t.then((e => this._events.emit("upload", e))), t.catch((e => this._events.emit("error:upload", e))), t.finally((() => this.gp.loader.dec())), t
                        }))
                    }
                    uploadUrl(e = {
                        url: ""
                    }) {
                        return Ot(this, void 0, void 0, (function*() {
                            return Dt(this, Rt, "f").uploadUrl(Object.assign(Object.assign({}, e), {
                                filename: "image.jpeg"
                            }), (e => this.upload(e)))
                        }))
                    }
                    fetch(e = {}) {
                        return Ot(this, void 0, void 0, (function*() {
                            const t = Dt(this, Rt, "f").fetch(e, (e => this.gp._services.imagesService.fetch(e).then((e => e.items))));
                            return this.gp.loader.inc(), t.then((e => this._events.emit("fetch", e))), t.catch((e => this._events.emit("error:fetch", e))), t.finally((() => this.gp.loader.dec())), t
                        }))
                    }
                    fetchMore(e = {}) {
                        return Ot(this, void 0, void 0, (function*() {
                            const t = Dt(this, Rt, "f").fetchMore(e, (e => this.gp._services.imagesService.fetch(e).then((e => e.items))));
                            return this.gp.loader.inc(), t.then((e => this._events.emit("fetchMore", e))), t.catch((e => this._events.emit("error:fetchMore", e))), t.finally((() => this.gp.loader.dec())), t
                        }))
                    }
                }
                Rt = new WeakMap;
                var Lt, Ft = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    Mt = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                class jt extends _.Z {
                    constructor(e, t) {
                        super(), this.gp = e, this.acl = t, Lt.set(this, new Ct)
                    }
                    get canUpload() {
                        return this.acl.canUploadFiles
                    }
                    chooseFile(e) {
                        return Ft(this, void 0, void 0, (function*() {
                            const t = Mt(this, Lt, "f").chooseFile(e);
                            return t.then((e => this._events.emit("choose", e))), t.catch((e => this._events.emit("error:choose", e))), t
                        }))
                    }
                    upload(e) {
                        return Ft(this, void 0, void 0, (function*() {
                            const t = Mt(this, Lt, "f").upload(e, (e => this.gp._services.filesService.upload(e)));
                            return this.gp.loader.inc(), t.then((e => this._events.emit("upload", e))), t.catch((e => this._events.emit("error:upload", e))), t.finally((() => this.gp.loader.dec())), t
                        }))
                    }
                    uploadContent(e) {
                        return Ft(this, void 0, void 0, (function*() {
                            return Mt(this, Lt, "f").uploadContent(e, (e => this.upload(e)))
                        }))
                    }
                    uploadUrl(e) {
                        return Ft(this, void 0, void 0, (function*() {
                            return Mt(this, Lt, "f").uploadUrl(e, (e => this.upload(e)))
                        }))
                    }
                    loadContent(e) {
                        return Ft(this, void 0, void 0, (function*() {
                            const t = fetch(new URL(e).toString()).then((t => {
                                if (t.ok) return t.text();
                                throw new Error(`Failed to load ${e}, errorCode: ${t.status}`)
                            }));
                            return this.gp.loader.inc(), t.then((e => this._events.emit("loadContent", e))), t.catch((e => this._events.emit("error:loadContent", e))), t.finally((() => this.gp.loader.dec())), t
                        }))
                    }
                    fetch(e = {}) {
                        return Ft(this, void 0, void 0, (function*() {
                            const t = Mt(this, Lt, "f").fetch(e, (e => this.gp._services.filesService.fetch(e).then((e => e.items))));
                            return this.gp.loader.inc(), t.then((e => this._events.emit("fetch", e))), t.catch((e => this._events.emit("error:fetch", e))), t.finally((() => this.gp.loader.dec())), t
                        }))
                    }
                    fetchMore(e = {}) {
                        return Ft(this, void 0, void 0, (function*() {
                            const t = Mt(this, Lt, "f").fetchMore(e, (e => this.gp._services.filesService.fetch(e).then((e => e.items))));
                            return this.gp.loader.inc(), t.then((e => this._events.emit("fetchMore", e))), t.catch((e => this._events.emit("error:fetchMore", e))), t.finally((() => this.gp.loader.dec())), t
                        }))
                    }
                }
                Lt = new WeakMap;
                var Ut = n(1049);
                class $t extends _.Z {
                    constructor(e) {
                        super(), this.gp = e
                    }
                    fetch({
                        ids: e
                    }) {
                        return t = this, n = void 0, r = function*() {
                            if (0 === e.map(Number).filter(Boolean).length) throw w.kg.error("empty_ids"), new Error("empty_ids");
                            const t = (0, a._)();
                            return this.gp.loader.inc(), t.ready.then((e => this._events.emit("fetch", e))).catch((e => this._events.emit("fetch:error", e))), this.gp._services.playerService.fetchPlayers({
                                ids: e
                            }).then(t.done).catch(t.abort).finally((() => this.gp.loader.dec())), t.ready
                        }, new((i = void 0) || (i = Promise))((function(e, s) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(t) {
                                var n;
                                t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function(e) {
                                    e(n)
                                }))).then(a, o)
                            }
                            c((r = r.apply(t, n || [])).next())
                        }));
                        var t, n, i, r
                    }
                }
                let Gt;
                try {
                    new EventTarget, Gt = !0
                } catch (e) {
                    Gt = !1
                }
                var Bt = Gt ? EventTarget : class {
                        constructor() {
                            this.e = {}
                        }
                        addEventListener(e, t, n = !1) {
                            this.t(e).push(t)
                        }
                        removeEventListener(e, t, n = !1) {
                            const i = this.t(e),
                                r = i.indexOf(t);
                            r > -1 && i.splice(r, 1)
                        }
                        dispatchEvent(e) {
                            return e.target = this, Object.freeze(e), this.t(e.type).forEach((t => t(e))), !0
                        }
                        t(e) {
                            return this.e[e] = this.e[e] || []
                        }
                    },
                    qt = Gt ? Event : class {
                        constructor(e) {
                            this.type = e
                        }
                    };
                class Vt extends qt {
                    constructor(e, t) {
                        super(e), this.newState = t.newState, this.oldState = t.oldState, this.originalEvent = t.originalEvent
                    }
                }
                const Wt = "active",
                    zt = "passive",
                    Yt = "hidden",
                    Kt = "frozen",
                    Jt = "terminated",
                    Zt = "object" == typeof safari && safari.pushNotification,
                    Xt = ["focus", "blur", "visibilitychange", "freeze", "resume", "pageshow", "onpageshow" in self ? "pagehide" : "unload"],
                    Ht = e => (e.preventDefault(), e.returnValue = "Are you sure?"),
                    Qt = [
                        [Wt, zt, Yt, Jt],
                        [Wt, zt, Yt, Kt],
                        [Yt, zt, Wt],
                        [Kt, Yt],
                        [Kt, Wt],
                        [Kt, zt]
                    ].map((e => e.reduce(((e, t, n) => (e[t] = n, e)), {}))),
                    en = () => document.visibilityState === Yt ? Yt : document.hasFocus() ? Wt : zt,
                    tn = new class extends Bt {
                        constructor() {
                            super();
                            const e = en();
                            this.s = e, this.i = [], this.a = this.a.bind(this), Xt.forEach((e => addEventListener(e, this.a, !0))), Zt && addEventListener("beforeunload", (e => {
                                this.n = setTimeout((() => {
                                    e.defaultPrevented || e.returnValue.length > 0 || this.r(e, Yt)
                                }), 0)
                            }))
                        }
                        get state() {
                            return this.s
                        }
                        get pageWasDiscarded() {
                            return document.wasDiscarded || !1
                        }
                        addUnsavedChanges(e) {
                            !this.i.indexOf(e) > -1 && (0 === this.i.length && addEventListener("beforeunload", Ht), this.i.push(e))
                        }
                        removeUnsavedChanges(e) {
                            const t = this.i.indexOf(e);
                            t > -1 && (this.i.splice(t, 1), 0 === this.i.length && removeEventListener("beforeunload", Ht))
                        }
                        r(e, t) {
                            if (t !== this.s) {
                                const n = ((e, t) => {
                                    for (let n, i = 0; n = Qt[i]; ++i) {
                                        const i = n[e],
                                            r = n[t];
                                        if (i >= 0 && r >= 0 && r > i) return Object.keys(n).slice(i, r + 1)
                                    }
                                    return []
                                })(this.s, t);
                                for (let t = 0; t < n.length - 1; ++t) {
                                    const i = n[t],
                                        r = n[t + 1];
                                    this.s = r, this.dispatchEvent(new Vt("statechange", {
                                        oldState: i,
                                        newState: r,
                                        originalEvent: e
                                    }))
                                }
                            }
                        }
                        a(e) {
                            switch (Zt && clearTimeout(this.n), e.type) {
                                case "pageshow":
                                case "resume":
                                    this.r(e, en());
                                    break;
                                case "focus":
                                    this.r(e, Wt);
                                    break;
                                case "blur":
                                    this.s === Wt && this.r(e, en());
                                    break;
                                case "pagehide":
                                case "unload":
                                    this.r(e, e.persisted ? Kt : Jt);
                                    break;
                                case "visibilitychange":
                                    this.s !== Kt && this.s !== Jt && this.r(e, en());
                                    break;
                                case "freeze":
                                    this.r(e, Kt)
                            }
                        }
                    },
                    nn = ["hidden", "frozen", "terminated"];

                function rn({
                    url: e,
                    blur: t = 0,
                    fade: n = 0
                }) {
                    e ? (function(e) {
                        document.querySelectorAll(".gp-custom-background").forEach((t => {
                            t.childNodes.forEach((e => {
                                e.style.opacity = "0"
                            })), setTimeout((() => {
                                t.remove()
                            }), 1e3 * e)
                        }))
                    }(n), function(e) {
                        const t = document.createElement("div");
                        document.body.style.setProperty("background", "transparent", "important"), t.classList.add("gp-custom-background"),
                            function(e, t) {
                                const n = document.createElement("div");
                                n.style.cssText = `\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n        background: transparent;\n        backdrop-filter: blur(${e.blur}px);\n        \n        transition: ${e.fade}s;\n    `, n.classList.add("gp-custom-background-blur"), t.append(n)
                            }(e, t),
                            function(e, t) {
                                const n = document.createElement("div");
                                n.style.cssText = `\n        background-image: url(${e.url});\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -2;\n        opacity: 0;\n        transition: ${e.fade}s;\n    `, n.classList.add("gp-custom-background-img"), t.append(n), setTimeout((() => {
                                    n.style.opacity = "1"
                                }), 100)
                            }(e, t), document.body.append(t)
                    }({
                        url: e,
                        blur: t,
                        fade: n
                    })) : w.kg.warn("Empty background url")
                }
                class sn {
                    getLanguage(e) {
                        return t = this, n = void 0, r = function*() {
                            const t = decodeURIComponent(window.location.toString()),
                                n = new RegExp(`_${e}_lang=(?<lang>\\w{2})`).exec(t);
                            return n ? n.groups.lang : null
                        }, new((i = void 0) || (i = Promise))((function(e, s) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(t) {
                                var n;
                                t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function(e) {
                                    e(n)
                                }))).then(a, o)
                            }
                            c((r = r.apply(t, n || [])).next())
                        }));
                        var t, n, i, r
                    }
                }
                var an;
                const on = Object.values(b.Uo);
                class cn {
                    constructor() {
                        an.set(this, [new sn])
                    }
                    getLanguage(e) {
                        return t = this, n = void 0, r = function*() {
                            for (const t of function(e, t, n, i) {
                                    if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                                    return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                                }(this, an, "f")) {
                                const n = yield t.getLanguage(e);
                                if (null === n) continue;
                                const i = n.toLowerCase();
                                return on.includes(i) ? i : null
                            }
                            return null
                        }, new((i = void 0) || (i = Promise))((function(e, s) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(t) {
                                var n;
                                t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function(e) {
                                    e(n)
                                }))).then(a, o)
                            }
                            c((r = r.apply(t, n || [])).next())
                        }));
                        var t, n, i, r
                    }
                }
                an = new WeakMap;
                var ln = n(3793);
                const hn = () => window.matchMedia("(orientation: portrait)").matches,
                    dn = e => {
                        const t = hn();
                        return t && e === ln.LH.Portrait || !t && e === ln.LH.Landscape
                    };
                var un, pn = n(8866),
                    fn = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                class mn {
                    constructor() {
                        un.set(this, new Set), document.addEventListener("pointerdown", (e => {
                            fn(this, un, "f").add(e.pointerId)
                        })), document.addEventListener("pointerup", (e => {
                            fn(this, un, "f").delete(e.pointerId)
                        }))
                    }
                    waitForPointersUp() {
                        return e = this, t = void 0, i = function*() {
                            const e = new Promise((e => {
                                if (0 === fn(this, un, "f").size) return e();
                                const t = n => {
                                    if (fn(this, un, "f").delete(n.pointerId), 0 === fn(this, un, "f").size) return document.removeEventListener("pointerup", t), e()
                                };
                                document.addEventListener("pointerup", t)
                            }));
                            yield Promise.race([e, (0, pn.Z)(1500)])
                        }, new((n = void 0) || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }));
                        var e, t, n, i
                    }
                }
                un = new WeakMap;
                const vn = {
                        [ln.W2.Add]: (e, t) => {
                            e.player.add(t.key, t.value)
                        },
                        [ln.W2.Remove]: (e, t) => {
                            e.player.add(t.key, -t.value)
                        },
                        [ln.W2.Set]: (e, t) => {
                            e.player.set(t.key, t.value)
                        }
                    },
                    yn = {
                        [ln.x1.PlayerField]: vn
                    };
                var gn, wn, bn, Pn, En, Tn, Sn, _n, An, In, Cn, kn, Rn, On, Dn, Nn, xn, Ln = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    Fn = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    },
                    Mn = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                const jn = "reward_not_found";
                class Un extends _.Z {
                    constructor(e, t, n) {
                        super(), this.gp = e, gn.add(this), wn.set(this, void 0), bn.set(this, []), Pn.set(this, []), En.set(this, []), Tn.set(this, {}), Sn.set(this, {}), _n.set(this, {}), Fn(this, Pn, n, "f"), Mn(this, gn, "m", Nn).call(this), Fn(this, wn, t, "f"), Mn(this, wn, "f").on("setRewardsList", (e => Mn(this, gn, "m", kn).call(this, e.playerRewards, e.notSentGivenList, e.notSentAcceptedList))), Mn(this, wn, "f").on("markRewardsGiven", (e => {
                            e.forEach((e => {
                                const t = Mn(this, gn, "m", An).call(this, e);
                                if (!t) return void w.kg.error(`reward not found', ID ${e}`);
                                Mn(this, gn, "m", Rn).call(this, t.id);
                                const n = Mn(this, gn, "m", Cn).call(this, t.id);
                                this._events.emit("give", n), t.isAutoAccept && this._events.emit("accept", n)
                            }))
                        })), this.gp.on("change:language", (e => {
                            Mn(this, Pn, "f").forEach((t => {
                                t.name = t.names[e] || t.names.en, t.description = t.descriptions[e] || t.descriptions.en
                            })), Mn(this, gn, "m", Nn).call(this)
                        })), Mn(this, Pn, "f").forEach((e => {
                            e.description = e.descriptions[this.gp.language] || e.descriptions.en, e.name = e.names[this.gp.language] || e.names.en, e.icon = (0, bt.Z)(e.icon, 256, 256, !1), e.iconSmall = (0, bt.Z)(e.icon, 48, 48, !1)
                        })), this.gp.on("gameStart", (() => Ln(this, void 0, void 0, (function*() {
                            yield this.gp.player.ready, Mn(this, En, "f").forEach((e => {
                                const t = Mn(this, gn, "m", An).call(this, e.rewardId);
                                if (null == t ? void 0 : t.isAutoAccept) {
                                    const n = e.countTotal - e.countAccepted;
                                    if (n > 0)
                                        for (let e = 0; e < n; e++) this.accept({
                                            id: t.id
                                        })
                                }
                            }))
                        }))))
                    }
                    get list() {
                        return [...Mn(this, Pn, "f")]
                    }
                    get givenList() {
                        return [...Mn(this, En, "f")]
                    }
                    give(e) {
                        return Ln(this, void 0, void 0, (function*() {
                            const t = Number(e.id) || e.tag,
                                n = (0, a._)(),
                                i = t => {
                                    n.abort(t), this._events.emit("error:give", t, {
                                        input: e
                                    })
                                };
                            if (Mn(this, bn, "f").includes(t)) return i(jn), n.ready;
                            const r = Mn(this, gn, "m", An).call(this, t);
                            if (!r) return i(jn), n.ready;
                            if (e.lazy) {
                                let e = {
                                    rewardId: r.id,
                                    countTotal: 1,
                                    countAccepted: 0
                                };
                                Mn(this, gn, "m", Rn).call(this, r.id), Mn(this, wn, "f").addGivenReward({
                                    id: r.id,
                                    count: 1
                                });
                                const t = Mn(this, gn, "m", In).call(this, r.id);
                                return e.countTotal = t.countTotal, e.countAccepted = t.countAccepted, this._events.emit("give", {
                                    reward: r,
                                    playerReward: e
                                }), r.isAutoAccept && (yield this.accept({
                                    id: r.id
                                })), n.done({
                                    reward: r,
                                    playerReward: e
                                }), n.ready
                            }
                            this.gp.loader.inc();
                            const s = r.id;
                            try {
                                const e = yield this.gp._services.rewardsService.give({
                                    id: s
                                }), {
                                    reward: t
                                } = e, i = function(e, t) {
                                    var n = {};
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var r = 0;
                                        for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                                    }
                                    return n
                                }(e, ["reward"]);
                                Mn(this, gn, "m", Rn).call(this, t.id);
                                const r = Mn(this, gn, "m", In).call(this, t.id);
                                i.countTotal = r.countTotal, i.countAccepted = r.countAccepted, this._events.emit("give", {
                                    reward: t,
                                    playerReward: i
                                }), t.isAutoAccept && (yield this.accept({
                                    id: t.id
                                })), n.done({
                                    reward: t,
                                    playerReward: i
                                })
                            } catch (r) {
                                "reward_not_found" === r && Mn(this, bn, "f").push(t), "string" == typeof r ? (w.kg.error(r), i(r)) : (n.abort(r), this._events.emit("error:give", r, {
                                    input: e
                                }))
                            } finally {
                                this.gp.loader.dec()
                            }
                            return n.ready
                        }))
                    }
                    accept(e) {
                        return Ln(this, void 0, void 0, (function*() {
                            const t = Number(e.id) || e.tag,
                                n = (0, a._)(),
                                i = t => {
                                    n.abort(t), this._events.emit("error:accept", t, {
                                        input: e
                                    })
                                };
                            if (Mn(this, bn, "f").includes(t)) return i(jn), n.ready;
                            if (!this.hasUnaccepted(t)) return i("reward_already_accepted"), n.ready;
                            const {
                                reward: r,
                                playerReward: s
                            } = Mn(this, gn, "m", Cn).call(this, t);
                            return s ? (Mn(this, gn, "m", On).call(this, s), Mn(this, wn, "f").addAcceptedReward({
                                id: s.rewardId,
                                count: 1
                            }), this._events.emit("accept", {
                                reward: r,
                                playerReward: s
                            }), n.done({
                                reward: r,
                                playerReward: s
                            }), n.ready) : (i("player_reward_not_found"), n.ready)
                        }))
                    }
                    has(e) {
                        var t;
                        return (null === (t = Mn(this, gn, "m", Cn).call(this, e).playerReward) || void 0 === t ? void 0 : t.countTotal) > 0
                    }
                    hasAccepted(e) {
                        var t;
                        return (null === (t = Mn(this, gn, "m", Cn).call(this, e).playerReward) || void 0 === t ? void 0 : t.countAccepted) > 0
                    }
                    hasUnaccepted(e) {
                        const {
                            playerReward: t
                        } = Mn(this, gn, "m", Cn).call(this, e);
                        return !!t && t.countTotal > t.countAccepted
                    }
                    getReward(e) {
                        return Mn(this, gn, "m", Cn).call(this, e)
                    }
                }

                function $n(e, t = 1) {
                    e.countAccepted += t
                }
                wn = new WeakMap, bn = new WeakMap, Pn = new WeakMap, En = new WeakMap, Tn = new WeakMap, Sn = new WeakMap, _n = new WeakMap, gn = new WeakSet, An = function(e) {
                    return Mn(this, Tn, "f")[e] || Mn(this, Sn, "f")[e]
                }, In = function(e) {
                    return Mn(this, _n, "f")[e]
                }, Cn = function(e) {
                    const t = {
                            reward: null,
                            playerReward: null
                        },
                        n = Mn(this, gn, "m", An).call(this, e);
                    if (!n) return t;
                    t.reward = n;
                    const i = Mn(this, gn, "m", In).call(this, n.id);
                    return t.playerReward = i || {
                        rewardId: n.id,
                        countAccepted: 0,
                        countTotal: 0
                    }, t
                }, kn = function(e, t, n) {
                    let i = [...n];
                    const r = t.reduce(((t, {
                            id: n,
                            count: i
                        }) => {
                            const r = e.find((e => e.rewardId === n));
                            return r ? (r.countTotal += i, t) : (Mn(this, Pn, "f").find((e => e.id === n)) && t.push({
                                rewardId: n,
                                countTotal: i,
                                countAccepted: 0
                            }), t)
                        }), []),
                        s = [...e, ...r];
                    Fn(this, En, s.reduce(((e, t) => {
                        if (Mn(this, Pn, "f").find((e => e.id === t.rewardId))) {
                            const n = i.find((e => e.id === t.rewardId));
                            n && (i = i.filter((e => e.id !== t.rewardId)), $n(t, n.count)), e.push(t)
                        }
                        return e
                    }), []), "f"), Mn(this, gn, "m", xn).call(this)
                }, Rn = function(e) {
                    if (!Mn(this, gn, "m", An).call(this, e)) return;
                    const t = Mn(this, gn, "m", In).call(this, e);
                    t ? t.countTotal += 1 : (Mn(this, En, "f").unshift({
                        rewardId: e,
                        countTotal: 1,
                        countAccepted: 0
                    }), Mn(this, gn, "m", xn).call(this))
                }, On = function(e) {
                    const t = Mn(this, gn, "m", An).call(this, e.rewardId);
                    t ? ($n(e), Mn(this, gn, "m", Dn).call(this, t)) : w.kg.error(`Reward ${e.rewardId} not found`)
                }, Dn = function(e) {
                    try {
                        t = this.gp, e.mutations.forEach((e => {
                            const n = yn[e.type];
                            if (!n) throw new Error(`Unknown mutation type: ${e.type}`);
                            const i = n[e.action];
                            if (!i) throw new Error(`Unknown mutation action: ${e.action}`);
                            i(t, e)
                        }))
                    } catch (e) {
                        w.kg.error("failed to apply reward", e)
                    }
                    var t
                }, Nn = function() {
                    Fn(this, Tn, {}, "f"), Fn(this, Sn, {}, "f"), Mn(this, Pn, "f").forEach((e => {
                        Mn(this, Tn, "f")[e.id] = e, Mn(this, Sn, "f")[e.tag] = e
                    }))
                }, xn = function() {
                    Fn(this, _n, {}, "f"), Mn(this, En, "f").forEach((e => {
                        Mn(this, _n, "f")[e.rewardId] = e
                    }))
                };
                var Gn, Bn, qn, Vn, Wn, zn, Yn, Kn, Jn, Zn, Xn, Hn, Qn = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    ei = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    },
                    ti = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                const ni = "trigger_not_found";
                class ii extends _.Z {
                    constructor(e, t, n) {
                        super(), this.gp = e, Gn.add(this), Bn.set(this, void 0), qn.set(this, []), Vn.set(this, []), Wn.set(this, {}), zn.set(this, {}), Yn.set(this, {}), ei(this, qn, [...n.triggers, ...n.schedulers.reduce(((e, t) => [...e, ...t.triggers]), []), ...n.events.reduce(((e, t) => [...e, ...t.triggers]), [])], "f"), ti(this, Gn, "m", Xn).call(this), ei(this, Bn, t, "f"), ti(this, Bn, "f").on("setTriggersList", (e => {
                            ei(this, Vn, e.playerTriggers.filter((e => !!ti(this, Wn, "f")[e.triggerId])), "f"), ti(this, Gn, "m", Hn).call(this)
                        })), ti(this, Bn, "f").on("markTriggersActivated", (e => {
                            e.forEach((e => {
                                const {
                                    trigger: t,
                                    isActivated: n
                                } = ti(this, Gn, "m", Jn).call(this, e);
                                t ? n || (ti(this, Vn, "f").push({
                                    triggerId: e,
                                    claimed: !1
                                }), ti(this, Gn, "m", Hn).call(this), this._events.emit("activate", {
                                    trigger: t
                                }), w.kg.info(`🎉 Trigger activated, ID: ${e}, Tag: ${t.tag}`)) : w.kg.error(`trigger not found, ID: ${e}`)
                            }))
                        })), ti(this, Bn, "f").on("markTriggersClaimed", (e => {
                            e.forEach((e => {
                                const {
                                    trigger: t,
                                    isClaimed: n
                                } = ti(this, Gn, "m", Jn).call(this, e);
                                t ? n || (ei(this, Vn, ti(this, Vn, "f").map((t => t.triggerId === e ? Object.assign(Object.assign({}, t), {
                                    claimed: !0
                                }) : t)), "f"), ti(this, Gn, "m", Hn).call(this), this._events.emit("claim", {
                                    trigger: t
                                }), w.kg.info(`🎉 Trigger claimed, ID: ${e}, Tag: ${t.tag}`)) : w.kg.error(`trigger not found, ID: ${e}`)
                            }))
                        })), this.gp.on("change:language", (e => {
                            ti(this, qn, "f").forEach((t => {
                                t.description = t.descriptions[e] || t.descriptions.en
                            })), ti(this, Gn, "m", Xn).call(this)
                        }))
                    }
                    get list() {
                        return [...ti(this, qn, "f")]
                    }
                    get activatedList() {
                        return [...ti(this, Vn, "f")]
                    }
                    isActivated(e) {
                        return ti(this, Gn, "m", Jn).call(this, e).isActivated
                    }
                    isClaimed(e) {
                        return ti(this, Gn, "m", Jn).call(this, e).isClaimed
                    }
                    getTrigger(e) {
                        return ti(this, Gn, "m", Jn).call(this, e)
                    }
                    claim(e) {
                        return Qn(this, void 0, void 0, (function*() {
                            const t = e.id || e.tag,
                                n = ti(this, Gn, "m", Kn).call(this, t),
                                i = (0, a._)();
                            try {
                                if (!n) throw w.kg.error(`trigger not found, ID: ${t}`), new Error(ni);
                                const e = yield this._claim({
                                    id: n.id
                                });
                                i.done(e)
                            } catch (t) {
                                const n = (null == t ? void 0 : t.message) || t;
                                this._events.emit("error:claim", n, {
                                    input: e
                                }), i.abort(n)
                            }
                            return i.ready
                        }))
                    }
                    _claim({
                        id: e,
                        tag: t
                    }) {
                        return Qn(this, void 0, void 0, (function*() {
                            const n = e || t,
                                {
                                    isActivated: i,
                                    isClaimed: r
                                } = ti(this, Gn, "m", Zn).call(this, n);
                            if (!i) throw w.kg.error(`trigger is not activated, ID: ${n}`), new Error("trigger_not_activated");
                            if (r) throw w.kg.error(`trigger is already claimed, ID: ${n}`), new Error("trigger_already_claimed");
                            return ti(this, Bn, "f").addClaimedTrigger(n), yield ti(this, Bn, "f").syncPlayer(), ti(this, Gn, "m", Jn).call(this, n)
                        }))
                    }
                }
                Bn = new WeakMap, qn = new WeakMap, Vn = new WeakMap, Wn = new WeakMap, zn = new WeakMap, Yn = new WeakMap, Gn = new WeakSet, Kn = function(e) {
                    return ti(this, Wn, "f")[e] || ti(this, zn, "f")[e]
                }, Jn = function(e) {
                    const t = {
                            trigger: null,
                            isActivated: !1,
                            isClaimed: !1
                        },
                        n = ti(this, Gn, "m", Kn).call(this, e);
                    if (!n) return t;
                    if (t.trigger = n, n) {
                        const e = ti(this, Yn, "f")[n.id];
                        e && (t.isActivated = !0, t.isClaimed = e.claimed)
                    }
                    return t
                }, Zn = function(e) {
                    const t = ti(this, Yn, "f")[e];
                    return t ? {
                        isActivated: !0,
                        isClaimed: t.claimed
                    } : {
                        isActivated: !1,
                        isClaimed: !1
                    }
                }, Xn = function() {
                    ei(this, Wn, {}, "f"), ei(this, zn, {}, "f"), ti(this, qn, "f").forEach((e => {
                        ti(this, Wn, "f")[e.id] = e, ti(this, zn, "f")[e.tag] = e
                    }))
                }, Hn = function() {
                    ei(this, Yn, {}, "f"), ti(this, Vn, "f").forEach((e => {
                        ti(this, Yn, "f")[e.triggerId] = e
                    }))
                };
                var ri, si = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    },
                    ai = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    };
                class oi extends _.Z {
                    constructor() {
                        super(...arguments), this.acceptedRewards = [], this.givenRewards = [], this.unlockedAchievements = [], this.purchasedProducts = [], this.claimedTriggers = [], this.claimedSchedulersDays = [], ri.set(this, null)
                    }
                    addGivenReward(e) {
                        const t = this.givenRewards.find((t => t.id === e.id));
                        t ? t.count += e.count : this.givenRewards.push(e)
                    }
                    addAcceptedReward(e) {
                        const t = this.acceptedRewards.find((t => t.id === e.id));
                        t ? t.count += e.count : this.acceptedRewards.push(e)
                    }
                    addClaimedTrigger(e) {
                        this.claimedTriggers.push(e)
                    }
                    addClaimedSchedulerDay(e) {
                        this.claimedSchedulersDays.push(e)
                    }
                    addUnlockedAchievement(e) {
                        this.unlockedAchievements.push(e)
                    }
                    setTriggersList(e) {
                        this.emit("setTriggersList", {
                            playerTriggers: e
                        })
                    }
                    setRewardsList(e) {
                        this.emit("setRewardsList", {
                            playerRewards: e,
                            notSentAcceptedList: this.acceptedRewards,
                            notSentGivenList: this.givenRewards
                        })
                    }
                    setAchievementsList(e) {
                        this.emit("setAchievementsList", {
                            achievements: e,
                            notSentIds: this.unlockedAchievements
                        })
                    }
                    setPurchasedList(e) {
                        this.emit("setPurchasedList", {
                            playerPurchases: e,
                            notSentIds: this.purchasedProducts
                        })
                    }
                    setExperiments(e) {
                        this.emit("setExperiments", {
                            playerExperiments: e
                        })
                    }
                    setPlayerSegments(e, t, n) {
                        this.emit("setPlayerSegments", {
                            playerSegments: e,
                            leftSegments: n,
                            enterSegments: t
                        })
                    }
                    setPlayerSchedulersList(e) {
                        this.emit("setPlayerSchedulersList", {
                            playerSchedulers: e
                        })
                    }
                    setPlayerEventsList(e) {
                        this.emit("setPlayerEventsList", {
                            playerEvents: e
                        })
                    }
                    setUniques(e) {
                        this.emit("setUniques", {
                            uniques: e
                        })
                    }
                    markTriggersActivated(e) {
                        this.emit("markTriggersActivated", e)
                    }
                    markTriggersClaimed(e) {
                        this.emit("markTriggersClaimed", e)
                    }
                    markRewardsGiven(e) {
                        this.emit("markRewardsGiven", e)
                    }
                    markAchievementsUnlocked(e) {
                        this.emit("markAchievementsUnlocked", e)
                    }
                    markPurchasesGiven(e) {
                        this.emit("markPurchasesGiven", e)
                    }
                    markSchedulersDaysClaimed(e) {
                        this.emit("markSchedulersDaysClaimed", e)
                    }
                    markUniqueRegistered(e) {
                        this.emit("markUniqueRegistered", e)
                    }
                    syncPurchases() {
                        const e = (0, a._)();
                        return this._events.emit("syncPurchases", e.done), e.ready
                    }
                    updateServerTime(e) {
                        this._events.emit("updateServerTime", e)
                    }
                    syncPlayer() {
                        if (si(this, ri, "f")) return si(this, ri, "f").ready;
                        const e = (0, a._)();
                        return ai(this, ri, e, "f"), (0, pn.Z)(300).then((() => this._events.emit("syncPlayer"))), e.ready
                    }
                    commitSyncPlayer() {
                        var e;
                        null === (e = si(this, ri, "f")) || void 0 === e || e.done(), ai(this, ri, null, "f")
                    }
                    isDirty() {
                        return this.acceptedRewards.length > 0 || this.givenRewards.length > 0 || this.claimedTriggers.length > 0 || this.claimedSchedulersDays.length > 0
                    }
                    export () {
                        return {
                            acceptedRewards: this.acceptedRewards,
                            givenRewards: this.givenRewards,
                            claimedTriggers: this.claimedTriggers,
                            claimedSchedulersDays: this.claimedSchedulersDays
                        }
                    }
                    reset() {
                        this.acceptedRewards = [], this.givenRewards = [], this.claimedTriggers = [], this.claimedSchedulersDays = []
                    }
                    emit(e, t) {
                        this._events.emit(e, t)
                    }
                }
                ri = new WeakMap;
                var ci, li, hi, di, ui, pi, fi, mi, vi, yi, gi, wi, bi = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    Pi = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    },
                    Ei = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                const Ti = "scheduler_not_found",
                    Si = "wrong_day",
                    _i = "day_not_reached",
                    Ai = "nothing_to_claim",
                    Ii = {
                        scheduler: null,
                        bonuses: [],
                        canClaimAllDay: !1,
                        canClaimDay: !1,
                        day: 0,
                        isAllDayClaimed: !1,
                        isDayClaimed: !1,
                        isDayComplete: !1,
                        isDayReached: !1,
                        triggers: []
                    };
                class Ci extends _.Z {
                    constructor(e, t, n) {
                        super(), this.gp = e, ci.add(this), li.set(this, void 0), hi.set(this, []), di.set(this, []), Pi(this, hi, n, "f"), Pi(this, li, t, "f"), Ei(this, li, "f").on("setPlayerSchedulersList", (({
                            playerSchedulers: e
                        }) => {
                            Pi(this, di, e.filter((e => Ei(this, hi, "f").some((t => t.id === e.schedulerId)))), "f")
                        }))
                    }
                    get list() {
                        return [...Ei(this, hi, "f")]
                    }
                    get activeList() {
                        return [...Ei(this, di, "f")]
                    }
                    getSchedulersTriggers() {
                        return Ei(this, hi, "f").reduce(((e, {
                            triggers: t
                        }) => [...e, ...t]), [])
                    }
                    getScheduler(e) {
                        const {
                            scheduler: t,
                            playerScheduler: n
                        } = Ei(this, ci, "m", pi).call(this, e);
                        if (!t) return {
                            scheduler: null,
                            currentDay: 0,
                            daysClaimed: [],
                            isRegistered: !1,
                            stats: {
                                activeDays: 0,
                                activeDaysConsecutive: 0
                            }
                        };
                        let i = !1,
                            r = 0,
                            s = [],
                            a = {
                                activeDays: 0,
                                activeDaysConsecutive: 0
                            };
                        return n && (i = !0, a = n.stats, s = n.daysClaimed, r = t.type === ln.OB.ActiveDays ? a.activeDays : a.activeDaysConsecutive), {
                            scheduler: t,
                            isRegistered: i,
                            currentDay: r,
                            daysClaimed: s,
                            stats: a
                        }
                    }
                    isRegistered(e) {
                        return !!Ei(this, ci, "m", pi).call(this, e).playerScheduler
                    }
                    isTodayRewardClaimed(e) {
                        const t = this.getScheduler(e);
                        if (!t.scheduler) return !1;
                        const {
                            currentDay: n,
                            daysClaimed: i
                        } = t;
                        return i.includes(n)
                    }
                    canClaimDay(e, t) {
                        return this.getSchedulerDay(e, t).canClaimDay
                    }
                    canClaimDayAdditional(e, t, n) {
                        const {
                            scheduler: i
                        } = Ei(this, ci, "m", pi).call(this, e);
                        if (!i) return !1;
                        const r = i.triggers.find((e => (e.id === n || e.tag === n) && e.day === t));
                        return !!r && this.gp.triggers.isActivated(r.id) && !this.gp.triggers.isClaimed(r.id)
                    }
                    canClaimAllDay(e, t) {
                        return this.getSchedulerDay(e, t).canClaimAllDay
                    }
                    getSchedulerDay(e, t) {
                        var n;
                        const i = this.getScheduler(e);
                        if (!i.scheduler) return Ii;
                        const {
                            scheduler: r,
                            currentDay: s,
                            daysClaimed: a
                        } = i, o = r.triggers.filter((e => e.day === t)), c = s >= t, l = c && o.every((e => this.gp.triggers.isActivated(e.id))), h = a.includes(t), d = h && o.every((e => this.gp.triggers.isClaimed(e.id))), u = !!r && !h && c, p = u || r.triggers.some((n => this.canClaimDayAdditional(e, t, n.id)));
                        return {
                            scheduler: r,
                            day: t,
                            isDayReached: c,
                            isDayComplete: l,
                            isDayClaimed: h,
                            isAllDayClaimed: d,
                            canClaimDay: u,
                            canClaimAllDay: p,
                            bonuses: (null === (n = r.daysBonuses.find((e => e.day === t))) || void 0 === n ? void 0 : n.bonuses) || [],
                            triggers: o
                        }
                    }
                    getSchedulerCurrentDay(e) {
                        const t = this.getScheduler(e);
                        if (!t.scheduler) return Ii;
                        const {
                            currentDay: n
                        } = t;
                        return this.getSchedulerDay(e, n)
                    }
                    claimDay(e, t) {
                        return bi(this, void 0, void 0, (function*() {
                            return Ei(this, ci, "m", wi).call(this, "claimDay", Ei(this, ci, "m", mi).call(this, e, t), {
                                schedulerIdOrTag: e,
                                day: t
                            })
                        }))
                    }
                    claimDayAdditional(e, t, n) {
                        return bi(this, void 0, void 0, (function*() {
                            return Ei(this, ci, "m", wi).call(this, "claimDayAdditional", Ei(this, ci, "m", vi).call(this, e, t, n), {
                                schedulerIdOrTag: e,
                                day: t,
                                triggerIdOrTag: n
                            })
                        }))
                    }
                    claimAllDay(e, t) {
                        return bi(this, void 0, void 0, (function*() {
                            return Ei(this, ci, "m", wi).call(this, "claimAllDay", Ei(this, ci, "m", yi).call(this, e, t), {
                                schedulerIdOrTag: e,
                                day: t
                            })
                        }))
                    }
                    claimAllDays(e) {
                        return bi(this, void 0, void 0, (function*() {
                            return Ei(this, ci, "m", wi).call(this, "claimAllDays", Ei(this, ci, "m", gi).call(this, e), {
                                schedulerIdOrTag: e
                            })
                        }))
                    }
                    register(e) {
                        return bi(this, void 0, void 0, (function*() {
                            return Ei(this, ci, "m", wi).call(this, "register", Ei(this, ci, "m", ui).call(this, (null == e ? void 0 : e.id) || (null == e ? void 0 : e.tag)), e)
                        }))
                    }
                }
                li = new WeakMap, hi = new WeakMap, di = new WeakMap, ci = new WeakSet, ui = function(e) {
                    return bi(this, void 0, void 0, (function*() {
                        const t = this.getScheduler(e);
                        if (!t.scheduler) throw new Error(Ti);
                        const {
                            scheduler: n
                        } = t, i = yield this.gp._services.schedulersService.register({
                            schedulerId: n.id
                        });
                        Ei(this, di, "f").push(Object.assign(Object.assign({}, i), {
                            scheduler: n
                        }));
                        const r = this.getScheduler(e),
                            {
                                scheduler: s
                            } = r;
                        return function(e, t) {
                            var n = {};
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var r = 0;
                                for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                            }
                            return n
                        }(r, ["scheduler"])
                    }))
                }, pi = function(e) {
                    const t = {
                            scheduler: null,
                            playerScheduler: null
                        },
                        n = Ei(this, hi, "f").find((t => t.tag === e || t.id === Number(e)));
                    return n ? (t.scheduler = n, n && (t.playerScheduler = Ei(this, di, "f").find((e => e.schedulerId === n.id))), t) : t
                }, fi = function(e, t) {
                    return !Number.isNaN(e) && e > 0 && e <= t.days
                }, mi = function(e, t) {
                    return bi(this, void 0, void 0, (function*() {
                        const {
                            scheduler: n,
                            isDayReached: i,
                            isDayClaimed: r
                        } = this.getSchedulerDay(e, t);
                        if (!n) throw Ti;
                        if (!Ei(this, ci, "m", fi).call(this, t, n)) throw Si;
                        if (!i) throw _i;
                        if (r) throw "day_already_claimed";
                        return Ei(this, li, "f").addClaimedSchedulerDay({
                            schedulerId: n.id,
                            day: t
                        }), yield Ei(this, li, "f").syncPlayer(), this.getSchedulerDay(e, t)
                    }))
                }, vi = function(e, t, n) {
                    return bi(this, void 0, void 0, (function*() {
                        const {
                            scheduler: i,
                            isDayReached: r
                        } = this.getSchedulerDay(e, t);
                        if (!i) throw Ti;
                        if (!Ei(this, ci, "m", fi).call(this, t, i)) throw Si;
                        if (!r) throw _i;
                        const s = i.triggers.find((e => e.id === n || e.tag === n));
                        if (!s) throw ni;
                        const {
                            isClaimed: a
                        } = yield this.gp.triggers._claim({
                            id: s.id
                        });
                        if (!a) throw "failed_to_claim";
                        return this.getSchedulerDay(e, t)
                    }))
                }, yi = function(e, t) {
                    return bi(this, void 0, void 0, (function*() {
                        const {
                            scheduler: n,
                            isDayReached: i
                        } = this.getSchedulerDay(e, t);
                        if (!n) throw Ti;
                        if (!Ei(this, ci, "m", fi).call(this, t, n)) throw Si;
                        if (!i) throw _i;
                        const r = [];
                        if (this.canClaimDay(e, t) && r.push(Ei(this, ci, "m", mi).call(this, e, t)), n.triggers.forEach((n => {
                                this.canClaimDayAdditional(e, t, n.id) && r.push(Ei(this, ci, "m", vi).call(this, e, t, n.id))
                            })), 0 === r.length) throw Ai;
                        return yield Promise.all(r), this.getSchedulerDay(e, t)
                    }))
                }, gi = function(e) {
                    return bi(this, void 0, void 0, (function*() {
                        const {
                            scheduler: t
                        } = Ei(this, ci, "m", pi).call(this, e);
                        if (!t) throw Ti;
                        const n = [];
                        for (let i = 1; i <= t.days; i++) this.canClaimAllDay(e, i) && n.push(this.claimAllDay(e, i).catch(w.kg.warn));
                        if (0 === n.length) throw Ai;
                        return yield Promise.all(n), this.getScheduler(e)
                    }))
                }, wi = function(e, t, n) {
                    return t.then((t => (this._events.emit(e, t, {
                        input: n
                    }), t))).catch((t => {
                        const i = (null == t ? void 0 : t.message) || t;
                        throw this._events.emit(`error:${e}`, i, {
                            input: n
                        }), i
                    }))
                };
                var ki, Ri, Oi, Di, Ni, xi = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    },
                    Li = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                class Fi extends _.Z {
                    constructor(e, t, n) {
                        super(), this.gp = e, ki.add(this), Ri.set(this, void 0), Oi.set(this, []), Di.set(this, []), xi(this, Oi, n.map((t => Object.assign(Object.assign({}, t), {
                            name: t.names[e.language] || t.names.en,
                            description: t.descriptions[e.language] || t.descriptions.en,
                            iconSmall: (0, bt.Z)(t.icon, 48, 48, !1),
                            icon: (0, bt.Z)(t.icon, 256, 256, !1),
                            get timeLeft() {
                                const n = Date.parse(t.dateEnd) || 1 / 0,
                                    i = Math.floor((n - Date.parse(e.serverTime)) / 1e3);
                                return i > 0 ? i : 0
                            },
                            get isActive() {
                                const n = Date.parse(t.dateStart) || 0;
                                return Date.parse(e.serverTime) >= n && this.timeLeft > 0
                            }
                        }))), "f"), xi(this, Ri, t, "f"), Li(this, Ri, "f").on("setPlayerEventsList", (({
                            playerEvents: e
                        }) => {
                            xi(this, Di, e.filter((e => Li(this, Oi, "f").some((t => t.id === e.eventId)))), "f")
                        })), this.gp.on("change:language", (e => {
                            Li(this, Oi, "f").forEach((t => {
                                t.name = t.names[e] || t.names.en, t.description = t.descriptions[e] || t.descriptions.en
                            }))
                        }))
                    }
                    get list() {
                        return [...Li(this, Oi, "f")]
                    }
                    get activeList() {
                        return [...Li(this, Di, "f")]
                    }
                    getEvent(e) {
                        const {
                            event: t,
                            playerEvent: n
                        } = Li(this, ki, "m", Ni).call(this, e), i = {
                            event: t,
                            stats: (null == n ? void 0 : n.stats) || {
                                activeDays: 0,
                                activeDaysConsecutive: 0
                            },
                            isJoined: !!(null == t ? void 0 : t.isActive) && !!n,
                            rewards: [],
                            achievements: [],
                            products: []
                        };
                        return t ? (t.triggers.forEach((e => {
                            e.bonuses.forEach((e => {
                                switch (e.type) {
                                    case ln.Do.Reward:
                                        const {
                                            reward: t
                                        } = this.gp.rewards.getReward(e.id);
                                        t && i.rewards.push(Object.assign(Object.assign({}, t), {
                                            isExists: this.gp.rewards.has(e.id)
                                        }));
                                        break;
                                    case ln.Do.Achievement:
                                        const {
                                            achievement: n
                                        } = this.gp.achievements.getAchievement(e.id);
                                        n && i.achievements.push(Object.assign(Object.assign({}, n), {
                                            isExists: this.gp.achievements.has(e.id)
                                        }));
                                        break;
                                    case ln.Do.Product:
                                        const r = this.gp.payments.getProduct(e.id);
                                        r && i.products.push(Object.assign(Object.assign({}, r), {
                                            isExists: this.gp.payments.has(e.id)
                                        }))
                                }
                            }), [])
                        })), i) : i
                    }
                    has(e) {
                        const {
                            event: t
                        } = Li(this, ki, "m", Ni).call(this, e);
                        return !!(null == t ? void 0 : t.isActive)
                    }
                    isJoined(e) {
                        const {
                            event: t,
                            playerEvent: n
                        } = Li(this, ki, "m", Ni).call(this, e);
                        return !!(null == t ? void 0 : t.isActive) && !!n
                    }
                    join(e) {
                        return t = this, n = void 0, r = function*() {
                            const t = Number(e.id) || e.tag,
                                n = (0, a._)(),
                                i = t => {
                                    const i = "string" == typeof t ? t : t.message;
                                    return n.abort(i), this._events.emit("error:join", i, {
                                        input: e
                                    }), n.ready
                                },
                                {
                                    event: r,
                                    playerEvent: s
                                } = Li(this, ki, "m", Ni).call(this, t);
                            if (!r) return i("event_not_found");
                            if (s) return i("already_joined");
                            try {
                                this.gp.loader.inc();
                                const e = yield this.gp._services.eventsService.join({
                                    eventId: r.id
                                }), {
                                    __typename: t
                                } = e, i = function(e, t) {
                                    var n = {};
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var r = 0;
                                        for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                                    }
                                    return n
                                }(e, ["__typename"]);
                                Li(this, Di, "f").some((e => e.eventId === i.eventId)) || Li(this, Di, "f").push(i), n.done({
                                    event: r,
                                    playerEvent: i
                                }), this._events.emit("join", {
                                    event: r,
                                    playerEvent: i
                                })
                            } catch (e) {
                                i(e)
                            } finally {
                                this.gp.loader.dec()
                            }
                            return n.ready
                        }, new((i = void 0) || (i = Promise))((function(e, s) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(t) {
                                var n;
                                t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function(e) {
                                    e(n)
                                }))).then(a, o)
                            }
                            c((r = r.apply(t, n || [])).next())
                        }));
                        var t, n, i, r
                    }
                }
                Ri = new WeakMap, Oi = new WeakMap, Di = new WeakMap, ki = new WeakSet, Ni = function(e) {
                    const t = {
                            event: null,
                            playerEvent: null
                        },
                        n = Li(this, Oi, "f").find((t => t.tag === e || t.id === e));
                    return n ? (t.event = n, n && (t.playerEvent = Li(this, Di, "f").find((e => e.eventId === n.id))), t) : t
                };
                var Mi, ji, Ui = n(6256);
                class $i {
                    constructor() {
                        Mi.add(this), this.type = function(e, t, n, i) {
                            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                        }(this, Mi, "m", ji).call(this)
                    }
                    _satisfies(e) {
                        return e.includes(this.type)
                    }
                }
                Mi = new WeakSet, ji = function() {
                    const e = new Ui.UAParser,
                        t = e.getOS(),
                        n = e.getDevice();
                    return "iOS" === t.name ? ln.U7.Ios : "Android" === t.name ? ln.U7.Android : "smarttv" === n.type ? ln.U7.Tv : ln.U7.Desktop
                };
                var Gi, Bi, qi, Vi, Wi, zi = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    },
                    Yi = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                class Ki {
                    constructor(e, t) {
                        this.gp = e, Gi.add(this), Bi.set(this, void 0), qi.set(this, []), Vi.set(this, {}), zi(this, Bi, t, "f"), Yi(this, Bi, "f").on("setExperiments", (e => Yi(this, Gi, "m", Wi).call(this, e.playerExperiments)))
                    }
                    get map() {
                        return Object.assign({}, Yi(this, Vi, "f"))
                    }
                    has(e, t) {
                        return e in Yi(this, Vi, "f") && Yi(this, Vi, "f")[e] === t
                    }
                }
                Bi = new WeakMap, qi = new WeakMap, Vi = new WeakMap, Gi = new WeakSet, Wi = function(e) {
                    if (0 === e.length) return;
                    let t = !1;
                    const n = {};
                    zi(this, Vi, e.reduce(((e, i, r) => {
                        var s;
                        return e[i.experiment] = i.cohort, n[`${this.gp.name.toUpperCase()}_AB_${i.experiment}`] = i.cohort, t || (null === (s = Yi(this, qi, "f")[r]) || void 0 === s ? void 0 : s.cohort) === i.cohort || (t = !0), e
                    }), {}), "f"), zi(this, qi, e, "f"), this.gp.analytics._experimentsVisitParams = n, t && this.gp.analytics.setVisitParams(this.gp.analytics.visitParams)
                };
                var Ji, Zi, Xi, Hi, Qi = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    },
                    er = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                class tr extends _.Z {
                    constructor(e, t) {
                        super(), this.gp = e, Ji.add(this), Zi.set(this, void 0), Xi.set(this, []), Qi(this, Zi, t, "f"), er(this, Zi, "f").on("setPlayerSegments", (e => er(this, Ji, "m", Hi).call(this, e.playerSegments, e.enterSegments, e.leftSegments)))
                    }
                    get list() {
                        return [...er(this, Xi, "f")]
                    }
                    has(e) {
                        return er(this, Xi, "f").includes(e)
                    }
                }
                Zi = new WeakMap, Xi = new WeakMap, Ji = new WeakSet, Hi = function(e, t, n) {
                    (0 === er(this, Xi, "f").length && e.length > 0 || t.length > 0 || n.length > 0) && (this.gp.analytics._segmentsVisitParams = e.reduce(((e, t) => (e[`GP_SEGMENT_${t}`] = "1", e)), {}), this.gp.analytics.setVisitParams(this.gp.analytics.visitParams)), Qi(this, Xi, e, "f"), t.forEach((e => this._events.emit("enter", e))), n.forEach((e => this._events.emit("leave", e)))
                };
                var nr, ir, rr, sr, ar = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    or = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    },
                    cr = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                const lr = "empty_tag";
                class hr extends _.Z {
                    constructor(e, t) {
                        super(), this.gp = e, nr.add(this), ir.set(this, void 0), rr.set(this, []), or(this, ir, t, "f"), cr(this, ir, "f").on("setUniques", (e => or(this, rr, e.uniques, "f")))
                    }
                    get list() {
                        return [...cr(this, rr, "f")]
                    }
                    check({
                        tag: e,
                        value: t
                    }) {
                        return ar(this, void 0, void 0, (function*() {
                            e || cr(this, nr, "m", sr).call(this, "check", new Error(lr));
                            try {
                                const n = yield this.gp._services.playerService.checkUniqueValue({
                                    tag: e,
                                    value: t
                                });
                                return this._events.emit("check", {
                                    tag: e,
                                    value: t,
                                    success: n.success
                                }), n.success
                            } catch (e) {
                                cr(this, nr, "m", sr).call(this, "check", e)
                            }
                        }))
                    }
                    register({
                        tag: e,
                        value: t
                    }) {
                        return ar(this, void 0, void 0, (function*() {
                            e || cr(this, nr, "m", sr).call(this, "register", new Error(lr));
                            try {
                                const n = yield this.gp._services.playerService.registerUniqueValue({
                                    tag: e,
                                    value: t
                                });
                                return cr(this, rr, "f").some((e => e.tag === n.tag)) ? or(this, rr, cr(this, rr, "f").map((e => e.tag === n.tag ? n : e)), "f") : cr(this, rr, "f").push(n), this._events.emit("register", {
                                    tag: e,
                                    value: t
                                }), !0
                            } catch (e) {
                                cr(this, nr, "m", sr).call(this, "register", e)
                            }
                        }))
                    }
                    delete({
                        tag: e
                    }) {
                        return ar(this, void 0, void 0, (function*() {
                            e || cr(this, nr, "m", sr).call(this, "delete", new Error(lr)), cr(this, rr, "f").some((t => t.tag === e)) || cr(this, nr, "m", sr).call(this, "delete", new Error("unique_value_not_found"));
                            try {
                                return yield this.gp._services.playerService.deleteUniqueValue({
                                    tag: e
                                }), or(this, rr, cr(this, rr, "f").filter((t => t.tag !== e)), "f"), this._events.emit("delete", {
                                    tag: e
                                }), !0
                            } catch (e) {
                                cr(this, nr, "m", sr).call(this, "delete", e)
                            }
                        }))
                    }
                    get(e) {
                        var t;
                        return (null === (t = cr(this, rr, "f").find((t => t.tag === e))) || void 0 === t ? void 0 : t.value) || ""
                    }
                }
                ir = new WeakMap, rr = new WeakMap, nr = new WeakSet, sr = function(e, t) {
                    throw w.kg.error(t), this._events.emit(`error:${e}`, (null == t ? void 0 : t.message) || t), t
                };
                var dr = function(e, t, n, i) {
                    return new(n || (n = Promise))((function(r, s) {
                        function a(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function o(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, o)
                        }
                        c((i = i.apply(e, t || [])).next())
                    }))
                };
                const ur = e => `_${e}`;
                class pr extends _.Z {
                    constructor(e) {
                        super(), this.storage = e, this.type = "platform"
                    }
                    setStorage(e) {
                        this.type = e
                    }
                    get storages() {
                        return "local" === this.type ? this.storage.localStorages : this.storage._storages
                    }
                    get(e) {
                        return dr(this, void 0, void 0, (function*() {
                            const t = yield this.storage.get(this.storages, ur(e));
                            return this._events.emit("get", {
                                key: e,
                                value: null != t ? t : null
                            }), null != t ? t : null
                        }))
                    }
                    set(e, t) {
                        return dr(this, void 0, void 0, (function*() {
                            yield this.storage.set(this.storages, ur(e), t), this._events.emit("set", {
                                key: e,
                                value: t
                            })
                        }))
                    }
                    getGlobal(e) {
                        return dr(this, void 0, void 0, (function*() {
                            const t = yield this.storage.getRaw(this.storages, ur(e));
                            return this._events.emit("get:global", {
                                key: e,
                                value: null != t ? t : null
                            }), null != t ? t : null
                        }))
                    }
                    setGlobal(e, t) {
                        return dr(this, void 0, void 0, (function*() {
                            yield this.storage.setRaw(this.storages, ur(e), t), this._events.emit("set:global", {
                                key: e,
                                value: t
                            })
                        }))
                    }
                }
                var fr, mr, vr, yr, gr, wr, br, Pr, Er = n(1961),
                    Tr = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    Sr = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    },
                    _r = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    };
                class Ar extends _.Z {
                    constructor({
                        projectId: e,
                        publicToken: t,
                        onReady: n
                    } = {}, i) {
                        var r, s;
                        super(), fr.add(this), this.setBackground = rn, this.name = "", this.isPaused = !1, this.isGameplay = !1, this.isGameStarted = !1, this.logger = w.kg, mr.set(this, void 0), vr.set(this, void 0), yr.set(this, void 0), gr.set(this, void 0), this._params = null === (s = new URL((null === (r = document.currentScript) || void 0 === r ? void 0 : r.src) || document.URL)) || void 0 === s ? void 0 : s.searchParams, this.projectId = null != e ? e : Number(this._params.get("projectId")), this.publicToken = null != t ? t : this._params.get("publicToken"), this.onReady = n, Sr(this, fr, "m", wr).call(this, i)
                    }
                    get nativeSDK() {
                        return this.platform.getNativeSDK()
                    }
                    get serverTime() {
                        return new Date(Sr(this, gr, "f")).toISOString()
                    }
                    get isDev() {
                        var e;
                        return (null === (e = Sr(this, vr, "f")) || void 0 === e ? void 0 : e.isDev) || !1
                    }
                    get isAllowedOrigin() {
                        var e;
                        return (null === (e = Sr(this, vr, "f")) || void 0 === e ? void 0 : e.isAllowedOrigin) || !1
                    }
                    get locale() {
                        return b.h$[this.language] || "en-US"
                    }
                    get isPortrait() {
                        return hn()
                    }
                    init(e) {
                        return Tr(this, void 0, void 0, (function*() {
                            this.channels.on("event:connect", (({
                                hash: e
                            }) => {
                                this.player._firstReqHash !== e && this._events.emit("event:connect")
                            }));
                            const t = () => {
                                    this.ads.isAllowedToResumeGameplay && this.resume()
                                },
                                n = () => {
                                    this.pause()
                                };
                            this.ads.on("fullscreen:start", n), this.ads.on("fullscreen:close", t), this.ads.on("preloader:start", n), this.ads.on("preloader:close", t), this.ads.on("rewarded:start", n), this.ads.on("rewarded:close", t), yield Promise.all([this.ads.checkAdblock()]).catch(w.kg.warn), e.done(this)
                        }))
                    }
                    loadOverlay() {
                        return Tr(this, void 0, void 0, (function*() {
                            this.overlay || (this.overlay = yield Promise.all([n.e(6690), n.e(9278), n.e(8881), n.e(7415)]).then(n.bind(n, 3918)).then((e => e.default(this))), this._events.emit("overlay:ready"))
                        }))
                    }
                    get _overlaySizeOffsets() {
                        return {
                            top: this.ads._stickyBannerOffsets.top,
                            bottom: this.ads._stickyBannerOffsets.bottom
                        }
                    }
                    changeLanguage(e) {
                        return Tr(this, void 0, void 0, (function*() {
                            if (this.language !== e) try {
                                if (!Object.values(b.Uo).includes(e)) throw new Error(`Language ${e} not supported`);
                                this.language = e, this._storage.saveLanguage(e), this.overlay && (yield this.overlay.changeLanguage(e)), Sr(this, yr, "f").setLang(this.language), this._events.emit("change:language", this.language)
                            } catch (e) {
                                w.kg.error(e)
                            }
                        }))
                    }
                    changeAvatarGenerator() {
                        return Tr(this, void 0, void 0, (function*() {
                            w.kg.warn("[DEPRECATED]: changeAvatarGenerator")
                        }))
                    }
                    generateAvatar(e, t) {
                        return (0, Ut.Z)(this.avatarGeneratorTemplate, e, t)
                    }
                    pause() {
                        this.isPaused || (this.isPaused = !0, this._events.emit("pause"))
                    }
                    resume() {
                        this.isPaused && (this.isPaused = !1, this._events.emit("resume"))
                    }
                    gameStart() {
                        return Tr(this, void 0, void 0, (function*() {
                            yield this.ready, this.isGameStarted || (this._events.emit("gameStart"), this.isGameStarted = !0)
                        }))
                    }
                    gameplayStart() {
                        return Tr(this, void 0, void 0, (function*() {
                            yield this.ready, this.isGameplay || (this.isGameplay = !0, this._events.emit("gameplayStart"))
                        }))
                    }
                    gameplayStop() {
                        return Tr(this, void 0, void 0, (function*() {
                            yield this.ready, this.isGameplay && (this.isGameplay = !1, this._events.emit("gameplayStop"))
                        }))
                    }
                }
                mr = new WeakMap, vr = new WeakMap, yr = new WeakMap, gr = new WeakMap, fr = new WeakSet, wr = function(e) {
                    var t;
                    return Tr(this, void 0, void 0, (function*() {
                        const i = (0, a._)();
                        this.ready = i.ready;
                        const h = (null === (t = this._params) || void 0 === t ? void 0 : t.get("callback")) || "onGPInit";
                        this.ready.then((e => {
                            var t, n, i, r;
                            this.onReady ? this.onReady(e) : (null === (n = (t = window)[h]) || void 0 === n || n.call(t, e), "onGSInit" !== h && (null === (r = (i = window).onGSInit) || void 0 === r || r.call(i, e)))
                        })), this.fullscreen = new ge, this.analytics = new Pe, this.leaderboard = new L(this), this.documents = new ht(this), this.players = new $t(this), this.isMobile = r()({
                            tablet: !0,
                            featureDetect: !0
                        }), this.device = new $i;
                        let {
                            platformType: d,
                            platformKey: u
                        } = yield Oe(), p = (0, Er.Yc)();
                        d !== M.z.GAME_DISTRIBUTION && d !== M.z.GAMEPIX && d !== M.z.WG_PLAYGROUND || (p = b.Uo.EN);
                        const f = d === M.z.VK && this.device.type === ln.U7.Ios && "file:" === location.protocol ? "https://api.eponesh.com/gs/api".replace("https", "vkcors") : "https://api.eponesh.com/gs/api";
                        this._storage = new S, this.storage = new pr(this._storage);
                        const m = e.servicesChunk({
                                apiUrl: f,
                                projectId: this.projectId,
                                publicToken: this.publicToken,
                                lang: p || b.Uo.EN,
                                platformType: d,
                                platformKey: u,
                                storage: this._storage
                            }),
                            {
                                apiClient: v,
                                setupAnalytics: y
                            } = m,
                            g = function(e, t) {
                                var n = {};
                                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                    var r = 0;
                                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                                }
                                return n
                            }(m, ["apiClient", "setupAnalytics"]),
                            P = e => {
                                v.setPlayerData(e)
                            };
                        _r(this, yr, v, "f"), this._services = g, this._pointersManager = new mn, _r(this, mr, new cn, "f");
						const originalConsoleError = console.error;
console.error = function() {
};
                        const E = {
                            apiClient: v,
                            gp: this,
                            setupStorage: e => {
                                const t = `gs-db-project-${E.gp.projectId}`,
                                    n = [...e, new Ne.Z(t)],
                                    i = [new Ne.Z(`gs-db-project-${E.gp.projectId}`)];
                                try {
                                    null !== window.localStorage && n.push(new xe.Z(this.projectId))
                                } catch (e) {}
                                return this._storage.setStorages(n, i), this._storage.ready
                            },
                            fetchConfig: e => Tr(this, void 0, void 0, (function*() {
                                yield this._storage.ready;
                                const [t, n, i, r] = yield Promise.all([this._storage.loadLanguage(), this._storage.loadConfig(), this._storage.loadAdsInfo(), Sr(this, mr, "f").getLanguage(this.name)]);
                                return t || this._storage.saveLanguage(null), this.language = r || t || e || p || b.Uo.EN, Sr(this, yr, "f").setLang(this.language), this._services.projectService.fetchConfig().then((e => {
                                    var t, i;
                                    const r = e || n,
                                        {
                                            platformConfig: s
                                        } = r;
                                    return a = s.type === M.z.CUSTOM ? (null === (t = s.authConfig) || void 0 === t ? void 0 : t.configs.web.activeService) === o.D4.Xsolla : (null === (i = s.authConfig) || void 0 === i ? void 0 : i.configs.android.activeService) === o.D4.Xsolla, v.setWithCookie(a), d === M.z.NONE && d !== s.type && Sr(this, yr, "f").setPlatform(s.type, s.tag), this._storage.setSaveInPlatformStorage(!(0, c.q)(s.progressSaveFormat).isLocalSave), r;
                                    var a
                                })).catch((e => (console.error(e), n)))
                            }))
                        };
                        if (e.platformType && e.platformType !== d) throw new Error("wrong platform type");
                        var T, _;
                        (e.platformChunk ? e.platformChunk(E, d) : e.preparePlatform({
                            platformType: d,
                            tools: E
                        })).then((e => Tr(this, void 0, void 0, (function*() {
                            const {
                                adsAdapter: t,
                                playerAdapter: r,
                                platformAdapter: a,
                                socialsAdapter: o,
                                paymentsAdapter: c,
                                projectConfig: h,
                                appAdapter: u,
                                analyticsCounters: p = []
                            } = e;
                            if (_r(this, vr, h, "f"), _r(this, gr, Date.parse(h.serverTime), "f"), $((e => {
                                    _r(this, gr, Sr(this, gr, "f") + e, "f")
                                })), d !== M.z.GAMEPIX && d !== M.z.GAME_DISTRIBUTION && d !== M.z.WG_PLAYGROUND) {
                                const {
                                    counters: e
                                } = y(h.config);
                                e.forEach((e => this.analytics.addCounter(e))), p.forEach((e => this.analytics.addCounter(e)))
                            }
                            this.avatarGenerator = h.config.avatarGenerator, this.avatarGeneratorTemplate = h.config.avatarGeneratorTemplate, this.loader = function(e) {
                                let t = 0;
                                const n = document.createElement("div");

                                function i() {
                                    n.style.display = t > 0 ? "flex" : "none"
                                }
                                return n.classList.add("gs-global-loader"), n.innerHTML = `<div class="gs-loader ${!e&&"gs-loader-hidden"}">\n        <div class="gs-loader__outter"></div>\n        <div class="gs-loader__inner"></div>\n    </div>`, document.body.appendChild(n), {
                                    inc() {
                                        t += 1, i()
                                    },
                                    dec() {
                                        t = t <= 0 ? 0 : t - 1, i()
                                    }
                                }
                            }(h.config.showLoader), this._storage.saveConfig(h);
                            const f = new oi;
                            f.on("updateServerTime", (e => {
                                _r(this, gr, Date.parse(e), "f")
                            })), this.gamesCollections = new Be(this, a), this.platform = new l(h.platformConfig, a), this.ads = new s.Z(this, t, h), this.app = new Ce.Z(this, u, h), this.socials = new Ie(o, this, h), this.channels = new ct(this, h), this.player = new ye({}, h.playerFields, r, this, f, P), this.payments = new Le.Z(this, f, c, h), this.variables = new mt(this, a, h.gameVariables || []), this.images = new xt(this, h.acl), this.files = new jt(this, h.acl), this.achievements = new De.Z(this, f, h), this.rewards = new Un(this, f, h.rewards), this.triggers = new ii(this, f, h), this.schedulers = new Ci(this, f, h.schedulers), this.segments = new tr(this, f), this.events = new Fi(this, f, h.events), this.experiments = new Ki(this, f), this.uniques = new hr(this, f), this.isDev ? (this.devtools = yield Promise.all([n.e(6690), n.e(9278), n.e(9718)]).then(n.bind(n, 4070)).then((e => e.default(this, f, h))), h.config.showReqCounter && Sr(this, yr, "f").addCounterListener((e => {
                                this.devtools.showCounter(e)
                            }))) : w.kg.stopCollect(), Sr(this, fr, "m", Pr).call(this), Sr(this, fr, "m", br).call(this), this.init(i)
                        })))).catch(w.kg.error), T = () => this.pause(), _ = () => {
                            this.ads && (this.ads.isFullscreenPlaying || this.ads.isPreloaderPlaying || this.ads.isRewardedPlaying || this.resume())
                        }, tn.addEventListener("statechange", (e => {
                            nn.includes(e.newState) ? T() : _()
                        }))
                    }))
                }, br = function() {
                    const {
                        showOrientationOverlay: e,
                        orientation: t
                    } = Sr(this, vr, "f").config, n = e && this.isMobile && t != ln.LH.Any && this.device.type !== ln.U7.Tv, i = () => Tr(this, void 0, void 0, (function*() {
                        var e;
                        n && !dn(t) ? (yield this.loadOverlay(), dn(t) || this.overlay.showOrientationOverlay(t)) : null === (e = this.overlay) || void 0 === e || e.closeOrientationOverlay()
                    }));
                    var r;
                    r = e => {
                        this._events.emit("change:orientation", e), i()
                    }, window.matchMedia("(orientation: portrait)").addEventListener("change", (() => requestAnimationFrame((() => r(hn()))))), i()
                }, Pr = function() {
                    return Tr(this, void 0, void 0, (function*() {
                        const {
                            showUnsupportedOSOverlay: e,
                            targetOS: t
                        } = Sr(this, vr, "f").config;
                        this.logger.info(`Running on ${this.device.type}`), e ? this.logger.info(`allowed=(${t.join(",")})`) : this.logger.info("no device restrictions"), e && !this.device._satisfies(t) && (this.logger.info(`${this.device.type} is restricted`), yield this.loadOverlay(), this.overlay.setUnsupportedDeviceOverlay({
                            allowed: t,
                            detected: this.device.type
                        }))
                    }))
                }
            },
            3080: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => j,
                    M: () => U
                });
                var i, r, s, a, o, c, l, h, d, u, p, f, m, v, y, g, w, b, P, E, T, S, _, A = n(6558),
                    I = n(1437),
                    C = n(4835),
                    k = n(8293),
                    R = n(6388),
                    O = n(6041),
                    D = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    N = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    },
                    x = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    },
                    L = function(e, t) {
                        var n = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    };
                const F = "already_unlocked",
                    M = "achievement_not_found";
                class j extends R.Z {
                    constructor(e, t, n) {
                        super(), this.gp = e, i.add(this), r.set(this, void 0), s.set(this, void 0), a.set(this, []), o.set(this, []), c.set(this, []), l.set(this, {}), h.set(this, {}), d.set(this, {}), u.set(this, {}), p.set(this, {}), f.set(this, {}), m.set(this, {}), v.set(this, new Set), N(this, r, n.project.achievements, "f"), n.achievements.forEach((t => {
                            t.name = t.names[e.language] || t.names.en, t.description = t.descriptions[e.language] || t.descriptions.en, t.lockedIcon = (0, O.Z)(t.lockedIcon, 256, 256, !1), t.lockedIconSmall = (0, O.Z)(t.lockedIcon, 48, 48, !1), t.icon = (0, O.Z)(t.icon, 256, 256, !1), t.iconSmall = (0, O.Z)(t.icon, 48, 48, !1)
                        })), N(this, a, [...n.achievements], "f"), N(this, o, [...n.achievementsGroups], "f"), x(this, i, "m", T).call(this), x(this, i, "m", S).call(this), N(this, s, t, "f"), x(this, s, "f").on("setAchievementsList", (e => x(this, i, "m", P).call(this, e.achievements))), x(this, s, "f").on("markAchievementsUnlocked", (e => {
                            e.forEach((e => {
                                const {
                                    achievement: t,
                                    playerAchievement: n
                                } = x(this, i, "m", b).call(this, e);
                                if (!t) return void A.kg.error(`achievement not found, ID: ${e}`);
                                if (n) return void A.kg.error(`player achievement already unlocked, ID: ${e}, Tag: ${t.tag}`);
                                const s = {
                                    achievementId: t.id,
                                    unlocked: !0,
                                    progress: t.maxProgress || 0,
                                    createdAt: (new Date).toISOString()
                                };
                                let a;
                                x(this, r, "f").enableUnlockToast && (a = this.gp.loadOverlay());
                                const o = Object.assign(Object.assign({}, t), s);
                                x(this, i, "m", E).call(this, o), this._events.emit("unlock", o), x(this, r, "f").enableUnlockToast && Promise.all([a, (0, I.p)(U(o)).catch(A.kg.error)]).then((() => {
                                    this.gp.overlay.unlockAchievement(o)
                                }))
                            }))
                        })), this.gp.on("change:language", (e => {
                            x(this, a, "f").forEach((t => {
                                t.name = t.names[e] || t.names.en, t.description = t.descriptions[e] || t.descriptions.en
                            })), x(this, o, "f").forEach((t => {
                                t.name = t.names[e] || t.names.en, t.description = t.descriptions[e] || t.descriptions.en
                            })), x(this, i, "m", T).call(this)
                        }))
                    }
                    get list() {
                        return [...x(this, a, "f")]
                    }
                    get groupsList() {
                        return [...x(this, o, "f")]
                    }
                    get playerAchievementsList() {
                        return [...x(this, c, "f")]
                    }
                    get unlockedList() {
                        return [...x(this, c, "f")]
                    }
                    open({
                        scrollTo: e
                    } = {}) {
                        return D(this, void 0, void 0, (function*() {
                            this.gp.loader.inc();
                            try {
                                const [t] = yield Promise.all([this.fetch(), this.gp.loadOverlay(), (0, I.p)(C.Z.app.trophy).catch(A.kg.error)]);
                                this.gp.loader.dec(), t.achievements.length > 0 ? (this._events.emit("open"), yield this.gp.overlay.openAchievements(t, {
                                    scrollTo: e
                                }).catch(A.kg.error), this._events.emit("close")) : A.kg.error(new Error("Empty achievements list"))
                            } catch (e) {
                                this.gp.loader.dec(), A.kg.error(e)
                            }
                        }))
                    }
                    fetch() {
                        return D(this, void 0, void 0, (function*() {
                            const e = (0, k._)();
                            this.gp.loader.inc();
                            try {
                                const t = {
                                    achievements: this.list,
                                    achievementsGroups: this.groupsList,
                                    playerAchievements: this.unlockedList
                                };
                                e.done(t), this._events.emit("fetch", t)
                            } catch (t) {
                                e.abort(t), this._events.emit("error:fetch")
                            } finally {
                                this.gp.loader.dec()
                            }
                            return e.ready
                        }))
                    }
                    unlock(e) {
                        return D(this, void 0, void 0, (function*() {
                            const t = (0, k._)(),
                                n = n => (t.done({
                                    success: !1,
                                    achievement: null,
                                    error: n
                                }), this._events.emit("error:unlock", n, {
                                    input: e
                                }), t.ready),
                                s = Number(e.id) || e.tag,
                                {
                                    achievement: a,
                                    playerAchievement: o
                                } = x(this, i, "m", b).call(this, s);
                            if (!a) return n(M);
                            if (null == o ? void 0 : o.unlocked) return n(F);
                            if (x(this, v, "f").has(a.id)) return n(F);
                            let c;
                            x(this, l, "f")[s] = t, this.gp.loader.inc(), x(this, r, "f").enableUnlockToast && (c = this.gp.loadOverlay());
                            const h = a.id;
                            try {
                                const e = yield this.gp._services.achievementsService.unlock({
                                    id: h
                                }), {
                                    achievement: n
                                } = e, s = L(e, ["achievement"]), a = Object.assign(Object.assign({}, n), s);
                                x(this, i, "m", E).call(this, a), this._events.emit("unlock", a), x(this, r, "f").enableUnlockToast && Promise.all([c, (0, I.p)(U(a)).catch(A.kg.error)]).then((() => {
                                    this.gp.overlay.unlockAchievement(a)
                                })), t.done({
                                    achievement: a,
                                    success: !0,
                                    error: ""
                                })
                            } catch (i) {
                                "string" == typeof i ? (i === F && x(this, v, "f").add(a.id), A.kg.error(i), n(i)) : (t.abort(i), this._events.emit("error:unlock", i, {
                                    input: e
                                }))
                            } finally {
                                this.gp.loader.dec()
                            }
                            return t.ready.finally((() => {
                                delete x(this, l, "f")[s]
                            })), t.ready
                        }))
                    }
                    getAchievement(e) {
                        return x(this, i, "m", b).call(this, e)
                    }
                    has(e) {
                        var t;
                        return !!(null === (t = x(this, i, "m", b).call(this, e).playerAchievement) || void 0 === t ? void 0 : t.unlocked)
                    }
                    setProgress(e) {
                        var t;
                        return D(this, void 0, void 0, (function*() {
                            const n = (0, k._)(),
                                s = t => (n.done({
                                    success: !1,
                                    achievement: null,
                                    error: t
                                }), this._events.emit("error:progress", t, {
                                    input: e
                                }), n.ready),
                                a = Number(e.id) || e.tag,
                                {
                                    achievement: o
                                } = x(this, i, "m", b).call(this, a);
                            return o ? a in x(this, h, "f") ? (x(this, h, "f")[a] = e.progress, null === (t = x(this, d, "f")[a]) || void 0 === t ? void 0 : t.ready) : (x(this, h, "f")[a] = e.progress, x(this, d, "f")[a] = n, setTimeout((() => D(this, void 0, void 0, (function*() {
                                const t = x(this, h, "f")[a],
                                    {
                                        playerAchievement: c
                                    } = x(this, i, "m", b).call(this, a);
                                if (x(this, v, "f").has(o.id)) return s(F);
                                if (null == c ? void 0 : c.unlocked) return s(F);
                                const l = (null == c ? void 0 : c.progress) || 0;
                                if (l === t) return s("progress_the_same");
                                let d;
                                this.gp.loader.inc(), x(this, r, "f").enableUnlockToast && (d = this.gp.loadOverlay()), yield this.gp._services.achievementsService.setProgress(Object.assign(Object.assign({}, e), {
                                    progress: t
                                })).then((e => {
                                    var {
                                        achievement: t
                                    } = e, s = L(e, ["achievement"]);
                                    const a = Object.assign(Object.assign({}, t), s),
                                        o = Math.floor(l / a.progressStep),
                                        c = Math.floor(a.progress / a.progressStep);
                                    x(this, i, "m", E).call(this, s), x(this, r, "f").enableUnlockToast && (a.unlocked || o < c) && Promise.all([d, (0, I.p)(U(a)).catch(A.kg.error)]).then((() => {
                                        this.gp.overlay.unlockAchievement(a)
                                    })), a.unlocked && this._events.emit("unlock", a), this._events.emit("progress", a), n.done({
                                        achievement: a,
                                        success: !0,
                                        error: ""
                                    })
                                })).catch((t => {
                                    "string" == typeof t ? (t === F && x(this, v, "f").add(o.id), A.kg.error(t), s(t)) : (n.abort(t), this._events.emit("error:progress", t, {
                                        input: e
                                    }))
                                })), this.gp.loader.dec()
                            }))), 1e3), n.ready.finally((() => {
                                delete x(this, d, "f")[a], delete x(this, h, "f")[a]
                            })), n.ready) : s(M)
                        }))
                    }
                    getProgress(e) {
                        const {
                            achievement: t,
                            playerAchievement: n
                        } = x(this, i, "m", b).call(this, e);
                        return t && n ? n.progress : 0
                    }
                }

                function U(e) {
                    let t = "";
                    return t = window.devicePixelRatio > 1 ? e.unlocked ? e.icon || e.lockedIcon : e.lockedIcon || e.icon : e.unlocked ? e.iconSmall || e.lockedIconSmall : e.lockedIconSmall || e.iconSmall, t || C.Z.cdn.trophy
                }
                r = new WeakMap, s = new WeakMap, a = new WeakMap, o = new WeakMap, c = new WeakMap, l = new WeakMap, h = new WeakMap, d = new WeakMap, u = new WeakMap, p = new WeakMap, f = new WeakMap, m = new WeakMap, v = new WeakMap, i = new WeakSet, y = function(e) {
                    return x(this, u, "f")[e] || x(this, p, "f")[e]
                }, g = function(e) {
                    return x(this, f, "f")[e]
                }, w = function(e) {
                    return x(this, o, "f")[e]
                }, b = function(e) {
                    const t = {
                            achievement: null,
                            playerAchievement: null,
                            achievementGroup: null
                        },
                        n = x(this, i, "m", y).call(this, e);
                    if (!n) return t;
                    t.achievement = n;
                    const r = x(this, i, "m", g).call(this, n.id);
                    r && (t.playerAchievement = r);
                    const s = x(this, i, "m", w).call(this, n.id);
                    return s && (t.achievementGroup = s), t
                }, P = function(e) {
                    N(this, c, [...e], "f"), x(this, i, "m", _).call(this)
                }, E = function(e) {
                    x(this, c, "f").some((t => t.achievementId === e.achievementId)) ? N(this, c, x(this, c, "f").map((t => t.achievementId === e.achievementId ? e : t)), "f") : x(this, c, "f").push(e), x(this, i, "m", _).call(this)
                }, T = function() {
                    N(this, u, {}, "f"), N(this, p, {}, "f"), x(this, a, "f").forEach((e => {
                        x(this, u, "f")[e.id] = e, x(this, p, "f")[e.tag] = e
                    }))
                }, S = function() {
                    N(this, m, {}, "f"), x(this, o, "f").forEach((e => {
                        x(this, m, "f")[e.id] = e
                    }))
                }, _ = function() {
                    N(this, f, {}, "f"), x(this, c, "f").forEach((e => {
                        x(this, f, "f")[e.achievementId] = e
                    }))
                }
            },
            4687: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => R
                });
                var i, r, s, a, o, c, l, h, d, u, p, f, m, v, y, g, w = n(6558),
                    b = n(8293),
                    P = n(1438),
                    E = n(6388),
                    T = n(5942),
                    S = n(6041),
                    _ = n(8866),
                    A = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    I = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    },
                    C = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                const k = "product_not_found";
                class R extends E.Z {
                    constructor(e, t, n, f) {
                        super(), this.gp = e, this.adapter = n, i.add(this), r.set(this, void 0), s.set(this, []), a.set(this, []), o.set(this, {}), c.set(this, {}), l.set(this, {}), h.set(this, {}), d.set(this, {}), I(this, a, f.products, "f"), C(this, i, "m", y).call(this), I(this, r, t, "f"), C(this, r, "f").on("setPurchasedList", (e => C(this, i, "m", v).call(this, e.playerPurchases))), C(this, r, "f").on("markPurchasesGiven", (e => {
                            e.forEach((e => {
                                const {
                                    product: t
                                } = C(this, i, "m", p).call(this, e);
                                if (!t) return void w.kg.error(`product not found, ID: ${e}`);
                                const n = {
                                    productId: t.id,
                                    tag: t.tag,
                                    payload: {},
                                    createdAt: this.gp.serverTime,
                                    expiredAt: t.isSubscription ? O(this.gp.serverTime, t.period) : "",
                                    gift: !0,
                                    subscribed: t.isSubscription,
                                    orderStatus: P.i.Paid
                                };
                                C(this, s, "f").push(n), C(this, i, "m", g).call(this), this._events.emit(t.isSubscription ? "subscribe" : "purchase", {
                                    product: t,
                                    purchase: n
                                })
                            }))
                        })), C(this, r, "f").on("syncPurchases", (e => C(this, i, "m", u).call(this).finally(e))), this.gp.on("change:language", (e => {
                            C(this, a, "f").forEach((t => {
                                t.name = t.names[e] || t.names.en, t.description = t.descriptions[e] || t.descriptions.en
                            })), C(this, i, "m", y).call(this)
                        })), this.adapter.mapProducts(this.gp, this.products).then((t => {
                            I(this, a, t, "f"), C(this, a, "f").forEach((t => {
                                t.name = t.names[e.language] || t.names.en, t.description = t.descriptions[e.language] || t.descriptions.en, t.icon = (0, S.Z)(t.icon, 256, 256, !1), t.iconSmall = (0, S.Z)(t.icon, 48, 48, !1)
                            })), C(this, i, "m", y).call(this)
                        }))
                    }
                    get isAvailable() {
                        return this.adapter.isSupportsPayments
                    }
                    get isSubscriptionsAvailable() {
                        return this.adapter.isSupportsSubscriptions
                    }
                    get products() {
                        return [...C(this, a, "f")]
                    }
                    get purchases() {
                        return [...C(this, s, "f")]
                    }
                    fetchProducts() {
                        return A(this, void 0, void 0, (function*() {
                            const e = (0, b._)();
                            this.gp.loader.inc();
                            try {
                                const t = this.purchases,
                                    n = yield this.adapter.mapProducts(this.gp, this.products);
                                I(this, a, n, "f"), C(this, i, "m", y).call(this), e.done({
                                    products: n,
                                    playerPurchases: t
                                }), this._events.emit("fetchProducts", {
                                    products: n,
                                    playerPurchases: t
                                })
                            } catch (t) {
                                e.abort(t), this._events.emit("error:fetchProducts", t)
                            } finally {
                                this.gp.loader.dec()
                            }
                            return e.ready
                        }))
                    }
                    purchase(e) {
                        return A(this, void 0, void 0, (function*() {
                            const t = Number(e.id) || e.tag;
                            if (C(this, o, "f")[t]) throw new Error("payment_in_progress");
                            const n = (0, b._)(),
                                r = t => (n.abort(t), this._events.emit("error:purchase", t, {
                                    input: e
                                }), n.ready),
                                {
                                    product: a
                                } = C(this, i, "m", p).call(this, t);
                            if (!a) return r(k);
                            n.ready.finally((() => {
                                delete C(this, o, "f")[t]
                            })), C(this, o, "f")[t] = n, this.gp.loader.inc();
                            try {
                                let e, t, o = !0,
                                    c = "";
                                if (!this.gp.player.isLoggedInByPlatform && this.adapter.isNeedAuthorizeBeforePurchase)
                                    if (this.gp.platform.type === T.z.YANDEX || this.gp.platform.type === T.z.PARTNER) {
                                        if (!(yield this.gp.player.login({
                                                withSecretCode: !1
                                            }))) return r("user_not_logged_in")
                                    } else yield this.gp.player.sync({
                                        silent: !1
                                    });
                                else this.gp.player.isLoggedInByPlatform && !this.gp.player.credentials && (yield this.gp.player.sync());
                                try {
                                    t = yield this.adapter.purchase(a)
                                } catch (e) {
                                    throw e
                                }
                                if (this.adapter.isServerValidation) {
                                    if (this.gp.platform.type === T.z.OK) try {
                                        yield this.checkPurchaseStatus(this.gp.projectId, "", t, this.gp.player.id, a.id)
                                    } catch (e) {
                                        throw o = !1, c = e.message, c
                                    }
                                    e = {
                                        productId: a.id,
                                        tag: a.tag,
                                        payload: t,
                                        createdAt: this.gp.serverTime,
                                        expiredAt: "",
                                        gift: !1,
                                        orderStatus: P.i.Paid,
                                        subscribed: !1
                                    }
                                } else try {
                                    e = (yield this.gp._services.paymentsService.purchase({
                                        id: a.id,
                                        payload: t
                                    })).purchase
                                } catch (e) {
                                    o = !1, c = e.message
                                }
                                if (!o) throw c;
                                C(this, s, "f").push({
                                    productId: a.id,
                                    tag: a.tag,
                                    createdAt: e.createdAt,
                                    expiredAt: e.expiredAt,
                                    payload: e.payload,
                                    gift: e.gift,
                                    orderStatus: e.orderStatus,
                                    subscribed: e.subscribed
                                }), C(this, i, "m", g).call(this), this._events.emit("purchase", {
                                    product: a,
                                    purchase: e
                                }), n.done({
                                    success: o,
                                    product: a,
                                    purchase: e,
                                    error: c
                                })
                            } catch (e) {
                                r(e)
                            } finally {
                                this.gp.loader.dec()
                            }
                            return n.ready
                        }))
                    }
                    consume(e) {
                        return A(this, void 0, void 0, (function*() {
                            const t = Number(e.id) || e.tag;
                            C(this, c, "f")[t] && (yield C(this, c, "f")[t]);
                            const n = (0, b._)(),
                                r = t => (n.abort(t), this._events.emit("error:consume", t, {
                                    input: e
                                }), n.ready),
                                {
                                    product: a
                                } = C(this, i, "m", p).call(this, t);
                            if (!a) return r(k);
                            C(this, c, "f")[t] = n, this.gp.loader.inc();
                            const o = a.id;
                            try {
                                const {
                                    product: e,
                                    purchase: t
                                } = yield this.gp._services.paymentsService.consume({
                                    id: o
                                });
                                t.gift || (yield this.adapter.consume(t));
                                const r = C(this, s, "f").findIndex((t => t.productId === e.id)); - 1 !== r && (C(this, s, "f").splice(r, 1), C(this, i, "m", g).call(this)), this._events.emit("consume", {
                                    product: e,
                                    purchase: t
                                }), n.done({
                                    product: e,
                                    purchase: t,
                                    success: !0,
                                    error: ""
                                })
                            } catch (e) {
                                r(e)
                            } finally {
                                this.gp.loader.dec()
                            }
                            return n.ready.finally((() => {
                                delete C(this, c, "f")[t]
                            })), n.ready
                        }))
                    }
                    subscribe(e) {
                        return A(this, void 0, void 0, (function*() {
                            const t = Number(e.id) || e.tag;
                            if (C(this, o, "f")[t]) return C(this, o, "f")[t];
                            const n = (0, b._)(),
                                r = t => (n.abort(t), this._events.emit("error:subscribe", t, {
                                    input: e
                                }), n.ready),
                                {
                                    product: a,
                                    purchase: c
                                } = C(this, i, "m", p).call(this, t);
                            if (!a) return r(k);
                            C(this, o, "f")[t] = n, this.gp.loader.inc();
                            try {
                                if (!a.isSubscription) throw new Error(`Not subscription "${t}", please enable subscription on the product`);
                                let e, r, o = !0,
                                    l = "";
                                this.gp.player.isLoggedInByPlatform ? this.gp.player.isLoggedInByPlatform && !this.gp.player.credentials && (yield this.gp.player.sync()) : yield this.gp.player.sync({
                                    silent: !1
                                });
                                try {
                                    r = yield this.adapter.subscribe(a, c)
                                } catch (e) {
                                    throw e
                                }
                                if (this.adapter.isServerValidation) e = {
                                    payload: r,
                                    tag: a.tag,
                                    productId: a.id,
                                    createdAt: this.gp.serverTime,
                                    expiredAt: (null == c ? void 0 : c.expiredAt) || O(this.gp.serverTime, a.period),
                                    gift: !1,
                                    subscribed: !this.adapter.isOneTimeSubscription,
                                    orderStatus: P.i.Paid
                                };
                                else try {
                                    e = (yield this.gp._services.paymentsService.purchase({
                                        id: a.id,
                                        payload: r
                                    })).purchase
                                } catch (e) {
                                    o = !1, l = e.message
                                }
                                o ? (c && I(this, s, C(this, s, "f").filter((e => e.productId !== c.productId)), "f"), C(this, s, "f").push({
                                    tag: a.tag,
                                    productId: a.id,
                                    createdAt: e.createdAt,
                                    expiredAt: e.expiredAt,
                                    payload: e.payload,
                                    gift: e.gift,
                                    subscribed: !0,
                                    orderStatus: e.orderStatus
                                }), C(this, i, "m", g).call(this), this._events.emit("subscribe", {
                                    product: a,
                                    purchase: e
                                })) : w.kg.error(l), n.done({
                                    success: o,
                                    product: a,
                                    purchase: e,
                                    error: l
                                })
                            } catch (e) {
                                r(e)
                            } finally {
                                this.gp.loader.dec()
                            }
                            return n.ready.finally((() => {
                                delete C(this, o, "f")[t]
                            })), n.ready
                        }))
                    }
                    unsubscribe(e) {
                        return A(this, void 0, void 0, (function*() {
                            const t = Number(e.id) || e.tag;
                            if (C(this, o, "f")[t]) return C(this, o, "f")[t];
                            const n = (0, b._)(),
                                r = t => (n.abort(t), this._events.emit("error:unsubscribe", t, {
                                    input: e
                                }), n.ready),
                                {
                                    product: a,
                                    purchase: c
                                } = C(this, i, "m", p).call(this, t);
                            if (!a) return r(k);
                            C(this, o, "f")[t] = n, this.gp.loader.inc();
                            try {
                                if (!a.isSubscription) throw new Error(`Not subscription "${t}", please enable subscription on the product`);
                                if (!c || !c.subscribed) throw new Error("already_unsubscribed");
                                let e = !0,
                                    r = Object.assign({}, c),
                                    o = "";
                                try {
                                    yield this.adapter.unsubscribe(a, c)
                                } catch (e) {
                                    throw w.kg.error(o), e
                                }
                                r.subscribed = !1, I(this, s, C(this, s, "f").map((e => e.productId !== c.productId ? e : Object.assign(Object.assign({}, e), {
                                    subscribed: !1
                                }))), "f"), C(this, i, "m", g).call(this), this._events.emit("unsubscribe", {
                                    product: a,
                                    purchase: r
                                }), n.done({
                                    success: e,
                                    product: a,
                                    purchase: r,
                                    error: o
                                })
                            } catch (e) {
                                r(e)
                            } finally {
                                this.gp.loader.dec()
                            }
                            return n.ready.finally((() => {
                                delete C(this, o, "f")[t]
                            })), n.ready
                        }))
                    }
                    checkPurchaseStatus(e, t, n, i, r) {
                        return A(this, void 0, void 0, (function*() {
                            let s = 0;
                            const a = () => A(this, void 0, void 0, (function*() {
                                try {
                                    const s = yield this.gp._services.paymentsService.getPlayerPurchase({
                                        projectId: e,
                                        purchaseId: t,
                                        payload: n,
                                        playerId: i,
                                        productId: r
                                    });
                                    if (!0 === s.subscribed || s.orderStatus === P.i.Paid) return !0
                                } catch (e) {
                                    if ("internal_error" === e) throw new Error("purchase:error " + e);
                                    console.error("error during purchase status check: ", e)
                                }
                                if (s++, s >= 12) throw new Error("purchase_timeout");
                                return !1
                            }));
                            for (; s < 12 && !(yield a());) yield(0, _.Z)(5e3);
                            if (s >= 12) throw new Error("purchase_timeout")
                        }))
                    }
                    has(e) {
                        return !!C(this, i, "m", p).call(this, e).purchase
                    }
                    getProduct(e) {
                        return C(this, i, "m", p).call(this, e).product
                    }
                    getPurchase(e) {
                        return C(this, i, "m", p).call(this, e).purchase
                    }
                }

                function O(e, t) {
                    return function(e, t) {
                        const n = new Date(e);
                        return n.setDate(n.getDate() + t), n
                    }(new Date(e), t).toISOString()
                }
                r = new WeakMap, s = new WeakMap, a = new WeakMap, o = new WeakMap, c = new WeakMap, l = new WeakMap, h = new WeakMap, d = new WeakMap, i = new WeakSet, u = function() {
                    return A(this, void 0, void 0, (function*() {
                        const {
                            purchases: e,
                            payload: t
                        } = yield this.adapter.fetchPurchases();
                        if (0 === e.length) return;
                        const {
                            purchases: n
                        } = yield this.gp._services.paymentsService.sync({
                            purchases: e,
                            payload: t
                        });
                        C(this, i, "m", v).call(this, n), this.adapter.consumeAllExpired(this.products, e, n)
                    }))
                }, p = function(e) {
                    const t = {
                            product: null,
                            purchase: null
                        },
                        n = C(this, i, "m", f).call(this, e);
                    if (!n) return t;
                    t.product = n;
                    const r = C(this, i, "m", m).call(this, n.id);
                    return r && (t.purchase = r), t
                }, f = function(e) {
                    return C(this, l, "f")[e] || C(this, h, "f")[e]
                }, m = function(e) {
                    return C(this, d, "f")[e]
                }, v = function(e) {
                    I(this, s, e.map((e => Object.assign(Object.assign({}, e), {
                        id: e.productId
                    }))), "f"), C(this, i, "m", g).call(this)
                }, y = function() {
                    I(this, l, {}, "f"), I(this, h, {}, "f"), C(this, a, "f").forEach((e => {
                        C(this, l, "f")[e.id] = e, C(this, h, "f")[e.tag] = e
                    }))
                }, g = function() {
                    I(this, s, C(this, s, "f").reduce(((e, t) => {
                        const n = C(this, i, "m", f).call(this, t.productId);
                        return n && e.push(Object.assign(Object.assign({}, t), {
                            id: n.id,
                            tag: n.tag
                        })), e
                    }), []), "f"), I(this, d, {}, "f"), C(this, s, "f").forEach((e => {
                        C(this, d, "f")[e.productId] = e
                    }))
                }
            },
            8276: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => l,
                    o: () => d
                });
                var i = n(6438),
                    r = n(180),
                    s = n(6388),
                    a = n(6558),
                    o = n(8866),
                    c = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    };
                class l extends s.Z {
                    constructor(e, t, n) {
                        super(), this.gp = e, this.adapter = t, this.config = n, this.isAdblockEnabled = !1, this.fullscreenDisplayIntervalId = 0, this.stickyRefreshIntervalId = 0, this.isStickyPlaying = !1, this.isRewardedPlaying = !1, this.isFullscreenPlaying = !1, this.isPreloaderPlaying = !1, this.adsInfo = e._storage.temp.adsInfo;
                        const i = this.config.platformConfig.banners;
                        this.stickyBanner = i.find((e => e.type === r.$.STICKY)), this.fullscreenBanner = i.find((e => e.type === r.$.FULLSCREEN)), this.rewardedVideo = i.find((e => e.type === r.$.REWARDED)), this.preloaderBanner = i.find((e => e.type === r.$.PRELOADER)), this.banners = i.reduce(((e, t) => (e[t.type] = t, e)), {}), this._checkLimitsExpired(!0), setInterval((() => this._checkLimitsExpired(!1)), 1e3)
                    }
                    get needToLeaveFullscreenBeforeAds() {
                        return this.adapter.needToLeaveFullscreenBeforeAds
                    }
                    get isAllowedToResumeGameplay() {
                        return !this.isPreloaderPlaying && !this.isFullscreenPlaying && !this.isRewardedPlaying
                    }
                    get isStickyAvailable() {
                        var e;
                        return this.adapter.isStickyAvailable && (null === (e = this.stickyBanner) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(r.$.STICKY)
                    }
                    get isFullscreenAvailable() {
                        var e;
                        return !this.isFullscreenPlaying && !this.isRewardedPlaying && !this.isPreloaderPlaying && this.adapter.isFullscreenAvailable && (null === (e = this.fullscreenBanner) || void 0 === e ? void 0 : e.enabled) && !this.fullscreenDisplayIntervalId && !this.isBannerLimitReached(r.$.FULLSCREEN)
                    }
                    get isRewardedAvailable() {
                        var e;
                        return !this.isFullscreenPlaying && !this.isRewardedPlaying && !this.isPreloaderPlaying && this.adapter.isRewardedAvailable && (null === (e = this.rewardedVideo) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(r.$.REWARDED)
                    }
                    get isPreloaderAvailable() {
                        var e;
                        return !this.isFullscreenPlaying && !this.isRewardedPlaying && !this.isPreloaderPlaying && this.adapter.isPreloaderAvailable && (null === (e = this.preloaderBanner) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(r.$.PRELOADER)
                    }
                    get isCountdownOverlayEnabled() {
                        return this.config.project.ads.showCountdownOverlay
                    }
                    get isRewardedFailedOverlayEnabled() {
                        return this.config.project.ads.showRewardedFailedOverlay
                    }
                    get canShowFullscreenBeforeGamePlay() {
                        return this.adapter.canShowFullscreenBeforeGamePlay
                    }
                    checkAdblock() {
                        return c(this, void 0, void 0, (function*() {
                            return this.isAdblockEnabled = yield(0, i.Z)(), this.gp.logger.info("adblock is " + (this.isAdblockEnabled ? "detected" : "not detected")), this.isAdblockEnabled
                        }))
                    }
                    sendShowAdsInfo(e) {
                        /*this.config.acl.canCollectStats&&fetch(`https://api.eponesh.com/gs/api/t/b/?q=${btoa(JSON.stringify(Object.assign(Object.assign({},e),{platformType:this.gp.platform.type,customPlatformTag:this.gp.platform.tag,projectId:this.gp.projectId})))}`)*/
                    }
                    showFullscreen({
                        showCountdownOverlay: e = !1
                    } = {}) {
                        return c(this, void 0, void 0, (function*() {
                            if (yield this.gp._pointersManager.waitForPointersUp(), !this.isFullscreenAvailable) return this._events.emit("close", !1), this._events.emit("fullscreen:close", !1), !1;
                            this._events.emit("start"), this._events.emit("fullscreen:start"), this.sendShowAdsInfo({
                                type: "FULLSCREEN",
                                action: "REQUEST"
                            }), this.fullscreenDisplayIntervalId = window.setTimeout((() => {
                                this.fullscreenDisplayIntervalId = 0
                            }), 1e3 * this.fullscreenBanner.frequency), this.isFullscreenPlaying = !0;
                            const t = e || this.isCountdownOverlayEnabled,
                                n = this.gp.fullscreen.isEnabled,
                                i = n && this.adapter.needToLeaveFullscreenBeforeAds;
                            (t || i) && (yield this.gp.loadOverlay()), t && (yield this.gp.loadOverlay(), this.gp.overlay.showPreAdCountdownOverlay(), yield(0, o.Z)(2e3)), i && (this.gp.fullscreen.close(), yield(0, o.Z)(200));
                            let s = !1;
                            try {
                                s = !!(yield this.adapter.showFullscreen(this.fullscreenBanner))
                            } catch (e) {
                                a.kg.error(e)
                            }
                            return this.sendShowAdsInfo({
                                type: "FULLSCREEN",
                                action: s ? "DISPLAY" : "ERROR"
                            }), (t || i) && (this.gp.overlay.closePreAdCountdownOverlay(), yield this.gp.overlay.showPreAdCountdownOverlayFinish(n)), this.isFullscreenPlaying = !1, this._events.emit("close", s), this._events.emit("fullscreen:close", s), s && this._trackBannerDisplay(r.$.FULLSCREEN), s
                        }))
                    }
                    showRewardedVideo({
                        showRewardedFailedOverlay: e = !1
                    } = {}) {
                        return c(this, void 0, void 0, (function*() {
                            if (yield this.gp._pointersManager.waitForPointersUp(), !this.isRewardedAvailable) return this._events.emit("close", !1), this._events.emit("rewarded:close", !1), !1;
                            const t = this.gp.fullscreen.isEnabled,
                                n = t && this.adapter.needToLeaveFullscreenBeforeAds;
                            n && (yield this.gp.loadOverlay(), this.gp.fullscreen.close(), yield(0, o.Z)(200)), this._events.emit("start"), this._events.emit("rewarded:start"), this.sendShowAdsInfo({
                                type: "REWARDED",
                                action: "REQUEST"
                            }), this.isRewardedPlaying = !0;
                            const i = !!(yield this.adapter.showRewardedVideo(this.rewardedVideo).catch((() => !1)));
                            n && (this.gp.overlay.closePreAdCountdownOverlay(), yield this.gp.overlay.showPreAdCountdownOverlayFinish(t)), this.sendShowAdsInfo({
                                type: "REWARDED",
                                action: i ? "DISPLAY" : "ERROR"
                            });
                            const s = e || this.isRewardedFailedOverlayEnabled;
                            return !i && s && (yield this.gp.loadOverlay(), yield this.gp.overlay.showRewardedFailedOverlay()), this.isRewardedPlaying = !1, this._events.emit("close", i), this._events.emit("rewarded:close", i), this._trackBannerDisplay(r.$.REWARDED), i && this._events.emit("rewarded:reward"), i
                        }))
                    }
                    showPreloader() {
                        return c(this, void 0, void 0, (function*() {
                            if (yield this.gp._pointersManager.waitForPointersUp(), !this.isPreloaderAvailable) return this._events.emit("close", !1), this._events.emit("preloader:close", !1), !1;
                            const e = this.gp.fullscreen.isEnabled,
                                t = e && this.adapter.needToLeaveFullscreenBeforeAds;
                            t && (yield this.gp.loadOverlay(), this.gp.fullscreen.close(), yield(0, o.Z)(200)), this.sendShowAdsInfo({
                                type: "PRELOADER",
                                action: "REQUEST"
                            }), this._events.emit("start"), this._events.emit("preloader:start"), this.isPreloaderPlaying = !0;
                            const n = !!(yield this.adapter.showPreloader(this.preloaderBanner).catch((() => !1)));
                            return t && (this.gp.overlay.closePreAdCountdownOverlay(), yield this.gp.overlay.showPreAdCountdownOverlayFinish(e)), this.sendShowAdsInfo({
                                type: "PRELOADER",
                                action: n ? "DISPLAY" : "ERROR"
                            }), this.isPreloaderPlaying = !1, this._events.emit("close", n), this._events.emit("preloader:close", n), n && this._trackBannerDisplay(r.$.PRELOADER), n
                        }))
                    }
                    showSticky() {
                        var e;
                        return c(this, void 0, void 0, (function*() {
                            if (!this.isStickyAvailable) return this._events.emit("close", !1), this._events.emit("sticky:close", !1), !1;
                            !this.stickyRefreshIntervalId && this.stickyBanner.refreshInterval && (this.stickyRefreshIntervalId = window.setInterval((() => this.refreshSticky()), 1e3 * this.stickyBanner.refreshInterval)), this._events.emit("start"), this._events.emit("sticky:start"), this.sendShowAdsInfo({
                                type: "STICKY",
                                action: "REQUEST"
                            });
                            const t = yield this.adapter.showSticky(this.stickyBanner).catch((() => !1));
                            return this.sendShowAdsInfo({
                                type: "STICKY",
                                action: t ? "DISPLAY" : "ERROR"
                            }), this.isStickyPlaying = t, this._events.emit("sticky:render", t), t && this._trackBannerDisplay(r.$.STICKY), null === (e = this.gp.overlay) || void 0 === e || e.setSizeOffsets(this.gp._overlaySizeOffsets), t
                        }))
                    }
                    refreshSticky() {
                        var e;
                        return c(this, void 0, void 0, (function*() {
                            if (!this.isStickyAvailable) return this._events.emit("close", !1), this._events.emit("sticky:close", !1), !1;
                            clearInterval(this.stickyRefreshIntervalId), this.stickyBanner.refreshInterval && (this.stickyRefreshIntervalId = window.setInterval((() => this.refreshSticky()), 1e3 * this.stickyBanner.refreshInterval)), this._events.emit("sticky:refresh"), this.sendShowAdsInfo({
                                type: "STICKY",
                                action: "REQUEST"
                            });
                            const t = yield this.adapter.refreshSticky(this.stickyBanner).catch((() => !1));
                            return this.sendShowAdsInfo({
                                type: "STICKY",
                                action: t ? "DISPLAY" : "ERROR"
                            }), this.isStickyPlaying = t, this._events.emit("sticky:render", t), t && this._trackBannerDisplay(r.$.STICKY), null === (e = this.gp.overlay) || void 0 === e || e.setSizeOffsets(this.gp._overlaySizeOffsets), t
                        }))
                    }
                    closeSticky() {
                        var e;
                        return c(this, void 0, void 0, (function*() {
                            const t = yield this.adapter.closeSticky();
                            return this.isStickyPlaying = !1, this._events.emit("close", !0), this._events.emit("sticky:close", !0), clearInterval(this.stickyRefreshIntervalId), null === (e = this.gp.overlay) || void 0 === e || e.setSizeOffsets(this.gp._overlaySizeOffsets), t
                        }))
                    }
                    get _stickyBannerOffsets() {
                        const {
                            height: e,
                            isOverlapping: t
                        } = this.adapter.stickyBannerConfig, {
                            position: n
                        } = this.stickyBanner;
                        return {
                            top: this.isStickyPlaying && t && "top" === n ? e : 0,
                            bottom: this.isStickyPlaying && t && "bottom" === n ? e : 0
                        }
                    }
                    _trackBannerDisplay(e) {
                        const t = this.adsInfo.limits[e];
                        t.hour.count += 1, t.day.count += 1, t.session.count += 1, t.day.timestamp || (t.day.timestamp = Date.now()), t.hour.timestamp || (t.hour.timestamp = Date.now()), this._saveAdsInfo()
                    }
                    _checkLimitsExpired(e) {
                        let t = !1;
                        Object.values(this.adsInfo.limits).forEach((n => {
                            e && (n.session.count = 0), h(n.hour.timestamp, 36e5) && (n.hour.timestamp = 0, n.hour.count = 0, t = !0), h(n.day.timestamp, 864e5) && (n.day.timestamp = 0, n.hour.count = 0, t = !0)
                        })), t && this._saveAdsInfo()
                    }
                    _saveAdsInfo() {
                        this.gp._storage.saveAdsInfo(this.adsInfo)
                    }
                    isBannerLimitReached(e) {
                        return this.isBannerLimitTypeReached(e, "hour") || this.isBannerLimitTypeReached(e, "day") || this.isBannerLimitTypeReached(e, "session")
                    }
                    isBannerLimitTypeReached(e, t) {
                        const n = this.banners[e].limits[t];
                        return !!n && this.adsInfo.limits[e][t].count >= n
                    }
                }

                function h(e, t) {
                    return !!e && (new Date).getTime() - new Date(e).getTime() > t
                }
                const d = (e, t) => t ? e.mobileConfig : e.desktopConfig
            },
            6316: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var i = n(4917),
                    r = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    };
                class s {
                    constructor({
                        counterId: e
                    }) {
                        this.visitParams = {}, this.counterId = e;
                        const t = window;
                        t.dataLayer = t.dataLayer || [], t.gtag = function() {
                            t.dataLayer.push(arguments)
                        }, this.gtag("js", new Date), this.gtag("config", e, {
                            send_page_view: !1
                        }), (0, i.Z)({
                            src: `//www.googletagmanager.com/gtag/js?id=${e}`
                        })
                    }
                    get gtag() {
                        return window.gtag
                    }
                    hit(e) {
                        return r(this, void 0, void 0, (function*() {
                            this.gtag("event", "page_view", {
                                page_location: e,
                                send_to: this.counterId
                            })
                        }))
                    }
                    goal(e, t) {
                        return r(this, void 0, void 0, (function*() {
                            this.gtag("event", e, t ? Object.assign(Object.assign({}, this.visitParams), {
                                value: t
                            }) : Object.assign({}, this.visitParams))
                        }))
                    }
                    setVisitParams(e) {
                        this.visitParams = e
                    }
                }
            },
            8266: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var i = n(4917),
                    r = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    };
                class s {
                    constructor({
                        counterId: e
                    }) {
                        this.visitParams = {}, this.counterId = e;
                        const t = window;
                        t.ym = t.ym || function() {
                            (t.ym.a = t.ym.a || []).push(arguments), t.ym.l = Date.now()
                        }, t.ym(e, "init", {
                            accurateTrackBounce: !0
                        }), this.ym = window.ym, (0, i.Z)({
                            src: ""
                        })
                    }
                    hit(e) {
                        return r(this, void 0, void 0, (function*() {
                            this.ym(this.counterId, "hit", e, {
                                params: this.visitParams
                            })
                        }))
                    }
                    goal(e, t) {
                        return r(this, void 0, void 0, (function*() {
                            this.ym(this.counterId, "reachGoal", t ? `${e}_${t}` : e, this.visitParams)
                        }))
                    }
                    setVisitParams(e) {
                        this.visitParams = e, this.ym(this.counterId, "params", e)
                    }
                }
            },
            2954: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var i = n(6388),
                    r = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    };
                class s extends i.Z {
                    constructor(e, t, n) {
                        super(), this.gp = e, this.adapter = t, this.config = n, this.title = this.config.project.name, this.description = this.config.project.description, this.image = this.config.project.icon
                    }
                    get url() {
                        return this.config.platformConfig.gameLink || this.gp.platform.getSDK().appUrl || ""
                    }
                    get canAddShortcut() {
                        return this.adapter.canAddShortcut
                    }
                    get canRequestReview() {
                        return this.adapter.canRequestReview
                    }
                    get isAlreadyReviewed() {
                        return this.adapter.isAlreadyReviewed
                    }
                    addShortcut() {
                        return r(this, void 0, void 0, (function*() {
                            const e = yield this.adapter.addShortcut();
                            return this._events.emit("addShortcut", e), e
                        }))
                    }
                    requestReview() {
                        return r(this, void 0, void 0, (function*() {
                            const e = yield this.adapter.requestReview();
                            return e.success ? this._events.emit("review", e) : this._events.emit("error:review", e.error), e
                        }))
                    }
                    requestGameUrl() {
                        return this.adapter.requestGameUrl()
                    }
                }
            },
            6388: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var i = n(5585),
                    r = n.n(i);
                class s {
                    constructor() {
                        this._events = new(r())
                    }
                    on(e, t) {
                        this._events.on(e, t)
                    }
                    off(e, t) {
                        this._events.off(e, t)
                    }
                    once(e, t) {
                        this._events.once(e, t)
                    }
                }
            },
            264: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => p
                });
                var i, r, s, a, o = n(6558),
                    c = n(6388),
                    l = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    },
                    h = function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
                    };
                const d = {
                        data: e => String(e || ""),
                        stats: e => Number(e) || 0,
                        flag: e => Boolean(e) || !1,
                        service: null,
                        accounts: null
                    },
                    u = ["name", "avatar"];
                class p extends c.Z {
                    constructor(e = {}, t, n) {
                        super(), this.coreSdk = n, i.add(this), this.credentials = "", this.modifiedAt = "", r.set(this, {}), s.set(this, []), this._wasReset = !1, this.isPublicFieldsDirty = !1, l(this, i, "m", a).call(this, t), this.fromJSON(e)
                    }
                    get id() {
                        return this.state.id
                    }
                    get score() {
                        return this.get("score")
                    }
                    set score(e) {
                        this.set("score", e)
                    }
                    get name() {
                        return this.get("name")
                    }
                    set name(e) {
                        this.set("name", e)
                    }
                    get avatar() {
                        return this.get("avatar")
                    }
                    set avatar(e) {
                        this.set("avatar", e)
                    }
                    get isStub() {
                        return !this.fields.filter((e => !e.key.endsWith(":timestamp") && !u.includes(e.key))).some((e => this.get(e.key) !== e.default))
                    }
                    fromJSON(e) {
                        var t, n, i;
                        this.state = {
                            id: e.id || 0,
                            active: null === (t = e.active) || void 0 === t || t,
                            removed: null !== (n = e.removed) && void 0 !== n && n,
                            test: null !== (i = e.test) && void 0 !== i && i,
                            name: e.name || "",
                            avatar: e.avatar || "",
                            score: e.score || 0,
                            credentials: e.credentials || ""
                        }, e.credentials && (this.credentials = String(e.credentials)), e.modifiedAt && (this.modifiedAt = String(e.modifiedAt)), this.fields.forEach((t => {
                            if (!(t.key in e)) return void(this.state[t.key] = t.default);
                            const n = d[t.type];
                            if (!n) return void(this.state[t.key] = e[t.key] || t.default);
                            const i = n(e[t.key]);
                            this.state[t.key] = t.variants.length && !t.variants.some((e => e.value === i)) ? t.default : i, t.intervalIncrement && function(e, t, n, i) {
                                Object.defineProperty(i, `${n.key}:secondsLeft`, {
                                    enumerable: !1,
                                    get: () => {
                                        const i = t.get(`${n.key}:incrementValue`) < 0,
                                            r = i ? t.getMinValue(n.key) : t.getMaxValue(n.key),
                                            s = t.get(n.key);
                                        if (void 0 !== r) {
                                            if (i && s <= r) return 0;
                                            if (!i && s >= r) return 0
                                        }
                                        const a = t.get(`${n.key}:timestamp`);
                                        if (!a) return 0;
                                        const o = new Date(a);
                                        if (isNaN(o.getTime())) return 0;
                                        const c = new Date(e.serverTime).getTime() - o.getTime(),
                                            l = t.get(`${n.key}:incrementInterval`) - Math.ceil(c / 1e3);
                                        return l >= 0 ? l : 0
                                    }
                                }), Object.defineProperty(i, `${n.key}:secondsLeftTotal`, {
                                    enumerable: !1,
                                    get: () => {
                                        const e = t.get(`${n.key}:incrementValue`),
                                            i = e < 0,
                                            r = i ? t.getMinValue(n.key) : t.getMaxValue(n.key),
                                            s = t.get(n.key);
                                        if (void 0 !== r) {
                                            if (i && s <= r) return 0;
                                            if (!i && s >= r) return 0
                                        }
                                        const a = t.get(`${n.key}:incrementInterval`),
                                            o = i ? s - r : r - s,
                                            c = Math.ceil(o / Math.abs(e)) * a - (a - t.get(`${n.key}:secondsLeft`));
                                        return c >= 0 ? c : 0
                                    }
                                })
                            }(this.coreSdk, this, t, this.state)
                        })), this._events.emit("change")
                    }
                    toJSON() {
                        return Object.assign(Object.assign({}, this.state), {
                            modifiedAt: this.coreSdk.serverTime,
                            credentials: this.credentials
                        })
                    }
                    getField(e) {
    const t = l(this, r, "f")[e];
    if (!t) {
        const t = `Field "${e}" not exists on player model`;
        // Убираем вызов o.kg.error и просто выбрасываем ошибку
        throw new Error(t);  // Выбрасываем ошибку без вызова o.kg.error
    }
}
                    getFieldName(e) {
                        return this.getField(e).name || ""
                    }
                    getFieldVariantName(e, t) {
                        var n;
                        return (null === (n = this.getField(e).variants.find((e => e.value === t))) || void 0 === n ? void 0 : n.name) || ""
                    }
                    getMinValue(e) {
                        var t;
                        if (null == (null === (t = this.getField(e).limits) || void 0 === t ? void 0 : t.min)) {
                            const t = `minValue not exists on field "${e}"`;
                            throw o.kg.error(t), new Error(t)
                        }
                        return this.get(`${e}:min`)
                    }
                    getMaxValue(e) {
                        var t;
                        if (null == (null === (t = this.getField(e).limits) || void 0 === t ? void 0 : t.max)) {
                            const t = `maxValue not exists on field "${e}"`;
                            throw o.kg.error(t), new Error(t)
                        }
                        return this.get(`${e}:max`)
                    }
                    get(e) {
                        return this.state[e]
                    }
                    set(e, t) {
                        var n, i;
                        const r = this.state[e];
                        if (this.state[e] = this._convert(e, t), r !== this.state[e]) {
                            this.updateTime = Date.now();
                            const t = this.getField(e);
                            if (t.public && (this.isPublicFieldsDirty = !0), t.limits) {
                                const {
                                    couldGoOverLimit: r
                                } = t.limits, s = this.get(`${e}:max`), a = this.get(`${e}:min`), o = this.get(`${t.key}:incrementValue`), c = this.get(t.key), l = `${t.key}:timestamp`;
                                null !== t.limits.max && c >= s ? (r || (this.state[e] = s), this._events.emit("field:maximum", {
                                    field: t
                                }), t.intervalIncrement && o > 0 && (this.state[l] = "")) : null !== t.limits.min && c <= a && (this.state[e] = a, this._events.emit("field:minimum", {
                                    field: t
                                }), t.intervalIncrement && o < 0 && (this.state[l] = ""));
                                const h = !!(null === (n = this.state[l]) || void 0 === n ? void 0 : n.length);
                                t.intervalIncrement && !h && (o > 0 && c < s || o < 0 && c > a) && (this.state[`${t.key}:timestamp`] = new Date(null === (i = this.coreSdk) || void 0 === i ? void 0 : i.serverTime).toISOString())
                            }
                            this._events.emit("change")
                        }
                    }
                    add(e, t) {
                        return this.set(e, this.get(e) + this._convert(e, t))
                    }
                    toggle(e) {
                        return this.set(e, !this.get(e))
                    }
                    has(e) {
                        return Boolean(this.get(e))
                    }
                    reset() {
                        this._wasReset = !0, this.fields.forEach((e => this.set(e.key, e.default)))
                    }
                    remove() {
                        this.state.id = 0, this.reset()
                    }
                    _convert(e, t) {
                        const n = this.getField(e),
                            i = d[n.type];
                        if (!i) {
                            const t = `Cannot mutate "${e}", it's readonly`;
                            throw o.kg.error(t), new Error(t)
                        }
                        const r = i(t);
                        if (n.variants.length && !n.variants.some((e => e.value === r))) {
                            const t = `Invalid variant ${r} of "${e}"`;
                            throw o.kg.error(t), new Error(t)
                        }
                        return r
                    }
                    _initializeIncrementFields() {
                        l(this, s, "f").forEach((e => {
                            e.intervalIncrement && this._incrementField(e)
                        }))
                    }
                    _incrementField(e) {
                        const t = this.get(e.key),
                            n = this.get(`${e.key}:max`),
                            i = this.get(`${e.key}:min`),
                            r = this.get(`${e.key}:incrementInterval`),
                            s = this.get(`${e.key}:incrementValue`),
                            a = Date.parse(this.coreSdk.serverTime),
                            o = Date.parse(this.get(`${e.key}:timestamp`)) || a,
                            c = (a - o) / 1e3,
                            l = Math.floor(c / r);
                        if (l > 0 && (s > 0 && t < n || s < 0 && t > i)) {
                            let a = t + l * s;
                            a = Math.min(Math.max(a, i), n), this._events.emit("field:increment", {
                                field: e,
                                oldValue: t,
                                newValue: a
                            }), this.set(e.key, a);
                            const c = r * l * 1e3 + o;
                            this.state[`${e.key}:timestamp`] = new Date(c).toISOString()
                        }
                    }
                    _syncIncrementVariable() {
                        this._initializeIncrementFields()
                    }
                }
                r = new WeakMap, s = new WeakMap, i = new WeakSet, a = function(e) {
                    this.fields = e, h(this, s, e.filter((e => !!e.limits)), "f"), h(this, r, {}, "f"), e.forEach((e => {
                        l(this, r, "f")[e.key] = e
                    }))
                }
            },
            2231: (e, t, n) => {
                "use strict";

                function i(e) {
                    return new Promise((function(t, n) {
                        e.oncomplete = e.onsuccess = function() {
                            return t(e.result)
                        }, e.onabort = e.onerror = function() {
                            return n(e.error)
                        }
                    }))
                }

                function r(e, t) {
                    var n = indexedDB.open(e);
                    n.onupgradeneeded = function() {
                        return n.result.createObjectStore(t)
                    };
                    var r = i(n);
                    return function(e, n) {
                        return r.then((function(i) {
                            return n(i.transaction(t, e).objectStore(t))
                        }))
                    }
                }
                var s;

                function a() {
                    return s || (s = r("keyval-store", "keyval")), s
                }
                n.d(t, {
                    Z: () => l
                });
                var o = n(6558),
                    c = n(8293);
                class l {
                    constructor(e) {
                        this.dbName = e, this.isLocal = !0;
                        try {
                            this.store = r(this.dbName, "storage")
                        } catch (e) {
                            o.kg.error(e)
                        }
                    }
                    set(e, t) {
                        return this.store ? function(e, t) {
                            return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a())("readwrite", (function(n) {
                                return n.put(t, e), i(n.transaction)
                            }))
                        }(e, t, this.store).catch((() => null)) : Promise.resolve()
                    }
                    get(e) {
                        if (!this.store) return Promise.resolve(null);
                        const t = (0, c._)({
                            timeout: 2e3
                        });
                        return function(e) {
                            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a())("readonly", (function(t) {
                                return i(t.get(e))
                            }))
                        }(e, this.store).then(t.done).catch((() => t.done(null))), t.ready
                    }
                }
            },
            2665: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => a
                });
                var i, r = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, o)
                            }
                            c((i = i.apply(e, t || [])).next())
                        }))
                    },
                    s = function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    };
                class a {
                    constructor(e) {
                        this.projectId = e, i.set(this, void 0), this.isLocal = !0;
                        try {
                            ! function(e, t, n, i, r) {
                                if ("m" === i) throw new TypeError("Private method is not writable");
                                if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                                "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                            }(this, i, window.localStorage, "f")
                        } catch (e) {}
                    }
                    getKey(e) {
                        return `gs-db-project-${this.projectId}-${e}`
                    }
                    set(e, t) {
                        return r(this, void 0, void 0, (function*() {
                            s(this, i, "f").setItem(this.getKey(e), JSON.stringify(t))
                        }))
                    }
                    get(e) {
                        return r(this, void 0, void 0, (function*() {
                            try {
                                return JSON.parse(s(this, i, "f").getItem(this.getKey(e)) || "null")
                            } catch (e) {}
                        }))
                    }
                }
                i = new WeakMap
            },
            3793: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Do: () => f,
                    LH: () => O,
                    W2: () => $,
                    x1: () => G,
                    OB: () => re,
                    U7: () => he
                });
                var i, r, s, a, o, c, l, h, d, u, p, f, m, v, y, g, w, b, P, E, T, S, _, A, I, C, k, R, O, D, N, x, L, F, M, j, U, $, G, B, q, V, W, z, Y, K, J, Z, X, H, Q, ee, te, ne, ie, re, se, ae, oe, ce, le, he, de, ue, pe, fe, me, ve, ye, ge, we = n(4809);
                ! function(e) {
                    e.UnlockPlayerAchievement = "UnlockPlayerAchievement", e.PlayerSetAchievementProgress = "PlayerSetAchievementProgress", e.FetchPlayerAchievements = "FetchPlayerAchievements", e.SyncPlayer = "SyncPlayer", e.GetPlayer = "GetPlayer", e.FetchPlayerFields = "FetchPlayerFields", e.CheckPlayerCode = "CheckPlayerCode", e.PlayerFetchPlayers = "PlayerFetchPlayers", e.SyncPlayerPurchases = "SyncPlayerPurchases", e.PurchasePlayerPurchase = "PurchasePlayerPurchase", e.ConsumePlayerPurchase = "ConsumePlayerPurchase", e.UnsubscribePlayerSubscription = "UnsubscribePlayerSubscription", e.ResumePlayerSubscription = "ResumePlayerSubscription", e.FetchPlayerPurchases = "FetchPlayerPurchases", e.FindPlayerPurchase = "FindPlayerPurchase", e.PlayerGetPaymentLink = "PlayerGetPaymentLink", e.FetchPlayerProjectVariables = "FetchPlayerProjectVariables", e.FetchPlayerProjectConfig = "FetchPlayerProjectConfig", e.GivePlayerReward = "GivePlayerReward", e.FetchPlayerRewards = "FetchPlayerRewards", e.PlayerPublishRecord = "PlayerPublishRecord", e.FetchTop = "FetchTop", e.FetchPlayerRating = "FetchPlayerRating", e.UploadPlayerImage = "UploadPlayerImage", e.FetchPlayerImages = "FetchPlayerImages", e.UploadPlayerFile = "UploadPlayerFile", e.FetchPlayerFiles = "FetchPlayerFiles", e.FetchPlayerGamesCollection = "FetchPlayerGamesCollection", e.PlayerJoinEvent = "PlayerJoinEvent", e.PlayerRegisterOnScheduler = "PlayerRegisterOnScheduler", e.FetchPlayerDocument = "FetchPlayerDocument", e.PlayerCreateChannel = "PlayerCreateChannel", e.PlayerUpdateChannel = "PlayerUpdateChannel", e.PlayerDeleteChannel = "PlayerDeleteChannel", e.PlayerMutePlayerInChannel = "PlayerMutePlayerInChannel", e.PlayerUnmutePlayerInChannel = "PlayerUnmutePlayerInChannel", e.PlayerSendPersonalMessage = "PlayerSendPersonalMessage", e.PlayerSendFeedMessage = "PlayerSendFeedMessage", e.PlayerSendMessage = "PlayerSendMessage", e.PlayerEditMessage = "PlayerEditMessage", e.PlayerDeleteMessage = "PlayerDeleteMessage", e.PlayerFetchChannelMessages = "PlayerFetchChannelMessages", e.PlayerFetchPersonalMessages = "PlayerFetchPersonalMessages", e.PlayerFetchFeedMessages = "PlayerFetchFeedMessages", e.PlayerKickFromChannel = "PlayerKickFromChannel", e.PlayerFetchChannelMembers = "PlayerFetchChannelMembers", e.PlayerJoinChannel = "PlayerJoinChannel", e.PlayerLeaveChannel = "PlayerLeaveChannel", e.PlayerCancelJoinChannel = "PlayerCancelJoinChannel", e.PlayerAcceptJoinRequestToChannel = "PlayerAcceptJoinRequestToChannel", e.PlayerRejectJoinRequestToChannel = "PlayerRejectJoinRequestToChannel", e.PlayerFetchChannelJoinRequests = "PlayerFetchChannelJoinRequests", e.PlayerFetchSentJoinRequests = "PlayerFetchSentJoinRequests", e.PlayerSendInviteToChannel = "PlayerSendInviteToChannel", e.PlayerCancelInviteToChannel = "PlayerCancelInviteToChannel", e.PlayerAcceptInviteToChannel = "PlayerAcceptInviteToChannel", e.PlayerRejectInviteToChannel = "PlayerRejectInviteToChannel", e.PlayerFetchChannelInvites = "PlayerFetchChannelInvites", e.PlayerFetchPlayerSentInvites = "PlayerFetchPlayerSentInvites", e.PlayerFetchPlayerInvites = "PlayerFetchPlayerInvites", e.CheckPlayerUniqueValue = "CheckPlayerUniqueValue", e.RegisterPlayerUniqueValue = "RegisterPlayerUniqueValue", e.DeletePlayerUniqueValue = "DeletePlayerUniqueValue", e.CreateAchievement = "CreateAchievement", e.UpdateAchievement = "UpdateAchievement", e.DeleteAchievement = "DeleteAchievement", e.CreateAchievementsGroup = "CreateAchievementsGroup", e.UpdateAchievementsGroup = "UpdateAchievementsGroup", e.DeleteAchievementsGroup = "DeleteAchievementsGroup", e.AddAchievementToPlayer = "AddAchievementToPlayer", e.RemoveAchievementFromPlayer = "RemoveAchievementFromPlayer", e.FetchAchievements = "FetchAchievements", e.FetchAchievementsGroups = "FetchAchievementsGroups", e.FetchPlayersAchievements = "FetchPlayersAchievements", e.FetchAdminPlayerAchievements = "FetchAdminPlayerAchievements", e.FetchAchievementStats = "FetchAchievementStats", e.FetchChannelInvites = "FetchChannelInvites", e.SendInviteToChannel = "SendInviteToChannel", e.CancelInviteToChannel = "CancelInviteToChannel", e.FetchChannelJoinRequests = "FetchChannelJoinRequests", e.RejectJoinRequestToChannel = "RejectJoinRequestToChannel", e.FetchChannelMembers = "FetchChannelMembers", e.KickFromChannel = "KickFromChannel", e.AddToChannel = "AddToChannel", e.FetchChannelMessages = "FetchChannelMessages", e.FetchPrivateMessages = "FetchPrivateMessages", e.FetchFeedMessages = "FetchFeedMessages", e.CreateChannelMessage = "CreateChannelMessage", e.UpdateChannelMessage = "UpdateChannelMessage", e.DeleteChannelMessage = "DeleteChannelMessage", e.SendPersonalMessage = "SendPersonalMessage", e.SendFeedMessage = "SendFeedMessage", e.FetchPlayerMute = "FetchPlayerMute", e.MutePlayerInChannel = "MutePlayerInChannel", e.UnmutePlayerInChannel = "UnmutePlayerInChannel", e.FetchChannelTemplate = "FetchChannelTemplate", e.FetchChannelTemplates = "FetchChannelTemplates", e.CreateChannelTemplate = "CreateChannelTemplate", e.UpdateChannelTemplate = "UpdateChannelTemplate", e.DeleteChannelTemplate = "DeleteChannelTemplate", e.FetchChannels = "FetchChannels", e.FetchChannel = "FetchChannel", e.CreateChannel = "CreateChannel", e.UpdateChannel = "UpdateChannel", e.DeleteChannel = "DeleteChannel", e.FetchDocuments = "FetchDocuments", e.SaveDocument = "SaveDocument", e.FetchEvents = "FetchEvents", e.CheckEventExists = "CheckEventExists", e.FetchAdminPlayerEvents = "FetchAdminPlayerEvents", e.FetchEventsStats = "FetchEventsStats", e.UpsertEvent = "UpsertEvent", e.DeleteEvent = "DeleteEvent", e.AddEventToPlayer = "AddEventToPlayer", e.RemoveEventFromPlayer = "RemoveEventFromPlayer", e.FetchFiles = "FetchFiles", e.UploadFile = "UploadFile", e.UpdateFile = "UpdateFile", e.DeleteFiles = "DeleteFiles", e.FetchGamesCollections = "FetchGamesCollections", e.CreateGamesCollection = "CreateGamesCollection", e.UpdateGamesCollection = "UpdateGamesCollection", e.DeleteGamesCollection = "DeleteGamesCollection", e.FetchImages = "FetchImages", e.UploadImage = "UploadImage", e.UpdateImage = "UpdateImage", e.DeleteImages = "DeleteImages", e.FetchLeaderboards = "FetchLeaderboards", e.FetchLeaderboard = "FetchLeaderboard", e.FetchLeaderboardVariant = "FetchLeaderboardVariant", e.FetchLeaderboardsVariants = "FetchLeaderboardsVariants", e.FetchLeaderboardRecords = "FetchLeaderboardRecords", e.FetchAdminPlayerRecords = "FetchAdminPlayerRecords", e.CreateLeaderboard = "CreateLeaderboard", e.UpdateLeaderboard = "UpdateLeaderboard", e.DeleteLeaderboard = "DeleteLeaderboard", e.DeleteLeaderboardVariant = "DeleteLeaderboardVariant", e.UpdateLeaderboardRecord = "UpdateLeaderboardRecord", e.DeleteLeaderboardRecord = "DeleteLeaderboardRecord", e.DeleteAdminPlayerRecords = "DeleteAdminPlayerRecords", e.FetchModel = "FetchModel", e.FetchModels = "FetchModels", e.UpdateModel = "UpdateModel", e.FetchPlatforms = "FetchPlatforms", e.AddPlatform = "AddPlatform", e.UpdatePlatform = "UpdatePlatform", e.UpdatePlatformBanners = "UpdatePlatformBanners", e.UpdatePlatformAds = "UpdatePlatformAds", e.DeletePlatform = "DeletePlatform", e.FindPlayerStateById = "FindPlayerStateByID", e.FindPlayerById = "FindPlayerByID", e.FetchPlayers = "FetchPlayers", e.FetchPlayersReports = "FetchPlayersReports", e.UpdatePlayer = "UpdatePlayer", e.DeletePlayer = "DeletePlayer", e.RestorePlayer = "RestorePlayer", e.BanPlayer = "BanPlayer", e.UnbanPlayer = "UnbanPlayer", e.RestorePlayerFromArchive = "RestorePlayerFromArchive", e.UpdatePlayerModifiedAt = "UpdatePlayerModifiedAt", e.FetchPlayersPurchases = "FetchPlayersPurchases", e.FetchAdminPlayerPurchases = "FetchAdminPlayerPurchases", e.FetchProducts = "FetchProducts", e.FetchPlayerPurchasesStats = "FetchPlayerPurchasesStats", e.GetPlayerPurchase = "GetPlayerPurchase", e.AddPurchaseToPlayer = "AddPurchaseToPlayer", e.UpdatePlayerPurchase = "UpdatePlayerPurchase", e.RemovePurchaseFromPlayer = "RemovePurchaseFromPlayer", e.CreateProduct = "CreateProduct", e.UpdateProduct = "UpdateProduct", e.DeleteProduct = "DeleteProduct", e.UpsertProjectVariable = "UpsertProjectVariable", e.DeleteProjectVariable = "DeleteProjectVariable", e.FetchRewards = "FetchRewards", e.FetchPlayersRewards = "FetchPlayersRewards", e.FetchAdminPlayerRewards = "FetchAdminPlayerRewards", e.CheckRewardExists = "CheckRewardExists", e.FetchRewardStats = "FetchRewardStats", e.CreateReward = "CreateReward", e.UpdateReward = "UpdateReward", e.DeleteReward = "DeleteReward", e.AddRewardToPlayer = "AddRewardToPlayer", e.SubstractRewardFromPlayer = "SubstractRewardFromPlayer", e.DropRewardsForPlayer = "DropRewardsForPlayer", e.FetchSchedulers = "FetchSchedulers", e.FetchSchedulerTriggers = "FetchSchedulerTriggers", e.CheckSchedulerExists = "CheckSchedulerExists", e.FetchPlayersSchedulers = "FetchPlayersSchedulers", e.UpsertScheduler = "UpsertScheduler", e.SaveSchedulerTriggersOnDay = "SaveSchedulerTriggersOnDay", e.DeleteScheduler = "DeleteScheduler", e.AddSchedulerToPlayer = "AddSchedulerToPlayer", e.RemoveSchedulerFromPlayer = "RemoveSchedulerFromPlayer", e.UpdatePlayerScheduler = "UpdatePlayerScheduler", e.FetchSegments = "FetchSegments", e.CreateSegment = "CreateSegment", e.UpdateSegment = "UpdateSegment", e.DeleteSegment = "DeleteSegment", e.FetchCommonTriggers = "FetchCommonTriggers", e.FetchAdminPlayerTriggers = "FetchAdminPlayerTriggers", e.CheckTriggerExists = "CheckTriggerExists", e.FetchTriggersStats = "FetchTriggersStats", e.CreateCommonTrigger = "CreateCommonTrigger", e.UpdateCommonTrigger = "UpdateCommonTrigger", e.DeleteCommonTrigger = "DeleteCommonTrigger", e.ActivateTriggerForPlayer = "ActivateTriggerForPlayer", e.DeactivateTriggerForPlayer = "DeactivateTriggerForPlayer", e.FetchAdsStats = "FetchAdsStats", e.FetchDwmStats = "FetchDWMStats", e.FetchFilesStats = "FetchFilesStats", e.FetchHostingStats = "FetchHostingStats", e.FetchImagesStats = "FetchImagesStats", e.FetchOnlineStats = "FetchOnlineStats", e.FetchStatsRequests = "FetchStatsRequests", e.FetchRetentionStats = "FetchRetentionStats", e.FetchSessionsStats = "FetchSessionsStats", e.FetchUniqueValues = "FetchUniqueValues", e.CreateUniqueValue = "CreateUniqueValue", e.UpdateUniqueValue = "UpdateUniqueValue", e.DeleteUniqueValue = "DeleteUniqueValue", e.FetchUniqueValuesRules = "FetchUniqueValuesRules", e.CreateUniqueValueRule = "CreateUniqueValueRule", e.UpdateUniqueValueRule = "UpdateUniqueValueRule", e.DeleteUniqueValueRule = "DeleteUniqueValueRule", e.PlayerAiCheckCensor = "PlayerAICheckCensor", e.AiCensor = "AICensor"
                }(i || (i = {})),
                function(e) {
                    e.Skip = "SKIP", e.Analytics = "ANALYTICS", e.Ai = "AI"
                }(r || (r = {})),
                function(e) {
                    e.Any = "ANY", e.Player = "PLAYER", e.Admin = "ADMIN", e.Developer = "DEVELOPER", e.Analytic = "ANALYTIC", e.ContentManager = "CONTENT_MANAGER", e.InternalDeveloper = "INTERNAL_DEVELOPER", e.InternalModerator = "INTERNAL_MODERATOR", e.Marketer = "MARKETER"
                }(s || (s = {})),
                function(e) {
                    e.Achievement = "ACHIEVEMENT", e.Platform = "PLATFORM", e.Dev = "DEV", e.Date = "DATE", e.Project = "PROJECT"
                }(a || (a = {})),
                function(e) {
                    e.Achievement = "ACHIEVEMENT", e.Platform = "PLATFORM", e.Dev = "DEV", e.Date = "DATE", e.Total = "TOTAL"
                }(o || (o = {})),
                function(e) {
                    e.YandexSimpleMonetization = "YandexSimpleMonetization", e.Adfox = "ADFOX", e.Rtb = "RTB", e.Gpt = "GPT", e.Adsgram = "ADSGRAM", e.Tmads = "TMADS"
                }(c || (c = {})),
                function(e) {
                    e.Date = "DATE", e.Platform = "PLATFORM", e.BannerType = "BANNER_TYPE", e.Project = "PROJECT"
                }(l || (l = {})),
                function(e) {
                    e.Date = "DATE", e.Platform = "PLATFORM", e.BannerType = "BANNER_TYPE", e.Requests = "REQUESTS", e.Displays = "DISPLAYS", e.Errors = "ERRORS", e.FillRate = "FILL_RATE", e.Revenue = "REVENUE"
                }(h || (h = {})),
                function(e) {
                    e.GamepushLlc = "GAMEPUSH_LLC", e.GamepushFzco = "GAMEPUSH_FZCO"
                }(d || (d = {})),
                function(e) {
                    e.Xsolla = "XSOLLA"
                }(u || (u = {})),
                function(e) {
                    e.Preloader = "PRELOADER", e.Fullscreen = "FULLSCREEN", e.Rewarded = "REWARDED", e.Sticky = "STICKY"
                }(p || (p = {})),
                function(e) {
                    e.Reward = "REWARD", e.Achievement = "ACHIEVEMENT", e.Product = "PRODUCT"
                }(f || (f = {})),
                function(e) {
                    e.Awaits = "AWAITS", e.Running = "RUNNING", e.Succeed = "SUCCEED", e.Failed = "FAILED"
                }(m || (m = {})),
                function(e) {
                    e.Eq = "EQ", e.Ne = "NE", e.Lt = "LT", e.Gt = "GT", e.Lte = "LTE", e.Gte = "GTE"
                }(v || (v = {})),
                function(e) {
                    e.PlayerStat = "PLAYER_STAT", e.EntityStat = "ENTITY_STAT", e.PlayerField = "PLAYER_FIELD"
                }(y || (y = {})),
                function(e) {
                    e.Rub = "RUB", e.Usd = "USD", e.Eur = "EUR", e.Aed = "AED", e.Inr = "INR", e.Krw = "KRW", e.Gbp = "GBP", e.Jpy = "JPY", e.Cny = "CNY", e.Try = "TRY", e.Brl = "BRL", e.Idr = "IDR"
                }(g || (g = {})),
                function(e) {
                    e.Date = "DATE", e.Platform = "PLATFORM", e.Project = "PROJECT"
                }(w || (w = {})),
                function(e) {
                    e.Date = "DATE", e.Platform = "PLATFORM", e.StickyFactor = "STICKY_FACTOR", e.Dau = "DAU", e.Wau = "WAU", e.Mau = "MAU", e.NewUsersDay = "NEW_USERS_DAY", e.NewUsersWeek = "NEW_USERS_WEEK", e.NewUsersMonth = "NEW_USERS_MONTH"
                }(b || (b = {})),
                function(e) {
                    e.AdsRevenueSum = "AdsRevenueSum", e.PurchasesRevenueSum = "PurchasesRevenueSum", e.TotalRevenue = "TotalRevenue", e.DeveloperRevenue = "DeveloperRevenue"
                }(P || (P = {})),
                function(e) {
                    e.Purchases = "Purchases", e.Ads = "Ads"
                }(E || (E = {})),
                function(e) {
                    e.Raw = "RAW", e.Txt = "TXT", e.Html = "HTML"
                }(T || (T = {})),
                function(e) {
                    e.PlayerPrivacyPolicy = "PLAYER_PRIVACY_POLICY"
                }(S || (S = {})),
                function(e) {
                    e.Name = "NAME", e.Description = "DESCRIPTION", e.Review = "REVIEW", e.FullDescription = "FULL_DESCRIPTION", e.HowToPlay = "HOW_TO_PLAY", e.ShareText = "SHARE_TEXT", e.DocumentContent = "DOCUMENT_CONTENT"
                }(_ || (_ = {})),
                function(e) {
                    e.Image = "IMAGE", e.File = "FILE", e.Channel = "CHANNEL", e.ChannelMessage = "CHANNEL_MESSAGE", e.ChannelTemplate = "CHANNEL_TEMPLATE", e.Achievement = "ACHIEVEMENT", e.AchievementsGroup = "ACHIEVEMENTS_GROUP", e.Product = "PRODUCT", e.Project = "PROJECT", e.Leaderboard = "LEADERBOARD", e.Reward = "REWARD", e.Trigger = "TRIGGER", e.Events = "EVENTS", e.Document = "DOCUMENT", e.GamesCollections = "GAMES_COLLECTIONS"
                }(A || (A = {})),
                function(e) {
                    e.Event = "EVENT", e.Platform = "PLATFORM", e.Dev = "DEV", e.Date = "DATE", e.Project = "PROJECT"
                }(I || (I = {})),
                function(e) {
                    e.Event = "EVENT", e.Platform = "PLATFORM", e.Dev = "DEV", e.Date = "DATE", e.Count = "COUNT"
                }(C || (C = {})),
                function(e) {
                    e.Date = "DATE", e.Plan = "PLAN", e.Project = "PROJECT"
                }(k || (k = {})),
                function(e) {
                    e.Date = "DATE", e.Plan = "PLAN", e.Count = "COUNT", e.Size = "SIZE"
                }(R || (R = {})),
                function(e) {
                    e.Any = "ANY", e.Portrait = "PORTRAIT", e.Landscape = "LANDSCAPE"
                }(O || (O = {})),
                function(e) {
                    e.Day = "DAY", e.Month = "MONTH", e.Year = "YEAR"
                }(D || (D = {})),
                function(e) {
                    e.Date = "DATE", e.Plan = "PLAN", e.Project = "PROJECT"
                }(N || (N = {})),
                function(e) {
                    e.Date = "DATE", e.Plan = "PLAN", e.Count = "COUNT"
                }(x || (x = {})),
                function(e) {
                    e.GameIcon = "GAME_ICON", e.GameIcon4X3 = "GAME_ICON4X3", e.GameIcon3X4 = "GAME_ICON3X4", e.GameCover = "GAME_COVER", e.GameCoverPortrait = "GAME_COVER_PORTRAIT", e.GameBackground = "GAME_BACKGROUND", e.GameScreenshotAlbum = "GAME_SCREENSHOT_ALBUM", e.GameScreenshotPortrait = "GAME_SCREENSHOT_PORTRAIT"
                }(L || (L = {})),
                function(e) {
                    e.Date = "DATE", e.Plan = "PLAN", e.Project = "PROJECT"
                }(F || (F = {})),
                function(e) {
                    e.Date = "DATE", e.Plan = "PLAN", e.Count = "COUNT"
                }(M || (M = {})),
                function(e) {
                    e.En = "EN", e.Fr = "FR", e.It = "IT", e.De = "DE", e.Es = "ES", e.Zh = "ZH", e.Pt = "PT", e.Ko = "KO", e.Ja = "JA", e.Ru = "RU", e.Tr = "TR", e.Ar = "AR", e.Hi = "HI", e.Id = "ID"
                }(j || (j = {})),
                function(e) {
                    e.Android = "ANDROID"
                }(U || (U = {})),
                function(e) {
                    e.Add = "ADD", e.Remove = "REMOVE", e.Set = "SET"
                }($ || ($ = {})),
                function(e) {
                    e.PlayerField = "PLAYER_FIELD"
                }(G || (G = {})),
                function(e) {
                    e.InvitationSent = "INVITATION_SENT", e.InProject = "IN_PROJECT"
                }(B || (B = {})),
                function(e) {
                    e.Date = "DATE", e.Platform = "PLATFORM", e.Project = "PROJECT"
                }(q || (q = {})),
                function(e) {
                    e.Date = "DATE", e.Platform = "PLATFORM", e.Avg = "AVG", e.Peak = "PEAK"
                }(V || (V = {})),
                function(e) {
                    e.New = "NEW", e.Paid = "PAID"
                }(W || (W = {})),
                function(e) {
                    e.Company = "COMPANY", e.Individual = "INDIVIDUAL", e.SoleProprietor = "SOLE_PROPRIETOR"
                }(z || (z = {})),
                function(e) {
                    e.Xsolla = "XSOLLA"
                }(Y || (Y = {})),
                function(e) {
                    e.Y8 = "Y8", e.Fotostrana = "FOTOSTRANA", e.JioGames = "JIO_GAMES", e.Telegram = "TELEGRAM", e.GooglePlay = "GOOGLE_PLAY", e.Yandex = "YANDEX", e.Vk = "VK", e.Ok = "OK", e.GameMonetize = "GAME_MONETIZE", e.GameDistribution = "GAME_DISTRIBUTION", e.CrazyGames = "CRAZY_GAMES", e.Smartmarket = "SMARTMARKET", e.Fb = "FB", e.Poki = "POKI", e.Gamepix = "GAMEPIX", e.VkPlay = "VK_PLAY", e.WgPlayground = "WG_PLAYGROUND", e.Beeline = "BEELINE", e.Kongregate = "KONGREGATE", e.Playdeck = "PLAYDECK", e.Custom = "CUSTOM", e.AppGallery = "APP_GALLERY", e.GalaxyStore = "GALAXY_STORE", e.OneStore = "ONE_STORE", e.AmazonAppstore = "AMAZON_APPSTORE", e.XiaomiGetapps = "XIAOMI_GETAPPS", e.Aptoide = "APTOIDE", e.Rustore = "RUSTORE", e.Android = "ANDROID", e.None = "NONE"
                }(K || (K = {})),
                function(e) {
                    e.Local = "LOCAL", e.Platform = "PLATFORM", e.Cloud = "CLOUD"
                }(J || (J = {})),
                function(e) {
                    e.Player = "PLAYER", e.Product = "PRODUCT", e.Platform = "PLATFORM", e.Consumed = "CONSUMED", e.Dev = "DEV", e.Date = "DATE", e.Project = "PROJECT"
                }(Z || (Z = {})),
                function(e) {
                    e.Player = "PLAYER", e.Product = "PRODUCT", e.Platform = "PLATFORM", e.Consumed = "CONSUMED", e.Dev = "DEV", e.Date = "DATE", e.Total = "TOTAL", e.Price = "PRICE"
                }(X || (X = {})),
                function(e) {
                    e.Common = "COMMON", e.Uncommon = "UNCOMMON", e.Rare = "RARE", e.Epic = "EPIC", e.Legendary = "LEGENDARY", e.Mythic = "MYTHIC"
                }(H || (H = {})),
                function(e) {
                    e.Date = "DATE", e.Platform = "PLATFORM", e.Project = "PROJECT"
                }(Q || (Q = {})),
                function(e) {
                    e.Date = "DATE", e.Platform = "PLATFORM", e.RetentionDay = "RETENTION_DAY", e.RetentionWeek = "RETENTION_WEEK", e.RetentionMonth = "RETENTION_MONTH", e.NewUsersDay = "NEW_USERS_DAY", e.NewUsersWeek = "NEW_USERS_WEEK", e.NewUsersMonth = "NEW_USERS_MONTH", e.ReturnedUsersDay = "RETURNED_USERS_DAY", e.ReturnedUsersWeek = "RETURNED_USERS_WEEK", e.ReturnedUsersMonth = "RETURNED_USERS_MONTH"
                }(ee || (ee = {})),
                function(e) {
                    e.Common = "COMMON"
                }(te || (te = {})),
                function(e) {
                    e.Reward = "REWARD", e.Platform = "PLATFORM", e.Dev = "DEV", e.Date = "DATE", e.Project = "PROJECT"
                }(ne || (ne = {})),
                function(e) {
                    e.Reward = "REWARD", e.Platform = "PLATFORM", e.Dev = "DEV", e.Date = "DATE", e.GivenCount = "GIVEN_COUNT", e.AcceptedCount = "ACCEPTED_COUNT"
                }(ie || (ie = {})),
                function(e) {
                    e.ActiveDays = "ACTIVE_DAYS", e.ActiveDaysConsecutive = "ACTIVE_DAYS_CONSECUTIVE"
                }(re || (re = {})),
                function(e) {
                    e.Date = "DATE", e.Platform = "PLATFORM", e.Project = "PROJECT"
                }(se || (se = {})),
                function(e) {
                    e.Date = "DATE", e.Platform = "PLATFORM", e.SessionTime = "SESSION_TIME", e.SessionsCount = "SESSIONS_COUNT", e.InGameTime = "IN_GAME_TIME"
                }(ae || (ae = {})),
                function(e) {
                    e.Px = "PX", e.Percent = "PERCENT"
                }(oe || (oe = {})),
                function(e) {
                    e.Asc = "ASC", e.Desc = "DESC"
                }(ce || (ce = {})),
                function(e) {
                    e.Account = "Account", e.Project = "Project", e.Platform = "Platform"
                }(le || (le = {})),
                function(e) {
                    e.Desktop = "Desktop", e.Ios = "IOS", e.Android = "Android", e.Tv = "TV"
                }(he || (he = {})),
                function(e) {
                    e.Honorary = "HONORARY", e.Release = "RELEASE", e.Absolute = "ABSOLUTE", e.Start = "START", e.Advanced = "ADVANCED", e.Pro = "PRO", e.Enterprise = "ENTERPRISE", e.Premium = "PREMIUM", e.Unlimited = "UNLIMITED"
                }(de || (de = {})),
                function(e) {
                    e.Common = "COMMON", e.Scheduler = "SCHEDULER", e.Event = "EVENT"
                }(ue || (ue = {})),
                function(e) {
                    e.Trigger = "TRIGGER", e.Type = "TYPE", e.Entity = "ENTITY", e.Platform = "PLATFORM", e.Dev = "DEV", e.Date = "DATE", e.Project = "PROJECT"
                }(pe || (pe = {})),
                function(e) {
                    e.Trigger = "TRIGGER", e.Type = "TYPE", e.Entity = "ENTITY", e.Platform = "PLATFORM", e.Dev = "DEV", e.Date = "DATE", e.Count = "COUNT"
                }(fe || (fe = {})),
                function(e) {
                    e.Player = "PLAYER"
                }(me || (me = {})),
                function(e) {
                    e.Date = "DATE", e.Platform = "PLATFORM", e.Plan = "PLAN", e.Action = "ACTION", e.Project = "PROJECT"
                }(ve || (ve = {})),
                function(e) {
                    e.Date = "DATE", e.Action = "ACTION", e.Requests = "REQUESTS", e.Plan = "PLAN", e.Platform = "PLATFORM"
                }(ye || (ye = {})),
                function(e) {
                    e.PurchasePlayerPurchase = "PurchasePlayerPurchase", e.ConsumePlayerPurchase = "ConsumePlayerPurchase", e.ExpirePlayerSubscription = "ExpirePlayerSubscription", e.CancelPlayerSubscription = "CancelPlayerSubscription", e.ResumePlayerSubscription = "ResumePlayerSubscription", e.UnlockPlayerAchievement = "UnlockPlayerAchievement", e.PlayerSetAchievementProgress = "PlayerSetAchievementProgress", e.PlayerSendInviteToChannel = "PlayerSendInviteToChannel", e.PlayerCancelInviteToChannel = "PlayerCancelInviteToChannel", e.PlayerAcceptInviteToChannel = "PlayerAcceptInviteToChannel", e.PlayerRejectInviteToChannel = "PlayerRejectInviteToChannel", e.PlayerJoinChannel = "PlayerJoinChannel", e.PlayerLeaveChannel = "PlayerLeaveChannel", e.PlayerCancelJoinChannel = "PlayerCancelJoinChannel", e.PlayerAcceptJoinRequestToChannel = "PlayerAcceptJoinRequestToChannel", e.PlayerRejectJoinRequestToChannel = "PlayerRejectJoinRequestToChannel", e.PlayerKickFromChannel = "PlayerKickFromChannel", e.PlayerSendPersonalMessage = "PlayerSendPersonalMessage", e.PlayerSendFeedMessage = "PlayerSendFeedMessage", e.PlayerSendMessage = "PlayerSendMessage", e.PlayerEditMessage = "PlayerEditMessage", e.PlayerDeleteMessage = "PlayerDeleteMessage", e.PlayerMutePlayerInChannel = "PlayerMutePlayerInChannel", e.PlayerUnmutePlayerInChannel = "PlayerUnmutePlayerInChannel", e.PlayerCreateChannel = "PlayerCreateChannel", e.PlayerUpdateChannel = "PlayerUpdateChannel", e.PlayerDeleteChannel = "PlayerDeleteChannel", e.UploadPlayerFile = "UploadPlayerFile", e.UploadPlayerImage = "UploadPlayerImage", e.PlayerPublishRecord = "PlayerPublishRecord", e.SyncPlayer = "SyncPlayer", e.GetPlayer = "GetPlayer", e.GivePlayerReward = "GivePlayerReward", e.RegisterPlayerUniqueValue = "RegisterPlayerUniqueValue", e.DeletePlayerUniqueValue = "DeletePlayerUniqueValue"
                }(ge || (ge = {}));
                const be = we.ZP`
    fragment imageAsset on Asset {
  __typename
  ... on ImageAsset {
    type
    resources {
      src
      crop {
        left
        top
        width
        height
      }
    }
  }
}
    `,
                    Pe = we.ZP`
    fragment project on Project {
  id
  name
  icon
  publicToken
  orderedAchievementsGroups
  achievements {
    isLockedVisible
    isLockedDescriptionVisible
    enableUnlockToast
  }
  origins {
    origin
    isDev
    isActive
  }
  config {
    lang
    avatarGenerator
    ymCounterId
    gtagCounterId
    showLoader
    showReqCounter
  }
  assets {
    icon {
      ...imageAsset
    }
  }
}
    ${be}`;
                we.ZP`
    mutation createProject($input: CreateProjectInput!) {
  result: CreateProject(input: $input) {
    ...project
  }
}
    ${Pe}`
            },
            6438: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var i = n(8293);
                const r = ["adsbox", "advertisement", "pub_300x250", "pub_300x250m", "pub_728x90", "text-ad", "textAd", "text_ad", "text_ads", "text-ads", "text-ad-links"];

                function s() {
                    const e = (0, i._)(),
                        t = document.createElement("div");
                    return t.innerHTML = "&nbsp;", t.className = r.join(" "), t.id = "text_ad", t.style.padding = "1px 0 0 0", document.body.appendChild(t), setTimeout((() => {
                        e.done(0 === t.offsetHeight), document.body.removeChild(t)
                    }), 10), e.ready
                }
            },
            1049: (e, t, n) => {
                "use strict";

                function i(e, t, n) {
                    return e.replace(/{{hash}}/gi, t).replace(/{{size}}/gi, n)
                }
                n.d(t, {
                    Z: () => i
                })
            },
            5239: (e, t, n) => {
                "use strict";
                n.d(t, {
                    X: () => i,
                    S: () => r
                });

                function i(e) {
                    return t = this, n = void 0, r = function*() {
                        const t = (new TextEncoder).encode(e),
                            n = yield crypto.subtle.digest("SHA-256", t);
                        return Array.from(new Uint8Array(n)).map((e => e.toString(16).padStart(2, "0"))).join("")
                    }, new((i = void 0) || (i = Promise))((function(e, s) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function o(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function c(t) {
                            var n;
                            t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function(e) {
                                e(n)
                            }))).then(a, o)
                        }
                        c((r = r.apply(t, n || [])).next())
                    }));
                    var t, n, i, r
                }

                function r(e) {
                    for (var t = 0, n = 9; t < e.length;) n = Math.imul(n ^ e.charCodeAt(t++), 387420489);
                    return (n ^ n >>> 9).toString(16)
                }
            },
            6480: (e, t, n) => {
                "use strict";

                function i(e, t) {
                    return !e || t && "none" !== t ? t : "last"
                }

                function r(e) {
                    return e > 10 ? 10 : e
                }

                function s(e, t) {
                    return e || t.limit
                }

                function a(e, t) {
                    const n = new Set([...e.map((e => e.id)), ...t.map((e => e.id))]);
                    return e.forEach((e => {
                        n.has(e.id) && n.delete(e.id)
                    })), n.size
                }
                n.d(t, {
                    oo: () => i,
                    pY: () => r,
                    wQ: () => s,
                    q3: () => a
                })
            },
            1961: (e, t, n) => {
                "use strict";
                n.d(t, {
                    vf: () => r,
                    Yc: () => s
                });
                var i = n(9503);

                function r(e) {
                    return t = this, i = void 0, s = function*() {
                        const {
                            default: t
                        } = yield n(6958)(`./${e}.json`);
                        return t
                    }, new((r = void 0) || (r = Promise))((function(e, n) {
                        function a(e) {
                            try {
                                c(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function o(e) {
                            try {
                                c(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function c(t) {
                            var n;
                            t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r((function(e) {
                                e(n)
                            }))).then(a, o)
                        }
                        c((s = s.apply(t, i || [])).next())
                    }));
                    var t, i, r, s
                }

                function s() {
                    const e = navigator.language.slice(0, 2).toLowerCase();
                    return Object.values(i.Uo).includes(e) ? e : null
                }
            },
            4917: (e, t, n) => {
                "use strict";

                function i({
                    src: e,
                    check: t
                }) {
                    return new Promise(((n, i) => {
                        let r = 0;
                        if (null == t ? void 0 : t(window)) return void n();

                        function s() {
                            t ? t(window) && (clearInterval(r), n()) : n()
                        }
                        if (document.querySelector(`script[src="${e}"]`) && t) return void(r = setInterval(s, 100));
                        var a = document.getElementsByTagName("script")[0];
                        const o = document.createElement("script");
                        o.src = e, o.onload = s, o.onerror = i, o.onabort = i, a.parentNode.insertBefore(o, a), t && (r = setInterval(s, 100))
                    }))
                }
                n.d(t, {
                    Z: () => i
                })
            },
            6558: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Yd: () => i,
                    kg: () => r,
                    EK: () => s
                });
                class i {
                    constructor() {
                        this.isCollectingLogs = !0, this.logs = [], this.log = (...e) => {
                            this.collectLogs("log", e), console.log(this.name, ...e)
                        }, this.info = (...e) => {
                            this.collectLogs("info", e), console.info(this.name, ...e)
                        }, this.warn = (...e) => {
                            this.collectLogs("warn", e), console.warn(this.name, ...e)
                        }, this.assert = (...e) => {
                            this.collectLogs("assert", e), console.assert(...e, {
                                name: this.name
                            })
                        }
                    }
                    get name() {
                        return `${globalThis.__SDKProvider||"SDK"}`
                    }
                    stopCollect() {
                        this.isCollectingLogs = !1, this.logs = []
                    }
                    collectLogs(e, t) {
                        this.isCollectingLogs && this.logs.push({
                            type: e,
                            args: t
                        })
                    }
                }
                let r = new i;
                const s = e => r = e
            },
            1437: (e, t, n) => {
                "use strict";
                n.d(t, {
                    p: () => r
                });
                var i = n(8293);

                function r(e) {
                    const t = (0, i._)(i.s),
                        n = new Image;
                    return n.onload = () => t.done(n), n.onerror = () => t.abort(), n.onabort = () => t.abort(), n.src = e, t.ready
                }
            },
            3357: (e, t, n) => {
                "use strict";
                n.d(t, {
                    q: () => r
                });
                var i = n(180);
                const r = e => ({
                    isLocalSave: e === i.pQ.Local,
                    isCloudSave: e === i.pQ.Cloud,
                    isPlatformSave: e === i.pQ.Platform,
                    format: e
                })
            },
            6041: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => a
                });
                const i = 2048,
                    r = /cdn.(eponesh|gamepush|spellsync).com\/static(\/([\d\-]+.)([\d\-]+.)|)\/(.*)/,
                    s = /-(\d+)x(\d+)\.\w+$/;

                function a(e, t, n, a) {
                    const o = r.exec(e);
                    if (!o) return e;
                    const [c, l] = function(e) {
                        const t = s.exec(e);
                        return t ? [Number(t[1]) || 0, Number(t[2]) || 0] : [0, 0]
                    }(e);
                    c && t > c && (t = c), l && n > l && (n = l), t > i && (t = i), n > i && (n = i);
                    const [, h, , , , d] = o;
                    return `https://cdn.${h}.com/static/${t||"-"}x${n||"-"}${a?"crop":""}/${d}`
                }
            },
            8866: (e, t, n) => {
                "use strict";

                function i(e) {
                    return new Promise((t => setTimeout(t, e)))
                }
                n.d(t, {
                    Z: () => i
                })
            },
            4835: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                const i = {
                    app: {
                        trophy: "https://gs.eponesh.com/sdk/static/icons/trophy.svg"
                    },
                    cdn: {
                        trophy: "https://gs.eponesh.com/sdk/static/icons/reward.png"
                    }
                }
            },
            8293: (e, t, n) => {
                "use strict";
                n.d(t, {
                    s: () => r,
                    _: () => s
                });
                var i = n(6558);
                const r = {
                    timeout: 5e3
                };

                function s({
                    timeout: e = 0
                } = {}) {
                    let t = !1;
                    const n = {},
    r = new Promise((function(e, s) {
        n.done = function(n) {
            if (!t) {
                t = !0;
                e(n);
                return r;
            }
        };
        n.abort = function(e) {
            if (!t) {
                s(e);
                return r;
            }
        };
    }));
                    return e && setTimeout((() => {
                        t || n.abort(`Timeout ${e}ms exceeded`)
                    }), e), n.ready = r, n
                }
            },
            3607: (e, t, n) => {
                "use strict";
                n.d(t, {
                    _X: () => i._
                }), n(233), n(264);
                var i = n(8293)
            },
            5942: (e, t, n) => {
                "use strict";
                var i;
                n.d(t, {
                        z: () => i
                    }),
                    function(e) {
                        e.TELEGRAM = "TELEGRAM", e.YANDEX = "YANDEX", e.VK = "VK", e.OK = "OK", e.GAME_MONETIZE = "GAME_MONETIZE", e.GAME_DISTRIBUTION = "GAME_DISTRIBUTION", e.WG_PLAYGROUND = "WG_PLAYGROUND", e.CRAZY_GAMES = "CRAZY_GAMES", e.SMARTMARKET = "SMARTMARKET", e.GAMEPIX = "GAMEPIX", e.POKI = "POKI", e.VK_PLAY = "VK_PLAY", e.BEELINE = "BEELINE", e.KONGREGATE = "KONGREGATE", e.CUSTOM = "CUSTOM", e.PLAYDECK = "PLAYDECK", e.GOOGLE_PLAY = "GOOGLE_PLAY", e.APP_GALLERY = "APP_GALLERY", e.GALAXY_STORE = "GALAXY_STORE", e.ONE_STORE = "ONE_STORE", e.AMAZON_APPSTORE = "AMAZON_APPSTORE", e.XIAOMI_GETAPPS = "XIAOMI_GETAPPS", e.APTOIDE = "APTOIDE", e.RUSTORE = "RUSTORE", e.ANDROID = "ANDROID", e.FOTOSTRANA = "FOTOSTRANA", e.Y8 = "Y8", e.PARTNER = "PARTNER", e.COOLMATH = "COOLMATH", e.NONE = "NONE"
                    }(i || (i = {}))
            },
            1438: (e, t, n) => {
                "use strict";
                var i;
                n.d(t, {
                        i: () => i
                    }),
                    function(e) {
                        e.New = "NEW", e.Paid = "PAID"
                    }(i || (i = {}))
            },
            180: (e, t, n) => {
                "use strict";
                n.d(t, {
                    $: () => i,
                    Fl: () => r,
                    tM: () => s,
                    pQ: () => a,
                    MU: () => c,
                    cu: () => l,
                    D4: () => h,
                    iA: () => p
                });
                var i, r, s, a, o, c, l, h, d = n(5942);
                ! function(e) {
                    e.PRELOADER = "PRELOADER", e.FULLSCREEN = "FULLSCREEN", e.REWARDED = "REWARDED", e.STICKY = "STICKY"
                }(i || (i = {})),
                function(e) {
                    e.YandexSimpleMonetization = "YandexSimpleMonetization", e.Adfox = "ADFOX", e.Gpt = "GPT", e.Rtb = "RTB", e.Advertonic = "ADVERTONIC", e.TmAds = "TMADS", e.Adsgram = "ADSGRAM"
                }(r || (r = {})),
                function(e) {
                    e.top = "TOP", e.bottom = "BOTTOM"
                }(s || (s = {})),
                function(e) {
                    e.Local = "LOCAL", e.Platform = "PLATFORM", e.Cloud = "CLOUD"
                }(a || (a = {})),
                function(e) {
                    e.External = "EXTERNAL", e.Internal = "INTERNAL"
                }(o || (o = {})),
                function(e) {
                    e.External = "EXTERNAL", e.Internal = "INTERNAL"
                }(c || (c = {})),
                function(e) {
                    e.External = "EXTERNAL", e.Internal = "INTERNAL", e.Pikabu = "PIKABU", e.ExternalToken = "EXTRANAL_TOKEN"
                }(l || (l = {})),
                function(e) {
                    e.Xsolla = "XSOLLA"
                }(h || (h = {}));
                const u = () => ({
                        type: i.STICKY,
                        enabled: !1,
                        enabledDesktop: !1,
                        adServer: null,
                        adServerDesktop: null,
                        name: "",
                        description: "",
                        bannerId: "",
                        desktopBannerId: "",
                        frequency: 0,
                        refreshInterval: 0,
                        maxWidth: 0,
                        maxHeight: 0,
                        maxWidthDimension: "PX",
                        maxHeightDimension: "PX",
                        desktopMaxWidth: 0,
                        desktopMaxHeight: 0,
                        desktopMaxWidthDimension: "PX",
                        desktopMaxHeightDimension: "PX",
                        fitCanvas: !1,
                        position: "bottom",
                        limits: {
                            hour: 0,
                            day: 0,
                            session: 0
                        },
                        useNative: !0
                    }),
                    p = {
                        appId: "",
                        communityLinks: {
                            en: ""
                        },
                        gameLink: "",
                        tag: "",
                        publicKey: "",
                        progressSaveFormat: a.Platform,
                        alwaysSyncPublicFields: !1,
                        customAdsConfig: {
                            id: "",
                            name: "",
                            adFoxOwnerId: "",
                            advertonicUserId: "",
                            tmAdsAppKey: "",
                            description: "",
                            configs: {
                                web: {
                                    implementation: o.Internal,
                                    bidders: [],
                                    banners: [Object.assign(Object.assign({}, u()), {
                                        type: i.FULLSCREEN
                                    }), Object.assign(Object.assign({}, u()), {
                                        type: i.PRELOADER
                                    }), Object.assign(Object.assign({}, u()), {
                                        type: i.REWARDED
                                    }), Object.assign(Object.assign({}, u()), {
                                        type: i.STICKY
                                    })]
                                },
                                android: {
                                    implementation: o.Internal,
                                    banners: [Object.assign(Object.assign({}, u()), {
                                        type: i.FULLSCREEN
                                    }), Object.assign(Object.assign({}, u()), {
                                        type: i.PRELOADER
                                    }), Object.assign(Object.assign({}, u()), {
                                        type: i.REWARDED
                                    }), Object.assign(Object.assign({}, u()), {
                                        type: i.STICKY
                                    })]
                                },
                                telegram: {
                                    implementation: o.Internal,
                                    banners: [Object.assign(Object.assign({}, u()), {
                                        type: i.FULLSCREEN
                                    }), Object.assign(Object.assign({}, u()), {
                                        type: i.PRELOADER
                                    }), Object.assign(Object.assign({}, u()), {
                                        type: i.REWARDED
                                    }), Object.assign(Object.assign({}, u()), {
                                        type: i.STICKY
                                    })]
                                }
                            }
                        },
                        payload: {},
                        customAdsConfigId: "",
                        paymentsConfig: {
                            id: "",
                            name: "",
                            description: "",
                            sandbox: !0,
                            configs: {
                                web: {
                                    implementation: c.Internal,
                                    activeService: null
                                },
                                android: {
                                    implementation: c.Internal,
                                    activeService: null
                                }
                            }
                        },
                        paymentsConfigId: "",
                        authConfig: {
                            id: "",
                            name: "",
                            description: "",
                            xsollaConfig: {
                                loginProjectId: ""
                            },
                            configs: {
                                web: {
                                    implementation: l.Internal,
                                    activeService: null
                                },
                                android: {
                                    implementation: l.Internal,
                                    activeService: null
                                }
                            }
                        },
                        authConfigId: "",
                        type: d.z.NONE,
                        banners: [Object.assign(Object.assign({}, u()), {
                            type: i.FULLSCREEN,
                            enabled: !0,
                            frequency: 60
                        }), Object.assign(Object.assign({}, u()), {
                            type: i.PRELOADER,
                            enabled: !1
                        }), Object.assign(Object.assign({}, u()), {
                            type: i.REWARDED,
                            enabled: !0
                        }), Object.assign(Object.assign({}, u()), {
                            type: i.STICKY,
                            enabled: !1
                        })],
                        ymCounterId: 0,
                        gtagCounterId: ""
                    }
            },
            9503: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Uo: () => i,
                    h$: () => a,
                    lR: () => o,
                    GH: () => c
                });
                var i, r = n(180),
                    s = n(3793);
                ! function(e) {
                    e.EN = "en", e.FR = "fr", e.IT = "it", e.DE = "de", e.ES = "es", e.ZH = "zh", e.PT = "pt", e.KO = "ko", e.JA = "ja", e.RU = "ru", e.TR = "tr", e.AR = "ar", e.HI = "hi", e.ID = "id"
                }(i || (i = {}));
                const a = {
                        [i.EN]: "en-US",
                        [i.FR]: "fr-FR",
                        [i.IT]: "it-IT",
                        [i.DE]: "de-DE",
                        [i.ES]: "es-ES",
                        [i.ZH]: "zh-CN",
                        [i.PT]: "pt-BR",
                        [i.KO]: "ko-KR",
                        [i.JA]: "ja-JP",
                        [i.RU]: "ru-RU",
                        [i.TR]: "tr-TR",
                        [i.AR]: "ar-SA",
                        [i.HI]: "hi-IN",
                        [i.ID]: "id-ID"
                    },
                    o = {
                        isDev: !1,
                        isAllowedOrigin: !0,
                        config: {
                            avatarGenerator: "dicebear_retro",
                            avatarGeneratorTemplate: "",
                            enableUserUploadFiles: !1,
                            enableUserUploadImages: !1,
                            ymCounterId: 0,
                            gtagCounterId: "",
                            showLoader: !1,
                            showReqCounter: !1,
                            orientation: s.LH.Any,
                            showOrientationOverlay: !1,
                            showUnsupportedOSOverlay: !1,
                            targetOS: [],
                            communityLinks: {
                                en: ""
                            }
                        },
                        platformConfig: r.iA,
                        playerFields: [],
                        serverTime: (new Date).toISOString(),
                        gameVariables: [],
                        acl: {
                            canUploadFiles: !1,
                            canUploadImages: !1,
                            canConnectOnline: !1,
                            canCollectStats: !1
                        },
                        project: {
                            icon: "",
                            description: "",
                            name: "",
                            enableMainChat: !1,
                            mainChatId: 0,
                            achievements: {
                                isLockedVisible: !1,
                                isLockedDescriptionVisible: !1,
                                enableUnlockToast: !1
                            },
                            ads: {
                                showCountdownOverlay: !1,
                                showRewardedFailedOverlay: !1
                            }
                        },
                        rewards: [],
                        triggers: [],
                        products: [],
                        achievements: [],
                        achievementsGroups: [],
                        schedulers: [],
                        events: []
                    },
                    c = {
                        limits: {
                            [r.$.PRELOADER]: {
                                hour: {
                                    timestamp: 0,
                                    count: 0
                                },
                                day: {
                                    timestamp: 0,
                                    count: 0
                                },
                                session: {
                                    count: 0
                                }
                            },
                            [r.$.FULLSCREEN]: {
                                hour: {
                                    timestamp: 0,
                                    count: 0
                                },
                                day: {
                                    timestamp: 0,
                                    count: 0
                                },
                                session: {
                                    count: 0
                                }
                            },
                            [r.$.REWARDED]: {
                                hour: {
                                    timestamp: 0,
                                    count: 0
                                },
                                day: {
                                    timestamp: 0,
                                    count: 0
                                },
                                session: {
                                    count: 0
                                }
                            },
                            [r.$.STICKY]: {
                                hour: {
                                    timestamp: 0,
                                    count: 0
                                },
                                day: {
                                    timestamp: 0,
                                    count: 0
                                },
                                session: {
                                    count: 0
                                }
                            }
                        }
                    }
            },
            4618: (e, t, n) => {
                var i = {
                    "./ar.json": [9582, 7808],
                    "./de.json": [3268, 9459],
                    "./en.json": [7772, 2932],
                    "./es.json": [9533, 3968],
                    "./fr.json": [1674, 3746],
                    "./hi.json": [5262, 7637],
                    "./id.json": [6599, 2513],
                    "./it.json": [7001, 1159],
                    "./ja.json": [8257, 848],
                    "./ko.json": [3677, 9670],
                    "./pt.json": [3449, 4047],
                    "./ru.json": [5207, 5964],
                    "./tr.json": [4905, 5066],
                    "./zh.json": [2621, 5929]
                };

                function r(e) {
                    if (!n.o(i, e)) return Promise.resolve().then((() => {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }));
                    var t = i[e],
                        r = t[0];
                    return n.e(t[1]).then((() => n.t(r, 3)))
                }
                r.keys = () => Object.keys(i), r.id = 4618, e.exports = r
            },
            6958: (e, t, n) => {
                var i = {
                    "./ar.json": [6278, 7808],
                    "./de.json": [9717, 9459],
                    "./devtools/en.json": [1868, 8897],
                    "./devtools/ru.json": [3845, 5606],
                    "./en.json": [7630, 2932],
                    "./es.json": [1662, 3968],
                    "./external-sdk/ar.json": [9582, 2038],
                    "./external-sdk/de.json": [3268, 6215],
                    "./external-sdk/en.json": [7772, 8463],
                    "./external-sdk/es.json": [9533, 1999],
                    "./external-sdk/fr.json": [1674, 4436],
                    "./external-sdk/hi.json": [5262, 1036],
                    "./external-sdk/id.json": [6599, 3406],
                    "./external-sdk/it.json": [7001, 5483],
                    "./external-sdk/ja.json": [8257, 9852],
                    "./external-sdk/ko.json": [3677, 9843],
                    "./external-sdk/pt.json": [3449, 7883],
                    "./external-sdk/ru.json": [5207, 5836],
                    "./external-sdk/tr.json": [4905, 423],
                    "./external-sdk/zh.json": [2621, 7426],
                    "./fr.json": [5997, 3746],
                    "./hi.json": [5513, 7637],
                    "./id.json": [159, 2513],
                    "./it.json": [1043, 1159],
                    "./ja.json": [3125, 848],
                    "./ko.json": [7344, 9670],
                    "./pt.json": [8365, 4047],
                    "./ru.json": [4313, 5964],
                    "./tr.json": [2877, 5066],
                    "./zh.json": [5113, 5929]
                };

                function r(e) {
                    if (!n.o(i, e)) return Promise.resolve().then((() => {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }));
                    var t = i[e],
                        r = t[0];
                    return n.e(t[1]).then((() => n.t(r, 3)))
                }
                r.keys = () => Object.keys(i), r.id = 6958, e.exports = r
            }
        },
        s = {};

    function a(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var n = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return r[e].call(n.exports, n, n.exports, a), n.loaded = !0, n.exports
    }
    a.m = r, a.amdD = function() {
        throw new Error("define cannot be used indirect")
    }, a.amdO = {}, a.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return a.d(t, {
            a: t
        }), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, a.t = function(n, i) {
        if (1 & i && (n = this(n)), 8 & i) return n;
        if ("object" == typeof n && n) {
            if (4 & i && n.__esModule) return n;
            if (16 & i && "function" == typeof n.then) return n
        }
        var r = Object.create(null);
        a.r(r);
        var s = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var o = 2 & i && n;
            "object" == typeof o && !~e.indexOf(o); o = t(o)) Object.getOwnPropertyNames(o).forEach((e => s[e] = () => n[e]));
        return s.default = () => n, a.d(r, s), r
    }, a.d = (e, t) => {
        for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce(((t, n) => (a.f[n](e, t), t)), [])), a.u = e => (({
        72: "utils/centrifuge.protobuf",
        369: "platforms/platform.gm",
        423: "i18n/external-sdk-tr-json",
        477: "platforms/platform.gp",
        848: "i18n/ja-json",
        851: "platforms/platform.vk.app",
        1036: "i18n/external-sdk-hi-json",
        1159: "i18n/it-json",
        1911: "platforms/platform.vk",
        1999: "i18n/external-sdk-es-json",
        2038: "i18n/external-sdk-ar-json",
        2513: "i18n/id-json",
        2767: "platforms/platform.playdeck",
        2932: "i18n/en-json",
        3300: "platforms/platform.partner",
        3406: "i18n/external-sdk-id-json",
        3746: "i18n/fr-json",
        3968: "i18n/es-json",
        4047: "i18n/pt-json",
        4341: "platforms/platform.fotostrana",
        4436: "i18n/external-sdk-fr-json",
        4552: "platforms/platform.smartmarket",
        4614: "platforms/platform.ok",
        4773: "platforms/platform.one",
        5066: "i18n/tr-json",
        5433: "platforms/platform.cg",
        5483: "i18n/external-sdk-it-json",
        5606: "i18n/devtools-ru-json",
        5836: "i18n/external-sdk-ru-json",
        5860: "platforms/platform.gd",
        5929: "i18n/zh-json",
        5964: "i18n/ru-json",
        6215: "i18n/external-sdk-de-json",
        6551: "platforms/platform.poki",
        6658: "platforms/platform.beeline",
        6696: "platforms/platform.partner.pure",
        6702: "platforms/platform.cm",
        6755: "platforms/platform.yandex",
        7415: "gs.overlay",
        7426: "i18n/external-sdk-zh-json",
        7573: "platforms/platform.kongregate",
        7637: "i18n/hi-json",
        7808: "i18n/ar-json",
        7883: "i18n/external-sdk-pt-json",
        7982: "platforms/platform.custom.pure",
        8417: "platforms/platform.custom",
        8463: "i18n/external-sdk-en-json",
        8662: "platforms/platform.y8",
        8897: "i18n/devtools-en-json",
        9070: "platforms/platform.vkplay",
        9084: "platforms/platform.wg",
        9459: "i18n/de-json",
        9670: "i18n/ko-json",
        9718: "gs.devtools",
        9843: "i18n/external-sdk-ko-json",
        9852: "i18n/external-sdk-ja-json",
        9885: "platforms/platform.gamepix",
        9967: "platforms/platform.telegram"
    } [e] || e) + "." + a.h() + ".js"), a.h = () => "551a189ae4c4f7effc61", a.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, i = "game-score-sdk:", a.l = (e, t, r, s) => {
        if (n[e]) n[e].push(t);
        else {
            var o, c;
            if (void 0 !== r)
                for (var l = document.getElementsByTagName("script"), h = 0; h < l.length; h++) {
                    var d = l[h];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == i + r) {
                        o = d;
                        break
                    }
                }
            o || (c = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, a.nc && o.setAttribute("nonce", a.nc), o.setAttribute("data-webpack", i + r), o.src = e, 0 !== o.src.indexOf(window.location.origin + "/") && (o.crossOrigin = "anonymous")), n[e] = [t];
            var u = (t, i) => {
                    o.onerror = o.onload = null, clearTimeout(p);
                    var r = n[e];
                    if (delete n[e], o.parentNode && o.parentNode.removeChild(o), r && r.forEach((e => e(i))), t) return t(i)
                },
                p = setTimeout(u.bind(null, void 0, {
                    type: "timeout",
                    target: o
                }), 12e4);
            o.onerror = u.bind(null, o.onerror), o.onload = u.bind(null, o.onload), c && document.head.appendChild(o)
        }
    }, a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        a.g.importScripts && (e = a.g.location + "");
        var t = a.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e
    })(), (() => {
        var e = {
            8821: 0,
            8742: 0,
            11: 0
        };
        a.f.j = (t, n) => {
            var i = a.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i) n.push(i[2]);
                else {
                    var r = new Promise(((n, r) => i = e[t] = [n, r]));
                    n.push(i[2] = r);
                    var s = a.p + a.u(t),
                        o = new Error;
                    a.l(s, (n => {
                        if (a.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                            var r = n && ("load" === n.type ? "missing" : n.type),
                                s = n && n.target && n.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + r + ": " + s + ")", o.name = "ChunkLoadError", o.type = r, o.request = s, i[1](o)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, n) => {
                var i, r, [s, o, c] = n,
                    l = 0;
                for (i in o) a.o(o, i) && (a.m[i] = o[i]);
                for (c && c(a), t && t(n); l < s.length; l++) r = s[l], a.o(e, r) && e[r] && e[r][0](), e[s[l]] = 0
            },
            n = self.webpackChunkgame_score_sdk = self.webpackChunkgame_score_sdk || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })(), (() => {
        "use strict";
        a(2096);
        var e = a(233);
        const t = " fragment translations on Translations { en fr it de es zh pt ko ja ru tr ar id hi }";
        var n, i = function(e, t, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        const r = "\n    id\n    icon(w: 256, h: 256, crop: false)\n    y8Id\n    tag\n    rare\n    progress\n    maxProgress\n    unlocked\n    lockedIcon(w: 256, h: 256, crop: false)\n    progressStep\n    isPublished\n    isLockedVisible\n    isLockedDescriptionVisible\n",
            s = "\n    name(lang: $lang)\n    description(lang: $lang)\n    names { ...translations }\n    iconSmall: icon(w: 48, h: 48, crop: false)\n    lockedIconSmall: lockedIcon(w: 48, h: 48, crop: false)\n",
            o = "\n    achievementId\n    createdAt\n    progress\n    unlocked\n",
            c = `${t} mutation ($input: UnlockPlayerAchievementInput!, $lang: Lang) {\n    result: UnlockPlayerAchievement(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerAchievement {\n            ${o}\n            achievement { ${r} ${s} }\n        }\n    }\n}`,
            l = `${t} mutation ($input: PlayerSetAchievementProgressInput!, $lang: Lang){\n    result: PlayerSetAchievementProgress(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerAchievement {\n            ${o}\n            achievement { ${r} ${s} }\n        }\n    }\n}`;
        class h {
            constructor(e) {
                n.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, n, e, "f")
            }
            setProgress({
                id: e,
                tag: t,
                progress: r
            }) {
                return i(this, n, "f").fetch(l, {
                    id: e,
                    tag: t,
                    progress: r
                })
            }
            unlock({
                id: e,
                tag: t
            }) {
                return i(this, n, "f").fetch(c, {
                    id: e,
                    tag: t,
                    v: 2
                })
            }
        }
        n = new WeakMap;
        var d = a(6558);
        const u = e => `\n    __typename\n    ... on Problem { message }\n    ${e}\n`,
            p = new TextEncoder;
        var f, m = function(e, t, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        const v = "\n    id\n    icon\n    tag\n    price\n    isSubscription\n    period\n    trialPeriod\n    currency\n    currencySymbol\n    yandexId\n",
            y = "\n    name(lang: $lang)\n    description(lang: $lang)\n    iconSmall: icon(w: 48, h: 48, crop: false)\n",
            g = "_id, productId, payload, gift, subscribed, createdAt, orderStatus, expiredAt",
            w = `{\n    __typename\n    ... on Problem { message }\n    ... on PlayerPurchaseOutput {\n        product { ${v} ${y} }\n        purchase { ${g} }\n    }\n}`,
            b = `query ($input: FindPlayerPurchaseInput!, $lang: Lang) {\n    result: FindPlayerPurchase(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerPurchaseOutput {\n            product { ${v} ${y} }\n        }\n    }\n}`,
            P = `mutation ($input: SyncPlayerPurchasesInput!) {\n    result: SyncPlayerPurchases(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerProductsPurchasedOutput {\n            purchases { ${g} }\n        }\n    }\n}`,
            E = `mutation ($input: PurchasePlayerPurchaseInput!, $lang: Lang) {\n    result: PurchasePlayerPurchase(input: $input) ${w}\n}`,
            T = `mutation ($input: ConsumePlayerPurchaseInput!, $lang: Lang) {\n    result: ConsumePlayerPurchase(input: $input) ${w}\n}`,
            S = `mutation ($input: CancelPlayerSubscriptionInput!, $lang: Lang) {\n    result: CancelPlayerSubscription(input: $input) ${w}\n}`,
            _ = `mutation ($input: ResumePlayerSubscriptionInput!, $lang: Lang) {\n    result: ResumePlayerSubscription(input: $input) ${w}\n}`,
            A = `query ($lang: Lang) {\n    result: FetchPlayerPurchases {\n        __typename\n        ... on Problem { message }\n        ... on PlayerPurchasesOutput {\n            products { ${v} ${y} }\n            playerPurchases { ${g} }\n        }\n    }\n}`,
            I = `query ($input: GetPlayerPurchaseInput!) {\n    result: GetPlayerPurchase(input: $input) {\n        __typename\n        ... on PlayerPurchase {\n            ${g}\n        }\n        ... on Problem { message }\n    }\n}`;
        class C {
            constructor(e) {
                f.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, f, e, "f")
            }
            sync({
                purchases: e,
                payload: t
            }) {
                return m(this, f, "f").fetch(P, {
                    purchases: e,
                    payload: t
                })
            }
            fetch() {
                return m(this, f, "f").fetch(A)
            }
            getPaymentLink(e) {
                return m(this, f, "f").fetch("query ($input: PlayerGetPaymentLinkInput!) {\n    result: PlayerGetPaymentLink(input: $input) {\n        __typename\n        ... on PlayerPaymentLink { link }\n        ... on Problem { message }\n    }\n}", e)
            }
            purchase({
                payload: e,
                id: t,
                tag: n
            }) {
                return m(this, f, "f").fetch(E, {
                    payload: e,
                    id: t,
                    tag: n
                })
            }
            getPlayerPurchase({
                projectId: e,
                purchaseId: t,
                payload: n,
                playerId: i,
                productId: r
            }) {
                return m(this, f, "f").fetch(I, {
                    projectId: e,
                    purchaseId: t,
                    payload: n,
                    playerId: i,
                    productId: r
                })
            }
            findProduct({
                id: e,
                tag: t
            }) {
                return m(this, f, "f").fetch(b, {
                    id: e,
                    tag: t
                })
            }
            consume({
                id: e,
                tag: t
            }) {
                return m(this, f, "f").fetch(T, {
                    id: e,
                    tag: t
                })
            }
            cancelSubscription({
                payload: e,
                id: t,
                tag: n
            }) {
                return m(this, f, "f").fetch(S, {
                    payload: e,
                    id: t,
                    tag: n
                })
            }
            resumeSubscription({
                payload: e,
                id: t,
                tag: n
            }) {
                return m(this, f, "f").fetch(_, {
                    payload: e,
                    id: t,
                    tag: n
                })
            }
        }
        f = new WeakMap;
        var k;
        const R = "\n    id\n    icon\n    tag\n    isAutoAccept\n    mutations { type key action value }\n",
            O = "\n    rewardId\n    countTotal\n    countAccepted\n",
            D = `mutation ($input: GivePlayerRewardInput!, $lang: Lang) {\n    result: GivePlayerReward(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerReward {\n            ${O}\n            reward { ${R} \n    name(lang: $lang)\n    description(lang: $lang)\n    iconSmall: icon(w: 48, h: 48, crop: false)\n }\n        }\n    }\n}`;
        class N {
            constructor(e) {
                k.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, k, e, "f")
            }
            give({
                id: e,
                tag: t
            }) {
                return function(e, t, n, i) {
                    if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                }(this, k, "f").fetch(D, {
                    id: e,
                    tag: t
                })
            }
        }
        k = new WeakMap;
        const x = "\n    id\n    tag\n    isAutoClaim\n    description(lang: $lang)\n    descriptions { ...translations }\n    conditions { \n    type\n    key\n    operator\n    value\n }\n    bonuses { id type }\n";
        var L;
        const F = `\n    id\n    tag\n    icon\n    dateStart\n    dateEnd\n    isAutoJoin\n    triggers { ${x} }\n`,
            M = "\n    eventId\n    stats {\n        activeDays\n        activeDaysConsecutive\n    }\n",
            j = `mutation ($input: PlayerJoinEventInput!) {\n    result: PlayerJoinEvent(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerEvent { ${M} }\n    }\n}`;
        class U {
            constructor(e) {
                L.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, L, e, "f")
            }
            join(e) {
                return t = this, n = void 0, r = function*() {
                    return function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    }(this, L, "f").fetch(j, e)
                }, new((i = void 0) || (i = Promise))((function(e, s) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(t) {
                        var n;
                        t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function(e) {
                            e(n)
                        }))).then(a, o)
                    }
                    c((r = r.apply(t, n || [])).next())
                }));
                var t, n, i, r
            }
        }
        L = new WeakMap;
        var $, G = function(e, t, n, i) {
                return new(n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            B = function(e, t, n, i) {
                if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
        const q = "\n    name(lang: $lang)\n    key\n    type\n    default\n    important\n    public\n    intervalIncrement {\n        interval\n        increment\n    }\n    limits {\n        min\n        max\n        couldGoOverLimit\n    }\n    variants {\n        value\n        name(lang: $lang)\n    }\n",
            V = `\n... on Player {\n    state\n    stats {\n        playtimeAll\n        playtimeToday\n        activeDays\n        activeDaysConsecutive\n    }\n    achievementsList { ${o} }\n    purchasesListV2 { ${g} }\n    rewards { ${O} }\n    triggers { triggerId claimed }\n    segments\n    leftSegments\n    newSegments\n    playerSchedulers {\n        schedulerId\n        daysClaimed\n        stats {\n            activeDays\n            activeDaysConsecutive\n        }\n    }\n    playerEvents { ${M} }\n    experiments  {\n    experiment\n    cohort\n}\n    rewardsData {\n        activatedTriggersNow\n        claimedTriggersNow\n        claimedSchedulersDaysNow { schedulerId day }\n        givenAchievements\n        givenRewards\n        givenProducts\n    }\n    uniques { tag value }\n    sessionStart\n    serverTime\n    token @include(if: $withToken)\n}\n... on Problem { message }\n`,
            W = `\nmutation ($input: SyncPlayerInput!, $lang: Lang, $withToken: Boolean!) {\n    result: SyncPlayer(input: $input) {\n        __typename\n        ${V}\n        ... on PlayerSyncConflict {\n            players\n            fields { ${q} }\n        }\n    }\n}`,
            z = `\nquery ($input: GetPlayerInput!, $withToken: Boolean!) {\n    result: GetPlayer(input: $input) {\n        __typename\n        ${V}\n    }\n}`,
            Y = `query ($lang: Lang) {\n    result: FetchPlayerFields {\n        __typename\n        ... on Problem { message }\n        ... on ModelFieldsList {\n            items { ${q} }\n        }\n    }\n}`,
            K = `query($input: PlayerFetchPlayersInput!) {\n    result: PlayerFetchPlayers(input: $input) { ${u("\n    ... on FullPlayersList {\n        players {\n            state\n            isOnline\n        }\n    }\n")} }\n}`;
        let J = !0;
        class Z {
            constructor(e) {
                $.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, $, e, "f")
            }
            sync({
                playerState: e,
                override: t,
                acceptedRewards: n,
                givenRewards: i,
                claimedTriggers: r,
                claimedSchedulersDays: s
            }, {
                withToken: a
            }) {
                ((e, t, n) => {
                    const i = p.encode(JSON.stringify(e)).length;
                    if (i > 1048576 && d.kg.warn(`Maximum size exceeded: sending data must be maximum 1MB, your size is: ${Math.round(i/1024/1024*100)/100} MB`), i > 2097152) throw new Error("max_data_limit_exceeded")
                })(e);
                const o = B(this, $, "f").fetch(W, {
                    playerState: e,
                    override: t,
                    acceptedRewards: n,
                    givenRewards: i,
                    claimedTriggers: r,
                    claimedSchedulersDays: s,
                    isFirstRequest: J
                }, {
                    withToken: a
                });
                return J = !1, o
            }
            getPlayer({
                withToken: e
            }) {
                const t = B(this, $, "f").fetch(z, {
                    isFirstRequest: J
                }, {
                    withToken: e
                });
                return J = !1, t
            }
            loginPlayer({
                token: e
            }) {
                return G(this, void 0, void 0, (function*() {
                    return B(this, $, "f").fetch("\nmutation ($input: LoginPlayerInput!) {\n    result: LoginPlayer(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on Success { success }\n    }\n}", {
                        token: e
                    })
                }))
            }
            logoutPlayer() {
                return G(this, void 0, void 0, (function*() {
                    return B(this, $, "f").fetch("\nmutation {\n    result: LogoutPlayer {\n        __typename\n        ... on Problem { message }\n        ... on Success { success }\n    }\n}")
                }))
            }
            fetchFields() {
                return G(this, void 0, void 0, (function*() {
                    return B(this, $, "f").fetch(Y)
                }))
            }
            checkCode({
                secretCode: e
            }) {
                return B(this, $, "f").fetch("query ($input: CheckPlayerCodeInput!) {\n    result: CheckPlayerCode(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on Success { success }\n    }\n}", {
                    secretCode: e
                })
            }
            checkUniqueValue({
                tag: e,
                value: t
            }) {
                return B(this, $, "f").fetch("query ($input: CheckPlayerUniqueValueInput!) {\n    result: CheckPlayerUniqueValue(input: $input) {\n        __typename\n       ... on Problem { message }\n       ... on Success { success }\n    }\n}", {
                    tag: e,
                    value: t
                })
            }
            registerUniqueValue({
                tag: e,
                value: t
            }) {
                return B(this, $, "f").fetch("mutation ($input: RegisterPlayerUniqueValueInput!) {\n    result: RegisterPlayerUniqueValue(input: $input) {\n        __typename\n       ... on UniqueValue { tag value }\n       ... on Problem { message }\n    }\n}", {
                    tag: e,
                    value: t
                })
            }
            deleteUniqueValue({
                tag: e
            }) {
                return B(this, $, "f").fetch("mutation ($input: DeletePlayerUniqueValueInput!) {\n    result: DeletePlayerUniqueValue(input: $input) {\n        __typename\n       ... on Success { success }\n       ... on Problem { message }\n    }\n}", {
                    tag: e
                })
            }
            fetchPlayers({
                ids: e
            }) {
                return B(this, $, "f").fetch(K, {
                    ids: e
                })
            }
        }
        $ = new WeakMap;
        var X, H = function(e, t, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        const Q = "\n    key\n    value(lang: $lang)\n    type\n",
            ee = `\n${t}\nquery ($lang: Lang) {\n    result: FetchPlayerProjectConfig {\n        __typename\n        ... on Problem { message }\n        ... on PlayerProjectConfig {\n            isDev\n            isAllowedOrigin\n            config {\n                lang\n                avatarGenerator\n                avatarGeneratorTemplate\n                ymCounterId\n                gtagCounterId\n                showLoader\n                showReqCounter\n                orientation\n                showOrientationOverlay\n                targetOS\n                showUnsupportedOSOverlay\n                communityLinks { ...translations }\n            }\n            project {\n                name(lang: $lang)\n                description(lang: $lang)\n                icon(w: 256, h: 256, crop: false)\n                mainChatId\n                enableMainChat\n                achievements {\n                    isLockedVisible\n                    isLockedDescriptionVisible\n                    enableUnlockToast\n                }\n                ads {\n                    showCountdownOverlay\n                    showRewardedFailedOverlay\n                }\n            }\n            platformConfig {\n                type\n                tag\n                appId\n                gameLink\n                publicKey\n                progressSaveFormat\n                alwaysSyncPublicFields\n                communityLinks { ...translations }\n                banners { ...banner }\n                payload\n                customAdsConfig { ...customAdsConfig }\n                customAdsConfigId\n                paymentsConfig { ...paymentConfig }\n                paymentsConfigId\n                authConfig { ...authConfig }\n                authConfigId\n                ymCounterId\n                gtagCounterId\n            }\n            playerFields { ${q} }\n            serverTime\n            gameVariables { ${Q} }\n            rewards {\n                ${R}\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            triggers {\n                ${x}\n            }\n            achievements {\n                ${r}\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            achievementsGroups {\n                id tag name(lang: $lang) description(lang: $lang) achievements\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            products {\n                ${v}\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            products {\n                ${v}\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            schedulers { \n    id\n    tag\n    type\n    days\n    isRepeat\n    daysBonuses {\n        day\n        bonuses { id type }\n    }\n    triggers {\n        ${x}\n        day\n    }\n    isAutoRegister\n }\n            events {\n                ${F}\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            acl {\n                canUploadImages\n                canUploadFiles\n                canConnectOnline\n                canCollectStats\n            }\n        }\n    }\n}\nfragment customAdsConfig on AdsConfig {\n  id\n  name\n  description\n  adFoxOwnerId\n  advertonicUserId\n  tmAdsAppKey\n  configs {\n    web {\n      implementation\n      bidders {\n        id\n        key\n        adServer\n        adServerBidderId\n        cpmAdjustment\n        params { key type }\n      }\n      banners {\n        ...banner\n        mobileConfig { ...bannerConfig }\n        desktopConfig { ...bannerConfig }\n      }\n    },\n    android {\n      implementation\n      banners {\n        ...banner\n      }\n    }\n    telegram {\n      implementation\n      banners {\n        ...banner\n      }\n    }\n  }\n}\n\nfragment bannerConfig on BannerConfig {\n    enableWrapper\n    wrapperCountdown\n    frequency\n    refreshInterval\n    position\n    biddersConfig { codeType sizes }\n    bidders {\n        key\n        adServer\n        params { key value }\n    }\n}\n\n\nfragment banner on Banner {\n    type\n    enabled\n    enabledDesktop\n    bannerId\n    desktopBannerId\n    adServer\n    adServerDesktop\n    frequency\n    refreshInterval\n    maxWidth\n    maxHeight\n    maxWidthDimension\n    maxHeightDimension\n    desktopMaxWidth\n    desktopMaxHeight\n    desktopMaxWidthDimension\n    desktopMaxHeightDimension\n    fitCanvas\n    position\n    limits { hour day session }\n    useNative\n}\nfragment paymentConfig on PaymentsConfig {\n    id\n    name\n    description\n    sandbox\n    configs {\n      web {\n        implementation\n        activeService\n      }\n      android {\n        implementation\n        activeService\n      }\n    }\n  }\n  \nfragment authConfig on AuthConfig {\n    id\n    name\n    description\n    xsollaConfig {\n        loginProjectId\n    }\n    configs {\n      web {\n        implementation\n        activeService\n      }\n      android {\n        implementation\n        activeService\n      }\n    }\n  }\n  \n`,
            te = `query ($lang: Lang) {\n    result: FetchPlayerProjectVariables {\n        __typename\n        ... on Problem { message }\n        ... on ProjectVariablesList {\n            items { ${Q} }\n        }\n    }\n}`;
        class ne {
            constructor(e) {
                X.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, X, e, "f")
            }
            fetchConfig() {
                return H(this, X, "f").fetch(ee)
            }
            fetchVariables() {
                return H(this, X, "f").fetch(te)
            }
        }
        X = new WeakMap;
        var ie;
        class re {
            constructor(e) {
                ie.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, ie, e, "f")
            }
            fetch({
                id: e,
                tag: t,
                urlFrom: n
            }) {
                return function(e, t, n, i) {
                    if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                }(this, ie, "f").fetch("\nfragment project on Project {\n    id\n    url(from: $url)\n    name(lang: $lang)\n    description(lang: $lang)\n    assets {\n        icon(lang: $lang) {\n            resources { src(w: 256, h: 256, crop: true) }\n        }\n    }\n}\nquery ($input: FetchPlayerGamesCollectionInput!, $lang: Lang, $url: String) {\n    result: FetchPlayerGamesCollection(input: $input) {\n        __typename\n        ... on GamesCollection {\n            id\n            tag\n            name(lang: $lang)\n            description(lang: $lang)\n            games { ...project }\n        }\n        ... on Problem { message }\n    }\n}", {
                    id: e,
                    tag: t,
                    urlFrom: n
                }, {
                    url: n
                })
            }
        }
        ie = new WeakMap;
        var se, ae = function(e, t, n, i) {
                return new(n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            oe = function(e, t, n, i) {
                if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
        const ce = `\n    ... on PlayersTop {\n        leaderboard {\n            id\n            tag\n            name(lang: $lang),\n            description(lang: $lang),\n            shareText(lang: $lang),\n            isAuthorizedOnly,\n            limit\n        }\n        players\n        fields { ${q} }\n    }\n`,
            le = `\n    ... on PlayerTop {\n        player\n        abovePlayers\n        belowPlayers\n        fields { ${q} }\n    }\n`,
            he = `\n    ... on PlayerRecord {\n        record\n        fields { ${q} }\n    }\n`,
            de = `query ($input: FetchTopInput!, $lang: Lang, $withMe: Boolean!) {\n    result: FetchTop(input: $input) {${u(ce)}}\n    playerResult: FetchPlayerRating(input: $input) @include(if: $withMe) {${u(le)}}\n}`,
            ue = `query ($input: FetchTopInput!, $lang: Lang) {\n    result: FetchPlayerRating(input: $input) {${u(le)}}\n}`,
            pe = `query ($input: FetchPlayerTopScopedInput!, $lang: Lang, $withMe: Boolean!) {\n    result: FetchPlayerTopScoped(input: $input) {${u(ce)}}\n    playerResult: FetchPlayerRatingScoped(input: $input) @include(if: $withMe) {${u(le)}}\n}`,
            fe = `query ($input: FetchPlayerTopScopedInput!, $lang: Lang) {\n    result: FetchPlayerRatingScoped(input: $input) {${u(le)}}\n}`,
            me = `mutation ($input: PlayerPublishRecordInput!, $lang: Lang) {\n    result: PlayerPublishRecord(input: $input) {${u(he)}}\n}`;
        class ve {
            constructor(e) {
                se.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, se, e, "f")
            }
            getRating({
                orderBy: e = ["score"],
                includeFields: t = [],
                order: n = "DESC",
                limit: i = 10,
                withMe: r = "none",
                showNearest: s
            }) {
                return ae(this, void 0, void 0, (function*() {
                    return oe(this, se, "f").fetchMany(de, {
                        orderBy: e,
                        order: n,
                        limit: i,
                        includeFields: t,
                        showNearest: s
                    }, {
                        withMe: "none" !== r
                    })
                }))
            }
            getPlayerRating({
                orderBy: e = ["score"],
                includeFields: t = [],
                order: n = "DESC",
                limit: i = 10,
                showNearest: r
            }) {
                return ae(this, void 0, void 0, (function*() {
                    return oe(this, se, "f").fetch(ue, {
                        orderBy: e,
                        order: n,
                        limit: i,
                        includeFields: t,
                        showNearest: r
                    })
                }))
            }
            getRatingVariant({
                id: e,
                tag: t,
                variant: n,
                includeFields: i = [],
                limit: r = 10,
                withMe: s = "none",
                order: a,
                showNearest: o
            }) {
                return ae(this, void 0, void 0, (function*() {
                    return oe(this, se, "f").fetchMany(pe, {
                        id: e,
                        tag: t,
                        variant: n,
                        limit: r,
                        includeFields: i,
                        order: a,
                        showNearest: o
                    }, {
                        withMe: "none" !== s
                    })
                }))
            }
            getPlayerRatingVariant({
                id: e,
                tag: t,
                variant: n,
                includeFields: i = [],
                limit: r = 10,
                order: s,
                showNearest: a
            }) {
                return ae(this, void 0, void 0, (function*() {
                    return oe(this, se, "f").fetch(fe, {
                        id: e,
                        tag: t,
                        variant: n,
                        limit: r,
                        includeFields: i,
                        order: s,
                        showNearest: a
                    })
                }))
            }
            publishRecord({
                id: e,
                tag: t,
                variant: n,
                record: i,
                override: r
            }) {
                return ae(this, void 0, void 0, (function*() {
                    return oe(this, se, "f").fetch(me, {
                        id: e,
                        tag: t,
                        variant: n,
                        record: i,
                        override: r
                    })
                }))
            }
        }
        se = new WeakMap;
        var ye;
        class ge {
            constructor(e) {
                ye.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, ye, e, "f")
            }
            fetch({
                type: e,
                format: t
            }) {
                return function(e, t, n, i) {
                    if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                }(this, ye, "f").fetch("query($input: FetchPlayerDocumentInput!, $lang: Lang, $format: DocumentFormat) {\n    result: FetchPlayerDocument(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on Document {\n            type\n            content(lang: $lang, format: $format)\n        }\n    }\n}", {
                    type: e
                }, {
                    format: t
                })
            }
        }
        ye = new WeakMap;
        var we, be = function(e, t, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        const Pe = "\n    id: _id\n    playerId\n    src\n    tags\n    width\n    height\n",
            Ee = `\n    ... on Image { ${Pe} }\n`,
            Te = `query($input: FetchPlayerImagesInput!) {\n    result: FetchPlayerImages(input: $input) { ${u(`\n    ... on ImagesList {\n        items { ${Pe} }\n    }\n`)} }\n}`,
            Se = `mutation($input: UploadPlayerImageInput!) {\n    result: UploadPlayerImage(input: $input) { ${u(Ee)} }\n}`,
            _e = `mutation($input: UploadPlayerImageByURLInput!) {\n    result: UploadPlayerImageByURL(input: $input) {\n        ${u("... on ResponseBody { body }")}\n    }\n}`,
            Ae = `mutation($input: SavePlayerImageByURLInput!) {\n    result: SavePlayerImageByURL(input: $input) {\n        ${u(Ee)}\n    }\n}`;
        class Ie {
            constructor(e) {
                we.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, we, e, "f")
            }
            fetch({
                playerId: e,
                limit: t,
                offset: n,
                tags: i
            }) {
                return be(this, we, "f").fetch(Te, {
                    playerId: e,
                    limit: t,
                    offset: n,
                    tags: i
                })
            }
            upload({
                file: e,
                tags: t,
                accessPayload: n
            }) {
                return be(this, we, "f").fetch(Se, {
                    file: e,
                    tags: t,
                    accessPayload: n
                })
            }
            uploadByURL({
                fieldName: e,
                file: t,
                uploadUrl: n
            }) {
                return be(this, we, "f").fetch(_e, {
                    fieldName: e,
                    file: t,
                    uploadUrl: n
                })
            }
            saveByURL({
                src: e,
                crop: t,
                tags: n
            }) {
                return be(this, we, "f").fetch(Ae, {
                    src: e,
                    crop: t,
                    tags: n
                })
            }
        }
        we = new WeakMap;
        var Ce, ke = function(e, t, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        const Re = "\n    id: _id\n    playerId\n    src\n    size\n    name\n    tags\n",
            Oe = `\n    ... on File { ${Re} }\n`,
            De = `query($input: FetchPlayerFilesInput!) {\n    result: FetchPlayerFiles(input: $input) { ${u(`\n    ... on FilesList {\n        items { ${Re} }\n    }\n`)} }\n}`,
            Ne = `mutation($input: UploadPlayerFileInput!) {\n    result: UploadPlayerFile(input: $input) { ${u(Oe)} }\n}`;
        class xe {
            constructor(e) {
                Ce.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, Ce, e, "f")
            }
            fetch({
                playerId: e,
                limit: t,
                offset: n,
                tags: i
            }) {
                return ke(this, Ce, "f").fetch(De, {
                    playerId: e,
                    limit: t,
                    offset: n,
                    tags: i
                })
            }
            upload({
                file: e,
                tags: t
            }) {
                return ke(this, Ce, "f").fetch(Ne, {
                    file: e,
                    tags: t
                })
            }
        }
        Ce = new WeakMap;
        var Le;
        class Fe {
            constructor(e) {
                Le.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, Le, e, "f")
            }
            register(e) {
                return t = this, n = void 0, r = function*() {
                    return function(e, t, n, i) {
                        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    }(this, Le, "f").fetch("\n    mutation ($input: PlayerRegisterOnSchedulerInput!) {\n        result: PlayerRegisterOnScheduler(input: $input) {\n            __typename\n            ... on Problem { message }\n            ... on PlayerScheduler { \n    daysClaimed\n    schedulerId\n    stats {\n        activeDays\n        activeDaysConsecutive\n    }\n }\n        }\n    }\n", e)
                }, new((i = void 0) || (i = Promise))((function(e, s) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(t) {
                        var n;
                        t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function(e) {
                            e(n)
                        }))).then(a, o)
                    }
                    c((r = r.apply(t, n || [])).next())
                }));
                var t, n, i, r
            }
        }
        Le = new WeakMap;
        var Me, je, Ue, $e, Ge = a(5239),
            Be = function(e, t, n, i) {
                return new(n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            qe = function(e, t, n, i) {
                if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            },
            Ve = function(e, t, n, i, r) {
                if ("m" === i) throw new TypeError("Private method is not writable");
                if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n), n
            };
        const We = "... on Success { success }";
        class ze {
            constructor(e) {
                Me.set(this, ""), je.set(this, !1), Ue.set(this, 0), $e.set(this, (() => {})), this.config = {
                    apiUrl: e.apiUrl,
                    projectId: e.projectId,
                    publicToken: e.publicToken,
                    lang: e.lang,
                    platformType: e.platformType,
                    platformKey: e.platformKey
                }
            }
            get reqCounter() {
                return qe(this, Ue, "f")
            }
            set reqCounter(e) {
                Ve(this, Ue, e, "f"), qe(this, $e, "f").call(this, e)
            }
            getOptions() {
                return Object.assign({}, this.config)
            }
            addCounterListener(e) {
                Ve(this, $e, e, "f")
            }
            setLang(e) {
                this.config.lang = e
            }
            setWithCookie(e) {
                Ve(this, je, e, "f")
            }
            setPlayerData(e) {
                Ve(this, Me, btoa(JSON.stringify(e)), "f")
            }
            setPlatform(e, t) {
                this.config.platformType = e, this.config.platformKey = t
            }
            ping(e) {
                fetch(`${this.config.apiUrl}/ping?t=${e}`)
            }
            signQuery(e = null) {
                return Be(this, void 0, void 0, (function*() {
                    const t = {
                            projectId: this.config.projectId,
                            query: Ye(e),
                            token: this.config.publicToken
                        },
                        n = yield(0, Ge.X)(JSON.stringify(t));
                    return {
                        input: e,
                        hash: n
                    }
                }))
            }
            fetch(e, t, n) {
                return Be(this, void 0, void 0, (function*() {
                    return this.fetchMany(e, t, n).then((({
                        result: e
                    }) => ((e => {
                        if ("Problem" === (null == e ? void 0 : e.__typename)) throw e.message
                    })(e), e)))
                }))
            }
            fetchMany(e, t, n = {}) {
                return Be(this, void 0, void 0, (function*() {
                    const {
                        input: i,
                        hash: r
                    } = yield this.signQuery(t);
                    let s, a = {};
                    const o = JSON.stringify({
                            query: e,
                            variables: Object.assign({
                                input: i,
                                lang: this.config.lang.toUpperCase()
                            }, n)
                        }),
                        c = function(e = {}) {
                            return Object.keys(e).filter((t => e[t] instanceof File))
                        }(t);
                    if (c.length > 0) {
                        s = new FormData, s.append("operations", o);
                        const e = {};
                        c.forEach(((t, n) => {
                            e[n] = [`variables.input.${t}`]
                        })), s.append("map", JSON.stringify(e)), c.forEach(((e, n) => {
                            s.append(n, t[e])
                        }))
                    } else a = {
                        "Content-Type": "application/json;charset=utf-8"
                    }, s = o;

                }))
            }
        }

        function Ye(e) {
            var t;
            return Array.isArray(e) ? e.map(Ye) : null !== e && "object" == typeof e ? (Object.getOwnPropertySymbols(e).length > 0 && (e = JSON.parse(JSON.stringify(e))), t = {}, Object.keys(e).sort().forEach((n => t[n] = Ye(e[n]))), t) : e
        }
        Me = new WeakMap, je = new WeakMap, Ue = new WeakMap, $e = new WeakMap;
        var Ke, Je = function(e, t, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        const Ze = "\n    id\n    tags\n    projectId\n    capacity\n    ownerId\n    name(lang: $lang)\n    description(lang: $lang)\n    private\n    visible\n    hasPassword\n    membersCount\n",
            Xe = `... on ChannelInvitesList {\n    items {\n        channel { ${Ze} }\n        channelId\n        playerTo\n        date\n    }\n}`,
            He = `query($input: PlayerFetchPlayerInvitesInput!, $lang: Lang) {\n    result: PlayerFetchInvites(input: $input) { ${u(`... on ChannelInvitesList {\n    items {\n        channel { ${Ze} }\n        channelId\n        playerFrom\n        date\n    }\n}`)} }\n}`,
            Qe = `query($input: PlayerFetchPlayerSentInvitesInput!, $lang: Lang) {\n    result: PlayerFetchSentInvites(input: $input) { ${u(Xe)} }\n}`,
            et = `query($input: PlayerFetchChannelInvitesInput!) {\n    result: PlayerFetchChannelInvites(input: $input) { ${u("... on ChannelInvitesList {\n    items {\n        channelId\n        playerTo\n        playerFrom\n        date\n    }\n}")} }\n}`,
            tt = `mutation($input: PlayerSendInviteToChannelInput!) {\n    result: PlayerSendInviteToChannel(input: $input) { ${u("... on ChannelInvite {\n    channelId\n    playerToId\n    playerFromId\n    date\n }")} }\n}`,
            nt = `mutation($input: PlayerCancelInviteToChannelInput!) {\n    result: PlayerCancelInviteToChannel(input: $input) { ${u(We)} }\n}`,
            it = `mutation($input: PlayerAcceptInviteToChannelInput!) {\n    result: PlayerAcceptInviteToChannel(input: $input) { ${u(We)} }\n}`,
            rt = `mutation($input: PlayerRejectInviteToChannelInput!) {\n    result: PlayerRejectInviteToChannel(input: $input) { ${u(We)} }\n}`;
        class st {
            constructor(e) {
                Ke.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, Ke, e, "f")
            }
            fetchInvites({
                limit: e,
                offset: t
            }) {
                return Je(this, Ke, "f").fetch(He, {
                    limit: e,
                    offset: t
                })
            }
            fetchChannelInvites({
                channelId: e,
                limit: t,
                offset: n
            }) {
                return Je(this, Ke, "f").fetch(et, {
                    channelId: e,
                    limit: t,
                    offset: n
                })
            }
            fetchSentInvites({
                limit: e,
                offset: t
            }) {
                return Je(this, Ke, "f").fetch(Qe, {
                    limit: e,
                    offset: t
                })
            }
            sendInvite({
                channelId: e,
                playerId: t
            }) {
                return Je(this, Ke, "f").fetch(tt, {
                    channelId: e,
                    playerId: t
                })
            }
            cancelInvite({
                channelId: e,
                playerId: t
            }) {
                return Je(this, Ke, "f").fetch(nt, {
                    channelId: e,
                    playerId: t
                })
            }
            acceptInvite({
                channelId: e
            }) {
                return Je(this, Ke, "f").fetch(it, {
                    channelId: e
                })
            }
            rejectInvite({
                channelId: e
            }) {
                return Je(this, Ke, "f").fetch(rt, {
                    channelId: e
                })
            }
        }
        Ke = new WeakMap;
        var at, ot = function(e, t, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        const ct = "\n    canViewMessages\n    canAddMessage\n    canEditMessage\n    canDeleteMessage\n    canViewMembers\n    canInvitePlayer\n    canKickPlayer\n    canAcceptJoinRequest\n    canMutePlayer\n",
            lt = `\n    id\n    tags\n    messageTags\n    projectId\n    capacity\n    ownerId\n    name(lang: $lang)\n    description(lang: $lang)\n    private\n    visible\n    permanent\n    hasPassword\n    password\n    templateId\n    membersCount\n    membersOnlineCount\n    isJoined\n    isRequestSent\n    isInvited\n    messageLimits { \n    length\n    timeoutPeriod\n }\n    mute { isMuted, unmuteAt }\n    ownerAcl { ${ct} }\n    memberAcl { ${ct} }\n    guestAcl { ${ct} }\n    censor { \n    links\n    spam\n    ageRestriction\n }\n`,
            ht = `... on Channel { ${lt} }`,
            dt = `... on ChannelsList {\n    items { ${lt} }\n}`,
            ut = `query($input: PlayerFetchChannelInput!, $lang: Lang) {\n    result: PlayerFetchChannel(input: $input) { ${u(ht)} }\n}`,
            pt = `query($input: PlayerFetchPersonalChannelInput!, $lang: Lang) {\n    result: PlayerFetchPersonalChannel(input: $input) { ${u(ht)} }\n}`,
            ft = `query($input: PlayerFetchChannelsInput!, $lang: Lang) {\n    result: PlayerFetchChannels(input: $input) { ${u(dt)} }\n}`,
            mt = `query($input: PlayerFetchFeedChannelInput!, $lang: Lang) {\n    result: PlayerFetchFeedChannel(input: $input) { ${u(ht)} }\n}`,
            vt = `mutation($input: PlayerCreateChannelInput!, $lang: Lang) {\n    result: PlayerCreateChannel(input: $input) { ${u(ht)} }\n}`,
            yt = `mutation($input: PlayerUpdateChannelInput!, $lang: Lang) {\n    result: PlayerUpdateChannel(input: $input) { ${u(ht)} }\n}`,
            gt = `mutation($input: PlayerDeleteChannelInput!) {\n    result: PlayerDeleteChannel(input: $input) { ${u(We)} }\n}`;
        class wt {
            constructor(e) {
                at.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, at, e, "f")
            }
            fetchChannel({
                channelId: e
            }) {
                return ot(this, at, "f").fetch(ut, {
                    channelId: e
                }).then(bt)
            }
            fetchPersonalChannel({
                playerId: e
            }) {
                return ot(this, at, "f").fetch(pt, {
                    playerId: e
                }).then(bt)
            }
            fetchFeedChannel({
                playerId: e
            }) {
                return ot(this, at, "f").fetch(mt, {
                    playerId: e
                }).then(bt)
            }
            fetchChannels({
                ids: e,
                onlyJoined: t,
                onlyOwned: n,
                tags: i,
                search: r,
                limit: s,
                offset: a
            }) {
                return ot(this, at, "f").fetch(ft, {
                    ids: e,
                    onlyJoined: t,
                    onlyOwned: n,
                    tags: i,
                    search: r,
                    limit: s,
                    offset: a
                }).then(Pt)
            }
            createChannel({
                template: e,
                tags: t,
                capacity: n,
                name: i,
                description: r,
                password: s,
                ownerAcl: a,
                memberAcl: o,
                guestAcl: c,
                visible: l,
                private: h
            }) {
                return ot(this, at, "f").fetch(vt, {
                    template: e,
                    tags: t,
                    capacity: n,
                    name: i,
                    description: r,
                    password: s,
                    ownerAcl: a,
                    memberAcl: o,
                    guestAcl: c,
                    visible: l,
                    private: h
                }).then(bt)
            }
            updateChannel({
                channelId: e,
                tags: t,
                capacity: n,
                name: i,
                description: r,
                password: s,
                ownerAcl: a,
                memberAcl: o,
                guestAcl: c,
                ownerId: l,
                visible: h,
                private: d
            }) {
                return ot(this, at, "f").fetch(yt, {
                    channelId: e,
                    tags: t,
                    capacity: n,
                    name: i,
                    description: r,
                    password: s,
                    ownerAcl: a,
                    memberAcl: o,
                    guestAcl: c,
                    ownerId: l,
                    visible: h,
                    private: d
                }).then(bt)
            }
            deleteChannel({
                channelId: e
            }) {
                return ot(this, at, "f").fetch(gt, {
                    channelId: e
                })
            }
        }

        function bt(e) {
            return e.isMuted = e.mute.isMuted, e
        }

        function Pt(e) {
            return e.items = e.items.map(bt), e
        }
        at = new WeakMap;
        var Et, Tt = function(e, t, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        const St = `... on ChannelJoinRequestsList {\n    items {\n        date\n        channelId\n        channel { ${lt} }\n    }\n}`,
            _t = `query($input: PlayerFetchChannelJoinRequestsInput!) {\n    result: PlayerFetchChannelJoinRequests(input: $input) { ${u("... on ChannelJoinRequestsList {\n    items {\n        channelId\n        player\n        date\n    }\n}")} }\n}`,
            At = `query($input: PlayerFetchPlayerSentJoinRequestsInput!, $lang: Lang) {\n    result: PlayerFetchSentJoinRequests(input: $input) { ${u(St)} }\n}`,
            It = `mutation($input: PlayerAcceptJoinRequestToChannelInput!) {\n    result: PlayerAcceptJoinRequestToChannel(input: $input) { ${u("... on ChannelMember {\n    id\n    state\n    channelId\n    isOnline\n    mute {\n        isMuted\n        unmuteAt\n    }\n}")} }\n}`,
            Ct = `mutation($input: PlayerRejectJoinRequestToChannelInput!) {\n    result: PlayerRejectJoinRequestToChannel(input: $input) { ${u(We)} }\n}`;
        class kt {
            constructor(e) {
                Et.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, Et, e, "f")
            }
            fetchJoinRequests({
                channelId: e,
                search: t,
                limit: n,
                offset: i
            }) {
                return Tt(this, Et, "f").fetch(_t, {
                    channelId: e,
                    search: t,
                    limit: n,
                    offset: i
                })
            }
            fetchSentJoinRequests({
                limit: e,
                offset: t
            }) {
                return Tt(this, Et, "f").fetch(At, {
                    limit: e,
                    offset: t
                })
            }
            acceptJoinRequest({
                channelId: e,
                playerId: t
            }) {
                return Tt(this, Et, "f").fetch(It, {
                    channelId: e,
                    playerId: t
                })
            }
            rejectJoinRequest({
                channelId: e,
                playerId: t
            }) {
                return Tt(this, Et, "f").fetch(Ct, {
                    channelId: e,
                    playerId: t
                })
            }
        }
        Et = new WeakMap;
        var Rt, Ot = function(e, t, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        const Dt = `mutation($input: PlayerMutePlayerInChannelInput!) {\n    result: PlayerMutePlayerInChannel(input: $input) { ${u(We)} }\n}`,
            Nt = `mutation($input: PlayerUnmutePlayerInChannelInput!) {\n    result: PlayerUnmutePlayerInChannel(input: $input) { ${u(We)} }\n}`,
            xt = `query($input: PlayerFetchChannelMembersInput!) {\n    result: PlayerFetchChannelMembers(input: $input) { ${u("... on ChannelMembersList {\n    players {\n        id\n        state\n        isOnline\n        mute {\n            isMuted\n            unmuteAt\n        }\n    }\n}")} }\n}`,
            Lt = `mutation($input: PlayerKickFromChannelInput!) {\n    result: PlayerKickFromChannel(input: $input) { ${u(We)} }\n}`,
            Ft = `mutation($input: PlayerJoinChannelInput!) {\n    result: PlayerJoinChannel(input: $input) { ${u(We)} }\n}`,
            Mt = `mutation($input: PlayerLeaveChannelInput!) {\n    result: PlayerLeaveChannel(input: $input) { ${u(We)} }\n}`,
            jt = `mutation($input: PlayerCancelJoinChannelInput!) {\n    result: PlayerCancelJoinChannel(input: $input) { ${u(We)} }\n}`;
        class Ut {
            constructor(e) {
                Rt.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, Rt, e, "f")
            }
            mute({
                channelId: e,
                playerId: t,
                unmuteAt: n
            }) {
                return Ot(this, Rt, "f").fetch(Dt, {
                    channelId: e,
                    playerId: t,
                    unmuteAt: n
                })
            }
            unmute({
                channelId: e,
                playerId: t
            }) {
                return Ot(this, Rt, "f").fetch(Nt, {
                    channelId: e,
                    playerId: t
                })
            }
            fetchMembers({
                channelId: e,
                onlyOnline: t,
                search: n,
                limit: i,
                offset: r
            }) {
                return Ot(this, Rt, "f").fetch(xt, {
                    channelId: e,
                    onlyOnline: t,
                    search: n,
                    limit: i,
                    offset: r
                })
            }
            join({
                channelId: e,
                password: t
            }) {
                return Ot(this, Rt, "f").fetch(Ft, {
                    channelId: e,
                    password: t
                })
            }
            cancelJoin({
                channelId: e
            }) {
                return Ot(this, Rt, "f").fetch(jt, {
                    channelId: e
                })
            }
            leave({
                channelId: e
            }) {
                return Ot(this, Rt, "f").fetch(Mt, {
                    channelId: e
                })
            }
            kick({
                channelId: e,
                playerId: t
            }) {
                return Ot(this, Rt, "f").fetch(Lt, {
                    channelId: e,
                    playerId: t
                })
            }
        }
        Rt = new WeakMap;
        var $t, Gt = function(e, t, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        const Bt = "\n    id\n    channelId\n    authorId\n    text\n    tags\n    player\n    createdAt\n",
            qt = `... on ChannelMessage { ${Bt} }`,
            Vt = `... on ChannelMessagesList {\n    items { ${Bt} }\n}`,
            Wt = `query($input: PlayerFetchChannelMessagesInput!) {\n    result: PlayerFetchChannelMessages(input: $input) { ${u(Vt)} }\n}`,
            zt = `query($input: PlayerFetchPersonalMessagesInput!) {\n    result: PlayerFetchPersonalMessages(input: $input) { ${u(Vt)} }\n}`,
            Yt = `query($input: PlayerFetchFeedMessagesInput!) {\n    result: PlayerFetchFeedMessages(input: $input) { ${u(Vt)} }\n}`,
            Kt = `mutation($input: PlayerSendMessageInput!) {\n    result: PlayerSendMessage(input: $input) { ${u(qt)} }\n}`,
            Jt = `mutation($input: PlayerSendFeedMessageInput!) {\n    result: PlayerSendFeedMessage(input: $input) { ${u(qt)} }\n}`,
            Zt = `mutation($input: PlayerSendPersonalMessageInput!) {\n    result: PlayerSendPersonalMessage(input: $input) { ${u(qt)} }\n}`,
            Xt = `mutation($input: PlayerEditMessageInput!) {\n    result: PlayerEditMessage(input: $input) { ${u(qt)} }\n}`,
            Ht = `mutation($input: PlayerDeleteMessageInput!) {\n    result: PlayerDeleteMessage(input: $input) { ${u(We)} }\n}`;
        class Qt {
            constructor(e) {
                $t.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, $t, e, "f")
            }
            fetchMessages({
                channelId: e,
                tags: t,
                limit: n,
                offset: i
            }) {
                return Gt(this, $t, "f").fetch(Wt, {
                    channelId: e,
                    tags: t,
                    limit: n,
                    offset: i
                })
            }
            fetchPersonalMessages({
                playerId: e,
                tags: t,
                limit: n,
                offset: i
            }) {
                return Gt(this, $t, "f").fetch(zt, {
                    playerId: e,
                    tags: t,
                    limit: n,
                    offset: i
                })
            }
            fetchFeedMessages({
                playerId: e,
                authorId: t,
                tags: n,
                limit: i,
                offset: r
            }) {
                return Gt(this, $t, "f").fetch(Yt, {
                    playerId: e,
                    authorId: t,
                    tags: n,
                    limit: i,
                    offset: r
                })
            }
            sendMessage({
                channelId: e,
                tags: t,
                text: n
            }) {
                return Gt(this, $t, "f").fetch(Kt, {
                    channelId: e,
                    tags: t,
                    text: n
                })
            }
            sendFeedMessage({
                playerId: e,
                text: t,
                tags: n
            }) {
                return Gt(this, $t, "f").fetch(Jt, {
                    playerId: e,
                    text: t,
                    tags: n
                })
            }
            sendPersonalMessage({
                playerId: e,
                text: t,
                tags: n
            }) {
                return Gt(this, $t, "f").fetch(Zt, {
                    playerId: e,
                    text: t,
                    tags: n
                })
            }
            editMessage({
                messageId: e,
                text: t
            }) {
                return Gt(this, $t, "f").fetch(Xt, {
                    messageId: e,
                    text: t
                })
            }
            deleteMessage({
                messageId: e
            }) {
                return Gt(this, $t, "f").fetch(Ht, {
                    messageId: e
                })
            }
        }
        $t = new WeakMap;

        function en(e, t, n, i) {
            return r = this, s = void 0, c = function*() {
                const r = [{
                        transport: "websocket",
                        endpoint: t
                    }, {
                        transport: "http_stream",
                        endpoint: n
                    }, {
                        transport: "sse",
                        endpoint: i
                    }],
                    {
                        default: s
                    } = yield a.e(72).then(a.bind(a, 9965));
                return new s(r, {
                    token: e,
                    protocol: "protobuf",
                    debug: !0
                })
            }, new((o = void 0) || (o = Promise))((function(e, t) {
                function n(e) {
                    try {
                        a(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        a(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function a(t) {
                    var r;
                    t.done ? e(t.value) : (r = t.value, r instanceof o ? r : new o((function(e) {
                        e(r)
                    }))).then(n, i)
                }
                a((c = c.apply(r, s || [])).next())
            }));
            var r, s, o, c
        }
        var tn, nn = function(e, t, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
        };
        class rn {
            constructor(e) {
                tn.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, tn, e, "f"), this.channels = new wt(nn(this, tn, "f")), this.messages = new Qt(nn(this, tn, "f")), this.members = new Ut(nn(this, tn, "f")), this.invites = new st(nn(this, tn, "f")), this.joinRequests = new kt(nn(this, tn, "f")), this.createCentrifugeClient = en
            }
            ping(e) {
                nn(this, tn, "f").ping(e)
            }
        }
        tn = new WeakMap;
        var sn, an = a(8266),
            on = a(6316);
        class cn {
            constructor(e) {
                sn.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i) throw new TypeError("Private method is not writable");
                        if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, sn, e, "f")
            }
            checkCensor({
                text: e,
                options: t
            }) {
                return function(e, t, n, i) {
                    if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                }(this, sn, "f").fetch("query ($input: PlayerAICensorInput!) {\n    result: PlayerAICheckCensor(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on Success { success }\n    }\n}", {
                    text: e,
                    options: t
                })
            }
        }
        sn = new WeakMap;
        var ln = a(5942);
        const hn = {
            [ln.z.YANDEX]: () => a.e(6755).then(a.bind(a, 2855)),
            [ln.z.TELEGRAM]: () => a.e(9967).then(a.bind(a, 1555)),
            [ln.z.VK]: () => a.e(1911).then(a.bind(a, 1440)),
            [ln.z.OK]: () => a.e(4614).then(a.bind(a, 5821)),
            [ln.z.GAME_MONETIZE]: () => a.e(369).then(a.bind(a, 3978)),
            [ln.z.GAMEPIX]: () => a.e(9885).then(a.bind(a, 5940)),
            [ln.z.POKI]: () => a.e(6551).then(a.bind(a, 449)),
            [ln.z.GAME_DISTRIBUTION]: () => a.e(5860).then(a.bind(a, 8708)),
            [ln.z.WG_PLAYGROUND]: () => a.e(9084).then(a.bind(a, 2447)),
            [ln.z.CRAZY_GAMES]: () => a.e(5433).then(a.bind(a, 5186)),
            [ln.z.SMARTMARKET]: () => a.e(4552).then(a.bind(a, 5192)),
            [ln.z.VK_PLAY]: () => a.e(9070).then(a.bind(a, 558)),
            [ln.z.BEELINE]: () => a.e(6658).then(a.bind(a, 5367)),
            [ln.z.KONGREGATE]: () => a.e(7573).then(a.bind(a, 8518)),
            [ln.z.PLAYDECK]: () => a.e(2767).then(a.bind(a, 4954)),
            [ln.z.GOOGLE_PLAY]: () => Promise.all([a.e(227), a.e(4773)]).then(a.bind(a, 9786)),
            [ln.z.APP_GALLERY]: () => Promise.all([a.e(227), a.e(4773)]).then(a.bind(a, 9786)),
            [ln.z.GALAXY_STORE]: () => Promise.all([a.e(227), a.e(4773)]).then(a.bind(a, 9786)),
            [ln.z.ONE_STORE]: () => Promise.all([a.e(227), a.e(4773)]).then(a.bind(a, 9786)),
            [ln.z.AMAZON_APPSTORE]: () => Promise.all([a.e(227), a.e(4773)]).then(a.bind(a, 9786)),
            [ln.z.XIAOMI_GETAPPS]: () => Promise.all([a.e(227), a.e(4773)]).then(a.bind(a, 9786)),
            [ln.z.APTOIDE]: () => Promise.all([a.e(227), a.e(4773)]).then(a.bind(a, 9786)),
            [ln.z.RUSTORE]: () => Promise.all([a.e(227), a.e(4773)]).then(a.bind(a, 9786)),
            [ln.z.ANDROID]: () => Promise.all([a.e(227), a.e(4773)]).then(a.bind(a, 9786)),
            [ln.z.CUSTOM]: () => Promise.all([a.e(227), a.e(2372), a.e(8417)]).then(a.bind(a, 4656)),
            [ln.z.FOTOSTRANA]: () => a.e(4341).then(a.bind(a, 7751)),
            [ln.z.Y8]: () => a.e(8662).then(a.bind(a, 1423)),
            [ln.z.PARTNER]: () => Promise.all([a.e(227), a.e(8104), a.e(3300)]).then(a.bind(a, 311)),
            [ln.z.COOLMATH]: () => a.e(6702).then(a.bind(a, 5881)),
            [ln.z.NONE]: () => a.e(477).then(a.bind(a, 7037))
        };
        class dn extends e.Z {
            constructor() {
                super(...arguments), this.name = "gp"
            }
        }
        window.__SDKProvider = "GamePush", new dn(void 0, {
            preparePlatform: function({
                platformType: e,
                tools: t
            }) {
                return function(e, t) {
                    return (hn[e] || hn[ln.z.NONE])().then((n => n.default(t, e)))
                }(e, t)
            },
            servicesChunk: function(e) {
                const t = new ze(e);
                return {
                    apiClient: t,
                    setupAnalytics: e => {
                        const t = [];
                        return e.ymCounterId && t.push(new an.Z({
                            counterId: e.ymCounterId
                        })), e.gtagCounterId && t.push(new on.Z({
                            counterId: e.gtagCounterId
                        })), {
                            counters: t
                        }
                    },
                    projectService: new ne(t),
                    achievementsService: new h(t),
                    paymentsService: new C(t),
                    gamesCollectionsService: new re(t),
                    leaderboardsService: new ve(t),
                    documentsService: new ge(t),
                    imagesService: new Ie(t),
                    filesService: new xe(t),
                    rewardsService: new N(t),
                    eventsService: new U(t),
                    schedulersService: new Fe(t),
                    playerService: new Z(t),
                    channelsService: new rn(t),
                    aiService: new cn(t)
                }
            }
        })
    })()
})();