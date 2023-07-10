<template>
    <div class="site_header__header_two_wrap">
        <div class="topbar-two">
            <div class="container">
                <div class="topbar_two_content clearfix">
                    <div class="logo-box-two float-left">
                        <a href="/index2" class="main-nag__logo py-3">
                            <img src="/assets/images/resources/logo.svg" alt="" />
                        </a>
                    </div>
                    <div class="header_address_two float-left">
                        <ul class="clearfix list-unstyled">
                            <li>
                                <div class="address_icon">
                                    <span class="icon-placeholder"></span>
                                </div>
                                <div class="address_title">
                                    <h6>Address</h6>
                                    <p>66 Broklyn St. New York</p>
                                </div>
                            </li>
                            <li>
                                <div class="address_icon">
                                    <span class="icon-phone-call"></span>
                                </div>
                                <div class="address_title">
                                    <h6>Phone</h6>
                                    <p><a href="tel:123456789">66 Broklyn St. New York</a></p>
                                </div>
                            </li>
                            <li>
                                <div class="address_icon">
                                    <span class="icon-clock"></span>
                                </div>
                                <div class="address_title">
                                    <h6>Timings</h6>
                                    <p>Mon - Fri 09:00am - 07:00pm</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="header_btn_two float-right">
                        <a class="thm-btn" href="#">Get a Free Quote</a>
                    </div>
                </div>
            </div>
        </div>

        <header class="main-nav__header_two clearfix">
            <nav :class="`header-navigation stricky clearfix ${sticky ? 'stricked-menu stricky-fixed' : ''
                }`">
                <div class="container">
                    <div class="main-nav__header_two_content">
                        <div class="mobile_menu_icon_two">
                            <a href="#" class="side-menu__toggler">
                                <i @click="mobileToggle = !mobileToggle" class="fa fa-bars"></i>
                            </a>
                        </div>
                        <div class="main-nav__main-navigation two float-left">
                            <ul class="main-nav__navigation-box">
                                <li class="dropdown current">
                                    <nuxt-link to="/">Inicio</nuxt-link>
                                </li>
                                <li class="dropdown">
                                    <nuxt-link to="/plantas">Plantas</nuxt-link>
                                </li>

                                <!-- <li class="dropdown">
                                    <nuxt-link to="/projects">Georeferencia</nuxt-link>
                                    <ul>
                                        <li><nuxt-link to="/projects">Productores</nuxt-link></li>
                                        <li><nuxt-link to="/projects_detail">Plantas</nuxt-link></li>
                                        <li><nuxt-link to="/projects_detail">Acopiadores</nuxt-link></li>
                                    </ul>
                                </li> -->
                                <li>
                                    <nuxt-link to="/productos">Productos</nuxt-link>
                                </li>

                                <li>
                                    <nuxt-link to="/nosotros">Nosotros</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/contactanos">Contactanos</nuxt-link>
                                </li>
                            </ul>
                        </div>

                        <div class="main_nav_right_two float-right">
                            <div class="icon_cart_box">
                                <nuxt-link to="/georeferencia">
                                    <i class="fas fa-globe"></i>
                                    <span class="icon-earth"></span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <nav class="mobile-nav__container" :style="`display: ${mobileToggle ? 'block' : 'none'}`">
                <!-- content is loading via js -->

                <ul class="main-nav__navigation-box">
                    <li class="dropdown current">
                        <nuxt-link to="/">Inicio</nuxt-link>
                    </li>

                    <li class="dropdown">
                        <nuxt-link to="/plantas">Plantas</nuxt-link>
                    </li>


                    <li class="dropdown">
                        <div class="menu-holder">
                            Georeferencia
                            <button class="dropdown-btn">
                                <i class="fa fa-angle-right"></i>
                            </button>
                        </div>
                        <ul>
                            <li><nuxt-link to="/">Productores</nuxt-link></li>
                            <li><nuxt-link to="#">Plantas</nuxt-link></li>
                            <li><nuxt-link to="#">Acopiadores</nuxt-link></li>
                        </ul>
                    </li>
                    <li>
                        <nuxt-link to="/productos">Productos</nuxt-link>
                    </li>

                    <li>
                        <nuxt-link to="/nosotros">Nosotros</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/contactanos">Contactanos</nuxt-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>
  
<script>
import { mapMutations } from "vuex";
export default {
    name: "NavTwo",
    data() {
        return {
            sticky: false,
            mobileToggle: false,
        };
    },
    computed: {
        searchPopup() {
            return this.$store.state.searchPopupStatus;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 70) {
                this.sticky = true;
            } else if (window.scrollY < 70) {
                this.sticky = false;
            }
        },
        ...mapMutations({
            searchPopupStatusChange: "changeSearchPopupStatus",
        }),
    },
};
</script>
  
<style scoped></style>
  