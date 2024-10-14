public class Main {
    public static void main(String[] args) {
        TaskModel model = new TaskModel();
        TaskView view = new ConsoleTaskView();
        TaskPresenter presenter = new TaskPresenter(view, model);


        presenter.addTask(); 
        presenter.updateView(); 

      
        presenter.toggleTask(0); 
        presenter.updateView(); 

        presenter.removeTask(0); 
        presenter.updateView(); 
    }
}
