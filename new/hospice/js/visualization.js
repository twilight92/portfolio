var arrayServiceType = new Array();
var arrayWard = new Array();
var arrayRegion = new Array();
var arrayOrganType1 = new Array();
var arrayOrganType2 = new Array();
var arrayOrganType3 = new Array();
var arrayOrganType4 = new Array();
var arrayOrganType5 = new Array();
var arrayJob = new Array();
var arrayRole = new Array();
var arrayCareer1 = new Array();
var arrayCareer2 = new Array(); 
var arrayCareer3 = new Array(); 

var arrayStrServiceUsePatient = new Array();
var arrayServiceUsePatient = new Array();
var arrayPatientMaleAge = new Array();
var arrayPatientFemaleAge = new Array();
var arrayMedicalType = new Array();
var arrayReligion = new Array();
var arrayTerminalState = new Array();
var arrauTerminalType = new Array();
var arrayChildType = new Array();
var arrayCarePlace = new Array();
var arrayBeforeCarePlace = new Array();
var arrayServiceUse = new Array();
var arrayOutReason = new Array();
var arrayStrOutReason = new Array();
var arrayInReason = new Array();
var arrayStrInReason = new Array();
var strServiceType = [$("#str_service_type").val()];

if($('.infoAgency').length){    //기관
    arrayServiceType = serviceType;
    arrayWard = ward;
    arrayRegion = region;
    arrayOrganType1 = organType1;
    arrayOrganType2 = organType2;
    arrayOrganType3 = organType3;
    arrayOrganType4 = organType4;
    arrayOrganType5 = organType5;
    arrayJob =  job;
    arrayRole = role;
    arrayCareer1 = career1;
    arrayCareer2 = career2;
    arrayCareer3 = career3;
}else{
    arrayStrServiceUsePatient = strServiceUsePatient;
    arrayServiceUsePatient = serviceUsePatient;
    arrayPatientMaleAge = patientMaleAge; 
    arrayPatientFemaleAge = patientFemaleAge;
    arrayMedicalType = medicalType;
    arrayReligion = religion;
    arrayTerminalState = terminalState;
    arrauTerminalType = terminalType;
    arrayChildType = childType;
    arrayCarePlace = carePlace; 
    arrayBeforeCarePlace = beforeCarePlace; 
    arrayServiceUse = serviceUse;
    arrayOutReason = outReason;
    arrayStrOutReason = strOutReason;
    if($("#service_type").val() == "3"){
        arrayInReason = inReason;
        arrayStrInReason = strInReason;
    }
    
}

function GetData(objArr, label, valueArr, series){
    this.init(objArr, label, valueArr, series);
    return this.baseData;
};

GetData.prototype.clone = function(obj){
      if (obj === null || typeof(obj) !== 'object')
      return obj;

      var copy = obj.constructor();

      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = this.clone(obj[attr]);
        }
      }

      return copy;
};

GetData.prototype.makeDataFrame = function(objArr,label){
    this.baseData  = [];
    for(var i = 0; i < label.length; i++){
        i === 0 ? this.baseData.push(this.clone(objArr[0])) : this.baseData.push(this.clone(objArr[1]))
    }
};

GetData.prototype.init = function(objArr, label, valueArr, series){
    var self = this;
    var typeOfSeries = typeof(series)
    this.makeDataFrame(objArr, label)

    $.each(label, function(i,v){
        self.baseData[i].axisLabel = v;
        $.each(valueArr, function(idx, val){
            if(i == 0){
                if(typeOfSeries !== "undefined"){
                    self.baseData[0].series[idx].seriesName = series[idx]
                }
                self.baseData[0].series[idx].value = valueArr[idx][0]
            } else {
                self.baseData[i].series[idx] = val[i]
            }
        })
    })
};

var objFrame = [{"axisLabel": "", "series": [{"seriesName": "", "value": 0 }] },{"axisLabel": "", "series": [] }];

var numberWithCommas = function(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
var setInitData = function(options, $data){
    switch(this) {
      case chartCommon.halfPieChart:
        this.init.series = $data;
        this.init.title.text = "전체<br/>" + numberWithCommas($data[0].sum()) + "명"
        break;
      case chartCommon.barChart:
        this.init.xAxis[0].categories = $data;
        this.init.xAxis[1].categories = $data;
        break;
    }

    options = $.extend(null, this.init, options);
    return initData = options;
};



var basicSize = function(options){
    var size = {
                    width: "100%",
                    height: "400px"
                };
    options = $.extend(null, size, options);
    return options;
};



/* 차트별 형식에 관한 공통 셋팅 */
var chartCommon = { 
    "columnChart" : {
        init : {
            "chart": {
                "type": "column",
                "style": {
                    "overflow" : "visible"
                }
            },
            "legend": {
                "enabled" : false
            },
            "colors": ["#8064A2", "#e5404c", "#f6c8ba", "#b7b0b5", "#2ea4a8", "#47586f", "#adab6e", "#c9a9c3"],
            "tooltip": {
                "headerFormat": "<div style='text-align: center;'><b>{point.x}</b></div>",
                "useHTML": true,
                "valueSuffix" : "명"
            },
            "xAxis": {
                "title": {
                    "text": "기간",
                    "offset" : 3,
                    "align" : "high",
                    "x" : 40,
                }
            },
            "yAxis": {
                "title": {
                    "text": "이용 환자 수",
                    "rotation" : 360,
                    "align" : "high",
                    "offset" : 5,
                    "y" : -20,
                },
            }
        },
        setInitData : setInitData
    },
    "barChart" : {
        init : {
            "chart": {
                "type": 'bar'
            },
            "colors": ["#fd9c3c", "#e5404c", "#f6c8ba", "#b7b0b5", "#2ea4a8", "#47586f", "#adab6e", "#c9a9c3"],
            "xAxis": [{ // 왼쪽
                "reversed": false,
                "labels": {
                    "step": 1
                }
            }, { // 오른쪽
                "opposite": true,
                "reversed": false,
                "linkedTo": 0,
                "labels": {
                    "step": 1
                }
            }],
            "yAxis": {
                "title": {
                    "text": null
                },
                "labels": {
                    "formatter": function() {
                        return Math.abs(this.value);
                    }
                }
            },
            "plotOptions": {
                "series": {
                    "stacking": 'normal'
                }
            },
            "tooltip": {
                "formatter": function() {
                    return '<tspan style="fill:'+ this.series.color +'">●</tspan><b> ' + this.series.name + ', 연령대 ' + this.point.category + '</b><br/>' +
                        '이용 환자 수: ' + Math.abs(this.point.y) + '명' ;
                }
            }
        },
        setInitData : setInitData
    },
    "pieChart" : {
        init : {
            "chart": {
                "type": "pie"
            },
            "plotOptions" : {
                "series" : {
                    "dataLabels" : {
                        "enbaled" : true,
                        "format" : "<div style='text-align:center;line-height:8px'><b style='display:block;'>{point.name}</b><br/>{point.y}명({point.percentage:.1f}%)</div>",
                        "useHTML":true
                    }
                }
            },
            "colors" : ["#fd9c3c", "#e5404c", "#f6c8ba", "#b7b0b5", "#2ea4a8", "#47586f", "#adab6e", "#c9a9c3"],
            "tooltip": {
                "valueSuffix" : "명"
            }
        },
        setInitData : setInitData
    },
    "halfPieChart" : {
        init : {
            "chart": {
                "plotBackgroundColor": null,
                "plotBorderWidth": 0,
                "plotShadow": false,
            },
            "colors": ["#8064A2", "#7030A0", "#4F81BD", "#953735", "#00B050", "#47586f", "#adab6e", "#c9a9c3"],
            "title": {
                "align": "center",
                "verticalAlign": "middle",
                "y": 40,
                "style" : {
                    "fontWeight" : "bold"
                }
            },
            "tooltip": {
                "valueSuffix" : "명"
            },
            // "tooltip": {
            //     "pointFormat": '<b>{point.y}명</b>'
            // },
            "plotOptions": {
                "pie": {
                    "dataLabels": {
                        "distance": -45,
                        "style": {
                            "fontWeight": 'bold',
                            "color": 'white',
                        },
                        "format" : "<b style='text-align:center; display:block; margin-top:-12px'>{point.name}<br/><span class='count'>{point.y}</span>명</b>({point.percentage:.1f}%)",
                        "useHTML" : true
                    },
                    "startAngle": -90,
                    "endAngle": 90,
                    "center": ['50%', '75%']
                }
            }
        },
        setInitData : setInitData
    },
    "columnChartColor_01" : {
        init : {
            "chart": {
                "type": "column",
                "style": {
                    "overflow" : "visible",
                }
            },
            "colors": ["#F79646", "#4BACC6", "#9BBB59", "#8064A2", "#C0504D", "#4F81BD", "#adab6e", "#c9a9c3"],
            "xAxis" : {
                "labels" : {
                    "style" : {
                        "display" : "none"
                    }
                }
            },
            "yAxis": {
                "title": {
                    "text": "건수",
                    "rotation" : 360,
                    "align" : "high",
                    "offset" : 5,
                    "y" : -20,
                },
            },
            "tooltip": {
                // "formatter": function() {
                //     return '<b>' + this.series.name + '</b><br/>' + numberWithCommas(Math.abs(this.point.y)) + '명' ;
                // },
                "headerFormat" : "",
                "valueSuffix" : "명"
            }
        
        },
        setInitData : setInitData
    },
    "columnChartColor_02" : {
        init : {
            "chart": {
                "type": "column"
            },
            "colors": ["#fd9c3c", "#e5404c", "#f6c8ba", "#b7b0b5", "#2ea4a8", "#47586f", "#adab6e", "#c9a9c3"],
            "yAxis": {
                "title": {
                    "text": "",
                },
            },
            "plotOptions": {
                "column": {
                    "stacking": "normal"
                }
            },
            "tooltip": {
                "headerFormat" : "",
                "valueSuffix" : "개"
            }
        },
        setInitData : setInitData
    },
    "pointChart" : {
        init : {
            "colors": ["#C0504D", "#4F81BD", "#9BBB59", "#b7b0b5", "#2ea4a8", "#47586f", "#adab6e", "#c9a9c3"],
            "xAxis": {
                "title": {
                    "text": ""
                }
            },
            "yAxis": {
                "title": {
                    "text": ""
                }
            },
            "plotOptions": {
                "series": {
                    "allowPointSelect": false,
                    "cursor": 'pointer'
                }
            },
            "tooltip" : {
                "valueSuffix" : "명"
            }
        },
        setInitData : setInitData
    }
};
/* //차트별 형식에 관한 공통 셋팅 */



/* 항목별 데이터 */
var chartVisualizationSetting = {
    infoPatient : {
        /* 서비스 이용 환자 수 */
        numberOfPatient : {
            initialize: function(options) {
                chartCommon.columnChart.setInitData(options);

                createIBChart("number_of_patient", "numberOfPatient", basicSize({width: "97%"}));
                numberOfPatient.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": []
                }
            },
            doAction: function() {
                var period = arrayStrServiceUsePatient,
                    value01 = arrayServiceUsePatient,
                    series = strServiceType;

                var newData = new GetData(
                    objFrame,
                    period,
                    [value01],
                    series
                );
    
                this.data.ibchart.data = newData;
                numberOfPatient.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /* //서비스 이용 환자 수 */



        /* 성별 & 연령별 이용 환자 수 */
          patientNumber : {
            initialize: function(options) {
                // Age categories
                var categories = ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95-99', '100 + '];

                chartCommon.barChart.setInitData(options, categories);

                createIBChart("patient_number", "patientNumber", basicSize());
                patientNumber.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": []
                }
            },
            doAction: function() {
                var categories = ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95-99', '100 + '],
                   value01 = arrayPatientMaleAge,
                   value02 = arrayPatientFemaleAge,
                    series = ["남성","여성"];
                 
                var newData = new GetData(
                    [{
                        "series": [{
                            "seriesName": "",
                            "value": 0 
                        }, {
                            "seriesName": "",
                            "value": 0 }] 
                        }, {
                            "series": []
                        }],
                    categories,
                    [value01, value02],
                    series
                );

                this.data.ibchart.data = newData;

                patientNumber.loadSearchData(this.data, {
                    append: true
                });
            }
        },        
        /* //성별 & 연령별 이용 환자 수 */




        /* 의료보장 분포 */ 
        medicalSecurityDistribution : {
            initialize: function(options) {
                chartCommon.pieChart.setInitData(options);

                createIBChart("medical_security_distribution", "medicalSecurityDistribution", basicSize());
                medicalSecurityDistribution.setOptions(initData);
                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": []
                }
            },
            doAction: function() {
                var kind = ["의료급여 1종", "의료급여 2종", "건강보험", "기타"],
                    value01 = arrayMedicalType,
                    series = ["의료보장 분포"]
    
                var newData = new GetData(
                    objFrame,
                    kind,
                    [value01],
                    series
                );
    
                this.data.ibchart.data = newData;
                
                medicalSecurityDistribution.loadSearchData(this.data, {
                    append: true
                });
            }
        },
         //의료보장 분포 */ 


        /* 종교 분포 */
        religionDistribution : {
            initialize: function(options) {
                chartCommon.halfPieChart.setInitData(options, this.data);

                createIBChart("religion_distribution", "religionDistribution", basicSize());

                religionDistribution.setOptions(initData);
                this.doAction();
            },
            data: [{
                "type": "pie",
                "name": "종교 분포",
                "innerSize": "50%",
                "data": [
                    ["기독교", arrayReligion[0]],
                    ["불교", arrayReligion[1]],
                    ["천주교", arrayReligion[2]],
                    ["기타", arrayReligion[3]],
                    ["응답없음", arrayReligion[4]]
                ],
                "sum" : function(){
                    var total = 0;
                    for(var i in this.data) { total += this.data[i][1]; }
                    return total;
                }
            }],
            doAction: function() {
                religionDistribution.draw();
            }
        },
         //종교 분포 */



        /* 말기 병식 */
        lastPeriodInsight : {
            initialize: function(options) {
                chartCommon.halfPieChart.setInitData(options, this.data);

                createIBChart("last_period_insight", "lastPeriodInsight", basicSize());

                lastPeriodInsight.setOptions(initData);

                this.doAction();
            },
            data: [{
                "type": "pie",
                "name": "말기 병식",
                "innerSize": "50%",
                "data": [
                    ["있음", arrayTerminalState[1]],
                    ["없음", arrayTerminalState[0]]
                ],
                "sum" : function(){
                    var total = 0;
                    for(var i in this.data) { total += this.data[i][1]; }
                    return total;
                }
            }],
            doAction: function() {
                lastPeriodInsight.draw();
            }
        },
         //말기 병식 */



        /* 말기 진단 분류 */ 
        terminalDiagnosis : {
            initialize: function(options) {
                chartCommon.pieChart.setInitData(options);

                createIBChart("terminal_diagnosis", "terminalDiagnosis", basicSize());
                terminalDiagnosis.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": []
                }
            },
            doAction: function() {
                var kind = ["암", "ADIS", "COPD", "LC"],
                    value01 = arrauTerminalType,
                    series = ["말기 진단 분류"]
    
                var newData = new GetData(
                    objFrame,
                    kind,
                    [value01],
                    series
                );
    
                this.data.ibchart.data = newData;
            
                terminalDiagnosis.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /* //말기 진단 분류 */ 
         
         
         
        /* 질병 진단 분류 */
        diseaseDiagnosis : {
            initialize: function(options) {
                chartCommon.columnChart.setInitData(options);

                createIBChart("disease_diagnosis", "diseaseDiagnosis", basicSize({width: "97%"}));
                diseaseDiagnosis.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": []
                }
            },
            doAction: function() {
                var kind = ["심혈관계 질환", "신경계 질환", "호흡기 질환", "신장 질환", "소화기 질환", "혈액 면역 질환", "대사성 질환", "암 질환", "신생아 질환", "선청성 유전 질환", "기타  질환"],
                    value01 = arrayChildType,
                    series = ["소아청소년"]
    
                var newData = new GetData(
                    objFrame,
                    kind,
                    [value01],
                    series
                );
    
                this.data.ibchart.data = newData;
            
                diseaseDiagnosis.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /* //질병 진단 분류 */



        /* 돌봄 장소 선호 */
        preferredPlace : {
            initialize: function(options) {
                chartCommon.columnChartColor_01.setInitData(options);

                createIBChart($("#preferred_place")[0], "preferredPlace", basicSize());

                preferredPlace.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": [{
                        "axisLabel": "돌봄 장소 선호",
                        "series": [{
                            "seriesName": "가정",
                            "value": arrayCarePlace[0]
                        }, {
                            "seriesName": "시설(요양원)",
                            "value": arrayCarePlace[1]
                        }, {
                            "seriesName": "의료기관(호스피스 병동)",
                            "value": arrayCarePlace[2]
                        }, {
                            "seriesName": "의료기관(급성기 병동)",
                            "value": arrayCarePlace[3]
                        }, {
                            "seriesName": "의료기관(요양병원)",
                            "value": arrayCarePlace[4]
                        }, {
                            "seriesName": "기타",
                            "value": arrayCarePlace[5]
                        }]
                    }]
                }
            },
            doAction: function() {
                //소아청소년일 경우
                var self = this;
                if($('#content').hasClass('type_pediatrics')){
                    self.data.ibchart.data = [{
                        "axisLabel": "돌봄 장소 선호",
                        "series": [{
                            "seriesName": "가정",
                            "value": arrayCarePlace[0]
                        }, {
                            "seriesName": "의료기관(급성기 병동)",
                            "value": arrayCarePlace[1]
                        }, {
                            "seriesName": "의료기관(중환자실)",
                            "value": arrayCarePlace[2]
                        }, {
                            "seriesName": "의료기관(호스피스 병동)",
                            "value": arrayCarePlace[3]
                        }, {
                            "seriesName": "기타",
                            "value": arrayCarePlace[4]
                        }]
                    }]
                }
                preferredPlace.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /*//돌봄 장소 선호 */
         
        /* 돌봄 장소 선호_2017년 9월 이전 */
        preferredPlaceBefore : {
            initialize: function(options) {
                chartCommon.columnChartColor_01.setInitData(options);

                createIBChart($("#preferred_place_before")[0], "preferredPlaceBefore", basicSize());

                preferredPlaceBefore.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": [{
                        "axisLabel": "돌봄 장소 선호",
                        "series": [{
                            "seriesName": "가정",
                            "value": arrayBeforeCarePlace[0]
                        }, {
                            "seriesName": "의료기관",
                            "value": arrayBeforeCarePlace[1]
                        }, {
                            "seriesName": "시설",
                            "value": arrayBeforeCarePlace[2]
                        }, {
                            "seriesName": "기타",
                            "value": arrayBeforeCarePlace[3]
                        }]
                    }]
                }
            },
            doAction: function() {
                preferredPlaceBefore.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /* //돌봄 장소 선호_2017년 9월 이전 */

        /* 서비스 이용 건수 */
        numberOfServiceUse : {
            initialize: function(options) {
                chartCommon.columnChart.setInitData(options);

                createIBChart("number_of_service_use", "numberOfServiceUse", basicSize());

                numberOfServiceUse.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": []
                }
            },
            doAction: function() {
                var number = ["1회", "2회", "3회", "4회", "5회", "6회", "7회", "8회", "9회", "10회 이상"],
                    value01 = arrayServiceUse,
                    seriesName = ["입원형"]
    
                var newData = new GetData(
                    objFrame,
                    number,
                    [value01],
                    seriesName
                );
    
                this.data.ibchart.data = newData;
            
                numberOfServiceUse.loadSearchData(this.data, {
                    append: true
                });
            }
        },
         //서비스 이용 건수 */



        /* 퇴원 이유 */ 
        reasonForDischarge : {
            initialize: function(options) {
                chartCommon.pieChart.setInitData(options);

                createIBChart("reason_for_discharge", "reasonForDischarge", basicSize());
                reasonForDischarge.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": []
                }
            },
            doAction: function() {
                var reason =    arrayStrOutReason,
                    value01 = arrayOutReason,
                    series = ["퇴원 이유"];
    
                var newData = new GetData(
                    objFrame,
                    reason,
                    [value01],
                    series
                );
    
                this.data.ibchart.data = newData;
            
                reasonForDischarge.loadSearchData(this.data, {
                    append: true
                });
            }
        },
         //퇴원 이유 */ 



        /* 입원 이유 */ 
        reasonForHospitalization : {
            initialize: function(options) {
                chartCommon.pieChart.setInitData(options);

                

                createIBChart("reason_for_hospitalization", "reasonForHospitalization", basicSize());
                reasonForHospitalization.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": [{
                        "axisLabel": "증상조절",
                        "series": [{
                            "seriesName": "입원 이유",
                            "value": 4655
                        }]
                    }, {
                        "axisLabel": "기타",
                        "series": [11875]
                    }, {
                        "axisLabel": "임종돌봄",
                        "series": [478120]
                    }, {
                        "axisLabel": "돌봄 제공자 관련<br/>(소진, 부재)",
                        "series": [48701]
                    }]
                }
            },
            doAction: function() {
                var reason = arrayStrInReason
                value01 = arrayInReason,
                    seriesName = ["입원 이유"]
    
                var newData = new GetData(
                    [{
                        "axisLabel": "",
                        "series": [{
                            "seriesName": "",
                            "value": 0
                        }]
                    }, {
                        "axisLabel": "",
                        "series": [] 
                    }],
                    reason,
                    [value01],
                    seriesName
                );
    
                this.data.ibchart.data = newData;
            
                reasonForHospitalization.loadSearchData(this.data, {
                    append: true
                });
            }
        }
         //입원 이유 */ 
    },
    infoAgency :{

        /* [기관정보] 서비스 유형별 분포 현황 */
        serviceType : {
            initialize: function(options) {
                chartCommon.columnChartColor_01.setInitData(options);

                createIBChart($("#service_type")[0], "serviceType", basicSize());

                serviceType.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": [{
                        "axisLabel": "",
                        "series": [{
                            "seriesName": "입원형",
                            "value": arrayServiceType[1]
                        }, {
                            "seriesName": "가정형",
                            "value": arrayServiceType[2]
                        }, {
                            "seriesName": "자문형",
                            "value": arrayServiceType[3]
                        }, {
                            "seriesName": "소아청소년",
                            "value": arrayServiceType[4]
                        }]
                    }]
                }
            },
            doAction: function() {
                serviceType.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /* //[기관정보] 서비스 유형별 분포 현황 */



        /* [병동정보] 총 병상 및 인실별 분포 현황 */ 
        impersonalDistribution : {
            initialize: function(options) {
                chartCommon.pieChart.setInitData(options);

                createIBChart("impersonal_distribution", "impersonalDistribution", basicSize());
                impersonalDistribution.setOptions(initData);
                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": [{
                        "axisLabel": "1인실",
                        "series": [{
                            "seriesName": "인실별 분포 현황",
                            "value": arrayWard[0]
                        }]
                    }, {
                        "axisLabel": "2인실",
                        "series": [arrayWard[1]]
                    }, {
                        "axisLabel": "3인실",
                        "series": [arrayWard[2]]
                    }, {
                        "axisLabel": "4인실",
                        "series": [arrayWard[3]]
                    }, {
                        "axisLabel": "5인실",
                        "series": [arrayWard[4]]
                   }]
                }
            },
            doAction: function() {
                var room = ["1인실", "2인실", "3인실", "4인실", "5인실"],
                    value01 = arrayWard,
                    seriesName = ["인실별 분포 현황"]
    
                var newData = new GetData(
                    objFrame,
                    room,
                    [value01],
                    seriesName
                );
    
                this.data.ibchart.data = newData;
            
                impersonalDistribution.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /* //[병동정보] 총 병상 및 인실별 분포 현황 */ 



        /* [기관정보] 서비스별 기관 종별 & 지역별 분포 현황 */
        organType : {
            initialize: function(location, value01, value02, value03, value04, value05) {

                chartCommon.columnChartColor_02.setInitData();

                createIBChart("organ_type", "organType", basicSize());

                organType.setOptions(initData);

                this.doAction(location, value01, value02, value03, value04, value05);
            },
            data: {
                "ibchart": {
                    "data": []
                }
            },
            doAction: function(location, value01, value02, value03, value04, value05) {
                var location, value01, value02, value03, value04, value05, baseData;
                var series = ["상급종합","종합","병원","의원","요양의원"]
                
                if(typeof(arguments[0]) === 'undefined'){
                    location = arrayRegion;
                    value01 = arrayOrganType1,
                    value02 = arrayOrganType2,
                    value03 = arrayOrganType3,
                    value04 = arrayOrganType4,
                    value05 = arrayOrganType5;
                } else {
                    location = location;
                    value01 = value01;
                    value02 = value02;
                    value03 = value03;
                    value04 = value04;
                    value05 = value05;
                }
                
                var newData = new GetData(
                        [{
                            "axisLabel": "", 
                                "series": 
                                [{
                                    "seriesName": "", 
                                    "value": 0 
                                }, {
                                    "seriesName": "",
                                    "value": 0 
                                }, {
                                    "seriesName": "", 
                                    "value": 0 
                                }, {
                                    "seriesName": "", 
                                    "value": 0 
                                }, {
                                    "seriesName": "", 
                                    "value": 0 
                                }]
                            }, {
                                    "axisLabel": "",
                                    "series": [] 
                        }],
                        location,
                        [value01, value02, value03, value04, value05],
                        series
                    );

                    this.data.ibchart.data = newData;

                organType.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /* //[기관정보] 서비스별 기관 종별 & 지역별 분포 현황 */


        /* [인력정보] 직종별 인력 분포 현황 */
        occupationType : {
            initialize: function(options) {
                chartCommon.columnChartColor_02.setInitData(options);

                createIBChart("occupation_type", "occupationType", basicSize({
                    width: "60%",
                    height: "885px"
                }));

                occupationType.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": [{
                        "axisLabel": "인력 분포 현황",
                        "series": [{
                            "seriesName": "의사",
                            "value": arrayJob[0]
                        }, {
                            "seriesName": "간호사",
                            "value": arrayJob[1]
                        }, {
                            "seriesName": "사회복지사",
                            "value": arrayJob[2]
                        }, {
                            "seriesName": "성직자",
                            "value": arrayJob[3]
                        }, {
                            "seriesName": "기타",
                            "value": arrayJob[4]
                        }]
                    }]
                }
            },
            doAction: function() {
                occupationType.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /* //[인력정보] 직종별 인력 분포 현황 */




        /* [인력정보] 직종별 인력 역할 분포 - 의사 */
        ocuRoleDoctor : {
            initialize: function(options) {
                chartCommon.columnChartColor_01.setInitData(options);

                createIBChart("doctor_role", "ocuRoleDoctor", basicSize({ height: "250px"}));

                ocuRoleDoctor.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": [{
                        "axisLabel": "의사 역할",
                        "series": [{
                            "seriesName": "입원형호스피스",
                            "value": arrayRole[0]
                        }, {
                            "seriesName": "가정형호스피스",
                            "value": arrayRole[1]
                        }, {
                            "seriesName": "자문형호스피스",
                            "value": arrayRole[2]
                        }, {
                            "seriesName": "소아청소년 완화의료",
                            "value": arrayRole[3]
                        }]
                    }]
                }
            },
            doAction: function() {
                ocuRoleDoctor.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /* //[인력정보] 직종별 인력 역할 분포 - 의사 */



        /* [인력정보] 직종별 인력 역할 분포 - 간호사 */
        ocuRoleNurse : {
            initialize: function(options) {
                chartCommon.columnChartColor_01.setInitData(options);

                createIBChart("nurse_role", "ocuRoleNurse", basicSize({ height: "250px"}));

                ocuRoleNurse.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": [{
                        "axisLabel": "간호사 역할",
                        "series": [{
                            "seriesName": "병동근무<br/>[수간호사]",
                            "value": arrayRole[4]
                        }, {
                            "seriesName": "병동근무<br/>[평간호사]",
                            "value": arrayRole[5]
                        }, {
                            "seriesName": "가정형호스피스",
                            "value": arrayRole[6]
                        }, {
                            "seriesName": "자문형호스피스",
                            "value": arrayRole[7]
                        }, {
                            "seriesName": "소아청소년<br/>완화의료",
                            "value": arrayRole[8]
                        }, {
                            "seriesName": "코디네이터",
                            "value": arrayRole[9]
                        }, {
                            "seriesName": "호스피스완화의료<br/>시스템",
                            "value": arrayRole[10]
                        }]
                    }]
                }
            },
            doAction: function() {
                ocuRoleNurse.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /* //[인력정보] 직종별 인력 역할 분포 - 간호사 */



        /* [인력정보] 직종별 인력 역할 분포 - 사회복지사 */
        ocuRoleSorcialWorker : {
            initialize: function(options) {
                chartCommon.columnChartColor_01.setInitData(options);

                createIBChart("social_worker_role", "ocuRoleSorcialWorker", basicSize({ height: "250px"}));

                ocuRoleSorcialWorker.setOptions(initData);

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": [{
                        "axisLabel": "사회복지사 역할",
                        "series": [{
                            "seriesName": "코디네이터",
                            "value": arrayRole[11]
                        }, {
                            "seriesName": "입원형호스피스",
                            "value": arrayRole[12]
                        }, {
                            "seriesName": "가정형호스피스",
                            "value": arrayRole[13]
                        }, {
                            "seriesName": "자문형호스피스",
                            "value": arrayRole[14]
                        }, {
                            "seriesName": "소아청소년 완화의료",
                            "value": arrayRole[15]
                        }, {
                            "seriesName": "호스피스완화의료 시스템",
                            "value": arrayRole[16]
                        }]
                    }]
                }
            },
            doAction: function() {
                ocuRoleSorcialWorker.loadSearchData(this.data, {
                    append: true
                });
            }
        },
        /* //[인력정보] 직종별 인력 역할 분포 - 사회복지사 */



        /* [인력정보] 직종별 인력 근무 경력 분포 현황 */
        "careerDistribution" : {
            initialize: function(options) {
                chartCommon.pointChart.setInitData(options);

                createIBChart("career_distribution", "careerDistribution", basicSize());
                careerDistribution.setOptions(initData);

                if (this.setIBEvents) {
                    this.setIBEvents();
                }

                this.doAction();
            },
            data: {
                "ibchart": {
                    "data": []
                }
            },
            doAction: function() {
                var period = ["6개월<br/>미만", "1년<br/>미만", "1년 6개월<br/>미만", "2년<br/>미만", "2년6개월<br/>미만", "3년<br/>미만", "3년 6개월<br/>미만", "4년<br/>미만", "4년 6개월<br/>미만", "5년<br/>미만", "5년 6개월<br/>미만", "6년<br/>미만", "6년 6개월<br/>미만", "7년<br/>미만", "7년 6개월<br/>미만", "8년<br/>미만", "8년 6개월<br/>미만", "9년<br/>미만", "9년 6개월<br/>미만", "10년<br/>미만", "10년<br/>이상"],
                    value01 = arrayCareer1;
                    value02 = arrayCareer2;
                    value03 = arrayCareer3;
                    seriesName = ["의사", "간호사", "사회복지사"];


                var newData = new GetData(
                        [{
                            "axisLabel": "", 
                            "series": [{
                                "seriesName": "",
                                 "value": 0
                            }, {
                            "seriesName": "",
                            "value": 0 
                            },{
                            "seriesName": "",
                            "value": 0 
                            }]
                        }, objFrame[1]],
                        period,
                        [value01, value02, value03],
                        seriesName
                    );

                    this.data.ibchart.data = newData;

                careerDistribution.loadSearchData(this.data, {
                    append: true
                });
            }
        }
        /* //[인력정보] 직종별 인력 근무 경력 분포 현황 */
    }
};
/* //항목별 데이터 */



var visualization = (function(d, w, $) {
    var visualization = visualization || {};

    function numberComma(){
        $('.number_comma').each(function(){
            $(this).text(numberWithCommas($(this).text()))
        })
    };



    function changeYear(){
        $('.filter > select').change(function(){
            var sText = $(this).find('option:selected').text();
            $('.percent_wrap').find('.left, .right').find('>h1 span').text(sText);
        })
    };



    function searchActive(){
        var $filter = $('.infoAgency .filter'),
            $el =  $filter.find('select');

        function reset($el){
            $el.focus();
        };

        function flag(){
            var idx = 0;
           $el.each(function(i){
                if($(this).find('option:eq(0)').is(':selected')){
                    reset($(this), '값을 선택해주세요')
                    return false;
                } else {
                    idx += 1;
                }
            })
            if(idx ==$el.length){
                return true;
            }
        };
        
        function checkSelect(){
            var $search = $filter.find('.search'),
                sActive = 'active',
                sDisabled = 'disabled';

            flag() ? $search.addClass(sActive).removeAttr(sDisabled) : $search.removeClass(sActive).attr(sDisabled, true)
        }
        setTimeout(checkSelect,10);
        $el.change(checkSelect)
    };



    function percentWidth(){
        var boxWidth = $('.percent_wrap .right .bar').outerWidth(true),
            thirdBarArr = [],
            widthArr = [],
            sWidth = 'width';

        function getValueWidth($bar, flag){
            $bar.find('.bar>div').each(function(j){
                var minWidth = $(this).find('>p').outerWidth(true),
                    percentageValue = $(this).find('.percentage').text(),
                    minPercent = Math.ceil(minWidth/boxWidth*100),
                    $this = $(this);

                function resultWidth($el, value){
                    $el.css(sWidth,value + '%');
                };

                //2보다 작은 경우 true를 전달 받음
                if(flag){
                    if(minPercent > percentageValue){
                        resultWidth($this,minPercent);
                        j == 0 ? resultWidth($this.next(),(100 - minPercent)) : resultWidth($this.prev(),(100 - minPercent));
                        return false;
                    } else {
                        resultWidth($this,percentageValue);
                    }
                } else {
                    widthArr.push(minPercent);
                    minPercent > percentageValue ? thirdBarArr.push(minPercent) : thirdBarArr.push(percentageValue)
                }

            })
        };



        function common(){
            $('.right .bar_box').each(function(i){
                var $box = $(this),
                    isLessThan2 = function(){
                    return $box.find('.bar > div').length <= 2;
                };

                if(isLessThan2()){
                    getValueWidth($box, isLessThan2());
                } else {
                    thirdBarArr = [];
                    getValueWidth($box, isLessThan2());
                    moreThan2($box) 
                }
            })
        };



        function moreThan2($el){
            var flag = true,
                total = 0,
                output = 0,
                excessVal = 0,
                minusVal;

            function GetAValue(arr){
                $el.each(function(){
                    $(this).find('.bar > div').each(function(i){
                        $(this).css(sWidth,arr[i] + '%');
                    })
                });
            };

            for(var i in thirdBarArr){
                if(thirdBarArr[i] > widthArr[i]) total += 1;

                output += Number(thirdBarArr[i]);

                if(typeof(thirdBarArr[i]) == 'string') excessVal += 1
            }

            //모든 퍼센트가 최소너비보다 클경우 flag는 false
            if(total === thirdBarArr.length){
                flag = false;
                GetAValue(thirdBarArr)

             }

            //배열의 합이 100이 넘을 경우 100에서 초과한 값을 최소너비를 넘어가는 n개의 영역들에서만 그 갯수(n)만큼 나눠서 뺌(minusVal/excessVal), 단 뺄 경우에 최소너비보다 작아지면 해당 영역은 최소값으로 처리
            if(flag){
                if(output > 100) minusVal = output - 100;
                var output = 0;
                    minusVal;
                for(var i in thirdBarArr){
                    if(typeof(thirdBarArr[i]) == 'string'){
                        if(Number(thirdBarArr[i]) - (minusVal/excessVal) > widthArr[i]){
                            thirdBarArr[i] = Number(thirdBarArr[i]) - (minusVal/excessVal)
                        } else {
                            thirdBarArr[i] = widthArr[i];
                        }
                    }
                    output += Number(thirdBarArr[i]);
                }

                //뺄 경우에 최소너비보다 작아질 경우 못 뺀 값을 최대값에서 제외
                if(output > 100){
                    var minusVal = output - 100;

                    Array.max = function(array){ 
                        return Math.max.apply(Math, array); 
                    }; 

                    var maxX = Array.max(thirdBarArr),
                        index = thirdBarArr.indexOf(maxX); 

                    thirdBarArr[index] = thirdBarArr[index] -  minusVal;
                }

                GetAValue(thirdBarArr)
                
            }

        };
        common();
    };

    function filtering(){
        var $resultTerm = $('.result_term');

        var resultToggle = {
            _show : function(){
                $resultTerm.show();
            },
            _hide : function(){
                $resultTerm.hide();
            }
        };

        function filterTerm(){
            var sActive = 'active';

            $('.filter_term .choice_btn input').click(function(){
                var sToggleEl = 'i, span:eq(1), span:eq(3)',
                    $selectMonth = $('.select_month'),
                    sDisabled = 'disabled',
                    sVisible = 'visible';

                $(this).addClass(sActive).siblings().removeClass(sActive);
                resultToggle._hide();

                isChoiceYear = {
                    yes : function(){
                        $selectMonth.attr(sDisabled, true).find('option:eq(0)').prop("selected", true);
                        $resultTerm.find(sToggleEl).hide().removeClass(sVisible);
                    },
                    no : function(){
                        $selectMonth.attr(sDisabled, false);
                        $resultTerm.find(sToggleEl).show().addClass(sVisible);
                    }
                };

                $(this).hasClass('year') ? isChoiceYear.yes() : isChoiceYear.no();

            });
        };

        function resultTerm(){
            $('.choice_term input').click(function(){
                var yearSelected = 'select:first-child option:selected'

                function reset($el, msg){
                    alert(msg)
                    resultToggle._hide()
                    $el.focus();
                };

                function flag(){
                    var idx = 0;
                    $('.choice_term select:enabled').each(function(i){
                        if($(this).find('option:eq(0)').is(':selected')){
                            reset($(this), '값을 선택해주세요')
                            return false;
                        } else if($('.choice_term > div:first-child').find(yearSelected).text() > $('.choice_term > div:nth-child(3)').find(yearSelected).text()){
                            reset($('.choice_term > div:nth-child(3) select:first-child'), '하위 연은 선택 할 수 없습니다.')
                            return false;
                        } else {
                            idx += 1;
                        }
                    })

                    if(idx == $('.choice_term select:enabled').length){
                        return true;
                    }

                };
                
                if(flag()){
                    $('.choice_term select:enabled').each(function(i){
                        var selectedVal = $(this).find('option:selected').text();
                        resultToggle._show();
                        $('.result_term span.visible').eq(i).text(selectedVal);
                    });                
                }
            });
        };

        filterTerm();
        //resultTerm();
    };



    function fitLeftHeight(){
        $('.percent_wrap .left').height($('.percent_wrap .right').height());
    };



    function exposuringoverlap(){
        var $el = $('.chart_box>div');
        $el.each(function(){
            if($(this).hasClass('overlap')){
                $(this).find('>h1').append('<span>중복 데이터</span>')
            }
        })
    };


    var chartVisualizationInitialize = {
        setting : chartVisualizationSetting,
        infoPatient : function(){
            var patSetting  = this.setting.infoPatient;

            //서비스 이용 환자 수
            patSetting.numberOfPatient.initialize();

            //성별 & 연령별 이용 환자 수
            patSetting.patientNumber.initialize();

            //의료보장 분포
            patSetting.medicalSecurityDistribution.initialize();

            //종교 분포
            patSetting.religionDistribution.initialize();

            //돌봄 장소 선호
            patSetting.preferredPlace.initialize({
                "yAxis": {"title": {"text": "환자 수", "rotation" : 360, "align" : "high", "offset" : 5, "y" : -20, }, },
            });

            if($('.prefferred_branch').length){
                //돌봄 장소 선호_2017년 9월 이전
                 patSetting.preferredPlaceBefore.initialize({
                     "yAxis": {"title": {"text": "환자 수", "rotation" : 360, "align" : "high", "offset" : 5, "y" : -20, }, },
                     "colors": ["#70AD47", "#4472C4", "#A5A5A5", "#FFC000", "#2ea4a8", "#47586f", "#adab6e", "#c9a9c3"],
                 }); 
             }
            
            //서비스 이용 건수
            patSetting.numberOfServiceUse.initialize({
                "colors": ["#4BACC6", "#e5404c", "#f6c8ba", "#b7b0b5", "#2ea4a8", "#47586f", "#adab6e", "#c9a9c3"],
                "xAxis": {"title": {"text": "이용 건수", "offset" : 3, "align" : "high", "x" : 70  }},
                "yAxis": {"title": {"text": "환자수", "rotation" : 360, "align" : "high", "offset" : 5, "y" : -20 }},
                "tooltip": {
                    "headerFormat": "<div style='text-align: center;'><b>{point.x}</b></div>",
                    "useHTML": true,
                    "valueSuffix" : "건"
                },
            });

            //퇴원 이유
            patSetting.reasonForDischarge.initialize({
                "colors" :  ["#7CB5EC", "#434348", "#90ED7D", "#F7A35C", "#8085E9", "#E4D354", "#adab6e", "#c9a9c3"],
                "plotOptions" : {
                    "series" : {
                        "dataLabels" : {
                            "enbaled" : true,
                            "format" : "<div style='text-align:center;line-height:8px'><b style='display:block;'>{point.name}</b><br/>{point.y}건({point.percentage:.1f}%)</div>",
                            "useHTML":true
                        }
                    }
                },
                "tooltip": {
                    "valueSuffix" : "건"
                }
            });

            
            /* 가정형 */
            if($('.infoPatient').hasClass('type_home')){
                //입원 이유
                patSetting.reasonForHospitalization.initialize({
                    "plotOptions" : {
                        "series" : {
                            "dataLabels" : {
                                "enbaled" : true,
                                "format" : "<div style='text-align:center;line-height:8px'><b style='display:block;'>{point.name}</b><br/>{point.y}건({point.percentage:.1f}%)</div>",
                                "useHTML":true
                            }
                        }
                    },
                    "tooltip": {
                        "valueSuffix" : "건"
                    }
                });
            }

            /* 입원형, 가정형, 자문형 */
            if($('.infoPatient').hasClass('type_hospitalization') || $('.infoPatient').hasClass('type_home') || $('.infoPatient').hasClass('type_advice')){
                //말기 병식
                patSetting.lastPeriodInsight.initialize({
                    "colors": ["#4F81BD", "#953735", "#f6c8ba", "#b7b0b5", "#2ea4a8", "#47586f", "#adab6e", "#c9a9c3"]
                });

                //말기 진단 분류
                patSetting.terminalDiagnosis.initialize();
            }

            /* 소아청소년 */
            if($('.infoPatient').hasClass('type_pediatrics')){
                patSetting.diseaseDiagnosis.initialize({
                    "xAxis" : {"style" : {"display" : "none"}},
                    "yAxis" : 
                        {"title": {
                            "text": "환자 수",
                            "rotation" : 360,
                            "align" : "high",
                            "offset" : 5,
                            "y" : -20,
                        },
                    },
                    "colors": ["#77933C", "#e5404c", "#f6c8ba", "#b7b0b5", "#2ea4a8", "#47586f", "#adab6e", "#c9a9c3"],
                });
            }

        },
        infoAgency : function(){
            var agetSetting  = this.setting.infoAgency,
                hasDecimal = function (num){
                    return !!(num % 1);
                },
                getSum = function(arr, selector){
                    var total = 0,
                        number = 0;

                    switch(selector){
                        case ".impersonal_distribution_box" : for(var i in arr) { 
                            var idx = Number(i) + 1;

                            var getValue = function(arrValue){
                                total += arrValue;
                                number += arrValue * idx;
                            };

                            var getTotalAndNumber = function(number){
                                if(hasDecimal(number)){
                                    number = number.toFixed(2);
                                } else {
                                    number = number;
                                }
                                return numberWithCommas(number);
                            }

                            if(i == 0){
                                getValue(arr[i].series[0].value);
                            } else {
                                getValue(arr[i].series[0]);
                            }}

                            return [getTotalAndNumber(total), getTotalAndNumber(number)]
                        break;
                        default : for(var i in arr) { total += arr[i].value; } 
                            if(hasDecimal(total)){
                                return numberWithCommas(total.toFixed(2));
                            } else {
                                return numberWithCommas(total);
                            }
                        break;
                    }
                },
                pushText = function($el, arr){
                    return  function(event) {
                                var total = getSum(arr, $el.selector),
                                    $span = $el.find('.total span');

                                switch($el.selector){
                                    case ".impersonal_distribution_box" : 
                                        $span.eq(0).text(total[0]);
                                        $span.eq(1).text(total[1]);
                                    break;
                                    case ".service_type_box" : 
                                        $span.text(arrayServiceType[0]);
                                    break;
                                    default : $span.text(total);
                                    break;
                                }
                            }
                }

            

            //[병동정보] 총 병상 및 인실별 분포 현황
            agetSetting.impersonalDistribution.initialize({
                "colors" :  ["#0070C0", "#FFC608", "#9BBB59", "#F7A35C", "#FF0000", "#ddddd", "#adab6e", "#c9a9c3"],
                "plotOptions" : {
                "series" : {"dataLabels" : {"enbaled" : true, "format" : "<div style='text-align:center;line-height:8px'><b style='display:block;'>{point.name}</b><br/>{point.y}개</div>", "useHTML":true } }
                },
                "events" : {"searchEnd" : pushText($('.impersonal_distribution_box'), agetSetting.impersonalDistribution.data.ibchart.data)
                },
                "tooltip": {"valueSuffix" : "개"}
            });

            

            //[인력정보] 직종별 인력 분포 현황
            agetSetting.occupationType.initialize({
                "tooltip": {
                    "headerFormat" : "",
                    "valueSuffix" : "명/({point.percentage:.1f}%)"
                },
                "events" : {
                    "searchEnd" : pushText($('.occupation_type_box'), agetSetting.occupationType.data.ibchart.data[0].series),
                }
            })

            // [인력정보] 직종별 인력 역할 분포 - 의사
            agetSetting.ocuRoleDoctor.initialize();

            // [인력정보] 직종별 인력 역할 분포 - 간호사
            agetSetting.ocuRoleNurse.initialize();

            // [인력정보] 직종별 인력 역할 분포 - 사회복지사
            agetSetting.ocuRoleSorcialWorker.initialize();

            //[인력정보] 직종별 인력 근무 경력 분포 현황
            agetSetting.careerDistribution.initialize();



            /* 관리자 화면일 때 */
            if($('.manager').length){
                //[기관정보] 서비스 유형별 분포 현황
                agetSetting.serviceType.initialize({
                    "tooltip": {
                        "headerFormat" : "",
                        "valueSuffix" : "개"
                    },
                    "yAxis": {
                        "title": {
                            "text": "",
                        },
                    },
                    "events" : {
                        "searchEnd" : pushText($('.service_type_box'))
                    }
                })

                //[기관정보] 서비스별 기관 종별 & 지역별 분포 현황
                agetSetting.organType.initialize();
            }
            /* //관리자 화면일 때 */
            

        }

    }
    
    function agencyServiceAjax(){
        //서비스별 기관 종별 & 지역별 분포 현황
        function fnChangeServiceType(serviceType) {
            var sType = serviceType;
            if(sType == ""){
                sType = '2';  //default 입원형
            }
            
            var params = {"service_type" : sType, "region_cd": $("#slt_region").val(), "slt_city": $("#slt_city").val(), "slt_organnm": $("#slt_organnm").val()};
            
            $.ajax({
                url : "/boffice/visualization/organServiceTypeAjax.do",
                type : 'POST',
                cache : false,
                data : params,
                dataType : 'json',
                success : function(args) {
                    
                    var pLocation  = new Array(); 
                    var pValue01 = new Array();
                    var pValue02 = new Array(); 
                    var pValue03 = new Array();
                    var pValue04 = new Array();
                    var pValue05  = new Array();
                        
                    if(args.resionOrganType.length > 0){
                        for (var idx = 0; idx < args.resionOrganType.length; idx++) {
                            pLocation[idx] = args.resionOrganType[idx].CD_NM;
                            pValue01[idx] =   args.resionOrganType[idx].CNT1;
                            pValue02[idx] =   args.resionOrganType[idx].CNT2;
                            pValue03[idx] =   args.resionOrganType[idx].CNT3;
                            pValue04[idx] =   args.resionOrganType[idx].CNT4;
                            pValue05[idx] =   args.resionOrganType[idx].CNT5;
                        }
                    }else{
                        pLocation= [""];
                        pValue01 = [0];
                        pValue02 = [0];
                        pValue03 = [0];
                        pValue04 = [0];
                        pValue05 = [0]; 
                    }
                    chartVisualizationInitialize.setting.infoAgency.organType.initialize(pLocation, pValue01, pValue02, pValue03, pValue04, pValue05);
                },
                error : function(e) {
                    //alert(e.responseText);
                    alert("조회 오류 발생");
                }
            });
        }
        
        $('#slt_serviceType').change(function(){
            fnChangeServiceType($(this).val())
        })
    }
    
    //서비스 신규 이용환자 비율
    function fnNewPatientAjax() {
        
        var params = {"yyyy": $("#yyyy").val()};
        
        $.ajax({
                    url:"/boffice/visualization/newPatientAjax.do",
                    type:'POST',
                    cache:false,
                    data: params,
                    dataType:'json',
                    success: function(data){
                        
                        $("#yyyy1").text($("#yyyy").val()+"년");
                        $("#yyyy2").text($("#yyyy").val()+"년");
                        
                        //환자 구분
                        $(".total").text(data.newPatient.TOT_CNT);
                        $(".terminal_cnt").text(data.newPatient.TERMINAL_CNT);
                        $(".child_cnt").text(data.newPatient.CHILD_CNT);
                        $(".terminal_rate").text(data.newPatient.TERMINAL_RATE);
                        $(".child_rate").text(data.newPatient.CHILD_RATE);
                        //서비스 구분
                        $(".admission_cnt").text(data.newService.CNT1);
                        $(".home_cnt").text(data.newService.CNT2);
                        $(".counsel_cnt").text(data.newService.CNT3);
                        $(".child_hospice_cnt").text(data.newService.CNT4);
                        $(".admission_rate").text(data.newService.RATE1);
                        $(".home_rate").text(data.newService.RATE2);
                        $(".counsel_rate").text(data.newService.RATE3);
                        $(".child_hospice_rate").text(data.newService.RATE4);
                        
                        numberComma();
                        percentWidth();
                    },
                    error:function(e){
                    }
                }
        );
    }

    
  visualization.init = function() {
    exposuringoverlap();

    if($('.infoPatient').length){
        numberComma();
        percentWidth();
        //changeYear();
        $('#yyyy + button').click(fnNewPatientAjax)
        $('.filter select + button').click(function(){
            var random = Math.floor(Math.random() * 100) + 1;
            var arr = [random,100-random];
            $('.percent_wrap .right .bar_box .percentage').eq(0).text(arr[0])
            $('.percent_wrap .right .bar_box .percentage').eq(1).text(arr[1])
            numberComma();
            percentWidth();
        })
        filtering();
        fitLeftHeight();
        if($('.chart_box_wrap').length){chartVisualizationInitialize.infoPatient()}
    }

    if($('.infoAgency').length){
        searchActive();
        chartVisualizationInitialize.infoAgency();
        agencyServiceAjax();
        
    }

    $(document).find('a, input, label, select, option, button, area').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
    });

  };

  visualization._resize = function() {
    if($('.infoPatient').length) percentWidth();
  };
  return visualization;
})(document, window, jQuery);



$(document).ready(function(){
    visualization.init();
});

$(window).resize(function(){
   visualization._resize();
})

    