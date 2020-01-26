d3.json('/data/samples.json').then((importeddata) => {
    var importsdata = importeddata.samples;

    for(var i=0; i < importsdata.length; i++) {
        var sample_data = [importsdata[i]];

        // console.log(sample_data);

        for (var j=0; j < sample_data.length; j++) {
            var sample_id = sample_data[j].id;
            var sample_otu_id = sample_data[j].otu_ids;
            var sample_otu_label = sample_data[j].otu_labels;
            var sample_otu_value = sample_data[j].sample_values;

            // console.log(sample_id);
            // console.log(sample_otu_id);
            // console.log(sample_otu_label);
            // console.log(sample_otu_value);

            sample_otu_value = sample_otu_value.slice(0, 10);
            sample_otu_id = sample_otu_id.slice(0, 10);
            sample_otu_label = sample_otu_label.slice(0, 10);

            sample_otu_value = sample_otu_value.reverse();

            function init() {
                var data = [{
                    x: sample_otu_value[1],
                    y: `OTU ${sample_otu_id[1]}`,
                    text: sample_otu_label[1],
                    type: 'bar',
                    orientation: 'h'
                }];
        
                var layout = {
                    title: 'Sample Data',
                    margin: {
                        l: 100,
                        r: 100,
                        t: 100,
                        b: 100
                    }
                };
        
                Plotly.newPlot('bar', data, layout);

            }
            
            d3.selectAll('.selDataset').on('change', getData);

            function getData() {
                var dropdownMenu = d3.select('.selDataset');
                var dataset = dropdownMenu.property('value');
                var data = [];
    
                if (dataset == `${Object.values(sample_data[j].id)}`) {
                    data = data = [{
                        x: sample_otu_value[j],
                        y: `OTU ${sample_otu_id[j]}`,
                        text: sample_otu_label[j],
                        type: 'bar',
                        orientation: 'h'
                    }];
                }
        
                updatePlotly(data);
            }
        
            function updatePlotly(newdata) {
                Plotly.restyle('bar', 'value', [newdata]);
            }
            
        };

        init();

    };

});
