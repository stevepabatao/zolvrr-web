import { Button } from "@/components/ui/button";
import Properties from "./Properties";

const Explore = () => {
  return (
    <div>
         <div className="text-center p-6 mt-16">
            <Properties />
         </div>
        <div className="text-center p-6 ">
            <Button type="submit" className=" housal-button">CLICK FOR MORE</Button>
        </div>
    </div>
  )
}

export default Explore