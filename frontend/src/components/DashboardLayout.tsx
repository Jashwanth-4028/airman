export default function DashboardLayout({children}:any){

return(

<div className="flex h-screen bg-gray-100">

{/* Sidebar */}

<div className="w-64 bg-slate-900 text-white p-6">

<h2 className="text-xl font-bold mb-6">
Skynet EPR
</h2>

<div className="space-y-4">

<p className="cursor-pointer hover:text-gray-300">
People Directory
</p>

<p
className="cursor-pointer hover:text-gray-300"
onClick={()=>alert("Performance analytics coming soon")}
>
Performance Records
</p>

</div>

</div>

{/* Main */}

<div className="flex-1 p-8 overflow-y-auto">

{children}

</div>

</div>

)

}