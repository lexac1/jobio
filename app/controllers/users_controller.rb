class UsersController < ApplicationController
  protect_from_forgery with: :exception

  def show
    @user = User.find(current_user.id)
    blocks = Block.where(user_id: @user.id)
    @sorted = blocks.sort_by &:order
    @tasks = Task.where(user_id: @user.id)
    @task = @user.tasks.new
  end

  def edit
  end

  def update
    # will be array of block id's
    # update the order property of each block
    # [1,0,3,2,4]
    if request.xhr?
      front_end_blocks = params[:blocks]
      front_end_blocks.each_with_index do |item, index|
        block = Block.find(item)
        block.update(order: index)
      end
      render 'users/show'
    end

  end


end
