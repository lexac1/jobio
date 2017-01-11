class UsersController < ApplicationController
  protect_from_forgery with: :exception
  # protect_from_forgery unless: -> { request.format.json }
  # before_action :update_block, only: :update
  def index

  end

  def show
    @user = User.find(current_user.id)
    @blocks = @user.blocks
    @tasks = Task.where(user_id: @user.id)
    @task = @user.tasks.new
  end

  def sort
    params[:order].each do |key,value|
      Block.find(value[:id]).update_attribute(:priority,value[:position])
    end
    render :nothing => true
  end

  def next
    p "next block"
  end

  private

  def task_params
    params.require(:blocks).permit(:user_id, :chategory_id, :due, :priority)
  end

end
