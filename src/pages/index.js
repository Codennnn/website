import React from 'react'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'
import Layout from '@/components/layout'

const Hero = styled.div`
  background-color: #f8f8f9;

  .container {
    position: relative;
    width: 1150px;
    margin: 0 auto;
    padding-top: calc(4rem + ${LAYOUT.headerHeight});
    padding-bottom: 4rem;

    .sub-title {
      margin-top: 0.8rem;
      color: #828594;
      font-weight: bold;
    }

    .banner {
      position: absolute;
      top: 0;
      right: 0;
      width: 35rem;
      padding-top: calc(1.6rem + ${LAYOUT.headerHeight});
      user-select: none;
    }
  }
`

const HeroText = styled.h1`
  color: #363b52;
  font-weight: bold;
  font-size: 2.6rem;
`

const Action = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;

  .btn-primary,
  .btn-default {
    width: 9rem;
    height: 3rem;
    font-weight: bold;
    font-size: 0.9rem;
    border: none;
    border-radius: 999rem;
    cursor: pointer;
  }

  .btn-primary {
    margin-right: 1rem;
    color: #fff;
    background: #ff7626;
    border-color: #ff7626;
    box-shadow: 0 0.25rem 0.9rem 0 rgb(253 118 39 / 30%);
  }

  .btn-default {
    color: #ff7626;
    background: #fff;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  }
`

const Quote = styled.div`
  position: relative;
  left: 50%;
  display: inline-block;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  transform: translateX(-50%);

  &::before,
  &::after {
    position: absolute;
    top: 1.5rem;
    transform: scale(0.5);
    content: url(/quote.png);
  }

  &::before {
    left: -7rem;
  }

  &::after {
    right: -7rem;
    transform: scale(0.5) rotateZ(180deg);
  }

  h2 {
    margin-bottom: 0.8rem;
    font-weight: bold;
    font-size: 1.5rem;
  }

  h3 {
    color: #828594;
    font-weight: bold;
  }
`

const Grid = styled.div`
  position: relative;
  left: 50%;
  display: flex;
  flex-wrap: wrap;
  width: 1150px;
  margin: 0 -1rem;
  transform: translateX(-50%);
`

const GridItem = styled.div`
  width: calc(100% / 3);
  padding: 1rem;

  .item-box {
    min-height: 21rem;
    padding: 0.8rem 1.2rem;
    background: #fff;
    border-radius: 0.6rem;
    box-shadow: 0 0.4rem 1.4rem 0 rgb(225 225 234 / 70%);

    .icon {
      width: 3.8rem;
      margin-bottom: 1rem;
    }

    .title {
      font-weight: bold;
      font-size: 1rem;
    }

    .description {
      position: relative;
      padding: 0.4rem 0 0.8rem 0;
      font-weight: bold;
      font-size: 0.9rem;

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 2rem;
        height: 0.09rem;
        background: #ff7626;
        content: '';
      }
    }

    .content {
      padding-top: 0.8rem;
      color: #828594;
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
`

export default function HomePage() {
  return (
    <Layout>
      <Hero>
        <div className="container">
          <HeroText>更懂前端的监控系统</HeroText>
          <p className="sub-title">
            简单几步就可搭建一套专属于自己的前端监控系统，实时了解线上应用健康情况！
          </p>
          <p className="sub-title">Webfunny支持千万级PV的日活量啦 ！！！</p>

          <Action>
            <button className="btn-primary">立即体验 DEMO</button>
            <button className="btn-default">产品视频</button>
          </Action>

          <img
            src="/banner.png"
            alt="banner"
            className="banner"
            draggable="false"
          />
        </div>
      </Hero>

      <Quote>
        <h2>随时连接线上用户，无论何时何地，解决前端问题都易如反掌！</h2>
        <h3>
          让你能够实时掌握：运营数据、前端报错、页面性能、接口性能、以及小程序监控
        </h3>
      </Quote>

      <Grid>
        {Array(6)
          .fill(0)
          .map(() => ({
            title: '数据概览',
            desc: '实时掌握项目的健康状态，PV/UV、报错、用户分布等。',
            content:
              '通过对线上项目的实时分析，能让我们对线上状况有非常直观的了解。例如PV、UV数据的变化趋势，线上报错、异常等, 同时还可以自定义警报功能。',
          }))
          .map(it => (
            <GridItem>
              <div key={it.title} className="item-box">
                <img src="/icon-1.png" className="icon" alt="icon" />
                <h3 className="title">{it.title}</h3>
                <p className="description">{it.desc}</p>
                <p className="content">{it.content}</p>
              </div>
            </GridItem>
          ))}
      </Grid>
    </Layout>
  )
}
