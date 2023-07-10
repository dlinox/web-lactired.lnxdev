<template>
  <div>
    <Header />
    <PageHeader title="Products" />
    <Products />
    <Footer />
  </div>
</template>
  
<script>

import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
export default {
  components: {
    Products,
    Footer,
    PageHeader,

    Header
  },
  head() {
    return {
      title: "LACTIRED  | PRODUCTOS"
    }
  }
}
</script>
  