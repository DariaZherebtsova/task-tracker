<template>
  <div class="video-header">
    <div class="video-header__select-wrapper">
      <div class="video-header__select">
        <button
          class="video-header__select-btn"
          @click="toggleSelectSeasons"
        >
          <span>сезон {{ currentSeason?.number }}</span>
          <SvgIcon
            icon="arrow-down"
            :class="[
              'video-header__select-icon',
              { 'video-header__select-icon--up': isOpenedSeason },
            ]"
          />
        </button>
        <ul
          v-if="isOpenedSeason"
          class="video-header__select-list"
        >
          <li
            v-for="season in items"
            :key="season.number"
            :class="[
              'video-header__select-item',
              {
                'video-header__select-item--current':
                  season.number === currentSeason?.number,
              },
            ]"
            @click="changeSeason(season.number)"
          >
            <span>сезон {{ season.number }}</span>
          </li>
        </ul>
      </div>
      <div class="video-header__select">
        <button
          @click="toggleSelectEpisode"
          class="video-header__select-btn"
        >
          <span>эпизод {{ currentEpisode?.number }}</span>
          <SvgIcon
            icon="arrow-down"
            :class="[
              'video-header__select-icon',
              { 'video-header__select-icon--up': isOpenedEpisode },
            ]"
          />
        </button>
        <ul
          v-if="isOpenedEpisode"
          class="video-header__select-list"
        >
          <li
            v-for="episode in currentSeason?.episodes"
            :key="episode.number"
            :class="[
              'video-header__select-item',
              {
                'video-header__select-item--current':
                  episode.number === currentEpisode?.number,
              },
            ]"
            @click="changeEpisode(episode.number)"
          >
            <span>эпизод {{ episode.number }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { SeriesEpisode, SeriesSeason } from '@/types/types';
import SvgIcon from '@/components/common/SvgIcon.vue';

const props = defineProps<{
  items: Array<any>;
}>();

const currentSeason = ref<SeriesSeason | null>(null);
const currentEpisode = ref<SeriesEpisode | null>(null);
const isOpenedSeason = ref(false);
const isOpenedEpisode = ref(false);

const toggleSelectSeasons = () => {
  isOpenedSeason.value = !isOpenedSeason.value;
};

const toggleSelectEpisode = () => {
  isOpenedEpisode.value = !isOpenedEpisode.value;
};

const changeSeason = (number: number) => {
  const findSeason = props.items.find((item) => item.number === number);
  if (findSeason) {
    currentSeason.value = findSeason;
    isOpenedSeason.value = false;
    changeEpisode(1);
  }
};

const changeEpisode = (number: number) => {
  const findEpisode = currentSeason.value?.episodes.find(
    (item) => item.number === number
  );
  if (findEpisode) {
    currentEpisode.value = findEpisode;
    // emit('change', currentEpisode.value);
    isOpenedSeason.value = false;
    // videoStore.$patch({
    //   season: currentSeason.value?.number ? currentSeason.value.number : 0,
    //   episode: currentEpisode.value.number,
    // });
    isOpenedEpisode.value = false;
  }
};
</script>

<style lang="scss">
.video-header {
  width: 300px;
  height: 300px;
  background-color: var(--grey-blue);
  &__select {
    position: relative;
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    fill: var(--white);
    @include text(3);

    &-btn {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: baseline;
      margin: 0;
      padding: 6px 15px 6px 12px;
      border: none;
      background: transparent;
      color: var(--white);
      fill: var(--white);
      @include text(3);
      cursor: pointer;
    }
    &-icon {
      width: 9px;
      height: 5px;
      &--up {
        transform: rotate(180deg);
      }
    }
    &-list {
      position: absolute;
      top: 30px;
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
      max-height: 140px;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.1);
      @include tablet {
        max-height: 390px;
      }
      &::-webkit-scrollbar {
        width: 3px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
    &-item {
      width: 100%;
      padding: 6px 15px 6px 12px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      appearance: none;
      cursor: pointer;
      &--current {
        color: var(--grey-dark-3);
      }
      &:hover {
        opacity: 0.8;
      }
    }
    &-wrapper {
      position: absolute;
      display: flex;
      width: 250px;
      justify-content: space-between;
      top: 20px;
      left: 20px;
      z-index: 1;
      &--ios {
        top: 5px;
        left: 80px;
        .video-header__select-btn {
          background: black;
        }
        .video-header__select-item {
          background: black;
        }
      }
    }
  }
  &__next {
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 10px;
    color: var(--white);
    pointer-events: none;
    @include centering;
    @include text(3);
    @include tablet {
      @include heading(3);
    }
    &-circle {
      pointer-events: auto;
      margin-top: 5px;
      position: relative;
      height: 40px;
      width: 40px;
      background: conic-gradient(var(--red) 0deg, white 0deg);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 1s ease-in;
      @include tablet {
        margin-top: 20px;
        height: 150px;
        width: 150px;
      }
      &:before {
        content: '';
        position: absolute;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        background-color: black;
        @include tablet {
          height: 130px;
          width: 130px;
        }
      }
    }
    &-play {
      position: relative;
      background: black;
      border: none;
      padding: 0;
      margin: 0;
      svg {
        width: 15px;
        height: 15px;
        fill: var(--white);
        &:hover {
          opacity: 0.8;
        }
        @include tablet {
          width: 30px;
          height: 30px;
        }
      }
    }
    &-close {
      pointer-events: auto;
      width: 50px;
      margin-top: 5px;
      @include primaryButton;
      height: 20px;
      @include text(4);
      @include tablet {
        margin-top: 20px;
        @include text(2);
        width: 100px;
        height: 50px;
      }
    }
    &--ios {
      top: 18.75%;
      height: 62.5%;
      min-height: 300px;
    }
  }
}
</style>
