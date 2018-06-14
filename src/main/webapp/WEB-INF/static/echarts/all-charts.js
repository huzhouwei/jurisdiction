//javascript

//信息中心-日活跃用户数线形图
function lineOne(){
	// 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('line1'));

    // 指定图表的配置项和数据
    var option = {
            tooltip : {
        		trigger: 'axis',
    		},
			grid : {
				x : 70,
				y : 20,
				x2 : 50,
				y2 : 60,
				borderWidth : 0,
			},
            legend: {
				data:['今天','昨天','7天前','30天前'],
				x : 'center',
				y : 'bottom',
				textStyle : {
					fontSize: 14,	
				},
				itemWidth : 20,
				itemHeight : 20,
				itemGap : 15,
    		},
    		toolbox: {
    			show: false,
    		},
    		calculable : false,
    		color : ['#97c745','#448ae2','#20afde','#00ba91'],
    		backgroundColor : ['#f2f4f7',],
    		xAxis : [
    			{
    				type : 'category',
        			data : ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00',],
        			axisLine : {    // 轴线
		                show: false,
		            },
		            axisTick : { 
		            	show: false,
		            },
		            splitLine : {
		            	show : true,
		            	lineStyle : {
		            		color: ['#d0d7e2'],
						    width: 1,
						    type: 'dashed'
		            	}
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine : {    // 轴线
		                show: false,
		            },
		            axisTick : { 
		            	show: false,	
		            },
		            splitLine : {
		            	show : true,
		            	lineStyle : {
		            		color: ['#d0d7e2'],
						    width: 1,
						    type: 'dashed'
		            	}
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    series : [
		        {
		            name:'今天',
		            type:'line',
		            symbol: 'circle',
		            symbolSize: 8,
		            data:[3200, 2500, 3100, 2100, 2450, 3100, 2400, 2480, 2000, 1800, 2040, 3100, 3400],
		        },
		        {
		            name:'昨天',
		            type:'line',
		            symbol: 'circle',
		            symbolSize : 8,
		            data:[1990, 1950, 1900, 2000, 2250, 1900, 1750, 1600, 2900, 1980, 2250, 2100, 2700],
		        },
		        {
		            name:'7天前',
		            type:'line',
		            symbol: 'circle',
		            symbolSize : 8,
		            data:[1500, 1450, 1600, 1400, 1150, 500, 750, 900, 1100, 1280, 950, 1100, 900],
		        },
		        {
		            name:'30天前',
		            type:'line',
		            symbol: 'circle',
		            symbolSize : 8,
		            data:[1600, 1100, 1200, 1350, 2350, 1600, 1450, 1800, 2200, 1480, 2650, 1400, 1700],
		        },
		    ]
    	};

    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);

    //图表自适应
    window.addEventListener("resize", function () {
	    myChart1.resize();
	});
}

//信息中心-用户分析图柱形图
function userAnalysis(){
	// 基于准备好的dom，初始化echarts实例
    var myChart2 = echarts.init(document.getElementById('user-analysis'));

    // 指定图表的配置项和数据
    var option = {
            tooltip : {
        		trigger: 'axis',
        		axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            		type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        		}
    		},
			grid : {
				x : 70,
				y : 90,
				x2 : 50,
				y2 : 40,
				borderWidth : 0,
			},
            legend: {
				data:['新增用户','活跃用户','沉默用户','默默用户'],
				right: 0,
				top: 40,
				textStyle : {
					fontSize: 14,	
				},
				itemWidth : 17,
				itemHeight : 17,
				itemGap : 10,
    		},
    		toolbox: {
    			show: false,
    		},
    		calculable : false,
    		color : ['#7cb31f','#f47659','#46c3bf','#4c92eb'],
    		xAxis : [
    			{
    				type : 'category',
        			data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        			axisLine : {    // 轴线
		                show: true,
		                lineStyle : {
		            		color: ['#cad3de'],
						    width: 1,
						    type: 'solid'
		            	}
		            },
		            axisTick : { 
		            	show: false,
		            },
		            splitLine : {
		            	show : false,
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle : {
		            		color: ['#cad3de'],
						    width: 1,
						    type: 'solid'
		            	},
		            },
		            axisTick : { 
		            	show: false,	
		            },
		            splitLine : {
		            	show : true,
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    series : [
		        {
		            name:'新增用户',
		            type:'bar',
		            stack: '总量',
		            data:[150, 200, 300, 100, 300, 300, 400, 480, 200, 100, 240, 300],
		            barWidth : 22,
		        },
		        {
		        	name:'活跃用户',
		            type:'bar',
		            stack: '总量',
		            data:[260, 400, 660, 300, 400, 600, 200, 380, 100, 200, 300, 200],
		            barWidth : 22,
		        },
		        {
		            name:'沉默用户',
		            type:'bar',
		            stack: '总量',
		            data:[260, 400, 660, 300, 400, 600, 200, 380, 100, 200, 300, 200],
		            barWidth : 22,
		        },
		        {
		            name:'默默用户',
		            type:'bar',
		            stack: '总量',
		            data:[260, 400, 660, 300, 400, 600, 200, 380, 100, 200, 300, 200],
		            barWidth : 22,
		        },
		    ]
    	};

    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option);

    //图表自适应
    window.addEventListener("resize", function () {
	    myChart2.resize();
	});
}

//信息中心-KPI活跃用户柱形图
function infoBar2(){
	// 基于准备好的dom，初始化echarts实例
    var myChart3 = echarts.init(document.getElementById('infoBar2'));

    // 指定图表的配置项和数据
    var option = {
            tooltip : {
        		trigger: 'axis',
    		},
			grid : {
				x : 50,
				y : 30,
				x2 : 40,
				y2 : 60,
				borderWidth : 0,
			},
            legend: {
				data:['月活','日活'],
				left: 'center',
				bottom: 8,
				textStyle : {
					fontSize: 14,	
				},
				itemWidth : 24,
				itemHeight : 12,
				itemGap : 20,
    		},
    		toolbox: {
    			show: false,
    		},
    		calculable : false,
    		color : ['#4c92eb','#7cb31f'],
    		xAxis : [
    			{
    				type : 'category',
        			data : ['南京','苏州','常州','徐州','南通','无锡','镇江'],
        			axisLine : {    // 轴线
		                show: true,
		                lineStyle : {
		            		color: ['#cad3de'],
						    width: 1,
						    type: 'solid'
		            	}
		            },
		            axisTick : { 
		            	show: false,
		            },
		            splitLine : {
		            	show : false,
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle : {
		            		color: ['#cad3de'],
						    width: 1,
						    type: 'solid'
		            	},
		            },
		            axisTick : { 
		            	show: false,	
		            },
		            splitLine : {
		            	show : false,
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    series : [
		        {
		            name:'月活',
		            type:'bar',
		            data:[2000, 2300, 1000, 1500, 1300, 2000, 2100],
		            barWidth : 13,
		            barCategoryGap : 32,
		            itemStyle : {
		            	normal: {
            				barBorderRadius: 6,
            			},
            			emphasis: {
            				barBorderRadius: 6,
            			},
		            },
		        },
		        {
		        	name:'日活',
		            type:'bar',
		            data:[1800, 2100, 800, 1400, 1100, 1800, 1400],
		            barWidth : 13,
		            itemStyle : {
		            	normal: {
            				barBorderRadius: 6,
            			},
            			emphasis: {
            				barBorderRadius: 6,
            			},
		            },
		        },
		    ]
    	};

    // 使用刚指定的配置项和数据显示图表。
    myChart3.setOption(option);

    //图表自适应
    window.addEventListener("resize", function () {
	    myChart3.resize();
	});
}

//信息中心-KPI活跃用户柱形图
function infoBar3(){
	// 基于准备好的dom，初始化echarts实例
    var myChart4 = echarts.init(document.getElementById('infoBar3'));

    // 指定图表的配置项和数据
    var option = {
            tooltip : {
        		trigger: 'axis',
    		},
			grid : {
				x : 50,
				y : 30,
				x2 : 40,
				y2 : 60,
				borderWidth : 0,
			},
            legend: {
				data:['月活','日活'],
				left: 'center',
				bottom: 8,
				textStyle : {
					fontSize: 14,	
				},
				itemWidth : 24,
				itemHeight : 12,
				itemGap : 20,
    		},
    		toolbox: {
    			show: false,
    		},
    		calculable : false,
    		color : ['#4c92eb','#7cb31f'],
    		xAxis : [
    			{
    				type : 'category',
        			data : ['南京','苏州','常州','徐州','南通','无锡','镇江'],
        			axisLine : {    // 轴线
		                show: true,
		                lineStyle : {
		            		color: ['#cad3de'],
						    width: 1,
						    type: 'solid'
		            	}
		            },
		            axisTick : { 
		            	show: false,
		            },
		            splitLine : {
		            	show : false,
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle : {
		            		color: ['#cad3de'],
						    width: 1,
						    type: 'solid'
		            	},
		            },
		            axisTick : { 
		            	show: false,	
		            },
		            splitLine : {
		            	show : false,
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    series : [
		        {
		            name:'月活',
		            type:'bar',
		            data:[2000, 2300, 1000, 1500, 1300, 2000, 2100],
		            barWidth : 13,
		            barCategoryGap : 32,
		            itemStyle : {
		            	normal: {
            				barBorderRadius: 6,
            			},
            			emphasis: {
            				barBorderRadius: 6,
            			},
		            },
		        },
		        {
		        	name:'日活',
		            type:'bar',
		            data:[1800, 2100, 800, 1400, 1100, 1800, 1400],
		            barWidth : 13,
		            itemStyle : {
		            	normal: {
            				barBorderRadius: 6,
            			},
            			emphasis: {
            				barBorderRadius: 6,
            			},
		            },
		        },
		    ]
    	};

    // 使用刚指定的配置项和数据显示图表。
    myChart4.setOption(option);

    //图表自适应
    window.addEventListener("resize", function () {
	    myChart4.resize();
	});
}

//业务指标-用户充值方式饼图
function pie1(){
	// 基于准备好的dom，初始化echarts实例
    var myChart5 = echarts.init(document.getElementById('pie1'));

    // 指定图表的配置项和数据
    var option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : '20px',
		        y : '30px',
		        data:['普通充值','充值卡充值','一键充值'],
		        itemWidth : 17,
				itemHeight : 17,
		    },
		    toolbox: {
		        show : false,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {
		                show: true, 
		                type: ['pie', 'funnel'],
		                option: {
		                    funnel: {
		                        x: '25%',
		                        width: '50%',
		                        funnelAlign: 'center',
		                        max: 1548
		                    }
		                }
		            },
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
			calculable : false,
			color:['#3782e0','#7cb31f','#a6c5ff'],
		    series : [
		        {
		            name:'用户充值方式',
		            type:'pie',
		            radius : ['40%', '80%'],
		            itemStyle : {
		                normal : {
		                    label : {
		                        show : false
		                    },
		                    labelLine : {
		                        show : false
		                    }
		                },
		                emphasis : {
		                    label : {
		                        show : false,
		                    }
		                }
		            },
		            data:[
		                {value:310, name:'普通充值'},
		                {value:310, name:'一键充值'},
		                {value:85, name:'充值卡充值'},
		            ]
	        	}
		    ]
		};

    // 使用刚指定的配置项和数据显示图表。
    myChart5.setOption(option);

    //图表自适应
    window.addEventListener("resize", function () {
	    myChart5.resize();
	});
}

//业务指标-档次分布饼图
function pie2(){
	// 基于准备好的dom，初始化echarts实例
    var myChart6 = echarts.init(document.getElementById('pie2'));

    // 指定图表的配置项和数据
    var option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : '20px',
		        y : '30px',
		        data:['10','30','50','100','200','500','1000'],
		        itemWidth : 17,
				itemHeight : 17,
		    },
		    toolbox: {
		        show : false,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {
		                show: true, 
		                type: ['pie', 'funnel'],
		                option: {
		                    funnel: {
		                        x: '25%',
		                        width: '50%',
		                        funnelAlign: 'center',
		                        max: 1548
		                    }
		                }
		            },
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
			calculable : false,
			color:['#3782e0','#7cb31f','#8842a9','#35dcba','#f7c722','#e85a2e','#a6c5ff'],
		    series : [
		        {
		            name:'档次分布',
		            type:'pie',
		            radius : ['40%', '80%'],
		            itemStyle : {
		                normal : {
		                    label : {
		                        show : false
		                    },
		                    labelLine : {
		                        show : false
		                    }
		                },
		                emphasis : {
		                    label : {
		                        show : false,
		                    }
		                }
		            },
		            data:[
		                {value:100, name:'10'},
		                {value:30, name:'30'},
		                {value:15, name:'50'},
		                {value:45, name:'100'},
		                {value:100, name:'200'},
		                {value:50, name:'500'},
		                {value:30, name:'1000'},
		            ]
	        	}
		    ]
		};

    // 使用刚指定的配置项和数据显示图表。
    myChart6.setOption(option);

    //图表自适应
    window.addEventListener("resize", function () {
	    myChart6.resize();
	});
}

//流程节点分析-用户分析图柱形图
function barOne(){
	// 基于准备好的dom，初始化echarts实例
    var myChart7 = echarts.init(document.getElementById('recharge1'));

    // 指定图表的配置项和数据
    var option = {
            tooltip : {
        		trigger: 'axis',
        		axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            		type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        		}
    		},
			grid : {
				x : 70,
				y : 90,
				x2 : 50,
				y2 : 40,
				borderWidth : 0,
			},
            legend: {
				data:['新增用户','活跃用户','沉默用户','默默用户'],
				right: 0,
				top: 40,
				textStyle : {
					fontSize: 14,	
				},
				itemWidth : 17,
				itemHeight : 17,
				itemGap : 10,
    		},
    		toolbox: {
		        show : false,
		    },
    		calculable : false,
    		color : ['#7cb31f','#f47659','#46c3bf','#4c92eb'],
    		xAxis : [
    			{
    				type : 'category',
        			data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        			axisLine : {    // 轴线
		                show: true,
		                lineStyle : {
		            		color: ['#cad3de'],
						    width: 1,
						    type: 'solid'
		            	}
		            },
		            axisTick : { 
		            	show: false,
		            },
		            splitLine : {
		            	show : false,
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle : {
		            		color: ['#cad3de'],
						    width: 1,
						    type: 'solid'
		            	},
		            },
		            axisTick : { 
		            	show: false,	
		            },
		            splitLine : {
		            	show : true,
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    series : [
		        {
		            name:'新增用户',
		            type:'bar',
		            stack: '总量',
		            data:[150, 200, 300, 100, 300, 300, 400, 480, 200, 100, 240, 300],
		            barWidth : 22,
		        },
		        {
		        	name:'活跃用户',
		            type:'bar',
		            stack: '总量',
		            data:[260, 400, 660, 300, 400, 600, 200, 380, 100, 200, 300, 200],
		            barWidth : 22,
		        },
		        {
		            name:'沉默用户',
		            type:'bar',
		            stack: '总量',
		            data:[260, 400, 660, 300, 400, 600, 200, 380, 100, 200, 300, 200],
		            barWidth : 22,
		        },
		        {
		            name:'默默用户',
		            type:'bar',
		            stack: '总量',
		            data:[260, 400, 660, 300, 400, 600, 200, 380, 100, 200, 300, 200],
		            barWidth : 22,
		        },
		    ]
    	};

    // 使用刚指定的配置项和数据显示图表。
    myChart7.setOption(option);

    //图表自适应
    window.addEventListener("resize", function () {
	    myChart7.resize();
	});
}

//流程节点分析-订单分析图柱形图
function barTwo(){
	// 基于准备好的dom，初始化echarts实例
    var myChart8 = echarts.init(document.getElementById('recharge2'));

    // 指定图表的配置项和数据
    var option = {
            tooltip : {
        		trigger: 'axis',
        		axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            		type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        		}
    		},
			grid : {
				x : 70,
				y : 90,
				x2 : 50,
				y2 : 40,
				borderWidth : 0,
			},
            legend: {
				data:['新增用户','活跃用户','沉默用户','默默用户'],
				right: 0,
				top: 40,
				textStyle : {
					fontSize: 14,	
				},
				itemWidth : 17,
				itemHeight : 17,
				itemGap : 10,
    		},
    		toolbox: {
		        show : false,
		    },
    		calculable : false,
    		color : ['#7cb31f','#f47659','#46c3bf','#4c92eb'],
    		xAxis : [
    			{
    				type : 'category',
        			data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        			axisLine : {    // 轴线
		                show: true,
		                lineStyle : {
		            		color: ['#cad3de'],
						    width: 1,
						    type: 'solid'
		            	}
		            },
		            axisTick : { 
		            	show: false,
		            },
		            splitLine : {
		            	show : false,
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle : {
		            		color: ['#cad3de'],
						    width: 1,
						    type: 'solid'
		            	},
		            },
		            axisTick : { 
		            	show: false,	
		            },
		            splitLine : {
		            	show : true,
		            },
		            axisLabel : {
        				show:true,
		                textStyle: {
		                    fontSize: 14,
		                }
		            },
		        }
		    ],
		    series : [
		        {
		            name:'新增用户',
		            type:'bar',
		            stack: '总量',
		            data:[150, 200, 300, 100, 300, 300, 400, 480, 200, 100, 240, 300],
		            barWidth : 22,
		        },
		        {
		        	name:'活跃用户',
		            type:'bar',
		            stack: '总量',
		            data:[260, 400, 660, 300, 400, 600, 200, 380, 100, 200, 300, 200],
		            barWidth : 22,
		        },
		        {
		            name:'沉默用户',
		            type:'bar',
		            stack: '总量',
		            data:[260, 400, 660, 300, 400, 600, 200, 380, 100, 200, 300, 200],
		            barWidth : 22,
		        },
		        {
		            name:'默默用户',
		            type:'bar',
		            stack: '总量',
		            data:[260, 400, 660, 300, 400, 600, 200, 380, 100, 200, 300, 200],
		            barWidth : 22,
		        },
		    ]
    	};

    // 使用刚指定的配置项和数据显示图表。
    myChart8.setOption(option);

    //图表自适应
    window.addEventListener("resize", function () {
	    myChart8.resize();
	});
}
