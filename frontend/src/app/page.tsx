import { Form } from "@/components/Form";
import { Tasks } from "@/components/Tasks";
import { TasksProvider } from "@/context/TasksContext";

export default function Home() {
  return (
    <main className="bg-slate-800 h-screen border text-white px-10 py-12 flex flex-col items-center gap-10">
      <TasksProvider>
        <Form />
        <Tasks />
      </TasksProvider>
    </main>
  );
}
