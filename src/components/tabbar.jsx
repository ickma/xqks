/**
 * @fileOverview
 * @name tabbar.jsx
 * @author ickma
 * @license  private
 */
import {
  TabBar
} from "antd-mobile";
import React from "react";
import {
  TABBAR_RECEIVE_EXPRESS,
  TABBAR_SEND_EXPRESS,
  TABBAR_MINE
} from "../confs/tabbar.js";
import Icons, {
  receive_express_icon,
  receive_express_icon_chosen,
  my_icon,
  my_icon_chosen,
  send_express_icon,
  send_express_icon_chosen
} from "../icons/icons.js";

export class XQKSTabbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.selectedTab,

    }
  }
  redner() {
    return (
      <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={false}
        >
        <TabBar.Item
          icon={{uri:receive_express_icon}}
          selectedIcon={{uri:receive_express_icon_chosen}}
          title="收快递"
          

          />
        <TabBar.Item
          
          
          />
        </TabBar>
    )
  }

}
