<template>
  <div class="container">
    <router-link to="/" class="btn btn-primary">Back</router-link>
    <center>
      <div class="row">
        <div class="p-5 col-md-6">
          <img class="img-fluid" style="width: 100%;" :src="songs.photo" />
        </div>
        <div class="p-5 col-md-6" style="background-color: #f9f9f9; border-radius: 15px;">
          <h3 style="color: #000" @click="downloadSong">{{ songs.name }}</h3>
          <div class="flex">
            <div class="w-1/5 m-1 contacts">
            <div class="icon-box"><i style="margin-top: 20px;" class="bi bi-telephone"></i></div><p style="color: #7dc9ff; margin-left: 20px;">{{songs.phone}}</p><div></div>
          </div>
          <div >
            <div class="icon-box"><i style="margin-top: 20px;" class="bi bi-telephone"></i></div><p style="color: #7dc9ff; margin-left: 20px;">{{songs.phone}}</p><div></div>
          </div>
          <div >
            <div class="icon-box"><i style="margin-top: 20px;" class="bi bi-telephone"></i></div><p style="color: #7dc9ff; margin-left: 20px;">{{songs.phone}}</p><div></div>
          </div>
          </div>
          
          <p>{{songs.skills}}</p>
        </div>
      </div>
    </center>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        songs: [
        {
          id: 1,
          name: "Dr Natuhwera Precious",
          phone: "0706 564482",
          skills: "Pediatrician",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-01-at-3.59.45-PM.jpeg",
        },
        {
          id: 2,
          name: "Mutale Geoffrey",
          phone: "0756 710975",
          skills: "Histopathologist",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/07/h6-1024x683.jpg",
        },
        {
          id: 3,
          name: "Dr Nelson Onen",
          phone: "0756 710975",
          skills: "Histopathologist",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/07/h6-1024x683.jpg",
        },
        {
          id: 4,
          name: "Cedrak Ategeka",
          phone: "0756 710975",
          skills: "Histopathologist",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/07/IMG_0331-1024x683.jpg",
        },
        {
          id: 5,
          name: "Jacob Ogwang",
          phone: "0756 710975",
          skills: "Histopathologist",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/07/IMG_0331-1024x683.jpg",
        },
        {
          id: 6,
          name: "Dr Acidri Henry",
          phone: "0756 710975",
          skills: "Histopathologist",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/07/IMG_0265-1024x683.jpg",
        },
      ],
      }
    },
    methods: {
      filteredSong() {
      this.songs = this.songs.find((song) => song.id === parseInt(this.$route.params.id));
    },
  },
  created(){
this.filteredSong();
  },
  }
</script>
<style>
  .icon-box{
    background-color: #349eeb;
     border-radius: 5px;
     width: 40px;
     height: 40px;
     color: #fff;
  }
  .contacts{
    border-radius: 10px; padding: 5px; border: 1px solid #7dc9ff; display: flex; justify-content: space-between;
  }
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
