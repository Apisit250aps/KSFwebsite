<template>
    <div style="background-color: pink;" class="py-3 text-white">
        <h1 class="text-center">ทำเนียบคณะบริหารชมรม</h1>
        <h3 class="text-center">ปีการศึกษา 2566</h3>
    </div>
    <div class="container py-6">

        <Flicking ref="flicking" :options="options" :plugins="plugins" class="py-5 m-auto">
            <div class="my-3 p-2 shadow panel zoom mx-3" style="max-width: 20rem;">
                <div style="aspect-ratio: 1/1;">
                    <img src="../assets/image/palace/palace_2566_1.jpg" alt="" srcset="" class="img-fluid w-100 rounded-2">
                </div>

                <div class="mt-3">
                    <b class="h-ksf mb-3">นายธนันชัย ใจเป็น</b>
                    <p>ประธานชมรม</p>
                </div>
            </div>
            <div class="my-3 p-2 shadow panel zoom mx-3" style="max-width: 20rem;">
                <div style="aspect-ratio: 1/1;">
                    <img src="../assets/image/palace/palace_2566_2.jpg" alt="" srcset="" class="img-fluid w-100 rounded-2">
                </div>

                <div class="mt-3">
                    <b class="h-ksf mb-3">นายทีปกร สอนสา</b>
                    <p>รองประธานชมรมฝ่ายอาคารสถานที่</p>
                </div>
            </div>
            <div class="my-3 p-2 shadow panel zoom mx-3" style="max-width: 20rem;">
                <div style="aspect-ratio: 1/1;">
                    <img src="../assets/image/palace/palace_2566_3.jpg" alt="" srcset="" class="img-fluid w-100 rounded-2">
                </div>

                <div class="mt-3">
                    <b class="h-ksf mb-3">นายปภังกร พรมกอง</b>
                    <p>รองประธานชมรมฝ่ายกิจกรรม</p>
                </div>
            </div>
            <div class="my-3 p-2 shadow panel zoom mx-3" style="max-width: 20rem;">
                <div style="aspect-ratio: 1/1;">
                    <img src="../assets/image/palace/palace_2566_4.jpg" alt="" srcset="" class="img-fluid w-100 rounded-2">
                </div>

                <div class="mt-3">
                    <b class="h-ksf mb-3">นายเอกอนันต์ วราพุฒ</b>
                    <p>เลขานุการ</p>
                </div>
            </div>
            <div class="my-3 p-2 shadow panel zoom mx-3" style="max-width: 20rem;">
                <div style="aspect-ratio: 1/1;">
                    <img src="../assets/image/palace/palace_2566_5.jpg" alt="" srcset="" class="img-fluid w-100 rounded-2">
                </div>

                <div class="mt-3">
                    <b class="h-ksf mb-3">นายกฤษฎา โสภากันต์</b>
                    <p>เหรัญญิก</p>
                </div>
            </div>
            <hr>
            <template #viewport>
                <div class="flicking-pagination"></div>
            </template>

        </Flicking>

    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Flicking from "@egjs/vue3-flicking";
import { Perspective, AutoPlay, Pagination } from "@egjs/flicking-plugins";
// import {  } from "@egjs/flicking-plugins";

import "@egjs/flicking-plugins/dist/pagination.css";

export default defineComponent({
    name: "PalaceComponent",
    components: {
        Flicking: Flicking

    },
    data() {
        return {
            options: {
                circular: true,
                align: "center",
            },
            plugins: [
                new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
                new Perspective({ rotate: 0.25, scale: 1, perspective: 600 }),
                new Pagination({ type: 'scroll' })
            ]
        };
    }
});

</script>

<style>



</style>