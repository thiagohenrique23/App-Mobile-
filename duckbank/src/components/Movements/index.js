import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Movements = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
    
        <Text style={styles.date}>{data.date}</Text>
        
        <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
            <Text style={styles.value}>{data.value}</Text>
        </View>
    
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#FFF'
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date:{
        color: '#FFF'
    }
})
