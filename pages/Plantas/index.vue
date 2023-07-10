<template>
    <div>
        <Header />
        <PageHeader title="Plantas" />


        <section class="recent-project our_projects">

            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4">
                        <div class="recent_project_single mrb-30">
                            <div class="project_img_box">
                                <img src="/assets/images/project/recent-pro-img-1.jpg" alt="Recent Project Img">
                                <div class="project_content">
                                    <h3>organic<br>solutions</h3>
                                </div>
                                <div class="hover_box">
                                    <nuxt-link to="/plantas/1"><span class="icon-left-arrow"></span></nuxt-link>
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
            title: "Agrikol  | Our Projects"
        }
    }
}
</script>
  