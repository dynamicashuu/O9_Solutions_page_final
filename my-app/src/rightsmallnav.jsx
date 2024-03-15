import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  
  export default function VerticalTabs() {
    const data = [
      {
        label: "Ellipsis",
        value: "html",
        desc: ``,
      },
      {
        label: "Link Filter",
        value: "react",
        desc: ``,
      },
      {
        label: "Forward",
        value: "vue",
        desc: ``,
      },
      {
        label: "Hamburger",
        value: "angular",
        desc: ``,
      },
      {
        label: "Svelte",
        value: "svelte",
        desc: ``,
      },
    ];
  
    return (
      <Tabs value="html" orientation="vertical">
        <TabsHeader className="w-32">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="py-0">
            <div className="text-left">
              <p>{desc}</p>
            </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }
  