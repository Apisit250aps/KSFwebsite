<template>
    <div>
        <section class="container py-3 mt-md-3 bg-white ">
        <div class=" row row-cols-1 row-cols-lg-2 m-auto ">
            <div id="introCarousel" class="carousel slide carousel-fade col" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/image/introCarousels/intro(6).jpg" alt="" sizes="" srcset="" class="img-fluid">
                    </div>
                    <div class="carousel-item ">
                        <img src="../assets/image/introCarousels/intro(2).jpg" alt="" sizes="" srcset="" class="img-fluid">
                    </div>
                    <div class="carousel-item ">
                        <img src="../assets/image/introCarousels/intro(5).jpg" alt="" sizes="" srcset="" class="img-fluid">
                    </div>
                    <div class="carousel-item ">
                        <img src="../assets/image/introCarousels/intro(7).jpg" alt="" sizes="" srcset="" class="img-fluid">
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#introCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#introCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="col bg-transparent row row-cols-1  g-3 g-lg-5 m-auto">
                <div class="col">
                    <h1 class="fs-1 under-line">ชมรมฅนสร้างฝัน</h1>
                    <br>
                    <p class="text-black-50 intro">
                        ชมรมฅนสร้างฝันมหาวิทยาลัยราชภัฏศรีสะเกษ ก่อตั้งขึ้นเมื่อ เดือนมกราคม พ.ศ. 2558
                        โดยกลุ่มแกนนำผู้ก่อตั้งคือนักศึกษาสาขาวิชาคณิตศาสตร์ มหาวิทยาลัยราชภัฏศรีสะเกษ
                        ซึ่งได้มีการประชุมลงความเห็นระหว่างนักศึกษาและอาจารย์ประจำสาขาคณิตศาสตร์ว่าควรมีการจัดตั้งชมรมที่จะสามารถสร้างประโยชน์ให้คนชุมชม
                    </p>
                    <br>
                    <p class="text-black-50 intro">
                        ส่งเสริมให้มีจิตสำนึกและตระหนักปัญหาและผลกระทบที่เกิดขึ้นในสังคม
                        รณรงค์ให้มีการรักษาและรับผิดชอบต่อสิ่งแวดล้อมในชุมชนและสังคมของตน
                        จึงได้มีการจัดตั้งชมรมฅนสร้างฝันขึ้น นับตั้งแต่ก่อตั้งชมรมมานั้น
                        ชมรมได้จัดทำโครงการพัฒนาสังคมมากมายหลายโครงการจนเป็นที่ประจักษ์และเป็นความภาคภูมิใจของมหาวิทยาลัยเสมอมา
                    </p>
                </div>
            </div>
        </div>
        <!--- --->
        <div class="row mx-auto row-cols-lg-2 row-cols-1 g-3 g-lg-5 py-5">
            <div class="col">
                <h3 class="under-line">ปรัชญา</h3>
                <p>
                    “ศรัทธา เชื่อมั่น สร้างสรรค์ สังคมไทย”
                </p>
            </div>
            <div class="col">
                <h3 class="under-line">
                    วิสัยทัศน์
                </h3>
                <p>
                    “บำเพ็ญประโยชน์เพื่อสังคม แบ่งปันรอยยิ้ม สร้างเสริมประสบการณ์การทำงานร่วมกัน
                    และการใช้ชีวิตของนักศึกษาผู้เสียสละทางสังคม”
                </p>
            </div>
        </div>
    </section>
    </div>
</template>
<style>
p.intro {
    text-indent: 30px;
}

</style>
<script>
import { defineComponent } from 'vue'
export default defineComponent(
    {
        name:'IntroductionComponents',

    }
);


</script>