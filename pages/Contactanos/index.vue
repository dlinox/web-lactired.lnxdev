<template>
    <div>
      <Header />
      <PageHeader title="Contactanos" />
      <Location />
      
      <GMap />
      <Footer />
    </div>
  </template>
  
  <script>
  
    import Header from "@/components/Header";
    import PageHeader from "@/components/PageHeader";
    import Footer from "@/components/Footer";
    import Location from "@/components/Location";
    import ContactTwo from "@/components/ContactTwo";
    import GMap from "@/components/GMap";
    export default {
      components: {
        GMap,
        ContactTwo,
        Location,
        Footer,
        PageHeader,
        Header
      },
      head(){
        return {
          title: "Agrikol  | Contact"
        }
      }
    }
  </script>
  