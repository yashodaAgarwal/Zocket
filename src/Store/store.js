// CommonStoreContext.js
import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  steps: 1,
  allCampaigns: [
    {
      budget: 1000,
      campaignTitle: "Dummy Campaign 1",
      campaign_status: "Active",
      clicks: 500,
      endDate: "2023-12-31",
      id: "1",
      location: "West Bengal",
      campaignImage: "https://dummyimage.com/300x200/000/fff",
      platform: "Platform 1",
      start: true,
      startDate: "2023-11-01",
      createdAt: "2023-01-01T00:00:00.000Z",
    },
    {
      budget: 1000,
      campaignTitle: "Dummy Campaign 2",
      campaign_status: "Active",
      clicks: 500,
      endDate: "2023-12-31",
      id: "2",
      location: "West Bengal",
      campaignImage: "https://dummyimage.com/300x200/000/fff",
      platform: "Platform 1",
      start: false,
      startDate: "2023-01-01",
      createdAt: "2023-01-01T00:00:00.000Z",
    },
    {
      budget: 1000,
      campaignTitle: "Dummy Campaign 3",
      campaign_status: "Active",
      clicks: 500,
      endDate: "2023-10-31",
      id: "3",
      location: "West Bengal",
      campaignImage:"https://dummyimage.com/300x200/000/fff",
      platform: "facebook",
      start: false,
      startDate: "2023-01-01",
      createdAt: "2023-01-01T00:00:00.000Z",
    },
    // Add more dummy campaigns as needed
  ],
};

const CommonStoreContext = createContext();

export const useCommonStore = () => {
  return useContext(CommonStoreContext);
};

export const CommonStoreProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT_STEPS":
        return { ...state, steps: state.steps + 1 };
      case "SET_CAMPAIGNS":
        return { ...state, allCampaigns: [...state.allCampaigns,action.payload]};
        case "ADD_CAMPAIGN":
          return { ...state, allCampaigns: [...state.allCampaigns, action.payload]};
          case "DELETE_CAMPAIGN":
        // Filter out the campaign with the specified ID
        const updatedCampaigns = state.allCampaigns.filter(
          (campaign) => campaign.id !== action.payload
        );
        return { ...state, allCampaigns: updatedCampaigns };
      default:
        return state;
    }
  };

  const addNewCampaign = (formData) => {
    // Create a new campaign object
    const newCampaign = {
      budget: 1500,
      campaignTitle: "New Campaign",
      campaign_status: "Inactive",
      clicks: 700,
      endDate: "2023-11-30",
      id: (state.allCampaigns.length + 1).toString(), // Use a unique ID, you can adjust this logic as needed
      location: "Location",
      campaignImage:  "https://dummyimage.com/300x200/333/fff",
      platform: "facebook",
      start: false,
      startDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };

    // Dispatch an action to add the new campaign
    dispatch({ type: "ADD_CAMPAIGN", payload:formData });
  };

  const deleteCampaign = (campaignId) => {
    // Dispatch an action to delete the campaign with the specified ID
    dispatch({ type: "DELETE_CAMPAIGN", payload: campaignId });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    actions: {
      incrementSteps: () => dispatch({ type: "INCREMENT_STEPS" }),
      addNewCampaign: addNewCampaign,
      deleteCampaign: deleteCampaign,

    },
  };

  return (
    <CommonStoreContext.Provider value={value}>
      {children}
    </CommonStoreContext.Provider>
  );
};
