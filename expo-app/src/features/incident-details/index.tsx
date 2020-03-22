import {Component, default as React} from "react";
import {View, Text, Button, Alert, FlatList} from "react-native";

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
        if (this.state == null || this.state.data == null) {
            return (<View/>);
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.data.name}</Text>
                <Text>{this.state.data.date_start}</Text>
                <View style={styles.fixToText}>
                    <Button
                        title="Download PDF"
                        onPress={() => Alert.alert('Left button pressed')}
                    />
                    <Button
                        title="Download CSV"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                </View>
                <Text>Es haben sich 4 potenzielle Helfer:innen auf deinen Aufruf gemeldet</Text>
                <FlatList
                     data={this.state.data.helpers}
                     renderItem={h => (
                         <View style={styles.helperListItem}>
                             <Text>{h.item.name}</Text>
                             <Text>{h.item.email}</Text>
                             <Text>{h.item.phone}</Text>
                         </View>
                     )}/>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    helperListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
};
