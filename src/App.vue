<template>
  <div id="app">
    <app-header/>
      <!--    <router-view/>-->
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
  $(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    const id = $(this).attr('href');

    // target element
    const $id = $(id);
    if ($id.length === 0) {
      return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    const pos = $id.offset().top;

    // animated top scrolling
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
