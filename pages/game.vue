<template>
  <div class="is-flex is-justify-content-center">
    <section class="section">
      <h1 class="has-text-centered is-size-4-mobile is-size-2-tablet">
        Game Result
      </h1>
      <div
        v-for="(item, index) in gameDatas"
        :key="index"
        class="my-5"
      >
        <p class="has-text-left is-size-7-mobile is-size-5-tablet">
          {{ item.date.format("YYYY/MM/DD ddd") + '@' + item.place }}
        </p>
        <div class="is-flex is-justify-content-center my-5">
          <p class="is-flex is-justify-content-center is-align-items-end">
            <span class="is-size-7-mobile is-size-5-tablet pl-2">
              VS
            </span>
            <span class="has-text-centered width_35vw mx-2 is-size-6-mobile is-size-4-tablet has-text-weight-bold">
              {{ item.opponent }}
            </span>
          </p>
          <p class="is-flex is-justify-content-center is-align-items-center">
            <span
              class="has-text-centered width_10vw mx-2 is-size-6-mobile is-size-4-tablet"
            >
              {{ item.originalPoint }}
            </span>
            <span class="is-size-6-mobile is-size-4-tablet">
              -
            </span>
            <span
              class="has-text-centered width_10vw mx-2 is-size-6-mobile is-size-4-tablet"
            >
              {{ item.opponentPoint }}
            </span>
            <span
              v-if="item.opponentPoint < item.originalPoint"
              class="has-text-centered width_10vw mx-2 is-size-6-mobile is-size-4-tablet"
              :class="{'winner': item.opponentPoint < item.originalPoint, 'loser': item.opponentPoint > item.originalPoint}"
            >
              Win
            </span>
            <span
              v-else
              class="has-text-centered width_10vw mx-2 is-size-6-mobile is-size-4-tablet"
              :class="{'winner': item.opponentPoint < item.originalPoint, 'loser': item.opponentPoint > item.originalPoint}"
            >
              Lose
            </span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'GamePage',
  layout () {
    return 'top'
  },
  data () {
    return {
      // ??????????????????????????????????????????????????????
      gameDatas: [
        {
          date: moment('2022-10-10'),
          place: '??????????????????????????????',
          opponent: 'STAND PLAY',
          opponentPoint: 104,
          originalPoint: 56
        },
        {
          date: moment('2022-09-25'),
          place: '???????????????????????????',
          opponent: 'RAYS',
          opponentPoint: 96,
          originalPoint: 76
        },
        {
          date: moment('2022-07-31'),
          place: '???????????????????????????????????? ??????',
          opponent: '?????????',
          opponentPoint: 51,
          originalPoint: 43
        },
        {
          date: moment('2022-07-18'),
          place: '???????????????????????????',
          opponent: 'ASTERISM',
          opponentPoint: 73,
          originalPoint: 54
        },
        {
          date: moment('2022-06-18'),
          place: '?????????????????????',
          opponent: 'Golden Age',
          opponentPoint: 79,
          originalPoint: 58
        },
        {
          date: moment('2022-02-13'),
          place: '??????????????????????????????',
          opponent: 'Psychopath',
          opponentPoint: 86,
          originalPoint: 61
        },
        {
          date: moment('2022-01-16'),
          place: '??????????????????????????????',
          opponent: 'ASTERISM',
          opponentPoint: 65,
          originalPoint: 70
        },
        {
          date: moment('2021-11-14'),
          place: '???????????????',
          opponent: 'Three Horses',
          opponentPoint: 101,
          originalPoint: 72
        },
        {
          date: moment('2021-11-07'),
          place: '??????????????????????????????',
          opponent: '???????????????????????????????????????',
          opponentPoint: 65,
          originalPoint: 85
        }
      ]
    }
  }
}
</script>
<style>
.width_10vw{
  min-width: 10vw;
}
.width_35vw{
  width: 35vw;
}
.winner{
  color: red;
}
.loser{
  color: blue;
}
</style>
