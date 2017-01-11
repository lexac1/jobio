class BlocksController < ApplicationController
  protect_from_forgery with: :exception

  def sort
    params[:order].each do |key,value|
      Block.find(value[:id]).update_attribute(:priority,value[:position])
    end
    render :nothing => true
  end

  private
  def task_params
    params.require(:task).permit(:name, :category_id, :complete, :user_id)
  end

end
