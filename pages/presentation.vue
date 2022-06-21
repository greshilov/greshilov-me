<template>
  <div class="container">
    <section id="intro">
      <h2>Intro</h2>
      <p>
        Hey! My name is Slava, and I'm a full stack developer with 5+ years
        experience of building advanced web services and CI/CD pipelines. This
        page is basically an extended online version of my CV :)
      </p>
      <p>
        Here is a
        <a
          target="_blank"
          href="./Viacheslav_Greshilov_-_Software_Engineer.pdf"
        >pdf version</a>
        (just in case).
      </p>
      <div>
        <p>Table of contents:</p>
        <ul>
          <li>
            <a href="#mapsme">MAPS.ME / Software Engineer (2017 - 2018)</a>
          </li>
          <li>
            <a href="#gosuai">GOSU.AI / Software Engineer (2018 - 2021)</a>
          </li>
          <li>
            <a
              href="#gosuai-lead"
            >GOSU.AI / Lead Software Engineer (2021 - )</a>
          </li>
          <li><a href="#education">Education</a></li>
        </ul>
      </div>
    </section>
    <section id="mapsme">
      <h2>MAPS.ME / Software Engineer</h2>
      <hr>
      <p>
        MAPS.ME is a maps application for Android, iOS with 50M+ installs
        worldwide.
      </p>
      <ul>
        <li>
          Improved application build speed on 3 platforms (Android, iOS, Linux)
          up to 25%.
        </li>
        <li>
          Integrated plural strings support in application localization system.
        </li>
        <li>Created UI dashboard for in-house analytic system.</li>
      </ul>

      <div class="gallery grid">
        <ImgDesc
          src="presentation/mapsme-1.png"
          desc="Overview of the application:"
        />
        <ImgDesc
          src="presentation/mapsme-2.png"
          desc="CI dashboard with Jenkins:"
        />
      </div>
    </section>

    <section id="gosuai">
      <h2>GOSU.AI / Software Engineer</h2>
      <hr>
      <p>
        GOSU.AI is a startup that provides tools and guidance for users to
        improve their skills in competitive games. It analyzes their matches and
        makes personal recommendations. I joined this project as a server-side
        developer and progressed to the position of lead developer.
      </p>
      <ul>
        <li>
          Design and architectural decision maker for a backend API (peak 1M
          MAU).
        </li>
        <li>
          Developed a steam bot service with 500k+ users that significantly
          improved audience engagement.
        </li>
        <li>
          Maintained a large scalable data processing system that consumed game
          replays and produced insights and instructions using different ML
          models (avg. rate 100-1000 reports per minute).
        </li>
      </ul>

      <div class="gallery">
        <div class="gallery grid">
          <ImgDesc
            src="presentation/gosu-ai-match-analysis.jpg"
            desc="Post-match report:"
          />
          <ImgDesc
            src="presentation/gosu-ai-match-results.jpg"
            desc="Advices and in-depth analysis:"
          />
        </div>
      </div>
    </section>

    <section id="gosuai-lead">
      <h2>GOSU.AI / Lead Software Engineer</h2>
      <hr>
      <p>
        Project pivoted to become voice assistant (imagine Amazon Alexa that
        helps you during the game). And after a series of investment rounds the
        startup was acquired by a major corporation and grew from 10-20 to
        250-300 people
      </p>
      <ul>
        <li>Led the development of a voice assistant desktop application.</li>
        <li>
          Designed and implemented server-side to provide users with thousands
          of voice commands and responses per minute.
        </li>
      </ul>

      <div class="gallery">
        <div class="gallery grid">
          <ImgDesc
            src="presentation/voice.png"
            desc="Overview of the application:"
          />
          <ImgDesc
            src="presentation/voice-2.png"
            desc="Game overlay with hints and tips during the match:"
          />
        </div>
      </div>
    </section>

    <section id="education">
      <h2>Education</h2>
      <hr>
      <p>
        I have a master's degree in Plasma Engineering specialty. Thesis was
        devoted to techniques for obtaining
        <b>a uniform thickness distribution</b> in pvd coating machines.
      </p>
      <div class="gallery">
        <div class="gallery grid">
          <ImgDesc
            src="presentation/plasma-1.jpg"
            desc="Experiments with PVD Magnetron Sputtering:"
          />
          <ImgDesc
            src="presentation/plasma-2.png"
            desc="An example from the thesis:"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import ImgDesc from '~/components/ImgDesc.vue'

@Component({
  components: { ImgDesc }
})
export default class Presentation extends Vue {}
</script>

<style lang="scss">
section {
  margin-top: 40px;
}

.container {
  padding-bottom: 40px;
}

#intro {
  ul {
    font-size: 22px;
    list-style-type: none;
    font-weight: 600;
  }
}

.gallery {
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}

@media only screen and (max-width: 1260px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>
