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
      showEupo: false,
      eupoNum: 57390,
      showChina: false,
      chinaNum: 200784,
      showCanada: false,
      canadaNum: 12050,
      showUsa: false,
      usaNum: 189106,
      showEngland: false,
      englandNum: 10581,
      showFrance: false,
      franceNum: 4003,
      showGe: false,
      geNum: 17445,
      showTW: false,
      twNum: 13763,
      showJP: false,
      jpNum: 116875,
      showKorea: false,
      koreaNum: 48719,
      showAu: false,
      auNum: 11130,
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
            eupoNum: 111,
            chinaNum: 222,
            canadaNum: 333,
            usaNum: 444,
            englandNum: 555,
            franceNum: 666,
            geNum: 777,
            twNum: 888,
            jpNum: 999,
            koreaNum: 101010,
            auNum: 111111
          }
        },
        {
          type: 'talent',
          data: {
            eupoNum: 111111,
            chinaNum: 222222,
            canadaNum: 333333,
            usaNum: 444444,
            englandNum: 555555,
            franceNum: 666666,
            geNum: 777777,
            twNum: 888888,
            jpNum: 999999,
            koreaNum: 101010101010,
            auNum: 111111111111
          }
        }
      ]
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initData()
    })
  },

  methods: {
    initData() {
      setTimeout(() => {
        this.showChina = true
      }, 500)
      setTimeout(() => {
        this.showEupo = true
      }, 1200)
      setTimeout(() => {
        this.showEngland = true
        this.showFrance = true
        this.showGe = true
      }, 1700)
      setTimeout(() => {
        this.showUsa = true
      }, 2400)
      setTimeout(() => {
        this.showCanada = true
      }, 3000)
      setTimeout(() => {
        this.showTW = true
        this.showJP = true
        this.showKorea = true
      }, 3700)
      setTimeout(() => {
        this.showAu = true
      }, 4400)
    }
  },

  watch: {
    type(newVal) {
      const { data } = this.dataSet.find(item => item.type === newVal)
      for (let [k, v] of Object.entries(data)) {
        this[k] = v
      }
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
      this.initData()
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
}
</style>
