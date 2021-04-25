import React from 'react';
import { 
    Animated,
    StyleSheet,
    Text,
    View
 } from 'react-native';
import { RectButton,RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';
 interface PlantProps extends RectButtonProps {
     data: {
         name:string;
         photo:string;
         hour:string;
     };
     handleRemove: () => void;
 }

 export const PlantCardSecondary = ({data,handleRemove,...rest}:PlantProps)=>{
     return(
         <Swipeable
            overshootRight={false}
            renderRightActions={()=>(
                <Animated.View>
                    <View>
                        <RectButton
                            style={Styles.buttonremove}
                            onPress={handleRemove}
                        >
                            <Feather name="trash" size={32} color={colors.white}/>
                        </RectButton>
                    </View>
                </Animated.View>
            )}
         >
            <RectButton
                style={Styles.container}
                {...rest}
            >
                <SvgFromUri uri={data.photo} width={50} height={50} />
                <Text style={Styles.title}>
                    {data.name}
                </Text>
                <View  style={Styles.details}>
                    <Text style={Styles.timeLabel}>
                        Regar às 
                    </Text>
                    <Text style={Styles.time}>
                        {data.hour}
                    </Text>
                </View>
            </RectButton>
         </Swipeable>
     )
 }

const Styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingHorizontal:12,
        paddingVertical:25,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.shape,
        marginVertical:5
    },
    title:{
        flex:1,
        marginLeft:10,
        fontFamily:fonts.heading,
        fontSize:17,
        color:colors.heading
    },
    details:{
        alignItems:'flex-end'
    },
    timeLabel:{
        fontSize:16,
        fontFamily:fonts.text,
        color:colors.body_light
    },
    time:{
        marginTop:5,
        fontSize:16,
        fontFamily:fonts.heading,
        color:colors.body_dark
    },
    buttonremove:{
        width:100,
        height:85,
        backgroundColor:colors.red,
        marginTop:15,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        right:20,
        paddingLeft:15
    }
})