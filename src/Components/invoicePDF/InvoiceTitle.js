import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 24,
    },
    reportTitle: {
        color: '#000000',
        letterSpacing: 4,
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});

const InvoiceTitle = ({ title }) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
);

export default InvoiceTitle;