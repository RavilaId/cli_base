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
                                    {{ dash_datos.device_serial || "25" }} °C
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
                                    {{ dash_datos.mqtt_server || "65" }} %
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
                                <i class="fa fa-3x fa-lightbulb text-success-light"></i>
                            </div>
                            <div class="me-3 text-end">
                                <p class="text-white fs-3 fw-medium mb-0">
                                    {{ dash_datos.wifi_ssid || "Encedida" }}
                                </p>
                                <p class="text-white-75 mb-0">
                                    Iluminación
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3">
                    <div class="block block-rounded block-link-shadow bg-warning">
                        <div class="block-content block-content-full d-flex align-items-center justify-content-between">
                            <div>
                                <i class="fa fa-3x fa-solid fa-cloud-rain text-success-light"></i>
                            </div>
                            <div class="me-3 text-end">
                                <p class="text-white fs-3 fw-medium mb-0">
                                    {{ dash_datos.wifi_rssi || "Desactivado"}} 
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
                                            <i class="fa fa-clock text-primary"></i>
                                        </div>
                                        <p class="fs-3 fw-medium mt-3 mb-0">
                                             {{ dash_datos.device_time_active || "0:00:00:00" }}
                                        </p>
                                        <p class="text-muted mb-0">
                                            Hora Actual
                                        </p>
                                    </div>
                                </div>
                                <div class="col-4 border-end">
                                    <div class="py-3">
                                        <div class="item item-circle bg-body-light mx-auto">
                                            <i class="fa fa-satellite-dish text-primary"></i>
                                        </div>
                                        <p class="fs-3 fw-medium mt-3 mb-0">
                                            {{ dash_datos.wifi_signal || 0 }} %
                                        </p>
                                        <p class="text-muted mb-0">
                                            Señal WIFi
                                        </p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="py-3">
                                        <div class="item item-circle bg-body-light mx-auto">
                                            <i class="fa fa-globe-americas text-primary"></i>
                                        </div>
                                        <p class="fs-3 fw-medium mt-3 mb-0">
                                            {{ dash_datos.mqtt_activity || "Unknown" }}
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
                                            <i class="fa fa-hdd text-white"></i>
                                        </div>
                                        <p class="text-white fs-3 fw-medium mt-3 mb-0">
                                            {{ spiffs_percent_used.toFixed(2) }} %
                                        </p>
                                        <p class="text-white-75 mb-0">
                                            SPIFFS Usada
                                        </p>
                                    </div>
                                </div>
                                <div class="col-4 border-end border-black-op">
                                    <div class="py-3">
                                        <div class="item item-circle bg-black-25 mx-auto">
                                            <i class="fa fa-sync text-white"></i>
                                        </div>
                                        <p class="text-white fs-3 fw-medium mt-3 mb-0">
                                            {{ dash_datos.device_restart || 0 }}
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
                                            {{ dash_datos.device_time_active || "0:00:00:00" }}
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

            {{ dash_datos }}
        </div>
        <!-- END Page Content -->
    </main>
    <!-- END Main Container -->
</template>

<script>
import Hero from "@/components/common/Hero.vue"
import useDash from '@/composables/useDash'

export default {
    components: { Hero },
    name: 'Dash',
    setup() {
        const title = "Información del Dispositivo"
        const page = ""

        const {
            dash_datos,
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
            spiffs_percent_used,
            ram_percent_free
        } = useDash()

        return {
            title,
            page,
            dash_datos,
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
            spiffs_percent_used,
            ram_percent_free
        }
    }
}
</script>
