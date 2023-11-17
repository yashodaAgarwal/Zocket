import { Button, Card, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { useCommonStore } from "../../Store/store";
import { useEffect } from "react";
import campaignType from "../../constants/campaignType";

export const WhatObjective = ({ formData, setFormData }) => {
  // steps function to increase step on progress
  const { actions } = useCommonStore((state) => state.setSteps);
  const [selected, setSelected] = useState(campaignType[0]);

  useEffect(() => {
    setFormData({ ...formData, platform: campaignType[0]?.Platform });
  }, []);

  return (
    <>
      <Card variant="bordered" css={{ marginTop: "$20", padding: "$4" }}>
        <Card.Body>
          <Text className="font-bold text-md pb-2 border-b-2 border-gray-200 ">
            What you want to do?{" "}
            <span className="text-gray-400 ml-2 ">(Step 1 of 4)</span>
          </Text>

          <div className="campaign_categories p-3  pl-0 grid grid-cols-3 gap-3">
            {[
              campaignType.map((item, index) => (
                <div
                  key={index}
                  className={
                    item.CampaignName === selected.CampaignName
                      ? "border-2 border-blue-600 rounded-xl"
                      : " rounded-xl"
                  }
                  onClick={() => {
                    setSelected(item);
                    setFormData({ ...formData, platform: item.Platform });
                  }}
                >
                  <Card>
                    <Card.Body>
                      <div className="flex space-x-3 items-center">
                        <img
                          src={
                            item.CampaignName === selected.CampaignName
                              ? item.simg
                              : item.img
                          }
                          alt={item.CampaignName}
                        />
                        <div className="flex flex-col space-y-1">
                          <p className="text-[#0B1A33]  text-md font-bold">
                            {item.CampaignName}
                          </p>
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
