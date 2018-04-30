function initBar(config) {
    config.bar = {}
    config.bar.render = function() {
        var configData = config.data

        var arrayTime = []
        var arraySpeed = []
        var dateObjects = []

        var length = Object.keys(configData).length

        var x = configData['windaverages']

        var speedValue;
        var timeValue;

        for (var key in x) {
            Object.keys(x).forEach(function(key) {

                speedValue = x[key]["speed"]
                timeValue = x[key]["time"]

                var dateObjectTime = new Date(timeValue)

                dateObjects.push(dateObjectTime)
                var dateHour = dateObjectTime.getHours()

                arrayTime.push(dateHour)

                arraySpeed.push(speedValue)

            });


        }
        var i = 0;

        var sampleData = [];
        sampleData.push('Wind Speed For Each Hour')
        sampleData.push(arraySpeed[0])
        for (i = 0; i <= 260; i += 12) {
            sampleData.push(arraySpeed[i + 12])
        }

        var chart = c3.generate({
            bindto: '#chart',

            data: {

                columns: [sampleData],
                type: 'bar',
                types: {
                    data3: 'bar',
                    speed: 'line',
                    data6: 'bar',
                },
                groups: [
                    ['speed', 'data2']
                ]

            },
            axis: {
                x: {
                    min: 24,
                    max: 0,

                },
                y: {
                    max: 16,
                    min: 0,
                    tick: { 
                      fit: true
                    }
                }
            }

        });
    }
}

var chart2 = c3.generate({
    bindto: '#chart2',
    data: {
        columns: [

            ['4 meter', 25, 26, 27, 28],
            ['6 meter', 22, 23, 24, 25],
            ['7 meter', 21, 22, 23, 24],
            ['8 meter', 20, 21, 22, 23],
            ['9 meter', 17, 18, 19, 20],
            ['10 meter', 14, 15, 16, 17],
            ['11 meter', 13, 14, 15, 16],
            ['12 meter', 12, 13, 14, 15],
            ['14 meter', 10, 11, 12, 13],
            ['16 meter', 8, 9, 10, 11],
            ['18 meter', 7, 8, 9, 10],
        ],
        type: 'line',
        groups: [
            ['4', '6,7,8,9,10,11,12,14,16,18']
        ]
    },
    axis: {
      y: {

                    tick: { 
                      fit: true
                    }
                }
                
                
            }
});