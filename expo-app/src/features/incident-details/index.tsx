import {Component, default as React} from "react";
import {View, Text} from "react-native";

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
        return (<View><Text style={styles.title}>{this.state.data.name}</Text></View>);
    }
}

const styles = {
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
}
