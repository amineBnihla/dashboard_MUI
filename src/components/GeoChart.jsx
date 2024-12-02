
import {ResponsiveChoropleth} from '@nivo/geo'
import { tokens } from '../theme'
import { useTheme } from '@mui/material'
import {mockGeographyData as data} from '../data/mockData'
import { geoFeatures } from '../data/mockGeoFeature'
const LineChart = ({isDashboard = false})=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return(
  <ResponsiveChoropleth
        data={data}
         theme={{
      
      "legends": {
          "text": {
            
              "fill": colors.grey[100],
             
          }
      },
    "tooltip":{
            "container":{
                backgroundColor:colors.grey[900],
                color: colors.grey[100]
            }
        }
   
      }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
       
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 50 : 150}
   projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
        projectionRotation={[ 0, 0, 0 ]}
      
     
        legends={
          isDashboard ?
          undefined 
          :
          [
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 40,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    )
}

export default LineChart