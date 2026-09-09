import{C as v}from"./Catalogue-pxmvDPKs.js";import"./iframe-D8_f4cOD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_ooN6eW.js";const{expect:t,userEvent:a,within:y}=__STORYBOOK_MODULE_TEST__,x={title:"DLS/12 Applied Experiences/Capability modules",component:v,parameters:{layout:"fullscreen"},tags:["candidate","product-surface"]},o={play:async({canvasElement:n})=>{const e=y(n);await t(e.getByRole("status")).toHaveTextContent("150 of 150"),await t(e.getByRole("button",{name:"Reset filters"})).toBeDisabled(),await a.type(e.getByRole("searchbox"),"1.2.1"),await t(e.getByRole("status")).toHaveTextContent("1 of 150"),await t(e.getByText("Native Entra ID Lighthouse Integration")).toBeVisible(),await a.click(e.getByRole("button",{name:"Reset filters"})),await a.selectOptions(e.getByRole("combobox"),"7"),await t(e.getByRole("status")).toHaveTextContent("15 of 150"),await a.click(e.getByRole("button",{name:"Reset filters"})),await t(e.getByRole("status")).toHaveTextContent("150 of 150")}},i={args:{initialModule:"1"}},r={args:{initialModule:"2"}},c={args:{initialModule:"3"}},l={args:{initialModule:"4"}},u={args:{initialModule:"5"}},d={args:{initialModule:"6"}},p={args:{initialModule:"7"}},g={args:{initialQuery:"no-such-capability"},play:async({canvasElement:n})=>{const e=y(n);await t(e.getByRole("heading",{name:"No matching capabilities"})).toBeVisible(),await a.click(e.getByRole("button",{name:"Show all capabilities"})),await t(e.getByRole("status")).toHaveTextContent("150 of 150"),await a.type(e.getByRole("searchbox"),"no-such-capability"),await t(e.getByRole("heading",{name:"No matching capabilities"})).toBeVisible()}},m={args:{initialModule:"1"},globals:{theme:"dark",direction:"rtl",density:"standard"},play:async({canvasElement:n})=>{const e=y(n),s=e.getByRole("searchbox");await t(s.closest("[dir]")).toHaveAttribute("dir","rtl"),await t(s.closest("[data-density]")).toHaveAttribute("data-density","standard"),s.focus(),await a.keyboard("Lighthouse"),await t(e.getByRole("status")).toHaveTextContent("1 of 150"),await a.clear(s),await t(e.getByRole("status")).toHaveTextContent("30 of 150")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("150 of 150");
    await expect(canvas.getByRole("button", {
      name: "Reset filters"
    })).toBeDisabled();
    await userEvent.type(canvas.getByRole("searchbox"), "1.2.1");
    await expect(canvas.getByRole("status")).toHaveTextContent("1 of 150");
    await expect(canvas.getByText("Native Entra ID Lighthouse Integration")).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reset filters"
    }));
    await userEvent.selectOptions(canvas.getByRole("combobox"), "7");
    await expect(canvas.getByRole("status")).toHaveTextContent("15 of 150");
    await userEvent.click(canvas.getByRole("button", {
      name: "Reset filters"
    }));
    await expect(canvas.getByRole("status")).toHaveTextContent("150 of 150");
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "1"
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "2"
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "3"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "4"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "5"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "6"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "7"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    initialQuery: "no-such-capability"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("heading", {
      name: "No matching capabilities"
    })).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: "Show all capabilities"
    }));
    await expect(canvas.getByRole("status")).toHaveTextContent("150 of 150");
    await userEvent.type(canvas.getByRole("searchbox"), "no-such-capability");
    await expect(canvas.getByRole("heading", {
      name: "No matching capabilities"
    })).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "1"
  },
  globals: {
    theme: "dark",
    direction: "rtl",
    density: "standard"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("searchbox");
    await expect(input.closest("[dir]")).toHaveAttribute("dir", "rtl");
    await expect(input.closest("[data-density]")).toHaveAttribute("data-density", "standard");
    input.focus();
    await userEvent.keyboard("Lighthouse");
    await expect(canvas.getByRole("status")).toHaveTextContent("1 of 150");
    await userEvent.clear(input);
    await expect(canvas.getByRole("status")).toHaveTextContent("30 of 150");
  }
}`,...m.parameters?.docs?.source}}};const h=["AllCapabilities","Module1","Module2","Module3","Module4","Module5","Module6","Module7","NoResults","DarkRtl"];export{o as AllCapabilities,m as DarkRtl,i as Module1,r as Module2,c as Module3,l as Module4,u as Module5,d as Module6,p as Module7,g as NoResults,h as __namedExportsOrder,x as default};
