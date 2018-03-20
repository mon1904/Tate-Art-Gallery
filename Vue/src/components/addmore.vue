<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Add Artist</h1>
        <div class="container">

          <form class="well form-horizontal" action="some" method="post"  id="contact_form">
            <fieldset>

              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label">Name</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input  name="name" v-model="name" @change="addArtist()" placeholder="First Name" class="form-control"  type="text">
                  </div>
                </div>
              </div>

              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label" >Gender</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input name="gender" v-model="gender" @change="addArtist()" placeholder="Gender" class="form-control"  type="text">
                  </div>
                </div>
              </div>
              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label" >Date</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                    <input name="currentDate" v-model="currentDate" @change="addArtist()" placeholder="Date" class="form-control"  type="date">
                  </div>
                </div>
              </div>

              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label" >Year of Birth</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                    <input name="yearOfBirth" v-model="yearOfBirth" @change="addArtist()" placeholder="Year of Birth" class="form-control"  type="date">
                  </div>
                </div>
              </div>
              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label" >Year of Death</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                    <input name="yearOfDeath" v-model="yearOfDeath" @change="addArtist()" placeholder="Year of Death" class="form-control"  type="date">
                  </div>
                </div>
              </div>

              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label" >Place of Birth</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                    <input name="placeOfBirth" v-model="placeOfBirth" @change="addArtist()" placeholder="Place of Birth" class="form-control"  type="date">
                  </div>
                </div>
              </div>

              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label">Place of Death</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                    <input name="placeOfDeath" v-model="placeOfDeath" @change="addArtist()" placeholder="Place of Death" class="form-control"  type="text">
                  </div>
                </div>
              </div>


              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label">URL</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                    <input name="url" v-model="url" @change="addArtist()" placeholder="URL" class="form-control"  type="text">
                  </div>
                </div>
              </div>

              <!-- Button -->
              <div class="form-group">
                <label class="col-md-4 control-label"></label>
                <div class="col-md-4">
                  <button type="submit" v-on:click.prevent="addArtist" class="btn btn-default" >Send <span class="glyphicon glyphicon-send"></span></button>
                </div>
              </div>

            </fieldset>
          </form>
        </div>
      </div><!-- /.container -->
      </div>
    </div>

</template>

<script>

  import axios from "axios";

  export default {
    data () {
      return {
        id: '',
        name:'',
        gender: '',
        currentDate: '',
        yearOfBirth: '',
        yearOfDeath: '',
        placeOfBirth: '',
        placeOfDeath: '',
        url: '',
      }
    },

    methods: {
      addArtist () {

        var newArtistArray = {
          "id": this.id,
          "name": this.name,
          "gander": this.gender,
          "currentDate": this.currentDate,
          "yearOfBirth": this.yearOfBirth,
          "yearOfDeath": this.yearOfDeath,
          "placeOfBirth": this.placeOfBirth,
          "placeOfDeath": this.placeOfDeath,
          "url": this.url
        }
        axios({
          url: 'http://localhost:3000/addmore',
          method: 'post',
          contentType: 'application/json',
          data: newArtistArray
          })
          .catch(e => {
            console.error(e);
          })
        console.log(newArtistArray)
      }
    }
  }

</script>

<style>

  .col-md-4{
    color:#262626;
  }
  .btn-default {
    margin-top: 30px;
    width:160px;
    color: #f2f2f2;
    background-color: #202129;
  }


</style>
