
<template>
  <div>
    <div class="graph-wrapper">
      <div class="graph-side">
        <ul>
          <li v-for="(item, index) in typeList" :key="index">
            <img :src="getIcon(item.key)" alt="">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="graph-left">
        <header>
          <page-header :title="title" class="title"></page-header>
        </header>
        <div class="svg-detail-wrapper"></div>
      </div>
      <div class="side-right">
        <btn-group></btn-group>
        <transition name="slide-fade" mode="in-out">
          <div class="side-right-con" v-show="showPannel()" :key="currentWord">
            <relate-pannel v-show="popList && popList.length>0" :title="popTitle" :list='popList'></relate-pannel>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
/* eslint-disable no-unused-vars */
import expertIco1 from './img/ico-expert.png'
import orgIco from './img/ico-org.png'
import projectIco from './img/ico-project.png'
import patentIco from './img/ico-patent.png'
import paperIco from './img/ico-paper.png'
import honorIco from './img/ico-honor.png'
import keywordIco from './img/ico-keyword.png'
import PageHeader from '@/components/page-header'
import BtnGroup from '@/components/btn-group'
import RelatePannel from './relate-pannel'
import { graphApi } from '@/service'
import appConfig from '@/config'
export default {
  name: 'GraphDetail',
  components: {
    PageHeader,
    BtnGroup,
    RelatePannel
  },

  data () {
    return {
      title: '知识图谱',
      forceSimulation: null,
      transitionName: '',
      svg: null,
      svgW: 1920,
      svgH: 1060,
      links: null,
      nodes: null,
      typeList: appConfig.typeList,
      centerWordMap: appConfig.centerWordMap,
      fontSizeList: [26, 24, 20, 20, 20, 15],
      // colorList: ['#a29bfe', '#fab1a0', '#e17055']
      colorList: ['#6abdf3', '#6ca46c', '#ca635f', '#a29bfe', '#d6744d', '#4e88af', '#d2907c'], // 图1
      // colorList: ['#6abdf3', '#f44b63', '#4beaf4', '#7ef44b', '#f4e64b', '#ba4bf4', '#4b6ff4'],
      // colorList: ['#7E48DA', '#6abdf3', '#F4E28F', '#E97383', '#8CECB9', '#4b6ff4', '#3aafb9'],
      rediusList: [110, 80, 50, 40, 20],
      keyword: this.$route.query.keyword, // 如：李飞飞
      currentWord: this.$route.path.split('/')[2], // id
      alphaDecay: 0.0228, // 控制力学模拟衰减率
      chargeStrength: -400, // 万有引力
      paperIco: paperIco, // 论文小图标
      orgIco: orgIco,
      expertIco: expertIco1,
      projectIco: projectIco,
      patentIco: patentIco,
      honorIco: honorIco,
      keywordIco: keywordIco,
      popList: [],
      popTitle: '',
      graphFlag: true
    }
  },

  mounted () {
    this.initData()
  },

  methods: {

    async getData () {
      try {
        const temp = await graphApi.QueryGraphDetailByKeyword(this.keyword)
        if (temp) {
          console.log(temp)
          this.nodes = temp.mapInfo.nodes
          this.links = temp.mapInfo.relations
        }
      } catch (error) {
        this.$message.error(error.toString())
      }
    },

    async initData () {
      await this.getData()
      this.initForceSimulation()
      this.initSvgContainer()
      this.drawSvg()
    },

    initForceSimulation () {
      const padding = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }

      this.svg = d3.select('.svg-detail-wrapper')
        .append('svg')
        .attr('viewBox', '-100 -100 1500 1300')
        .attr('width', this.svgW)
        .attr('height', this.svgH)
        .append('g')
        .attr('transform', `translate(${padding.top}, ${padding.left})`)
        // .alphaDecay(this.alphaDecay)
        // .size([1766, 1000])
    },

    initSvgContainer () {
      try {
      // 力导向图
        this.forceSimulation = d3.forceSimulation()
        // .alpha(0.07) // 活力  渲染之后再自动动多久
          .force('link', d3.forceLink().id(data => data.code).distance(data => {
          // 无分支的节点
            // console.log(data)
            if (data.target.name === '荣誉' || data.target.name === '组织') {
              return 200
            } else {
              return data.target.level === 5 ? data.target.level * 20 : data.target.level * 10
            }
          })) // 映射id & 线的长度
          .force('charge', d3.forceManyBody().strength(this.chargeStrength))
          .force('xPos', d3.forceX(this.svgW / 2))
          .force('yPos', d3.forceY(this.svgH / 2))
          .force('center', d3.forceCenter(this.svgW / 5, this.svgH / 2))
          .force('collide', d3.forceCollide(d => {
            if (d.name === this.keyword && d.level === 1) {
              d.fx = this.svgW / 5 // 设置特定节点固定x坐标
              d.fy = this.svgH / 2.5
            }
            return 130 - d.level * 20
          }))
      } catch (error) {
        console.log('initSvgContainer===' + error)
      }
    },

    drawSvg () {
      try {
        let that = this
        this.forceSimulation
          .nodes(this.nodes)
          .on('tick', function (d) {
            if (!that.graphFlag) {
              console.log(that.graphFlag)
              return
            }
            edges
              .attr('x1', data => data.source.x)
              .attr('y1', data => data.source.y)
              .attr('x2', data => data.target.x)
              .attr('y2', data => data.target.y)
            gs.attr('transform', data => `translate(${data.x}, ${data.y})`)
          })
        this.forceSimulation
          .force('link')
          .links(this.links)

        // 绘制边
        const edges = this.svg.append('g')
          .selectAll('line')
          .data(this.links)
          .enter()
          .append('line')
          .attr('stroke', (data, index) => 'rgba(255,255,255,0.4)')
          .attr('stroke-width', '2px')
          .attr('target', data => data.target.name)
          .attr('source', data => data.source.name)

        const gs = this.svg.selectAll('.node')
          .data(this.nodes)
          .enter()
          .append('g')
          .attr('class', 'node')
          .attr('name', (data) => data.name)
          .attr('transform', (data, index) => `translate(${data.x}, ${data.y})`)
          .call(d3.drag()
            .on('start', this.started)
            .on('drag', this.dragged)
            .on('end', this.ended)
          )
          .on('click', (d) => {
            this.clickHandel(d)
          })

        gs.append('circle')
          .attr('class', 'circle-node')
          .attr('r', data => {
            return this.rediusList[data.level - 1]
          })
          .attr('fill', d => {
            // return '#10162d'
            return this.colorList[d.colorIdx]
          })
          .attr('stroke', d => {
            // return this.colorList[d.colorIdx]
            return '#fff'
          })
          .attr('stroke-width', '4px')
          .attr('style', 'cursor: pointer;')
          .attr('nodeTest', d => JSON.stringify(d))
        gs.filter(d => {
          if (d.level && d.level < 4) {
            return this
          }
        }).append('text')
          .attr('style', d => {
            return `cursor: pointer; text-anchor: middle;font-size:${this.fontSizeList[d.level - 1]}px`
          })
          .selectAll('tspan')
          .data(d => {
            if (d.name) {
              if (d.name.includes('.')) {
                return d.name.split('.')
              } else {
                return d.name.split(' ')
              }
            }
          })
          .join('tspan')
          .attr('fill', '#f1f1f1')
          .attr('x', 0)
          .attr('y', (d, i, nodes) => {
            if (nodes) {
              return `${i - nodes.length / 2 + 1.8}em`
            } else {
              return `0em`
            }
          })
          .text(data => data)
          // .on('click', (data, index, nodes) => {
          //   const id = nodes[0].parentNode['code']
          //   this.clickHandel(id)
          // })

        gs.filter(d => {
          if ((d.level && d.level < 4)) {
            return this
          }
        }).append('image')
          .attr('href', d => {
            if (d.name === '专利') {
              return this.patentIco
            } else {
              return this[`${d.type}Ico`]
            }
          })
          .attr('width', d => {
            return `${this.fontSizeList[d.level] * 2}px`
          })
          .attr('height', d => {
            return `${this.fontSizeList[d.level] * 2}px`
          })
          .attr('x', '-20')
          .attr('y', '-40')

        gs.filter(d => {
          if ((d.level && d.level > 3)) {
            return this
          }
        }).append('image')
          .attr('href', d => {
            if (d.name === '专利') {
              return this.patentIco
            } else {
              return this[`${d.type}Ico`]
            }
          })
          .attr('width', d => {
            return `${this.fontSizeList[d.level] * 2}px`
          })
          .attr('height', d => {
            return `${this.fontSizeList[d.level] * 2}px`
          })
          .attr('x', d => {
            return d.level === 5 ? '-15' : '-18'
          })
          .attr('y', d => {
            return d.level === 5 ? '-15' : '-20'
          })
      } catch (error) {
        console.log('drawSvg===' + error)
        this.graphFlag = false
      }
    },

    started (d) {
      if (!d3.event.active) {
        this.forceSimulation.alphaTarget(0.3).restart()
      }
      d3.event.sourceEvent.stopPropagation()
      d.fx = d.x
      d.fy = d.y
    },

    dragged (d) {
      d.fx = d3.event.x
      d.fy = d3.event.y
    },

    ended (d) {
      if (!d3.event.active) {
        this.forceSimulation.alphaTarget(0)
      }
      d.fx = null
      d.fy = null
    },

    clickHandel (d) {
      if (d.level < 4) {
        if (this.centerWordMap.hasOwnProperty(d.name)) {
          this.$router.push(`/search/${d.name}`)
        } else {
          this.currentWord = d.code
          this.showLayout(d)
        }
      } else {
        this.currentWord = d.code
        this.showLayout(d)
      }
    },

    showLayout (node) {
      console.log(node)
      if (node.layout) {
        this.popList = node.layoutList
        this.popTitle = node.name
      } else {
        this.popList = ['']
        this.popTitle = node.name
      }
    },

    showPannel () {
      return this.popList && this.popList.length
    },

    getIcon (type) {
      return this[`${type}Ico`]
    }
  },

  computed: {
    nodeId () {
      return this.links[0].source.code
    }
  },

  watch: {
    $route (to, from) {
      if (to.meta.path.includes(from.meta.path)) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  }
}
</script>
<style lang="less" scoped>
 @import '~@/style/variables.less';
  .graph-wrapper {
    width: 100%;
    height: 100%;
    background: url('../home/img/bg.png') center no-repeat fixed;
    background-size: cover;
    color: #fff;
    display: flex;
    justify-content: space-between;
    touch-action: none;
    padding: 10px 55px;
    box-sizing: border-box;
    header{
      display: flex;
      justify-content: center;
    }
    .graph-side{
      position: absolute;
      color: #fff;
      margin-top: 60px;
      border-radius: 5px;
      padding: 15px;
      box-sizing: border-box;
      li{
        line-height: 40px;
      }
      img{
        width: 25px;
        vertical-align: middle;
      }
      span{
        padding-left: 15px;
      }
    }
    .side-right{
      width: 450px;
      position: absolute;
      right: 0;
      .side-right-con{
        padding: 0px 30px 5px;
        border-radius: 5px;
        border:1px solid @borderColor;
        background: @bgColor;
        box-sizing: border-box;
      }
    }
    .svg-detail-wrapper{
      width: 1920px;
      height: 100%;
    }
  }
  .vue{
    width: 100%;
    height: 100%;
  }
</style>
