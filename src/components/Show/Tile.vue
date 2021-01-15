<template>
  <div id="wrapper">
    <div id="cover">
      <div
        id="image"
        :style="{
          background: `linear-gradient(180deg, rgba(25, 25, 38, 0.0001) 42.31%, #191926 87.5%), url('${item.show.image.medium}')`,
        }"
      />
      <div id="genres">
        <span v-for="(genre, index) in item.show.genres" :key="`genre-${index}`"
          >{{ genre }}
        </span>
      </div>
    </div>
    <div id="footer">
      <span id="title">{{ item.show.name }}</span>
      <span id="channel">{{ item.show.network.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {},
  data() {
    return {
      item: {
        score: 18.999313,
        show: {
          id: 431,
          url: "http://www.tvmaze.com/shows/431/friends",
          name: "Friends",
          type: "Scripted",
          language: "English",
          genres: ["Comedy", "Romance"],
          status: "Ended",
          runtime: 30,
          premiered: "1994-09-22",
          officialSite: null,
          schedule: {
            time: "20:00",
            days: ["Thursday"],
          },
          rating: {
            average: 8.7,
          },
          weight: 94,
          network: {
            id: 1,
            name: "NBC",
            country: {
              name: "United States",
              code: "US",
              timezone: "America/New_York",
            },
          },
          webChannel: null,
          externals: {
            tvrage: 3616,
            thetvdb: 79168,
            imdb: "tt0108778",
          },
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/41/104550.jpg",
          },
          summary:
            "<p>Six young (20-something) people from New York City (Manhattan), on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.</p><p>This average group of buddies goes through massive mayhem, family trouble, past and future romances, fights, laughs, tears and surprises as they learn what it really means to be a friend.</p>",
          updated: 1608918733,
          _links: {
            self: {
              href: "http://api.tvmaze.com/shows/431",
            },
            previousepisode: {
              href: "http://api.tvmaze.com/episodes/40881",
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
$borderRadius: 8px;

#wrapper {
  display: flex;
  flex-direction: column;

  background: radial-gradient(
    73.32% 73.32% at 23.55% 26.12%,
    rgba(64, 64, 86, 0.546214) 0%,
    rgba(34, 34, 50, 0.55) 100%
  );
  border-radius: $borderRadius;

  #cover {
    position: relative;
    #image {
      width: 13rem;
      max-width: 13rem;
      min-height: 18rem;
      object-fit: cover;
      border-top-left-radius: $borderRadius;
      border-top-right-radius: $borderRadius;
    }
    #genres {
      position: absolute;
      bottom: 6px;
      left: 6px;
      span {
        color: #ff3466;
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
      }
    }
  }

  #footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;

    #title {
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 20px;
      color: #ececec;
    }

    #channel {
      font-style: normal;
      font-weight: 800;
      font-size: 8px;
      line-height: 12px;
      text-transform: uppercase;

      color: #565665;
    }
  }
}
</style>
