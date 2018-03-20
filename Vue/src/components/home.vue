<template>

  <div class="body">
    <h1>{{ msg }}</h1>
  <div class="media-object">
    <image-slider>
      <div v-for="number in [currentNumber]">
        <img class="sld" :src="imagesList[Math.abs(currentNumber) % imagesList.length]"
             v-on:mouseover="stopRotation"
             v-on:mouseout="startRotation"
        />
      </div>
      <p>
        <a @click="prev">Previous</a> || <a @click="next">Next</a>
      </p>
    </image-slider>
</div>
  </div>
</template>

<script>
export default {

  name: 'Hello',
  data () {
    return {
      imagesList: ['https://www.artfund.org/assets/what-to-see/museums-and-galleries/t-v/tate-britain/tate-britain-1536.jpg', 'https://media-cdn.tripadvisor.com/media/photo-s/01/c4/dd/5e/tate-britain.jpg', 'http://ianthearchitect.org/wp-content/uploads/2013/11/Tate-Britain-Rotunda.jpg'],
      currentNumber: 0,
      timer: null,
      msg: 'Welcome to my Tate Gallery Shop'
    }
  },
  methods: {

    startRotation: function () {
      this.timer = setInterval(this.next, 2000);
    },

    stopRotation: function () {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function () {
      this.currentNumber += 1
    },
    prev: function () {
      this.currentNumber -= 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .body {
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height:100%;
    color: #262626;
    padding-top: 50px;
    margin: 0px;
    position: inherit;
  }

  .sld{
    height: 300px;
    width: 600px;
  }

  h1{
    font: 50px "Lucida Grande", Helvetica, Arial, sans-serif;
    color: #FFFFFF;
    padding-bottom: 30px;
  }

  p{
    padding-top: 20px;
  }

</style>
