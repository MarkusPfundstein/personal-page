<template>
  <div id = "about-me" class="content container">
    <h1 class="content-title">About</h1> 
    <div class="inline-image">
      <img class="img-responsive" alt="A picture of me at Triggi HQ" src="../assets/aboutme.jpeg">
      </img>
      <div class="caption-container">
        <div class="inline-image-caption">Photo by Ger Krijnen</div>
      </div>
    </div>
    <p> 
    I am Software Engineer and Business Consultant... often pitching myself as being the bridge
    between developers and management. I am the owner of LIFE Electronics, a professional services firm in Amsterdam, that helps companies to
    build novel software and solve complex business problems through digital means.
    </p>
    <p>
    Besides programming, I am engaged in the digital video community (ffmpeg, avisynth, Open Broadcast). As a member of the SMPTE Standards committee, I implemented one of the first encoders and editors for the IMF Standard (Interoperable Master Format). My tool is one of the few that passes Netflix' internal QC system and follows the standard to the letter (I offer the creation of IMF files as a service - get in touch).
    </p>
    <p>
    Educationally, I was a late bloomer. I went to University at the late age of 26 but eventually graduated Cum Laude from the University of Amsterdam with a BSc in Artifical Intelligence with a GPA of 8.8. Currently, I follow a part-time MSc Management at the Open University to sharpen my business skills. This makes me one of the few engineers who possess highly technical skills but can also communicate efficiently with business owners.
    </p>
    <p>
    Besides programming and designing software, I love people, cryptocurrencies, good books, series and animes, political discussions, history (golden age), philosophy, instant coffee (yeah), food, colours, my family and many more things. Politically I am some kind of weird chameleon. I believe in the nation-state but also in open trade and the free-market. I don't support the European Union but love my neighbours. I support Bitcoin and hope that we can get rid of the tyranny of the banks. If you love those stuff
    too, send me a mail and we can hang out and drink some beers :-).
    </p>
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

.img-responsive {
  max-width:390px;
  height:auto;
  display:block;
  box-shadow:0 1px 2px rgba(0,0,0,.4);
  -webkit-box-shadow:0 1px 2px rgba(0,0,0,.4);
  margin-left:40px;
  margin-right:10px;
  margin-top: 15px;
}

.caption-container {
  width:100%;
  margin:0 auto;
  text-align:center
}

.inline-image-caption {
  font-size:0.8rem;
  padding:5px 0
}

.inline-image {
  float: right;
}

@media (max-width:1100px) {
  .img-responsive {
    max-width:800px;
    height:auto;
    display:block;
    box-shadow:0 1px 2px rgba(0,0,0,.4);
    -webkit-box-shadow:0 1px 2px rgba(0,0,0,.4);
    margin-right:0px;
    margin-left: 0px;
    width:100%
  }

  .inline-image {
    float: none;
    max-width:65%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0px;
  }
}



</style>
