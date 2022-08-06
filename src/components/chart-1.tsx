import React from 'react'
import * as echarts from 'echarts'
import { useRef } from 'react';
import { useEffect } from 'react';
import {px} from '../shared/px'
import { baseEchartOptions } from '../shared/base-echart-options';
import { createEchartsOptions } from '../shared/create-echarts-options';
export const Chart1 = ()=>{
    const divRef = useRef(null)
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
          ...baseEchartOptions,
          xAxis: {
            data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区','兰州新区', '兰州新区','兰州新区'],
            axisTick:{show:false},
            axisLabel:{
              fontSize:px(10),
              formatter(val){
                if(val.length > 2){
                  const array = val.split('')
                  array.splice(2,0,'\n')
                  
                  return array.join('')
                }else {return val}
              }
            },
          },
          grid:{
            x:px(20),
            x2:px(20),
            y:px(20),
            y2:px(70),
            containLabel:true
        },
          yAxis: {
            axisLabel:{
              fontSize:px(8)
            },
            axisLine:{lineStyle:{color:'#083B70'}},
            splitLine:{show:false},
          },
          series: [
            {
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20,10,10,20]
            },
    
          ]
        })); }, [])
    return(
        <div className='bordered 管辖统计'>
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className='chart'></div>
          </div>
    )
}