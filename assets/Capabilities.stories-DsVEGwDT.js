import{C as v}from"./Catalogue-D3I0Qk0i.js";import"./iframe-Cda5SC6I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B89BJT2k.js";const{expect:a,userEvent:s,within:y}=__STORYBOOK_MODULE_TEST__,R={title:"DLS/12 Applied Experiences/Capability modules",component:v,parameters:{layout:"fullscreen"},tags:["candidate","product-surface"]},n={play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("status")).toHaveTextContent("150 of 150"),await a(e.getByRole("button",{name:"Reset filters"})).toBeDisabled(),await s.type(e.getByRole("searchbox"),"1.2.1"),await a(e.getByRole("status")).toHaveTextContent("1 of 150"),await a(e.getByText("Native Entra ID Lighthouse Integration")).toBeVisible(),await s.click(e.getByRole("button",{name:"Reset filters"})),await s.selectOptions(e.getByRole("combobox"),"7"),await a(e.getByRole("status")).toHaveTextContent("15 of 150")}},o={args:{initialModule:"1"}},i={args:{initialModule:"2"}},r={args:{initialModule:"3"}},c={args:{initialModule:"4"}},l={args:{initialModule:"5"}},u={args:{initialModule:"6"}},d={args:{initialModule:"7"}},p={args:{initialQuery:"no-such-capability"},play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("heading",{name:"No matching capabilities"})).toBeVisible(),await s.click(e.getByRole("button",{name:"Show all capabilities"})),await a(e.getByRole("status")).toHaveTextContent("150 of 150")}},m={args:{initialModule:"1"},globals:{theme:"dark",direction:"rtl",density:"standard"},play:async({canvasElement:t})=>{const e=y(t),g=e.getByRole("searchbox");await a(g.closest("[dir]")).toHaveAttribute("dir","rtl"),await a(g.closest("[data-density]")).toHaveAttribute("data-density","standard"),g.focus(),await s.keyboard("Lighthouse"),await a(e.getByRole("status")).toHaveTextContent("1 of 150")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "1"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "2"
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "3"
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "4"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "5"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "6"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    initialModule: "7"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  }
}`,...m.parameters?.docs?.source}}};const M=["AllCapabilities","Module1","Module2","Module3","Module4","Module5","Module6","Module7","NoResults","DarkRtl"];export{n as AllCapabilities,m as DarkRtl,o as Module1,i as Module2,r as Module3,c as Module4,l as Module5,u as Module6,d as Module7,p as NoResults,M as __namedExportsOrder,R as default};
