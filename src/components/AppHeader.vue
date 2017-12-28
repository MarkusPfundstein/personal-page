<template>
  <div class="app-header-dummy">
    <div class="app-header container">
      <header class="headerstyle">
        <h1 class="page-logo">markuspfundstein.com</h1>
        <div class="links-right-side">
        <span>
          <a href="#about-me">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#digital-video">Digital Video</a>
          <a href="#contact">Contact</a>
        </span>
        </div>
      </header>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.links-right-side {
  margin-top: 7px;
  float: right;
}

.page-logo {
  float: left;
}

.app-header-dummy {
  height: 35px;
}

.headerstyle{
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
}

.app-header {
  height: 35px;
  box-shadow: 0px 0px 1px #18121e;
  top: 0;
  width: 100%;
  position: fixed;
  background-color: #eac67a;
}

header {
}

a {
  margin-right: 0.8rem;
}

h1, h2 {
  font-weight: normal;
  margin-top: 0.0;
  margin-bottom: 0.0;
}

h1 {
  text-transform: uppercase;
  font-size: 1.6rem;
}

h2 {
  font-size: 1.0rem;
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
