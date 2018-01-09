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
      between developers and management</b>. I am the founder of LIFE Electronics, a professional services firm in Amsterdam that helps companies to build novel software since 2013. I am also a Partner at <a href = "http://www.pointomega.nl" target = "_blank">Point Omega</a> - a startup studio that builds you a "Startup as a Service". 
    </p>
    <p> I started coding when I was 12  years or so. My first project was to run Ultima Online Freeshards from my basement on a 64k Modem. I think I had about 40 to 50 users and my dad a ridicolous internet bill (that was before we got flatrates). Coding ever since, from games to iOS apps to backend systems. As long as its fun and flashy and focuses on the user experience, I am on it. 
    </p>
    <p>
    Besides programming and designing software, I love people, cryptocurrencies, good books, series and animes, political discussions, history, philosophy, instant coffee (yeah), food, my family and nature. I am a capitalist, pro open-trade and support the free-market with minimal government. I support Bitcoin and hope that it can help us to reach the second enlightment: The separation of state and money. I am always up for a good
    discussion, so if you are in Amsterdam, feel free to get in touch :-).
    </p>
    <h2 class = "content-subtitle">About this page</h2>
    <p>
    I developed this page in the winter holidays 2017-2018. It is going to be the main portal to my online presence. Right now there is not much content as its mostly a W-I-P. So maybe bookmark it and come back later ;-). 
    </p>
    <p>
    The page is written with VueJS. All CSS is hand-coded and I tried to avoid Javascript as much as possible. I took great care to make the page performant and as responsive as possible. So if you find any bugs, please report them in the <a href = "https://github.com/MarkusPfundstein/personal-page" target="_blank">Github repo</a>.
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

a {
  color: #984b43;
}

a:visited {
  color: #984b43;
}

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
