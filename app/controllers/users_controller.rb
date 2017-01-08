class UsersController < ApplicationController
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
   @user = User.find(current_user.id)
   @task = @user.tasks.new
   @tasks = @user.tasks
  end 

  
end
