(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{340:function(t,n,e){"use strict";e.r(n);var l=e(309),o=(e(44),e(33),e(39),e(20),e(62),e(34),e(63),e(25)),r=e(40);function c(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var _={name:"NavTwo",data:function(){return{sticky:!1,mobileToggle:!1}},computed:{searchPopup:function(){return this.$store.state.searchPopupStatus}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}},Object(r.b)({searchPopupStatusChange:"changeSearchPopupStatus"}))},v=_,d=e(32),h=Object(d.a)(v,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"site_header__header_two_wrap"},[t._m(0),t._v(" "),n("header",{staticClass:"main-nav__header_two clearfix"},[n("nav",{class:"header-navigation stricky clearfix ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[n("div",{staticClass:"container"},[n("div",{staticClass:"main-nav__header_two_content"},[n("div",{staticClass:"mobile_menu_icon_two"},[n("a",{staticClass:"side-menu__toggler",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-bars",on:{click:function(n){t.mobileToggle=!t.mobileToggle}}})])]),t._v(" "),n("div",{staticClass:"main-nav__main-navigation two float-left"},[n("ul",{staticClass:"main-nav__navigation-box"},[n("li",{staticClass:"dropdown current"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home 01")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index2"}},[t._v("Home 02")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index3"}},[t._v("Home 03")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index4"}},[t._v("Home 04")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index5"}},[t._v("Home 05")])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("a",{attrs:{href:"#"}},[t._v("Header Versions")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Header 01")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index2"}},[t._v("Header 02")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index3"}},[t._v("Header 03")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index4"}},[t._v("Header 04")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index5"}},[t._v("Header 05")])],1)])])])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"/service"}},[t._v("Services")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/service-detail"}},[t._v("Services Detail")])],1)])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"/projects"}},[t._v("Our Projects")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/projects_detail"}},[t._v("Projects Detail")])],1)])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"#"}},[t._v("Shop")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/product"}},[t._v("Products")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/product-detail"}},[t._v("Product Detail")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/checkout"}},[t._v("Checkout")])],1)])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"#"}},[t._v("Pages")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/why_choose_us"}},[t._v("Why Choose Us")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/farmers"}},[t._v("Farmers")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/gallery"}},[t._v("Gallery")])],1)])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"#"}},[t._v("News")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/news"}},[t._v("News")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/news_detail"}},[t._v("News Details")])],1)])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),t._v(" "),n("div",{staticClass:"main_nav_right_two float-right"},[n("div",{staticClass:"icon_search_box"},[n("a",{staticClass:"main-nav__search search-popup__toggler",attrs:{href:"#"},on:{click:t.searchPopupStatusChange}},[n("i",{staticClass:"icon-magnifying-glass"})])]),t._v(" "),n("div",{staticClass:"icon_cart_box"},[n("nuxt-link",{attrs:{to:"/cart"}},[n("span",{staticClass:"icon-shopping-cart"})])],1)])])])]),t._v(" "),n("nav",{staticClass:"mobile-nav__container",style:"display: ".concat(t.mobileToggle?"block":"none")},[n("ul",{staticClass:"main-nav__navigation-box"},[n("li",{staticClass:"dropdown current"},[t._m(1),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home 01")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index2"}},[t._v("Home 02")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index3"}},[t._v("Home 03")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index4"}},[t._v("Home 04")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index5"}},[t._v("Home 05")])],1),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(2),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Header 01")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index2"}},[t._v("Header 02")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index3"}},[t._v("Header 03")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index4"}},[t._v("Header 04")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index5"}},[t._v("Header 05")])],1)])])])]),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(3),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/service-detail"}},[t._v("Services Detail")])],1)])]),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(4),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/projects_detail"}},[t._v("Projects Detail")])],1)])]),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(5),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/product"}},[t._v("Products")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/product-detail"}},[t._v("Product Detail")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/checkout"}},[t._v("Checkout")])],1)])]),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(6),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/why_choose_us"}},[t._v("Why Choose Us")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/farmers"}},[t._v("Farmers")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/gallery"}},[t._v("Gallery")])],1)])]),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(7),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/news"}},[t._v("News")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/news_detail"}},[t._v("News Details")])],1)])]),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"topbar-two"},[n("div",{staticClass:"container"},[n("div",{staticClass:"topbar_two_content clearfix"},[n("div",{staticClass:"logo-box-two float-left"},[n("a",{staticClass:"main-nag__logo",attrs:{href:"/index2"}},[n("img",{attrs:{src:"/assets/images/resources/logo.png",alt:""}})])]),t._v(" "),n("div",{staticClass:"header_address_two float-left"},[n("ul",{staticClass:"clearfix list-unstyled"},[n("li",[n("div",{staticClass:"address_icon"},[n("span",{staticClass:"icon-placeholder"})]),t._v(" "),n("div",{staticClass:"address_title"},[n("h6",[t._v("Address")]),t._v(" "),n("p",[t._v("66 Broklyn St. New York")])])]),t._v(" "),n("li",[n("div",{staticClass:"address_icon"},[n("span",{staticClass:"icon-phone-call"})]),t._v(" "),n("div",{staticClass:"address_title"},[n("h6",[t._v("Phone")]),t._v(" "),n("p",[n("a",{attrs:{href:"tel:123456789"}},[t._v("66 Broklyn St. New York")])])])]),t._v(" "),n("li",[n("div",{staticClass:"address_icon"},[n("span",{staticClass:"icon-clock"})]),t._v(" "),n("div",{staticClass:"address_title"},[n("h6",[t._v("Timings")]),t._v(" "),n("p",[t._v("Mon - Fri 09:00am - 07:00pm")])])])])]),t._v(" "),n("div",{staticClass:"header_btn_two float-right"},[n("a",{staticClass:"thm-btn",attrs:{href:"#"}},[t._v("Get a Free Quote")])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Home"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n                Header Versions"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Services"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Our Projects"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Shop"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            Pages"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n            News"),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])}],!1,null,"b178d7dc",null).exports,x=e(310),w=e(311),C=e(312),k=e(313),f=e(314),m=e(315),y=e(299),P=e(316),j=e(317),O=e(296),T=e(318),H={components:{ServiceTwo:e(302).a,GalleryOne:T.a,GMap:O.a,GetQuote:j.a,BrandTwo:P.a,VideoOne:y.a,TestimonialTwo:m.a,RecentProject:f.a,ProductTwo:k.a,CallToActionTwo:C.a,NeedAll:w.a,SliderTwo:x.a,NavTwo:h,FooterTwo:l.a},head:function(){return{title:"Agrikol  | Home 2"}}},S=Object(d.a)(H,(function(){var t=this,n=t._self._c;return n("div",[n("NavTwo"),t._v(" "),n("SliderTwo"),t._v(" "),n("NeedAll"),t._v(" "),n("ServiceTwo"),t._v(" "),n("CallToActionTwo"),t._v(" "),n("ProductTwo"),t._v(" "),n("RecentProject"),t._v(" "),n("TestimonialTwo"),t._v(" "),n("VideoOne"),t._v(" "),n("BrandTwo"),t._v(" "),n("GetQuote"),t._v(" "),n("GMap"),t._v(" "),n("GalleryOne"),t._v(" "),n("FooterTwo")],1)}),[],!1,null,null,null);n.default=S.exports}}]);