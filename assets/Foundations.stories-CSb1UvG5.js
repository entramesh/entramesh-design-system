import{j as n}from"./iframe--meIQtiv.js";import{B,S as o}from"./index-DQIYp00X.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t,fn:b,userEvent:y,within:s}=__STORYBOOK_MODULE_TEST__,h={title:"DLS/05 Primitives/Button",component:B,tags:["autodocs","canonical","primitive"],args:{children:"Review scope",onClick:b()}},r={play:async({args:e,canvasElement:a})=>{await y.click(s(a).getByRole("button")),await t(e.onClick).toHaveBeenCalledOnce()}},c={args:{variant:"secondary"}},i={args:{disabled:!0},play:async({args:e,canvasElement:a})=>{const g=s(a).getByRole("button");await t(g).toBeDisabled(),await y.click(g),await t(e.onClick).not.toHaveBeenCalled()}},d={play:async({args:e,canvasElement:a})=>{s(a).getByRole("button").focus(),await y.keyboard("{Enter}"),await t(e.onClick).toHaveBeenCalledOnce()}},l={globals:{density:"standard"},play:async({canvasElement:e})=>{const a=s(e).getByRole("button");await t(a.getBoundingClientRect().height).toBe(40)}},u={play:async({canvasElement:e})=>{const a=s(e).getByRole("button");await t(a.getBoundingClientRect().height).toBe(32)}},m={globals:{theme:"dark"}},p={render:()=>n.jsxs("div",{className:"em-demo-row",children:[n.jsx(o,{children:"Planned"}),n.jsx(o,{tone:"positive",children:"Verified"}),n.jsx(o,{tone:"warning",children:"Needs review"}),n.jsx(o,{tone:"danger",children:"Blocked"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button"));
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole("button");
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole("button");
    button.focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  globals: {
    density: "standard"
  },
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole("button");
    await expect(button.getBoundingClientRect().height).toBe(40);
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole("button");
    await expect(button.getBoundingClientRect().height).toBe(32);
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="em-demo-row">
      <StatusBadge>Planned</StatusBadge>
      <StatusBadge tone="positive">Verified</StatusBadge>
      <StatusBadge tone="warning">Needs review</StatusBadge>
      <StatusBadge tone="danger">Blocked</StatusBadge>
    </div>
}`,...p.parameters?.docs?.source}}};const E=["Primary","Secondary","Disabled","Keyboard","StandardDensity","Dense","Dark","StatusVocabulary"];export{m as Dark,u as Dense,i as Disabled,d as Keyboard,r as Primary,c as Secondary,l as StandardDensity,p as StatusVocabulary,E as __namedExportsOrder,h as default};
