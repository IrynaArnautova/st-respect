<template>
  <main>
    <SitePreloader/>
    <section class="home-main" >
      <swiper
              :loop="true"
              :allowTouchMove="false"
              :effect="'fade'"
              :autoplay="{delay: 5000}"
              :modules="modules"
              class="home-main_slider"
      >
        <swiper-slide class="swiper-slide home-main_slider-item" v-for="(image, index) in images" :key="index">
            <img :src="require(`@/assets/images/main-img-${index + 1}.jpg`)" alt="">
        </swiper-slide>
      </swiper>
      <svg class="home-main_logo" viewBox="0 0 326 338" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Respect Studio title">
          <g id="Group 92" >
            <path id="Path 210" d="M25.8349 37.946C24.113 38.037 22.5722 38.037 20.8513 38.037H9.25225V65.654H0.010437V0H20.8503C36.7976 0 48.2145 3.171 48.2145 18.927C48.2145 29.341 43.2319 34.322 35.1667 36.495L50.3937 65.654H40.0593L25.8349 37.946ZM9.25225 7.78799V30.247H21.5787C31.2727 30.247 38.7026 29.247 38.7026 19.109C38.7026 8.97101 31.2707 7.78799 21.5787 7.78799H9.25225Z" fill="#E63E3A"/>
            <path id="Path 211" d="M63.0753 44.0131C63.3474 54.5131 70.9574 59.5871 78.1161 59.5871C85.3649 59.5871 89.351 56.3281 91.435 51.5281H99.9505C97.7773 59.8601 89.9843 66.8351 78.1151 66.8351C62.7071 66.8351 54.1937 55.7841 54.1937 41.3861C54.1937 25.9001 64.523 16.1201 77.8429 16.1201C92.7927 16.1201 101.581 28.5271 100.585 44.0131H63.0753ZM63.1653 36.9481H91.8873C91.6152 30.0661 86.6326 23.1821 77.844 23.1821C70.5962 23.1821 63.8907 27.1681 63.1653 36.9481Z" fill="#E63E3A"/>
            <path id="Path 212" d="M136.015 31.1489C134.657 25.3489 130.312 23.0869 124.509 23.0869C119.707 23.0869 114.271 24.8079 114.271 29.2459C114.271 33.1459 116.989 34.8619 121.701 35.8589L128.586 37.2149C137.466 38.8479 145.257 42.3769 145.257 51.7069C145.257 61.3959 136.56 66.8309 125.415 66.8309C112.639 66.8309 105.481 58.4069 104.485 49.8949H113.182C114.542 56.1419 118.348 59.8569 125.596 59.8569C131.848 59.8569 136.922 57.2309 136.922 52.6129C136.922 47.6309 132.3 45.7299 127.047 44.5509L119.797 43.1029C113.183 41.6529 105.936 38.7559 105.936 29.6079C105.936 21.0079 114.633 16.0259 125.416 16.0259C136.021 16.0259 143.085 21.8199 144.626 31.1489H136.015Z" fill="#E63E3A"/>
            <path id="Path 213" d="M161.659 16.936V24.636C164.649 19.474 169.722 16.123 177.606 16.123C188.841 16.123 198.446 25.541 198.446 41.48C198.446 57.689 188.841 66.837 177.606 66.837C169.723 66.837 164.649 63.484 161.659 58.321V81.505H153.413V16.936H161.659ZM175.521 59.769C183.948 59.769 189.474 53.1571 189.474 41.4771C189.474 29.7971 183.948 23.177 175.521 23.177C168.182 23.177 161.296 28.6121 161.296 41.4771C161.296 54.342 168.182 59.769 175.521 59.769Z" fill="#E63E3A"/>
            <path id="Path 214" d="M212.129 44.0131C212.4 54.5131 220.011 59.5871 227.17 59.5871C234.418 59.5871 238.405 56.3281 240.49 51.5281H249.005C246.831 59.8601 239.038 66.8351 227.17 66.8351C211.762 66.8351 203.249 55.7841 203.249 41.3861C203.249 25.9001 213.579 16.1201 226.898 16.1201C241.848 16.1201 250.637 28.5271 249.64 44.0131H212.129ZM212.219 36.9481H240.941C240.67 30.0661 235.685 23.1821 226.897 23.1821C219.649 23.1821 212.943 27.1681 212.219 36.9481Z" fill="#E63E3A"/>
            <path id="Path 215" d="M298.024 33.2361H289.688C288.51 27.4361 283.527 23.3651 277.094 23.3651C269.846 23.3651 263.05 29.0651 263.05 41.2951C263.05 53.6101 269.846 59.5871 277.094 59.5871C280.043 59.6661 282.931 58.7415 285.285 56.9647C287.639 55.188 289.319 52.6645 290.05 49.8081H298.569C296.848 58.9551 288.24 66.8351 276.823 66.8351C262.778 66.8351 254.08 56.2351 254.08 41.3861C254.08 26.8971 263.231 16.1201 277.639 16.1201C282.538 16.0074 287.31 17.6832 291.063 20.8337C294.815 23.9842 297.29 28.3934 298.024 33.2361Z" fill="#E63E3A"/>
            <path id="Path 216" d="M307.992 4.70898H316.236V16.936H325.478V23.545H316.236V52.435C316.236 57.505 316.598 58.773 321.309 58.773H325.478V65.657H319.498C310.166 65.657 307.992 63.574 307.992 53.433V23.545H300.288V16.936H307.992V4.70898Z" fill="#E63E3A"/>
          </g>
          <g id="Group 93">
            <path id="Path 217" d="M89.6151 112.074C89.6151 123.94 84.2704 134.351 71.6758 136.974V128.008C79.1957 125.835 81.8241 118.228 81.8241 111.708C81.8241 106.637 79.5579 97.7599 72.2191 97.7599C66.4161 97.7599 63.5206 102.289 62.1619 108.449L60.44 116.055C58.2648 126.106 54.4598 138.155 41.23 138.155C28.4543 138.155 21.5677 126.201 21.5677 113.162C21.5677 97.6758 30.0852 87.8939 43.132 86.1729V95.2289C34.0712 96.9499 29.3588 103.2 29.3588 113.341C29.3588 123.121 33.8892 128.648 40.4136 128.648C47.3902 128.648 50.1086 122.669 52.0116 114.517L53.7335 106.367C55.7265 97.3129 60.8012 88.3459 71.6728 88.3459C84.2704 88.3469 89.6151 101.479 89.6151 112.074Z" fill="#E63E3A"/>
            <path id="Path 218" d="M83.7251 148.843V157.085H71.4937V166.32H64.8793V157.085H35.9762C30.9016 157.085 29.634 157.447 29.634 162.156V166.32H22.7474V160.344C22.7474 151.017 24.8314 148.844 34.9797 148.844H64.8803V141.144H71.4947V148.844L83.7251 148.843Z" fill="#E63E3A"/>
            <path id="Path 219" d="M29.724 203.813C25.1026 201.006 21.5697 196.568 21.5697 188.513C21.5697 177.283 29.1807 172.936 40.3255 172.936H71.4937V181.177H42.7718C35.2509 181.177 28.7274 182.353 28.7274 191.41C28.7274 199.29 34.1643 203.817 44.6747 203.817H71.4937V212.058H22.7513V203.817L29.724 203.813Z" fill="#E63E3A"/>
            <path id="Path 220" d="M88.4375 256.248V264.489H22.7513V256.248H30.0912C24.9265 253.26 21.5737 248.188 21.5737 240.309C21.5737 229.082 30.7245 219.482 46.943 219.482C62.8893 219.482 72.3121 229.082 72.3121 240.309C72.3121 248.188 68.9604 253.26 63.7947 256.248H88.4375ZM65.2415 242.391C65.2415 233.971 58.628 228.446 46.9389 228.446C35.2498 228.446 28.6364 233.97 28.6364 242.391C28.6364 249.727 34.0722 256.609 46.9389 256.609C59.8056 256.609 65.2415 249.727 65.2415 242.39V242.391Z" fill="#E63E3A"/>
            <path id="Path 221" d="M71.4937 283.508H22.7463V275.269H71.4937V283.508ZM88.4375 283.508H78.4704V275.269H88.4375V283.508Z" fill="#E63E3A"/>
            <path id="Path 222" d="M46.9389 337.842C29.2707 337.842 21.5697 325.797 21.5697 314.476C21.5697 303.155 29.2737 291.111 46.9389 291.111C64.6041 291.111 72.3082 303.156 72.3082 314.476C72.3082 325.796 64.6081 337.842 46.9389 337.842ZM28.8175 314.476C28.8175 321.995 34.4354 329.056 46.9389 329.056C59.9867 329.056 65.0613 321.994 65.0613 314.476C65.0613 306.958 60.2589 299.897 46.9389 299.897C33.8921 299.899 28.8175 306.964 28.8175 314.479V314.476Z" fill="#E63E3A"/>
          </g>
          <g id="Group 94">
            <path id="Path 223" d="M0.010437 77.9658H10.4308V88.3808H0.010437V77.9658Z" fill="#E63E3A"/>
          </g>
        </g>
      </svg>

      <p class="home-main_text red-text">Digital Marketing Agency</p>
    </section>

    <AppHeader/>

    <section class="home-growing">
      <div class="container">
        <ScrollRevealText class="home-growing_title" textProp="Growing"></ScrollRevealText>
        <ScrollRevealText class="home-growing_title" textProp="businesses by"></ScrollRevealText>
        <ScrollRevealText class="home-growing_title" textProp="building"></ScrollRevealText>
        <ScrollRevealText class="home-growing_title" textProp="relationships"></ScrollRevealText>
        <p class="home-growing_text">
          B2B Marketing & LinkedIn Lead Generation agency

        </p>
      </div>
    </section>
    <section class="home-chart">
      <div class="container">
        <ScrollRevealText class="home-chart_title" textProp="Consistent leads flow to streamline"></ScrollRevealText>
        <ScrollRevealText class="home-chart_title" textProp="Your business growth."></ScrollRevealText>
        <p class="home-chart_text">We combine disruptive marketing techniques with proven<br>tech solutions to provide maximum business value. </p>
        <div class="home-chart_vertical red-text js_animate">
          <div class="home-chart_vertical-item home-chart_vertical-item-1 hide">
            <p class="home-chart_vertical-value">27</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-2 hide">
            <p class="home-chart_vertical-value">53</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-3 hide">
            <p class="home-chart_vertical-value">61</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-4 hide">
            <p class="home-chart_vertical-value">58</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-5 hide">
            <p class="home-chart_vertical-value">30</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-6 hide">
            <p class="home-chart_vertical-value">45</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-7 hide">
            <p class="home-chart_vertical-value">55</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-8 hide">
            <p class="home-chart_vertical-value">63</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-9 hide">
            <p class="home-chart_vertical-value">71</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-10 hide">
            <p class="home-chart_vertical-value">76</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-11 hide">
            <p class="home-chart_vertical-value">67</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-12 hide">
            <p class="home-chart_vertical-value">88</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-13 hide">
            <p class="home-chart_vertical-value">78</p>
          </div>
          <div class="home-chart_vertical-item home-chart_vertical-item-14 hide">
            <p class="home-chart_vertical-value">90</p>
          </div>
        </div>
        <div class="home-chart_horizontal red-text js_animate">
          <div class="home-chart_horizontal-item home-chart_horizontal-1">
            <p class="home-chart_horizontal-text">Revenue generated <br>for clients</p>
            <p class="home-chart_horizontal-number">1570</p>
          </div>
          <div class="home-chart_horizontal-item home-chart_horizontal-2">
            <p class="home-chart_horizontal-text">Conversationd<br>opened</p>
            <p class="home-chart_horizontal-number">1200</p>
          </div>
          <div class="home-chart_horizontal-item home-chart_horizontal-3">
            <p class="home-chart_horizontal-text">Leads generated <br>via targeted</p>
            <p class="home-chart_horizontal-number">378</p>
          </div>
          <div class="home-chart_horizontal-item home-chart_horizontal-4">
            <p class="home-chart_horizontal-text">Calls scheduled <br>for clients</p>
            <p class="home-chart_horizontal-number">197</p>
          </div>
        </div>
      </div>
    </section>
    <section class="home-trust js_animate">
      <div class="container">
        <div class="home-trust_head red-text">
          <ScrollRevealText class="home-trust_head-title" textProp="Trusted long-term partner"></ScrollRevealText>
          <p class="home-trust_head-text">For leading B2B tech and<br>service companies </p>
        </div>
        <p class="home-trust_text red-text">We combine disruptive marketing techniques with proven tech solutions to provide maximum business value.</p>
        <div class="home-trust_inner">
          <div class="home-trust_methods home-trust_b2b"
               :class="{ active: selected === 'b2b' }"
               @click="toggleMethod('b2b')"
          >
            <p class="home-trust_methods-number">1</p>
            <h3 class="home-trust_methods-name">B2B Marketing</h3>
            <p class="home-trust_methods-text">Your solution is of high value and great quality, but you have a hard time attracting the right audience? Wish to work with specific clients but can't cut through the noise of a saturated market? Or simply looking to advance your growth efforts?</p>
            <p class="home-trust_methods-text">That's the challenge for real B2B marketing pros. Having a perfect knowledge of the digital landscape, we will help you identify the lowest hanging fruits before you spend a fortune on marketing campaigns. While you make good use of the results, we work on a sustainable strategy to scale your business in the long run. </p>
            <div class="home-trust_methods-row">
              <svg class="home-trust_methods-icon">
                <use :xlink:href="`${sprite}#trustMethodsB2B`"></use>
              </svg>
              <a href="javascript:;" class="home-trust_methods-btn base_btn red-text">
                <svg class="base_btn-arrow home-trust_methods-btn-arrow">
                  <use :xlink:href="`${sprite}#arrowForButton`"></use>
                </svg>
                Learn more
              </a>
            </div>
          </div>
          <div class="home-trust_methods home-trust_linkedIn"
               :class="{ active: selected === 'linkedIn' }"
               @click="toggleMethod('linkedIn')"
          >
            <p class="home-trust_methods-number">2</p>
            <h3 class="home-trust_methods-name">LinkedIn Lead Generation</h3>
            <p class="home-trust_methods-text">Your business is all set up and now feel ready to expand your client list? You understand your ideal client and how your product can solve their problems?</p>
            <p class="home-trust_methods-text">That's when we come in with the comprehensive lead generation campaign to employ your sales team with more deals? Like experienced detectives, we will search for the prospects who drive the most value for your business. ext step? We make them talk to you. Unlike most salesy outreaches, our customized campaign is focused on building long-term relationships. Your sales team will love it.hv</p>
            <div class="home-trust_methods-row">
              <svg class="home-trust_methods-icon">
                <use :xlink:href="`${sprite}#trustMethodsLinkedIn`"></use>
              </svg>
              <a href="javascript:;" class="home-trust_methods-btn base_btn red-text">
                <svg class="base_btn-arrow home-trust_methods-btn-arrow">
                  <use :xlink:href="`${sprite}#arrowForButton`"></use>
                </svg>
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .is-loading .home-main_slider{
    transform: translateY(100px);
  }
  .home-main {
    height: calc(100vh - 81px);
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    background: #D3D3D3;
  }
  .home-main_slider {
    height: 100%;
    min-height: 384px;
    z-index: -1;
    transform: translateY(0);
    transition: transform .8s ease-out;
  }

  .home-main_slider-item img {
    object-fit: cover;

  }
  .home-main_logo {
    max-width: 325px;
    width: 100%;
    height: 338px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .home-main_text {
    text-align: right;
    top: 20px;
    right: 20px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    font: 400 18px/20px "Suisse Int'l", sans-serif;
    position: absolute;
    max-width: 140px;
  }


  .home-growing {
    height: calc(100vh - 91px);
    background: #e63e3a;
    min-height: 820px;
    max-height: 1024px;
    padding: 100px 0 0;
  }
  .home-growing_title {
    text-align: right;
    max-width: 900px;
    font: 400 135px/135px "Suisse Int'l", sans-serif;
    margin: 0 0 0 auto;
  }
  .home-growing_text {
    max-width: 318px;
    margin: 100px 0 0;
  }


  .home-chart {
    background: #fff;
    padding: 100px 0;
    overflow: hidden;
  }
  .home-chart_title {
    font: 400 82px/80px "Suisse Int'l", sans-serif;
  }
  .home-chart_text {
    opacity: 0;
    margin: 40px 0 -100px;
    transition: opacity 1s linear;
  }
  .animate .home-chart_text {
    opacity: 1;
  }
  .home-chart_vertical {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1px;
    height: 680px;
    margin: 0 auto 10px;
  }
  .home-chart_vertical-item {
    background: #e63e3a;
    position: relative;
    width: 100%;
    height: 2px;
    transition: height 1.5s ease-out;
  }
  .animate .home-chart_vertical-item-1 {
    height: 171px;
  }
  .animate .home-chart_vertical-item-2 {
    height: 266px;
  }
  .animate .home-chart_vertical-item-3 {
    height: 341px;
  }
  .animate .home-chart_vertical-item-4 {
    height: 305px;
  }
  .animate .home-chart_vertical-item-5 {
    height: 194px;
  }
  .animate .home-chart_vertical-item-6 {
    height: 266px;
  }
  .animate .home-chart_vertical-item-7 {
    height: 341px;
  }
  .animate .home-chart_vertical-item-8 {
    height: 423px;
  }
  .animate .home-chart_vertical-item-9 {
    height: 305px;
  }
  .animate .home-chart_vertical-item-10 {
    height: 407px;
  }
  .animate .home-chart_vertical-item-11 {
    height: 509px;
  }
  .animate .home-chart_vertical-item-12 {
    height: 597px;
  }
  .animate .home-chart_vertical-item-13 {
    height: 445px;
  }
  .animate .home-chart_vertical-item-14 {
    height: 680px;
  }
  .home-chart_vertical-value {
    position: absolute;
    top: -28px;
    left: 50%;
    transform: translateX(-50%);
    font: 400 15px/18px "Suisse Int'l", sans-serif;
  }
  .home-chart_horizontal-item {
    /*background: #101820;*/
    width: 100%;
    height: 93px;
    gap: 20px;
    display: flex;
    align-items: center;
    margin: 0 0 2px auto;
    /*max-width: 0;*/
    /*transition: max-width 1.5s ease-out;*/
    position: relative;
    z-index: 2;
  }
  .home-chart_horizontal-item:before {
    content: '';
    background: #101820;
    height: 93px;
    position: absolute;
    left: 0;
    width: 0;
    z-index: -1;
    transform: rotate(360deg);
    transition: width 1s ease-out;
  }
  .animate .home-chart_horizontal-item:before {
    width: 100%;
  }
  .home-chart_horizontal-item-3:before {
    transition: max-width 1.2s ease-out;
  }
  .home-chart_horizontal-item-4:before {
    transition: max-width 1.5s ease-out;
  }
  .home-chart_horizontal-1 {
    padding: 0 40px 0 0;
    justify-content: flex-end;
  }
  .home-chart_horizontal-2 {
    max-width: 1115px;
    padding: 0 20px 0 146px;
  }
  .home-chart_horizontal-3 {
    padding: 0 20px 0 120px;
  }
  .home-chart_horizontal-4 {
    transition: max-width 2s ease-out;
  }
  .home-chart_horizontal-4 {
    max-width: 823px;
    padding: 0 20px 0 170px;
    margin: 0 0 0 auto;
  }
  .home-chart_horizontal-item > * {
    opacity: 0;
    transform: translateX(-15px);
    transition: all 0.8s ease-out 0.8s;
  }
  .animate .home-chart_horizontal-item > * {
    opacity: 1;
    transform: translateX(0);
  }
  .home-chart_horizontal-text {
    text-align: right;
  }
  .home-chart_horizontal-number {
    font: 400 70px/70px "Suisse Int'l", sans-serif;
  }


  .home-trust {
    background: #fff;
    overflow: hidden;
  }
  .home-trust_head:before,
  .home-trust_head:after {
    content: '';
    position: absolute;
    width: 0;
    left: 0;
    border-top: thin solid #e63e3a;
    transition: width 2s linear;
  }
  .home-trust_head:before {
    top: 0;
  }
  .home-trust_head:after {
    bottom: 0;
  }
  .animate .home-trust_head:before,
  .animate .home-trust_head:after {
    width: 100%;
  }
  .home-trust_head {
    padding: 15px 0 30px;
    text-align: right;
    margin: 0 0 50px;
    position: relative;
  }
  .home-trust_head-title {
    margin: 0 0 30px;
    font: 400 112px/112px "Suisse Int'l", sans-serif;
  }
  .home-trust_head-text {
    opacity: 0;
    transition: opacity 1s ease;
    font: 400 38px/42px "Suisse Int'l", sans-serif;
  }
  .home-trust_text {
    opacity: 0;
    transition: opacity 1s ease;
  }
  .animate .home-trust_head-text,
  .animate .home-trust_text{
    opacity: 1;
  }

  .home-trust_inner {
    position: relative;
    margin: 20px 0 0;
    overflow-x: hidden;
    opacity: 0;
    transition: opacity 1s ease-out 1s;
  }
  .animate .home-trust_inner {
    opacity: 1;
  }
  .home-trust_methods {
    color: #5D646B;
    padding: 45px 80px 45px 40px;
    display: flex;
    flex-direction: column;
    min-height: 650px;
    width: 70%;
    transition: all 1s ease-in-out;
  }
  .home-trust_methods.active {
    color: #fff;
    transition: all 1s ease-in-out;
  }
  .home-trust_b2b {
    background: #E63E3A;
  }
  .home-trust_linkedIn {
    background: #101820;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(55%);
  }
  .home-trust_linkedIn.active {
    transform: translateX(0);
  }
  .home-trust_methods-number {
    margin: 0 0 20px;
  }
  .home-trust_methods-name {
    font: 400 60px/60px "Suisse Int'l", sans-serif;
    margin: 0 0 70px;
  }
  .home-trust_methods-text {
    margin: 0 0 35px;
    max-width: 1015px;
  }
  .home-trust_methods-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: auto 0 0;
  }
  .home-trust_methods path {
    fill: #5D646B;
    stroke: #5D646B;
  }
  .home-trust_methods.active path {
    fill: #fff;
    stroke: #fff;
  }
  .home-trust_methods-icon {
    width: 84px;
    height: 84px;
  }
  .home-trust_methods-btn {
    max-width: 235px;
    padding: 0 30px 0 10px;
  }
  .home-trust_methods-btn-arrow {
    margin: 0 auto 0 0;
  }
  .home-trust_linkedIn.active .home-trust_methods-btn {
    background: #E63E3A;
    color: #101820;
  }
  .home-trust_linkedIn.active .home-trust_methods-btn-arrow {
    fill: #101820;
  }


</style>

<script setup>
  import { onMounted, ref } from 'vue';
  import AppHeader from './AppHeader.vue';
  import SitePreloader from './SitePreloader.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, EffectFade } from 'swiper/modules';
  import 'swiper/swiper-bundle.css';
  import sprite from '@/sprite.svg';
  import ScrollRevealText from '@/components/ScrollRevealText.vue';
  import { gsap } from 'gsap';

  const modules = [Autoplay, EffectFade];
  const images = [1, 2, 3, 4];

  const selected = ref('b2b');

  const toggleMethod = (method) => {
    if (selected.value === method) {
      return;
    }
    selected.value = method;
  };

  onMounted(() => {

    const elements = document.querySelectorAll('.js_animate');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          gsap.to(entry.target, {
            onComplete: () => {
              entry.target.classList.add('animate');
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px" });

    elements.forEach(element => {
      observer.observe(element);
    });
  });




</script>