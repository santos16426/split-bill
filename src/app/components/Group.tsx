import { Plus } from "lucide-react"
import { useAppContext } from "../context/AppContext"
import AddGroupModal from "./AddGroup";
import { useEffect } from "react";
const Group:React.FC = () => {
    const {groupContext} = useAppContext();
    useEffect(()=>{
        console.log(groupContext)
    },[groupContext])
    return(
        <div className="bg-white bg-opacity-30 w-full p-5 rounded-lg shadow-md flex flex-row gap-5">
            <AddGroupModal triggerNode={
                <div className="flex flex-col justify-center">
                    <button className="flex flex-col justify-center items-center text-black border-2 border-teal-600 rounded-full p-2 w-28 h-28 bg-muted shadow-lg">
                        <Plus size={50}/>
                    </button>
                    <p className="text-center text-sm">Add Group</p>
                </div>
            }/>
            {groupContext.groups && groupContext.groups?.length > 0 && groupContext.groups.map((group, index) => {
                return(
                    <div key={index} className="flex flex-col justify-center">
                        <button 
                            style={{
                                backgroundImage: 
                                `url(${group.type === 'group'? 'https://imgs.search.brave.com/6nkKkT1M33qblN9jtKoGsqrvqvTBamyxbCKqFAHXBks/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MS8xMC8wNS80Ni9n/cm91cC0yOTM1NTIx/XzY0MC5wbmc'
                                :group.type === 'home' ? 'https://cdn.pixabay.com/photo/2015/12/28/02/58/home-1110868_1280.png' : 'https://media.istockphoto.com/id/1457584769/vector/romantic-man-and-woman-with-tattoo-in-form-of-half-heart-on-hands-symbolizing-love-vector.jpg?s=612x612&w=0&k=20&c=gTkMx1EDjeBJ4vPS8sbVdRtXSZeE3N6Vhvo9HMWHLvc='
                                })`,
                                backgroundSize:'cover',
                                backgroundPosition:'center'
                            }}
                            className="flex flex-col justify-center items-center text-black border-2 border-teal-600 rounded-full p-2 w-28 h-28 bg-muted shadow-lg"
                        />
                        <p className="text-center text-sm">{group.members}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Group