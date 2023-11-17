import React,{useState} from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import {
  BsCartFill,
  BsFillCalendarEventFill,
  BsCheckCircleFill,
  BsFillLightbulbFill,
} from "react-icons/bs";

import ProgressComponent from "./ProgressComponent";
import { Text } from "@nextui-org/react";
import { WhatObjective } from "./NewCampaignSteps.jsx/WhatObjective";
import { ChooseProduct } from "./NewCampaignSteps.jsx/ChooseProduct";
import { CampaignSettings } from "./NewCampaignSteps.jsx/CampaignSettings";
import Ready from "./NewCampaignSteps.jsx/Ready";
import {useCommonStore} from "../Store/store";

export const AddCampaign = () => {
  const {state :{steps},action} = useCommonStore((state) => state.steps);
  const [formData,setFormData] = useState({budget: 1500,
    campaignTitle: "",
    campaign_status: "Active",
    clicks:500,
    endDate: new Date().toISOString(),
    id: "", // Use a unique ID, you can adjust this logic as needed
    location: "",
    campaignImage: "",
    platform: "",
    start: false,
    startDate: new Date().toISOString(),
    createdAt: new Date().toISOString()
  })
  let activeStep = null;
  let completion = 25;

  if (steps === 1) {
    activeStep = <WhatObjective formData={formData} setFormData={setFormData}/>;
  }

  if (steps === 2) {
    completion = 50;
    activeStep = <ChooseProduct formData={formData} setFormData={setFormData}/>;
  }
  if (steps === 3) {
    completion = 75;
    activeStep = <CampaignSettings formData={formData} setFormData={setFormData}/>;
  }

  if (steps === 4) {
    completion = 100;
    activeStep = <Ready formData={formData} setFormData={setFormData}/>;
  }

  return (
    <>
      {/* HEADER  */}
      <div className="flex justify-between items-center mb-3 ">
        <div className="flex flex-col space-y-1">
          <Text h2 className="m-0" color="#000">
            Your Ad Campaign
          </Text>
          <Text className="m-0" color="#00000080">
            Launch your ad in just 3 easy steps{" "}
          </Text>
        </div>
      </div>
      {/* PROGRESS BAR */}
      <div className="max-w-6xl mt-14 mx-auto  ">
        <ProgressBar
          percent={completion}
          filledBackground="#FFB963"
          height="5px"
          unfilledBackground="#F5F5F5"
        >
          <Step>
            {({ accomplished }) => (
              <ProgressComponent
                text="What you want to do"
                Icon={BsFillLightbulbFill}
                accomplished={accomplished}
              />
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <ProgressComponent
                text="Choose Product"
                Icon={BsCartFill}
                accomplished={accomplished}
              />
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <ProgressComponent
                text="Campaign settings"
                Icon={BsFillCalendarEventFill}
                accomplished={accomplished}
              />
            )}
          </Step>

          <Step>
            {({ accomplished }) => (
              <ProgressComponent
                text="Ready to go"
                Icon={BsCheckCircleFill}
                accomplished={accomplished}
              />
            )}
          </Step>
        </ProgressBar>
      </div>
      {activeStep}
    </>
  );
};

export default AddCampaign;
