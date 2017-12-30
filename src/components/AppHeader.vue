<template>
  <div class="app-header-dummy">
    <div class="app-header container">
      <div class="headerstyle">
        <a v-on:click="showOverflowMenu = false" href="#app-header-anchor-top">
          <h1 class="page-logo-small">m/p</h1>
          <h1 class="page-logo">markuspfundstein.com</h1>
        </a>
        <div class="overflow-menu-right">
          <img v-if="!showOverflowMenu" v-on:click="showOverflowMenu = !showOverflowMenu" class="overflow-menu-icon" src="../assets/overflow.png"/>
          <img v-if="showOverflowMenu" v-on:click="showOverflowMenu = !showOverflowMenu" class="overflow-menu-icon" src="../assets/overflow-open.png"/>
        </div>
        <div class="links-right-side">
        <span>
          <a href="#about-me">About</a>
          <a href="#projects">Projects</a>
          <a href="#digital-video">Services</a>
          <a href="#contact">Contact</a>
        </span>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showOverflowMenu" class="overflow-menu">
        <ul>
          <li><a v-on:click="showOverflowMenu = false" href="#about-me">About</a></li>
          <li><a v-on:click="showOverflowMenu = false" href="#projects">Projects</a></li>
          <li><a v-on:click="showOverflowMenu = false" href="#digital-video">Services</a></li>
          <li><a v-on:click="showOverflowMenu = false" href="#contact">Contact</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      showOverflowMenu : false,
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
  -moz-box-shadow: 0px 0px 1px #18121e;
  -webkit-box-shadow: 0px 0px 1px #18121e;
  box-shadow: 0px 0px 1px #18121e;
  top: 0;
  width: 100%;
  position: fixed;
  background-color: #eac67a;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

li {
  margin-right: 21px;
  margin-top: 25px;
  margin-left: 21px;
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

.overflow-menu {
  display: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
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

  .overflow-menu {
    width: 100%;
    position: fixed;
    right: 0;
    margin-top: 35px;
    -moz-box-shadow: 0px 0.5px 0px #18121e;
    -webkit-box-shadow: 0px 0.5px 0px #18121e;
    box-shadow: 0px 0.5px 0px #18121e;
    background-color: #eac67a;
    z-index: 9999;
    display: inline;
  }
}

</style>
