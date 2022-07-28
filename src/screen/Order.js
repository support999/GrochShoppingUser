import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DeliveredOrders} from '../components';
import ProcessingOrder from '../components/ProcessingOrder';
import CancelOrder from '../components/CancelOrder';
import SearchBar from './SearchBar';
const {width} = Dimensions.get('window');

export default class Order extends React.Component {
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    xTabThree: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateXTabThree: new Animated.Value(width),
    translateY: -1000,
  };

  handleSlide = type => {
    let {
      active,
      xTabOne,
      xTabTwo,
      xTabThree,
      translateX,
      translateXTabOne,
      translateXTabTwo,
      translateXTabThree,
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    }
  };

  render() {
    let {
      xTabOne,
      xTabTwo,
      xTabThree,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateXTabThree,
      translateY,
    } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.TOback}
            onPress={() => this.props.navigation.navigate('Home')}>
            <AntDesign style={styles.backIcon} name="left" color="black" />
          </TouchableOpacity>
          <Text
            style={[
              styles.headerName,
              {color: '#7F7F7F', fontSize: 20, fontWeight: '700', marginTop: 0},
            ]}>
            My Orders
          </Text>
          <View></View>
        </View>
        <View style={{marginTop: -10, marginBottom: 10}}>
          <SearchBar />
        </View>

        <View
          style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 20,
              height: 36,
              position: 'relative',
            }}>
            <Animated.View
              style={{
                position: 'absolute',
                width: '33%',
                height: '100%',
                top: 0,
                left: 0,
                backgroundColor: '#F20505',
                borderRadius: 24,
                transform: [
                  {
                    translateX,
                  },
                ],
              }}
            />
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // borderWidth: 1,
                borderColor: '#F20505',
                borderRadius: 4,
                borderRightWidth: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              onLayout={event =>
                this.setState({
                  xTabOne: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({active: 0}, () => this.handleSlide(xTabOne))
              }>
              <Text
                style={{
                  color: active === 0 ? '#fff' : '#F20505',
                }}>
                New Orders
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // borderWidth: 1,
                borderColor: '#F20505',
                borderRadius: 4,
                borderLeftWidth: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              onLayout={event =>
                this.setState({
                  xTabTwo: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({active: 1}, () => this.handleSlide(xTabTwo))
              }>
              <Text
                style={{
                  color: active === 1 ? '#fff' : '#222222',
                }}>
                Processing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // borderWidth: 1,
                borderColor: '#222222',
                borderRadius: 4,
                borderLeftWidth: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              onLayout={event =>
                this.setState({
                  xTabThree: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({active: 1}, () => this.handleSlide(xTabThree))
              }>
              <Text
                style={{
                  color: active === 1 ? '#fff' : '#222222',
                }}>
                Cancelled
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <Animated.View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // height: '0%',
                transform: [
                  {
                    translateX: translateXTabOne,
                  },
                ],
              }}
              onLayout={event =>
                this.setState({
                  translateY: event.nativeEvent.layout.height,
                })
              }>
              <DeliveredOrders />
            </Animated.View>

            <Animated.View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                transform: [
                  {
                    translateX: translateXTabTwo,
                  },
                  {
                    translateY: -translateY,
                  },
                ],
              }}>
              {/* processing order list */}
              {/* <DeliveredOrders /> */}
              <ProcessingOrder />
              {/* <CancelOrder /> */}
            </Animated.View>

            <Animated.View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                transform: [
                  {
                    translateX: translateXTabThree,
                  },
                  {
                    translateY: -translateY,
                  },
                ],
              }}>
              {/* cancelled order list */}
              <CancelOrder />
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const stylesBtn = StyleSheet.create({
  list: {},
  itemBG: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginBottom: '2.5%',
  },
  item: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 16,
  },
  itemRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemRow2: {
    flexDirection: 'row',
    marginTop: 6,
  },
  itemRow3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  itemRow3Col1: {
    flexDirection: 'row',
  },
  itemRow3Col2: {
    flexDirection: 'row',
  },
  itemRow4: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 16,
    width: '100%',
  },
  btn1: {
    flex: 1,
    height: 36,
    width: 98,
    borderWidth: 1,
    borderColor: '#F20505',
    borderRadius: 25,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  btn2: {
    flex: 1,
    height: 36,
    width: 98,
    borderWidth: 1,
    borderColor: '#F20505',
    borderRadius: 25,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  btn3: {
    flex: 1,
    height: 36,
    width: 98,
    // borderWidth: 1,
    borderColor: '#F20505',
    borderRadius: 25,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'flex-end',
    marginLeft: 20,
  },
  higlght: {
    fontSize: 16,
    fontWeight: '600',
  },
  smallfont: {
    fontSize: 14,
  },
  grayFont: {
    color: '#9B9B9B',
  },
  darkFont: {
    color: '#222222',
  },
  red: {
    color: '#F20505',
  },
  yello: {
    color: '#D78C11',
  },
  green: {
    color: '#2AA952',
  },
  margin: {
    marginLeft: 5,
  },
});

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: '5%',
    marginTop: '3%',
    borderBottomColor: '#F7F7F7',
  },
  TOback: {
    //   flexDirection: 'column'
    marginTop: 0,
  },
  backIcon: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
  },
  headerDetails: {
    marginLeft: 15,
    width: '80%',
  },
});
