<template>
    <div>
      <Header />
      <PageHeader title="Service Detail" />
      <ServiceDetail />
      <Footer />
    </div>
  </template>
  <script>
    import Header from "@/components/Header";
    import PageHeader from "@/components/PageHeader";
    import ServiceDetail from "@/components/ServiceDetail";
    import Footer from "@/components/Footer";
    export default {
      components: {
    Footer,
    ServiceDetail,
    PageHeader,
    Header
},
      head(){
        return {
          title: "Agrikol  | Service Detail"
        }
      }
    }
  </script>
  