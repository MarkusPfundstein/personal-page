<template>
  <div id="front" class="container">
    <div class="front-image-container">
      <img class="front-image" src="../assets/bigimage.jpg"/>
      <h1 class="front-text-container">
        "Good work - with passion and skill"
      </h1>
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

.front-text-container {
  z-index: 333;
  position: absolute;
  top: 40%;
  left: 5%;
  color: #984b43;
  font-style: italic;
  font-size: 32px;
}

@media (max-width:850px) {
  .front-text-container {
    font-size: 20px;
  }
}

@media (max-width:500px) {
  .front-text-container {
    font-size: 11px;
  }
}

</style>
