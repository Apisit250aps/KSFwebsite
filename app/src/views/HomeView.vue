<template type="text/html">
  <div class="home">
    <IntroComponent />
    <EventsComponent />
  </div>
</template>








<script>
// @ is an alias to /src
import { defineComponent } from 'vue'

// import HelloWorld from '@/components/HelloWorld.vue'
import IntroComponent from '@/components/IntroComponent.vue';
import EventsComponent from '@/components/EventsComponent.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    IntroComponent,
    EventsComponent,
  }
});
</script>
