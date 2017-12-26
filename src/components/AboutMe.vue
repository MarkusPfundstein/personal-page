<template>
  <div class="aboutme container">
    <div class="row">
      <div class="col-12">
        <h1 class="aboutmehdr">About</h1>
        <div class="pull-right inline-image">
          <img class="img-responsive" alt="A picture of me at Triggi HQ" src="../assets/aboutme.jpeg">
          </img>
          <div class="caption-container">
            <div class="inline-image-caption">Photo by Ger Krijnen</div>
          </div>
        </div>
        <p class="aboutmetxt">
          I am Software Engineer and Business Consultant... often pitching myself as being the bridge
          between developers and management. I am the owner of LIFE Electronics, a professional services firm in Amsterdam, that helps companies to
          build novel software and solve complex business problems through digital means.
        </p>
        <p class="aboutmetxt">
          Since 2016 , I am performing an integral role at the Internet of Things startup Triggi. Often described as the 'meijse for everything', I've worked on the backend system and the app, bootstrapped the analytics system for marketing, served as Scrum Master, and ran several online marketing campaigns with above-average conversion rates.<br>I am also a digital video expert (ffmpeg, avisynth, Open Broadcast). As a member of the SMPTE Standards committee, I implemented one of the first
          encoders and editors
          for the IMF Standard (Interoperable Master Format). My tool is one of the few that passes Netflix' internal QC system and follows the standard to the letter (I offer the creation of IMF files as a service - get in touch).
        </p>
        <p class="aboutmetxt">
          Educationally, I was a late bloomer. I went to University at the late age of 26 but eventually graduated Cum Laude from the University of Amsterdam with a BSc in Artifical Intelligence with a GPA of 8.8. Currently, I follow a part-time MSc Management at the Open University to sharpen my business skills. This makes me one of the few engineers who possess highly technical skills but can also communicate efficiently with business owners.
        </p>
        <p class="aboutmetxt">
          Besides programming and designing software, I love people, cryptocurrencies, good books, series and animes, political discussions, history (golden age), philosophy, instant coffee (yeah), food, colours, my family and many more things. Politically I am some kind of weird chameleon. I believe in the nation-state but also in open trade and the free-market. I don't support the European Union but love my neighbours. I support Bitcoin and hope that we can get rid of the tyranny of the banks. If you love those stuff
          too, send me a mail and we can hang out and drink some beers :-).
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.aboutme {
}

.aboutmehdr {
  color: #984b43;
  margin-right: 10px;
  margin-left: 10px;
}

.aboutmetxt {
  margin-right: 10px;
  margin-left: 10px;
}

.img-responsive {
  max-width:390px;
  height:auto;
  display:block;
  box-shadow:0 1px 2px rgba(0,0,0,.4);
  -webkit-box-shadow:0 1px 2px rgba(0,0,0,.4);
  margin-left:10px;
  margin-right:10px;
}

.caption-container {
  width:100%;
  margin:0 auto;
  text-align:center
}

@media (max-width:768px) {
  .img-left-inline {
    float:left;
    margin-right:0;
    width:100%
  }

  .inline-image {
    max-width:50%;
    margin:15px 5px 5px
  }
}

.inline-image-caption {
  font-size:0.8rem;
  padding:5px 0
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #233237;
}
</style>
