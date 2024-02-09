"use client"
import { TasksContext } from "@/context/TasksContext";
import { TaskProps, GetAllTaks, formatDate, DeleteTask, updateTask } from "@/services/api";
import { FormEvent, ReactEventHandler, useContext, useEffect, useState } from "react";
import { MdModeEditOutline, MdDelete  } from "react-icons/md";

export const Tasks = () => {
  const {tasks, setTasks} = useContext(TasksContext)
  const [newTitle, setNewTitle] = useState('')

  async function handleDelete(id: number){
    await DeleteTask(id)
    await GetAllTaks(setTasks);
  }
  async function handleUpdate(id:number, newStatus: string){
    
    const task:TaskProps = tasks.find( (task: TaskProps) => task.id === id)
    if(!task){
      return alert('Taréfa não encontrada!')
    }
    task.status = newStatus
    await updateTask(task,setTasks)
  }

  async function handleUpdateTitle(){
    setNewTitle('A')
  }

  useEffect(()=>{
    GetAllTaks(setTasks)
    console.log(1)
  },[])

  return (
    <div className="w-full">
      <table className="w-10/12 mx-auto border-spacing-2">

        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Criada em</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody className="text-gray-900">

          {tasks?.length === 0 || tasks === undefined ? <tr><td><p className="text-white">Sem Tarefas</p>:</td></tr>:tasks.map((task: TaskProps)=>(
            <tr key={task.id} className="bg-white text-center rounded-sm shadow-md mb-5">
              {newTitle === ''? <td>{task.title}</td>: 'a'}
              <td>{formatDate(task.created_at)}</td>
              <td>
                <select 
                  value={task.status}
                  onChange={(event)=> handleUpdate(task.id, event.target.value)} 
                  className=" from-neutral-600 "
                >
                  <option className="" value="pendente">Pendente</option>
                  <option className="" value="em andamento">Em andamento</option>
                  <option className="" value="concluida">Concluída</option>
                </select>
              </td>

              <td className="flex justify-center gap-2">
                <button onClick={()=> handleUpdateTitle}><MdModeEditOutline  size={30} color="orange" /></button>
                <button onClick={()=> handleDelete(task.id)}><MdDelete size={30} color="red" /></button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  )
}