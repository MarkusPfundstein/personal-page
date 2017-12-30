<template>
  <div class="app-header-dummy">
    <div class="app-header container">
      <header class="headerstyle">
        <a href="#app-header-anchor-top">
          <h1 class="page-logo-small">m/p</h1>
          <h1 class="page-logo">markuspfundstein.com</h1>
        </a>
        <div class="overflow-menu-right">
          <img class="overflow-menu-icon" src="../assets/overflow.png"/>
        </div>
        <div class="links-right-side">
        <span>
          <a href="#about-me">About</a>
          <a href="#projects">Projects</a>
          <a href="#digital-video">Services</a>
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

.app-header-dummy {
  height: 35px;
}

.headerstyle{
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
}

.app-header {
  z-index: 9999;
  height: 35px;
  box-shadow: 0px 0px 1px #18121e;
  top: 0;
  width: 100%;
  position: fixed;
  background-color: #eac67a;
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
  text-decoration: none;
  margin-right: 0.8rem;
}

a:hover {
  color: #78879e;
}

.page-logo {
  float: left;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 0px;
  margin-top: 5px;
  color: #233237;
}

.page-logo-small {
  display: none;
  float: left;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 0px;
  margin-top: 5px;
  color: #233237;

}

.links-right-side {
  margin-top: 7px;
  float: right;
}

.overflow-menu-right {
  display: none;
}

@media (max-width:840px) {
  .page-logo {
    display: none;
  }

  .page-logo-small {
    display: inline;
  }
}

@media (max-width:500px) {
  .links-right-side {
    display: none;
  }

  .overflow-menu-icon {
    margin-top: 8px;
    width: 22px;
  }

  .overflow-menu-right {
    display: inline;
    float: right;
  }
}

</style>
