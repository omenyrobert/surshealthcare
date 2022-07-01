<template>
<center>
  <div class="d-flex search-div">
  <input type="text" class="bg-black form-control border-primary text-primary" id="search"  placeholder="search for songs">
  <button class="btn btn-primary" style="height: 40px; margin-left: -10px; margin-top: 20px;">Search</button>
  </div>
  <div class="d-flex pt-5" id="titles">      
  <h2 class="text-white"><b>Latest</b></h2><h2 class="text-primary" style="margin-left: 10px;"><b>Songs</b></h2>
  </div>
    <h6 class="text-white m-3">Seventeen Music Ug's hottest releases all available here</h6>
<div class="container row mt-3">
  <div class="col-md-4" v-for="song in songs" :key="song.id">
  <div class="m-2 bg-black rounded-3">
  <img class="images" :src="song.photo">
  <div class="p-3">
    <div class="d-flex" style="justify-content: space-between;">
      <p style="color: #fff;" @click="downloadSong">{{song.name}}</p>
      <p class="text-primary">New</p>
  <h6 style="color: #fff;">UGX: {{song.amount}}</h6>
    </div>
    <button class="border-primary btn btn-dark bg-black text-primary" @click="payViaService">Buy Now</button>
  </div>
  </div>

  </div>
</div>
</center>
</template>

<script>
import axios from 'axios';

export default {

  name: 'TheWelcome',
  data(){
    return {
      search: '',
      songs: [
        {
          id: 1,
          name: "Girl Like You",
          amount: 1000,
          audioMusic: 'https://res.cloudinary.com/dtlkiv19d/video/upload/v1656665568/Kallery/seventeenmusic/m1_cyotkp.mp3',
          photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658457/Kallery/seventeenmusic/WhatsApp_Image_2022-06-26_at_7.55.29_AM_fqghzv.jpg"
        },
                {
          id: 2,
          name: "Nsonyiwa",
          amount: 1000,
          audioMusic: 'https://res.cloudinary.com/dtlkiv19d/video/upload/v1656667008/Kallery/seventeenmusic/m2_l37vlz.mp3',
          photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658285/Kallery/seventeenmusic/s2_qynpuc.jpg"
        },
                {
          id: 3,
          name: "Nkooye",
          amount: 1000,
          audioMusic: 'https://res.cloudinary.com/dtlkiv19d/video/upload/v1656667087/Kallery/seventeenmusic/m3_jyk2hz.mp3',
          photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658065/Kallery/seventeenmusic/s2_p9izel.jpg"
        },
                {
          id: 4,
          name: "Nabagereka",
          amount: 1000,
          audioMusic: 'https://res.cloudinary.com/dtlkiv19d/video/upload/v1656667091/Kallery/seventeenmusic/m4_ciuup3.mp3',
          photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656657292/Kallery/seventeenmusic/s1_bfk6on.jpg"
        }
      ],
      paymentData: {
        tx_ref: this.generateReference(),
        amount: 1000,
        currency: 'UGX',
        public_key: 'FLWPUBK_TEST-8c1f4d871cb37a96bb33191bbcb6cdcb-X',
        payment_options: 'mobilemoney',
        redirect_url: '',
        meta: {
          'counsumer_id': '7898',
          'consumer_mac': 'kjs9s8ss7dd'
        },
        customer: {
          name: 'Demo Customer  Name',
          email: 'customer@mail.com',
          phone_number: '081845***044'
        } ,
        customizations: {
          title: 'Customization Title',
          description: 'Customization Description',
          logo: 'https://flutterwave.com/images/logo-colored.svg'
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal
      }

    }
  } ,
  computed: {

  },
  methods: {
    payViaService() {
      this.payWithFlutterwave(this.paymentData) 
    } ,
    makePaymentCallback(response) {
      console.log("Pay", response)
    },
    closedPaymentModal() {
      console.log('payment is closed');
    },
    generateReference(){
      let date = new Date()
      return date.getTime().toString();
    },
      downloadSong() {
    console.log("download starting here")
              axios({
                    url: 'https://res.cloudinary.com/dtlkiv19d/video/upload/v1656665568/Kallery/seventeenmusic/m1_cyotkp.mp3',
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
   
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'file.mp3');
                     document.body.appendChild(fileLink);
   
                     fileLink.click();
                });
          },

  },
}
</script>
<style>
#titles{
  margin-left: 45vw;
}
.images{
  width: 100%; height: 390px;
}
#search{
  width: 500px; margin-top: 20px;
}
.search-div{
  margin-left: 30vw;
}
@media only screen and (max-width: 600px) {
  #titles{
    margin-left: 30vw;
  }
  .search-div{
  margin-left: 28px;
}
  #search{
  width: 280px; margin-top: 20px;
}
  .images {
    height: 330px;
  }
}
</style>