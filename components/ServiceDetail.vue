<template>
  <section class="service_detail">


    <template v-if="planta">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4">
            <div class="service_details_left">
              <ul class="list-unstyled service_all_list">
                <li><a href="#">
                    {{ planta.ubigeo.ubig_departamento }}, {{ planta.ubigeo.ubig_provincia }}, {{
                      planta.ubigeo.ubig_distrito }}
                  </a></li>
                <li class="active"><a href="#">
                    {{ planta.institucion.inst_nombre }} - {{ planta.institucion.inst_naturaleza }}
                  </a></li>
                <li><a href="#">Tipo de planta: {{ planta.plan_tipo_planta }} </a></li>

              </ul>
              <div class="need_help_box">
                <h2>Nesesitas ayuda?</h2>
                <p>Si necesitas ayuda adicional, ¡no dudes en contactarnos! Estamos aquí para atenderte de la mejor manera
                  posible..</p>
                <h3><span class="icon-phone-call"></span>951 888 0000</h3>
              </div>

            </div>
          </div>
          <div class="col-xl-8 col-lg-8">
            <div class="service_details_right">
              <h2 class="text-bold">
                {{ planta.plan_razon_social }}
              </h2>
              <div class="service_details_One_img">
                <img src="/assets/images/planta/demo.jpg" alt="">
              </div>
              <div class="harvest_innovations">

                <p>Somos una planta de acopio de leche y productora de queso comprometida con la excelencia y la calidad
                  en la industria láctea. Nuestro objetivo es ofrecer productos lácteos frescos, deliciosos y nutritivos a
                  nuestros clientes.</p>

                <p class="harvest_innovations_bottom_text">En nuestra planta, trabajamos en estrecha colaboración con los
                  productores locales para asegurar el suministro de leche fresca y de alta calidad. Valoramos la relación
                  cercana y de confianza que hemos establecido con nuestros proveedores a lo largo de los años..</p>

                <p>
                  Contamos con un equipo altamente capacitado y apasionado, conformado por expertos en la industria
                  láctea. Nos esforzamos por mantenernos al día con las últimas tecnologías y prácticas de producción para
                  garantizar la máxima eficiencia y calidad en nuestros procesos.
                </p>

                <p>

                  La calidad es un aspecto fundamental de nuestra planta. Implementamos estrictos controles de calidad en
                  cada etapa, desde la recepción de la leche cruda hasta el empaquetado final del queso. Nos aseguramos de
                  cumplir con las normas y regulaciones sanitarias para garantizar la inocuidad de nuestros productos.

                  Además de nuestra pasión por los productos lácteos de calidad, también nos preocupamos por el medio
                  ambiente y la sostenibilidad. Implementamos prácticas responsables en nuestras operaciones para
                  minimizar nuestro impacto en el entorno y promover la conservación de los recursos naturales.

                  Estamos comprometidos con la satisfacción total de nuestros clientes. Nos esforzamos por superar sus
                  expectativas y ofrecerles productos lácteos frescos y sabrosos en todo momento. Valoramos su confianza
                  en nosotros y trabajamos arduamente para mantenerla.

                  En resumen, somos una planta de acopio de leche y productora de queso dedicada a brindar productos
                  lácteos de calidad, respaldados por la experiencia de nuestro equipo, la excelencia en nuestros procesos
                  y el compromiso con la satisfacción de nuestros clientes.
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import FaqOne from "./FaqOne";
export default {
  name: "ServiceDetail",
  components: { FaqOne },
  props: {
    planta: {
      type: Object,
      default: null
    }
  }
}


</script>
