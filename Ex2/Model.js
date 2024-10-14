class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
}

class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const newTask = new Task(description);
        this.tasks.push(newTask);
    }

    removeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    }

    toggleTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = !this.tasks[index].completed;
        }
    }

    getTasks() {
        return this.tasks;
    }
}

export default TaskModel;

            tasks.remove(index);
        }
    }

    public void toggleTask(int index) {
        if (index >= 0 && index < tasks.size()) {
            Task task = tasks.get(index);
            task.setCompleted(!task.isCompleted());
        }
    }

    public List<Task> getTasks() {
        return tasks;
    }
}
