import Group from "@/app/components/Group";
import { useAppContext } from "@/app/context/AppContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SplitBill:React.FC = () => {
    const router = useRouter();
    const {groupContext} = useAppContext();
    const groupId = router.query.groupId;
    let groupIdAsInt: number | undefined;
    
    if (groupId) {
      groupIdAsInt = parseInt(Array.isArray(groupId) ? groupId[0] : groupId);
    }

    if(groupContext.groups?.filter((group)=> group.id === groupIdAsInt).length === 0) return <><div className="w-full  flex flex-col justify-center items-center text-3xl font-bold">Group Not Found!</div></>
    return(
        <div>
          {groupId} hello world
        </div>
    )
}
export default SplitBill