var posts=4,
    num=2,
    previous="&#171;",
    next="&#187;";
 var G = "/",
     C = location.href,
     H, D, B, F;
 I();

 function loophalaman(a) {
     var b = "";
     nomerkiri = parseInt(num / 2);
     if (nomerkiri == num - nomerkiri) num = nomerkiri * 2 + 1;
     mulai = B - nomerkiri;
     if (mulai < 1) mulai = 1;o
     maksimal = parseInt(a / posts) + 1;
     if (maksimal - 1 == a / posts) maksimal = maksimal - 1;
     akhir = mulai + num - 1;
     if (akhir > maksimal) akhir = maksimal;
     b += "<span class='pages'>Page " + B + " of " + maksimal + "</span>";
     var c = parseInt(B) - 1;
     if (B > 1)
         if (B == 2)
             if (D == "page") b += '<a href="' + G + '">' + previous + "</a>";
             else b += '<a href="/search/label/' + F + "?&max-results=" + posts + '">' + previous + "</a>";
     else if (D == "page") b += '<a href="#" onclick="redirectpage(' + c + ');return false">' + previous + "</a>";
     else b += '<a href="#" onclick="redirectlabel(' + c + ');return false">' + previous + "</a>";
     for (var d = mulai; d <= akhir; d++)
         if (B == d) b += '<span class="current">' + d + "</span>";
         else if (d == 1)
         if (D == "page") b += '<a href="' + G + '">1</a>';
         else b += '<a href="/search/label/' + F + "?&max-results=" + posts + '">1</a>';
     else if (D == "page") b += '<a href="#" onclick="redirectpage(' + d + ');return false">' + d + "</a>";
     else b += '<a href="#" onclick="redirectlabel(' + d + ');return false">' + d + "</a>";
     var e = parseInt(B) + 1;
     if (B < maksimal)
         if (D == "page") b += '<a href="#" onclick="redirectpage(' + e + ');return false">' + next + "</a>";
         else b += '<a href="#" onclick="redirectlabel(' + e + ');return false">' + next + "</a>";
     var f = document.getElementsByName("pageArea");
     var g = document.getElementById("blog-pager");
     for (var p = 0; p < f.length; p++) f[p].innerHTML = b;
     if (f && f.length > 0) b = "";
     if (g) g.innerHTML = '<div class="pagenavi">' + b + "</div>"
 }

 function hitungtotaldata(a) {
     var b = a.feed;
     var c = parseInt(b.openSearch$totalResults.$t, 10);
     loophalaman(c)
 }

 function I() {
     var a = C;
     if (a.indexOf("/search/label/") != -1)
         if (a.indexOf("?updated-max") != -1) F = a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?updated-max"));
         else F = a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?&max"));
     if (a.indexOf("?q=") == -1 && a.indexOf(".html") == -1)
         if (a.indexOf("/search/label/") == -1) {
             D = "page";
             if (C.indexOf("#PageNo=") != -1) B = C.substring(C.indexOf("#PageNo=") + 8, C.length);
             else B = 1;
             document.write('<script src="' + G + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata">\x3c/script>')
         } else {
             D = "label";
             if (a.indexOf("&max-results=") == -1) posts = 20;
             if (C.indexOf("#PageNo=") != -1) B = C.substring(C.indexOf("#PageNo=") + 8, C.length);
             else B = 1;
             document.write('<script src="' + G + "feeds/posts/summary/-/" + F + '?alt=json-in-script&callback=hitungtotaldata&max-results=1" >\x3c/script>')
         }
 }

 function redirectpage(a) {
     jsonstart = (a - 1) * posts;
     H = a;
     var b = document.getElementsByTagName("head")[0];
     var c = document.createElement("script");
     c.type = "text/javascript";
     c.setAttribute("src", G + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
     b.appendChild(c)
 }

 function redirectlabel(a) {
     jsonstart = (a - 1) * posts;
     H = a;
     var b = document.getElementsByTagName("head")[0];
     var c = document.createElement("script");
     c.type = "text/javascript";
     c.setAttribute("src", G + "feeds/posts/summary/-/" + F + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
     b.appendChild(c)
 }

 function finddatepost(a) {
     post = a.feed.entry[0];
     var b = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
     var c = encodeURIComponent(b);
     if (D == "page") var d = "/search?updated-max=" + c + "&max-results=" + posts + "#PageNo=" + H;
     else var d = "/search/label/" + F + "?updated-max=" + c + "&max-results=" + posts + "#PageNo=" + H;
     location.href = d
 }! function(a) {
     a(function() {
         a.support.transition = function() {
             var a = function() {
                 var a = document.createElement("bootstrap"),
                     b = {
                         WebkitTransition: "webkitTransitionEnd",
                         MozTransition: "transitionend",
                         OTransition: "oTransitionEnd otransitionend",
                         transition: "transitionend"
                     },
                     c;
                 for (c in b)
                     if (a.style[c] !== undefined) return b[c]
             }();
             return a && {
                 end: a
             }
         }()
     })
 }(window.jQuery), ! function(a) {
     var b = function(b, c) {
         this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
     };
     b.prototype = {
         constructor: b,
         toggle: function() {
             return this[this.isShown ? "hide" : "show"]()
         },
         show: function() {
             var b = this,
                 c = a.Event("show");
             this.$element.trigger(c);
             if (this.isShown || c.isDefaultPrevented()) return;
             this.isShown = true, this.escape(), this.backdrop(function() {
                 var c = a.support.transition && b.$element.hasClass("fade");
                 b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", false), b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function() {
                     b.$element.focus().trigger("shown")
                 }) : b.$element.focus().trigger("shown")
             })
         },
         hide: function(b) {
             b && b.preventDefault();
             var c = this;
             b = a.Event("hide"), this.$element.trigger(b);
             if (!this.isShown || b.isDefaultPrevented()) return;
             this.isShown = false, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", true), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
         },
         enforceFocus: function() {
             var b = this;
             a(document).on("focusin.modal", function(a) {
                 b.$element[0] !== a.target && (!b.$element.has(a.target).length && b.$element.focus())
             })
         },
         escape: function() {
             var a = this;
             this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(b) {
                 b.which == 27 && a.hide()
             }) : this.isShown || this.$element.off("keyup.dismiss.modal")
         },
         hideWithTransition: function() {
             var b = this,
                 c = setTimeout(function() {
                     b.$element.off(a.support.transition.end), b.hideModal()
                 }, 500);
             this.$element.one(a.support.transition.end, function() {
                 clearTimeout(c), b.hideModal()
             })
         },
         hideModal: function() {
             var a = this;
             this.$element.hide(), this.backdrop(function() {
                 a.removeBackdrop(), a.$element.trigger("hidden")
             })
         },
         removeBackdrop: function() {
             this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
         },
         backdrop: function(b) {
             var c = this,
                 d = this.$element.hasClass("fade") ? "fade" : "";
             if (this.isShown && this.options.backdrop) {
                 var e = a.support.transition && d;
                 this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
                 if (!b) return;
                 e ? this.$backdrop.one(a.support.transition.end, b) : b()
             } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b) : b()) : b && b()
         }
     };
     var c = a.fn.modal;
     a.fn.modal = function(c) {
         return this.each(function() {
             var d = a(this),
                 e = d.data("modal"),
                 f = a.extend({}, a.fn.modal.defaults, d.data(), typeof c == "object" && c);
             e || d.data("modal", e = new b(this, f)), typeof c == "string" ? e[c]() : f.show && e.show()
         })
     }, a.fn.modal.defaults = {
         backdrop: true,
         keyboard: true,
         show: true
     }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
         return a.fn.modal = c, this
     }, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function(b) {
         var c = a(this),
             d = c.attr("href"),
             e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
             f = e.data("modal") ? "toggle" : a.extend({
                 remote: !/#/.test(d) && d
             }, e.data(), c.data());
         b.preventDefault(), e.modal(f).one("hide", function() {
             c.focus()
         })
     })
 }(window.jQuery), ! function(a) {
     function d() {
         a(".dropdown-backdrop").remove(), a(b).each(function() {
             e(a(this)).removeClass("open")
         })
     }

     function e(b) {
         var c = b.attr("data-target"),
             d;
         c || (c = b.attr("href"), c = c && (/#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""))), d = c && a(c);
         if (!d || !d.length) d = b.parent();
         return d
     }
     var b = "[data-toggle=dropdown]",
         c = function(b) {
             var c = a(b).on("click.dropdown.data-api", this.toggle); // Made a change here
             a("html").on("click.dropdown.data-api", function() {
                 c.parent().removeClass("open")
             })
         };
     c.prototype = {
         constructor: c,
         toggle: function(b) {
             var c = a(this),
                 f, g;
             if (c.is(".disabled, :disabled")) return;
             f = e(c);
                g = f.hasClass("open");
                    d();
            if (!g) {
                if (!('ontouchstart' in document.documentElement)) {
                    // if mobile we use a backdrop because click events don't delegate
                    a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on('click', d)
                }
                var relatedTarget = { relatedTarget: this }
                f.trigger(e = a.Event('show.bs.dropdown', relatedTarget))

                if (b.isDefaultPrevented()) return

      c
        .trigger('focus')
        .attr('aria-expanded', 'true')

      f
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
            }
            f.toggleClass("open");
            c.focus();
            return false
         },
         keydown: function(c) {
             var d, f, g, h, i, j;
             if (!/(38|40|27)/.test(c.keyCode)) return;
             d = a(this), c.preventDefault(), c.stopPropagation();
             if (d.is(".disabled, :disabled")) return;
             h = e(d), i = h.hasClass("open");
             if (!i || i && c.keyCode == 27) return c.which == 27 && h.find(b).focus(), d.click();
             f = a("[role=menu] li:not(.divider):visible a", h);
             if (!f.length) return;
             j = f.index(f.filter(":focus")), c.keyCode == 38 && (j > 0 && j--), c.keyCode == 40 && (j < f.length - 1 && j++), ~j || (j = 0), f.eq(j).focus()
         }
     };
     var f = a.fn.dropdown;
     a.fn.dropdown = function(b) {
         return this.each(function() {
             var d = a(this),
                 e = d.data("dropdown");
             e || d.data("dropdown", e = new c(this)), typeof b == "string" && e[b].call(d)
         })
     }, a.fn.dropdown.Constructor = c, a.fn.dropdown.noConflict = function() {
         return a.fn.dropdown = f, this
     }, a(document).on("click.dropdown.data-api", d).on("click.dropdown.data-api", ".dropdown form", function(a) { // Made a change here
         a.stopPropagation()
     }).on("click.dropdown.data-api", b, c.prototype.toggle).on("keydown.dropdown.data-api", b + ", [role=menu]", c.prototype.keydown),
     a('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); }) // SERIOUS CHANGE
 /*!function(a) {
     function d() {
         a(".dropdown-backdrop").remove(), a(b).each(function() {
             e(a(this)).removeClass("open")
         })
     }

     function e(b) {
         var c = b.attr("data-target"),
             d;
         c || (c = b.attr("href"), c = c && (/#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""))), d = c && a(c);
         if (!d || !d.length) d = b.parent();
         return d
     }
     var b = "[data-toggle=dropdown]",
         c = function(b) {
             var c = a(b).on("click.dropdown.data-api", this.toggle); // Made a change here
             a("html").on("click.dropdown.data-api", function() {
                 c.parent().removeClass("open")
             })
         };
     c.prototype = {
         constructor: c,
         toggle: function(b) {
             var c = a(this),
                 f, g;
             if (c.is(".disabled, :disabled")) return;
             return f = e(c), g = f.hasClass("open"), d(), g || ("ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click", d), f.toggleClass("open")), c.focus(), false
         },
         keydown: function(c) {
             var d, f, g, h, i, j;
             if (!/(38|40|27)/.test(c.keyCode)) return;
             d = a(this), c.preventDefault(), c.stopPropagation();
             if (d.is(".disabled, :disabled")) return;
             h = e(d), i = h.hasClass("open");
             if (!i || i && c.keyCode == 27) return c.which == 27 && h.find(b).focus(), d.click();
             f = a("[role=menu] li:not(.divider):visible a", h);
             if (!f.length) return;
             j = f.index(f.filter(":focus")), c.keyCode == 38 && (j > 0 && j--), c.keyCode == 40 && (j < f.length - 1 && j++), ~j || (j = 0), f.eq(j).focus()
         }
     };
     var f = a.fn.dropdown;
     a.fn.dropdown = function(b) {
         return this.each(function() {
             var d = a(this),
                 e = d.data("dropdown");
             e || d.data("dropdown", e = new c(this)), typeof b == "string" && e[b].call(d)
         })
     }, a.fn.dropdown.Constructor = c, a.fn.dropdown.noConflict = function() {
         return a.fn.dropdown = f, this
     }, a(document).on("click.dropdown.data-api", d).on("click.dropdown.data-api", ".dropdown form", function(a) { // Made a change here
         a.stopPropagation()
     }).on("click.dropdown.data-api", b, c.prototype.toggle).on("keydown.dropdown.data-api", b + ", [role=menu]", c.prototype.keydown),
     a('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); }) // SERIOUS CHANGE*/
 }(window.jQuery), ! function(a) {
     var b = function(b) {
         this.element = a(b)
     };
     b.prototype = {
         constructor: b,
         show: function() {
             var b = this.element,
                 c = b.closest("ul:not(.dropdown-menu)"),
                 d = b.attr("data-target"),
                 e, f, g;
             d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, ""));
             if (b.parent("li").hasClass("active")) return;
             e = c.find(".active:last a")[0], g = a.Event("show", {
                 relatedTarget: e
             }), b.trigger(g);
             if (g.isDefaultPrevented()) return;
             f = a(d), this.activate(b.parent("li"), c), this.activate(f, f.parent(), function() {
                 b.trigger({
                     type: "shown",
                     relatedTarget: e
                 })
             })
         },
         activate: function(b, c, d) {
             function g() {
                 e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), f ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
             }
             var e = c.find("> .active"),
                 f = d && (a.support.transition && e.hasClass("fade"));
             f ? e.one(a.support.transition.end, g) : g(), e.removeClass("in")
         }
     };
     var c = a.fn.tab;
     a.fn.tab = function(c) {
         return this.each(function() {
             var d = a(this),
                 e = d.data("tab");
             e || d.data("tab", e = new b(this)), typeof c == "string" && e[c]()
         })
     }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
         return a.fn.tab = c, this
     }, a(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
         b.preventDefault(), a(this).tab("show")
     })
 }(window.jQuery), ! function(a) {
     var b = function(a, b) {
         this.init("tooltip", a, b)
     };
     b.prototype = {
         constructor: b,
         init: function(b, c, d) {
             var e, f, g, h, i;
             this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = true, g = this.options.trigger.split(" ");
             for (i = g.length; i--;) h = g[i], h == "click" ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : h != "manual" && (e = h == "hover" ? "mouseenter" : "focus", f = h == "hover" ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
             this.options.selector ? this._options = a.extend({}, this.options, {
                 trigger: "manual",
                 selector: ""
             }) : this.fixTitle()
         },
         getOptions: function(b) {
             return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b), b.delay && (typeof b.delay == "number" && (b.delay = {
                 show: b.delay,
                 hide: b.delay
             })), b
         },
         enter: function(b) {
             var c = a.fn[this.type].defaults,
                 d = {},
                 e;
             this._options && a.each(this._options, function(a, b) {
                 c[a] != b && (d[a] = b)
             }, this), e = a(b.currentTarget)[this.type](d).data(this.type);
             if (!e.options.delay || !e.options.delay.show) return e.show();
             clearTimeout(this.timeout), e.hoverState = "in", this.timeout = setTimeout(function() {
                 e.hoverState == "in" && e.show()
             }, e.options.delay.show)
         },
         leave: function(b) {
             var c = a(b.currentTarget)[this.type](this._options).data(this.type);
             this.timeout && clearTimeout(this.timeout);
             if (!c.options.delay || !c.options.delay.hide) return c.hide();
             c.hoverState = "out", this.timeout = setTimeout(function() {
                 c.hoverState == "out" && c.hide()
             }, c.options.delay.hide)
         },
         show: function() {
             var b, c, d, e, f, g, h = a.Event("show");
             if (this.hasContent() && this.enabled) {
                 this.$element.trigger(h);
                 if (h.isDefaultPrevented()) return;
                 b = this.tip(), this.setContent(), this.options.animation && b.addClass("fade"), f = typeof this.options.placement == "function" ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement, b.detach().css({
                     top: 0,
                     left: 0,
                     display: "block"
                 }), this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element), c = this.getPosition(), d = b[0].offsetWidth, e = b[0].offsetHeight;
                 switch (f) {
                     case "bottom":
                         g = {
                             top: c.top + c.height,
                             left: c.left + c.width / 2 - d / 2
                         };
                         break;
                     case "top":
                         g = {
                             top: c.top - e,
                             left: c.left + c.width / 2 - d / 2
                         };
                         break;
                     case "left":
                         g = {
                             top: c.top + c.height / 2 - e / 2,
                             left: c.left - d
                         };
                         break;
                     case "right":
                         g = {
                             top: c.top + c.height / 2 - e / 2,
                             left: c.left + c.width
                         };
                     default:
                 }
                 this.applyPlacement(g, f), this.$element.trigger("shown")
             }
         },
         applyPlacement: function(a, b) {
             var c = this.tip(),
                 d = c[0].offsetWidth,
                 e = c[0].offsetHeight,
                 f, g, h, i;
             c.offset(a).addClass(b).addClass("in"), f = c[0].offsetWidth, g = c[0].offsetHeight, b == "top" && (g != e && (a.top = a.top + e - g, i = true)), b == "bottom" || b == "top" ? (h = 0, a.left < 0 && (h = a.left * -2, a.left = 0, c.offset(a), f = c[0].offsetWidth, g = c[0].offsetHeight), this.replaceArrow(h - d + f, f, "left")) : this.replaceArrow(g - e, g, "top"), i && c.offset(a)
         },
         replaceArrow: function(a, b, c) {
             this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
         },
         setContent: function() {
             var a = this.tip(),
                 b = this.getTitle();
             a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
         },
         hide: function() {
             function e() {
                 var b = setTimeout(function() {
                     c.off(a.support.transition.end).detach()
                 }, 500);
                 c.one(a.support.transition.end, function() {
                     clearTimeout(b), c.detach()
                 })
             }
             var b = this,
                 c = this.tip(),
                 d = a.Event("hide");
             this.$element.trigger(d);
             if (d.isDefaultPrevented()) return;
             return c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? e() : c.detach(), this.$element.trigger("hidden"), this
         },
         fixTitle: function() {
             var a = this.$element;
             (a.attr("title") || typeof a.attr("data-original-title") != "string") && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
         },
         hasContent: function() {
             return this.getTitle()
         },
         getPosition: function() {
             var b = this.$element[0];
             return a.extend({}, typeof b.getBoundingClientRect == "function" ? b.getBoundingClientRect() : {
                 width: b.offsetWidth,
                 height: b.offsetHeight
             }, this.$element.offset())
         },
         getTitle: function() {
             var a, b = this.$element,
                 c = this.options;
             return a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) : c.title), a
         },
         tip: function() {
             return this.$tip = this.$tip || a(this.options.template)
         },
         arrow: function() {
             return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
         },
         validate: function() {
             this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
         },
         enable: function() {
             this.enabled = true
         },
         disable: function() {
             this.enabled = false
         },
         toggleEnabled: function() {
             this.enabled = !this.enabled
         },
         toggle: function(b) {
             var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
             c.tip().hasClass("in") ? c.hide() : c.show()
         },
         destroy: function() {
             this.hide().$element.off("." + this.type).removeData(this.type)
         }
     };
     var c = a.fn.tooltip;
     a.fn.tooltip = function(c) {
         return this.each(function() {
             var d = a(this),
                 e = d.data("tooltip"),
                 f = typeof c == "object" && c;
             e || d.data("tooltip", e = new b(this, f)), typeof c == "string" && e[c]()
         })
     }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
         animation: true,
         placement: "top",
         selector: false,
         template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
         trigger: "hover focus",
         title: "",
         delay: 0,
         html: false,
         container: false
     }, a.fn.tooltip.noConflict = function() {
         return a.fn.tooltip = c, this
     }
 }(window.jQuery), ! function(a) {
     var b = function(a, b) {
         this.init("popover", a, b)
     };
     b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
         constructor: b,
         setContent: function() {
             var a = this.tip(),
                 b = this.getTitle(),
                 c = this.getContent();
             a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in")
         },
         hasContent: function() {
             return this.getTitle() || this.getContent()
         },
         getContent: function() {
             var a, b = this.$element,
                 c = this.options;
             return a = (typeof c.content == "function" ? c.content.call(b[0]) : c.content) || b.attr("data-content"), a
         },
         tip: function() {
             return this.$tip || (this.$tip = a(this.options.template)), this.$tip
         },
         destroy: function() {
             this.hide().$element.off("." + this.type).removeData(this.type)
         }
     });
     var c = a.fn.popover;
     a.fn.popover = function(c) {
         return this.each(function() {
             var d = a(this),
                 e = d.data("popover"),
                 f = typeof c == "object" && c;
             e || d.data("popover", e = new b(this, f)), typeof c == "string" && e[c]()
         })
     }, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
         placement: "right",
         trigger: "click",
         content: "",
         template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
     }), a.fn.popover.noConflict = function() {
         return a.fn.popover = c, this
     }
 }(window.jQuery), ! function(a) {
     var b = function(b, c) {
         this.options = a.extend({}, a.fn.affix.defaults, c), this.$window = a(window).on("scroll.affix.data-api", a.proxy(this.checkPosition, this)).on("click.affix.data-api", a.proxy(function() {
             setTimeout(a.proxy(this.checkPosition, this), 1)
         }, this)), this.$element = a(b), this.checkPosition()
     };
     b.prototype.checkPosition = function() {
         if (!this.$element.is(":visible")) return;
         var b = a(document).height(),
             c = this.$window.scrollTop(),
             d = this.$element.offset(),
             e = this.options.offset,
             f = e.bottom,
             g = e.top,
             h = "affix affix-top affix-bottom",
             i;
         typeof e != "object" && (f = g = e), typeof g == "function" && (g = e.top()), typeof f == "function" && (f = e.bottom()), i = this.unpin != null && c + this.unpin <= d.top ? false : f != null && d.top + this.$element.height() >= b - f ? "bottom" : g != null && c <= g ? "top" : false;
         if (this.affixed === i) return;
         this.affixed = i, this.unpin = i == "bottom" ? d.top - c : null, this.$element.removeClass(h).addClass("affix" + (i ? "-" + i : ""))
     };
     var c = a.fn.affix;
     a.fn.affix = function(c) {
         return this.each(function() {
             var d = a(this),
                 e = d.data("affix"),
                 f = typeof c == "object" && c;
             e || d.data("affix", e = new b(this, f)), typeof c == "string" && e[c]()
         })
     }, a.fn.affix.Constructor = b, a.fn.affix.defaults = {
         offset: 0
     }, a.fn.affix.noConflict = function() {
         return a.fn.affix = c, this
     }, a(window).on("load", function() {
         a('[data-spy="affix"]').each(function() {
             var b = a(this),
                 c = b.data();
             c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
         })
     })
 }(window.jQuery), ! function(a) {
     var b = '[data-dismiss="alert"]',
         c = function(c) {
             a(c).on("click", b, this.close)
         };
     c.prototype.close = function(b) {
         function f() {
             e.trigger("closed").remove()
         }
         var c = a(this),
             d = c.attr("data-target"),
             e;
         d || (d = c.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), e = a(d), b && b.preventDefault(), e.length || (e = c.hasClass("alert") ? c : c.parent()), e.trigger(b = a.Event("close"));
         if (b.isDefaultPrevented()) return;
         e.removeClass("in"), a.support.transition && e.hasClass("fade") ? e.on(a.support.transition.end, f) : f()
     };
     var d = a.fn.alert;
     a.fn.alert = function(b) {
         return this.each(function() {
             var d = a(this),
                 e = d.data("alert");
             e || d.data("alert", e = new c(this)), typeof b == "string" && e[b].call(d)
         })
     }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
         return a.fn.alert = d, this
     }, a(document).on("click.alert.data-api", b, c.prototype.close)
 }(window.jQuery), ! function(a) {
     var b = function(b, c) {
         this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c)
     };
     b.prototype.setState = function(a) {
         var b = "disabled",
             c = this.$element,
             d = c.data(),
             e = c.is("input") ? "val" : "html";
         a += "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), setTimeout(function() {
             a == "loadingText" ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
         }, 0)
     }, b.prototype.toggle = function() {
         var a = this.$element.closest('[data-toggle="buttons-radio"]');
         a && a.find(".active").removeClass("active"), this.$element.toggleClass("active")
     };
     var c = a.fn.button;
     a.fn.button = function(c) {
         return this.each(function() {
             var d = a(this),
                 e = d.data("button"),
                 f = typeof c == "object" && c;
             e || d.data("button", e = new b(this, f)), c == "toggle" ? e.toggle() : c && e.setState(c)
         })
     }, a.fn.button.defaults = {
         loadingText: "loading..."
     }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
         return a.fn.button = c, this
     }, a(document).on("click.button.data-api", "[data-toggle^=button]", function(b) {
         var c = a(b.target);
         c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle")
     })
 }(window.jQuery), ! function(a) {
     var b = function(b, c) {
         this.$element = a(b), this.options = a.extend({}, a.fn.collapse.defaults, c), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
     };
     b.prototype = {
         constructor: b,
         dimension: function() {
             var a = this.$element.hasClass("width");
             return a ? "width" : "height"
         },
         show: function() {
             var b, c, d, e;
             if (this.transitioning || this.$element.hasClass("in")) return;
             b = this.dimension(), c = a.camelCase(["scroll", b].join("-")), d = this.$parent && this.$parent.find("> .accordion-group > .in");
             if (d && d.length) {
                 e = d.data("collapse");
                 if (e && e.transitioning) return;
                 d.collapse("hide"), e || d.data("collapse", null)
             }
             this.$element[b](0), this.transition("addClass", a.Event("show"), "shown"), a.support.transition && this.$element[b](this.$element[0][c])
         },
         hide: function() {
             var b;
             if (this.transitioning || !this.$element.hasClass("in")) return;
             b = this.dimension(), this.reset(this.$element[b]()), this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[b](0)
         },
         reset: function(a) {
             var b = this.dimension();
             return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth, this.$element[a !== null ? "addClass" : "removeClass"]("collapse"), this
         },
         transition: function(b, c, d) {
             var e = this,
                 f = function() {
                     c.type == "show" && e.reset(), e.transitioning = 0, e.$element.trigger(d)
                 };
             this.$element.trigger(c);
             if (c.isDefaultPrevented()) return;
             this.transitioning = 1, this.$element[b]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f()
         },
         toggle: function() {
             this[this.$element.hasClass("in") ? "hide" : "show"]()
         }
     };
     var c = a.fn.collapse;
     a.fn.collapse = function(c) {
         return this.each(function() {
             var d = a(this),
                 e = d.data("collapse"),
                 f = a.extend({}, a.fn.collapse.defaults, d.data(), typeof c == "object" && c);
             e || d.data("collapse", e = new b(this, f)), typeof c == "string" && e[c]()
         })
     }, a.fn.collapse.defaults = {
         toggle: true
     }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
         return a.fn.collapse = c, this
     }, a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(b) {
         var c = a(this),
             d, e = c.attr("data-target") || (b.preventDefault() || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")),
             f = a(e).data("collapse") ? "toggle" : c.data();
         c[a(e).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), a(e).collapse(f)
     })
 }(window.jQuery);
 jQuery(function() {
     jQuery('#searchform input[type="text"]').val("Search Sabernova");
     jQuery('#searchform input[type="text"]').focus(function() {
         if (jQuery(this).val() == "Search Sabernova") jQuery(this).val("")
     });
     jQuery('#searchform input[type="text"]').blur(function() {
         if (jQuery(this).val() == "") jQuery(this).val("Search Sabernova")
     });
     jQuery(".tips").tooltip();
     jQuery(".bl_popover").popover();
     var d = jQuery(".entry-video iframe, .entry-video object, .related-video iframe, .related-video iframe"),
         $fluidEl = jQuery("#content");
     $fluidElRelated = jQuery("#related-posts > div").first();
     d.each(function() {
         var a = this.height === "" ? 473 : this.height;
         var b = this.width === "" ? 840 : this.width;
         jQuery(this).attr("data-aspectRatio", a / b).removeAttr("height").removeAttr("width")
     });
     jQuery(window).resize(function() {
         var b = $fluidEl.width();
         var c = $fluidElRelated.width();
         d.each(function() {
             var a = jQuery(this);
             if (a.parent().hasClass("related-header")) a.width(c).height(c * a.attr("data-aspectRatio"));
             else a.width(b).height(b * a.attr("data-aspectRatio"))
         })
     }).resize()
 });

 function social_share(a) {
     window.open(a, "fbshare", "height=450,width=760,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
 }
 jQuery(function() {
     if (jQuery(".above_header").length > 0) var a = jQuery(".above_header").height();
     else var a = 0;
     jQuery("#masthead").affix({
         offset: a
     })
 });