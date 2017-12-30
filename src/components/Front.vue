<template>
  <div id="front" class="container">
    <div class="front-image-container">
      <img class="front-image" src="../assets/bigimage.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Front',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.front-image-container {
  position: relative;
}

.front-image {
  max-width: 100%;
  height:auto;
  width:auto;
}


</style>
