import {useEffect,useState} from "react"
import {api} from "../api/api"
import PersonPanel from "../components/PersonPanel"

export default function PeopleDirectory(){

const [people,setPeople]=useState([])
const [selected,setSelected]=useState<any>(null)
const [search,setSearch]=useState("")

useEffect(()=>{

api.get("/people").then(res=>{
setPeople(res.data)
})

},[])

const filtered=people.filter((p:any)=>
p.name.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="grid grid-cols-3 gap-6">

{/* LEFT LIST */}

<div className="bg-white rounded-xl shadow p-4">

<h2 className="text-lg font-semibold mb-4">
People Directory
</h2>

<input
className="border w-full p-2 mb-4 rounded"
placeholder="Search..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="space-y-2">

{filtered.map((p:any)=>(

<div
key={p.id}
onClick={()=>setSelected(p)}
className={`p-3 border rounded cursor-pointer hover:bg-gray-100 
${selected?.id === p.id ? "bg-blue-50 border-blue-400" : ""}`}
>

<div className="font-medium">{p.name}</div>

<div className="text-sm text-gray-500">{p.role}</div>

</div>

))}

</div>

</div>

{/* RIGHT PANEL */}

<div className="col-span-2">

{selected && <PersonPanel person={selected}/>}

</div>

</div>

)

}