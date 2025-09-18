import React from "react";

import { Box } from "@material-ui/core";

import Settings2Controller, { Props, configJSON } from "./Settings2Controller";
import Privacy from "./Privacy.web";
import Term from "./Term.web";
import AboutHeader from "./AboutHeader.web";

export default class About extends Settings2Controller {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  returnInfo = (activeTab: string) =>
    activeTab === configJSON.privacyTab ? <Privacy text={this.state.privacyPolicies}/> : <Term text={this.state.termsConds}/>;
  // Customizable Area End

  render() {
    return (
      <Box>
        <AboutHeader
          activeTab={this.state.activeTab}
          changeActiveTab={this.changeActiveTab}
        />
        <Box>{this.returnInfo(this.state.activeTab)}</Box>
      </Box>
    );
  }
}
