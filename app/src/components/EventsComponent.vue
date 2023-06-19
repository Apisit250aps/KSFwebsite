<template>
    <section class="container py-3 mt-md-3 bg-white">
        <h2>กิจกรรมค่ายของชมรม</h2>
        <hr>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 m-auto">

            <div class="col row row-cols-1 m-auto p-1">
                <img src="../assets/image/events/bbl.jpg" alt="" srcset="" class="img-fluid col">
                <div class="mt-3 col">
                    <b>โครง BBL</b>
                    <p>ทำสื่อการเรียนรู้เพื่อส่งเสริมพัฒนาการ</p>

                </div>
            </div>
            <div class="col row row-cols-1 m-auto p-1">
                <img src="../assets/image/events/fun.jpg" alt="" srcset="" class="img-fluid col">
                <div class="mt-3 col">
                    <b>โครงสอน</b>
                    <p>มอบความรู้ และกิจกรรมสันทนาการ</p>

                </div>
            </div>
            <div class="col row row-cols-1 m-auto p-1">
                <img src="../assets/image/events/color_build.jpg" alt="" srcset="" class="img-fluid col">
                <div class="mt-3 col">
                    <b>โครงทาสีอาคาร</b>
                    <p>ทาสีอาคารที่เก่า ให้เหมือนใหม่ </p>

                </div>
            </div>
            <div class="col row row-cols-1 m-auto p-1">
                <img src="../assets/image/events/color_wall.jpg" alt="" srcset="" class="img-fluid col">
                <div class="mt-3 col">
                    <b>โครงทาสีกำแพง</b>
                    <p>ทาสีกำแพงรอบๆโรงเรียน </p>

                </div>
            </div>
            <div class="col row row-cols-1 m-auto p-1">
                <img src="../assets/image/events/playground.jpg" alt="" srcset="" class="img-fluid col">
                <div class="mt-3 col">
                    <b>โครงสนามเด็กเล่น</b>
                    <p>ปรับปรุง สนามเด็กเล่น</p>

                </div>
            </div>
            <div class="col row row-cols-1 m-auto p-1">
                <img src="../assets/image/events/env.jpg" alt="" srcset="" class="img-fluid col">
                <div class="mt-3 col">
                    <b>โครงปรับภูมิทัศน์</b>
                    <p>ปรับปรุง ซ่อมแซม และทำความสะอาดโรงเรียน</p>
                </div>
            </div>
            <div class="col row row-cols-1 m-auto p-1">
                <img src="../assets/image/events/kitchen.jpg" alt="" srcset="" class="img-fluid col">
                <div class="mt-3 col">
                    <b>โครงครัว</b>
                    <p>ทำอาหารให้ชาวค่าย และน้องๆนักเรียน</p>
                </div>
            </div>
            <div class="col row row-cols-1 m-auto p-1">
                <img src="../assets/image/events/plant.jpg" alt="" srcset="" class="img-fluid col">
                <div class="mt-3 col">
                    <b>โครงเกษตร</b>
                    <p>ปรับปรุงแปลงเกษตรในโรงเรียน</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

import { defineComponent } from 'vue';

// import Flicking from '@egjs/vue3-flicking';
// import { Sync } from "@egjs/flicking-plugins";


export default defineComponent(
    {
        name: "EventsComponent",
        components: {
            
        },
        data() {
            return {
                
            };
        },
        mounted() {
            
        },
    }
);

</script>