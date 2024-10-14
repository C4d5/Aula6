class TaskPresenter {
    private TaskView view;
    private TaskModel model;

    public TaskPresenter(TaskView view, TaskModel model) {
        this.view = view;
        this.model = model;
    }

    public void addTask() {
        String description = view.getNewTaskDescription();
        model.addTask(description);
        view.clearTaskInput();
        updateView();
    }

    public void removeTask(int index) {
        model.removeTask(index);
        updateView();
    }

    public void toggleTask(int index) {
        model.toggleTask(index);
        updateView();
    }

    public void updateView() {
        view.showTasks(model.getTasks());
    }
}
