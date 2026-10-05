"use client";
import { useId, useState } from "react";
import Link from "next/link";
import { ServiceVisual, type ServiceVisualType } from "./ServiceVisuals";

const options: {id:ServiceVisualType;label:string;title:string;body:string;gets:string[];href:string;link:string}[] = [
  {id:"website",label:"Your website",title:"Help people find you and ask about the work.",body:"We write and build pages that explain what you do, answer customers’ questions and make it easy to contact you.",gets:["Website writing and design","Pages that work well on phones","Search setup and a tested contact form"],href:"/services/website-creation-seo-aeo",link:"See website services"},
  {id:"email",label:"Customer emails",title:"Stay in touch after the first visit or sale.",body:"We write, design and set up emails around the moments when customers need information or have a reason to come back.",gets:["A plan for what to send and when","Finished emails and reusable designs","Setup, testing and results you can review"],href:"/services/email-lifecycle-retention",link:"See email services"},
  {id:"ai",label:"Help with AI",title:"Get help with work you keep repeating.",body:"We set up AI to help with a specific task, such as preparing replies or organizing information. Your team checks the result.",gets:["One task set up and tested","Instructions based on your business","A review step and guidance for your team"],href:"/services/ai-implementation",link:"See how we help with AI"},
  {id:"plan",label:"Marketing plan",title:"Choose where to put your time and money.",body:"We review what you’re doing now and help you decide what to fix, build or postpone. You get an action plan with responsibilities and timing.",gets:["A review of your current marketing","Recommendations on projects and spending","A 90-day plan your team can follow"],href:"/services/marketing-consultation",link:"See planning services"}
];

export function ServiceExplorer(){
  const [selected,setSelected]=useState<ServiceVisualType>("website");
  const uid=useId();
  return <section className="section service-explorer" aria-labelledby={`${uid}-heading`}><div className="shell">
    <div className="section-heading split-heading"><h2 id={`${uid}-heading`}>See how we can help.</h2><p>Choose an area to see how the work fits your business and what you’ll receive.</p></div>
    <div className="service-choices" role="tablist" aria-label="Explore our services">{options.map((option,index)=><button key={option.id} type="button" role="tab" id={`${uid}-tab-${option.id}`} aria-controls={`${uid}-panel-${option.id}`} aria-selected={selected===option.id} tabIndex={selected===option.id?0:-1} onClick={()=>setSelected(option.id)} onKeyDown={event=>{
      let next=index;
      if(event.key==="ArrowRight")next=(index+1)%options.length;
      else if(event.key==="ArrowLeft")next=(index+options.length-1)%options.length;
      else if(event.key==="Home")next=0;
      else if(event.key==="End")next=options.length-1;
      else return;
      event.preventDefault();setSelected(options[next].id);document.getElementById(`${uid}-tab-${options[next].id}`)?.focus();
    }}>{option.label}</button>)}</div>
    {options.map(option=><div key={option.id} role="tabpanel" id={`${uid}-panel-${option.id}`} aria-labelledby={`${uid}-tab-${option.id}`} hidden={selected!==option.id} tabIndex={0} className="service-explorer-panel"><div className="service-explorer-copy"><h3>{option.title}</h3><p>{option.body}</p></div><ServiceVisual type={option.id}/><div className="service-receive"><h4>What you get</h4><ul>{option.gets.map(item=><li key={item}>{item}</li>)}</ul><Link className="text-link" href={option.href}>{option.link}</Link></div></div>)}
  </div></section>;
}
