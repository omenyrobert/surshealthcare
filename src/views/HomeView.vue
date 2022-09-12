<template>
  <center>

    <!-- // latest songs  -->
    <div class="flex p-3" style="background-color: #991108;"><a style=" color: #fff; text-decoration: none;" href="https://surshealthcare.org/">E-laboratory</a><a style=" color: #fff; text-decoration: none; margin-left: 30px;;" href="https://drugs.surshealthcare.org/">E-Pharmacy</a></div>
    <div class="d-flex pt-5" id="titles">
      <h2 class="text-primary" style="margin-left: 10px"><b>All Doctors</b></h2>
    </div>
    <div class="container row mt-3">
      <div class="col-md-4" v-for="song in filteredSong" :key="song.id">
        <div class="m-2 rounded-3">
          <div style="height: 255px;">
          <img class="img-fluid img-thumbnail" :src="song.photo" />
          </div>
          <div class="p-3" style="background-color: #9becfa;">
            <div class="d-flex" style="justify-content: space-between;">
              <p style="color: #000" @click="downloadSong">{{ song.name }}</p>
              <p class="text-primary">All Available</p>
            </div>
            <button
              class="border-primary btn btn-dark bg-primary text-white"
              @click="payViaService(song)"
            >
              Pay for Consultation
            </button>
          </div>
        </div>
      </div>
      <div class="text-white m-5 p-5" v-if="filteredSong.length === 0">
        Sorry We don't have that Song
      </div>
    </div>
  </center>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      selectedSong: null,
      search: "",
      songs: [
        {
          id: 1,
          name: "Dr Natuhwera Precious",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-01-at-3.59.45-PM.jpeg",
        },
        {
          id: 2,
          name: "Mutale Geoffrey",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/07/h6-1024x683.jpg",
        },
        {
          id: 3,
          name: "Dr Nelson Onen",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/07/h6-1024x683.jpg",
        },
        {
          id: 4,
          name: "Cedrak Ategeka",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/07/IMG_0331-1024x683.jpg",
        },
        {
          id: 5,
          name: "Jacob Ogwang",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/07/IMG_0331-1024x683.jpg",
        },
        {
          id: 6,
          name: "Dr Acidri Henry",
          photo:
            "https://drugs.surshealthcare.org/wp-content/uploads/2022/07/IMG_0265-1024x683.jpg",
        },
      ],

      paymentData: {
        tx_ref: this.generateReference(),
        amount: 35000,
        currency: "UGX",
        payment_options: "mobilemoney,ussd",
        redirect_url: "",
        meta: {
          counsumer_id: "7898",
          consumer_mac: "kjs9s8ss7dd",
        },
        customer: {
          name: "Customer  Name",
          email: "customer@mail.com",
          phone_number: "081845***044",
        },
        customizations: {
          title: "Surshealthcare",
          description: "Pay the best doctors' consultations",
          logo: "https://drugs.surshealthcare.org/wp-content/uploads/elementor/thumbs/cropped-full_BMIhRHOt-prxxa4642c4ffdttdu6fxtrn6r8ztweowh9u618l4k.webp",
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal,
      },
    };
  },
  computed: {
    filteredSong() {
      return this.songs.filter((song) =>
        song.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    payViaService(song) {
      this.payWithFlutterwave(this.paymentData);
      this.selectedSong = song;
    },
    makePaymentCallback(response) {
      if(response.status==='successful'){
        console.log("Pay", response);
      const song = this.selectedSong
      this.$router.push(`/about/${song.id}`);
      }
    },
    closedPaymentModal() {
      console.log("payment is closed");
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
    },
    downloadSong() {
      console.log("download starting here");
    },
  },
};
</script>
<style>
#titles {
  margin-left: 45vw;
}
.images {
  max-width:100%;
  max-height: 100%;
}
#account{
  margin-right: 20px;
  margin-top: 15px;
}
#search {
  width: 500px;
  margin-top: 20px;
}
.search-div {
  margin-left: 30vw;
}
 #main-title{
    font-size: 40px;
    
  }
  #banner-title2{
    display: none;
  }
#banner-title{
  animation: shake 2s;
  animation-iteration-count: infinite;
  margin-top: 15vw; margin-left: 5vw;
}
@keyframes shake {
              0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
            40% {transform: translateY(-20px);} 
            60% {transform: translateY(-15px);} 
}
@media only screen and (max-width: 600px) {
  #account{
  margin-right: 2px;
  margin-top: 13px;
}
  #main-title{
    font-size: 20px;
    
  }
    #banner-title2{
    animation: shake 2s;
    animation-iteration-count: infinite;
    display: inline;
    margin-top: 150px;
    margin-left: -85vw;
    width: 90%;
    position: absolute;
  }
  #iconss{
    display: none;
  }
  #titles {
    margin-left: 30vw;
  }
  #banner-title{
 display: none;
}
  .search-div {
    margin-left: 28px;
  }
  #search {
    width: 280px;
    margin-top: 20px;
  }
}
</style>
