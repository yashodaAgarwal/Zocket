import { Button, Card, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { useCommonStore } from "../../Store/store";
import { useEffect } from "react";

export const WhatObjective = ({formData,setFormData}) => {
  // steps function to increase step on progress
  const {actions} = useCommonStore((state) => state.setSteps);
  const campaignType = [{
    CampaignName:"Get Leads as call",
    Platform:"Google",
    descripton:"Reach broad audience and get leads through calls",
    img:"https://i.ibb.co/zJmDt1N/Frame-1.png",
    simg:"https://i.ibb.co/Y0yjtgN/Frame-2.png"
  },
  {
    CampaignName:"Get Leads as Facebook messages",
    Platform:"FB",
    descripton:"Get more FB messages from Leads",
    img:"https://i.ibb.co/QFfN5v7/Frame-3.png",
    simg:"https://i.ibb.co/Gpmyn6V/Frame-4.png"
  },
  {
    CampaignName:"Increase Page followers",
    Platform:"FB",
    descripton:"Encourage customers to follow your page",
    img:"https://i.ibb.co/2sBpXtb/Frame-5.png",
            simg:"https://i.ibb.co/xHysgtb/Frame.png"
  },{
    CampaignName:"Get Customer Leads",
    Platform:"FB",
    descripton:"Encourage customers to take action",
    img:"https://i.ibb.co/4VmHMWB/Frame-6.png",
            simg:"https://i.ibb.co/1Z1R4Pg/Frame-7.png"
  },{
    CampaignName:"Get More youtube views",
    Platform:"Youtube",
    descripton:"Increase organic views by obtaining user attention ",
    img:"https://i.ibb.co/4M6Ghgc/Frame-10.png",
            simg:"https://i.ibb.co/dfg2yPS/Frame-11.png"
  },{
    CampaignName:"Get More website Traffic",
    Platform:"Instagram",
    descripton:"Get the right people to visit your website",
    img:"https://i.ibb.co/nBDJmLC/Frame-14.png",
            simg:"https://i.ibb.co/RjYgTGn/Frame-15.png"
  },{
    CampaignName:"Increase Livestore Traffic",
    Platform:"Google",
    descripton:"Drive visits to local stores, restaurants & Dealerships",
    img:"https://i.ibb.co/YdqQxrx/Frame-8.png",
            simg:"https://i.ibb.co/KGHR2Tc/Frame-9.png"
  },{
    CampaignName:"Increase your app instals",
    Platform:"Youtube",
    descripton:"Get more installs, interactions for your app",
    img:"https://i.ibb.co/5cRF0gJ/Frame-12.png",
            simg:"https://i.ibb.co/vh5HJLX/Frame-13.png"
  },{
    CampaignName:"Increase the catalogue sales",
    Platform:"Google",
    descripton:"Drive the sales of your catalogue and get more leads",
    img:"https://i.ibb.co/8mKDn0V/Frame-16.png",
    simg:"https://i.ibb.co/F6Rwn2N/Frame-17.png"
  }]
  const [selected,setSelected] = useState(campaignType[0]);
  useEffect(()=>{
    setFormData({...formData,platform: campaignType[0]?.Platform})
  },[])
  return (
    <>
      <Card variant="bordered" css={{ marginTop: "$20", padding: "$4" }}>
        <Card.Body>
          <Text className="font-bold text-md pb-2 border-b-2 border-gray-200 ">
            What you want to do? <span className="text-gray-400 ml-2 ">(Step 1 of 4)</span>
          </Text>

          <div className="campaign_categories p-3  pl-0 grid grid-cols-3 gap-3">
            {[
              campaignType.map((item, index) => (
                <div key={index} className={item.CampaignName === selected.CampaignName? "border-2 border-blue-600 rounded-xl":" rounded-xl"} 
                onClick={()=>{setSelected(item);
                  setFormData({...formData,platform: item.Platform})
                }}>
                <Card>
                  <Card.Body>
                    <div className="flex space-x-3 items-center">
                      <img src={item.CampaignName === selected.CampaignName?item.simg:item.img} alt={item.CampaignName}/>
                      <div className="flex flex-col space-y-1">
                        <p className="text-[#0B1A33]  text-md font-bold">{item.CampaignName}</p>
                        <p className="text-gray-500 text-xs">
                          {item.descripton}
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </div>
              )),
            ]}
          </div>
        </Card.Body>
      </Card>
      <div className="flex justify-end mt-3">
        <Button onPress={actions.incrementSteps}>Continue</Button>
      </div>
    </>
  );
};
