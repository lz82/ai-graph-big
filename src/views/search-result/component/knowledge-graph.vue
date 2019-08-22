<template>
  <div class="graph-wrapper">
    <div class="svg-wrapper"></div>
  </div>
</template>

<script>
import * as d3 from 'd3'
// import icon from './img/boshimao.png'
// import { graphApi } from '@/service'
export default {
  name: 'KnowGraph',
  props: {
    nodes: Array,
    links: Array
  },
  data () {
    return {
      forceSimulation: null,
      svg: null,
      svgW: 840,
      svgH: 800,
      searchKey: this.$route.path.split('/')[2]
    }
  },

  mounted () {
    this.initData()
    console.log(this.nodes)
    console.log(this.links)
  },

  methods: {
    async initData () {
      // await this.getData()
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

      this.svg = d3.select('.svg-wrapper')
        .append('svg')
        .attr('width', this.svgW)
        .attr('height', this.svgH)
        .append('g')
        .attr('transform', `translate(${padding.top}, ${padding.left})`)
    },

    initSvgContainer () {
      // 力导向图
      this.forceSimulation = d3.forceSimulation()
        .alpha(0.05) // 活力  渲染之后再自动动多久
        .force('link', d3.forceLink().id(data => data.code)) // 映射id & 线的长度
        /*
        .distance(data => {
          return 160 * data.target.value
        })
        */
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(this.svgW / 2, this.svgH / 2))
        .force('collide', d3.forceCollide(d => {
          // console.log(d);
          if (d.name === this.searchKey) {
            d.fx = this.svgW / 2 // 设置特定节点固定x坐标
            d.fy = this.svgH / 2
          }
          return 60 * Math.random() + 100
          // return 100 * d.value + 5
        }))
    },

    drawSvg () {
      this.forceSimulation.nodes(this.nodes)
        .on('tick', function (d) {
          edges
            .attr('x1', data => data.source.x)
            .attr('y1', data => data.source.y)
            .attr('x2', data => data.target.x)
            .attr('y2', data => data.target.y)
          gs.attr('transform', data => `translate(${data.x}, ${data.y})`)
        })

      this.forceSimulation.force('link')
        .links(this.links)

      // 绘制边
      const edges = this.svg.append('g')
        .selectAll('line')
        .data(this.links)
        .enter()
        .append('line')
        .attr('stroke', (data, index) => '#f1f1f1')
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
        ).on('click', () => {
          this.jump2Detail()
        })

      gs.append('circle')
        .attr('class', 'circle-outer')
        .attr('id', d => 'id-' + d.code)
        .attr('r', data => {
          return data.name === this.searchKey ? 85 : 60 + Math.random() * 10
        })
        // .attr('fill', data => this.calcColor(data.type))
        .attr('fill', '#10172d')
        .attr('stroke', '#6abdf3')
        .attr('stroke-width', '4px')
        .attr('style', 'cursor: pointer;')
        // .on('click', () => {
        //   this.jump2Detail()
        // })

      // 进度齿轮
      gs.append('path')
        .attr('class', 'circle-inner')
        .attr('stroke', '#fff')
        .attr('fill', 'rgba(0,0,0,0)')
        .attr('stroke-dashoffset', '25px')
        .attr('stroke-dasharray', '10px 2px')
        .attr('stroke-width', '8px')
        .attr('d', data => {
          const id = `id-${data.code}`
          let outerR = d3.select('#' + id).attr('r') // 外围圆半径***选择器不能数字开头***
          let innerR = outerR - 8
          let degree = data.index * 10 / 100 * 360
          let radian = data.index > 9 ? 60 : degree * Math.PI / 180
          let x = (Math.sin(radian) * innerR).toFixed(2)
          let y = -(Math.cos(radian) * innerR).toFixed(2)
          let lenghty = degree > 180 ? 1 : 0 // 大于180度时候画大角度弧，小于180度的画小角度弧
          return `M 0 -${innerR} A ${innerR} ${innerR} 0 ${lenghty} 1 ${x} ${y}`
        })

      gs.append('text')
        // .text(data => data.name)
        .attr('style', 'cursor: pointer; text-anchor: middle;font-size:24px')
        .selectAll('tspan')
        .data(d => d.name ? d.name.split(' ') : '')
        .join('tspan')
        .attr('fill', '#f1f1f1')
        .attr('x', 0)
        .attr('y', (d, i, nodes) => {
          if (nodes) {
            return `${i - nodes.length / 2 + 0.8}em`
          } else {
            return `0em`
          }
        })
        .text(data => data)
        // .on('click', () => {
        //   this.jump2Detail()
        // })

      gs.append('image')
        // .attr('href', icon)
        .attr('width', '20px')
        .attr('height', '20px')
      // .attr('preserveAspectRatio','none')
        .attr('x', '-10')
        .attr('y', '12')
    },

    started (d) {
      if (!d3.event.active) {
        this.forceSimulation.alphaTarget(0.1).restart()
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

    jump2Detail () {
      // this.$router.push(`/graph/${this.$route.params.searchKey}`)
      this.$router.push({
        path: `/graph/${this.nodeId}`,
        query: {
          keyword: this.searchKey
        }
      })
    },

    calcColor (type) {
      switch (type) {
        case 'scholar':
          return '#a5dcff'
        case 'keyword':
          return '#9effd7'
        case 'affiliation':
          return '#ffd7b3'
        default:
          return '#a5dcff'
      }
    }
  },

  computed: {
    nodeId () {
      return this.links[0].source.id
    }
  }
}
</script>

<style lang="less" scoped>
  .graph-wrapper {
    width: 100%;
    height: 100%;
    // background: #071321;
    display: flex;
    justify-content: center;
    align-items: center;
    touch-action: none;
  }
</style>
