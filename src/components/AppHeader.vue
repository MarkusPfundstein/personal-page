<template>
  <div class="app-header container">
    <header>
      <h1 class="bit2theright">MarkusPfundstein.Com</h1>
      <span class="bit2theright">
        <a href="/">Home</a>
        <a href="/#/aboutme">About Me</a>
        <a href="/#/video">Digital Video</a>
        <a href="/#/software">Software Development</a>
        <a href="/#/blog">Blog</a>
      </span>
    </header>
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

.bit2theright {
  margin-left: 5px;
}

header {
  background-color: #eac67a;
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
