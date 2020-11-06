
//Include the core fusioncharts file from core  -
import FroalaCharts from 'froalacharts/core';

// Include the chart from viz folder
// E.g. - import ChartType from fusioncharts/viz/[ChartType]
import Column from 'froalacharts/viz/column';

// Include the fusion theme
import FroalaTheme from 'froalacharts/themes/es/froalacharts.theme.candy';


//Show case version used in the bundle
import froalaDetails from './froala-version'
froalaDetails()

// Add the chart and theme as dependency
// E.g. FusionCharts.addDep(ChartType)
FroalaCharts.addDep(Column);
FroalaCharts.addDep(FroalaTheme);


FroalaCharts.options.license({
  key:    "hzH5vmaD8A1C5E1A1C1F1I1B1A5A1B3awh1I2J3A4B6B5F5C4F3E3C3F2A5A3C7A3B4wjjH3B5D7E-13iB-9zA4sI-7C-21A4B2C2zbnD1H4B3A5B3A3F3H3G4A19A32aarC6D3G4H2D1H1A1A10C1D6B1E5B4H2h==",
  creditLabel: true
});

//STEP 2 - Chart Data
const chartData = [
{
"label": "Venezuela",
"value": "290"
}, {
"label": "Saudi",
"value": "260"
}, {
"label": "Canada",
"value": "180"
}, {
"label": "Iran",
"value": "140"
}, {
"label": "Russia",
"value": "115"
}, {
"label": "UAE",
"value": "100"
}, {
"label": "US",
"value": "30"
}, {
"label": "China",
"value": "30"
}];

//STEP 3 - Chart Configurations
const chartConfig = {
type: 'column',
renderAt: 'chart-container',
width: '100%',
height: '400',
dataFormat: 'json',
dataSource: {
  "chart": {
    "caption": "Business Results 2005 v 2006 - NPM",
    "xaxisname": "Month",
    "yaxisname": "Revenue",
    "showvalues": "0",
    "numberprefix": "$",
    "animation": "1",
    "theme": "candy"
  },
  "categories": [
    {
      "category": [
        {
          "label": "Jan"
        },
        {
          "label": "Feb"
        },
        {
          "label": "Mar"
        },
        {
          "label": "Apr"
        },
        {
          "vline": "true"
        },
        {
          "label": "May"
        },
        {
          "label": "Jun"
        },
        {
          "label": "Jul"
        },
        {
          "label": "Aug"
        },
        {
          "label": "Sep"
        },
        {
          "label": "Oct"
        },
        {
          "label": "Nov"
        },
        {
          "label": "Dec"
        }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "2006",
      "data": [
        {
          "value": "27400"
        },
        {
          "value": "29800"
        },
        {
          "value": "25800"
        },
        {
          "value": "26800"
        },
        {
          "value": "29600"
        },
        {
          "value": "32600"
        },
        {
          "value": "31800"
        },
        {
          "value": "36700"
        },
        {
          "value": "29700"
        },
        {
          "value": "31900"
        },
        {
          "value": "34800"
        },
        {
          "value": "24800"
        }
      ]
    },
    {
      "seriesname": "2005",
      "data": [
        {
          "value": "10000"
        },
        {
          "value": "11500"
        },
        {
          "value": "12500"
        },
        {
          "value": "15000"
        },
        {
          "value": "11000"
        },
        {
          "value": "9800"
        },
        {
          "value": "11800"
        },
        {
          "value": "19700"
        },
        {
          "value": "21700"
        },
        {
          "value": "21900"
        },
        {
          "value": "22900"
        },
        {
          "value": "20800"
        }
      ]
    }
  ],
  "trendlines": [
    {
      "line": [
        {
          "startvalue": "26000",
          "color": "91C728",
          "displayvalue": "Target",
          "showontop": "1"
        }
      ]
    }
  ],
  "styles": {
    "definition": [
      {
        "name": "CanvasAnim",
        "type": "animation",
        "param": "_xScale",
        "start": "0",
        "duration": "1"
      }
    ],
    "application": [ 
      {
        "toobject": "Canvas",
        "styles": "CanvasAnim"
      }
    ]
  }
}
};

var chartInstance = new FroalaCharts(chartConfig);
chartInstance.render();

