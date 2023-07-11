<template>
  <div>
    <Header />
    <PageHeader title="Detalles de la planta" />
    <ServiceDetail :planta="planta" />
    <ServiceOne  :productos="productos" />
    <Footer  />
  </div>
</template>
<script>
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ServiceDetail from "@/components/ServiceDetail";
import Footer from "@/components/Footer";
import ServiceOne from "@/components/ServiceOne";

export default {
  components: {
    Footer,
    ServiceDetail,
    PageHeader,
    Header,
    ServiceOne
  },
  head() {
    return {
      title: "LACTIRED  | PLANTA DETALLE"
    }
  },
  data: () => ({
    planta: null,
    loading: false,
    productos: null,
  }),

  async created() {
    this.loading = true;

    let res = await fetch('https://app-lactired.lnxdev.net.pe/api/planta/' + this.$route.params.id);
    let json = await res.json();
    this.planta = json;


    let prods = await fetch('https://app-lactired.lnxdev.net.pe/api/planta/productos/' + this.$route.params.id);
    let jsonp = await prods.json();
    this.productos = jsonp;
    this.loading = false;
  }
}
</script>
  