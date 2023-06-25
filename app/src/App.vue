<template>
  <router-view/>
  <ContactComponent />
</template>

<script>

import ContactComponent from './components/ContactComponent.vue';

export default {
  name:"App",
  components:{
    ContactComponent
  }
}

</script>