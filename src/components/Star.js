import React from 'react';
import { View } from 'react-native';
import { Constants, Svg } from 'expo';

export default Star = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Svg
                style={{top: 3,right: -4}}
                height="14"
                width="12">
                <Svg.Polygon
                    points="5,0 8,9 0.5,3 9.5,3 2,9"
                    fill="#ff9a0d"
                    stroke="#ff9a0d"
                    strokeWidth="1"
                />
            </Svg>
            <Svg
                style={{top: 3,right: -4}}
                height="14"
                width="12">
                <Svg.Polygon
                    points="5,0 8,9 0.5,3 9.5,3 2,9"
                    fill="#ff9a0d"
                    stroke="#ff9a0d"
                    strokeWidth="1"
                />
            </Svg>
            <Svg
                style={{top: 3,right: -4}}
                height="14"
                width="12">
                <Svg.Polygon
                    points="5,0 8,9 0.5,3 9.5,3 2,9"
                    fill="#ff9a0d"
                    stroke="#ff9a0d"
                    strokeWidth="1"
                />
            </Svg>
            <Svg
                style={{top: 3,right: -4}}
                height="14"
                width="12">
                <Svg.Polygon
                    points="5,0 8,9 0.5,3 9.5,3 2,9"
                    fill="#ff9a0d"
                    stroke="#ff9a0d"
                    strokeWidth="1"
                />
            </Svg>
            <Svg
                style={{top: 3,right: -4}}
                height="14"
                width="12">
                <Svg.Polygon
                    points="5,0 8,9 0.5,3 9.5,3 2,9"
                    fill="#d1d1d1"
                    stroke="#d1d1d1"
                    strokeWidth="1"
                />
            </Svg>
        </View>
        
    )
}