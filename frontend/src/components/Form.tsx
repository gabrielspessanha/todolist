"use client"
import { TasksContext } from "@/context/TasksContext"
import { CreateTask, GetAllTaks } from "@/services/api"
import { FormEvent, useContext, useRef } from "react"

export const Form = () => {
  const {setTasks} = useContext(TasksContext)
  const titleRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async(event: FormEvent)=>{
    event.preventDefault()
    
    if (titleRef.current){
      CreateTask(titleRef.current.value, setTasks)
      titleRef.current.value = ""
    }
  }

  return (
    <div className="w-7/12">
      <form onSubmit={handleSubmit} className="flex flex-col  ">
        <label htmlFor="task">NOVA TASK: </label>
        <input type="text" className="border py-2 rounded-sm text-black focus:outline-none px-2" required ref={titleRef} />
        <button type="submit" className="bg-orange-400 font-semibold px-2 py-1 mt-5 rounded-sm  text-zinc-100 ease-in-out duration-300 hover:scale-105">Enviar</button>
      </form>
     
    </div>
  )
}