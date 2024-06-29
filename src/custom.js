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
        "Lovers Water Based Lube Foil 10ml",
        "King Cock Clear 18in Double Dildo",
      ],
      img: [
        "./src/assets/image/Lovers_Water_Based_Lube_Foil_10ml_OAL_250x250.avif",
        "./src/assets/image/Pipedream_King_Cock_Clear_18in_Double_Dildo_250x250.webp",
      ],
      price: ["2.95", "62.00"],
    }));
    Alpine.data("slide", () => ({
      num: 0,
      len: 2,
      w_big: 265,
      w_small: 173,
      w_elem() {
        var w_body = document.body.offsetWidth
        return (w_body < 768) ? this.w_small : this.w_big
      }, 
      next() {
        if (this.num != this.len) {
          this.num++
        } else {
          this.num = 0
        }
      }, 
      prev() {
        if (this.num != 0) {
          this.num--
        } else {
          this.num = this.len
        }
      }
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
      submit() {
        return null
      },
      cc_mask(input) {
        return input.startsWith('34') || input.startsWith('37') ? '9999 999999 999999' : '9999 9999 9999 9999'
      },
      a: false,
      city: '',
      state: '',
      location: '',
      country: '',
    }));
})