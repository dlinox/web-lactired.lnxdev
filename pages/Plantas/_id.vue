<template>
  <div>
    <Header />
    <PageHeader title="Detalles de la planta" />
    <ServiceDetail :planta="planta" />
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
  head() {
    return {
      title: "LACTIRED  | PLANTA DETALLE"
    }
  },
  data: () => ({
    planta: null,
    loading: false,
  }),

  async created() {
    this.loading = true;

    let res = await fetch('https://app-lactired.lnxdev.net.pe/api/planta/' + this.$route.params.id);
    let json = await res.json();
    console.log(json);
    this.planta = json;

    this.loading = false;
  }
}
</script>
  