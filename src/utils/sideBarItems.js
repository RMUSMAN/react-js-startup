/* eslint-disable */
import {
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  Users as UsersIcon
} from 'react-feather';
const siteManagerSideBar = [
  // {
  //   href: '/app/dashboard',
  //   icon: BarChartIcon,
  //   title: 'Dashboard'
  // },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/msite',
    icon: UsersIcon,
    title: 'Site'
  },
  {
    href: '/app/inviteusers',
    icon: UsersIcon,
    title: 'Invite Users'
  },
  // {
  //   href: '/app/customers',
  //   icon: UsersIcon,
  //   title: 'Customers'
  // },
  // {
  //   href: '/app/products',
  //   icon: ShoppingBagIcon,
  //   title: 'Products'
  // },

  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Logout'
  }
  // {
  //   href: '/register',
  //   icon: UserPlusIcon,
  //   title: 'Register'
  // },
  // {
  //   href: '/404',
  //   icon: AlertCircleIcon,
  //   title: 'Error'
  // }
];
const adminSideBar = [
  {
    href: '/app/admin',
    icon: UserIcon,
    title: 'Admin Dashboard'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/sites',
    icon: UsersIcon,
    title: 'Sites'
  },
  {
    href: '/app/inviteusers',
    icon: UserIcon,
    title: 'Invite Users'
  },
  {
    href: '/app/usergroup',
    icon: UsersIcon,
    title: 'User Group'
  },
  {
    href: '/app/task',
    icon: UserIcon,
    title: 'Task'
  },

  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Logout'
  }
];
const userSideBar = [
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/user',
    icon: UsersIcon,
    title: 'User Tasks'
  },

  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Logout'
  }
];
const guestSideBar = [
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/guest',
    icon: UsersIcon,
    title: 'Guest'
  },

  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Logout'
  }
];
const leaderSideBar = [
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/sites',
    icon: UsersIcon,
    title: 'Sites'
  },
  {
    href: '/app/inviteusers',
    icon: UsersIcon,
    title: 'Invite Users'
  },

  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Logout'
  }
];

export default {
  leaderSideBar,
  guestSideBar,
  siteManagerSideBar,
  userSideBar,
  adminSideBar
};
