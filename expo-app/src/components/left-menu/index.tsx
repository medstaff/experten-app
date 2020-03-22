import React, {Component} from "react";
import {FlatList, ListRenderItemInfo, Text, TouchableOpacity, View} from "react-native";
import {Repository} from "../../repository/repository";

interface HelpRequestData {
    request: HelpRequest
    isSelected: boolean
}

interface LeftMenuState {
    loading: boolean
    dataSource: HelpRequestData[]
}

interface LeftMenuProps {
    repository: Repository
    selectItem: ((HelpRequest) => void)
}

export default class LeftMenu extends Component<LeftMenuProps, LeftMenuState> {
    constructor(props: LeftMenuProps) {
        super(props);
        this.state = { loading: false, dataSource: [] };
    }

    componentDidMount(): void {
        this.loadHelpRequests();
    }

    private selectItem(data: ListRenderItemInfo<HelpRequestData>) {
        let nextDataSource = this.state.dataSource.map(val => {
            val.isSelected = val.request.id == data.item.request.id;
            return val;
        });
        this.setState({ dataSource: nextDataSource });
        this.props.selectItem(data.item.request);
    }

    renderItem(data: ListRenderItemInfo<HelpRequestData>) {
        // TODO: TouchableOpacity -> Link?
        // TODO: Highlight selected
        let textStyle = data.item.isSelected ? styles.selectedItem : {};
        return (
            <TouchableOpacity onPress={() => this.selectItem(data)}>
                <View style={{padding: 8, paddingLeft: 16}}>
                    <Text style={textStyle}>
                        {data.item.request.name}
                    </Text>
                    <Text style={textStyle}>
                        {data.item.request.created_at}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <FlatList
                data={this.state.dataSource}
                renderItem={item => this.renderItem(item)} />
        );
    }

    private loadHelpRequests() {
        this.setState({ loading: true });
        this.props
            .repository
            .getHelpRequests()
            .then(hr => this.setState({ loading: false, dataSource: hr.map(v => { return { request: v, isSelected: false } })}));
    }
}

const styles = {
    selectedItem: {
        fontWeight: "bold"
    }
};
