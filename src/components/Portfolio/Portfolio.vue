
<template>
  <div id="portfolio">
    <section id="profile" class="section">
      <div class="col-4">
        <img src="../../assets/img/avatar.jpg" alt="my avatar" class="img2-1">
        <a href="#" class="link2-1">
          <font-awesome-icon :icon="['fas', 'cloud-download-alt']" />
          <span class="lbl2-1">Download CV</span>
        </a>
        <div class="lbl2-2">
          <font-awesome-icon :icon="['fas', 'check']" />
          <span class="lbl2-2b">available on freelance and photography</span>
        </div>
      </div>
      <div class="col-8">
        <h2 class="lbl2-3">
          <span class="lbl2-3b">Hi, I'm </span>Trinh Quoc Thinh</h2>
        <h3 class="lbl2-4">web developer & web designer</h3>
        <p class="lbl2-5">Hello! I’m Trinh Quoc Thinh. Web Developer with over 2.5 years of experience. Experienced with all stages of the
          development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript,
          jQuery, VueJS, knowledge AngularJS, Angular 4. Strong background in management and leadership.</p>
        <ul class="lst2-1">
          <li class="item2-1">
            <span class="lbl2-6">D.O.B</span>
            <span class="lbl2-6">14/08/1992</span>
          </li>
          <li class="item2-1">
            <span class="lbl2-6">Phone</span>
            <a href="tel:0973001429" class="lbl2-6">0973.001.429</a>
          </li>
          <li class="item2-1">
            <span class="lbl2-6">Address</span>
            <span class="lbl2-6">1052/2 Lạc Long Quân Q.Tân Bình</span>
          </li>
          <li class="item2-1">
            <span class="lbl2-6">Email</span>
            <a href="mailto:koolmaster1408@gmail.com" class="lbl2-6">koolmaster1408@gmail.com</a>
          </li>
          <li class="item2-1">
            <span class="lbl2-6">Webside</span>
            <a href="#" class="lbl2-6">www.koolmaster.com</a>
          </li>
          <li class="item2-1">
            <span class="lbl2-6">Nationality</span>
            <span class="lbl2-6">Viet Nam</span>
          </li>
        </ul>
        <p class="lbl2-7">Social Link</p>
        <ul class="lst-social">
          <li class="item-social">
            <a href="https://www.facebook.com/trinh.q.thinh" class="link2-2" data-tootik="Facebook" data-tootik-conf="square">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
          </li>
          <li class="item-social">
            <a href="https://plus.google.com/105835375917188733153?hl=vi" class="link2-2" data-tootik="Google +" data-tootik-conf="square">
              <font-awesome-icon :icon="['fab', 'google-plus-g']" />
            </a>
          </li>
          <li class="item-social">
            <a href="https://www.instagram.com/koolmaster1408/" class="link2-2" data-tootik="Instagram" data-tootik-conf="square">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </li>
          <li class="item-social">
            <a href="#" class="link2-2" data-tootik="Linkedin" data-tootik-conf="square">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
          </li>
          <li class="item-social">
            <a href="#" class="link2-2" data-tootik="Skype" data-tootik-conf="square">
              <font-awesome-icon :icon="['fab', 'skype']" />
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section id="Experience">
      <h2 class="lbl2-8">Experience</h2>
      <div class="timeline">
        <div class="line-header"><font-awesome-icon :icon="['fas', 'briefcase']" /></div>
        <ul class="tree">
          <li class="branch">
            <span class="branch-time">July 2017 - Current</span>
            <h3 class="branch-job">Front-End Developer and Web Designer</h3>
            <p class="branch-company">FPT Infomation System</p>
            <p class="branch-des">
              Lorem ipsum dolor sit amet, consectetur adipisci ng elit. In semper lacus tortor, quis bibendum odio mattis vitae. Cras porta
              massa pretium auctor congue. Suspendisse ante massa, euismod sit amet sem sed, viverra tristique diam.
            </p>
          </li>
          <li class="branch">
            <span class="branch-time">Jan 2015 - Current</span>
            <h3 class="branch-job">Wordpress Developer</h3>
            <p class="branch-company">Haravan</p>
            <p class="branch-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper lacus tortor, quis bibendum odio mattis vitae. Cras porta
              massa pretium auctor congue. Suspendisse ante massa, euismod sit amet sem sed, viverra tristique diam.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section id="skill">
      <h2 class="lbl2-8">Skill</h2>
      <div class="wrapper">
        <div class="professtional col-5">
          <h3 class="title2-1">PROFESSIONAL SKILLS</h3>
          <ul class="lst-skill">
            <li class="items-skill">
              <p class="title-skill">
                <span class="lbl2-9">Html & Css & Sass</span>
                <span class="lbl2-9">95%</span>
              </p>
              <p class="process">
                <span class="process-bar" style="width: 95%"></span>
              </p>
            </li>
            <li class="items-skill">
              <p class="title-skill">
                <span class="lbl2-9">Jquery</span>
                <span class="lbl2-9">90%</span>
              </p>
              <p class="process">
                <span class="process-bar" style="width: 90%"></span>
              </p>
            </li>
            <li class="items-skill">
              <p class="title-skill">
                <span class="lbl2-9">VueJS</span>
                <span class="lbl2-9">80%</span>
              </p>
              <p class="process">
                <span class="process-bar" style="width: 80%"></span>
              </p>
            </li>
            <li class="items-skill">
              <p class="title-skill">
                <span class="lbl2-9">AngularJS & Angular 2</span>
                <span class="lbl2-9">60%</span>
              </p>
              <p class="process">
                <span class="process-bar" style="width: 60%"></span>
              </p>
            </li>
            <li class="items-skill">
              <p class="title-skill">
                <span class="lbl2-9">Photoshop</span>
                <span class="lbl2-9">90%</span>
              </p>
              <p class="process">
                <span class="process-bar" style="width: 90%"></span>
              </p>
            </li>
          </ul>
        </div>
        <div class="additional col-7">
          <h3 class="title2-1">ADDITIONAL SKILLS</h3>
          <div class="chart">
            <div class="circle">
              <div class="percentage">45%</div>    
              <vue-easy-pie-chart :percent="45" bar-color=#747474 animate=true font-size=0 scale-color=#fff line-cap=spuare line-width=8 track-color=#fff></vue-easy-pie-chart>
              <div class="lbl2-10">English</div>
            </div>
            <div class="circle">
              <div class="percentage">85%</div>    
              <vue-easy-pie-chart :percent="85" bar-color=#747474 animate=true font-size=0 scale-color=#fff line-cap=spuare line-width=8 track-color=#fff ></vue-easy-pie-chart>
              <div class="lbl2-10">Creativity</div>
            </div>
            <div class="circle">
              <div class="percentage">78%</div>    
              <vue-easy-pie-chart :percent="78" bar-color=#747474 animate=true font-size=0 scale-color=#fff line-cap=spuare line-width=8 track-color=#fff ></vue-easy-pie-chart>
              <div class="lbl2-10">Teamwork</div>
            </div>
          </div>
         <ul class="lst-skill">
           <li class="skill-item">
             <font-awesome-icon :icon="['far', 'check-circle']" />
             <span class="lbl2-10">Photography</span>
           </li>
           <li class="skill-item">
             <font-awesome-icon :icon="['far', 'check-circle']" />
             <span class="lbl2-10">Blend & Retouch</span>
           </li>
           <li class="skill-item">
             <font-awesome-icon :icon="['far', 'check-circle']" />
             <span class="lbl2-10">Mobile App & Web Design</span>
           </li>
           <li class="skill-item">
             <font-awesome-icon :icon="['far', 'check-circle']" />
             <span class="lbl2-10">UX and UI Design</span>
           </li>
         </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
@import "portfolio.scss";
</style> 
<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import VueEasyPieChart from "vue-easy-pie-chart";
import "vue-easy-pie-chart/dist/vue-easy-pie-chart.css";

export default {
  name: "portfolio",
  components: {
    FontAwesomeIcon,
    VueEasyPieChart
  },
  data() {
    return {};
  }
};
</script>
<style type="text/scss" lang="scss">
@import "portfolio.scss";
</style> 