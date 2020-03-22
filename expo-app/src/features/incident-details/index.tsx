import {Component, default as React} from "react";
import {View, Text, Button, Alert, FlatList} from "react-native";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

interface IncidentDetailsState {
    data?: HelpRequest;
}

interface IncidentDetailsProps {
    initialState: IncidentDetailsState
}

export default class IncidentDetails extends Component<IncidentDetailsProps, IncidentDetailsState> {

    public setHelpRequest(h: HelpRequest) {
        this.setState({ data: h });
    }

    constructor(props: IncidentDetailsProps) {
        super(props);
        this.state = { data: null };
    }

    render() {
        let state = this.state;
        if (state == null || state.data == null) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Hey! Bitte wähle links ein Hilfegesuch aus</Text>
                    <Text>Die Daten werden dann hier angezeigt</Text>
                </View>
            );
        }
        let tableHeaders = [ "Name", "E-Mail", "Telefon" ];
        let tableData = state.data.helpers.map(h => [ h.email, h.phone ]);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.data.name}</Text>
                <Text>{this.state.data.date_start}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Download PDF"
                        onPress={() => Alert.alert('Left button pressed')}
                    />
                    <View
                    style={{width: 16}}/>
                    <Button
                        title="Download CSV"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                </View>
                <Text style={{paddingTop: 16, paddingBottom: 16}}>Es haben sich 4 potenzielle Helfer:innen auf dein Gesuch gemeldet</Text>
                <Table borderStyle={{borderWidth: 1}}>
                    <Row data={tableHeaders} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text}/>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.data.helpers.map(h => h.name)} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
                        <Rows data={tableData} flexArr={[1, 1]} style={styles.row} textStyle={styles.text}/>
                    </TableWrapper>
                </Table>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    helperListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    head: {  height: 40 },
    wrapper: { flexDirection: 'row' },
    tableTitle: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
};
