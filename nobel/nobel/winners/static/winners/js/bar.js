function initBar(config) {


    config.bar = {}

    config.bar.render = function() {


        var configData = config.data

        // looping over the configData to build the line graph 
        // lol
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


          // console.log("dateObjects array:",dateObjects)
           var i = 0;

           var sampleData = [];
           sampleData.push('speed')
           sampleData.push(arraySpeed[0])
           for (i=0;i<=236;i+=12){
           console.log("i is",i)
           sampleData.push(arraySpeed[i+12])
          }
         // console.log("sampleDatais",sampleData);

        var chart = c3.generate({
        
          //sampleData.push(arraySpeed[0]);
          
          
         data: {
        
        columns:[sampleData],
        /*columns: [
            //['time',1,2,3,4,5],
            ['speed', arraySpeed[0],arraySpeed[12],arraySpeed[24],arraySpeed[36],arraySpeed[48],arraySpeed[60],arraySpeed[72],
             arraySpeed[84],arraySpeed[96],arraySpeed[108],arraySpeed[120],arraySpeed[132],arraySpeed[144],arraySpeed[156],
             arraySpeed[168],arraySpeed[180],arraySpeed[192],arraySpeed[204],arraySpeed[216],arraySpeed[228],arraySpeed[240],
             arraySpeed[252],arraySpeed[276],arraySpeed[288]]


        ],*/
        type: 'bar',
        types: {
            data3: 'bar',
            speed: 'bar',
            data6: 'bar',
        },
        groups: [
            ['speed','data2']
        ]

    },
    axis: {
        y: {
            max: 16,
            min: 0,
            // Range includes padding, set 0 if no padding needed
            // padding: {top:0, bottom:0}
        }
    }

});

  
        



    }
}
