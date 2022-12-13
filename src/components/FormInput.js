import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
            <AntDesign name={iconType} size={25} color="#666" />
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#999',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#ccc',
        width: 50,
    }
})