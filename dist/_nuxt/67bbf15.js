(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{291:function(t,n,e){"use strict";e(44),e(33),e(39),e(20),e(62),e(34),e(63);var l=e(25),r=e(40);function o(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var c={name:"Nav",data:function(){return{sticky:!1,mobileToggle:!1}},computed:{searchPopup:function(){return this.$store.state.searchPopupStatus}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(n){Object(l.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}},Object(r.b)({searchPopupStatusChange:"changeSearchPopupStatus"}))},_=c,v=e(32),component=Object(v.a)(_,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"site-header__header-one-wrap"},[t._m(0),t._v(" "),n("header",{staticClass:"main-nav__header-one"},[n("nav",{class:"header-navigation stricky clearfix ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[n("div",{staticClass:"container clearfix"},[n("div",{staticClass:"main-nav__left"},[n("a",{staticClass:"main-nav__search search-popup__toggler",attrs:{href:"#"},on:{click:t.searchPopupStatusChange}},[n("i",{staticClass:"icon-magnifying-glass"})]),t._v(" "),n("a",{staticClass:"side-menu__toggler",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-bars",on:{click:function(n){t.mobileToggle=!t.mobileToggle}}})])]),t._v(" "),n("div",{staticClass:"main-nav__main-navigation"},[n("ul",{staticClass:"main-nav__navigation-box"},[n("li",{staticClass:"dropdown current"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home 01")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index2"}},[t._v("Home 02")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index3"}},[t._v("Home 03")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index4"}},[t._v("Home 04")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index5"}},[t._v("Home 05")])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("a",{attrs:{href:"#"}},[t._v("Header Versions")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/index"}},[t._v("Header 01")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index2"}},[t._v("Header 02")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index3"}},[t._v("Header 03")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index4"}},[t._v("Header 04")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index5"}},[t._v("Header 05")])],1)])])])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"/service"}},[t._v("Services")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/service-detail"}},[t._v("Services Detail")])],1)])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"/projects"}},[t._v("Our Projects")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/projects_detail"}},[t._v("Projects Detail")])],1)])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"#"}},[t._v("Shop")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/product"}},[t._v("Products")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/product-detail"}},[t._v("Product Detail")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/checkout"}},[t._v("Checkout")])],1)])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"#"}},[t._v("Pages")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/why_choose_us"}},[t._v("Why Choose Us")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/farmers"}},[t._v("Farmers")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/gallery"}},[t._v("Gallery")])],1)])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"#"}},[t._v("News")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/news"}},[t._v("News")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/news_detail"}},[t._v("News Details")])],1)])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),t._v(" "),n("div",{staticClass:"main-nav__right"},[n("div",{staticClass:"icon_cart_box"},[n("nuxt-link",{attrs:{to:"/cart"}},[n("span",{staticClass:"icon-shopping-cart"})])],1)])])]),t._v(" "),n("nav",{staticClass:"mobile-nav__container",style:"display: ".concat(t.mobileToggle?"block":"none")},[n("ul",{staticClass:"main-nav__navigation-box"},[n("li",{staticClass:"dropdown current"},[t._m(1),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home 01")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index2"}},[t._v("Home 02")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index3"}},[t._v("Home 03")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index4"}},[t._v("Home 04")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index5"}},[t._v("Home 05")])],1),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(2),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Header 01")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index2"}},[t._v("Header 02")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index3"}},[t._v("Header 03")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index4"}},[t._v("Header 04")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index5"}},[t._v("Header 05")])],1)])])])]),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(3),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/service-detail"}},[t._v("Services Detail")])],1)])]),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(4),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/projects_detail"}},[t._v("Projects Detail")])],1)])]),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(5),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/product"}},[t._v("Products")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/product-detail"}},[t._v("Product Detail")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/checkout"}},[t._v("Checkout")])],1)])]),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(6),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/why_choose_us"}},[t._v("Why Choose Us")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/farmers"}},[t._v("Farmers")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/gallery"}},[t._v("Gallery")])],1)])]),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(7),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/news"}},[t._v("News")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/news_detail"}},[t._v("News Details")])],1)])]),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"topbar-one"},[n("div",{staticClass:"topbar_bg",staticStyle:{"background-image":"url(/assets/images/shapes/header-bg.png)"}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"topbar-one__left"},[n("a",{attrs:{href:"mailto:needhelp@tripo.com"}},[n("span",{staticClass:"icon-message"}),t._v("needhelp@agrikol.com")]),t._v(" "),n("a",{attrs:{href:"tel:666-999-0000"}},[n("span",{staticClass:"icon-phone-call"}),t._v("666 888 0000")])]),t._v(" "),n("div",{staticClass:"topbar-one__middle"},[n("a",{staticClass:"main-nav__logo",attrs:{href:"/"}},[n("img",{staticClass:"main-logo",attrs:{src:"/assets/images/resources/logo.png",alt:"Awesome Image"}})])]),t._v(" "),n("div",{staticClass:"topbar-one__right"},[n("div",{staticClass:"topbar-one__social"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-dribbble"})])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Home"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n                Header Versions"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Services"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Our Projects"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Shop"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Pages"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            News"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])}],!1,null,"0f4346fd",null);n.a=component.exports},347:function(t,n,e){"use strict";e.r(n);var l=e(291),r=e(290),o=e(289),c=e(327),_=e(304),v=e(298),d=e(299),h=e(328),f=e(300),x={components:{CallToActionOne:e(329).a,TeamOne:f.a,ProductOne:h.a,VideoOne:d.a,BrandOne:v.a,TestimonialFour:_.a,AboutTwo:c.a,Footer:o.a,PageHeader:r.a,Nav:l.a},head:function(){return{title:"Agrikol  | About"}}},k=e(32),component=Object(k.a)(x,(function(){var t=this,n=t._self._c;return n("div",[n("Nav"),t._v(" "),n("PageHeader",{attrs:{title:"About"}}),t._v(" "),n("AboutTwo"),t._v(" "),n("TestimonialFour"),t._v(" "),n("BrandOne"),t._v(" "),n("VideoOne"),t._v(" "),n("ProductOne"),t._v(" "),n("TeamOne"),t._v(" "),n("CallToActionOne"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);n.default=component.exports}}]);