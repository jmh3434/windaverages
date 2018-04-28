function initBar(config) {
    // Render re-renders the bar chart
    config.bar = {}

    config.bar.render = function() {

        //console.log(config.data)
        //data is in render function

        var configData = config.data

        // looping over the configData to build the line graph 

        // time would be x axis 
        var arrayTime = []
        var arraySpeed = []
       // console.log(configData.length)
        var length = Object.keys(configData).length
        //console.log("lenth is:",length)
        var x = configData['windaverages']
        //console.log(x)
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
                   arrayTime.push(speedValue)
                   arraySpeed.push(timeValue)

               });
               

            }

            var keys = Object.keys(configData);

            keys.forEach(function(key){
               //console.log(key, dictionary[key]);
            });

            console.log("arraytime",arrayTime)
            console.log("arraySpeed",arraySpeed)            // iterate throught the array, and load up values from the dictionary 
            
            // passed a json file that has a date and a value 
            // 1 is x, 1 is y and it graphs
            // array(key)= 
            // outer array
            // for loop put in the values for speed and time
            //append it to the outer array 
               
            
            




        

        var chart = c3.generate({
            //data = config.data
            
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ]
            }
            
        });

        setTimeout(function() {
            chart.load({
                columns: [
                    ['data1', 230, 190, 300, 500, 300, 400]
                ]
            });
        }, 1000);

        setTimeout(function() {
            chart.load({
                columns: [
                    ['data3', 130, 150, 200, 300, 200, 100]
                ]
            });
        }, 1500);

        setTimeout(function() {
            chart.unload({
                ids: 'data1'
            });
        }, 2000);



    }
}
