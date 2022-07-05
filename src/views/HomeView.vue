<template>
  <center>
    <div class="bg-black w-100">
      <div class="" style="width: 95%">
        <div style="display: flex; justify-content: space-between">
          <div
            class="mt-2"
            style="display: flex; justify-content: space-between"
          >
            <i id="iconss" class="bi bi-twitter fs-5 m-2 text-white"></i>
            <i class="bi bi-instagram fs-5 m-2 text-white"></i>
            <i id="iconss" class="bi bi-facebook fs-5 m-2 text-white"></i>
            <i class="bi bi-youtube fs-5 m-2 text-white"></i>
            <i id="iconss" class="bi bi-apple fs-5 m-2 text-white"></i>
            <i id="iconss" class="bi bi-spotify fs-5 m-2 text-white"></i>
          </div>
          <div>
            <h2 id="main-title" class="text-white fst-italic mt-3" style="font-weight: bold; font-family: cursive;">
              Seventeen Music Ug
            </h2>
          </div>
          <div style="display: flex; justify-content: space-between">
            <i
              id="account"
              class="bi bi-person-fill fs-5 text-white"
            ></i>
            <i class="bi bi-list fs-2 m-2 text-white"></i>
          </div>
        </div>
      </div>
      <div class="container row">
        <div class="col-md-6">
          <div id="banner-title">
<h1 class="fst-italic text-primary mt-3" style="font-weight: bold;">
              Seventeen Music Ug
            </h1>
            <h5 class="text-white" style="font-family: cursive;">Buy and be the first one to listen and enjoy our music</h5>
          </div>
        </div>
       <div class="col-md-6">
  <img class="w-100" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1656922199/Kallery/seventeenmusic/back2_vpstxs.png" alt="">
            <div id="banner-title2">
<h1 class="fst-italic text-primary mt-3" style="font-weight: bold;">
              Seventeen Music Ug
            </h1>
            <h5 class="text-white" style="font-family: cursive;">Buy and be the first one to listen and enjoy our music</h5>
          </div>
       </div>
      </div>
    </div>
    <div class="d-flex search-div">
      <input
        type="text"
        v-model="search"
        class="bg-black form-control border-primary text-primary"
        id="search"
        placeholder="search for songs"
      />
      <button
        class="btn btn-primary"
        style="height: 40px; margin-left: -10px; margin-top: 20px"
      >
        Search
      </button>
    </div>
    <!-- // latest songs  -->
    <div class="d-flex pt-5" id="titles">
      <h2 class="text-white"><b>Latest</b></h2>
      <h2 class="text-primary" style="margin-left: 10px"><b>Songs</b></h2>
    </div>
    <h6 class="text-white m-3">
      Seventeen Music Ug's hottest releases all available here
    </h6>
    <div class="container row mt-3">
      <div class="col-md-4" v-for="song in filteredSong" :key="song.id">
        <div class="m-2 bg-black rounded-3">
          <img class="images" :src="song.photo" />
          <div class="p-3">
            <div class="d-flex" style="justify-content: space-between">
              <p style="color: #fff" @click="downloadSong">{{ song.name }}</p>
              <p class="text-primary">New</p>
              <h6 style="color: #fff">UGX: {{ song.amount }}</h6>
            </div>
            <button
              class="border-primary btn btn-dark bg-black text-primary"
              @click="payViaService"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div class="text-white m-5 p-5" v-if="filteredSong.length === 0">
        Sorry We don't have that Song
      </div>
    </div>
    <div class="w-100 bg-black mt-3">
        <!-- // updates  -->
        <div class="d-flex pt-5" id="titles">
      <h2 class="text-white"><b>Latest</b></h2>
      <h2 class="text-primary" style="margin-left: 10px"><b>Updates</b></h2>
    </div>

        <div class="container row mt-3">
      <div class="col-md-4" v-for="song in updates" :key="song.id">
        <div class="m-2 rounded-3" style="background-color: #1a1a1a;">
          <img class="images" :src="song.photo" />
          <div class="p-3">
            <div class="d-flex" style="justify-content: space-between">
              <p style="color: #fff">{{ song.name }}</p>
              <h6></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- // gallery -->
       <div class="d-flex pt-5" id="titles">
      <h2 class="text-white"><b>Our</b></h2>
      <h2 class="text-primary" style="margin-left: 10px"><b>Gallery</b></h2>
    </div>
        <div class="container row mt-3">
      <div class="col-md-4" v-for="song in gallery" :key="song.id">
        <div class="m-2 bg-black rounded-3">
          <img class="images" :src="song.photo" />
        </div>
      </div>
    </div>
    <div class="bg-black p-3 mt-4 p-3">All rights reserved Seventeen music Ug</div>
  </center>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      search: "",
      songs: [
        {
          id: 1,
          name: "Girl Like You",
          amount: 1000,
          audioMusic:
            "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656665568/Kallery/seventeenmusic/m1_cyotkp.mp3",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658457/Kallery/seventeenmusic/WhatsApp_Image_2022-06-26_at_7.55.29_AM_fqghzv.jpg",
        },
        {
          id: 2,
          name: "Nsonyiwa",
          amount: 1000,
          audioMusic:
            "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656667008/Kallery/seventeenmusic/m2_l37vlz.mp3",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658285/Kallery/seventeenmusic/s2_qynpuc.jpg",
        },
        {
          id: 3,
          name: "Nkooye",
          amount: 1000,
          audioMusic:
            "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656667087/Kallery/seventeenmusic/m3_jyk2hz.mp3",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658065/Kallery/seventeenmusic/s2_p9izel.jpg",
        },
        {
          id: 4,
          name: "Nabagereka",
          amount: 1000,
          audioMusic:
            "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656667091/Kallery/seventeenmusic/m4_ciuup3.mp3",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656657292/Kallery/seventeenmusic/s1_bfk6on.jpg",
        },
      ],
      gallery: [
        {
          id: 1,
          name: "Girl Like You",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658457/Kallery/seventeenmusic/WhatsApp_Image_2022-06-26_at_7.55.29_AM_fqghzv.jpg",
        },
        {
          id: 2,
          name: "Nsonyiwa",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658285/Kallery/seventeenmusic/s2_qynpuc.jpg",
        },
        {
          id: 3,
          name: "Nkooye",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658065/Kallery/seventeenmusic/s2_p9izel.jpg",
        },
        {
          id: 4,
          name: "Nabagereka",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656657292/Kallery/seventeenmusic/s1_bfk6on.jpg",
        },
      ],
      updates: [
        {
          id: 1,
          name: "Interview at NBS",
          amount: 1000,
          audioMusic:
            "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656665568/Kallery/seventeenmusic/m1_cyotkp.mp3",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658457/Kallery/seventeenmusic/WhatsApp_Image_2022-06-26_at_7.55.29_AM_fqghzv.jpg",
        },
        {
          id: 2,
          name: "Freedom city party",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658285/Kallery/seventeenmusic/s2_qynpuc.jpg",
        },
        {
          id: 3,
          name: "Nkooye Launch",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658065/Kallery/seventeenmusic/s2_p9izel.jpg",
        },
        {
          id: 4,
          name: "Charity giving",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656657292/Kallery/seventeenmusic/s1_bfk6on.jpg",
        },
      ],
      paymentData: {
        tx_ref: this.generateReference(),
        amount: 1000,
        currency: "UGX",
        public_key: "FLWPUBK_TEST-8c1f4d871cb37a96bb33191bbcb6cdcb-X",
        payment_options: "mobilemoney",
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
          title: "Seventeen Music Ug",
          description: "Pay Using mobile money and download",
          logo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656922199/Kallery/seventeenmusic/back2_vpstxs.png",
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
    payViaService() {
      this.payWithFlutterwave(this.paymentData);
    },
    makePaymentCallback(response) {
      console.log("Pay", response);
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
      // axios({
      //   url: "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656665568/Kallery/seventeenmusic/m1_cyotkp.mp3",
      //   method: "GET",
      //   responseType: "blob",
      // }).then((response) => {
      //   var fileURL = window.URL.createObjectURL(new Blob([response.data]));
      //   var fileLink = document.createElement("a");

      //   fileLink.href = fileURL;
      //   fileLink.setAttribute("download", "file.mp3");
      //   document.body.appendChild(fileLink);

      //   fileLink.click();
      // });
    },
  },
};
</script>
<style>
#titles {
  margin-left: 45vw;
}
.images {
  width: 100%;
  height: 390px;
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
  .images {
    height: 330px;
  }
}
</style>
