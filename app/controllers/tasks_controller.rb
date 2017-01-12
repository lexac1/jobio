class TasksController < ApplicationController
  protect_from_forgery with: :exception

  def index
    @tasks = Task.all
  end

  def new
    @user = User.find(current_user.id)
    @task = @user.tasks.new
  end

  def create
    @user = User.find(current_user.id)
    @task = @user.tasks.create(task_params)
    
  end  

  def update

    p 'in the update route'
    p params
    # @task = current_user.tasks.new(task_params)
    # if @task.save
    # 	render json:@task
    # else
    # 	redirect_to authenticated_root_path
    # p current_user.tasks
    # end
  end

  def update
     p params(:task)
  end  

  private
  def task_params
    params.require(:task).permit(:name, :category_id, :complete, :user_id)
  end


end
