class UsersController < ApplicationController
  protect_from_forgery with: :exception
  # protect_from_forgery unless: -> { request.format.json }
  # before_action :update_block, only: :update
  def index

  end
   

  def show
    @user = User.find(current_user.id)
    @blocks = @user.blocks
    if !@blocks.any? 
        Block.create(category_id: 1, due: 'Sat, 19 Nov 2011 18:54:13', priority: 1, user_id: @user.id)
        Block.create(category_id: 2, due: 'Sat, 19 Nov 2011 18:54:13', priority: 2, user_id: @user.id)
        Block.create(category_id: 3, due: 'Sat, 19 Nov 2011 18:54:13', priority: 3, user_id: @user.id)
        Block.create(category_id: 4, due: 'Sat, 19 Nov 2011 18:54:13', priority: 4, user_id: @user.id)
        Block.create(category_id: 5, due: 'Sat, 19 Nov 2011 18:54:13', priority: 5, user_id: @user.id)  
     end   
    @tasks = Task.where(user_id: @user.id)
    @task = @user.tasks.new
  end

  def update


  end  
 

  private

  def task_params
    params.require(:blocks).permit(:user_id, :chategory_id, :due, :priority)
  end

end
