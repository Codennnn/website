import React, { useState } from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'
import Layout from '@/components/layout'

const Hero = styled.div`
  background-color: #f8f8f9;
  box-shadow: 0 -${LAYOUT.headerHeight} 0 0 #f8f8f9;

  .container {
    position: relative;
    width: 1150px;
    margin: 0 auto;
    padding-top: 4rem;
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
      padding-top: 2rem;
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
    background: var(--color-primary);
    border-color: var(--color-primary);
    box-shadow: 0 0.25rem 0.9rem 0 rgba(253 118 39 / 30%);
  }

  .btn-default {
    color: var(--color-primary);
    background: #fff;
    box-shadow: 0 2px 0 rgba(0 0 0 / 2%);
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
  margin: 0 0 5rem 0;
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
        background: var(--color-primary);
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

const Section = styled.div`
  width: 1150px;
  margin: 0 auto 4rem auto;
  padding: 0 0 2rem 0;
  font-weight: bold;

  .title {
    margin-bottom: 5rem;
    color: #393f56;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .text-box {
    max-width: 30%;

    .sub-title {
      font-weight: bold;
      font-size: 1.6rem;
    }

    .desc {
      margin: 1rem 0 2.5rem 0;
      color: #828594;
      font-size: 0.95rem;
      line-height: 1.8;
    }

    .btn {
      display: inline-block;
      margin-right: 1rem;
      padding: 0.7rem 1rem;
      color: #fff;
      font-size: 0.9rem;
      background: var(--color-primary);
      border-color: var(--color-primary);
      border-radius: 999rem;
      box-shadow: 0 0.25rem 0.9rem 0 rgb(253 118 39 / 30%);
    }
  }

  .image-box {
    width: 54%;

    img {
      border: 0.9rem solid #ebebeb;
      border-radius: 1rem;
    }
  }

  .download-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    .download-btn {
      width: 9rem;
      height: 3rem;
      margin-top: 1rem;
      color: var(--color-primary);
      font-weight: bold;
      font-size: 0.9rem;
      background: #fff;
      border: none;
      border-radius: 999rem;
      box-shadow: 0 0.3rem 0.5rem 0 rgba(0 0 0 / 8%);
      cursor: pointer;
    }

    .radio-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;

      .radio {
        position: relative;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        padding: 0;
        color: rgba(0, 0, 0, 0.85);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        white-space: nowrap;
        list-style: none;
        font-feature-settings: 'tnum';

        &::before {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid var(--color-primary);
          border-radius: 50%;
          transform: translate(0, -50%);
          transition: box-shadow 0.2s;
          content: '';
        }

        &.checked::before {
          box-shadow: 0 0 0.2rem 0.01rem var(--color-primary);
        }

        &::after {
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          transition: opacity 0.2s transform 0.2s;
        }

        &.checked::after {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          background: var(--color-primary);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
          content: '';
        }
      }

      .text {
        padding: 0 0.5rem;
      }

      input[type='radio'] {
        opacity: 0;
      }
    }
  }
`

export default function HomePage() {
  const [version, setVersion] = useState('32')

  function onRadioChange(e) {
    setVersion(e.target.value)
  }

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
            <a href="#download">
              <button className="btn-primary">下载客户端</button>
            </a>
            <button className="btn-default">产品视频</button>
          </Action>

          <img
            src={withPrefix('/banner.png')}
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
                <img
                  src={withPrefix('/icon-1.png')}
                  className="icon"
                  alt="icon"
                />
                <h3 className="title">{it.title}</h3>
                <p className="description">{it.desc}</p>
                <p className="content">{it.content}</p>
              </div>
            </GridItem>
          ))}
      </Grid>

      <Section>
        <h2 className="title">产品专区</h2>

        <div className="flex">
          <div className="text-box">
            <h3 className="sub-title">数据分析大屏</h3>
            <p className="desc">
              一站式数据可视化展示平台，炫酷大屏，自由部署，实时数据，项目运行状态和健康状态尽收眼底。
            </p>
            <div className="btn">查看演示效果</div>
          </div>

          <div className="image-box">
            <img alt="gif" src={withPrefix('/home.gif')} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex">
          <div className="image-box">
            <img alt="gif" src={withPrefix('/home.gif')} />
          </div>

          <div className="text-box">
            <h3 className="sub-title">数据分析大屏</h3>
            <p className="desc">
              一站式数据可视化展示平台，炫酷大屏，自由部署，实时数据，项目运行状态和健康状态尽收眼底。
            </p>
            <div className="btn">查看演示效果</div>
          </div>
        </div>
      </Section>

      <Section id="download">
        <h2 className="title">下载专区</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="download-box" style={{ marginRight: '5rem' }}>
            <img src={withPrefix('/icon-1.png')} className="icon" alt="icon" />
            <button className="download-btn">下载按钮</button>
            <div onChange={onRadioChange}>
              {['32', '64'].map(v => (
                <label className="radio-wrapper">
                  <span className={`radio ${v === version && 'checked'}`}>
                    <input
                      type="radio"
                      name="version"
                      value={v}
                      defaultCheck={version === v}
                    ></input>
                  </span>
                  <span className="text">{v}位</span>
                </label>
              ))}
            </div>
          </div>
          <div className="download-box">
            <img src={withPrefix('/icon-1.png')} className="icon" alt="icon" />
            <button className="download-btn">下载按钮</button>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
