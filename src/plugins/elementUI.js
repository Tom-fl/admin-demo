/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-03-01 09:25:15
 * @LastEditTime: 2022-03-01 11:08:45
 * @Email: str-liang@outlook.com
 * @FilePath: \kkk\src\plugins\elementUI.js
 * @Environment: Win 10
 * @Description:
 */

import {
  MessageBox,
  Message,
  Input,
  Form,
  FormItem,
  Row,
  Col,
  Dialog,
  Button,
  RadioGroup,
  RadioButton,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Tabs,
  TabPane,
} from "element-ui";

const components = {
  Input,
  Form,
  FormItem,
  Row,
  Col,
  Dialog,
  Button,
  RadioGroup,
  RadioButton,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Tabs,
  TabPane,
};

export default {
  install(Vue) {
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$message = Message;
    Vue.prototype.$notify = Notification;
    Object.keys(components).forEach((key) => Vue.use(components[key]));
  },
};
