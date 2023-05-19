<template>
  <div class="height_93vh is-flex is-justify-content-center bg-color">
    <section class="section">
      <div class="columns is-mobile">
        <div class="column is-two-fifths is-align-self-flex-end pb-0">
          <button
            class="button has-text-weight-bold is-size-7-touch"
            @click="prevMonth"
          >
            ＜
          </button>
          <button
            class="button has-text-weight-bold is-size-7-touch"
            @click="nextMonth"
          >
            ＞
          </button>
        </div>
        <div class="column">
          <h1 class="title is-size-4-mobile pl-5 has-text-white">
            {{ currentDate.format("MMMM YYYY") }}
          </h1>
        </div>
      </div>
      <table class="table is-bordered">
        <thead>
          <tr>
            <th
              v-for="(dateItem,index) in dateList"
              :key="index"
              class="is-size-7-touch"
            >
              {{ dateItem }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(week, index) in calendars"
            :key="index"
          >
            <td
              v-for="(day, index2) in week"
              :key="index2"
              class="tbody_td is-size-7-touch"
              :class="day.classTd"
            >
              <div class="is-flex is-flex-direction-column height_100">
                <div class="is-flex-grow-0">
                  <p
                    class="m-1 has-text-right"
                    :class="day.classSpan"
                  >
                    {{ day.date }}
                  </p>
                </div>
                <div class="is-flex is-flex-grow-1 is-align-items-center is-justify-content-center">
                  <p
                    v-if="day.midori"
                    class="calendar_contents is-size-6-desktop pb-4"
                  >
                    練習日 @M
                  </p>
                  <p
                    v-if="day.okibe"
                    class="calendar_contents is-size-6-desktop pb-4"
                  >
                    練習日 @O
                  </p>
                  <p
                    v-if="day.game"
                    class="calendar_contents is-size-6-desktop pb-4"
                  >
                    連盟試合
                  </p>
                  <p
                    v-if="day.other"
                    class="calendar_contents is-size-6-desktop pb-4"
                  >
                    {{ day.otherName }}
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="is-size-7-touch has-text-white">
        @M:大阪市立緑中学校 19:30～21:30
      </p>
      <p class="is-size-7-touch has-text-white">
        @O:大阪市立<ruby>意岐部<rt>おきべ</rt></ruby>中学校 13:00〜17:00
      </p>
    </section>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'SchedulePage',
  layout () {
    return 'top'
  },
  data () {
    return {
      currentDate: moment(),
      today: moment(),
      dateList: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      // 意岐部の練習が決まり次第、以下の日程を調整
      trainingDay: [
        moment('2022-11-06'),
        moment('2022-11-13'),
        moment('2022-12-11'),
        moment('2022-12-25'),
        moment('2023-01-22'),
        moment('2023-01-29'),
        moment('2023-02-12'),
        moment('2023-02-26'),
        moment('2023-03-05'),
        moment('2023-03-26'),
        moment('2023-04-16'),
        moment('2023-04-30'),
        moment('2023-05-07'),
        moment('2023-05-28')
      ],
      // 試合の日程が決まり次第、以下の日程を調整
      gameDay: [
        moment('2022-12-03'),
        moment('2023-01-08'),
        moment('2023-05-13'),
        moment('2023-06-17'),
        moment('2023-08-26'),
        moment('2023-09-24')
      ],
      // 他何かあれば、以下の日程を調整
      otherDay: [
        {
          moment: moment('2023-06-18'),
          otherName: '東大阪市民大会'
        },
        {
          moment: moment('2023-06-25'),
          otherName: '東大阪市民大会'
        },
        {
          moment: moment('2023-07-02'),
          otherName: '東大阪市民大会'
        }
      ]
    }
  },
  head () {
    return {
      title: '- schedule'
    }
  },
  computed: {
    calendars () {
      return this.getCalendar()
    }
  },
  methods: {
    getStartDate () {
      const date = moment(this.currentDate)
      date.startOf('month')
      const youbiNum = date.day()
      return date.subtract(youbiNum, 'days')
    },
    getEndDate () {
      const date = moment(this.currentDate)
      date.endOf('month')
      const youbiNum = date.day()
      return date.add(6 - youbiNum, 'days')
    },
    getCalendar () {
      const startDate = this.getStartDate()
      const endDate = this.getEndDate()
      const weekNumber = Math.ceil(endDate.diff(startDate, 'days') / 7)

      const calendars = []
      for (let week = 0; week < weekNumber; week++) {
        const weekRow = []
        for (let day = 0; day < 7; day++) {
          const dateObject = {
            date: startDate.get('date'),
            classSpan: '',
            classTd: '',
            midori: false,
            okibe: false,
            game: false,
            other: false,
            otherName: ''
          }
          // 日付によるFontColorの調整
          if (moment().isSame(startDate, 'day')) {
            dateObject.classSpan = 'today'
          } else if (startDate.month() === this.currentDate.month()) {
            dateObject.classSpan = ''
          } else {
            dateObject.classSpan = 'not_applicable'
          }
          // 水曜日は基本緑中学校の練習があるため、毎週水曜日固定表示
          if (startDate.day() === 3) {
            dateObject.midori = true
            dateObject.classTd = 'has-background-success-light'
          }
          // 意岐部中学校の練習日
          for (const item of this.trainingDay) {
            if (item.isSame(startDate, 'day')) {
              dateObject.okibe = true
              dateObject.classTd = 'has-background-warning-light'
            }
          }
          // 試合
          for (const item of this.gameDay) {
            if (item.isSame(startDate, 'day')) {
              dateObject.game = true
              dateObject.classTd = 'has-background-success-dark has-text-white-bis'
            }
          }
          // 他何かあれば
          for (const item of this.otherDay) {
            if (item.moment.isSame(startDate, 'day')) {
              dateObject.other = true
              dateObject.otherName = item.otherName
              dateObject.classTd = 'has-background-link-light'
            }
          }
          weekRow.push(dateObject)
          startDate.add(1, 'days')
        }
        calendars.push(weekRow)
      }
      return calendars
    },
    nextMonth () {
      this.currentDate = moment(this.currentDate).add(1, 'month')
    },
    prevMonth () {
      this.currentDate = moment(this.currentDate).subtract(1, 'month')
    }
  }
}
</script>
<style>
.not_applicable{
  color: #ddd;
}
.today{
  color: mediumblue;
  font-weight: 700;
}
.tbody_td{
  height: 20vh;
  width: 12vw;
}
@media screen and (max-width: 1023px) {
  .tbody_td {
    height: 10vh;
  }
}
.calendar_contents{
  font-size: 0.5rem;
}
.height_100{
  height: 100%;
}
.height_93vh{
  min-height: 93vh;
}
.bg-color{
  background: linear-gradient(90deg, rgba(4, 20, 104, 1), rgba(20, 22, 31, 1) 50%, rgba(255, 255, 255, 1));
}
</style>
