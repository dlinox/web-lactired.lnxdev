<template>
    <div>
        <Header />
        <PageHeader title="Plantas" />


        <section class="recent-project our_projects">

            <div class="container">
                <div class="row">
                    <div v-for=" (item, index) in plantas" :key="plantas.plan_id" class="col-xl-4 col-lg-6">
                        <div class="recent_project_single mrb-30">
                            <div class="project_img_box">
                                <img src="/assets/images/planta/demo.jpg" alt="Recent Project Img">
                                <div class="project_content">
                                    <h3> {{ item.plan_razon_social }}</h3>
                                </div>
                                <div class="hover_box">
                                    <nuxt-link :to="'/plantas/' + item.plan_id"><span
                                            class="icon-left-arrow"></span></nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>
  
<script>

import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
    components: {
        Footer,
        PageHeader,
        Nav,
        Header
    },
    head() {
        return {
            title: "LACTIRED  | DETALLES DE PLANTA"
        }
    },
    data: () => ({
        plantas: null
    }),
    methods: {
        async getPlantas() {
            let res = await fetch('https://app-lactired.lnxdev.net.pe/api/plantas');
            let json = await res.json();

            console.log(json);
            this.plantas = json;
        }
    },
    async created() {

        await this.getPlantas();

    }
}
</script>
  