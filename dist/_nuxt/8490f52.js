(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{292:function(t,o,n){"use strict";n(44),n(33),n(39),n(20),n(62),n(34),n(63);var e=n(25),r=n(40);function l(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,n)}return o}var c={name:"NavTwo",data:function(){return{sticky:!1,mobileToggle:!1}},computed:{searchPopup:function(){return this.$store.state.searchPopupStatus}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(o){Object(e.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}({handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}},Object(r.b)({searchPopupStatusChange:"changeSearchPopupStatus"}))},_=c,v=n(32),component=Object(v.a)(_,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"site_header__header_two_wrap"},[t._m(0),t._v(" "),o("header",{staticClass:"main-nav__header_two clearfix"},[o("nav",{class:"header-navigation stricky clearfix ".concat(t.sticky?"stricked-menu stricky-fixed":"")},[o("div",{staticClass:"container"},[o("div",{staticClass:"main-nav__header_two_content"},[o("div",{staticClass:"mobile_menu_icon_two"},[o("a",{staticClass:"side-menu__toggler",attrs:{href:"#"}},[o("i",{staticClass:"fa fa-bars",on:{click:function(o){t.mobileToggle=!t.mobileToggle}}})])]),t._v(" "),o("div",{staticClass:"main-nav__main-navigation two float-left"},[o("ul",{staticClass:"main-nav__navigation-box"},[o("li",{staticClass:"dropdown current"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Inicio")])],1),t._v(" "),o("li",{staticClass:"dropdown"},[o("nuxt-link",{attrs:{to:"/plantas"}},[t._v("Plantas")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/productos"}},[t._v("Productos")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/nosotros"}},[t._v("Nosotros")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/contactanos"}},[t._v("Contactanos")])],1)])]),t._v(" "),o("div",{staticClass:"main_nav_right_two float-right"},[o("div",{staticClass:"icon_cart_box"},[o("nuxt-link",{attrs:{to:"/georeferencia"}},[o("i",{staticClass:"fas fa-globe"}),t._v(" "),o("span",{staticClass:"icon-earth"})])],1)])])])]),t._v(" "),o("nav",{staticClass:"mobile-nav__container",style:"display: ".concat(t.mobileToggle?"block":"none")},[o("ul",{staticClass:"main-nav__navigation-box"},[o("li",{staticClass:"dropdown current"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Inicio")])],1),t._v(" "),o("li",{staticClass:"dropdown"},[o("nuxt-link",{attrs:{to:"/plantas"}},[t._v("Plantas")])],1),t._v(" "),o("li",{staticClass:"dropdown"},[t._m(1),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/"}},[t._v("Productores")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"#"}},[t._v("Plantas")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"#"}},[t._v("Acopiadores")])],1)])]),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/productos"}},[t._v("Productos")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/nosotros"}},[t._v("Nosotros")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/contactanos"}},[t._v("Contactanos")])],1)])])])])}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"topbar-two"},[o("div",{staticClass:"container"},[o("div",{staticClass:"topbar_two_content clearfix"},[o("div",{staticClass:"logo-box-two float-left"},[o("a",{staticClass:"main-nag__logo py-3",attrs:{href:"/index2"}},[o("img",{attrs:{src:"/assets/images/resources/logo.svg",alt:""}})])]),t._v(" "),o("div",{staticClass:"header_address_two float-left"},[o("ul",{staticClass:"clearfix list-unstyled"},[o("li",[o("div",{staticClass:"address_icon"},[o("span",{staticClass:"icon-placeholder"})]),t._v(" "),o("div",{staticClass:"address_title"},[o("h6",[t._v("Address")]),t._v(" "),o("p",[t._v("66 Broklyn St. New York")])])]),t._v(" "),o("li",[o("div",{staticClass:"address_icon"},[o("span",{staticClass:"icon-phone-call"})]),t._v(" "),o("div",{staticClass:"address_title"},[o("h6",[t._v("Phone")]),t._v(" "),o("p",[o("a",{attrs:{href:"tel:123456789"}},[t._v("66 Broklyn St. New York")])])])]),t._v(" "),o("li",[o("div",{staticClass:"address_icon"},[o("span",{staticClass:"icon-clock"})]),t._v(" "),o("div",{staticClass:"address_title"},[o("h6",[t._v("Timings")]),t._v(" "),o("p",[t._v("Mon - Fri 09:00am - 07:00pm")])])])])]),t._v(" "),o("div",{staticClass:"header_btn_two float-right"},[o("a",{staticClass:"thm-btn",attrs:{href:"#"}},[t._v("Get a Free Quote")])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"menu-holder"},[this._v("\n                        Georeferencia\n                        "),t("button",{staticClass:"dropdown-btn"},[t("i",{staticClass:"fa fa-angle-right"})])])}],!1,null,"756ce34e",null);o.a=component.exports},353:function(t,o,n){"use strict";n.r(o);var e=n(292),r=n(290),l=n(289),c=n(327),_=n(304),v=n(298),d=n(299),f=n(328),h=n(300),C={components:{CallToActionOne:n(329).a,TeamOne:h.a,ProductOne:f.a,VideoOne:d.a,BrandOne:v.a,TestimonialFour:_.a,AboutTwo:c.a,Footer:l.a,PageHeader:r.a,Header:e.a},head:function(){return{title:"LACTIRED  | NOSOTROS"}}},w=n(32),component=Object(w.a)(C,(function(){var t=this,o=t._self._c;return o("div",[o("Header"),t._v(" "),o("PageHeader",{attrs:{title:"Nosotros"}}),t._v(" "),o("AboutTwo"),t._v(" "),o("CallToActionOne"),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);o.default=component.exports}}]);