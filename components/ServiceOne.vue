<template>
  <section class="service_one">

    <div class="container">
      <div class="block-title text-center">
        <p>Productos</p>
        <h3>Quesos</h3>
        <div class="leaf">
          <img src="/assets/images/service/queso.jpg" alt="">
        </div>
      </div>
      <div class="row">
        <div v-for="(item, index) in productos" :key="index" class="col-xl-3 col-lg-3 col-md-6">
          <div class="service_1_single wow fadeInUp">
            <div class="content">
              <h3>

                {{ item.prod_nombre }}
              </h3>

            </div>
            <div class="service_1_img">
              <img :src="'https://app-lactired.lnxdev.net.pe' + item.prod_imagen" alt="Service Image">

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceOne",
  props: {
    productos: Array
  }
}
</script>

<style scoped></style>
