import { Avatar, Button, Card, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { useCommonStore } from "../../Store/store";
import { useHistory } from "react-router-dom";

const Ready = ({ formData, setFormData }) => {
  const { state, actions } = useCommonStore((state) => state.allCampaigns);
  const history = useHistory();
  const [selected, setSelected] = useState(state?.allCampaigns?.[0]);

  const handleStartCampaign = () => {
    actions.addNewCampaign(formData);
    // Redirect to the homepage
    history.push("/");
  };

  return (
    <>
      <Card variant="bordered" css={{ marginTop: "$20" }}>
        <Card.Body css={{ padding: "$5" }}>
          <Text className="font-bold text-md pb-2 border-b-2 border-gray-200 ">
            Ready to go
            <span className="text-gray-400 ml-2 ">(Step 4 of 4)</span>
          </Text>
          <div className="product_categories p-3  pl-0 grid grid-cols-4 gap-3">
            {state?.allCampaigns?.map((item, index) => (
              <div
                key={index}
                className={
                  index == selected
                    ? "border-2 border-blue-600 rounded-xl"
                    : " rounded-xl"
                }
                onClick={() => setSelected(index)}
              >
                <Card isPressable isHoverable variant="bordered">
                  <Card.Body>
                    <div className="ad_header flex space-x-3 items-center">
                      <Avatar
                        src="https://dummyimage.com/300x200/333/fff"
                        css={{ size: "$12" }}
                      />
                      <div className="ad_name flex flex-col ">
                        <Text
                          className="text-md font-semibold "
                          color="#2B23A5"
                        >
                          Mukund Cake Shop
                        </Text>
                        <Text className="text-gray-300 text-xs flex  items-center">
                          Sponsored
                          <span>
                            <FaGlobeAmericas
                              color="#90949C"
                              size={10}
                              className="ml-2"
                            />
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="ad_content mt-3">
                      <p className="text-black font-semibold text-sm">
                        We are the best bakery around you.<br></br> Please like
                        my page to get updates on exciting offers and discounts
                      </p>
                    </div>

                    <div className="ad_image mt-2 bg-red-200 h-[120px]">
                      <img
                        src={item.campaignImage.url}
                        className="h-full w-full object-cover"
                        alt="cake_image"
                      />
                    </div>
                    <div className="ad_actions p-2 flex justify-between items-center bg-[#F5F5F5]">
                      <Text className="text-md font-semibold " color="#2B23A5">
                        Mukund Cake Shop
                      </Text>{" "}
                      <button className="bg-[#F5F5F5] p-1 px-5 border-2 flex space-x-1 items-center">
                        <AiFillLike color="#4B4F56" />
                        <span>Like</span>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
      <div className="flex justify-end mt-3">
        <Button onPress={handleStartCampaign}>Start Campaign</Button>
      </div>
    </>
  );
};

export default Ready;
