import{r as l,j as e}from"./iframe-B7WCsldj.js";import{S as g,B as c}from"./index-9Kp3MvhY.js";import"./preload-helper-PPVm8Dsz.js";const b={admin:"Tenant administrator",member:"Tenant member",viewer:"Tenant viewer",operator:"Delegated operator"},ke=["Northstar Studio","Harbour Collective"];function ge(){return ke.map((o,a)=>({name:o,members:[{name:"Alex Morgan",email:"alex@example.test",role:"Administrator"},{name:a?"Jordan Lee":"Sam Taylor",email:a?"jordan@example.test":"sam@example.test",role:"Member"}]}))}function xe({initialEntry:o="workspace",persona:a="admin",initialRoute:ye="Home",initialState:ve="ready"}){const r=l.useId(),[v,k]=l.useState(o),[u,we]=l.useState(a),[f,te]=l.useState(0),[j,z]=l.useState(ge),[d,be]=l.useState(ye),[R,K]=l.useState(ve),[Q,se]=l.useState(!1),[X,Z]=l.useState(""),[je,N]=l.useState(!1),[ie,E]=l.useState(""),[re,oe]=l.useState("Member"),[le,p]=l.useState(""),[T,ee]=l.useState(!1),[w,S]=l.useState(null),[M,ce]=l.useState("Alex Morgan"),C=l.useRef(null),de=l.useRef(null),B=u==="admin",O=!["People & access","Organisation"].includes(d)||B,me=["Home",...B?["People & access","Organisation"]:[],"Features","Notifications","My account","Help"],m=j[f];function y(n){be(n),se(!1),Z(""),N(!1),E(""),oe("Member"),p(""),S(null),requestAnimationFrame(()=>de.current?.focus())}function ue(n){te(n),ee(!1),K("ready"),y("Home"),k("workspace")}function L(){z(ge()),te(0),ce("Alex Morgan"),ee(!1),K("ready"),y("Home"),k("login")}function ae(n){z(j.map((s,h)=>h===f?{...s,members:n}:s))}function Be(){N(!1),E(""),p(""),C.current?.focus()}const pe=e.jsxs("div",{className:"em-brand",children:[e.jsx("span",{className:"em-mark","aria-hidden":"true",children:"EM"}),"Entramesh"]}),he=e.jsx("div",{className:"shell-reference",children:"Interactive reference · Sample data · Changes reset on reload"});return v!=="workspace"?e.jsxs("div",{className:"core-shell shell-entry",children:[e.jsxs("header",{children:[pe,e.jsx(g,{children:"Core workspace"})]}),e.jsxs("main",{className:"shell-entry-grid",children:[e.jsxs("section",{className:"shell-intro",children:[e.jsx("div",{className:"em-eyebrow",children:"Your organisation. Connected."}),e.jsxs("h1",{children:["A shared space.",e.jsx("br",{}),"A clear starting point."]}),e.jsx("p",{children:"Bring your people, preferences and services together in one workspace."}),e.jsxs("div",{className:"shell-entry-line",children:[e.jsx("span",{children:"01"})," Choose your organisation"]}),e.jsxs("div",{className:"shell-entry-line",children:[e.jsx("span",{children:"02"})," Find your way around"]}),e.jsxs("div",{className:"shell-entry-line",children:[e.jsx("span",{children:"03"})," Make it your workspace"]})]}),e.jsxs("section",{className:"shell-card shell-login","aria-label":"Workspace entry",children:[(v==="login"||v==="expired")&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Sample sign-in"}),e.jsx("h2",{children:"Welcome to Entramesh"}),e.jsx("p",{children:"Choose a sample profile to explore the interface. No password or real account is needed."}),v==="expired"&&e.jsx("p",{role:"alert",className:"shell-alert",children:"Your sample session has expired. Sign in again to continue."}),e.jsxs("form",{onSubmit:n=>{n.preventDefault(),k("choose")},children:[e.jsx("label",{htmlFor:`${r}-persona`,children:"Sample profile"}),e.jsx("select",{id:`${r}-persona`,value:u,onChange:n=>we(n.target.value),children:Object.entries(b).map(([n,s])=>e.jsxs("option",{value:n,children:["Alex Morgan · ",s]},n))}),e.jsx(c,{type:"submit",children:"Continue to workspaces"})]})]}),v==="choose"&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Choose your workspace"}),e.jsxs("p",{children:["Signed in as Alex Morgan · ",b[u]]}),u==="operator"&&e.jsx("p",{children:"These sample organisations have delegated access. Organisation administration is not included."}),e.jsx("div",{className:"shell-workspaces",children:j.map((n,s)=>e.jsxs("button",{onClick:()=>ue(s),children:[e.jsx("span",{className:"shell-avatar",children:n.name.slice(0,1)}),e.jsxs("span",{children:[e.jsx("strong",{children:n.name}),e.jsx("small",{children:b[u]})]}),e.jsx("span",{"aria-hidden":"true",children:"→"})]},s))}),e.jsx(c,{variant:"secondary",onClick:L,children:"Back to sign-in"})]}),v==="no-access"&&e.jsxs(e.Fragment,{children:[e.jsx(g,{tone:"warning",children:"No active membership"}),e.jsx("h2",{children:"A workspace is waiting for you"}),e.jsx("p",{children:"Ask your organisation administrator for an invitation. A signed-in account alone does not provide workspace access."}),e.jsx(c,{onClick:L,children:"Back to sign-in"})]})]})]}),he]}):e.jsxs("div",{className:"core-shell",children:[e.jsx("a",{className:"shell-skip",href:`#${r}-main`,children:"Skip to workspace"}),e.jsxs("div",{className:"shell-frame",children:[e.jsxs("aside",{className:"shell-sidebar",children:[e.jsxs("div",{className:"shell-brand-row",children:[pe,e.jsx("button",{className:"shell-menu-toggle","aria-expanded":Q,"aria-controls":`${r}-nav`,onClick:()=>se(!Q),children:"Menu"})]}),e.jsxs("div",{className:"shell-org",children:[e.jsx("label",{htmlFor:`${r}-tenant`,children:u==="operator"?"Delegated organisation":"Workspace"}),e.jsx("select",{id:`${r}-tenant`,value:f,onChange:n=>ue(Number(n.target.value)),children:j.map((n,s)=>e.jsx("option",{value:s,children:n.name},s))}),e.jsx("small",{children:b[u]})]}),e.jsxs("div",{id:`${r}-nav`,className:`shell-nav-body ${Q?"is-open":""}`,children:[e.jsx("label",{className:"sr-only",htmlFor:`${r}-search`,children:"Find a page"}),e.jsx("input",{id:`${r}-search`,type:"search",placeholder:"Find a page…",value:X,onChange:n=>Z(n.target.value)}),e.jsxs("nav",{"aria-label":"Workspace navigation",children:[e.jsx("div",{className:"shell-nav-label",children:u==="operator"?"Operator workspace":"Your workspace"}),me.filter(n=>n.toLowerCase().includes(X.toLowerCase())).map(n=>e.jsxs("button",{"aria-current":d===n?"page":void 0,onClick:()=>y(n),children:[e.jsx("span",{className:"shell-nav-dot","aria-hidden":"true"}),n,n==="Notifications"&&!T&&e.jsx("span",{className:"shell-count","aria-label":"1 unread",children:"1"})]},n)),!me.some(n=>n.toLowerCase().includes(X.toLowerCase()))&&e.jsxs("p",{className:"shell-menu-empty",children:["No pages found.",e.jsx("button",{onClick:()=>Z(""),children:"Clear search"})]})]}),e.jsxs("div",{className:"shell-sidebar-footer",children:[e.jsx("div",{className:"shell-avatar",children:"AM"}),e.jsxs("div",{children:[e.jsx("strong",{children:M}),e.jsx("small",{children:"alex@example.test"})]}),e.jsx("button",{onClick:L,children:"Sign out"})]})]})]}),e.jsxs("div",{className:"shell-body",children:[e.jsxs("header",{className:"shell-top",children:[e.jsxs("span",{children:[m.name,e.jsxs("span",{className:"shell-breadcrumb",children:[" / ",d]})]}),e.jsx(g,{children:u==="operator"?"Operator reference":"Tenant reference"})]}),e.jsxs("main",{id:`${r}-main`,className:"shell-main",tabIndex:-1,children:[e.jsxs("div",{className:"shell-page-heading",children:[e.jsxs("div",{children:[e.jsx("div",{className:"em-eyebrow",children:u==="operator"?"Delegated access":"Organisation workspace"}),e.jsx("h1",{ref:de,tabIndex:-1,children:O?d==="Home"?`Welcome, ${M.split(" ")[0]}`:d:"Access restricted"}),e.jsx("p",{children:O?fe[d]:"This page requires a tenant administrator role."})]}),d==="People & access"&&O&&e.jsx(c,{ref:C,onClick:()=>{N(!0),p("")},children:"Invite person"})]}),e.jsx("div",{role:"status",className:le?"shell-message":"sr-only",children:le}),O?R!=="ready"?e.jsxs("section",{className:"shell-card","aria-label":"Workspace status",children:[e.jsx("h2",{children:R==="loading"?"Loading your workspace":"We couldn’t load this workspace"}),e.jsx("p",{children:R==="loading"?"Your workspace is being prepared.":"Your session is still available. Try loading the workspace again."}),e.jsx(c,{onClick:()=>K("ready"),children:R==="loading"?"Complete sample loading":"Try again"})]}):e.jsxs(e.Fragment,{children:[d==="Home"&&e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"shell-welcome",children:[e.jsxs("div",{children:[e.jsx(g,{children:"Workspace overview"}),e.jsx("h2",{children:"A good place to begin."}),e.jsx("p",{children:"Your organisation’s essentials, without the noise. Manage your account, find your team and see what’s available to you."}),e.jsx(c,{onClick:()=>y("My account"),children:"Review my account"})]}),e.jsxs("div",{className:"shell-orbit","aria-hidden":"true",children:[e.jsx("span",{children:"EM"}),e.jsx("i",{}),e.jsx("i",{}),e.jsx("i",{})]})]}),e.jsxs("div",{className:"shell-tiles",children:[e.jsxs("section",{className:"shell-card",children:[e.jsx("span",{className:"em-eyebrow",children:"Organisation"}),e.jsx("h2",{children:m.name}),e.jsx("p",{children:b[u]}),e.jsx(c,{variant:"secondary",onClick:()=>k("choose"),children:"Switch workspace"})]}),e.jsxs("section",{className:"shell-card",children:[e.jsx("span",{className:"em-eyebrow",children:"Your people"}),e.jsxs("h2",{children:[m.members.length," people"]}),e.jsx("p",{children:B?"Manage membership and invitations.":"Your administrator manages workspace access."}),e.jsx(c,{variant:"secondary",onClick:()=>y(B?"People & access":"Help"),children:B?"Manage people":"Get help"})]}),e.jsxs("section",{className:"shell-card",children:[e.jsx("span",{className:"em-eyebrow",children:"Available services"}),e.jsx("h2",{children:"Core workspace"}),e.jsx("p",{children:"Your shared essentials are ready to explore."}),e.jsx(c,{variant:"secondary",onClick:()=>y("Features"),children:"View availability"})]})]}),e.jsxs("section",{className:"shell-card",children:[e.jsx("h2",{children:"Workspace activity"}),e.jsxs("div",{className:"shell-activity",children:[e.jsx("span",{className:"shell-avatar",children:"AM"}),e.jsxs("div",{children:[e.jsxs("strong",{children:["Alex joined ",m.name]}),e.jsx("p",{children:"Sample membership · Administrator invited you"})]}),e.jsx(g,{children:"Sample"})]})]})]}),d==="People & access"&&e.jsxs(e.Fragment,{children:[je&&e.jsxs("section",{className:"shell-card",children:[e.jsxs("h2",{children:["Invite to ",m.name]}),e.jsx("p",{children:"Create a sample invitation. No email will be sent."}),e.jsxs("form",{onSubmit:n=>{n.preventDefault();const s=ie.trim().toLowerCase();if(m.members.some(h=>h.email===s)){p("This email already has access or an invitation.");return}ae([...m.members,{name:"Invitation pending",email:s,role:re,invited:!0}]),N(!1),E(""),p(`Sample invitation created for ${s}. No email sent.`),C.current?.focus()},children:[e.jsxs("div",{className:"shell-form-row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:`${r}-email`,children:"Email address"}),e.jsx("input",{autoFocus:!0,id:`${r}-email`,type:"email",required:!0,value:ie,placeholder:"person@example.test",onChange:n=>E(n.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:`${r}-invite-role`,children:"Role"}),e.jsxs("select",{id:`${r}-invite-role`,value:re,onChange:n=>oe(n.target.value),children:[e.jsx("option",{children:"Member"}),e.jsx("option",{children:"Viewer"})]})]})]}),e.jsxs("div",{className:"shell-actions",children:[e.jsx(c,{type:"submit",children:"Create sample invitation"}),e.jsx(c,{variant:"secondary",onClick:Be,children:"Cancel"})]})]})]}),e.jsxs("section",{className:"shell-card",children:[e.jsx("h2",{children:"People in this workspace"}),e.jsxs("p",{children:["Roles apply only to ",m.name,". Your own administrator role is fixed in this reference."]}),e.jsx("div",{className:"shell-people",children:m.members.map((n,s)=>e.jsxs("div",{className:"shell-person",children:[e.jsx("span",{className:"shell-avatar",children:n.invited?"+":n.name.split(" ").map(h=>h[0]).join("")}),e.jsxs("div",{children:[e.jsx("strong",{children:n.name}),e.jsx("small",{children:n.email})]}),e.jsx(g,{tone:n.invited?"warning":"positive",children:n.invited?"Pending":"Active"}),s===0?e.jsx("span",{children:"Administrator · You"}):e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"sr-only",htmlFor:`${r}-role-${s}`,children:["Role for ",n.email]}),e.jsxs("select",{id:`${r}-role-${s}`,value:n.role,onChange:h=>{ae(m.members.map(ne=>ne.email===n.email?{...ne,role:h.target.value}:ne)),p(`Role updated for ${n.email} in this sample workspace.`)},children:[e.jsx("option",{children:"Member"}),e.jsx("option",{children:"Viewer"})]})]}),n.invited&&e.jsx(c,{variant:"secondary","aria-label":`Revoke invitation for ${n.email}`,onClick:()=>{ae(m.members.filter(h=>h.email!==n.email)),p(`Sample invitation revoked for ${n.email}.`),C.current?.focus()},children:"Revoke"})]},n.email))})]})]}),d==="Organisation"&&e.jsxs("section",{className:"shell-card",children:[e.jsx("h2",{children:"Organisation profile"}),e.jsx("p",{children:"These settings apply to the selected workspace."}),e.jsxs("form",{onSubmit:n=>{if(n.preventDefault(),!(w??"").trim()){p("Enter an organisation name.");return}z(j.map((s,h)=>h===f?{...s,name:(w??"").trim()}:s)),S(null),p("Organisation name saved for this sample session.")},children:[e.jsx("label",{htmlFor:`${r}-name`,children:"Organisation name"}),e.jsx("input",{id:`${r}-name`,required:!0,maxLength:70,value:w??m.name,onChange:n=>S(n.target.value)}),e.jsxs("div",{className:"shell-actions",children:[e.jsx(c,{type:"submit",disabled:!(w??"").trim()||w===m.name,children:"Save changes"}),e.jsx(c,{variant:"secondary",disabled:w===null,onClick:()=>{S(null),p("")},children:"Discard changes"})]})]})]}),d==="Features"&&e.jsxs("section",{className:"shell-card",children:[e.jsx("h2",{children:"Included in this reference"}),e.jsxs("div",{className:"shell-feature",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Core workspace"}),e.jsx("p",{children:"Home, account, navigation and organisation essentials."})]}),e.jsx(g,{tone:"positive",children:"Available"})]}),e.jsxs("div",{className:"shell-empty",children:[e.jsx("h3",{children:"No additional services enabled"}),e.jsx("p",{children:"Capability modules will appear here when they are connected and enabled for your organisation."})]})]}),d==="Notifications"&&e.jsxs("section",{className:"shell-card",children:[e.jsx("h2",{children:T?"You’re all caught up":"Your workspace is ready"}),e.jsx("p",{children:T?"There are no unread notifications in this sample workspace.":`Welcome to ${m.name}. Start with your account and workspace settings.`}),!T&&e.jsx(c,{variant:"secondary",onClick:()=>ee(!0),children:"Mark as read"})]}),d==="My account"&&e.jsxs("section",{className:"shell-card",children:[e.jsx("h2",{children:"Profile & session"}),e.jsxs("p",{children:["alex@example.test · ",b[u]]}),e.jsxs("form",{onSubmit:n=>{n.preventDefault();const s=new FormData(n.currentTarget).get("displayName")?.toString().trim();s&&(ce(s),p("Display name saved for this sample session."))},children:[e.jsx("label",{htmlFor:`${r}-display`,children:"Display name"}),e.jsx("input",{id:`${r}-display`,name:"displayName",defaultValue:M,required:!0,maxLength:60},M),e.jsx(c,{type:"submit",children:"Save profile"})]}),e.jsxs("div",{className:"shell-divider",children:[e.jsx("h3",{children:"Current session"}),e.jsx("p",{children:"Sample session on this browser. Sign out clears sample changes."}),e.jsx(c,{variant:"secondary",onClick:L,children:"Sign out of workspace"})]})]}),d==="Help"&&e.jsxs("section",{className:"shell-card",children:[e.jsx("h2",{children:"Getting around"}),e.jsxs("details",{children:[e.jsx("summary",{children:"How do I switch organisations?"}),e.jsx("p",{children:"Use the workspace selector. Your menus and content follow the selected organisation."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Who can invite people?"}),e.jsx("p",{children:"Tenant administrators manage invitations under People & access. Members and viewers can ask their organisation administrator for help."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Where are my services?"}),e.jsx("p",{children:"Features shows what is available. This reference includes the core workspace only."})]})]})]}):e.jsxs("section",{className:"shell-card",children:[e.jsx("h2",{children:"You are in the right workspace"}),e.jsx("p",{children:"Your role does not include organisation administration. Ask an administrator if your responsibilities have changed."}),e.jsx(c,{onClick:()=>y("Home"),children:"Go to home"})]})]}),he]})]})]})}const fe={Home:"Here’s your organisation at a glance.","People & access":"The right people, with the right access.",Organisation:"The shared details that make this workspace yours.",Features:"A clear view of what’s available in your workspace.",Notifications:"Updates that need your attention.","My account":"Your profile and current workspace session.",Help:"A little guidance, whenever you need it."};xe.__docgenInfo={description:"",methods:[],displayName:"CoreShell",props:{initialEntry:{required:!1,tsType:{name:"union",raw:'"workspace" | "login" | "choose" | "no-access" | "expired"',elements:[{name:"literal",value:'"workspace"'},{name:"literal",value:'"login"'},{name:"literal",value:'"choose"'},{name:"literal",value:'"no-access"'},{name:"literal",value:'"expired"'}]},description:"",defaultValue:{value:'"workspace"',computed:!1}},persona:{required:!1,tsType:{name:"union",raw:'"admin" | "member" | "viewer" | "operator"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"member"'},{name:"literal",value:'"viewer"'},{name:"literal",value:'"operator"'}]},description:"",defaultValue:{value:'"admin"',computed:!1}},initialRoute:{required:!1,tsType:{name:"union",raw:`| "Home"
| "People & access"
| "Organisation"
| "Features"
| "Notifications"
| "My account"
| "Help"`,elements:[{name:"literal",value:'"Home"'},{name:"literal",value:'"People & access"'},{name:"literal",value:'"Organisation"'},{name:"literal",value:'"Features"'},{name:"literal",value:'"Notifications"'},{name:"literal",value:'"My account"'},{name:"literal",value:'"Help"'}]},description:"",defaultValue:{value:'"Home"',computed:!1}},initialState:{required:!1,tsType:{name:"union",raw:'"ready" | "loading" | "error"',elements:[{name:"literal",value:'"ready"'},{name:"literal",value:'"loading"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"ready"',computed:!1}}}};const{expect:i,userEvent:t,within:x}=__STORYBOOK_MODULE_TEST__,Se={title:"DLS/08 Patterns/Core shell",component:xe,tags:["autodocs","reference","pattern"],parameters:{layout:"fullscreen",docs:{description:{component:"Interactive core workspace with sample data. No real authentication, email delivery, persistence or capability modules. Changes reset when the story reloads."}}}},V={play:async({canvasElement:o})=>{const a=x(o);await t.click(a.getByRole("button",{name:"Manage people"})),await i(a.getByRole("heading",{name:"People & access"})).toBeVisible(),await t.click(a.getByRole("button",{name:"Invite person"})),await t.type(a.getByLabelText("Email address"),"guest@example.test"),await t.click(a.getByRole("button",{name:"Cancel"})),await i(a.queryByLabelText("Email address")).not.toBeInTheDocument(),await i(a.getByRole("button",{name:"Invite person"})).toHaveFocus(),await t.click(a.getByRole("button",{name:"Invite person"})),await t.type(a.getByLabelText("Email address"),"guest@example.test"),await t.click(a.getByRole("button",{name:"Create sample invitation"})),await i(a.getByText("guest@example.test",{exact:!0})).toBeVisible(),await t.selectOptions(a.getByLabelText("Role for guest@example.test"),"Viewer"),await i(a.getByLabelText("Role for guest@example.test")).toHaveValue("Viewer"),await t.selectOptions(a.getByLabelText("Workspace"),"1"),await t.click(a.getByRole("button",{name:"Manage people"})),await i(a.queryByText("guest@example.test",{exact:!0})).not.toBeInTheDocument(),await t.selectOptions(a.getByLabelText("Workspace"),"0"),await t.click(a.getByRole("button",{name:"Manage people"})),await t.click(a.getByRole("button",{name:"Revoke invitation for guest@example.test"})),await i(a.queryByText("guest@example.test",{exact:!0})).not.toBeInTheDocument(),await t.click(a.getByRole("button",{name:"Home"}))}},A={args:{initialEntry:"login"},play:async({canvasElement:o})=>{const a=x(o);a.getByRole("button",{name:"Continue to workspaces"}).focus(),await t.keyboard("{Enter}"),await t.click(a.getByRole("button",{name:/Northstar Studio/})),await i(a.getByRole("heading",{name:"Welcome, Alex"})).toBeVisible(),await t.click(a.getByRole("button",{name:"My account"})),await t.clear(a.getByLabelText("Display name")),await t.type(a.getByLabelText("Display name"),"Jamie Morgan"),await t.click(a.getByRole("button",{name:"Save profile"})),await i(a.getByText("Jamie Morgan",{exact:!0})).toBeVisible(),await t.click(a.getByRole("button",{name:"Sign out of workspace"})),await i(a.getByRole("heading",{name:"Welcome to Entramesh"})).toBeVisible()}},I={args:{initialEntry:"choose"}},D={args:{initialRoute:"People & access"}},H={args:{initialRoute:"Organisation"},play:async({canvasElement:o})=>{const a=x(o);await t.clear(a.getByLabelText("Organisation name")),await t.type(a.getByLabelText("Organisation name"),"Northstar Labs"),await t.click(a.getByRole("button",{name:"Save changes"})),await i(a.getByRole("option",{name:"Northstar Labs"})).toBeInTheDocument(),await t.selectOptions(a.getByLabelText("Workspace"),"1"),await t.click(a.getByRole("button",{name:"Organisation"})),await i(a.getByLabelText("Organisation name")).toHaveValue("Harbour Collective"),await t.selectOptions(a.getByLabelText("Workspace"),"0"),await t.click(a.getByRole("button",{name:"Organisation"})),await t.clear(a.getByLabelText("Organisation name")),await t.type(a.getByLabelText("Organisation name"),"Northstar Studio"),await t.click(a.getByRole("button",{name:"Save changes"}))}},F={args:{persona:"member"},play:async({canvasElement:o})=>{const a=x(o);await i(a.queryByRole("button",{name:"People & access"})).not.toBeInTheDocument(),await t.type(a.getByLabelText("Find a page"),"xyz"),await i(a.getByText("No pages found.")).toBeVisible(),await t.click(a.getByRole("button",{name:"Clear search"})),await t.click(a.getByRole("button",{name:/^Notifications/})),await t.click(a.getByRole("button",{name:"Mark as read"})),await i(a.getByRole("heading",{name:"You’re all caught up"})).toBeVisible(),await t.selectOptions(a.getByLabelText("Workspace"),"1"),await t.click(a.getByRole("button",{name:/^Notifications/})),await i(a.getByRole("button",{name:"Mark as read"})).toBeVisible(),await t.selectOptions(a.getByLabelText("Workspace"),"0")}},W={args:{persona:"viewer",initialRoute:"People & access"},play:async({canvasElement:o})=>{const a=x(o);await i(a.getByRole("heading",{name:"Access restricted"})).toBeVisible(),await i(a.queryByRole("button",{name:"Invite person"})).not.toBeInTheDocument()}},$={args:{persona:"operator"},play:async({canvasElement:o})=>{const a=x(o);await i(a.getByLabelText("Delegated organisation")).toBeVisible(),await i(a.queryByRole("button",{name:"People & access"})).not.toBeInTheDocument()}},P={args:{initialEntry:"no-access"}},q={args:{initialEntry:"expired"}},Y={args:{initialState:"loading"}},_={args:{initialState:"error"}},J={args:{initialState:"error"},play:async({canvasElement:o})=>{const a=x(o);await t.click(a.getByRole("button",{name:"Try again"})),await i(a.getByRole("heading",{name:"A good place to begin."})).toBeVisible()}},G={globals:{viewport:{value:"mobile1",isRotated:!1}},play:async({canvasElement:o})=>{const a=x(o);await t.click(a.getByRole("button",{name:"Menu"})),await t.click(a.getByRole("button",{name:"My account"})),await i(a.getByRole("heading",{name:"My account"})).toBeVisible(),await i(a.getByRole("button",{name:"Menu"})).toHaveAttribute("aria-expanded","false"),await t.click(a.getByRole("button",{name:"Menu"})),await t.click(a.getByRole("button",{name:"Home"}))}},U={globals:{theme:"dark",direction:"rtl"}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole("button", {
      name: "Manage people"
    }));
    await expect(c.getByRole("heading", {
      name: "People & access"
    })).toBeVisible();
    await userEvent.click(c.getByRole("button", {
      name: "Invite person"
    }));
    await userEvent.type(c.getByLabelText("Email address"), "guest@example.test");
    await userEvent.click(c.getByRole("button", {
      name: "Cancel"
    }));
    await expect(c.queryByLabelText("Email address")).not.toBeInTheDocument();
    await expect(c.getByRole("button", {
      name: "Invite person"
    })).toHaveFocus();
    await userEvent.click(c.getByRole("button", {
      name: "Invite person"
    }));
    await userEvent.type(c.getByLabelText("Email address"), "guest@example.test");
    await userEvent.click(c.getByRole("button", {
      name: "Create sample invitation"
    }));
    await expect(c.getByText("guest@example.test", {
      exact: true
    })).toBeVisible();
    await userEvent.selectOptions(c.getByLabelText("Role for guest@example.test"), "Viewer");
    await expect(c.getByLabelText("Role for guest@example.test")).toHaveValue("Viewer");
    await userEvent.selectOptions(c.getByLabelText("Workspace"), "1");
    await userEvent.click(c.getByRole("button", {
      name: "Manage people"
    }));
    await expect(c.queryByText("guest@example.test", {
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.selectOptions(c.getByLabelText("Workspace"), "0");
    await userEvent.click(c.getByRole("button", {
      name: "Manage people"
    }));
    await userEvent.click(c.getByRole("button", {
      name: "Revoke invitation for guest@example.test"
    }));
    await expect(c.queryByText("guest@example.test", {
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.click(c.getByRole("button", {
      name: "Home"
    }));
  }
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    initialEntry: "login"
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    c.getByRole("button", {
      name: "Continue to workspaces"
    }).focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.click(c.getByRole("button", {
      name: /Northstar Studio/
    }));
    await expect(c.getByRole("heading", {
      name: "Welcome, Alex"
    })).toBeVisible();
    await userEvent.click(c.getByRole("button", {
      name: "My account"
    }));
    await userEvent.clear(c.getByLabelText("Display name"));
    await userEvent.type(c.getByLabelText("Display name"), "Jamie Morgan");
    await userEvent.click(c.getByRole("button", {
      name: "Save profile"
    }));
    await expect(c.getByText("Jamie Morgan", {
      exact: true
    })).toBeVisible();
    await userEvent.click(c.getByRole("button", {
      name: "Sign out of workspace"
    }));
    await expect(c.getByRole("heading", {
      name: "Welcome to Entramesh"
    })).toBeVisible();
  }
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    initialEntry: "choose"
  }
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    initialRoute: "People & access"
  }
}`,...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    initialRoute: "Organisation"
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.clear(c.getByLabelText("Organisation name"));
    await userEvent.type(c.getByLabelText("Organisation name"), "Northstar Labs");
    await userEvent.click(c.getByRole("button", {
      name: "Save changes"
    }));
    await expect(c.getByRole("option", {
      name: "Northstar Labs"
    })).toBeInTheDocument();
    await userEvent.selectOptions(c.getByLabelText("Workspace"), "1");
    await userEvent.click(c.getByRole("button", {
      name: "Organisation"
    }));
    await expect(c.getByLabelText("Organisation name")).toHaveValue("Harbour Collective");
    await userEvent.selectOptions(c.getByLabelText("Workspace"), "0");
    await userEvent.click(c.getByRole("button", {
      name: "Organisation"
    }));
    await userEvent.clear(c.getByLabelText("Organisation name"));
    await userEvent.type(c.getByLabelText("Organisation name"), "Northstar Studio");
    await userEvent.click(c.getByRole("button", {
      name: "Save changes"
    }));
  }
}`,...H.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    persona: "member"
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.queryByRole("button", {
      name: "People & access"
    })).not.toBeInTheDocument();
    await userEvent.type(c.getByLabelText("Find a page"), "xyz");
    await expect(c.getByText("No pages found.")).toBeVisible();
    await userEvent.click(c.getByRole("button", {
      name: "Clear search"
    }));
    await userEvent.click(c.getByRole("button", {
      name: /^Notifications/
    }));
    await userEvent.click(c.getByRole("button", {
      name: "Mark as read"
    }));
    await expect(c.getByRole("heading", {
      name: "You’re all caught up"
    })).toBeVisible();
    await userEvent.selectOptions(c.getByLabelText("Workspace"), "1");
    await userEvent.click(c.getByRole("button", {
      name: /^Notifications/
    }));
    await expect(c.getByRole("button", {
      name: "Mark as read"
    })).toBeVisible();
    await userEvent.selectOptions(c.getByLabelText("Workspace"), "0");
  }
}`,...F.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    persona: "viewer",
    initialRoute: "People & access"
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole("heading", {
      name: "Access restricted"
    })).toBeVisible();
    await expect(c.queryByRole("button", {
      name: "Invite person"
    })).not.toBeInTheDocument();
  }
}`,...W.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    persona: "operator"
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByLabelText("Delegated organisation")).toBeVisible();
    await expect(c.queryByRole("button", {
      name: "People & access"
    })).not.toBeInTheDocument();
  }
}`,...$.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    initialEntry: "no-access"
  }
}`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    initialEntry: "expired"
  }
}`,...q.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: "loading"
  }
}`,...Y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: "error"
  }
}`,..._.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    initialState: "error"
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole("button", {
      name: "Try again"
    }));
    await expect(c.getByRole("heading", {
      name: "A good place to begin."
    })).toBeVisible();
  }
}`,...J.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole("button", {
      name: "Menu"
    }));
    await userEvent.click(c.getByRole("button", {
      name: "My account"
    }));
    await expect(c.getByRole("heading", {
      name: "My account"
    })).toBeVisible();
    await expect(c.getByRole("button", {
      name: "Menu"
    })).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(c.getByRole("button", {
      name: "Menu"
    }));
    await userEvent.click(c.getByRole("button", {
      name: "Home"
    }));
  }
}`,...G.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark",
    direction: "rtl"
  }
}`,...U.parameters?.docs?.source}}};const Me=["TenantAdmin","SignIn","WorkspaceSelection","PeopleAndAccess","OrganisationSettings","TenantMember","ViewerRestricted","Operator","NoMembership","SessionExpired","Loading","ServiceError","ErrorRecovery","Mobile","DarkRtl"];export{U as DarkRtl,J as ErrorRecovery,Y as Loading,G as Mobile,P as NoMembership,$ as Operator,H as OrganisationSettings,D as PeopleAndAccess,_ as ServiceError,q as SessionExpired,A as SignIn,V as TenantAdmin,F as TenantMember,W as ViewerRestricted,I as WorkspaceSelection,Me as __namedExportsOrder,Se as default};
