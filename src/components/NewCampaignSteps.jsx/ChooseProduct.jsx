import { Button, Card, Text } from "@nextui-org/react";
import React,{useState,useEffect} from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {useCommonStore} from "../../Store/store";

export const ChooseProduct = ({formData,setFormData}) => {
  const {actions} = useCommonStore((state) => state.setSteps);
  const [products, setProducts] = useState([{
    id:9875,
    imgLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ll6gG_Ce03bXBCjBUF5tjpwOGNXcRPVW_w&usqp=CAU",
    name:"Bluberry cake with raw toppings",
    price:"2,290",
  },
  {
    id:9876,
    imgLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAtw9JL_9cqFo2pQXRWntmj1uIbdVWqzUVg&usqp=CAU",
    name:"Chocolate truffle cake",
    price:"2,190",
  },
  {
    id:9877,
    imgLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZpAdK8EeXJ6RYibRScyHC5AWYo9uZhORWQ&usqp=CAU",
    name:"Browine cake with fluffy cream",
    price:"1,222",
  },
  {
    id:9878,
    imgLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhISt8aDeYzI6tOr0fPiB5TeOCjLn0kUs9A&usqp=CAU",
    name:"Ferro rocher cake",
    price:"1,200",
  },
  {
    id:989,
    imgLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SuM1C_hSZg6xA8Tt3itbvsNhjlx8rY38Sg&usqp=CAU",
    name:"Custurd mixed with fruit cake",
    price:"2,500",
  }]);
  const [selected,setSelected] = useState(products[0])
  useEffect(()=>{
    setFormData({...formData,campaignImage:products[0]?.imgLink,campaignTitle:products[0]?.name,id:products[0]?.id})
  },[])

  return (
    <>
      <Card variant="bordered" css={{ marginTop: "$20", padding: "$4" }}>
        <Card.Body>
          <Text className="font-bold text-md pb-2 border-b-2 border-gray-200 ">
            Choose the Product<span className="text-gray-400 ml-2 ">(Step 2 of 4)</span>
          </Text>

          <div className="product_categories p-3  pl-0 grid grid-cols-3 gap-3 mt-2">
            {[
              products?.map((item, index) => (
                <div key={index} className={item.name === selected.name? "border-2 border-blue-600 rounded-xl":" rounded-xl"} 
                onClick={()=>{setSelected(item);
                  setFormData((prev)=>({...prev,campaignImage:item.imgLink,campaignTitle:item.name,id:item.id}))
                }}>
                <Card isPressable isHoverable>
                  <Card.Body>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-[50px] h-[50px]">
                          <img
                            src={item.imgLink}
                            className="h-full w-full rounded-md"
                            alt="img"
                          />
                        </div>
                        <div className="flex flex-col ">
                          <h6 className="text-black font-bold m-0">{item?.name}</h6>
                          <p className="text-gray-400 text-sm">Rs :{item.price}</p>
                        </div>
                      </div>
                      <AiOutlineCheckCircle color={item.name === selected.name && "blue"}/>
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
