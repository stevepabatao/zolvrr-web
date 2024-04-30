import { Button } from "@/components/ui/button";
import Properties2 from "./Properties2";

const Explore = () => {
  return (
    <div>
      <div className="text-center p-6 mt-16">
        <Properties2 />
      </div>
      <div className="text-center p-6 ">
        <Button type="submit" className=" housal-button text-lg">CLICK FOR MORE</Button>
      </div>
    </div>
  )
}

export default Explore