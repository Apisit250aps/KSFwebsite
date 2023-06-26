<template>
  <div class="about">
    <Event_2565_2 />
    <Event_2565_1 />
  </div>
</template>

<script>

import { defineComponent } from 'vue';
import Event_2565_1 from '@/components/events/Event_2565_1.vue';
import Event_2565_2 from '@/components/events/Event_2565_2.vue';
export default defineComponent({
  name:"EventsView",
  components:{
    Event_2565_1,
    Event_2565_2,
  }
});

</script>