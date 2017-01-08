class TasksController < ApplicationController
  protect_from_forgery with: :exception
  
  def index 

  end
  
  def new 
    @user = User.find(current_user.id)
    @task = @user.tasks.new 
  end 

  def create 
    @task = current_user.tasks.new(task_params)
    if @task.save
    	render json:@task
    else 
    	redirect_to authenticated_root_path
    p current_user.tasks
    end
  end 


  private
  def task_params
    params.require(:task).permit(:name, :category_id, :complete, :user_id)
  end


end
