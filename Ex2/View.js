import java.util.List;


interface TaskView {
    void showTasks(List<Task> tasks);
    String getNewTaskDescription();
    void clearTaskInput();
}


class ConsoleTaskView implements TaskView {
    @Override
    public void showTasks(List<Task> tasks) {
        System.out.println("Lista de Tarefas:");
        for (int i = 0; i < tasks.size(); i++) {
            Task task = tasks.get(i);
            System.out.println((i + 1) + ". " + task.getDescription() + " [Concluída: " + task.isCompleted() + "]");
        }
    }

    @Override
    public String getNewTaskDescription() {
        
        return "Nova Tarefa";  
    }

    @Override
    public void clearTaskInput() {
        
        System.out.println("Entrada de tarefa limpa.");
    }
}
