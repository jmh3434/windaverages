function initBar(config) {


    config.bar = {}

    config.bar.render = function() {


        var configData = config.data

        // looping over the configData to build the line graph 

        // time would be x axis 
        var arrayTime = []
        var arraySpeed = []
        var dateObjects = []

        var length = Object.keys(configData).length

        var x = configData['windaverages']

        var speedValue;
        var timeValue;

            for (var key in x){
               // y = speed
               // x = time

              // console.log("key",key)


               Object.keys(x).forEach(function(key) {
                   //console.log("windspeeed",key, x[key]["speed"]);
                   //console.log("timestamp",key, x[key]["time"]);
                   speedValue = x[key]["speed"]
                   timeValue = x[key]["time"]

                   var dateObjectTime =  new Date(timeValue)
                  // console.log("dateObjectTime",dateObjectTime)

                   dateObjects.push(dateObjectTime)
                   var dateHour = dateObjectTime.getHours()

                   arrayTime.push(dateHour)

                   arraySpeed.push(speedValue)





               });
               

            }

           // console.log(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24)
           //console.log("arraySpeed is:",arraySpeed)

           console.log("dateObjects array:",dateObjects)



        var chart = c3.generate({
    data: {
        columns: [
            //['time',1,2,3,4,5],
            ['speed', arraySpeed[0],arraySpeed[12],arraySpeed[24],arraySpeed[36],arraySpeed[48],arraySpeed[60],arraySpeed[72],
             arraySpeed[84],arraySpeed[96],arraySpeed[108],arraySpeed[120],arraySpeed[132],arraySpeed[144],arraySpeed[156],
             arraySpeed[168],arraySpeed[180],arraySpeed[192],arraySpeed[204],arraySpeed[216],arraySpeed[228],arraySpeed[240],
             arraySpeed[252],arraySpeed[276],arraySpeed[288]]


        ],
        type: 'bar',
        types: {
            data3: 'spline',
            speed: 'line',
            data6: 'area',
        },
        groups: [
            ['data1','data2']
        ]
    }
});

  
        



    }
}
