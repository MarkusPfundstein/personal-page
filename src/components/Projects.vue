<template>
  <div id="projects" class="content container">
    <h1 class="content-title">Projects & Jobs</h1>
    <p>Some selected projects that I have worked on. Some hired me as a consultant, others employed me.</p>
    <div class="project-container">
      <div class="project-image-container">
        <img class="project-image" src="../assets/triggi-screen.png"/>
      </div>
      <div class="project-right-side">
        <div class="project-text-container">
          <p>
          Since 2016 , I am performing an integral role at the Internet of Things startup Triggi. Often described as the 'meijse for everything', I've worked on the backend system and the app, bootstrapped the analytics system for marketing, served as Scrum Master, and ran several online marketing campaigns with above-average conversion rates.<br>
          The backend is micro-service system built with NodeJS, RabbitMQ, MongoDB, Reddis, Ansible, Consule and several other cutting-edge technologies. The front-end is build with Cordova and deployed on Android and iOS.
          </p>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="separator"></div>    
    <div class="project-container">
      <div class="project-image-container">
        <img class="project-image" src="../assets/esomar-screen.png"/>
      </div>
      <div class="project-right-side">
        <div class="project-text-container">
          <p>
          For ESOMAR, I've developed in cooperation with my friends from <a href="https://www.eli5.io" target="_blank">Eli5</a> an advanced search engine for all of their content (video, paper, scans). Besides hacking, I've acted as Product Owner. The project started as prototype and quickly became a strategic component of ESOMARs digital transformation.<br>
          To make this happen, we used Elastic Search, NodeJS, Vue, Python (Scikit and sklearn) and PHP. We deploy everything using Docker and Gitlab through a fully automated CI/CD pipeline.
          </p>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="separator"></div>    
    <div class="project-container">
      <div class="project-image-container">
        <img class="project-image" src="../assets/odmedia-screen.png"/>
      </div>
      <div class="project-right-side">
        <div class="project-text-container">
          <p>
          During my tenure at ODMedia, I worked mostly on automation systems for their digital video pipelines. Jobs included XML transformation engines for ADI 2.0 files, cloud encoding for video delivery and the development of cutting-edge software (Interoperable Master Format).<br>
          The software we used there has been quite diverse. From ffmpeg, to avisynth, to ffmbc, to obe-rt, to Baton, to Iris. If it had to do video, we used it.
          </p>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.project-image-container {
  float: left;
  width: 50%;
}

.project-text-container {
  margin-right: 25px;
}

.project-image {
  margin-left: 25px;
  max-width: 100%;
  max-height: 300px;
  width: auto;
  height: auto;
  display: block;
}

.project-right-side { 
  width: 50%;
  float: right;
}

.project-container {
  width: 100%;
  min-height: 300px;
  clear: both;
  overflow: auto;
}

.clear {
  clear: both;
}

.separator {
  height: 25px;
}
</style>
