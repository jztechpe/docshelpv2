import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [{
  id: "Niewtech",
  icon: "iconsminds-library",
  label: "Niewtech",
  to: `${adminRoot}/piaf`,
  subs: [{
 // icon: "simple-icon-paper-plane",
    label: "Nosotros",
    to: `${adminRoot}/piaf/start`,
    // roles: [UserRole.Admin, UserRole.Editor],
  }, 
  {    
    label: "Nuestros productos",
    to: `${adminRoot}/piaf/start`,    
  },
  ]
},
{
  id: "Site",
  icon: "iconsminds-digital-drawing",
  label: "Site",
  to: `${adminRoot}/second-menu`,
  subs: [{    
    label: "General",
    to: `${adminRoot}/second-menu/second`,
  },
  {    
    label: "Merchants",
    to: `${adminRoot}/second-menu/second`,
  },
  {    
    label: "Usuarios",
    to: `${adminRoot}/second-menu/second`,
  },
  {    
    label: "Catalogos",
    to: `${adminRoot}/second-menu/second`,
  },
  
  ]
},
{
  id: "Merchant",
  icon: "iconsminds-shop",
  label: "Merchant",
  to: "/user/login",
  subs: [{
  // icon: "simple-icon-user-following",
    label: "General",
    to: "/user/login",
  // newWindow: true
  }, {    
    label: "Merchants",
    to: "/user/register",
    
  }, {    
    label: "Usuarios",
    to: "/user/register",
    
  },
  {    
    label: "Catalogo",
    to: "/user/register",
    
  },
  ]
},
{
  id: "single",
  icon: "iconsminds-three-arrow-fork",
  label: "menu.single",
  to: `${adminRoot}/single`,
},
{
  id: "docs",
  icon: "iconsminds-library",
  label: "menu.docs",
  to: "https://piaf-vue-docs.coloredstrategies.com/",
  newWindow: true
}
];
export default data;
