function initBar(config) {


    config.bar = {}

    config.bar.render = function() {


        var configData = config.data

        // looping over the configData to build the line graph 

        // time would be x axis 
        var arrayTime = []
        var arraySpeed = []

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
                   var dateHour = dateObjectTime.getHours()

                   arrayTime.push(dateHour)

                   arraySpeed.push(speedValue)





               });
               

            }

           // console.log(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24)
           console.log("arraySpeed is:",arraySpeed)




        var chart = c3.generate({
    data: {
        columns: [
            //['time',1,2,3,4,5],
            ['data1', arraySpeed[0],arraySpeed[1],arraySpeed[2],arraySpeed[3],arraySpeed[4],arraySpeed[5],arraySpeed[6],
             arraySpeed[7],arraySpeed[8],arraySpeed[9],arraySpeed[10]]


        ],
        type: 'bar',
        types: {
            data3: 'spline',
            data1: 'line',
            data6: 'area',
        },
        groups: [
            ['data1','data2']
        ]
    }
});

  
        



    }
}
