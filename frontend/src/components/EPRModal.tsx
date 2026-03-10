import {useState} from "react"
import {api} from "../api/api"

export default function EPRModal({open,setOpen,person}:any){

const [rating,setRating]=useState(4)
const [remarks,setRemarks]=useState("")

if(!open) return null

const submit = async () => {

await api.post("/epr",{
 personId:person.id,
 evaluatorId:"22222222-2222-2222-2222-222222222221",
 roleType:"student",
 periodStart:"2025-04-01",
 periodEnd:"2025-06-01",
 overallRating:rating,
 technicalSkillsRating:rating,
 nonTechnicalSkillsRating:rating,
 remarks,
 status:"draft"
})

alert("EPR submitted successfully")

setOpen(false)

window.location.reload()

}

return(

<div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">

<div className="bg-white p-6 rounded-xl w-96">

<h2 className="text-lg font-semibold mb-4">
Create EPR
</h2>

<input
type="number"
min="1"
max="5"
value={rating}
onChange={(e:any)=>setRating(e.target.value)}
className="border w-full p-2 mb-3"
/>

<textarea
className="border w-full p-2 mb-4"
placeholder="Remarks"
value={remarks}
onChange={(e)=>setRemarks(e.target.value)}
/>

<button
onClick={submit}
className="bg-blue-600 text-white px-4 py-2 rounded"
>
Save
</button>

</div>

</div>

)

}