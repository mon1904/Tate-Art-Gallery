<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
            <span class="glyphicon glyphicon-shopping-cart"></span>  {{ currentCount }} - Items<span class="caret"></span></a>
          <ul class="dropdown-menu dropdown-cart" role="menu">
            <li v-for="item in cart" transition="fade">
              <p><strong>{{ item.artist }} - €{{ item.price }}0.00</strong></p></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="container"><h1>Artwork</h1>
      <div class="br">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link to="/artistname">Sort by artist</router-link></li>
          <li class="nav-item"><router-link to="/artwork">Sort by ID</router-link></li>
        </ul>
        <br>
        <ul class="media-list" v-if="artworks && artworks.length">
          <li class="media" v-for="artwork in artworks" track-by="id">
            <div class="media-left">
              <img class ="img" v-bind:src=artwork.thumbnailUrl>
            </div>
            <div class="media-body">
              <h4 class="media-heading">Artist:{{artwork.artist}}</h4>
              <h5><i>Title: {{artwork.title}}</i></h5>
              <h4><i>Price: €{{artwork.price}}0.00</i></h4>
              <button class="btn btn-default" v-on:click="addToCart(artwork)" >Add to Cart</button>
              <!--<button class="btn btn-default" v-on:click="test(artwork.artist)" >Add to Cart</button>-->

            </div>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import axios from "axios";

  export default {
    name: 'artwork',
    data() {
      return {
        artworks: [],
        cart: [],
        currentCount: 0,
        sum: 0
      }
    },
    created() {
      axios.get('http://localhost:3000/artistname')
        .then(response => {
          this.artworks = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    methods: {
      addToCart(artworks) {
        this.cart.push(artworks);
        //this.$emit('artworks', artworks);
        this.currentCount++;
      },
    }
  }
</script>

<style>
  #app {
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height:100%;
    background-color: #262626;
    margin: 0%;
  }

  .img{
    height: 150px;
    width: 150px;
    border-radius: 10%;
  }

  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
    border-style: double;
    color: white;
    border-style: solid;
    border-color: #8c8b8b;
    border-width:2px 1px 0 0;
    border-radius: 20px;
  }
  .media:first-child{
    display:none;
  }

  .btn-default {
    margin-top: 30px;
    color: #202129;
    background-color: #f2f2f2;
  }

  .btn-default:hover{
    margin-top: 30px;
    background-color: #808080;
    color: #f2f2f2;

  }

  .dropdown-menu{
    color:white;
  }

  .br ul {
    font-size: 1em;
    line-height: 40px;
    margin: 0;
    list-style-type: none;
    text-align: center;
  }

  .br ul li {
    display:inline-block
  }

  .br ul li a {
    padding: .2em 1em;
    color: #fff;

  }

  .br ul li a:hover {
    color: #000;
    background-color: #fff;
    color: white;
  }

  p{
    font-size: 12px;
  }

  .dropdown-cart{
    margin-right: -30px;
    border: solid white;
    background-color: #262626;

  }
  ul.dropdown-cart li {
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

</style>
