import {
  Boxes,
  Bus,
  CalendarDays,
  Car,
  ChartPie,
  CircleUser,
  Component,
  DollarSign,
  House,
  Layout,
  LayoutDashboardIcon,
  LogOut,
  LogOutIcon,
  Mail,
  Mails,
  MessageCircleMore,
  Receipt,
  Server,
  Settings,
  ShieldCheck,
  ShieldUser,
  StickyNote,
  Users2,
  UsersRound,
} from "lucide-react";

export const data = {
  navMain: [
    // {
    //   title: "Dashboard",
    //   url: "#",
    //   icon: House,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "AI",
    //       url: "/dashboard",
    //       circleColor: "bg-primary",
    //     },
    //     {
    //       title: "CRM",
    //       url: "/crm",
    //       circleColor: "bg-yellow-500",
    //     },
    //     {
    //       title: "eCommerce",
    //       url: "/ecommerce",
    //       circleColor: "bg-cyan-500",
    //     },
    //     {
    //       title: "Cryptocurrency",
    //       url: "/cryptocurrency",
    //       circleColor: "bg-red-500",
    //     },
    //     {
    //       title: "Investment",
    //       url: "/investment",
    //       circleColor: "bg-green-600",
    //     },
    //     {
    //       title: "LMS / Learning System",
    //       url: "/lms",
    //       circleColor: "bg-violet-600",
    //     },
    //     {
    //       title: "NFT & Gaming",
    //       url: "/nft",
    //       circleColor: "bg-primary",
    //     },
    //     {
    //       title: "Medical",
    //       url: "/medical",
    //       circleColor: "bg-red-600",
    //     },
    //     {
    //       title: "Analytics",
    //       url: "/analytics",
    //       circleColor: "bg-violet-600",
    //     },
    //     {
    //       title: "POS & Inventory",
    //       url: "/inventory",
    //       circleColor: "bg-yellow-500",
    //     },
    //   ],
    // },
    
    {
      label: "Application",
    },
    {
      title: "Insights",
      url: "/ecommerce",
      icon: Layout,
    },
    {
      title: "Fleet Management",
      url: "/fleetManagement",
      icon: Car,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: CalendarDays,
    },
    {
      title: "Payment History",
      url: "/paymentHistory",
      icon: DollarSign,
    },
    {
      title: "Profile Settings",
      url: "/profileSettings",
      icon: CircleUser,
    },
    {
      title: "Logout",
      url: "#",
      icon: LogOut,
    },
    // {
    //   title: "Email",
    //   url: "/email",
    //   icon: Mail,
    // },
    // {
    //   title: "Chat",
    //   url: "/chat",
    //   icon: MessageCircleMore,
    // },
    // ==============================================
    {
      label: "Super Admin",
    },
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Vendor Management",
      url: "/s",
      icon: Users2,
    },
    {
      title: "Fleets",
      url: "/sa",
      icon: Bus,
    },
    {
      title: "Payouts",
      url: "/ca",
      icon: Receipt,
    },
    {
      title: "Email & SMS",
      url: "/q",
      icon: Mails,
    },
    {
      title: "Admin Settings",
      url: "/5",
      icon: ShieldUser,
    },
    {
      title: "Logout Admin",
      url: "/saw",
      icon: LogOutIcon,
    },
    // ==============================================
    {
      label: "UI Elements",
    },
    {
      title: "Components",
      url: "#",
      icon: Component,
      isActive: true,
      items: [
        {
          title: "Typography",
          url: "/typography",
          circleColor: "bg-primary",
        },
        {
          title: "Colors",
          url: "/colors",
          circleColor: "bg-yellow-500",
        },
        {
          title: "Buttons",
          url: "/buttons",
          circleColor: "bg-green-600",
        },
        {
          title: "Dropdown",
          url: "/dropdown",
          circleColor: "bg-purple-600",
        },
        {
          title: "Alert",
          url: "/alert",
          circleColor: "bg-yellow-500",
        },
        {
          title: "Card",
          url: "/card",
          circleColor: "bg-red-600",
        },
        {
          title: "Avatar",
          url: "/avatar",
          circleColor: "bg-green-600",
        },
        {
          title: "Progress Bar",
          url: "/progress-bar",
          circleColor: "bg-primary",
        },
        {
          title: "Tab & Accordion",
          url: "/tab-accordion",
          circleColor: "bg-yellow-500",
        },
        {
          title: "Pagination",
          url: "/pagination",
          circleColor: "bg-red-600",
        },
        {
          title: "Badges",
          url: "/badge",
          circleColor: "bg-primary",
        },
        {
          title: "Tooltip & Popover",
          url: "/tooltip",
          circleColor: "bg-slate-900",
        },
        {
          title: "Star Ratings",
          url: "/star-rating",
          circleColor: "bg-purple-600",
        },
        {
          title: "Tags",
          url: "/tags",
          circleColor: "bg-primary",
        },
        {
          title: "List",
          url: "/list",
          circleColor: "bg-red-600",
        },
        {
          title: "Radio",
          url: "/radio",
          circleColor: "bg-orange-600",
        },
        {
          title: "Switch",
          url: "/switch",
          circleColor: "bg-green-600",
        },
      ],
    },
    {
      title: "Forms",
      url: "#",
      icon: StickyNote,
      isActive: true,
      items: [
        {
          title: "Input Forms",
          url: "/input-forms",
          circleColor: "bg-primary",
        },
        {
          title: "Input Layout",
          url: "/input-layout",
          circleColor: "bg-yellow-500",
        },
        {
          title: "Form Validation",
          url: "/form-validation",
          circleColor: "bg-green-600",
        },
      ],
    },
    {
      title: "Chart",
      url: "#",
      icon: ChartPie,
      isActive: true,
      items: [
        {
          title: "Line Chart",
          url: "/line-chart",
          circleColor: "bg-orange-600",
        },
        {
          title: "Column Chart",
          url: "/column-chart",
          circleColor: "bg-yellow-500",
        },
        {
          title: "Pie Chart",
          url: "/pie-chart",
          circleColor: "bg-green-600",
        },
      ],
    },
    {
      title: "Widgets",
      url: "/widgets",
      icon: Boxes,
    },
    {
      title: "Table",
      url: "#",
      icon: Server,
      isActive: true,
      items: [
        {
          title: "Basic Table",
          url: "/basic-table",
          circleColor: "bg-orange-600",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: UsersRound,
      isActive: true,
      items: [
        {
          title: "Users List",
          url: "/users-list",
          circleColor: "bg-primary",
        },
        {
          title: "Users Grid",
          url: "/users-grid",
          circleColor: "bg-yellow-500",
        },
        {
          title: "View Profile",
          url: "/view-profile",
          circleColor: "bg-red-600",
        },
      ],
    },
    {
      label: "Pages",
    },
    {
      title: "Authentication",
      url: "#",
      icon: ShieldCheck,
      isActive: true,
      items: [
        {
          title: "Sign In",
          url: "/auth/login",
          circleColor: "bg-primary",
        },
        {
          title: "Sign Up",
          url: "/auth/register",
          circleColor: "bg-yellow-500",
        },
        {
          title: "Forgot Password",
          url: "/auth/forgot-password",
          circleColor: "bg-cyan-500",
        },
      ],
    },
    {
      title: "Setting",
      url: "#",
      icon: Settings,
      isActive: true,
      items: [
        {
          title: "Company",
          url: "/company",
          circleColor: "bg-primary",
        },
        {
          title: "Notification",
          url: "/settings-notification",
          circleColor: "bg-yellow-500",
        },
        {
          title: "Notification Alert",
          url: "/notification-alert",
          circleColor: "bg-yellow-500",
        },
      ],
    },
  ],
};
