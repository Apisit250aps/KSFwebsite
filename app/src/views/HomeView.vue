<template type="text/html">
  <div class="home pb-5">
    <IntroComponent />
    <EventsComponent />
    <!-- <PalaceComponent /> -->
    <toEventsComponent />
  </div>
</template>



<script>
// @ is an alias to /src
import { defineComponent } from 'vue'

// import HelloWorld from '@/components/HelloWorld.vue'
import IntroComponent from '@/components/IntroComponent.vue';
import EventsComponent from '@/components/EventsComponent.vue';
import toEventsComponent from '@/components/toEventsComponent.vue';
// import PalaceComponent from '@/components/PalaceComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    IntroComponent,
    EventsComponent,
    toEventsComponent,
    
  }
});
</script>
