import { type Dispatch, type SetStateAction } from "react";
import type { IdevStack } from "../../DevType";
import { toast } from "react-toastify";

interface IdevStackProps {
  devStacks: IdevStack;
  card:IdevStack[];
  setCard:Dispatch<SetStateAction<IdevStack[]>>
  
}

const Cards = ({ devStacks, card, setCard }: IdevStackProps) => {

  //const [Cbutton,setCbutton]=useState(false);

 const handleCard = ( ) =>{
   //setCbutton(true);
   
    

    setCard([...card,devStacks] );
    //console.log(devStacks.name);
    toast.success("Added Successfully");

 }

 const isAdded = card.some(item => item.name === devStacks.name);

  return (
    <div>
      <div className="w-80 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

        {/* Top */}
        <div className="flex items-start justify-between">
          <img
            src={devStacks.icon}
            alt={devStacks.name}
            className="h-12 w-12"
          />

          <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-500">
            {devStacks.badge}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-2xl font-bold text-gray-900">
          {devStacks.name}
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-500">
          {devStacks.description}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-gray-100"></div>

        {/* Info */}
        <div className="flex items-center justify-between gap-2">

          <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-500">
            {devStacks.category}
          </span>

          <span className="text-sm text-gray-500">
            {devStacks.difficulty}
          </span>

          <span className="text-sm font-semibold text-gray-700">
            ⭐ {devStacks.rating}
          </span>

        </div>

        {/* Button */}
        <button className={`mt-6 w-full rounded-xl bg-[#080d1c]  py-3 text-sm font-medium text-white hover:bg-gray-800`}
         onClick={handleCard}
          disabled={isAdded=== true ? true:false}>
          {isAdded ? "Added" : "Add to Stack"}
        </button>

      </div>
    </div>
  );
};

export default Cards;