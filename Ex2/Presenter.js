class TaskPresenter {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        
        this.updateView();
    }

    addTask(description) {
        this.model.addTask(description);
        this.updateView();
    }

    removeTask(index) {
        this.model.removeTask(index);
        this.updateView();
    }

    toggleTask(index) {
        this.model.toggleTask(index);
        this.updateView();
    }

    updateView() {
        this.view.showTasks(this.model.getTasks());
    }
}

export default TaskPresenter;
