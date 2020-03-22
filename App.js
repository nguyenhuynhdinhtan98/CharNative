import React, {Component} from 'react';
import PureChart from 'react-native-pure-chart';
import {Text, View, Dimensions, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    let sampleData = [
      {
        data: [
          {x: '2018-02-01', y: 30},
          {x: '2018-03-02', y: 200},
          {x: '2018-04-03', y: 1700},
          {x: '2018-05-04', y: 250},
          {x: '2018-06-05', y: 10},
        ],
        color: '#297AB1',
      },
    ];
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PureChart
          data={sampleData}
          type="bar"
          height={500}
          width={'100%'}
          xAxisColor={'red'}
          yAxisColor={'red'}
          showEvenNumberXaxisLabel={false}
          numberOfYAxisGuideLine={10}
          color="black"
        />
      </View>
    );
  }
}

export default App;
