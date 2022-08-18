<template>
  <!-- Main Container -->
  <main id="main-container">
      <!-- Hero -->
      <Hero :title="title" :page="page" />
      <!-- END Hero -->
      <!-- Page Content -->
      <div class="content">

          <!-- Panel -->
          <div class="row">

                <div class="col-md-6 col-xl-3">
                    <div class="block block-rounded block-link-shadow bg-primary">
                        <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                            <div>
                                <i class="fa fa-3x fa-thermometer-half text-primary-lighter"></i>
                            </div>
                            <div class="ms-3 text-end">
                                <p class="text-white fs-3 fw-medium mb-0">
                                    {{ index_datos.temperatura || "*" }} °C
                                </p>
                                <p class="text-white-75 mb-0">
                                    Temperatura
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3">
                    <div :class="mqtt_class_03">
                        <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                            <div>
                                <i class="fa fa-3x fa-tint text-success-light"></i>
                            </div>
                            <div class="ms-3 text-end">
                                <p class="text-white fs-3 fw-medium mb-0">
                                    {{ index_datos.humedad || "*" }} %
                                </p>
                                <p class="text-white-75 mb-0">
                                    Humedad
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3">
                    <div :class="wifi_class_03">
                        <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                            <div>
                                <i   @click="cambiar" class="fa fa-3x fa-lightbulb text-success-light"></i>
                            </div>
                            <div class="me-3 text-end">
                                <p class="text-white fs-3 fw-medium mb-0">
                                    {{ index_datos.luz || "*" }}
                                </p>
                                <p class="text-white-75 mb-0">
                                    Iluminación
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div v-on:click="cambiar" class="col-md-6 col-xl-3">
                    <div class="block block-rounded block-link-shadow bg-warning">
                        <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                            <div>
                                <i class="fa fa-3x fa-solid fa-cloud-rain text-success-light"></i>
                            </div>
                            <div class="me-3 text-end">
                                <p class="text-white fs-3 fw-medium mb-0">
                                    {{ index_datos.riego || "*"}} 
                                </p>
                                <p class="text-white-75 mb-0">
                                    Riego
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
              
              <div class="col-md-6">
                  <div class="block block-rounded block-link-shadow">
                      <div class="block-content block-content-full">
                          <div class="row text-center">
                              <div class="col-4 border-end">
                                  <div class="py-3">
                                      <div class="item item-circle bg-body-light mx-auto">
                                          <i class="fa fa-2x fa-thermometer-half text-primary"></i>
                                      </div>
                                      <p class="fs-3 fw-medium mt-3 mb-0">
                                          {{index_datos.temperatura }} °C
                                      </p>
                                      <p class="text-muted mb-0">
                                          Temperatura
                                      </p>
                                  </div>
                              </div>
                              <div class="col-4 border-end">
                                  <div class="py-3">
                                      <div class="item item-circle bg-body-light mx-auto">
                                          <i class="fa fa-2x fa-tint text-primary"></i>
                                      </div>
                                      <p class="fs-3 fw-medium mt-3 mb-0">
                                          {{index_datos.humedad}} %
                                      </p>
                                      <p class="text-muted mb-0">
                                          Humedad
                                      </p>
                                  </div>
                              </div>
                              <div class="col-4">
                                  <div class="py-3">
                                      <div class="item item-circle bg-body-light mx-auto">
                                          <i class="fa fa-2x fa-globe-americas text-primary"></i>
                                      </div>
                                      <p class="fs-3 fw-medium mt-3 mb-0">
                                           {{index_datos.mqtt_activity || "Unknown"}}
                                      </p>
                                      <p class="text-muted mb-0">
                                          Cloud
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="block block-rounded bg-gd-sublime">
                      <div class="block-content block-content-full">
                          <div class="row text-center">
                              <div class="col-4 border-end border-black-op">
                                  <div class="py-3">
                                      <div class="item item-circle bg-black-25 mx-auto">
                                          <i class="fa fa-wifi text-white"></i>
                                      </div>
                                      <p class="text-white fs-3 fw-medium mt-3 mb-0">
                                          {{index_datos.wifi_signal || 0}} %
                                      </p>
                                      <p class="text-white-75 mb-0">
                                          Señal
                                      </p>
                                  </div>
                              </div>
                              <div class="col-4 border-end border-black-op">
                                  <div class="py-3">
                                      <div class="item item-circle bg-black-25 mx-auto">
                                          <i class="fa fa-sync text-white"></i>
                                      </div>
                                      <p class="text-white fs-3 fw-medium mt-3 mb-0">
                                          {{index_datos.device_restart || 0}}
                                      </p>
                                      <p class="text-white-75 mb-0">
                                          Reinicios
                                      </p>
                                  </div>
                              </div>
                              <div class="col-4">
                                  <div class="py-3">
                                      <div class="item item-circle bg-black-25 mx-auto">
                                          <i class="fa fa-clock text-white"></i>
                                      </div>
                                      <p class="text-white fs-4 fw-medium mt-3 mb-0">
                                          {{index_datos.device_time_active || "0:00:00:00"}}
                                      </p>
                                      <p class="text-white-75 mb-0">
                                          Tiempo Activo
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- END Panel -->

          {{index_datos}}
      </div>
      <!-- END Page Content -->
  </main>
  <!-- END Main Container -->
</template>

<script>
import Hero from "@/components/common/Hero.vue"
import useIndex from '@/composables/useIndex'

export default {
    components: { Hero },
    name: 'Index',
        methods: {
        cambiar: function(event){
            alert('HOLA')
        }
    },
    setup() {
        const title = "Información del Dispositivo"
        const page = ""

        const {
            index_datos,
            wifi_status,
            mqtt_status,            
            wifi_connection,
            mqtt_connection,
            wifi_class_01,
            mqtt_class_01,
            wifi_class_02,
            mqtt_class_02,
            wifi_class_03,
            mqtt_class_03,
            temperatura,
            humedad,
            luz,
            riego
        } = useIndex()

        return{
            title,
            page,
            index_datos,
            wifi_status,
            mqtt_status,            
            wifi_connection,
            mqtt_connection,
            wifi_class_01,
            mqtt_class_01,
            wifi_class_02,
            mqtt_class_02,
            wifi_class_03,
            mqtt_class_03,
            temperatura,
            humedad,
            luz,
            riego
        }
    }
}
</script>
