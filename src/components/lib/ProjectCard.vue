<template>
    <div class="project-container">
      <div class="project-image-container">
        <a :href = "projectLink" target="_blank">
          <img class="project-image" :src="imageSource"/>
        </a>
      </div>
      <div class="project-right-side">
        <div class="project-text-container">
          <p class="project-text" v-html="projectText">
          </p>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: [
    'projectLink',
    'imageSource',
    'projectText',
  ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #984b43;
}

a:visited {
  color: #984b43;
}

.project-image-container {
  float: left;
  width: 45%; }

.project-text-container {
  margin-right: 25px;
}

.project-image {
  margin-top: 5px;
  margin-left: 25px;
  max-width: 100%;
  max-height: 300px;
  width: auto;
  height: auto;
  display: block;
  box-shadow:0 1px 2px rgba(0,0,0,.4);
  -webkit-box-shadow:0 1px 2px rgba(0,0,0,.4);
  -moz-box-shadow:0 1px 2px rgba(0,0,0,.4);
}

.project-right-side { 
  width: 45%;
  float: right;
}

.project-container {
  width: 100%;
  min-height: 300px;
  clear: both;
}

.project-text {
  margin-top: 0px;
  margin-bottom: 0px;
}

.clear {
  clear: both;
}


.separator {
  height: 25px;
}


@media (max-width: 800px) {

  .project-image {
    margin-top: 0px;
    margin-left: 0px;
  }

  .project-text-container {
    margin-right: 0px;
  }

  .project-image-container {
    float: left;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
  }


  .project-right-side {
    float: left;
    width: 100%;
  }

}
</style>
