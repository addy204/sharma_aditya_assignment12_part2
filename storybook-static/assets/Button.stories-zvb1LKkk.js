import{j as d}from"./jsx-runtime-BZf_YgVj.js";import{p as f}from"./styled-components.browser.esm-BoS1Xy2b.js";import"./index-CEThVCg_.js";import"./tslib.es6-CvpyDmub.js";const x=e=>!["bgColor","visible"].includes(e),y=f.button.withConfig({shouldForwardProp:x})`
  background-color: ${({bgColor:e})=>e||"blue"};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.5:1};
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,p=({label:e,disabled:b=!1,bgColor:m,visible:g=!0})=>g?d.jsx(y,{disabled:b,bgColor:m,children:e}):null,u=p;p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const T={title:"Components/Button",component:u,argTypes:{label:{control:"text"},disabled:{control:"boolean"},bgColor:{control:"color"},visible:{control:"boolean"}}},c=e=>d.jsx(u,{...e}),o=c.bind({});o.args={label:"Primary Button",disabled:!1,bgColor:"blue",visible:!0};const r=c.bind({});r.args={label:"Disabled Button",disabled:!0,bgColor:"grey",visible:!0};var t,s,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"args => <Button {...args} />",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,n,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Button {...args} />",...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const w=["Primary","Disabled"];export{r as Disabled,o as Primary,w as __namedExportsOrder,T as default};
