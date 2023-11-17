import { Badge, Checkbox, Switch } from "@nextui-org/react";
import React,{useState,useEffect} from "react";
import { DateTime } from "luxon";

import { BsFacebook } from "react-icons/bs";
import { FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";

// utility function to convert date string to readable date
const getFormattedDate = (date) => {
  return DateTime.fromISO(date).toFormat("dd LLL yyyy");
};

const Campaign = ({ data, onDelete }) => {
  const [render,setRender] = useState()
  useEffect(()=>{
    setRender("1")
    },[data])
  return (
    <div className="campaign_labels  flex border-b-2 border-gray-200 items-center    p-3 pb-3 mt-3">
      <div className="basis-[150px]  flex items-center space-x-3">
        <Checkbox color="primary"></Checkbox>
        <Switch size="xs" checked={data?.start} />
      </div>
      <div className="basis-[400px] flex space-x-2  items-center">
        <div className="w-[50px] h-[50px] ">
          <img
            className="w-full h-full object-cover rounded-md"
            src={data?.campaignImage}
            alt={data?.campaignTitle}
          />
        </div>

        <div>
          <p className="text-black text-md font-semibold">{data?.campaignTitle}</p>
          <p className=" text-xs text-gray-400">Created at {getFormattedDate(data?.createdAt)}</p>
        </div>
      </div>
      <div className="basis-[400px] items-center flex text-md">
        {`${getFormattedDate(data?.startDate)} - ${getFormattedDate(data?.endDate)}`}{" "}
      </div>
      <div className="basis-[200px]  items-center flex ">{data?.clicks}</div>
      <div className="basis-[200px] items-center   flex">INR {data?.budget}</div>
      <div className="basis-[100px] items-center flex">{data?.location}</div>
      {/* Here I have used only two cases for platform, although we have to revamp all platforms according to api platform response */}
      <div className="basis-[200px] items-center text-center justify-center flex">
        {data?.platform == "FB" ? 
          <BsFacebook color="#1977F3" size={20} />
        :
          data?.platform == "Youtube" ?
          <FaYoutube color="red" size={20} />:data?.platform == "Google" ?<FaGoogle color="orange" size={20} />:<FaInstagram color="red" size={20}/>
        }
      </div>
      <div className="basis-[200px] items-center flex">
        <Badge color="success" size="lg" variant="flat">
          {data?.campaign_status}{" "}
        </Badge>
      </div>
      <div className="basis-[200px] items-center flex space-x-5">
        <FiEdit3 color="#0F6EFF" size={18} />
        <AiOutlineDelete
          className="cursor-pointer"
          color="#FC3F3F"
          onClick={() => onDelete(data.id)}
          size={18}
        />
      </div>
    </div>
  );
};

export default Campaign;
