import React, {Component} from "react";
import Layout from "../../components/layout";
import LeftMenu from "../../components/left-menu";
import RepositoryImpl from "../../repository/repository";
import HelpRequestDetails from "../incident-details";

const repository = new RepositoryImpl();

export default class AllIncidents extends Component {

  private details: HelpRequestDetails;
  private leftContent = (<LeftMenu repository={repository} selectItem={item => this.selectItem(item)}/>);
  private midContent = (<HelpRequestDetails ref={ref => this.details = ref}/>);

  selectItem(item: HelpRequest) {
    this.details.setHelpRequest(item);
  }

  render() {
    return (
        <Layout
            leftContent={this.leftContent}
            midContent={this.midContent}
        />
    );
  }
}
