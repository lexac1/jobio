class UsersController < ApplicationController
  protect_from_forgery with: :exception
  # protect_from_forgery unless: -> { request.format.json }
  # before_action :update_block, only: :update
  def show
    @user = User.find(current_user.id)
    blocks = Block.where(user_id: @user.id)
    @sorted = blocks.sort_by &:order
    p @sorted
    p '****************************'
    @tasks = Task.where(user_id: @user.id)
    @task = @user.tasks.new
  end

  def edit
  end

  def create
    p "Created"
  end

  def update
    # will be array of block id's
    # update the order property of each block
    # [1,0,3,2,4]
    # p "In the route"
    # p params
    # p "*" * 100
    if request.xhr?
      

      front_end_blocks = JSON.parse(params[:blocks])
       
        front_end_blocks.each do |i|
          block = Block.find(i["id"])
          block.update(order: i["order"])
        end  
      
      
        
           
        

        
        
     
       

      

    
      
      

    #     p block[1].id
    #     p block[1].order
         # block = Block.find(block[1].id)
         # block.update(order: block[1].order)
    #     #  block.save
      
    #     # block = Block.find(item.to_i)
    #     # block.update(order: index + 1)
    #   #   # block.save
    #     block = Block.find(1)
    #     block.update(order: 10)
    end
    redirect_to authenticated_root_path

  end

  private

  # def update_block
  #   params.require(:blocks).permit
  # end

end
