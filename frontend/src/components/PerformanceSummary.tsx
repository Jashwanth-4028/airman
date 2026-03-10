import {useEffect,useState} from "react"
import {api} from "../api/api"

export default function PerformanceSummary({personId}:any){

const [summary,setSummary]=useState<any>(null)

useEffect(()=>{

api.get(`/epr/summary/${personId}`)
.then(res=>setSummary(res.data))

},[personId])

if(!summary) return null

return(

<div className="bg-white rounded-xl shadow p-6 mb-6">

<h3 className="text-lg font-semibold mb-4">
Performance Snapshot
</h3>

<div className="grid grid-cols-4 gap-4 text-center">

<div>
<div className="text-xl font-bold">
{Number(summary.avg_overall).toFixed(1)}
</div>
<div className="text-sm text-gray-500">
Overall
</div>
</div>

<div>
<div className="text-xl font-bold">
{Number(summary.avg_technical).toFixed(1)}
</div>
<div className="text-sm text-gray-500">
Technical
</div>
</div>

<div>
<div className="text-xl font-bold">
{Number(summary.avg_nontechnical).toFixed(1)}
</div>
<div className="text-sm text-gray-500">
Non-Technical
</div>
</div>

<div>
<div className="text-xl font-bold">
{summary.total_reviews}
</div>
<div className="text-sm text-gray-500">
Reviews
</div>
</div>

</div>

</div>

)

}