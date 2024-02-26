import Tab from "./Tab";
import { EXAMPLES } from "./Data";
import { useState } from "react";


export default function Examples(){
    const [tabContent,settabContent]=useState();
    function handleSelect(selectButton){
       settabContent(selectButton)
    }
    return(
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <Tab isSelected={tabContent==='components'} onSelect={()=>handleSelect("components")}>Components</Tab>
            <Tab isSelected={tabContent==='jsx'} onSelect={()=>handleSelect("jsx")}>JSX</Tab>
            <Tab isSelected={tabContent==='props'} onSelect={()=>handleSelect("props")}>Props</Tab>
            <Tab isSelected={tabContent==='state'} onSelect={()=>handleSelect("state")}>State</Tab>
          </menu>
          {!tabContent ? <p>Please select the Topic</p> : 
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                 <code>
                     {EXAMPLES[tabContent].code}
                 </code>
              </pre>
            </div>
          }
        </section>
    )
}