class TasksController < ApplicationController
  protect_from_forgery with: :exception
  
  def index 

  end
  
  def new 
    @user = User.find(current_user.id)
    @task = @user.tasks.new 
  end 

  def create 
    @user = User.find(current_user.id)
    @task = @user.tasks.new(task_params)
    if @task.save && request.xhr?
    	render json:@task
    else render "new"
    end	
  end 

  def show 

  end 

  def edit 

  end 

  def update 

  end 

  def destroy

  end 	

  private
  def task_params
    params.require(:task).permit(:name, :user_id, :category_id, :complete)
  end


end
