import Group from "@/app/components/Group";
import { useRouter } from "next/router";

const SplitBill:React.FC = () => {
    const router = useRouter();
    const groupId = Array.isArray(router.query.groupId)
    return(
        <div>
          hello world
        </div>
    )
}
export default SplitBill