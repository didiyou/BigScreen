import React from 'react'
import * as echarts from 'echarts'
import { useRef } from 'react';
import { useEffect } from 'react';
import {px} from '../shared/px'
import { baseEchartOptions } from '../shared/base-echart-options';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart2 = () => {
    const divRef = useRef(null)
    const chartRef = useRef(null)
    const dataDynamic = (data)=>{
      chartRef.current = echarts.init(divRef.current);
      chartRef.current.setOption(createEchartsOptions({
          ...baseEchartOptions,
          xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01],
              splitLine:{show:false},
              axisLabel:{
                  fontSize:px(10)}
          },
          yAxis: {
              axisTick:{show:false},
              type: 'category',
              data: data.map(a=>(a.name)),
              axisLabel:{
                  formatter(val){return val.replace('公安局','\n公安局')},
                  fontSize:px(10)
                },
          },
          series: [
              {
                  name: '破案排名1',
                  type: 'bar',
                  data: data.map(a=>(a[2011])),
                  itemStyle: {
                      normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                          offset: 0,
                          color: '#2034f9'
                        }, {
                          offset: 1,
                          color: '#04a1ff'
                        }]),
                      }
                    }
              },
              {
                  name: '破案排名2',
                  type: 'bar',
                  data: data.map(a=>(a[2012])),
                  itemStyle: {
                      normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                          offset: 0,
                          color: '#b92ae8'
                        }, {
                          offset: 1,
                          color: '#6773e7'
                        }]),
                      }
                    }
              }
          ]
      }));
    }
    useEffect(()=>{
      const data = [
        {name:'城关西公安局',2011:2,2012:Math.random()*10},
        {name:'七里河公安局',2011:2,2012:Math.random()*10},
        {name:'西固区公安局',2011:2,2012:Math.random()*10},
        {name:'安宁区公安局',2011:2,2012:Math.random()*10},
        {name:'红古区公安局',2011:2,2012:Math.random()*10},
        {name:'永登县公安局',2011:2,2012:Math.random()*10},
        {name:'皋栏县公安局',2011:2,2012:Math.random()*10},
        {name:'城关西公安局',2011:2,2012:Math.random()*10},
        {name:'城关西公安局',2011:2,2012:Math.random()*10}
      ]
      dataDynamic(data)
      setInterval(()=>{
        const newData = [
            {name:'城关西公安局',2011:2,2012:Math.random()*10},
            {name:'七里河公安局',2011:2,2012:Math.random()*10},
            {name:'西固区公安局',2011:2,2012:Math.random()*10},
            {name:'安宁区公安局',2011:2,2012:Math.random()*10},
            {name:'红古区公安局',2011:2,2012:Math.random()*10},
            {name:'永登县公安局',2011:2,2012:Math.random()*10},
            {name:'皋栏县公安局',2011:2,2012:Math.random()*10},
            {name:'城关西公安局',2011:2,2012:Math.random()*10},
            {name:'城关西公安局',2011:2,2012:Math.random()*10}
          ]
          dataDynamic(newData)
        },3000)     
    },[])
      
    
    return (
        <div className='bordered 破案排名'>
            <h2>案件破获排名</h2>
            <div ref={divRef} className='chart'>
            <div className='legend'>
                <span className='first'/>破案排名1
                <span className='second'/>破案排名2
            </div>
            </div>
        </div>
    )
}