import { Button, Card, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { DatePicker } from "antd";
import { Slider } from "antd";
import { GiMoneyStack } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
import { useCommonStore } from "../../Store/store";

export const CampaignSettings = ({ formData, setFormData }) => {
  const { actions } = useCommonStore((state) => state.setSteps);
  const [location, setLocation] = useState(true);
  return (
    <>
      <div className="flex justify-between items-end">
        <Card
          variant="bordered"
          css={{ marginTop: "$20", padding: "$1", maxWidth: "50%" }}
        >
          <Card.Body>
            <Text className="font-bold text-md pb-2 border-b-2 border-gray-200 ">
              Campaign Settings
              <span className="text-gray-400 ml-2 ">(Step 3 of 4)</span>
            </Text>
            <div className="budget_section py-2 px-4 flex flex-col space-y-4">
              <div className="flex space-x-2 items-center">
                <div className="first w-[30px] h-[30px] bg-[#0F6EFF] rounded-full text-white flex justify-center items-center">
                  1
                </div>
                <Text
                  h5
                  className="underline text-sm flex m-0 items-center justify-center"
                >
                  Budget and dates info
                </Text>
              </div>
              <div className="budget_timeline pl-8 ml-4 border-l-2 flex flex-col space-y-2 border-blue-200">
                <div className="dates flex space-x-2 pt-3">
                  <div className="basis-1/2">
                    <p className="text-sm mb-2">Start Date</p>
                    <DatePicker
                      className="w-full"
                      onChange={(date) =>
                        setFormData({
                          ...formData,
                          startDate: date.$d.toISOString(),
                        })
                      }
                      size="large"
                    />
                  </div>
                  <div className="basis-1/2">
                    <p className="text-sm mb-2">End Date</p>
                    <DatePicker
                      className="w-full"
                      onChange={(date) =>
                        setFormData({
                          ...formData,
                          endDate: date.$d.toISOString(),
                        })
                      }
                      size="large"
                    />
                  </div>
                </div>
                <div className="campaign_budget pt-3">
                  <div className="flex justify-between">
                    <Text h4 className="text-sm text-gray-300">
                      Enter Campaign Budget
                    </Text>
                    <div className="flex items-center">
                      <GiMoneyStack color="blue" size={15} />
                      {/* the currencies to be fetched from api response */}
                      <span className="text-xs">INR</span>
                      <AiFillCaretDown />
                    </div>
                  </div>
                  <Slider
                    defaultValue={30}
                    min={100}
                    max={100000}
                    value={formData.budget}
                    onChange={(value) =>
                      setFormData({ ...formData, budget: value })
                    }
                  />
                  <div className="flex justify-between">
                    <p className="text-xs">100</p>
                    <p className="text-xs">1,00,000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="budget_section py-2 px-4 flex flex-col space-y-4">
              <div className="flex space-x-2 items-center">
                <div className="first w-[30px] h-[30px] bg-[#0F6EFF] rounded-full text-white flex justify-center items-center">
                  2
                </div>
                <Text
                  h5
                  className="underline text-sm flex m-0 items-center justify-center"
                >
                  Location info
                </Text>
              </div>
              <div className="budget_timeline pl-8 ml-4 border-l-2 flex flex-col space-y-2 border-blue-200">
                <Text h4 className="text-gray-100 text-sm mb ">
                  Location type
                </Text>
                <div className="budget_switch rounded-3xl text-sm w-1/2 bg-gray-200 flex ">
                  <div
                    className={
                      location
                        ? "bg-[#0F6EFF] basis-1/2 text-center p-2 text-white  rounded-3xl"
                        : "basis-1/2 text-center p-2"
                    }
                    onClick={() => setLocation(true)}
                  >
                    Location
                  </div>
                  <div
                    className={
                      !location
                        ? "bg-[#0F6EFF] basis-1/2 text-center p-2 text-white  rounded-3xl"
                        : "basis-1/2 text-center p-2"
                    }
                    onClick={() => setLocation(false)}
                  >
                    Radius
                  </div>
                </div>
                {location ? (
                  <div className="dates flex space-x-2 pt-3">
                    <div className="">
                      <p className="text-sm mb-2">Select Location</p>
                      <input
                        className="border-2 width-100 py-2 px-4 rounded-xl"
                        type="text"
                        placeholder="Select a place name,address or coordinates"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <div className="campaign_budget pt-3">
                    <div className="flex justify-between">
                      <Text h4 className="text-sm text-gray-300">
                        Select target radius
                      </Text>
                    </div>
                    <Slider
                      defaultValue={24}
                      min={1}
                      max={30}
                      value={formData.location}
                      onChange={(value) =>
                        setFormData({ ...formData, location: value })
                      }
                    />
                    <div className="flex justify-between">
                      <p className="text-xs">1</p>
                      <p className="text-xs">30</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card.Body>
        </Card>
        <div className="flex justify-end">
          <Button onPress={actions.incrementSteps}>Continue</Button>
        </div>
      </div>
    </>
  );
};
