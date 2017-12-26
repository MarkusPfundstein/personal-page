<template>
  <div class="app-footer container">
    <div class="bottomtxt">
      &copy; LIFE Electronics
    </div>
    <div class="iconsright">
      <a href="mailto:mpfundstein@protonmail.com" target="_blank">
        <img class="icon-social-email" src="../assets/mail.svg"/>
      </a>
      <a href="https://www.linkedin.com/in/mpfundstein/" target="_blank">
        <img class="icon-social-linkedin" src="../assets/black-linkedin-icon.png"/>
      </a>
      <a href="https://twitter.com/lmf4lol" target="_blank">
        <img class="icon-social-twitter" src="../assets/twitter.png"/>
      </a>
      <a href="https://github.com/MarkusPfundstein" target="_blank">
        <img class="icon-social-github" src="../assets/GitHub-Mark-64px.png"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.icon-social-email {
  margin-right: 15px;
  width: 30px;
  height: auto;
}

.icon-social-linkedin{
  margin-right: 15px;
  margin-bottom: 1.7px;
  width: 30px;
  height: auto;
}

.icon-social-twitter {
  margin-right: 12px;
  margin-bottom: 1.5px;
  width: 32px;
  height: auto;
}

.icon-social-github {
  margin-top: 8px;
  margin-right: 10px;
  width: 30px;
  height: auto;
}

.app-footer {
  background-color: #eac67a;
  height:48px;
}

.iconsright {
  margin-top: 1px;
  float: right;
}

.bottomtxt {
  margin-top: 15px;
  margin-left: 5px;
  float: left;
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
  color: #42b983;
}
</style>
