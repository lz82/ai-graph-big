<template>
  <div class="home-map-wrapper">
    <Count :num="eupoNum" type="europe" txt="欧洲" class="cnt europe" v-if="showEupo" />
    <Count :num="chinaNum" type="china" txt="中国" class="cnt china" v-if="showChina" />
    <Count :num="canadaNum" type="canada" txt="加拿大" class="cnt canada" v-if="showCanada" />
    <Count :num="usaNum" type="usa" txt="美国" class="cnt usa" v-if="showUsa" />
    <Count :num="englandNum" type="england" txt="英国" class="cnt england" v-if="showEngland" />
    <Count :num="franceNum" type="france" txt="法国" class="cnt france" v-if="showFrance" />
    <Count :num="geNum" type="ge" txt="德国" class="cnt ge" v-if="showGe" />
    <Count :num="twNum" type="tw" txt="中国台湾" class="cnt tw" v-if="showTW" />
    <Count :num="jpNum" type="ujpa" txt="日本" class="cnt jp" v-if="showJP" />
    <Count :num="koreaNum" type="korea" txt="韩国" class="cnt korea" v-if="showKorea" />
    <Count :num="auNum" type="au" txt="澳大利亚" class="cnt au" v-if="showAu" />

    <Count :num="indiaNum" type="india" txt="印度" class="cnt india" v-if="showIndia" />
    <Count :num="italyNum" type="italy" txt="意大利" class="cnt italy" v-if="showItaly" />
    <Count :num="spainNum" type="spain" txt="西班牙" class="cnt spain" v-if="showSpain" />
    <Count :num="iranNum" type="iran" txt="伊朗" class="cnt iran" v-if="showIran" />
    <Count :num="brazilNum" type="brazil" txt="巴西" class="cnt brazil" v-if="showBrazil" />
  </div>
</template>

<script>
import Count from './count'

export default {
  name: 'HomeMap',

  components: {
    Count
  },

  props: {
    type: {
      type: String,
      default: 'patent'
    }
  },

  data() {
    return {
      timer: [],
      showEupo: false,
      showCanada: false,
      showChina: false,
      showUsa: false,
      showEngland: false,
      showFrance: false,
      showGe: false,
      showTW: false,
      showJP: false,
      showKorea: false,
      showAu: false,
      showIndia: false,
      showItaly: false,
      showSpain: false,
      showIran: false,
      showBrazil: false,
      eupoNum: 0,
      chinaNum: 0,
      canadaNum: 0,
      usaNum: 0,
      englandNum: 0,
      franceNum: 0,
      geNum: 0,
      twNum: 0,
      jpNum: 0,
      koreaNum: 0,
      auNum: 0,
      indiaNum: 0,
      italyNum: 0,
      spainNum: 0,
      iranNum: 0,
      brazilNum: 0,
      dataSet: [
        {
          type: 'patent',
          data: {
            eupoNum: 57390,
            chinaNum: 200784,
            canadaNum: 12050,
            usaNum: 189106,
            englandNum: 10581,
            franceNum: 4003,
            geNum: 17445,
            twNum: 13763,
            jpNum: 116875,
            koreaNum: 48719,
            auNum: 11130
          }
        },
        {
          type: 'doc',
          data: {
            chinaNum: 369588,
            canadaNum: 61782,
            usaNum: 327034,
            englandNum: 96536,
            franceNum: 72261,
            geNum: 85587,
            jpNum: 94112,
            indiaNum: 75128,
            italyNum: 61466,
            spainNum: 58582
          }
        },
        {
          type: 'talent',
          data: {
            chinaNum: 18232,
            usaNum: 28536,
            englandNum: 7998,
            franceNum: 6395,
            geNum: 9441,
            indiaNum: 17384,
            iranNum: 6219,
            brazilNum: 5982,
            spainNum: 4942,
            italyNum: 4740
          }
        }
      ]
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initData(this.type)
    })
  },

  methods: {
    initData(type) {
      // 全部不展示
      this.clearAll()
      // 设置指数
      const { data } = this.dataSet.find(item => item.type === type)
      for (let [k, v] of Object.entries(data)) {
        this[k] = v
      }
      this[`${type}Show`]()
    },

    patentShow() {
      let timerIndex = 0
      this.timer[timerIndex++] = setTimeout(() => {
        this.showChina = true
      }, 500)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showEupo = true
      }, 1200)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showEngland = true
        this.showFrance = true
        this.showGe = true
      }, 1700)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showUsa = true
      }, 2400)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showCanada = true
      }, 3000)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showTW = true
        this.showJP = true
        this.showKorea = true
      }, 3700)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showAu = true
        // 清除timeout
        this.clearTimer()
      }, 4400)
    },

    docShow() {
      let timerIndex = 0
      this.timer[timerIndex++] = setTimeout(() => {
        this.showChina = true
      }, 500)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showUsa = true
      }, 1200)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showEngland = true
      }, 1700)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showJP = true
        this.showGe = true
        this.showIndia = true
      }, 2400)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showFrance = true
      }, 3000)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showCanada = true
        this.showItaly = true
      }, 3700)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showSpain = true
        // 清除timeout
        this.clearTimer()
      }, 4400)
    },

    talentShow() {
      let timerIndex = 0
      this.timer[timerIndex++] = setTimeout(() => {
        this.showUsa = true
      }, 500)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showChina = true
      }, 1200)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showIndia = true
      }, 1700)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showGe = true
        this.showFrance = true
        this.showEngland = true
      }, 2400)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showIran = true
        this.showBrazil = true
      }, 3000)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showSpain = true
      }, 3700)
      this.timer[timerIndex++] = setTimeout(() => {
        this.showItaly = true
        // 清除timeout
        this.clearTimer()
      }, 4400)
    },

    clearAll() {
      this.showEupo = false
      this.showFrance = false
      this.showGe = false
      this.showTW = false
      this.showJP = false
      this.showKorea = false
      this.showChina = false
      this.showAu = false
      this.showCanada = false
      this.showUsa = false
      this.showEngland = false
      this.showIndia = false
      this.showItaly = false
      this.showSpain = false
      this.showIran = false
      this.showBrazil = false
    },

    clearTimer() {
      this.timer.forEach(timer => {
        clearTimeout(timer)
      })
    }
  },

  watch: {
    type(newVal) {
      this.clearTimer()
      this.initData(newVal)
    }
  }
}
</script>

<style lang="less" scoped>
.home-map-wrapper {
  position: relative;
  width: 980px;
  height: 514px;
  background: url('./img/map.png') center center no-repeat;

  .cnt {
    position: absolute;
  }

  .europe {
    left: 160px;
    top: 140px;
  }

  .china {
    left: 300px;
    top: 180px;
  }

  .canada {
    top: 100px;
    right: 220px;
  }

  .usa {
    top: 160px;
    right: 200px;
  }

  .england {
    top: 115px;
    left: 55px;
  }

  .france {
    top: 170px;
    left: 60px;
  }

  .ge {
    top: 135px;
    left: 100px;
  }

  .tw {
    top: 240px;
    left: 365px;
  }

  .jp {
    top: 200px;
    left: 415px;
  }

  .korea {
    top: 180px;
    left: 366px;
  }

  .au {
    top: 355px;
    left: 385px;
  }

  .india {
    top: 255px;
    left: 250px;
  }

  .italy {
    top: 190px;
    left: 100px;
  }

  .spain {
    top: 220px;
    left: 50px;
  }

  .iran {
    top: 240px;
    left: 180px;
  }

  .brazil {
    top: 320px;
    right: 100px;
  }
}
</style>
