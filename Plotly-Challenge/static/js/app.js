d3.json('samples.json').then((data) => {

    // console.log(data);

    var sample_name = data.names;
    var sample_meta = data.metadata;
    var sample_data = data.samples;

    // console.log(sample_name);
    // console.log(sample_meta);
    // console.log(sample_data);

    for (var i = 0; i < sample_data.length; i++) {

        var otu_id = sample_data[i].otu_ids;
        var otu_value = sample_data[i].sample_values;
        var g_sample_id = sample_data[i].id;

        otu_value = otu_value.slice(0, 10).reverse();
        otu_id = otu_id.slice(0, 10);
        
        // console.log(otu_value);
        // console.log(g_sample_id);
        // console.log(otu_id);

        var init_label = []

        var init_index = sample_data[sample_data.findIndex(x => x.id == '940')]
        // console.log(arr_index);

        var init_otu_id = init_index.otu_ids;

        init_otu_id = init_otu_id.slice(0, 10);
    
        var otu_id_init = `OTU ${init_otu_id}`;
            // console.log(otu_id_name);
        init_label.push(otu_id_init);
            // console.log(init_label);
            
        var init_otu_value = sample_data[0].sample_values;

        init_otu_value = init_otu_value.slice(0, 10).reverse();

        // console.log(init_otu_value);
    
    function init () {

        var dataset = [{
            x: init_otu_value,
            y: `${init_label}`,
            type: 'bar',
            orientation: 'h'
        }];

        Plotly.newPlot('bar', dataset);

        var initrace = [{
            x: init_otu_id,
            y: init_otu_value,
            mode: 'markers',
            marker: {
                color: init_otu_id,
                size: init_otu_value
            },
            text: init_label
        }];

        var initlayout = {
            title: 'Bubble Chart',
            showlegend: true,
            height: 600,
            width: 1200
        };
        
        Plotly.newPlot('bubble', initrace, initlayout);
    }

    }

    var select = document.getElementById('selDataset');
    
    for (var i = 0; i < sample_meta.length; i++) {

        var sample_id = sample_meta[i].id;
        // console.log(sample_id);
        var el = document.createElement('option');
        el.textContent = sample_id;
        el.value = sample_id;
        select.appendChild(el);

        // var sample_ethnicity = sample_meta[i].ethnicity;
        // var sample_gender = sample_meta[i].gender;
        // var sample_age = sample_meta[i].age;
        // var sample_location = sample_meta[i].location;
        // var sample_bbtype = sample_meta[i].bbtype;
        // var sample_wfreq = sample_meta[i].wfreq;

        // console.log(sample_ethnicity);
        // console.log(sample_gender);
        // console.log(sample_age);
        // console.log(sample_location);
        // console.log(sample_bbtype);
        // console.log(sample_wfreq);
    };

    d3.selectAll('#selDataset').on('change', getData);

    function getData() {
      
        var selector = select.options[select.selectedIndex].text;
        // console.log(selector);

        var arr_index = sample_data[sample_data.findIndex(x => x.id == selector)]
        // console.log(arr_index);

        var updated_otu_id = arr_index.otu_ids;
        var updated_otu_value = arr_index.sample_values;
        var updated_g_sample_id = arr_index.id;

        updated_otu_value = updated_otu_value.slice(0, 10).reverse();
        updated_otu_id = updated_otu_id.slice(0, 10).reverse();

        var text_index = sample_meta[sample_meta.findIndex(x => x.id == selector)]

        var updated_sample_eth = text_index.ethnicity;
        var updated_gender = text_index.gender;
        var updated_age = text_index.age;
        var updated_location = text_index.location;
        var updated_bbtype = text_index.bbtype;
        var updated_wfreq = text_index.wfreq;

        // console.log(updated_sample_eth);
        // console.log(updated_gender);
        // console.log(updated_age);
        // console.log(updated_location);
        // console.log(updated_bbtype);
        // console.log(updated_wfreq);

        var y_label = []

        for (var j = 0; j < updated_otu_id.length; j++) {

            var otu_id_name = `OTU ${updated_otu_id[j]}`;
            // console.log(otu_id_name);
            y_label.push(otu_id_name);
            // console.log(y_label);
        }

        // console.log(updated_otu_value);
        // console.log(updated_otu_id);
        var updatedset = [{
            x: updated_otu_value,
            y: y_label,
            type: 'bar',
            orientation: 'h'
        }];

        Plotly.newPlot('bar', updatedset);

        var updatedtrace = [{
            x: updated_otu_id,
            y: updated_otu_value,
            mode: 'markers',
            marker: {
                color: updated_otu_id,
                size: updated_otu_value
            },
            text: y_label
        }];

        var layout = {
            title: 'Bubble Chart',
            showlegend: true,
            height: 600,
            width: 1200
        };
        
        Plotly.newPlot('bubble', updatedtrace, layout);

        function update(selective) {
            
            var display = d3.select('#sample-metadata')

            display.selectAll('p').remove();

            display
                .append('p').text(`ID: ${selector}`)
                .append('p').text(`Ethnicity: ${updated_sample_eth}`)
                .append('p').text(`Gender: ${updated_gender}`)
                .append('p').text(`Age: ${updated_age}`)
                .append('p').text(`Location: ${updated_location}`)
                .append('p').text(`BBType: ${updated_bbtype}`)
                .append('p').text(`Wfreq: ${updated_wfreq}`);
        };

        update();

    }

    init();

});

