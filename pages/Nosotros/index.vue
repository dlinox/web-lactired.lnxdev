<template>
    <div>
      <Header />
      <PageHeader title="Nosotros" />
      <AboutTwo />
   


      <CallToActionOne />
      <Footer />
    </div>
  </template>
  
  <script>
  
    import Header from "@/components/Header";
    import PageHeader from "@/components/PageHeader";
    import Footer from "@/components/Footer";
    import AboutTwo from "@/components/AboutTwo";
    import TestimonialFour from "@/components/TestimonialFour";
    import BrandOne from "@/components/BrandOne";
    import VideoOne from "@/components/VideoOne";
    import ProductOne from "@/components/ProductOne";
    import TeamOne from "@/components/TeamOne";
    import CallToActionOne from "@/components/CallToActionOne";
    export default {
      components: {
        CallToActionOne,
        TeamOne,
        ProductOne,
        VideoOne,
        BrandOne,
        TestimonialFour,
        AboutTwo,
        Footer,
        PageHeader,
        Header
      },
      head(){
        return {
          title: "LACTIRED  | NOSOTROS"
        }
      }
    }
  </script>
  