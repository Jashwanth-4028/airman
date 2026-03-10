import { useEffect, useState } from "react"
import { api } from "../api/api"
import EPRModal from "./EPRModal"
import PerformanceSummary from "./PerformanceSummary"

export default function PersonPanel({ person }: any) {

    const [eprs, setEprs] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {

        api.get(`/epr?personId=${person.id}`)
            .then(res => setEprs(res.data))

    }, [person])

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-xl font-semibold">
                        {person.name}
                    </h2>

                    <p className="text-gray-500">{person.role}</p>

                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition shadow-sm"
                >
                    New EPR
                </button>

            </div>
            <PerformanceSummary personId={person.id} />
            <div className="space-y-3">

                {eprs.map((e: any) => (

                    <div
                        key={e.id}
                        className="border border-gray-200 p-5 rounded-lg flex justify-between items-center 
shadow-sm hover:shadow-md transition"
                    >

                        <div>

                            <div className="font-medium">
                                {new Date(e.period_start).toLocaleDateString()} →
                                {new Date(e.period_end).toLocaleDateString()}
                            </div>

                            <div className="text-sm text-gray-500">
                                Rating: {e.overall_rating}
                            </div>

                            <div className="text-sm text-gray-600 mt-1">
                                <strong>Remarks:</strong> {e.remarks}
                            </div>

                        </div>

                        <div className="flex gap-2">

                            <div className="flex items-center gap-3">

                                <span className={`text-xs px-3 py-1 rounded-full font-medium
${e.status === "draft"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-green-100 text-green-700"}
`}>
                                    {e.status}
                                </span>

                                {e.status === "draft" && (

                                    <button
                                        className="bg-green-500 text-white text-sm px-4 py-1.5 rounded-md hover:bg-green-600 transition"
                                        onClick={async () => {

                                            await api.patch(`/epr/${e.id}/status`, {
                                                status: "submitted"
                                            })

                                            window.location.reload()

                                        }}
                                    >
                                        Submit
                                    </button>

                                )}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            <EPRModal open={open} setOpen={setOpen} person={person} />

        </div>

    )

}