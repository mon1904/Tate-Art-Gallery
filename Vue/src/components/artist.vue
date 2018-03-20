<template>
  <div id="app">
    <div class="container">
      <h1>Artists</h1>
      <h1 class="name">Search by name</h1>
      <input class="input-box" type="text" v-model="search" placeholder="Search for image" />
      <ul class="list-group " v-if="artists && artists.length">
        <li class="list-group-item list-group-item-action"v-for="artist in filteredArtists">
          <table>
            <tr>
              {{artist.name}}
            </tr>
          </table>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import axios from "axios";

  export default {
    name: 'artist',
    data() {
      return {
        artists: [],
        search: ''
      }
    },
    created() {
      axios.get('http://localhost:3000/artist')
        .then(response => {
          this.artists = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    computed: {
      filteredArtists: function () {
        return this.artists.filter((x) => {
          return x.name.toLowerCase().includes(this.search.toLowerCase())
        });
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

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }


  .list-group{
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    background-color: #dddddd;
    color: black;
    padding: 10px;
    position: inherit;
    border-radius: 20px;

  }

  .list-group-item{
    list-style-type: none;
    padding: 15px;
  }

  .input-box {
    padding: 5px;
    margin-bottom: 10px;
    width: 200px;
    border-width:2px 1px 1px 1px;
    border-radius: 5px;
    background-color: #262626;
  }

  .name{
    display:inline-block;
    font: 18px "Lucida Grande", Helvetica, Arial, sans-serif;
    position: inherit;
    padding-bottom: 10px;
  }


</style>


