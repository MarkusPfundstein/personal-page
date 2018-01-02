<template>
  <div id="app">
    <div id="app-header-anchor-top"></div>
    <app-header/>
      <!--    <router-view/>-->
      <front/>
    <about-me/>
    <div class="page-separator"></div>
    <projects/>
    <div class="page-separator"></div>
    <digital-video/>
    <div class="page-separator"></div>
    <contact/>
    <div class="page-separator"></div>
    <div class="page-separator"></div>
    <app-footer/>
  </div>
</template>

<script>

function jqueryScrollInit() {
  $(document).on('click', 'a[href^="#"]', function handleClick(e) {
    const id = $(this).attr('href');

    const $id = $(id);
    if ($id.length === 0) {
      return;
    }

    e.preventDefault();

    const pos = $id.offset().top;

    $('body, html').animate({
      scrollTop: pos,
    });
  });
}

jqueryScrollInit();

export default {
  name: 'app',
};
</script>

<style>
.redlink {
  color: #984b43;
}

.redlink:visited {
  color: #984b43;
}



.page-separator {
  height: 15px;
}

body {
  margin-left: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 0px;
}

html {
  overflow-y: scroll;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content-title {
  color: #984b43;
  //color: #eac67a;
  font-weight: normal;
}

.content-subtitle {
  color: #984b43;
  font-weight: normal;
}

.content-sub-subtitle {
  color: #984b43;
  font-weight: normal;
}

.content {
  max-width:75%;
  margin-left: auto;
  margin-right: auto;
  font-size: 17px;
  line-height: 28px;
}

.container {
}

.col-1,.col-12,.col-2,.col-3,.col-4,.col-6,.col-8,.{
 width:100%;
 padding-left:15px;
 padding-right:15px
}

.pull-right {
  float: right;
}

.row {
}

</style>
