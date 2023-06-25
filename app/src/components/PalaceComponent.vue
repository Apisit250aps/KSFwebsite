<template>
    <div class="container">
        <Flicking :options="{ circular: true }" :plugins="plugins">
            <div class="">
                <img src="../assets/image/palace/IMG_3362.jpeg" alt="" srcset="" class="img-fluid w-25">
            </div>
            <div class="">
                <img src="../assets/image/palace/IMG_3378.jpeg" alt="" srcset="" class="img-fluid w-25">
            </div>
            
            
        </Flicking>

    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Flicking from "@egjs/vue3-flicking";
import { Perspective } from "@egjs/flicking-plugins";



export default defineComponent({
    name: "PalaceComponent",
    components:{
        Flicking

    },
    data(){
        return{
            plugins: [new Perspective({ rotate: 0.5 })]
        }
    }
});

</script>