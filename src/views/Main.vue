<template>
  <section class="main">
    <div class="container grid">
      <div class="links">
        <div>
          <div class="photo">
            <img src="@/assets/images/greshilov.jpg" />
          </div>
          <div class="soc text-center">
            <a v-for="s in socialProfiles" :href="s.link" :key="s.media">
              <font-awesome-icon
                :icon="['fab', s.media]"
                :style="{ color: s.color }"
              />
            </a>
          </div>
          <div class="soc-mail">
            <a :href="`mailto:${mail}`"><font-awesome-icon icon="envelope" /></a
            ><span>{{ mail }}</span>
          </div>
        </div>
      </div>
      <div class="description">
        <h2>About</h2>
        <p>
          Hey! My name is Slava. I studied a plasma engineering specialty in
          <a
            href="https://en.wikipedia.org/wiki/Bauman_Moscow_State_Technical_University"
            >BMSTU</a
          >, but suddenly became a software developer. I'm currently focused on
          a backend, but generally love web development in all its forms.
        </p>
        <p>
          I spend my spare time on learning new technologies and contributing to
          the open-source projects. You can find my commits in projects like
          <a href="https://github.com/aio-libs/aiohttp/pull/5298">aiohttp</a>
          and
          <a href="https://github.com/verdaccio/verdaccio/pull/2072"
            >verdaccio</a
          >. Check out my last project using rust and webassembly
          <a href="https://reds.greshilov.me">rust-event-driven-simulation</a>!
        </p>
        <p>
          I'm convinced gnu / linux user, my everyday OS is ArchLinux. Favourite
          server OS is Debian.
        </p>

        <h2>Career</h2>
        <div>
          The places I've worked:
          <ul class="job">
            <li v-for="j in jobs" :key="j.icon">
              <div class="job-title">
                <a :href="j.link">
                  <img
                    class="job-icon"
                    :src="require(`@/assets/images/${j.icon}`)" /></a
                >{{ j.title }}
              </div>
              <div class="job-description" v-html="j.description"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Main extends Vue {
  mail = "slovaricheg@gmail.com";

  socialProfiles = [
    { media: "github", link: "https://github.com/greshilov", color: "#24292e" },
    {
      media: "linkedin-in",
      link: "https://www.linkedin.com/in/greshilov/",
      color: "#3b5998",
    },
    {
      media: "facebook",
      link: "https://www.facebook.com/Greshilov",
      color: "#0072b1",
    },
  ];

  jobs = [
    {
      icon: "mapsme.svg",
      title: "Maps.Me Offline maps for travellers #1",
      description:
        "<i>Automation Engeneer</i> — CI, development of internal automatization tools & services.",
      link: "https://maps.me/app/",
    },
    {
      icon: "gosu.jpg",
      title: "GOSU.AI Voice assistant platform for gamers",
      description:
        "<i>Backend / Full-stack Developer</i> — backend for the advanced game voice assistant application, steam bot service with 10k+ users online.",
      link: "https://gosu.ai/",
    },
  ];
}
</script>

<style lang="scss">
section.main {
  margin: 40px 0 40px;

  .links {
    display: flex;
    align-items: center;
    justify-content: center;

    border-right: 1px solid #24292e;

    .soc {
      font-size: 24px;

      a {
        text-decoration: none;
        padding: 5px;
      }
    }
    .soc-mail {
      a {
        padding: 5px;
        color: black;
      }

      span {
        font-size: 18px;
      }

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .grid {
    grid-template-columns: 1fr 3fr;
    grid-gap: 1em;
  }

  .photo img {
    max-width: 250px;
    border-radius: 10px;
  }

  .description {
    ul.job {
      list-style-type: none;

      li {
        padding: 10px;

        .job-title {
          display: flex;
          align-items: center;
        }

        .job-description {
          font-size: 18px;
          padding-left: 50px;
        }

        .job-icon {
          width: 40px;
          margin-right: 10px;
        }
      }
    }
  }

  @media only screen and (max-width: 1260px) {
    .grid {
      grid-template-columns: 1fr;
    }

    .links {
      border-right: none;

      .soc {
        font-size: 36px;

        a {
          padding: 10px;
        }
      }
    }

    .description {
      ul.job {
        padding-left: 0;
      }
    }
  }
}
</style>
