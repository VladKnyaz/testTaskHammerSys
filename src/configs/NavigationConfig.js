import { 
  DashboardOutlined,
  UserSwitchOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'apps',
  path: `${APP_PREFIX_PATH}`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [{
    key: 'customers',
    path: `${APP_PREFIX_PATH}/customers`,
    title: 'sidenav.dashboard.customers',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [{
      key: 'customers-list',
      path: `${APP_PREFIX_PATH}/customers/list`,
      title: 'sidenav.dashboard.customers.list',
      icon: UserSwitchOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
  }
]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
