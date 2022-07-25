import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [{
  id: "SiteCentral",
  icon: "iconsminds-digital-drawing",
  label: "SiteCentral",
  to: `${adminRoot}/piaf`,
  subs: [{
 // icon: "simple-icon-paper-plane",
    label: "Usuarios",
    to: `${adminRoot}/piaf/start`,
    // roles: [UserRole.Admin, UserRole.Editor],
  }, 
  {    
    label: "Producto",
    to: `${adminRoot}/piaf/start`,    
  },
  ]
},
{
  id: "Desarrolladores",
  icon: "simple-icon-user-following",
  label: "Desarrolladores",
  to: `${adminRoot}/second-menu`,
  subs: [{    
    label: "General",
    to: `${adminRoot}/second-menu/second`,
  }
  
  ]
},
{
  id: "Integraciones",
  icon: "simple-icon-paper-plane",
  label: "Integraciones",
  to: "/user/login",
  subs: [{
  // icon: "simple-icon-user-following",
   // label: "General",
   // to: "/user/login",
  // newWindow: true
  }, {    
  //  label: "Merchants",
  // to: "/user/register",
    
  }, {    
  //  label: "Usuarios",
  //  to: "/user/register",
    
  },
  {    
  //  label: "Catalogo",
  //  to: "/user/register",
    
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
