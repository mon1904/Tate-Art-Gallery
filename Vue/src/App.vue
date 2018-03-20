<template>
  <div id="app">
    <div class="tateimg">
      <img :src="'https://s.bsd.net/tategallery/main/page/-/TTM/_img/logo.png'">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active"><router-link to="/">Home</router-link></li>
          <li class="nav-item"><router-link to="/artwork">Artwork</router-link></li>
          <li class="nav-item"><router-link to="/artist">Artist</router-link></li>
          <li class="nav-item"><router-link to="/addmore">Upload</router-link></li>
        </ul>
    <!--<cart></cart>-->
      </div>
    </nav>
    <hr>
    <router-view></router-view>
    </div>
      <div class="footer-bottom">
        <div class="container">
          <p class="pull-left"> Copyright © Monica 2017. All rights reserved. </p>
        </div>
      </div>
    </div>
</template>

<script>
  import artist from './components/artist'
  import artwork from './components/artwork'
  import home from './components/home'
  import artistname from './components/artistname'
  import addmore from './components/addmore'


  export default {
    name: 'app',
    components: {
      artist,
      artwork,
      home,
      artistname,
      addmore,
    },
    data(){
      return{
       url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
     }
    },
  }
</script>

<style>
  #app {
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #FFFFFF;
    height:100%;
    background-color: #262626;
    margin: 0%;
  }

  .navbar ul {
    /*border-bottom: none;*/
    font-size: 1.4em;
    line-height: 40px;
    margin: 0;
    list-style-type: none;
    text-align: center;
  }

  .navbar ul li {
    display:inline-block
  }

  .navbar ul li a {
    padding: .2em 1em;
    color: #fff;

  }

  .navbar ul li a:hover {
    color: #000;
    background-color: #fff;
  }

  /*----------*/
  ul.dropdown-cart li .item{
    display:block;
    padding:3px 10px;
    margin: 3px 0;
  }
  ul.dropdown-cart li .item:hover{
    background-color:#f3f3f3;
  }
  ul.dropdown-cart li .item:after{
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

  ul.dropdown-cart li .item-left{
    float:left;
  }
  ul.dropdown-cart li .item-left img,
  ul.dropdown-cart li .item-left span.item-info{
    float:left;
  }
  ul.dropdown-cart li .item-left span.item-info{
    margin-left:10px;
  }
  ul.dropdown-cart li .item-left span.item-info span{
    display:block;
  }
  ul.dropdown-cart li .item-right{
    float:right;
  }
  ul.dropdown-cart li .item-right button{
    margin-top:14px;
  }
  .footer-bottom{
    margin-top: 40px;
    border-top: 2px solid #eee;
    background-color: #262626;
  }
  .pull-left{
    margin-top: 10px;
   }

  img{
    width:250px;

  }

</style>

