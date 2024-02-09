'use client'
import { useContext } from 'react';
import { TasksContext } from '@/context/TasksContext';

export interface TaskProps {
  id: number
  status: string
  title: string
  created_at: string
}
type TaskFunctionProps = (data: TaskProps[]) => void

export const formatDate = (dateUTC: string)=>{
  const date = new Date(dateUTC).toLocaleDateString()
  return date
}

export const GetAllTaks = async (setTasks: TaskFunctionProps)=>{
  const url = "http://localhost:3333/tasks"

  try{
    const response = await fetch(url)
    const data =await response.json()
    setTasks(data)
    return data
  }catch (error){
    console.error("Erro na requisição: ", error)
  }
}

export const CreateTask = async(title: string, setTasks: TaskFunctionProps)=>{
  const task = {title}
  try{
    const url = "http://localhost:3333/task"
    await fetch(url,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
  await GetAllTaks(setTasks);
  return 
  }catch (error){
    console.error('Error ao criar Taréfa:'+ error)
  }
}

export const updateTask = async({id, status, title}: TaskProps, setTasks: TaskFunctionProps)=>{
  const url = `http://localhost:3333/task/${id}`

  try{
    const updatedTask = await fetch(url,{
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({status, title})
    })
    console.log(updatedTask)
    GetAllTaks(setTasks)
    return
  }catch(error){
    console.error('Erro ao atualizar Taréfa: ', error)
  }
}

export const DeleteTask = async(id: number)=>{
  const url = `http://localhost:3333/task/${id}`
  try{
    await fetch(url,{
      method: 'DELETE',
    })
    return
  }catch (error){
    console.log('Erro ao deletar Tárefa:', error)
  }
}

