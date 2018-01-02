<template>
  <div id="projects" class="content container">
    <h1 class="content-title">Projects & Jobs</h1>
    <p>Some selected projects that I have worked on. Some hired me as a consultant, others employed me.</p>
    <project-card
        :imageSource="olisto.image"
        :projectLink="olisto.link"
        :projectText="olisto.text">
    </project-card>
    <div class="separator"></div>    
    <project-card
         :imageSource="esomar.image"
         :projectLink="esomar.link"
         :projectText="esomar.text">
    </project-card>
    <div class="separator"></div>    
    <project-card
         :imageSource="odmedia.image"
         :projectLink="odmedia.link"
         :projectText="odmedia.text">
    </project-card>
  </div>
</template>

<script>
import ProjectCard from './lib/ProjectCard';

export default {
  name: 'Projects',
  data() {
    return {
      olisto: {
        // eslint-disable-next-line
        image: require('../assets/triggi-screen.png'),
        link: 'https://www.olisto.com',
        text: 'Since 2016, I am performing an integral role at the Internet of Things startup <a class="redlink" href="https://www.triggi.com" target="_blank">Triggi</a>. Often described as the \'meijse for everything\', I\'ve worked on the backend system and the app, bootstrapped the analytics system for marketing, served as Scrum Master, and ran several online marketing campaigns with above-average conversion rates.<br> The backend is micro-service system built with NodeJS, RabbitMQ, MongoDB, Reddis, Ansible, Consule and several other cutting-edge technologies. The front-end is build with Cordova and deployed on Android and iOS.',
      },
      esomar: {
        // eslint-disable-next-line
        image: require('../assets/esomar-screen.png'),
        link: 'https://ana.esomar.org',
        text: 'For <a class="redlink" href="https://www.esomar.org" target="_blank">ESOMAR</a>, I\'ve developed in cooperation with my friends from <a class="redlink" href="https://www.eli5.io" target="_blank">Eli5</a> and <a class="redlink" href="http://www.tapp.nl" target="_blank">Tapp</a> an advanced search engine for all of their content (video, paper, scans). Besides hacking, I\'ve acted as Product Owner. The project started as prototype and quickly became a strategic component of ESOMARs digital transformation.<br> To make this happen, we used Elastic Search, NodeJS, Vue, Python (Scikit and sklearn) and PHP. We deploy everything using Docker and Gitlab through a fully automated CI/CD pipeline.',
      },
      odmedia: {
        // eslint-disable-next-line
        image: require('../assets/odmedia-screen.png'),
        link: 'http://www.odmedia.nl',
        text: 'During my tenure at <a class="redlink" href ="http://www.odmedia.nl" target="_blank">ODMedia</a>, I worked mostly on automation systems for their digital video pipelines. Jobs included XML transformation engines for ADI 2.0 files, cloud encoding for video delivery and the development of cutting-edge software (Interoperable Master Format).<br>The software we used there has been quite diverse. From ffmpeg, to avisynth, to ffmbc, to obe-rt, to Baton, to Iris. If it had to do video, we used it.',
      },
    };
  },
  components: {
    'project-card': ProjectCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.separator {
  height: 25px;
}

</style>
