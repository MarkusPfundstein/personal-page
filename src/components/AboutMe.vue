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
    I am Creative Technologist, often pitching myself as <b>the bridge
      between developers and management</b>. As the owner of LIFE Electronics, a professional services firm in Amsterdam, I help companies to build novel software and solve complex business problems through digital means.</p>
    <p> I started coding when I was 12  years or so. My first project was to run Ultima Online Freeshards from my basement on a 64k Modem. I think I had about 40 to 50 users and my dad a ridicolous internet bill (that was before we got flatrates). Coding ever since, from games to iOS apps to backend systems. As long as its fun and flashy and focuses on the user experience, I am on it. 
    </p>
    <p>
    Besides programming and designing software, I love people, cryptocurrencies, good books, series and animes, political discussions, history, philosophy, instant coffee (yeah), food, my family and nature. Politically I am some kind of weird chameleon. I believe in the nation-state but also in open trade and the free-market. I support Bitcoin and hope that it can help us to reach the second enlightment: The separation of state and money. I am always up for a good
    discussion, so if you are in Amsterdam, feel free to get in touch :-).
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
