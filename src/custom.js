document.addEventListener('alpine:init', () => {
    Alpine.data("nav", () => ({
      menu: [
        "Sex Toys",
        "Vibrators",
        "Sexual Wellness",
        "Lingerie & Accessories",
        "Lube",
        "Sexy Gifts",
        "Sale",
        "Stores",
        "Blog"
      ],

    }));
    Alpine.data("cart", () => ({
      name: [
        "Lovers Pink Leather Custom Choker (Domi_nique)",
        "Lovers Water Based Lube Foil 10ml",
        // "King Cock Clear 18in Double Dildo",
      ],
      img: [
        "./src/assets/image/61UpfolIOkL._AC_SR263,395_FMwebp_QL65_.webp",
        "./src/assets/image/Lovers_Water_Based_Lube_Foil_10ml_OAL_250x250.avif",
        // "./src/assets/image/Pipedream_King_Cock_Clear_18in_Double_Dildo_250x250.webp:62",
      ],
      price: ["16.97", "2.95"],
    }));
    Alpine.data("slide", () => ({
      num: 0,
      len: 2,
      w_big: 265,
      w_small: 173,
      w_elem() {
        var w_body = document.body.offsetWidth;
        return w_body < 768 ? this.w_small : this.w_big;
      },
      next() {
        if (this.num != this.len) {
          this.num++;
        } else {
          this.num = 0;
        }
      },
      prev() {
        if (this.num != 0) {
          this.num--;
        } else {
          this.num = this.len;
        }
      },
      name: [
        "Aphrodisiac Sex Chocolates",
        "GoodHead Deep Throat Spray To-Go",
        "Discover G-Spot Arousal Serum - Foil",
        "Assorted Tropical Poppin' Rock Oral Sex Candy",
        "Inya Rose Vibrating Air Pulsator",
      ],
      img: [
        "./src/assets/image/1PKSEXCHOCOLATE_600x.webp",
        "./src/assets/image/Doc_Johnson_GoodHead_Deep_Throat_Spray_To_Go_Mint_600x.webp",
        "./src/assets/image/discovergspotfoil_600x.webp",
        "./src/assets/image/Assorted_Tropical_Poppin_Rock_Oral_Sex_Candy_600x.webp",
        "./src/assets/image/Inya_Rose_Vibrating_Air_Pulsator_600x.webp",
      ],
      brand: [
        "Sensitizer",
        "Desensitizer",
        "Sensitizer",
        "Edibles",
        "Air Pulsator",
      ],
      price: ["1.25", "12.50", "1.95", "1.50", "58.99"],
    }));
    Alpine.data("modal", () => ({
      modalIsOpen: true,
      passcode: "yijuk",
      pass: null,
      submit() {
        console.log(this.pass);
        console.log(this.passcode);
        if (this.pass == this.passcode) {
          this.modalIsOpen = false;
        } else {
          this.$refs.error.classList.remove('hidden')
        }
      }
    }));
    Alpine.data("payment", () => ({
      modalIsOpen: false,
      cc: null,
      exp: null,
      cvv: null,
      cc_holder: null,
      a: false,
      city: null,
      state: null,
      location: null,
      country: null,
      phone:null,
      submit() {
        return null
      },
      cc_mask(input) {
        return input.startsWith('34') || input.startsWith('37') ? '9999 999999 999999' : '9999 9999 9999 9999'
      },
    }));
})